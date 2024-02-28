"use strict";
n.r(t), n.d(t, {
  default: function() {
    return U
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
  m = n("861370"),
  h = n("726750"),
  g = n("170990"),
  v = n("304582"),
  p = n("72057"),
  M = n("489836"),
  S = n("406703"),
  _ = n("343856"),
  E = n("502533"),
  C = n("314838"),
  I = n("383161"),
  A = n("421602"),
  P = n("432487"),
  T = n("151200"),
  b = n("692986"),
  x = n("806179"),
  y = n("816106"),
  N = n("623879"),
  R = n("49111"),
  O = n("782340"),
  U = (0, a.default)((0, u.default)(function(e) {
    var t;
    let {
      user: n,
      channel: u,
      context: a,
      showChatItems: o = !0,
      showMediaItems: R = !1,
      showChannelCallItems: U = !1,
      showModalItems: F = !0,
      onSelect: j
    } = e, D = (0, x.default)(n.id, null), G = (0, I.default)(n, null, a), L = (0, T.default)(n.id, u.id), w = (0, A.default)(n.id, a), V = (0, S.default)(n, a), B = (0, p.default)({
      user: n,
      context: a
    }), H = (0, v.default)(n), k = (0, y.default)(n.id), z = (0, P.default)(n.id, u.id), W = (0, b.default)(n.id), Y = (0, E.default)(n.id, u.id), K = (0, C.default)(n), X = (0, s.default)(null, n), Z = (0, g.default)(n), q = (0, M.default)(n), J = (0, m.default)({
      id: n.id,
      label: O.default.Messages.COPY_ID_USER
    }), Q = (0, N.default)(n.id), $ = (0, f.default)(n.id), ee = (0, d.default)(u.id), et = (0, h.default)(n), en = (0, c.default)(n.id), ei = (0, _.default)(n, u), el = n.isNonUserBot(), er = u.isManaged(), eu = null === (t = u.recipients) || void 0 === t ? void 0 : t.includes(n.id);
    return (0, i.jsxs)(l.Menu, {
      navId: "user-context",
      onClose: r.closeContextMenu,
      "aria-label": O.default.Messages.USER_ACTIONS_MENU_LABEL,
      onSelect: j,
      children: [!el && (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(l.MenuGroup, {
          children: et
        }), (0, i.jsxs)(l.MenuGroup, {
          children: [F && D, o && G, w, V, !er && L, F && B, F && H, Q]
        }), R && (0, i.jsx)(l.MenuGroup, {
          children: k
        }), eu && (0, i.jsxs)(l.MenuGroup, {
          children: [!er && z, ei]
        }), (0, i.jsx)(l.MenuGroup, {
          children: F && X
        }), (0, i.jsxs)(l.MenuGroup, {
          children: [R && W, R && Y, F && K, Z, F && q, R && en]
        }), U && (0, i.jsxs)(l.MenuGroup, {
          children: [ee, $]
        })]
      }), (0, i.jsx)(l.MenuGroup, {
        children: J
      })]
    })
  }, {
    object: R.AnalyticsObjects.CONTEXT_MENU
  }), [o.default.CONTEXT_MENU, o.default.GROUP_DM_USER_MENU])