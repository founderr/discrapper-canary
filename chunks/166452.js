"use strict";
n.r(t), n.d(t, {
  default: function() {
    return F
  }
});
var a = n("37983");
n("884691");
var u = n("77078"),
  r = n("272030"),
  s = n("838446"),
  l = n("158534"),
  d = n("846883"),
  i = n("812204"),
  o = n("243288"),
  f = n("321135"),
  c = n("873254"),
  S = n("861370"),
  M = n("726750"),
  m = n("170990"),
  E = n("304582"),
  g = n("72057"),
  _ = n("489836"),
  v = n("406703"),
  I = n("343856"),
  p = n("502533"),
  A = n("314838"),
  h = n("383161"),
  x = n("421602"),
  T = n("432487"),
  C = n("151200"),
  N = n("692986"),
  O = n("806179"),
  R = n("816106"),
  j = n("623879"),
  D = n("49111"),
  y = n("782340"),
  F = (0, l.default)((0, s.default)(function(e) {
    var t;
    let {
      user: n,
      channel: s,
      context: l,
      showChatItems: i = !0,
      showMediaItems: D = !1,
      showChannelCallItems: F = !1,
      showModalItems: b = !0,
      onSelect: U
    } = e, L = (0, O.default)(n.id, null), V = (0, h.default)(n, null, l), P = (0, C.default)(n.id, s.id), G = (0, x.default)(n.id, l), w = (0, v.default)(n, l), H = (0, g.default)({
      user: n,
      context: l
    }), k = (0, E.default)(n), B = (0, R.default)(n.id), z = (0, T.default)(n.id, s.id), W = (0, N.default)(n.id), Y = (0, p.default)(n.id, s.id), K = (0, A.default)(n), X = (0, d.default)(null, n), Z = (0, m.default)(n), q = (0, _.default)(n), J = (0, S.default)({
      id: n.id,
      label: y.default.Messages.COPY_ID_USER
    }), Q = (0, j.default)(n.id), $ = (0, f.default)(n.id), ee = (0, o.default)(s.id), et = (0, M.default)(n), en = (0, c.default)(n.id), ea = (0, I.default)(n, s), eu = n.isNonUserBot(), er = s.isManaged(), es = null === (t = s.recipients) || void 0 === t ? void 0 : t.includes(n.id);
    return (0, a.jsxs)(u.Menu, {
      navId: "user-context",
      onClose: r.closeContextMenu,
      "aria-label": y.default.Messages.USER_ACTIONS_MENU_LABEL,
      onSelect: U,
      children: [!eu && (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(u.MenuGroup, {
          children: et
        }), (0, a.jsxs)(u.MenuGroup, {
          children: [b && L, i && V, G, w, !er && P, b && H, b && k, Q]
        }), D && (0, a.jsx)(u.MenuGroup, {
          children: B
        }), es && (0, a.jsxs)(u.MenuGroup, {
          children: [!er && z, ea]
        }), (0, a.jsx)(u.MenuGroup, {
          children: b && X
        }), (0, a.jsxs)(u.MenuGroup, {
          children: [D && W, D && Y, b && K, Z, b && q, D && en]
        }), F && (0, a.jsxs)(u.MenuGroup, {
          children: [ee, $]
        })]
      }), (0, a.jsx)(u.MenuGroup, {
        children: J
      })]
    })
  }, {
    object: D.AnalyticsObjects.CONTEXT_MENU
  }), [i.default.CONTEXT_MENU, i.default.GROUP_DM_USER_MENU])