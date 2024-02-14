"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
});
var u = n("37983");
n("884691");
var i = n("77078"),
  a = n("272030"),
  l = n("838446"),
  r = n("158534"),
  d = n("846883"),
  o = n("812204"),
  s = n("861370"),
  c = n("726750"),
  f = n("170990"),
  E = n("304582"),
  _ = n("72057"),
  S = n("489836"),
  T = n("406703"),
  A = n("314838"),
  p = n("421602"),
  I = n("692986"),
  N = n("806179"),
  C = n("816106"),
  g = n("623879"),
  O = n("49111"),
  U = n("782340"),
  h = (0, r.default)((0, l.default)(function(e) {
    let {
      user: t,
      showMediaItems: n = !1,
      mediaEngineContext: l,
      onSelect: r
    } = e, o = (0, N.default)(t.id), O = (0, p.default)(t.id), h = (0, T.default)(t), R = (0, _.default)({
      user: t
    }), v = (0, E.default)(t), P = (0, g.default)(t.id), y = (0, C.default)(t.id), m = (0, I.default)(t.id, l), M = (0, A.default)(t), D = (0, d.default)(null, t), L = (0, f.default)(t), b = (0, S.default)(t), G = (0, s.default)({
      id: t.id,
      label: U.default.Messages.COPY_ID_USER
    }), F = (0, c.default)(t), V = t.isNonUserBot();
    return (0, u.jsxs)(i.Menu, {
      navId: "user-context",
      onClose: a.closeContextMenu,
      "aria-label": U.default.Messages.USER_ACTIONS_MENU_LABEL,
      onSelect: r,
      children: [!V && (0, u.jsxs)(u.Fragment, {
        children: [(0, u.jsx)(i.MenuGroup, {
          children: F
        }), (0, u.jsxs)(i.MenuGroup, {
          children: [o, O, h, R, v, P]
        }), n && (0, u.jsx)(i.MenuGroup, {
          children: y
        }), (0, u.jsx)(i.MenuGroup, {
          children: D
        }), (0, u.jsxs)(i.MenuGroup, {
          children: [n && m, M, L, b]
        })]
      }), (0, u.jsx)(i.MenuGroup, {
        children: G
      })]
    })
  }, {
    object: O.AnalyticsObjects.CONTEXT_MENU
  }), [o.default.CONTEXT_MENU, o.default.USER_GENERIC_MENU])