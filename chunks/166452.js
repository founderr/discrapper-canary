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
  l = n("838446"),
  d = n("158534"),
  i = n("846883"),
  s = n("812204"),
  o = n("243288"),
  f = n("321135"),
  c = n("873254"),
  m = n("861370"),
  S = n("726750"),
  M = n("170990"),
  E = n("304582"),
  g = n("72057"),
  v = n("489836"),
  _ = n("406703"),
  p = n("343856"),
  I = n("502533"),
  h = n("314838"),
  A = n("383161"),
  T = n("421602"),
  x = n("432487"),
  C = n("151200"),
  N = n("692986"),
  O = n("806179"),
  R = n("816106"),
  j = n("623879"),
  D = n("49111"),
  y = n("782340"),
  F = (0, d.default)((0, l.default)(function(e) {
    var t;
    let {
      user: n,
      channel: l,
      context: d,
      showChatItems: s = !0,
      showMediaItems: D = !1,
      showChannelCallItems: F = !1,
      showModalItems: b = !0,
      onSelect: U
    } = e, L = (0, O.default)(n.id, null), V = (0, A.default)(n, null, d), P = (0, C.default)(n.id, l.id), G = (0, T.default)(n.id, d), w = (0, _.default)(n, d), H = (0, g.default)({
      user: n,
      context: d
    }), k = (0, E.default)(n), B = (0, R.default)(n.id), z = (0, x.default)(n.id, l.id), W = (0, N.default)(n.id), Y = (0, I.default)(n.id, l.id), K = (0, h.default)(n), X = (0, i.default)(null, n), Z = (0, M.default)(n), q = (0, v.default)(n), J = (0, m.default)({
      id: n.id,
      label: y.default.Messages.COPY_ID_USER
    }), Q = (0, j.default)(n.id), $ = (0, f.default)(n.id), ee = (0, o.default)(l.id), et = (0, S.default)(n), en = (0, c.default)(n.id), ea = (0, p.default)(n, l), eu = n.isNonUserBot(), er = l.isManaged(), el = null === (t = l.recipients) || void 0 === t ? void 0 : t.includes(n.id);
    return (0, a.jsxs)(u.Menu, {
      navId: "user-context",
      onClose: r.closeContextMenu,
      "aria-label": y.default.Messages.USER_ACTIONS_MENU_LABEL,
      onSelect: U,
      children: [!eu && (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(u.MenuGroup, {
          children: et
        }), (0, a.jsxs)(u.MenuGroup, {
          children: [b && L, s && V, G, w, !er && P, b && H, b && k, Q]
        }), D && (0, a.jsx)(u.MenuGroup, {
          children: B
        }), el && (0, a.jsxs)(u.MenuGroup, {
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
  }), [s.default.CONTEXT_MENU, s.default.GROUP_DM_USER_MENU])