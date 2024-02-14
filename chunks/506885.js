"use strict";
l.r(i), l.d(i, {
  default: function() {
    return c
  }
});
var t = l("913144"),
  n = l("327037"),
  r = l("462274"),
  u = l("535013"),
  o = l("42203"),
  d = l("26989"),
  s = l("713135"),
  a = l("386714");
async function c(e, i) {
  var l, c, f;
  let m, {
    withMutualGuilds: _ = !1,
    withMutualFriendsCount: p = !1,
    friendToken: g,
    preloadUserBanner: h = !0,
    dispatchWait: v = !1,
    guildId: b,
    channelId: P
  } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
  if ("" === e) return;
  null != i && (0, r.maybeFetchColors)(i), null != b && !_ && (_ = !0), null != b && (m = null !== (c = null === (l = (0, u.getVisibleConnectionsRole)({
    guildMember: d.default.getMember(b, e),
    channel: o.default.getChannel(P)
  })) || void 0 === l ? void 0 : l.id) && void 0 !== c ? c : void 0);
  let E = s.default.getUserProfile(e),
    S = s.default.getMutualGuilds(e),
    I = s.default.getMutualFriendsCount(e),
    U = s.default.isFetchingProfile(e),
    C = (null == E ? void 0 : E.profileFetchFailed) || !U && (!Array.isArray(S) && _ || null == I && p),
    T = h ? a.default : void 0,
    F = !1;
  if (null != b) {
    let i = s.default.getGuildMemberProfile(e, b);
    F = null == i
  }!(!C && !F && (U || Date.now() - (null !== (f = null == E ? void 0 : E.lastFetched) && void 0 !== f ? f : 0) < 6e4)) && (v ? await t.default.wait(() => (0, n.fetchProfile)(e, {
    withMutualGuilds: _,
    withMutualFriendsCount: p,
    friendToken: g,
    guildId: b,
    connectionsRoleId: m
  }, T)) : await (0, n.fetchProfile)(e, {
    withMutualGuilds: _,
    withMutualFriendsCount: p,
    friendToken: g,
    guildId: b,
    connectionsRoleId: m
  }, T))
}