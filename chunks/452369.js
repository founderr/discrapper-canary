var i = r(47120);
var a = r(442837),
    s = r(570140),
    o = r(699516),
    l = r(979651),
    u = r(414509),
    c = r(807031);
let d = {},
    f = {},
    _ = new Set();
function h() {
    (d = {}), (f = {});
}
function p() {
    h();
    let e = l.Z.getAllVoiceStates(),
        n = !1;
    for (let r of Object.values(e)) for (let e of Object.values(r)) null != e.channelId && (n = E(e.channelId, e.userId) || n);
    return n;
}
function m(e) {
    let { relationship: n } = e,
        r = l.Z.getVoiceStateForUser(n.id);
    return null != r && null != r.channelId && E(r.channelId, n.id);
}
function g(e) {
    let { voiceStates: n } = e,
        r = !1;
    return (
        n.forEach((e) => {
            if (null != e.oldChannelId) {
                var n, i;
                null != d[e.oldChannelId] && (null === (n = d[e.oldChannelId]) || void 0 === n || n.delete(e.userId), (r = !0)), null != f[e.oldChannelId] && (null === (i = f[e.oldChannelId]) || void 0 === i || i.delete(e.userId), (r = !0));
            }
            null != e.channelId && (r = E(e.channelId, e.userId) || r);
        }),
        r
    );
}
function E(e, n) {
    let r = !1,
        i = !1,
        a = new Set(d[e]),
        s = o.Z.isBlocked(n);
    s && !a.has(n) ? (a.add(n), (i = !0), (r = !0)) : !s && (r = a.delete(n)), 0 === a.size && r ? delete d[e] : r && (d[e] = a);
    let l = new Set(f[e]),
        c = o.Z.isIgnored(n);
    return c && !l.has(n) ? (l.add(n), (i = !0), (r = !0)) : !c && (r = l.delete(n)), 0 === l.size && r ? delete f[e] : r && (f[e] = l), i && u.Z.handleBlockedOrIgnoredUserVoiceChannelJoin(e, n), r;
}
class v extends a.ZP.Store {
    initialize() {
        this.waitFor(o.Z, l.Z);
    }
    getBlockedUsersForVoiceChannel(e) {
        var n;
        return (0, c.wC)({ location: 'VoiceChannelBlockedUserStore_getBlockedUsersForVoiceChannel' }) ? (null !== (n = d[e]) && void 0 !== n ? n : _) : _;
    }
    getIgnoredUsersForVoiceChannel(e) {
        var n;
        return (0, c.wC)({ location: 'VoiceChannelBlockedUserStore_getIgnoredUsersForVoiceChannel' }) ? (null !== (n = f[e]) && void 0 !== n ? n : _) : _;
    }
}
n.Z = new v(s.Z, {
    CONNECTION_OPEN: h,
    LOGOUT: h,
    OVERLAY_INITIALIZE: p,
    VOICE_STATE_UPDATES: g,
    RELATIONSHIP_ADD: m,
    RELATIONSHIP_REMOVE: m,
    RELATIONSHIP_UPDATE: m
});
