n(47120), n(724458);
var i,
    a,
    s,
    l,
    r = n(442837),
    o = n(46973),
    c = n(570140),
    u = n(642047),
    d = n(189786),
    h = n(5192),
    m = n(592125),
    p = n(19780),
    _ = n(594174),
    f = n(979651),
    E = n(938475),
    C = n(981631),
    g = n(354459);
let I = new u.Z(),
    x = new u.Z(),
    T = new Set();
function N(e, t, n) {
    let i = new d.Z({
            userId: e.id,
            channelId: n
        }),
        a = (0, E.PH)(i, null != t ? t : C.ME, e.id);
    I.set(e.id, a);
    let s = {
        type: g.fO.USER,
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
    x.set(e.id, s);
}
function v(e) {
    let t = I.delete(e),
        n = x.delete(e),
        i = T.delete(e);
    return t || n || i;
}
function S() {
    var e;
    let t = p.Z.getChannelId();
    if (null == t) return !1;
    let n = null === (e = m.Z.getChannel(t)) || void 0 === e ? void 0 : e.getGuildId(),
        i = !1;
    return (
        T.forEach((e) => {
            if (null != f.Z.getVoiceStateForChannel(t, e)) {
                T.delete(e);
                return;
            }
            let a = _.default.getUser(e);
            null != a && ((i = !0), T.delete(e), N(a, n, t));
        }),
        i
    );
}
function Z() {
    I.clear(), x.clear(), T.clear();
}
class A extends (i = r.ZP.Store) {
    initialize() {
        this.waitFor(f.Z, _.default, m.Z, p.Z), this.syncWith([_.default], S);
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
        return x.values();
    }
}
(l = 'RTCConnectionDesyncStore'),
    (s = 'displayName') in (a = A)
        ? Object.defineProperty(a, s, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (a[s] = l),
    (t.Z = new A(c.Z, {
        CONNECTION_OPEN: function () {
            Z();
        },
        VOICE_CHANNEL_SELECT: Z,
        RTC_CONNECTION_STATE: function (e) {
            let { state: t, context: n } = e;
            if (n !== o.Yn.DEFAULT || t !== C.hes.DISCONNECTED) return !1;
            Z();
        },
        VOICE_STATE_UPDATES: function (e) {
            let { voiceStates: t } = e,
                n = p.Z.getChannelId();
            return (
                null != n &&
                t.reduce((e, t) => {
                    let { userId: i, channelId: a } = t;
                    return (a === n && !!v(i)) || e;
                }, !1)
            );
        },
        RTC_CONNECTION_CLIENT_CONNECT: function (e) {
            let { userIds: t, guildId: n, channelId: i, context: a } = e;
            return (
                a === o.Yn.DEFAULT &&
                t.reduce((e, t) => {
                    if (null != f.Z.getVoiceStateForChannel(i, t)) return e;
                    let a = _.default.getUser(t);
                    return null == a ? (T.add(t), e) : (N(a, n, i), !0);
                }, !1)
            );
        },
        RTC_CONNECTION_CLIENT_DISCONNECT: function (e) {
            let { userId: t, context: n } = e;
            return n === o.Yn.DEFAULT && v(t);
        }
    }));
