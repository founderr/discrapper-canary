"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var l = n("913144"),
  u = n("327037"),
  i = n("462274"),
  a = n("535013"),
  r = n("42203"),
  s = n("26989"),
  d = n("713135"),
  o = n("386714");
async function c(e, t) {
  var n, c, f;
  let E, {
    withMutualGuilds: v = !1,
    withMutualFriendsCount: g = !1,
    friendToken: S,
    preloadUserBanner: h = !0,
    dispatchWait: N = !1,
    guildId: m,
    channelId: C
  } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
  if ("" === e) return;
  null != t && (0, i.maybeFetchColors)(t), null != m && !v && (v = !0), null != m && (E = null !== (c = null === (n = (0, a.getVisibleConnectionsRole)({
    guildMember: s.default.getMember(m, e),
    channel: r.default.getChannel(C)
  })) || void 0 === n ? void 0 : n.id) && void 0 !== c ? c : void 0);
  let p = d.default.getUserProfile(e),
    I = d.default.getMutualGuilds(e),
    _ = d.default.getMutualFriendsCount(e),
    T = d.default.isFetchingProfile(e),
    x = (null == p ? void 0 : p.profileFetchFailed) || !T && (!Array.isArray(I) && v || null == _ && g),
    D = h ? o.default : void 0,
    G = !1;
  if (null != m) {
    let t = d.default.getGuildMemberProfile(e, m);
    G = null == t
  }!(!x && !G && (T || Date.now() - (null !== (f = null == p ? void 0 : p.lastFetched) && void 0 !== f ? f : 0) < 6e4)) && (N ? await l.default.wait(() => (0, u.fetchProfile)(e, {
    withMutualGuilds: v,
    withMutualFriendsCount: g,
    friendToken: S,
    guildId: m,
    connectionsRoleId: E
  }, D)) : await (0, u.fetchProfile)(e, {
    withMutualGuilds: v,
    withMutualFriendsCount: g,
    friendToken: S,
    guildId: m,
    connectionsRoleId: E
  }, D))
}