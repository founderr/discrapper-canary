"use strict";
a.r(t);
var l = a("735250");
a("470079");
var u = a("481060"),
  d = a("239091"),
  s = a("883385"),
  n = a("108843"),
  o = a("947440"),
  i = a("100527"),
  r = a("299206"),
  f = a("819403"),
  c = a("777658"),
  E = a("858488"),
  S = a("185457"),
  _ = a("389052"),
  M = a("24311"),
  g = a("710631"),
  T = a("88966"),
  A = a("991307"),
  N = a("725119"),
  m = a("700994"),
  U = a("332031"),
  C = a("981631"),
  O = a("689938");
t.default = (0, n.default)((0, s.default)(function(e) {
  let {
    user: t,
    showMediaItems: a = !1,
    mediaEngineContext: s,
    onSelect: n
  } = e, i = (0, N.default)(t.id), C = (0, T.default)(t.id), b = (0, M.default)(t), v = (0, S.default)({
    user: t
  }), L = (0, E.default)({
    user: t
  }), x = (0, U.default)(t.id), p = (0, m.default)(t.id), I = (0, A.default)(t.id, s), h = (0, g.default)({
    user: t
  }), D = (0, o.default)(null, t), R = (0, c.default)(t), V = (0, _.default)({
    user: t
  }), j = (0, r.default)({
    id: t.id,
    label: O.default.Messages.COPY_ID_USER
  }), k = (0, f.default)(t), F = t.isNonUserBot();
  return (0, l.jsxs)(u.Menu, {
    navId: "user-context",
    onClose: d.closeContextMenu,
    "aria-label": O.default.Messages.USER_ACTIONS_MENU_LABEL,
    onSelect: n,
    children: [!F && (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)(u.MenuGroup, {
        children: k
      }), (0, l.jsxs)(u.MenuGroup, {
        children: [i, C, b, v, L, x]
      }), a && (0, l.jsx)(u.MenuGroup, {
        children: p
      }), (0, l.jsx)(u.MenuGroup, {
        children: D
      }), (0, l.jsxs)(u.MenuGroup, {
        children: [a && I, h, R, V]
      })]
    }), (0, l.jsx)(u.MenuGroup, {
      children: j
    })]
  })
}, {
  object: C.AnalyticsObjects.CONTEXT_MENU
}), [i.default.CONTEXT_MENU, i.default.USER_GENERIC_MENU])