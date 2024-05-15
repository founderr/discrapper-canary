"use strict";
l.r(t);
var a = l("735250");
l("470079");
var u = l("481060"),
  n = l("239091"),
  s = l("883385"),
  d = l("108843"),
  r = l("911969"),
  i = l("947440"),
  o = l("100527"),
  f = l("299206"),
  c = l("976192"),
  E = l("819403"),
  M = l("777658"),
  S = l("858488"),
  m = l("185457"),
  _ = l("570870"),
  g = l("389052"),
  R = l("24311"),
  A = l("710631"),
  C = l("297047"),
  N = l("88966"),
  I = l("712301"),
  O = l("520063"),
  h = l("725119"),
  T = l("931617"),
  p = l("332031"),
  v = l("981631"),
  U = l("689938");
t.default = (0, d.default)((0, s.default)(function(e) {
  let {
    user: t,
    guildId: l,
    channel: s,
    context: d,
    onSelect: o,
    onHeightUpdate: b
  } = e, x = (0, h.default)(t.id, l), F = (0, C.default)(t, l, d), j = (0, N.default)(t.id, d), L = (0, p.default)(t.id), G = (0, R.default)(t, d), P = (0, m.default)({
    user: t,
    guildId: l,
    context: d
  }), y = (0, S.default)({
    user: t
  }), k = (0, c.default)({
    guildId: l,
    userId: t.id,
    analyticsLocation: {
      page: v.AnalyticsPages.GUILD_CHANNEL,
      section: v.AnalyticsSections.CHAT_USERNAME,
      object: v.AnalyticsObjects.CONTEXT_MENU_ITEM
    },
    context: d
  }), V = (0, A.default)({
    user: t,
    guildId: l
  }), D = (0, i.default)(null, t), H = (0, M.default)(t), K = (0, g.default)({
    user: t
  }), B = (0, O.default)(t, l, s.id), w = (0, T.default)(t.id, l), Y = (0, I.default)(t, l), q = (0, f.default)({
    id: t.id,
    label: U.default.Messages.COPY_ID_USER
  }), z = (0, E.default)(t), X = (0, _.default)({
    commandType: r.ApplicationCommandType.USER,
    commandTargetId: t.id,
    channel: s,
    guildId: l,
    onHeightUpdate: b
  }), W = t.isNonUserBot();
  return (0, a.jsxs)(u.Menu, {
    navId: "user-context",
    onClose: n.closeContextMenu,
    "aria-label": U.default.Messages.USER_ACTIONS_MENU_LABEL,
    onSelect: o,
    children: [!W && (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(u.MenuGroup, {
        children: z
      }), (0, a.jsxs)(u.MenuGroup, {
        children: [x, F, j, G, P, y, L]
      }), (0, a.jsx)(u.MenuGroup, {
        children: D
      }), (0, a.jsxs)(u.MenuGroup, {
        children: [k, X, V, H, K]
      }), (0, a.jsx)(u.MenuGroup, {
        children: B
      }), (0, a.jsxs)(u.MenuGroup, {
        children: [w, Y]
      })]
    }), (0, a.jsx)(u.MenuGroup, {
      children: q
    })]
  })
}, {
  object: v.AnalyticsObjects.CONTEXT_MENU
}), [o.default.CONTEXT_MENU, o.default.THREAD_USER_MENU])