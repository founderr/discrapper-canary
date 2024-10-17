n(47120);
var r = n(442837),
    i = n(570140),
    a = n(699516),
    s = n(979651),
    o = n(807031),
    l = n(981631);
let u = {},
    c = new Set();
function d() {
    u = {};
}
function _(e) {
    let { relationship: t } = e;
    if (!(0, o.w)({ location: 'VoiceChannelBlockedUserStore_blockStateChange' })) return !1;
    if (t.type === l.OGo.BLOCKED) {
        let e = s.Z.getVoiceStateForUser(t.id);
        if (null != e && null != e.channelId) return E(e.channelId, t.id);
    }
    return !1;
}
function E(e, t) {
    let n = !1,
        r = new Set(u[e]),
        i = a.Z.isBlocked(t);
    return i && !r.has(t) ? (r.add(t), (n = !0)) : !i && (n = r.delete(t)), 0 === r.size && n ? delete u[e] : n && (u[e] = r), n;
}
class f extends r.ZP.Store {
    initialize() {
        this.waitFor(a.Z, s.Z);
    }
    getBlockedUsersForVoiceChannel(e) {
        var t;
        return (0, o.w)({ location: 'VoiceChannelBlockedUserStore_getBlockedUsersForVoiceChannel' }) ? (null !== (t = u[e]) && void 0 !== t ? t : c) : c;
    }
}
t.Z = new f(i.Z, {
    CONNECTION_OPEN: d,
    LOGOUT: d,
    OVERLAY_INITIALIZE: function () {
        if ((d(), !(0, o.w)({ location: 'VoiceChannelBlockedUserStore_open' }))) return !1;
        let e = s.Z.getAllVoiceStates(),
            t = !1;
        for (let n of Object.values(e)) for (let e of Object.values(n)) null != e.channelId && (t = E(e.channelId, e.userId) || t);
        return t;
    },
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e;
        if (!(0, o.w)({ location: 'VoiceChannelBlockedUserStore_voiceStateUpdates' })) return !1;
        let n = !1;
        return (
            t.forEach((e) => {
                if (null != e.oldChannelId && null != u[e.oldChannelId]) {
                    var t;
                    null === (t = u[e.oldChannelId]) || void 0 === t || t.delete(e.userId), (n = !0);
                }
                null != e.channelId && (n = E(e.channelId, e.userId) || n);
            }),
            n
        );
    },
    RELATIONSHIP_ADD: _,
    RELATIONSHIP_REMOVE: _
});
