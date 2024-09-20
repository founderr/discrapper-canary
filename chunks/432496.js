var r,
    d,
    s = t(442837),
    i = t(570140),
    l = t(749210);
((r = d || (d = {}))[(r.NOT_FETCHED = 0)] = 'NOT_FETCHED'), (r[(r.FETCHING = 1)] = 'FETCHING'), (r[(r.FETCHED = 2)] = 'FETCHED');
let u = {},
    o = 0;
function a(e) {
    var n, t;
    return null !== (t = null === (n = u[e]) || void 0 === n ? void 0 : n.fetchState) && void 0 !== t ? t : 0;
}
function c() {
    u = {};
}
class m extends s.ZP.Store {
    isFetchingFriendsForGuild(e) {
        return 1 === a(e);
    }
    fetchFriendMembersIfNotFetched(e, n) {
        0 === a(e) &&
            ((u[e] = {
                fetchState: 1,
                foundMembers: 0,
                notFoundMembers: 0
            }),
            (o = n.length),
            l.Z.requestMembersById(e, n, !1));
    }
}
n.Z = new m(i.Z, {
    CONNECTION_OPEN: c,
    LOGOUT: c,
    RELATIONSHIP_ADD: c,
    RELATIONSHIP_REMOVE: c,
    GUILD_MEMBERS_CHUNK_BATCH: function (e) {
        var n, t;
        let r = e.chunks[0],
            { guildId: d } = r;
        1 === a(d) && ((u[d].foundMembers += r.members.length), (u[d].notFoundMembers += null !== (t = null === (n = r.notFound) || void 0 === n ? void 0 : n.length) && void 0 !== t ? t : 0), u[d].foundMembers + u[d].notFoundMembers >= o && (u[d].fetchState = 2));
    }
});
