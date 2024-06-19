i.r(e);
var l = i(735250);
i(470079);
var u = i(481060),
  o = i(239091),
  t = i(883385),
  d = i(108843),
  r = i(947440),
  s = i(100527),
  a = i(299206),
  c = i(976192),
  p = i(276022),
  Z = i(777658),
  v = i(858488),
  A = i(185457),
  E = i(933409),
  M = i(389052),
  I = i(24311),
  N = i(710631),
  _ = i(297047),
  T = i(88966),
  h = i(712301),
  f = i(991307),
  U = i(725119),
  j = i(931617),
  G = i(700994),
  b = i(332031),
  C = i(981631),
  g = i(689938);
e.default = (0, d.Z)((0, t.Z)(function(n) {
  let {
    user: e,
    guildId: i,
    showModalItems: t = !0,
    showMediaItems: d = !1,
    showChatItems: s = !0,
    context: x,
    onSelect: O
  } = n, P = {
    page: C.ZY5.GUILD_CHANNEL,
    section: C.jXE.CHAT_USERNAME,
    object: C.qAy.CONTEXT_MENU_ITEM
  }, m = (0, U.Z)(e.id, i), L = (0, _.Z)(e, i, x), y = (0, T.Z)(e.id, x), R = (0, b.Z)(e.id), S = (0, I.Z)(e, x), k = (0, A.Z)({
    user: e,
    guildId: i,
    context: x
  }), D = (0, v.Z)({
    user: e
  }), q = (0, G.Z)(e.id), z = (0, f.Z)(e.id), w = (0, c.Z)({
    guildId: i,
    userId: e.id,
    analyticsLocation: P,
    context: x
  }), H = (0, p.Z)({
    user: e,
    guildId: i
  }), X = (0, N.Z)({
    user: e,
    guildId: i
  }), B = (0, r.Z)(null, e), Y = (0, Z.Z)(e), F = (0, M.Z)({
    user: e
  }), K = (0, E.Z)(e, i), V = (0, j.Z)(e.id, i), J = (0, h.Z)(e, i), Q = (0, a.Z)({
    id: e.id,
    label: g.Z.Messages.COPY_ID_USER
  }), W = e.isNonUserBot();
  return (0, l.jsxs)(u.Menu, {
    navId: "user-context",
    onClose: o.Zy,
    "aria-label": g.Z.Messages.USER_ACTIONS_MENU_LABEL,
    onSelect: O,
    children: [!W && (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsxs)(u.MenuGroup, {
        children: [t && m, s && L, y, S, t && k, t && D, R]
      }), d && (0, l.jsx)(u.MenuGroup, {
        children: q
      }), (0, l.jsx)(u.MenuGroup, {
        children: t && B
      }), (0, l.jsxs)(u.MenuGroup, {
        children: [d && z, t && w, t && X, Y, H, t && F]
      }), (0, l.jsx)(u.MenuGroup, {
        children: K
      }), (0, l.jsxs)(u.MenuGroup, {
        children: [V, J]
      })]
    }), (0, l.jsx)(u.MenuGroup, {
      children: Q
    })]
  })
}, {
  object: C.qAy.CONTEXT_MENU
}), [s.Z.CONTEXT_MENU, s.Z.GUILD_USER_MENU])