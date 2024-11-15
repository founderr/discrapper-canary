n(47120);
var r = n(442837),
    i = n(570140),
    a = n(699516),
    s = n(979651),
    o = n(414509),
    l = n(807031);
let u = {},
    c = {},
    d = new Set();
function f() {
    (u = {}), (c = {});
}
function _(e) {
    let { relationship: t } = e,
        n = s.Z.getVoiceStateForUser(t.id);
    return null != n && null != n.channelId && p(n.channelId, t.id);
}
function p(e, t) {
    let n = !1,
        r = !1,
        i = new Set(u[e]),
        s = a.Z.isBlocked(t);
    s && !i.has(t) ? (i.add(t), (r = !0), (n = !0)) : !s && (n = i.delete(t)), 0 === i.size && n ? delete u[e] : n && (u[e] = i);
    let l = new Set(c[e]),
        d = a.Z.isIgnored(t);
    return d && !l.has(t) ? (l.add(t), (r = !0), (n = !0)) : !d && (n = l.delete(t)), 0 === l.size && n ? delete c[e] : n && (c[e] = l), r && o.Z.handleBlockedOrIgnoredUserVoiceChannelJoin(e, t), n;
}
class h extends r.ZP.Store {
    initialize() {
        this.waitFor(a.Z, s.Z);
    }
    getBlockedUsersForVoiceChannel(e) {
        var t;
        return (0, l.wC)({ location: 'VoiceChannelBlockedUserStore_getBlockedUsersForVoiceChannel' }) ? (null !== (t = u[e]) && void 0 !== t ? t : d) : d;
    }
    getIgnoredUsersForVoiceChannel(e) {
        var t;
        return (0, l.wC)({ location: 'VoiceChannelBlockedUserStore_getIgnoredUsersForVoiceChannel' }) ? (null !== (t = c[e]) && void 0 !== t ? t : d) : d;
    }
}
t.Z = new h(i.Z, {
    CONNECTION_OPEN: f,
    LOGOUT: f,
    OVERLAY_INITIALIZE: function () {
        f();
        let e = s.Z.getAllVoiceStates(),
            t = !1;
        for (let n of Object.values(e)) for (let e of Object.values(n)) null != e.channelId && (t = p(e.channelId, e.userId) || t);
        return t;
    },
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e,
            n = !1;
        return (
            t.forEach((e) => {
                if (null != e.oldChannelId) {
                    var t, r;
                    null != u[e.oldChannelId] && (null === (t = u[e.oldChannelId]) || void 0 === t || t.delete(e.userId), (n = !0)), null != c[e.oldChannelId] && (null === (r = c[e.oldChannelId]) || void 0 === r || r.delete(e.userId), (n = !0));
                }
                null != e.channelId && (n = p(e.channelId, e.userId) || n);
            }),
            n
        );
    },
    RELATIONSHIP_ADD: _,
    RELATIONSHIP_REMOVE: _,
    RELATIONSHIP_UPDATE: _
});
