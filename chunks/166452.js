"use strict";
n.r(t), n.d(t, {
  default: function() {
    return G
  }
});
var a = n("37983");
n("884691");
var s = n("77078"),
  r = n("272030"),
  u = n("838446"),
  i = n("158534"),
  l = n("846883"),
  d = n("812204"),
  o = n("243288"),
  c = n("321135"),
  f = n("873254"),
  m = n("861370"),
  h = n("726750"),
  p = n("170990"),
  M = n("304582"),
  x = n("72057"),
  g = n("489836"),
  v = n("406703"),
  S = n("343856"),
  j = n("502533"),
  _ = n("314838"),
  C = n("383161"),
  I = n("421602"),
  N = n("432487"),
  E = n("151200"),
  T = n("692986"),
  O = n("806179"),
  R = n("816106"),
  A = n("623879"),
  U = n("49111"),
  P = n("782340"),
  G = (0, i.default)((0, u.default)(function(e) {
    var t;
    let {
      user: n,
      channel: u,
      context: i,
      showChatItems: d = !0,
      showMediaItems: U = !1,
      showChannelCallItems: G = !1,
      showModalItems: y = !0,
      onSelect: b
    } = e, w = (0, O.default)(n.id, null), L = (0, C.default)(n, null, i), F = (0, E.default)(n.id, u.id), k = (0, I.default)(n.id, i), D = (0, v.default)(n, i), z = (0, x.default)({
      user: n,
      context: i
    }), W = (0, M.default)(n), B = (0, R.default)(n.id), H = (0, N.default)(n.id, u.id), Y = (0, T.default)(n.id), X = (0, j.default)(n.id, u.id), Z = (0, _.default)(n), V = (0, l.default)(null, n), q = (0, p.default)(n), J = (0, g.default)(n), K = (0, m.default)({
      id: n.id,
      label: P.default.Messages.COPY_ID_USER
    }), Q = (0, A.default)(n.id), $ = (0, c.default)(n.id), ee = (0, o.default)(u.id), et = (0, h.default)(n), en = (0, f.default)(n.id), ea = (0, S.default)(n, u), es = n.isNonUserBot(), er = u.isManaged(), eu = null === (t = u.recipients) || void 0 === t ? void 0 : t.includes(n.id);
    return (0, a.jsxs)(s.Menu, {
      navId: "user-context",
      onClose: r.closeContextMenu,
      "aria-label": P.default.Messages.USER_ACTIONS_MENU_LABEL,
      onSelect: b,
      children: [!es && (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(s.MenuGroup, {
          children: et
        }), (0, a.jsxs)(s.MenuGroup, {
          children: [y && w, d && L, k, D, !er && F, y && z, y && W, Q]
        }), U && (0, a.jsx)(s.MenuGroup, {
          children: B
        }), eu && (0, a.jsxs)(s.MenuGroup, {
          children: [!er && H, ea]
        }), (0, a.jsx)(s.MenuGroup, {
          children: y && V
        }), (0, a.jsxs)(s.MenuGroup, {
          children: [U && Y, U && X, y && Z, q, y && J, U && en]
        }), G && (0, a.jsxs)(s.MenuGroup, {
          children: [ee, $]
        })]
      }), (0, a.jsx)(s.MenuGroup, {
        children: K
      })]
    })
  }, {
    object: U.AnalyticsObjects.CONTEXT_MENU
  }), [d.default.CONTEXT_MENU, d.default.GROUP_DM_USER_MENU])