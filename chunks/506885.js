"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var r = n("913144"),
  i = n("327037"),
  s = n("462274"),
  l = n("535013"),
  u = n("42203"),
  a = n("26989"),
  o = n("713135"),
  c = n("386714");
async function d(e, t) {
  var n, d, f;
  let I, {
    withMutualGuilds: _ = !1,
    withMutualFriendsCount: E = !1,
    friendToken: S,
    preloadUserBanner: T = !0,
    dispatchWait: N = !1,
    guildId: p,
    channelId: C
  } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
  if ("" === e) return;
  null != t && (0, s.maybeFetchColors)(t), null != p && !_ && (_ = !0), null != p && (I = null !== (d = null === (n = (0, l.getVisibleConnectionsRole)({
    guildMember: a.default.getMember(p, e),
    channel: u.default.getChannel(C)
  })) || void 0 === n ? void 0 : n.id) && void 0 !== d ? d : void 0);
  let m = o.default.getUserProfile(e),
    P = o.default.getMutualGuilds(e),
    h = o.default.getMutualFriendsCount(e),
    R = o.default.isFetchingProfile(e),
    L = (null == m ? void 0 : m.profileFetchFailed) || !R && (!Array.isArray(P) && _ || null == h && E),
    M = T ? c.default : void 0,
    v = !1;
  if (null != p) {
    let t = o.default.getGuildMemberProfile(e, p);
    v = null == t
  }!(!L && !v && (R || Date.now() - (null !== (f = null == m ? void 0 : m.lastFetched) && void 0 !== f ? f : 0) < 6e4)) && (N ? await r.default.wait(() => (0, i.fetchProfile)(e, {
    withMutualGuilds: _,
    withMutualFriendsCount: E,
    friendToken: S,
    guildId: p,
    connectionsRoleId: I
  }, M)) : await (0, i.fetchProfile)(e, {
    withMutualGuilds: _,
    withMutualFriendsCount: E,
    friendToken: S,
    guildId: p,
    connectionsRoleId: I
  }, M))
}