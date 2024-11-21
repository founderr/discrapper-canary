n.d(t, {
    Z: function () {
        return f;
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
async function f(e, t) {
    var n, f, _, p;
    let { withMutualGuilds: h = !1, withMutualFriendsCount: m = !1, withMutualFriends: g = !1, friendToken: E, preloadUserBanner: v = !0, dispatchWait: b = !1, guildId: I, channelId: T, joinRequestId: S, abortSignal: y } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    if ('' === e || c.Z.isFetchingProfile(e, I)) return;
    let A = c.Z.getUserProfile(e),
        N = Date.now() - (null !== (p = null == A ? void 0 : A.lastFetched) && void 0 !== p ? p : 0) >= 60000;
    if (((null == A ? void 0 : null === (n = A.fetchError) || void 0 === n ? void 0 : n.status) === 404 || (null == A ? void 0 : null === (f = A.fetchError) || void 0 === f ? void 0 : f.status) === 429) && !N) return;
    let C = c.Z.getGuildMemberProfile(e, I),
        R = c.Z.getMutualGuilds(e),
        O = c.Z.getMutualFriends(e),
        D = c.Z.getMutualFriendsCount(e);
    h = h || null != I;
    let L = null == O && g,
        x = null == D && m,
        w = null != I && null == C;
    if (!(null == R && h) && !L && !x && !w && !N) return;
    (0, o.z)(), null != t && (0, a.vM)(t);
    let M = {
            withMutualGuilds: h,
            withMutualFriends: g,
            withMutualFriendsCount: m,
            friendToken: E,
            guildId: I,
            joinRequestId: S,
            abortSignal: y,
            connectionsRoleId:
                null == I
                    ? void 0
                    : null ===
                            (_ = (0, s.Ur)({
                                guildMember: u.ZP.getMember(I, e),
                                channel: l.Z.getChannel(T)
                            })) || void 0 === _
                      ? void 0
                      : _.id
        },
        P = v ? d.Z : void 0;
    if (b) return r.Z.wait(() => (0, i.In)(e, M, P));
    await (0, i.In)(e, M, P);
}
