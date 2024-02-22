"use strict";
n.r(t), n.d(t, {
  default: function() {
    return P
  }
});
var l = n("37983");
n("884691");
var i = n("77078"),
  u = n("272030"),
  r = n("838446"),
  a = n("158534"),
  o = n("846883"),
  d = n("812204"),
  s = n("861370"),
  c = n("726750"),
  f = n("170990"),
  g = n("304582"),
  E = n("72057"),
  S = n("489836"),
  _ = n("406703"),
  p = n("314838"),
  h = n("421602"),
  m = n("692986"),
  v = n("806179"),
  T = n("816106"),
  A = n("623879"),
  C = n("49111"),
  I = n("782340"),
  P = (0, a.default)((0, r.default)(function(e) {
    let {
      user: t,
      showMediaItems: n = !1,
      mediaEngineContext: r,
      onSelect: a
    } = e, d = (0, v.default)(t.id), C = (0, h.default)(t.id), P = (0, _.default)(t), M = (0, E.default)({
      user: t
    }), y = (0, g.default)(t), N = (0, A.default)(t.id), O = (0, T.default)(t.id), b = (0, m.default)(t.id, r), U = (0, p.default)(t), R = (0, o.default)(null, t), L = (0, f.default)(t), D = (0, S.default)(t), w = (0, s.default)({
      id: t.id,
      label: I.default.Messages.COPY_ID_USER
    }), F = (0, c.default)(t), V = t.isNonUserBot();
    return (0, l.jsxs)(i.Menu, {
      navId: "user-context",
      onClose: u.closeContextMenu,
      "aria-label": I.default.Messages.USER_ACTIONS_MENU_LABEL,
      onSelect: a,
      children: [!V && (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(i.MenuGroup, {
          children: F
        }), (0, l.jsxs)(i.MenuGroup, {
          children: [d, C, P, M, y, N]
        }), n && (0, l.jsx)(i.MenuGroup, {
          children: O
        }), (0, l.jsx)(i.MenuGroup, {
          children: R
        }), (0, l.jsxs)(i.MenuGroup, {
          children: [n && b, U, L, D]
        })]
      }), (0, l.jsx)(i.MenuGroup, {
        children: w
      })]
    })
  }, {
    object: C.AnalyticsObjects.CONTEXT_MENU
  }), [d.default.CONTEXT_MENU, d.default.USER_GENERIC_MENU])