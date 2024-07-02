t(724458), t(47120);
var r, u, l, i, c = t(286379), o = t(442837), a = t(570140), s = t(642047), d = t(797614), f = t(413402), C = t(189786), Z = t(5192), E = t(19780), g = t(594174), N = t(979651), h = t(938475), I = t(981631), T = t(354459);
let S = new s.Z(), _ = new s.Z(), m = !1;
function p(e) {
    let n = S.delete(e), t = _.delete(e);
    return n || t;
}
function y() {
    S.clear(), _.clear();
}
class O extends (r = o.ZP.Store) {
    initialize() {
        this.waitFor(N.Z, g.default, E.Z);
    }
    get desyncedVoiceStatesCount() {
        return S.size();
    }
    getDesyncedUserIds() {
        return S.keys();
    }
    getDesyncedVoiceStates() {
        return S.values();
    }
    getDesyncedParticipants() {
        return _.values();
    }
}
i = 'RTCConnectionDesyncStore', (l = 'displayName') in (u = O) ? Object.defineProperty(u, l, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : u[l] = i, n.Z = new O(a.Z, {
    CONNECTION_OPEN: function () {
        m = (0, f.i)(), y();
    },
    VOICE_CHANNEL_SELECT: y,
    RTC_CONNECTION_STATE: function (e) {
        let {state: n} = e;
        if (n !== I.hes.DISCONNECTED)
            return !1;
        y();
    },
    VOICE_STATE_UPDATES: function (e) {
        let {voiceStates: n} = e, t = E.Z.getChannelId();
        return null != t && n.reduce((e, n) => {
            let {
                userId: r,
                channelId: u
            } = n;
            return u === t && !!p(r) || e;
        }, !1);
    },
    RTC_CONNECTION_CLIENT_CONNECT: function (e) {
        let {
            userIds: n,
            guildId: t,
            channelId: r
        } = e;
        return n.reduce((e, n) => {
            if (null != N.Z.getVoiceStateForChannel(r, n))
                return e;
            let u = g.default.getUser(n);
            if (null == u)
                return m && d.Z.increment({ name: c.V.RTC_CONNECTION_DESYNC_STORE_UNKNOWN_USER }), e;
            let l = new C.Z({
                    userId: n,
                    channelId: r
                }), i = (0, h.PH)(l, null != t ? t : I.ME, n);
            S.set(n, i);
            let o = {
                type: T.fO.USER,
                user: u,
                id: u.id,
                streamId: null,
                voiceState: new C.Z({
                    userId: n,
                    channelId: r
                }),
                voicePlatform: null,
                speaking: !1,
                lastSpoke: 0,
                soundsharing: !1,
                ringing: !1,
                userNick: Z.ZP.getName(t, r, u),
                localVideoDisabled: !1
            };
            return _.set(n, o), !0;
        }, !1);
    },
    RTC_CONNECTION_CLIENT_DISCONNECT: function (e) {
        let {userId: n} = e;
        return p(n);
    }
});
