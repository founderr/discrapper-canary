"use strict";
t.r(n);
var a = t("735250");
t("470079");
var l = t("481060"),
  u = t("239091"),
  r = t("108843"),
  i = t("100527"),
  d = t("299206"),
  s = t("895563"),
  o = t("32750"),
  f = t("109764"),
  c = t("323597"),
  h = t("461535"),
  M = t("438536"),
  v = t("251746"),
  m = t("193987"),
  p = t("933793"),
  C = t("13736"),
  _ = t("732393"),
  F = t("214906"),
  T = t("612856"),
  A = t("137591"),
  I = t("689938");
n.default = (0, r.default)(function(e) {
  let {
    channel: n,
    onSelect: t
  } = e, r = (0, f.default)(n), i = (0, h.default)(n), E = (0, F.default)(n), x = (0, o.default)(n), R = (0, m.default)(n), G = (0, c.default)(n), g = (0, d.default)({
    id: n.id,
    label: I.default.Messages.COPY_ID_THREAD
  }), j = (0, M.default)(n, "Context Menu"), O = (0, p.default)(n), U = (0, T.default)(n), y = (0, C.default)(n), D = (0, _.default)(n.id), N = (0, v.default)(n), b = (0, A.default)(n), L = (0, s.useAddToFavoritesItem)(n), S = (0, s.useRemoveFromFavoritesItem)(n);
  return (0, a.jsxs)(l.Menu, {
    navId: "thread-context",
    onClose: u.closeContextMenu,
    "aria-label": I.default.Messages.THREAD_ACTIONS_MENU_LABEL,
    onSelect: t,
    children: [(0, a.jsxs)(l.MenuGroup, {
      children: [i, L]
    }, "mark-as-read-or-favorite"), (0, a.jsxs)(l.MenuGroup, {
      children: [j, N, x, R, y, D, r]
    }, "thread-actions"), (0, a.jsxs)(l.MenuGroup, {
      children: [E, U]
    }, "notifications"), (0, a.jsx)(l.MenuGroup, {
      children: S
    }), (0, a.jsxs)(l.MenuGroup, {
      children: [b, O, G]
    }, "admin-actions"), (0, a.jsx)(l.MenuGroup, {
      children: g
    }, "developer-actions")]
  })
}, [i.default.CONTEXT_MENU, i.default.CHANNEL_LIST_THREAD_MENU])