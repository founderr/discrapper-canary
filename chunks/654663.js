"use strict";
a.r(t);
var l = a("735250");
a("470079");
var n = a("481060"),
  u = a("239091"),
  s = a("883385"),
  d = a("108843"),
  r = a("911969"),
  i = a("947440"),
  o = a("100527"),
  f = a("299206"),
  c = a("976192"),
  m = a("819403"),
  M = a("777658"),
  E = a("858488"),
  S = a("185457"),
  _ = a("570870"),
  g = a("389052"),
  I = a("24311"),
  C = a("710631"),
  R = a("297047"),
  N = a("88966"),
  A = a("712301"),
  T = a("520063"),
  v = a("725119"),
  O = a("931617"),
  h = a("332031"),
  x = a("981631"),
  p = a("689938");
t.default = (0, d.default)((0, s.default)(function(e) {
  let {
    user: t,
    guildId: a,
    channel: s,
    context: d,
    onSelect: o,
    onHeightUpdate: F
  } = e, b = (0, v.default)(t.id, a), U = (0, R.default)(t, a, d), L = (0, N.default)(t.id, d), j = (0, h.default)(t.id), P = (0, I.default)(t, d), y = (0, S.default)({
    user: t,
    guildId: a,
    context: d
  }), D = (0, E.default)(t), G = (0, c.default)({
    guildId: a,
    userId: t.id,
    analyticsLocation: {
      page: x.AnalyticsPages.GUILD_CHANNEL,
      section: x.AnalyticsSections.CHAT_USERNAME,
      object: x.AnalyticsObjects.CONTEXT_MENU_ITEM
    },
    context: d
  }), k = (0, C.default)(t, a), V = (0, i.default)(null, t), B = (0, M.default)(t), K = (0, g.default)(t), H = (0, T.default)(t, a, s.id), w = (0, O.default)(t.id, a), Y = (0, A.default)(t, a), z = (0, f.default)({
    id: t.id,
    label: p.default.Messages.COPY_ID_USER
  }), q = (0, m.default)(t), W = (0, _.default)({
    commandType: r.ApplicationCommandType.USER,
    commandTargetId: t.id,
    channel: s,
    guildId: a,
    onHeightUpdate: F
  }), X = t.isNonUserBot();
  return (0, l.jsxs)(n.Menu, {
    navId: "user-context",
    onClose: u.closeContextMenu,
    "aria-label": p.default.Messages.USER_ACTIONS_MENU_LABEL,
    onSelect: o,
    children: [!X && (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)(n.MenuGroup, {
        children: q
      }), (0, l.jsxs)(n.MenuGroup, {
        children: [b, U, L, P, y, D, j]
      }), (0, l.jsx)(n.MenuGroup, {
        children: V
      }), (0, l.jsxs)(n.MenuGroup, {
        children: [G, W, k, B, K]
      }), (0, l.jsx)(n.MenuGroup, {
        children: H
      }), (0, l.jsxs)(n.MenuGroup, {
        children: [w, Y]
      })]
    }), (0, l.jsx)(n.MenuGroup, {
      children: z
    })]
  })
}, {
  object: x.AnalyticsObjects.CONTEXT_MENU
}), [o.default.CONTEXT_MENU, o.default.THREAD_USER_MENU])