n(47120), n(724458);
var i,
    s,
    a,
    l,
    r = n(442837),
    o = n(46973),
    c = n(570140),
    u = n(642047),
    d = n(189786),
    h = n(5192),
    p = n(592125),
    m = n(19780),
    _ = n(594174),
    f = n(979651),
    E = n(938475),
    g = n(981631),
    C = n(354459);
let I = new u.Z(),
    T = new u.Z(),
    x = new Set();
function S(e, t, n) {
    let i = new d.Z({
            userId: e.id,
            channelId: n
        }),
        s = (0, E.PH)(i, null != t ? t : g.ME, e.id);
    I.set(e.id, s);
    let a = {
        type: C.fO.USER,
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
    T.set(e.id, a);
}
function v(e) {
    let t = I.delete(e),
        n = T.delete(e),
        i = x.delete(e);
    return t || n || i;
}
function N() {
    var e;
    let t = m.Z.getChannelId();
    if (null == t) return !1;
    let n = null === (e = p.Z.getChannel(t)) || void 0 === e ? void 0 : e.getGuildId(),
        i = !1;
    return (
        x.forEach((e) => {
            if (null != f.Z.getVoiceStateForChannel(t, e)) {
                x.delete(e);
                return;
            }
            let s = _.default.getUser(e);
            null != s && ((i = !0), x.delete(e), S(s, n, t));
        }),
        i
    );
}
function A() {
    I.clear(), T.clear(), x.clear();
}
class Z extends (i = r.ZP.Store) {
    initialize() {
        this.waitFor(f.Z, _.default, p.Z, m.Z), this.syncWith([_.default], N);
    }
    get desyncedVoiceStatesCount() {
        return I.size();
    }
    getDesyncedUserIds() {
        return I.keys();
    }
    getDesyncedVoiceStates() {
        return I.values();
    }
    getDesyncedParticipants() {
        return T.values();
    }
}
(l = 'RTCConnectionDesyncStore'),
    (a = 'displayName') in (s = Z)
        ? Object.defineProperty(s, a, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (s[a] = l),
    (t.Z = new Z(c.Z, {
        CONNECTION_OPEN: function () {
            A();
        },
        VOICE_CHANNEL_SELECT: A,
        RTC_CONNECTION_STATE: function (e) {
            let { state: t, context: n } = e;
            if (n !== o.Yn.DEFAULT || t !== g.hes.DISCONNECTED) return !1;
            A();
        },
        VOICE_STATE_UPDATES: function (e) {
            let { voiceStates: t } = e,
                n = m.Z.getChannelId();
            return (
                null != n &&
                t.reduce((e, t) => {
                    let { userId: i, channelId: s } = t;
                    return (s === n && !!v(i)) || e;
                }, !1)
            );
        },
        RTC_CONNECTION_CLIENT_CONNECT: function (e) {
            let { userIds: t, guildId: n, channelId: i, context: s } = e;
            return (
                s === o.Yn.DEFAULT &&
                t.reduce((e, t) => {
                    if (null != f.Z.getVoiceStateForChannel(i, t)) return e;
                    let s = _.default.getUser(t);
                    return null == s ? (x.add(t), e) : (S(s, n, i), !0);
                }, !1)
            );
        },
        RTC_CONNECTION_CLIENT_DISCONNECT: function (e) {
            let { userId: t, context: n } = e;
            return n === o.Yn.DEFAULT && v(t);
        }
    }));
