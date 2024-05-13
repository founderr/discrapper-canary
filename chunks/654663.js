"use strict";
l.r(t);
var a = l("735250");
l("470079");
var n = l("481060"),
  u = l("239091"),
  d = l("883385"),
  s = l("108843"),
  r = l("911969"),
  i = l("947440"),
  o = l("100527"),
  f = l("299206"),
  c = l("976192"),
  E = l("819403"),
  m = l("777658"),
  M = l("858488"),
  S = l("185457"),
  _ = l("570870"),
  g = l("389052"),
  I = l("24311"),
  C = l("710631"),
  R = l("297047"),
  A = l("88966"),
  N = l("712301"),
  T = l("520063"),
  v = l("725119"),
  h = l("931617"),
  O = l("332031"),
  p = l("981631"),
  x = l("689938");
t.default = (0, s.default)((0, d.default)(function(e) {
  let {
    user: t,
    guildId: l,
    channel: d,
    context: s,
    onSelect: o,
    onHeightUpdate: b
  } = e, F = (0, v.default)(t.id, l), U = (0, R.default)(t, l, s), j = (0, A.default)(t.id, s), P = (0, O.default)(t.id), L = (0, I.default)(t, s), y = (0, S.default)({
    user: t,
    guildId: l,
    context: s
  }), D = (0, M.default)({
    user: t
  }), G = (0, c.default)({
    guildId: l,
    userId: t.id,
    analyticsLocation: {
      page: p.AnalyticsPages.GUILD_CHANNEL,
      section: p.AnalyticsSections.CHAT_USERNAME,
      object: p.AnalyticsObjects.CONTEXT_MENU_ITEM
    },
    context: s
  }), V = (0, C.default)({
    user: t,
    guildId: l
  }), k = (0, i.default)(null, t), H = (0, m.default)(t), K = (0, g.default)({
    user: t
  }), B = (0, T.default)(t, l, d.id), w = (0, h.default)(t.id, l), Y = (0, N.default)(t, l), z = (0, f.default)({
    id: t.id,
    label: x.default.Messages.COPY_ID_USER
  }), q = (0, E.default)(t), W = (0, _.default)({
    commandType: r.ApplicationCommandType.USER,
    commandTargetId: t.id,
    channel: d,
    guildId: l,
    onHeightUpdate: b
  }), X = t.isNonUserBot();
  return (0, a.jsxs)(n.Menu, {
    navId: "user-context",
    onClose: u.closeContextMenu,
    "aria-label": x.default.Messages.USER_ACTIONS_MENU_LABEL,
    onSelect: o,
    children: [!X && (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(n.MenuGroup, {
        children: q
      }), (0, a.jsxs)(n.MenuGroup, {
        children: [F, U, j, L, y, D, P]
      }), (0, a.jsx)(n.MenuGroup, {
        children: k
      }), (0, a.jsxs)(n.MenuGroup, {
        children: [G, W, V, H, K]
      }), (0, a.jsx)(n.MenuGroup, {
        children: B
      }), (0, a.jsxs)(n.MenuGroup, {
        children: [w, Y]
      })]
    }), (0, a.jsx)(n.MenuGroup, {
      children: z
    })]
  })
}, {
  object: p.AnalyticsObjects.CONTEXT_MENU
}), [o.default.CONTEXT_MENU, o.default.THREAD_USER_MENU])