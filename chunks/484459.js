r.d(n, {
    Z: function () {
        return h;
    }
});
var i = r(570140),
    a = r(232567),
    s = r(220082),
    o = r(275759),
    l = r(365943),
    u = r(592125),
    c = r(271383),
    d = r(621853),
    f = r(120569);
let _ = 60000;
async function h(e, n) {
    var r, h, p, m;
    let { withMutualGuilds: g = !1, withMutualFriendsCount: E = !1, withMutualFriends: v = !1, friendToken: I, preloadUserBanner: T = !0, dispatchWait: b = !1, guildId: y, channelId: S, joinRequestId: A, abortSignal: N } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    if ('' === e || d.Z.isFetchingProfile(e, y)) return;
    let C = d.Z.getUserProfile(e),
        R = Date.now() - (null !== (m = null == C ? void 0 : C.lastFetched) && void 0 !== m ? m : 0) >= _;
    if (((null == C ? void 0 : null === (r = C.fetchError) || void 0 === r ? void 0 : r.status) === 404 || (null == C ? void 0 : null === (h = C.fetchError) || void 0 === h ? void 0 : h.status) === 429) && !R) return;
    let O = d.Z.getGuildMemberProfile(e, y),
        D = d.Z.getMutualGuilds(e),
        L = d.Z.getMutualFriends(e),
        x = d.Z.getMutualFriendsCount(e);
    g = g || null != y;
    let w = null == L && v,
        P = null == x && E,
        M = null != y && null == O;
    if (!(null == D && g) && !w && !P && !M && !R) return;
    (0, l.z)(), null != n && (0, s.vM)(n);
    let k = {
            withMutualGuilds: g,
            withMutualFriends: v,
            withMutualFriendsCount: E,
            friendToken: I,
            guildId: y,
            joinRequestId: A,
            abortSignal: N,
            connectionsRoleId:
                null == y
                    ? void 0
                    : null ===
                            (p = (0, o.Ur)({
                                guildMember: c.ZP.getMember(y, e),
                                channel: u.Z.getChannel(S)
                            })) || void 0 === p
                      ? void 0
                      : p.id
        },
        U = T ? f.Z : void 0;
    if (b) return i.Z.wait(() => (0, a.In)(e, k, U));
    await (0, a.In)(e, k, U);
}
