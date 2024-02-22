"use strict";
n.r(t), n.d(t, {
  default: function() {
    return G
  }
});
var i = n("37983");
n("884691");
var l = n("77078"),
  r = n("272030"),
  u = n("838446"),
  a = n("158534"),
  s = n("846883"),
  o = n("812204"),
  d = n("243288"),
  f = n("321135"),
  c = n("873254"),
  h = n("861370"),
  m = n("726750"),
  g = n("170990"),
  v = n("304582"),
  p = n("72057"),
  M = n("489836"),
  P = n("406703"),
  C = n("343856"),
  b = n("502533"),
  _ = n("314838"),
  S = n("383161"),
  I = n("421602"),
  x = n("432487"),
  U = n("151200"),
  T = n("692986"),
  y = n("806179"),
  E = n("816106"),
  j = n("623879"),
  A = n("49111"),
  R = n("782340"),
  G = (0, a.default)((0, u.default)(function(e) {
    var t;
    let {
      user: n,
      channel: u,
      context: a,
      showChatItems: o = !0,
      showMediaItems: A = !1,
      showChannelCallItems: G = !1,
      showModalItems: N = !0,
      onSelect: O
    } = e, w = (0, y.default)(n.id, null), F = (0, S.default)(n, null, a), L = (0, U.default)(n.id, u.id), B = (0, I.default)(n.id, a), z = (0, P.default)(n, a), D = (0, p.default)({
      user: n,
      context: a
    }), k = (0, v.default)(n), H = (0, E.default)(n.id), W = (0, x.default)(n.id, u.id), Y = (0, T.default)(n.id), X = (0, b.default)(n.id, u.id), Z = (0, _.default)(n), V = (0, s.default)(null, n), q = (0, g.default)(n), J = (0, M.default)(n), K = (0, h.default)({
      id: n.id,
      label: R.default.Messages.COPY_ID_USER
    }), Q = (0, j.default)(n.id), $ = (0, f.default)(n.id), ee = (0, d.default)(u.id), et = (0, m.default)(n), en = (0, c.default)(n.id), ei = (0, C.default)(n, u), el = n.isNonUserBot(), er = u.isManaged(), eu = null === (t = u.recipients) || void 0 === t ? void 0 : t.includes(n.id);
    return (0, i.jsxs)(l.Menu, {
      navId: "user-context",
      onClose: r.closeContextMenu,
      "aria-label": R.default.Messages.USER_ACTIONS_MENU_LABEL,
      onSelect: O,
      children: [!el && (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(l.MenuGroup, {
          children: et
        }), (0, i.jsxs)(l.MenuGroup, {
          children: [N && w, o && F, B, z, !er && L, N && D, N && k, Q]
        }), A && (0, i.jsx)(l.MenuGroup, {
          children: H
        }), eu && (0, i.jsxs)(l.MenuGroup, {
          children: [!er && W, ei]
        }), (0, i.jsx)(l.MenuGroup, {
          children: N && V
        }), (0, i.jsxs)(l.MenuGroup, {
          children: [A && Y, A && X, N && Z, q, N && J, A && en]
        }), G && (0, i.jsxs)(l.MenuGroup, {
          children: [ee, $]
        })]
      }), (0, i.jsx)(l.MenuGroup, {
        children: K
      })]
    })
  }, {
    object: A.AnalyticsObjects.CONTEXT_MENU
  }), [o.default.CONTEXT_MENU, o.default.GROUP_DM_USER_MENU])