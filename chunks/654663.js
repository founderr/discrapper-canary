t.r(n);
var l = t(735250);
t(470079);
var i = t(481060),
  a = t(239091),
  r = t(883385),
  u = t(108843),
  s = t(911969),
  d = t(947440),
  o = t(100527),
  c = t(299206),
  Z = t(976192),
  E = t(819403),
  M = t(777658),
  f = t(858488),
  _ = t(185457),
  g = t(570870),
  I = t(389052),
  m = t(24311),
  N = t(710631),
  R = t(297047),
  C = t(88966),
  T = t(712301),
  v = t(520063),
  A = t(725119),
  O = t(931617),
  h = t(332031),
  P = t(981631),
  x = t(689938);
n.default = (0, u.Z)((0, r.Z)(function(e) {
  let {
    user: n,
    guildId: t,
    channel: r,
    context: u,
    onSelect: o,
    onHeightUpdate: S
  } = e, b = (0, A.Z)(n.id, t), U = (0, R.Z)(n, t, u), p = (0, C.Z)(n.id, u), j = (0, h.Z)(n.id), L = (0, m.Z)(n, u), D = (0, _.Z)({
    user: n,
    guildId: t,
    context: u
  }), G = (0, f.Z)({
    user: n
  }), y = (0, Z.Z)({
    guildId: t,
    userId: n.id,
    analyticsLocation: {
      page: P.ZY5.GUILD_CHANNEL,
      section: P.jXE.CHAT_USERNAME,
      object: P.qAy.CONTEXT_MENU_ITEM
    },
    context: u
  }), F = (0, N.Z)({
    user: n,
    guildId: t
  }), V = (0, d.Z)(null, n), k = (0, M.Z)(n), q = (0, I.Z)({
    user: n
  }), B = (0, v.Z)(n, t, r.id), K = (0, O.Z)(n.id, t), H = (0, T.Z)(n, t), w = (0, c.Z)({
    id: n.id,
    label: x.Z.Messages.COPY_ID_USER
  }), Y = (0, E.Z)(n), z = (0, g.Z)({
    commandType: s.yU.USER,
    commandTargetId: n.id,
    channel: r,
    guildId: t,
    onHeightUpdate: S
  }), W = n.isNonUserBot();
  return (0, l.jsxs)(i.Menu, {
    navId: "user-context",
    onClose: a.Zy,
    "aria-label": x.Z.Messages.USER_ACTIONS_MENU_LABEL,
    onSelect: o,
    children: [!W && (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)(i.MenuGroup, {
        children: Y
      }), (0, l.jsxs)(i.MenuGroup, {
        children: [b, U, p, L, D, G, j]
      }), (0, l.jsx)(i.MenuGroup, {
        children: V
      }), (0, l.jsxs)(i.MenuGroup, {
        children: [y, z, F, k, q]
      }), (0, l.jsx)(i.MenuGroup, {
        children: B
      }), (0, l.jsxs)(i.MenuGroup, {
        children: [K, H]
      })]
    }), (0, l.jsx)(i.MenuGroup, {
      children: w
    })]
  })
}, {
  object: P.qAy.CONTEXT_MENU
}), [o.Z.CONTEXT_MENU, o.Z.THREAD_USER_MENU])