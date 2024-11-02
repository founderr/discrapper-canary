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
    var n, f, _, h;
    let { withMutualGuilds: p = !1, withMutualFriendsCount: m = !1, withMutualFriends: g = !1, friendToken: E, preloadUserBanner: v = !0, dispatchWait: I = !1, guildId: S, channelId: T, joinRequestId: b, abortSignal: y } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    if ('' === e || c.Z.isFetchingProfile(e, S)) return;
    let A = c.Z.getUserProfile(e),
        N = Date.now() - (null !== (h = null == A ? void 0 : A.lastFetched) && void 0 !== h ? h : 0) >= 60000;
    if (((null == A ? void 0 : null === (n = A.fetchError) || void 0 === n ? void 0 : n.status) === 404 || (null == A ? void 0 : null === (f = A.fetchError) || void 0 === f ? void 0 : f.status) === 429) && !N) return;
    let C = c.Z.getGuildMemberProfile(e, S),
        R = c.Z.getMutualGuilds(e),
        O = c.Z.getMutualFriends(e),
        D = c.Z.getMutualFriendsCount(e);
    p = p || null != S;
    let L = null == O && g,
        x = null == D && m,
        w = null != S && null == C;
    if (!(null == R && p) && !L && !x && !w && !N) return;
    (0, o.z)(), null != t && (0, a.vM)(t);
    let M = {
            withMutualGuilds: p,
            withMutualFriends: g,
            withMutualFriendsCount: m,
            friendToken: E,
            guildId: S,
            joinRequestId: b,
            abortSignal: y,
            connectionsRoleId:
                null == S
                    ? void 0
                    : null ===
                            (_ = (0, s.Ur)({
                                guildMember: u.ZP.getMember(S, e),
                                channel: l.Z.getChannel(T)
                            })) || void 0 === _
                      ? void 0
                      : _.id
        },
        P = v ? d.Z : void 0;
    if (I) return r.Z.wait(() => (0, i.In)(e, M, P));
    await (0, i.In)(e, M, P);
}
