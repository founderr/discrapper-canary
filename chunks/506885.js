"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var a = n("913144"),
  l = n("327037"),
  i = n("462274"),
  r = n("535013"),
  s = n("42203"),
  u = n("26989"),
  o = n("713135"),
  c = n("386714");
async function d(e, t) {
  var n, d, f;
  let I, {
    withMutualGuilds: _ = !1,
    withMutualFriendsCount: S = !1,
    friendToken: T,
    preloadUserBanner: P = !0,
    dispatchWait: E = !1,
    guildId: N,
    channelId: A
  } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
  if ("" === e) return;
  null != t && (0, i.maybeFetchColors)(t), null != N && !_ && (_ = !0), null != N && (I = null !== (d = null === (n = (0, r.getVisibleConnectionsRole)({
    guildMember: u.default.getMember(N, e),
    channel: s.default.getChannel(A)
  })) || void 0 === n ? void 0 : n.id) && void 0 !== d ? d : void 0);
  let m = o.default.getUserProfile(e),
    p = o.default.getMutualGuilds(e),
    C = o.default.getMutualFriendsCount(e),
    O = o.default.isFetchingProfile(e),
    R = (null == m ? void 0 : m.profileFetchFailed) || !O && (!Array.isArray(p) && _ || null == C && S),
    g = P ? c.default : void 0,
    M = !1;
  if (null != N) {
    let t = o.default.getGuildMemberProfile(e, N);
    M = null == t
  }!(!R && !M && (O || Date.now() - (null !== (f = null == m ? void 0 : m.lastFetched) && void 0 !== f ? f : 0) < 6e4)) && (E ? await a.default.wait(() => (0, l.fetchProfile)(e, {
    withMutualGuilds: _,
    withMutualFriendsCount: S,
    friendToken: T,
    guildId: N,
    connectionsRoleId: I
  }, g)) : await (0, l.fetchProfile)(e, {
    withMutualGuilds: _,
    withMutualFriendsCount: S,
    friendToken: T,
    guildId: N,
    connectionsRoleId: I
  }, g))
}