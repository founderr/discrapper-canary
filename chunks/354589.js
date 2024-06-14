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
  E = a("737013"),
  S = a("145474"),
  m = a("299206"),
  _ = a("819403"),
  M = a("777658"),
  g = a("858488"),
  I = a("185457"),
  A = a("570870"),
  h = a("389052"),
  v = a("24311"),
  U = a("915193"),
  x = a("332576"),
  N = a("710631"),
  T = a("297047"),
  p = a("88966"),
  C = a("397616"),
  O = a("558924"),
  R = a("991307"),
  b = a("725119"),
  D = a("700994"),
  F = a("332031"),
  j = a("981631"),
  L = a("689938");
t.default = (0, n.default)((0, d.default)(function(e) {
  var t;
  let {
    user: a,
    channel: d,
    context: n,
    showChatItems: o = !0,
    showMediaItems: j = !1,
    showChannelCallItems: V = !1,
    showModalItems: G = !0,
    onSelect: k,
    onHeightUpdate: P
  } = e, y = (0, b.default)(a.id, null), w = (0, T.default)(a, null, n), Y = (0, O.default)(a.id, d.id), B = (0, p.default)(a.id, n), H = (0, v.default)(a, n), W = (0, I.default)({
    user: a,
    context: n
  }), z = (0, g.default)({
    user: a
  }), K = (0, D.default)(a.id), q = (0, C.default)(a.id, d.id), Z = (0, R.default)(a.id), X = (0, S.useSecureFrameItem)(a.id, d.id), Q = (0, x.default)(a.id, d.id), J = (0, N.default)({
    user: a
  }), $ = (0, i.default)(null, a), ee = (0, M.default)(a), et = (0, h.default)({
    user: a
  }), ea = (0, m.default)({
    id: a.id,
    label: L.default.Messages.COPY_ID_USER
  }), eu = (0, F.default)(a.id), el = (0, c.default)(a.id), es = (0, f.default)(d.id), ed = (0, _.default)(a), en = (0, E.default)(a.id), er = (0, A.default)({
    commandType: r.ApplicationCommandType.USER,
    commandTargetId: a.id,
    channel: d,
    guildId: void 0,
    onHeightUpdate: P
  }), ei = (0, U.default)(a, d), eo = a.isNonUserBot(), ef = d.isManaged(), ec = null === (t = d.recipients) || void 0 === t ? void 0 : t.includes(a.id);
  return (0, u.jsxs)(l.Menu, {
    navId: "user-context",
    onClose: s.closeContextMenu,
    "aria-label": L.default.Messages.USER_ACTIONS_MENU_LABEL,
    onSelect: k,
    children: [!eo && (0, u.jsxs)(u.Fragment, {
      children: [(0, u.jsx)(l.MenuGroup, {
        children: ed
      }), (0, u.jsxs)(l.MenuGroup, {
        children: [G && y, o && w, B, H, !ef && Y, G && W, G && z, eu]
      }), j && (0, u.jsx)(l.MenuGroup, {
        children: K
      }), ec && (0, u.jsxs)(l.MenuGroup, {
        children: [!ef && q, ei]
      }), (0, u.jsx)(l.MenuGroup, {
        children: G && $
      }), (0, u.jsxs)(l.MenuGroup, {
        children: [j && Z, j && X, j && Q, er, G && J, ee, G && et, j && en]
      }), V && (0, u.jsxs)(l.MenuGroup, {
        children: [es, el]
      })]
    }), (0, u.jsx)(l.MenuGroup, {
      children: ea
    })]
  })
}, {
  object: j.AnalyticsObjects.CONTEXT_MENU
}), [o.default.CONTEXT_MENU, o.default.GROUP_DM_USER_MENU])