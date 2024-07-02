n(724458), n(47120);
var r, o, i, l, u = n(442837), a = n(570140), c = n(642047), s = n(189786), d = n(5192), E = n(594174), f = n(979651), _ = n(938475), I = n(981631), C = n(354459);
let h = [], S = [], g = [], Z = new c.Z(), M = new c.Z(), N = null;
function m(e) {
    let t = Z.delete(e), n = M.delete(e);
    return t || n;
}
class R extends (r = u.ZP.Store) {
    initialize() {
        this.waitFor(f.Z, E.default);
    }
    get desyncedVoiceStatesCount() {
        return Z.size();
    }
    getDesyncedUserIds(e) {
        return e !== N ? g : Z.keys();
    }
    getDesyncedVoiceStates(e) {
        return e !== N ? h : Z.values();
    }
    getDesyncedParticipants(e) {
        return e !== N ? S : M.values();
    }
}
l = 'RTCConnectionDesyncStore', (i = 'displayName') in (o = R) ? Object.defineProperty(o, i, {
    value: l,
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : o[i] = l, t.Z = new R(a.Z, {
    CONNECTION_OPEN: function () {
        Z.clear(), M.clear();
    },
    RTC_CONNECTION_STATE: function (e) {
        let {
            state: t,
            channelId: n
        } = e;
        if (t !== I.hes.DISCONNECTED && N === n)
            return !1;
        N = n, Z.clear(), M.clear();
    },
    VOICE_STATE_UPDATES: function (e) {
        let {voiceStates: t} = e;
        return null != N && t.reduce((e, t) => {
            let {
                userId: n,
                channelId: r
            } = t;
            return null != r && r === N && !!m(n) || e;
        }, !1);
    },
    RTC_CONNECTION_CLIENT_CONNECT: function (e) {
        let {
            userIds: t,
            guildId: n,
            channelId: r
        } = e;
        return t.reduce((e, t) => {
            let o = f.Z.getVoiceStateForUser(t);
            if ((null == o ? void 0 : o.channelId) === r && r === N)
                return e;
            let i = E.default.getUser(t);
            if (null == i)
                return e;
            let l = new s.Z({
                    userId: t,
                    channelId: r
                }), u = (0, _.PH)(l, null != n ? n : I.ME, t);
            Z.set(t, u);
            let a = {
                type: C.fO.USER,
                user: i,
                id: i.id,
                streamId: null,
                voiceState: new s.Z({
                    userId: t,
                    channelId: r
                }),
                voicePlatform: null,
                speaking: !1,
                lastSpoke: 0,
                soundsharing: !1,
                ringing: !1,
                userNick: d.ZP.getName(n, r, i),
                localVideoDisabled: !1
            };
            return M.set(t, a), !0;
        }, !1);
    },
    RTC_CONNECTION_CLIENT_DISCONNECT: function (e) {
        let {userId: t} = e;
        return m(t);
    }
});
