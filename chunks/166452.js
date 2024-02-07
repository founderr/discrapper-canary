"use strict";
n.r(t), n.d(t, {
  default: function() {
    return D
  }
});
var u = n("37983");
n("884691");
var r = n("77078"),
  a = n("272030"),
  i = n("838446"),
  l = n("158534"),
  s = n("846883"),
  d = n("812204"),
  o = n("243288"),
  c = n("321135"),
  f = n("873254"),
  _ = n("861370"),
  E = n("726750"),
  T = n("170990"),
  S = n("304582"),
  A = n("72057"),
  N = n("489836"),
  p = n("406703"),
  I = n("343856"),
  C = n("502533"),
  R = n("314838"),
  U = n("383161"),
  h = n("421602"),
  O = n("432487"),
  v = n("151200"),
  P = n("692986"),
  g = n("806179"),
  m = n("816106"),
  M = n("623879"),
  y = n("49111"),
  G = n("782340"),
  D = (0, l.default)((0, i.default)(function(e) {
    var t;
    let {
      user: n,
      channel: i,
      context: l,
      showChatItems: d = !0,
      showMediaItems: y = !1,
      showChannelCallItems: D = !1,
      showModalItems: x = !0,
      onSelect: L
    } = e, F = (0, g.default)(n.id, null), b = (0, U.default)(n, null, l), j = (0, v.default)(n.id, i.id), w = (0, h.default)(n.id, l), V = (0, p.default)(n, l), k = (0, A.default)({
      user: n,
      context: l
    }), B = (0, S.default)(n), H = (0, m.default)(n.id), Y = (0, O.default)(n.id, i.id), W = (0, P.default)(n.id), z = (0, C.default)(n.id, i.id), q = (0, R.default)(n), K = (0, s.default)(null, n), X = (0, T.default)(n), Z = (0, N.default)(n), J = (0, _.default)({
      id: n.id,
      label: G.default.Messages.COPY_ID_USER
    }), Q = (0, M.default)(n.id), $ = (0, c.default)(n.id), ee = (0, o.default)(i.id), et = (0, E.default)(n), en = (0, f.default)(n.id), eu = (0, I.default)(n, i), er = n.isNonUserBot(), ea = i.isManaged(), ei = null === (t = i.recipients) || void 0 === t ? void 0 : t.includes(n.id);
    return (0, u.jsxs)(r.Menu, {
      navId: "user-context",
      onClose: a.closeContextMenu,
      "aria-label": G.default.Messages.USER_ACTIONS_MENU_LABEL,
      onSelect: L,
      children: [!er && (0, u.jsxs)(u.Fragment, {
        children: [(0, u.jsx)(r.MenuGroup, {
          children: et
        }), (0, u.jsxs)(r.MenuGroup, {
          children: [x && F, d && b, w, V, !ea && j, x && k, x && B, Q]
        }), y && (0, u.jsx)(r.MenuGroup, {
          children: H
        }), ei && (0, u.jsxs)(r.MenuGroup, {
          children: [!ea && Y, eu]
        }), (0, u.jsx)(r.MenuGroup, {
          children: x && K
        }), (0, u.jsxs)(r.MenuGroup, {
          children: [y && W, y && z, x && q, X, x && Z, y && en]
        }), D && (0, u.jsxs)(r.MenuGroup, {
          children: [ee, $]
        })]
      }), (0, u.jsx)(r.MenuGroup, {
        children: J
      })]
    })
  }, {
    object: y.AnalyticsObjects.CONTEXT_MENU
  }), [d.default.CONTEXT_MENU, d.default.GROUP_DM_USER_MENU])