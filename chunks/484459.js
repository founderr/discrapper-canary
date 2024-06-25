"use strict";
n.d(t, {
  W: function() {
    return E
  },
  Z: function() {
    return I
  }
}), n(411104);
var i = n(570140),
  r = n(232567),
  s = n(220082),
  o = n(275759),
  a = n(365943),
  l = n(598077),
  u = n(592125),
  _ = n(271383),
  c = n(621853),
  d = n(120569);

function E() {
  let e, t, n;
  for (var i, r, s = arguments.length, o = Array(s), a = 0; a < s; a++) o[a] = arguments[a];
  let u = o[0],
    _ = o[1];
  if ("string" == typeof u && ("string" == typeof _ || null == _)) e = u, t = _, n = o[2];
  else if (u instanceof l.Z && ("object" == typeof _ || null == _)) e = u.id, t = u.getAvatarURL(void 0, 80), n = _;
  else throw Error("Invalid arguments");
  return null == e ? Promise.resolve() : I(e, t, {
    withMutualFriends: null === (i = null == n ? void 0 : n.withMutualFriends) || void 0 === i || i,
    withMutualGuilds: null === (r = null == n ? void 0 : n.withMutualGuilds) || void 0 === r || r,
    ...n
  })
}
async function I(e, t) {
  var n, l, E;
  let I, {
    withMutualGuilds: T = !1,
    withMutualFriendsCount: h = !1,
    withMutualFriends: S = !1,
    friendToken: f,
    preloadUserBanner: N = !0,
    dispatchWait: A = !1,
    guildId: m,
    channelId: O,
    abortSignal: R
  } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
  if ("" === e) return;
  (0, a.z)(), null != t && (0, s.vM)(t), null != m && !T && (T = !0), null != m && (I = null !== (l = null === (n = (0, o.Ur)({
    guildMember: _.ZP.getMember(m, e),
    channel: u.Z.getChannel(O)
  })) || void 0 === n ? void 0 : n.id) && void 0 !== l ? l : void 0);
  let p = c.Z.getUserProfile(e),
    g = c.Z.getGuildMemberProfile(e, m),
    C = c.Z.getMutualGuilds(e),
    v = c.Z.getMutualFriends(e),
    L = c.Z.getMutualFriendsCount(e),
    D = c.Z.isFetchingProfile(e),
    M = N ? d.Z : void 0,
    P = null == C && T,
    y = null == v && S,
    U = null == L && h,
    b = null != m && null == g,
    G = Date.now() - (null !== (E = null == p ? void 0 : p.lastFetched) && void 0 !== E ? E : 0) >= 6e4;
  if (!!(!D && (P || U || y)) || !!b || !!G) A ? await i.Z.wait(() => (0, r.In)(e, {
    withMutualGuilds: T,
    withMutualFriends: S,
    withMutualFriendsCount: h,
    friendToken: f,
    guildId: m,
    connectionsRoleId: I,
    abortSignal: R
  }, M)) : await (0, r.In)(e, {
    withMutualGuilds: T,
    withMutualFriends: S,
    withMutualFriendsCount: h,
    friendToken: f,
    guildId: m,
    connectionsRoleId: I,
    abortSignal: R
  }, M)
}