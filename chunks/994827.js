"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
});
var a = n("37983");
n("884691");
var l = n("77078"),
  i = n("272030"),
  u = n("158534"),
  r = n("812204"),
  d = n("861370"),
  s = n("972701"),
  o = n("30874"),
  f = n("458574"),
  c = n("308798"),
  _ = n("44141"),
  E = n("530101"),
  S = n("646240"),
  T = n("13777"),
  h = n("37774"),
  N = n("117399"),
  C = n("400501"),
  g = n("542640"),
  M = n("255228"),
  A = n("772371"),
  I = n("604656"),
  m = n("782340"),
  p = (0, u.default)(function(e) {
    let {
      channel: t,
      onSelect: n
    } = e, u = (0, f.default)(t), r = (0, _.default)(t), p = (0, M.default)(t), U = (0, o.default)(t), O = (0, h.default)(t), v = (0, c.default)(t), L = (0, d.default)({
      id: t.id,
      label: m.default.Messages.COPY_ID_THREAD
    }), G = (0, S.default)(t, "Context Menu"), R = (0, N.default)(t), F = (0, A.default)(t), y = (0, C.default)(t), D = (0, g.default)(t.id), b = (0, T.default)(t), H = (0, I.default)(t), P = (0, E.default)(t, {
      hoist: !0
    }), x = (0, s.useAddToFavoritesItem)(t), j = (0, s.useRemoveFromFavoritesItem)(t);
    return (0, a.jsxs)(l.Menu, {
      navId: "thread-context",
      onClose: i.closeContextMenu,
      "aria-label": m.default.Messages.THREAD_ACTIONS_MENU_LABEL,
      onSelect: n,
      children: [(0, a.jsxs)(l.MenuGroup, {
        children: [r, x]
      }, "mark-as-read-or-favorite"), (0, a.jsxs)(l.MenuGroup, {
        children: [G, b, U, O, y, D, u]
      }, "thread-actions"), (0, a.jsxs)(l.MenuGroup, {
        children: [p, F]
      }, "notifications"), (0, a.jsx)(l.MenuGroup, {
        children: j
      }), (0, a.jsxs)(l.MenuGroup, {
        children: [H, P, R, v]
      }, "admin-actions"), (0, a.jsx)(l.MenuGroup, {
        children: L
      }, "developer-actions")]
    })
  }, [r.default.CONTEXT_MENU, r.default.CHANNEL_LIST_THREAD_MENU])