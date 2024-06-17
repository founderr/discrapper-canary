"use strict";
a.r(t);
var u = a("735250");
a("470079");
var l = a("481060"),
  s = a("239091"),
  d = a("883385"),
  n = a("108843"),
  r = a("911969"),
  i = a("947440"),
  o = a("100527"),
  f = a("441061"),
  c = a("167675"),
  m = a("737013"),
  S = a("145474"),
  M = a("299206"),
  E = a("819403"),
  g = a("777658"),
  _ = a("858488"),
  v = a("185457"),
  I = a("570870"),
  h = a("389052"),
  x = a("24311"),
  C = a("915193"),
  p = a("332576"),
  N = a("710631"),
  A = a("297047"),
  T = a("88966"),
  U = a("397616"),
  O = a("558924"),
  b = a("991307"),
  j = a("725119"),
  R = a("700994"),
  F = a("332031"),
  L = a("981631"),
  D = a("689938");
t.default = (0, n.default)((0, d.default)(function(e) {
  var t;
  let {
    user: a,
    channel: d,
    context: n,
    showChatItems: o = !0,
    showMediaItems: L = !1,
    showChannelCallItems: k = !1,
    showModalItems: P = !0,
    onSelect: V,
    onHeightUpdate: G
  } = e, y = (0, j.default)(a.id, null), w = (0, A.default)(a, null, n), B = (0, O.default)(a.id, d.id), z = (0, T.default)(a.id, n), W = (0, x.default)(a, n), H = (0, v.default)({
    user: a,
    context: n
  }), Y = (0, _.default)({
    user: a
  }), K = (0, R.default)(a.id), q = (0, U.default)(a.id, d.id), Z = (0, b.default)(a.id), X = (0, S.useSecureFrameItem)(a.id, d.id), Q = (0, p.default)(a.id, d.id), J = (0, N.default)({
    user: a
  }), $ = (0, i.default)(null, a), ee = (0, g.default)(a), et = (0, h.default)({
    user: a
  }), ea = (0, M.default)({
    id: a.id,
    label: D.default.Messages.COPY_ID_USER
  }), eu = (0, F.default)(a.id), el = (0, c.default)(a.id), es = (0, f.default)(d.id), ed = (0, E.default)(a), en = (0, m.default)(a.id), er = (0, I.default)({
    commandType: r.ApplicationCommandType.USER,
    commandTargetId: a.id,
    channel: d,
    guildId: void 0,
    onHeightUpdate: G
  }), ei = (0, C.default)(a, d), eo = a.isNonUserBot(), ef = d.isManaged(), ec = null === (t = d.recipients) || void 0 === t ? void 0 : t.includes(a.id);
  return (0, u.jsxs)(l.Menu, {
    navId: "user-context",
    onClose: s.closeContextMenu,
    "aria-label": D.default.Messages.USER_ACTIONS_MENU_LABEL,
    onSelect: V,
    children: [!eo && (0, u.jsxs)(u.Fragment, {
      children: [(0, u.jsx)(l.MenuGroup, {
        children: ed
      }), (0, u.jsxs)(l.MenuGroup, {
        children: [P && y, o && w, z, W, !ef && B, P && H, P && Y, eu]
      }), L && (0, u.jsx)(l.MenuGroup, {
        children: K
      }), ec && (0, u.jsxs)(l.MenuGroup, {
        children: [!ef && q, ei]
      }), (0, u.jsx)(l.MenuGroup, {
        children: P && $
      }), (0, u.jsxs)(l.MenuGroup, {
        children: [L && Z, L && X, L && Q, er, P && J, ee, P && et, L && en]
      }), k && (0, u.jsxs)(l.MenuGroup, {
        children: [es, el]
      })]
    }), (0, u.jsx)(l.MenuGroup, {
      children: ea
    })]
  })
}, {
  object: L.AnalyticsObjects.CONTEXT_MENU
}), [o.default.CONTEXT_MENU, o.default.GROUP_DM_USER_MENU])