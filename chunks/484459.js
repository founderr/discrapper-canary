n.d(t, {
    Z: function () {
        return E;
    }
});
var r = n(570140),
    i = n(232567),
    a = n(220082),
    o = n(275759),
    s = n(365943),
    l = n(592125),
    u = n(271383),
    c = n(621853),
    d = n(120569);
let _ = 60000;
async function E(e, t) {
    var n, E, f, h;
    let { withMutualGuilds: p = !1, withMutualFriendsCount: m = !1, withMutualFriends: I = !1, friendToken: T, preloadUserBanner: g = !0, dispatchWait: S = !1, guildId: A, channelId: v, joinRequestId: N, abortSignal: O } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    if ('' === e || c.Z.isFetchingProfile(e, A)) return;
    let R = c.Z.getUserProfile(e),
        C = Date.now() - (null !== (h = null == R ? void 0 : R.lastFetched) && void 0 !== h ? h : 0) >= _;
    if (((null == R ? void 0 : null === (n = R.fetchError) || void 0 === n ? void 0 : n.status) === 404 || (null == R ? void 0 : null === (E = R.fetchError) || void 0 === E ? void 0 : E.status) === 429) && !C) return;
    let y = c.Z.getGuildMemberProfile(e, A),
        L = c.Z.getMutualGuilds(e),
        b = c.Z.getMutualFriends(e),
        D = c.Z.getMutualFriendsCount(e);
    p = p || null != A;
    let M = null == b && I,
        P = null == D && m,
        U = null != A && null == y;
    if (!(null == L && p) && !M && !P && !U && !C) return;
    (0, s.z)(), null != t && (0, a.vM)(t);
    let w = {
            withMutualGuilds: p,
            withMutualFriends: I,
            withMutualFriendsCount: m,
            friendToken: T,
            guildId: A,
            joinRequestId: N,
            abortSignal: O,
            connectionsRoleId:
                null == A
                    ? void 0
                    : null ===
                            (f = (0, o.Ur)({
                                guildMember: u.ZP.getMember(A, e),
                                channel: l.Z.getChannel(v)
                            })) || void 0 === f
                      ? void 0
                      : f.id
        },
        x = g ? d.Z : void 0;
    if (S) return r.Z.wait(() => (0, i.In)(e, w, x));
    await (0, i.In)(e, w, x);
}
