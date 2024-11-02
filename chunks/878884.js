n(47120), n(724458);
var i,
    l,
    r,
    a,
    s = n(442837),
    o = n(46973),
    c = n(570140),
    u = n(642047),
    d = n(189786),
    h = n(5192),
    m = n(592125),
    p = n(19780),
    f = n(594174),
    g = n(979651),
    C = n(938475),
    x = n(981631),
    v = n(354459);
let _ = new u.Z(),
    I = new u.Z(),
    E = new Set();
function b(e, t, n) {
    let i = new d.Z({
            userId: e.id,
            channelId: n
        }),
        l = (0, C.PH)(i, null != t ? t : x.ME, e.id);
    _.set(e.id, l);
    let r = {
        type: v.fO.USER,
        user: e,
        id: e.id,
        streamId: null,
        voiceState: i,
        voicePlatform: null,
        speaking: !1,
        lastSpoke: 0,
        soundsharing: !1,
        ringing: !1,
        userNick: h.ZP.getName(t, n, e),
        localVideoDisabled: !1
    };
    I.set(e.id, r);
}
function S(e) {
    let t = _.delete(e),
        n = I.delete(e),
        i = E.delete(e);
    return t || n || i;
}
function Z() {
    var e;
    let t = p.Z.getChannelId();
    if (null == t) return !1;
    let n = null === (e = m.Z.getChannel(t)) || void 0 === e ? void 0 : e.getGuildId(),
        i = !1;
    return (
        E.forEach((e) => {
            if (null != g.Z.getVoiceStateForChannel(t, e)) {
                E.delete(e);
                return;
            }
            let l = f.default.getUser(e);
            null != l && ((i = !0), E.delete(e), b(l, n, t));
        }),
        i
    );
}
function T() {
    _.clear(), I.clear(), E.clear();
}
class N extends (i = s.ZP.Store) {
    initialize() {
        this.waitFor(g.Z, f.default, m.Z, p.Z), this.syncWith([f.default], Z);
    }
    get desyncedVoiceStatesCount() {
        return _.size();
    }
    getDesyncedUserIds() {
        return _.keys();
    }
    getDesyncedVoiceStates() {
        return _.values();
    }
    getDesyncedParticipants() {
        return I.values();
    }
}
(a = 'RTCConnectionDesyncStore'),
    (r = 'displayName') in (l = N)
        ? Object.defineProperty(l, r, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (l[r] = a),
    (t.Z = new N(c.Z, {
        CONNECTION_OPEN: function () {
            T();
        },
        VOICE_CHANNEL_SELECT: T,
        RTC_CONNECTION_STATE: function (e) {
            let { state: t, context: n } = e;
            if (n !== o.Yn.DEFAULT || t !== x.hes.DISCONNECTED) return !1;
            T();
        },
        VOICE_STATE_UPDATES: function (e) {
            let { voiceStates: t } = e,
                n = p.Z.getChannelId();
            return (
                null != n &&
                t.reduce((e, t) => {
                    let { userId: i, channelId: l } = t;
                    return (l === n && !!S(i)) || e;
                }, !1)
            );
        },
        RTC_CONNECTION_CLIENT_CONNECT: function (e) {
            let { userIds: t, guildId: n, channelId: i, context: l } = e;
            return (
                l === o.Yn.DEFAULT &&
                t.reduce((e, t) => {
                    if (null != g.Z.getVoiceStateForChannel(i, t)) return e;
                    let l = f.default.getUser(t);
                    return null == l ? (E.add(t), e) : (b(l, n, i), !0);
                }, !1)
            );
        },
        RTC_CONNECTION_CLIENT_DISCONNECT: function (e) {
            let { userId: t, context: n } = e;
            return n === o.Yn.DEFAULT && S(t);
        }
    }));
