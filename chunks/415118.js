"use strict";
l.r(t);
var a = l("735250");
l("470079");
var u = l("481060"),
  d = l("239091"),
  n = l("883385"),
  i = l("108843"),
  s = l("947440"),
  o = l("100527"),
  r = l("299206"),
  c = l("976192"),
  f = l("276022"),
  M = l("777658"),
  E = l("858488"),
  g = l("185457"),
  A = l("933409"),
  S = l("389052"),
  _ = l("24311"),
  v = l("710631"),
  p = l("297047"),
  m = l("88966"),
  N = l("712301"),
  I = l("991307"),
  T = l("725119"),
  b = l("931617"),
  U = l("700994"),
  C = l("332031"),
  O = l("981631"),
  x = l("689938");
t.default = (0, i.default)((0, n.default)(function(e) {
  let {
    user: t,
    guildId: l,
    showModalItems: n = !0,
    showMediaItems: i = !1,
    showChatItems: o = !0,
    context: L,
    onSelect: h
  } = e, D = {
    page: O.AnalyticsPages.GUILD_CHANNEL,
    section: O.AnalyticsSections.CHAT_USERNAME,
    object: O.AnalyticsObjects.CONTEXT_MENU_ITEM
  }, j = (0, T.default)(t.id, l), V = (0, p.default)(t, l, L), G = (0, m.default)(t.id, L), R = (0, C.default)(t.id), k = (0, _.default)(t, L), P = (0, g.default)({
    user: t,
    guildId: l,
    context: L
  }), y = (0, E.default)({
    user: t
  }), B = (0, U.default)(t.id), F = (0, I.default)(t.id), w = (0, c.default)({
    guildId: l,
    userId: t.id,
    analyticsLocation: D,
    context: L
  }), z = (0, f.default)({
    user: t,
    guildId: l
  }), H = (0, v.default)({
    user: t,
    guildId: l
  }), X = (0, s.default)(null, t), Y = (0, M.default)(t), Z = (0, S.default)({
    user: t
  }), W = (0, A.default)(t, l), q = (0, b.default)(t.id, l), J = (0, N.default)(t, l), K = (0, r.default)({
    id: t.id,
    label: x.default.Messages.COPY_ID_USER
  }), Q = t.isNonUserBot();
  return (0, a.jsxs)(u.Menu, {
    navId: "user-context",
    onClose: d.closeContextMenu,
    "aria-label": x.default.Messages.USER_ACTIONS_MENU_LABEL,
    onSelect: h,
    children: [!Q && (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsxs)(u.MenuGroup, {
        children: [n && j, o && V, G, k, n && P, n && y, R]
      }), i && (0, a.jsx)(u.MenuGroup, {
        children: B
      }), (0, a.jsx)(u.MenuGroup, {
        children: n && X
      }), (0, a.jsxs)(u.MenuGroup, {
        children: [i && F, n && w, n && H, Y, z, n && Z]
      }), (0, a.jsx)(u.MenuGroup, {
        children: W
      }), (0, a.jsxs)(u.MenuGroup, {
        children: [q, J]
      })]
    }), (0, a.jsx)(u.MenuGroup, {
      children: K
    })]
  })
}, {
  object: O.AnalyticsObjects.CONTEXT_MENU
}), [o.default.CONTEXT_MENU, o.default.GUILD_USER_MENU])