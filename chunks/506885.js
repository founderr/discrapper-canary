"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
});
var i = n("913144"),
  l = n("327037"),
  r = n("462274"),
  u = n("535013"),
  a = n("42203"),
  s = n("26989"),
  o = n("713135"),
  d = n("386714");
async function f(e, t) {
  var n, f, c;
  let m, {
    withMutualGuilds: h = !1,
    withMutualFriendsCount: g = !1,
    friendToken: v,
    preloadUserBanner: p = !0,
    dispatchWait: M = !1,
    guildId: S,
    channelId: _
  } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
  if ("" === e) return;
  null != t && (0, r.maybeFetchColors)(t), null != S && !h && (h = !0), null != S && (m = null !== (f = null === (n = (0, u.getVisibleConnectionsRole)({
    guildMember: s.default.getMember(S, e),
    channel: a.default.getChannel(_)
  })) || void 0 === n ? void 0 : n.id) && void 0 !== f ? f : void 0);
  let E = o.default.getUserProfile(e),
    C = o.default.getMutualGuilds(e),
    I = o.default.getMutualFriendsCount(e),
    A = o.default.isFetchingProfile(e),
    P = (null == E ? void 0 : E.profileFetchFailed) || !A && (!Array.isArray(C) && h || null == I && g),
    T = p ? d.default : void 0,
    b = !1;
  if (null != S) {
    let t = o.default.getGuildMemberProfile(e, S);
    b = null == t
  }!(!P && !b && (A || Date.now() - (null !== (c = null == E ? void 0 : E.lastFetched) && void 0 !== c ? c : 0) < 6e4)) && (M ? await i.default.wait(() => (0, l.fetchProfile)(e, {
    withMutualGuilds: h,
    withMutualFriendsCount: g,
    friendToken: v,
    guildId: S,
    connectionsRoleId: m
  }, T)) : await (0, l.fetchProfile)(e, {
    withMutualGuilds: h,
    withMutualFriendsCount: g,
    friendToken: v,
    guildId: S,
    connectionsRoleId: m
  }, T))
}