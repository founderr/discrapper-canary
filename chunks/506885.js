"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var l = n("913144"),
  i = n("327037"),
  u = n("462274"),
  r = n("535013"),
  a = n("42203"),
  o = n("26989"),
  d = n("713135"),
  s = n("386714");
async function c(e, t) {
  var n, c, f;
  let g, {
    withMutualGuilds: E = !1,
    withMutualFriendsCount: S = !1,
    friendToken: _,
    preloadUserBanner: p = !0,
    dispatchWait: h = !1,
    guildId: m,
    channelId: v
  } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
  if ("" === e) return;
  null != t && (0, u.maybeFetchColors)(t), null != m && !E && (E = !0), null != m && (g = null !== (c = null === (n = (0, r.getVisibleConnectionsRole)({
    guildMember: o.default.getMember(m, e),
    channel: a.default.getChannel(v)
  })) || void 0 === n ? void 0 : n.id) && void 0 !== c ? c : void 0);
  let T = d.default.getUserProfile(e),
    A = d.default.getMutualGuilds(e),
    C = d.default.getMutualFriendsCount(e),
    I = d.default.isFetchingProfile(e),
    P = (null == T ? void 0 : T.profileFetchFailed) || !I && (!Array.isArray(A) && E || null == C && S),
    M = p ? s.default : void 0,
    y = !1;
  if (null != m) {
    let t = d.default.getGuildMemberProfile(e, m);
    y = null == t
  }!(!P && !y && (I || Date.now() - (null !== (f = null == T ? void 0 : T.lastFetched) && void 0 !== f ? f : 0) < 6e4)) && (h ? await l.default.wait(() => (0, i.fetchProfile)(e, {
    withMutualGuilds: E,
    withMutualFriendsCount: S,
    friendToken: _,
    guildId: m,
    connectionsRoleId: g
  }, M)) : await (0, i.fetchProfile)(e, {
    withMutualGuilds: E,
    withMutualFriendsCount: S,
    friendToken: _,
    guildId: m,
    connectionsRoleId: g
  }, M))
}