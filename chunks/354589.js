"use strict";
a.r(t);
var l = a("735250");
a("470079");
var u = a("481060"),
  d = a("239091"),
  s = a("883385"),
  n = a("108843"),
  i = a("911969"),
  r = a("947440"),
  o = a("100527"),
  f = a("441061"),
  c = a("167675"),
  M = a("737013"),
  S = a("299206"),
  m = a("819403"),
  g = a("777658"),
  E = a("858488"),
  _ = a("185457"),
  v = a("570870"),
  h = a("389052"),
  x = a("24311"),
  N = a("915193"),
  A = a("332576"),
  C = a("710631"),
  T = a("297047"),
  p = a("88966"),
  I = a("397616"),
  O = a("558924"),
  U = a("991307"),
  j = a("725119"),
  R = a("700994"),
  L = a("332031"),
  b = a("981631"),
  D = a("689938");
t.default = (0, n.default)((0, s.default)(function(e) {
  var t;
  let {
    user: a,
    channel: s,
    context: n,
    showChatItems: o = !0,
    showMediaItems: b = !1,
    showChannelCallItems: F = !1,
    showModalItems: P = !0,
    onSelect: k,
    onHeightUpdate: V
  } = e, G = (0, j.default)(a.id, null), w = (0, T.default)(a, null, n), y = (0, O.default)(a.id, s.id), B = (0, p.default)(a.id, n), z = (0, x.default)(a, n), H = (0, _.default)({
    user: a,
    context: n
  }), W = (0, E.default)({
    user: a
  }), Y = (0, R.default)(a.id), K = (0, I.default)(a.id, s.id), q = (0, U.default)(a.id), Z = (0, A.default)(a.id, s.id), X = (0, C.default)({
    user: a
  }), Q = (0, r.default)(null, a), J = (0, g.default)(a), $ = (0, h.default)({
    user: a
  }), ee = (0, S.default)({
    id: a.id,
    label: D.default.Messages.COPY_ID_USER
  }), et = (0, L.default)(a.id), ea = (0, c.default)(a.id), el = (0, f.default)(s.id), eu = (0, m.default)(a), ed = (0, M.default)(a.id), es = (0, v.default)({
    commandType: i.ApplicationCommandType.USER,
    commandTargetId: a.id,
    channel: s,
    guildId: void 0,
    onHeightUpdate: V
  }), en = (0, N.default)(a, s), ei = a.isNonUserBot(), er = s.isManaged(), eo = null === (t = s.recipients) || void 0 === t ? void 0 : t.includes(a.id);
  return (0, l.jsxs)(u.Menu, {
    navId: "user-context",
    onClose: d.closeContextMenu,
    "aria-label": D.default.Messages.USER_ACTIONS_MENU_LABEL,
    onSelect: k,
    children: [!ei && (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)(u.MenuGroup, {
        children: eu
      }), (0, l.jsxs)(u.MenuGroup, {
        children: [P && G, o && w, B, z, !er && y, P && H, P && W, et]
      }), b && (0, l.jsx)(u.MenuGroup, {
        children: Y
      }), eo && (0, l.jsxs)(u.MenuGroup, {
        children: [!er && K, en]
      }), (0, l.jsx)(u.MenuGroup, {
        children: P && Q
      }), (0, l.jsxs)(u.MenuGroup, {
        children: [b && q, b && Z, es, P && X, J, P && $, b && ed]
      }), F && (0, l.jsxs)(u.MenuGroup, {
        children: [el, ea]
      })]
    }), (0, l.jsx)(u.MenuGroup, {
      children: ee
    })]
  })
}, {
  object: b.AnalyticsObjects.CONTEXT_MENU
}), [o.default.CONTEXT_MENU, o.default.GROUP_DM_USER_MENU])