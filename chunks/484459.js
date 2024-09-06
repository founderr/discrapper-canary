n.d(t, {
    Z: function () {
        return _;
    }
});
var r = n(570140),
    i = n(232567),
    a = n(220082),
    s = n(275759),
    o = n(365943),
    l = n(592125),
    u = n(271383),
    c = n(621853),
    d = n(120569);
async function _(e, t) {
    var n, _, E, f;
    let { withMutualGuilds: h = !1, withMutualFriendsCount: p = !1, withMutualFriends: I = !1, friendToken: m, preloadUserBanner: T = !0, dispatchWait: S = !1, guildId: g, channelId: A, abortSignal: N } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    if ('' === e || c.Z.isFetchingProfile(e, g)) return;
    let O = c.Z.getUserProfile(e),
        R = Date.now() - (null !== (f = null == O ? void 0 : O.lastFetched) && void 0 !== f ? f : 0) >= 60000;
    if (((null == O ? void 0 : null === (n = O.fetchError) || void 0 === n ? void 0 : n.status) === 404 || (null == O ? void 0 : null === (_ = O.fetchError) || void 0 === _ ? void 0 : _.status) === 429) && !R) return;
    let v = c.Z.getGuildMemberProfile(e, g),
        C = c.Z.getMutualGuilds(e),
        y = c.Z.getMutualFriends(e),
        D = c.Z.getMutualFriendsCount(e);
    h = h || null != g;
    let L = null == y && I,
        b = null == D && p,
        M = null != g && null == v;
    if (!(null == C && h) && !L && !b && !M && !R) return;
    (0, o.z)(), null != t && (0, a.vM)(t);
    let P = {
            withMutualGuilds: h,
            withMutualFriends: I,
            withMutualFriendsCount: p,
            friendToken: m,
            guildId: g,
            abortSignal: N,
            connectionsRoleId:
                null == g
                    ? void 0
                    : null ===
                            (E = (0, s.Ur)({
                                guildMember: u.ZP.getMember(g, e),
                                channel: l.Z.getChannel(A)
                            })) || void 0 === E
                      ? void 0
                      : E.id
        },
        U = T ? d.Z : void 0;
    if (S) return r.Z.wait(() => (0, i.In)(e, P, U));
    await (0, i.In)(e, P, U);
}
