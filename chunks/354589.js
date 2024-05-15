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
  f = a("581364"),
  c = a("441061"),
  M = a("167675"),
  S = a("737013"),
  m = a("299206"),
  g = a("819403"),
  E = a("777658"),
  _ = a("858488"),
  v = a("185457"),
  h = a("570870"),
  x = a("389052"),
  p = a("24311"),
  A = a("915193"),
  N = a("332576"),
  C = a("710631"),
  T = a("297047"),
  I = a("88966"),
  U = a("397616"),
  O = a("558924"),
  j = a("991307"),
  R = a("725119"),
  L = a("700994"),
  b = a("332031"),
  D = a("981631"),
  F = a("689938");
t.default = (0, n.default)((0, s.default)(function(e) {
  var t;
  let {
    user: a,
    channel: s,
    context: n,
    showChatItems: o = !0,
    showMediaItems: D = !1,
    showChannelCallItems: P = !1,
    showModalItems: k = !0,
    onSelect: G,
    onHeightUpdate: V
  } = e, w = (0, R.default)(a.id, null), y = (0, T.default)(a, null, n), B = (0, O.default)(a.id, s.id), z = (0, I.default)(a.id, n), H = (0, p.default)(a, n), W = (0, v.default)({
    user: a,
    context: n
  }), Y = (0, _.default)({
    user: a
  }), K = (0, L.default)(a.id), q = (0, U.default)(a.id, s.id), Z = (0, j.default)(a.id), X = (0, N.default)(a.id, s.id), Q = (0, C.default)({
    user: a
  }), J = (0, r.default)(null, a), $ = (0, E.default)(a), ee = (0, x.default)({
    user: a
  }), et = (0, m.default)({
    id: a.id,
    label: F.default.Messages.COPY_ID_USER
  }), ea = (0, b.default)(a.id), el = (0, M.default)(a.id), eu = (0, c.default)(s.id), ed = (0, g.default)(a), es = (0, S.default)(a.id), en = (0, h.default)({
    commandType: i.ApplicationCommandType.USER,
    commandTargetId: a.id,
    channel: s,
    guildId: void 0,
    onHeightUpdate: V
  }), ei = (0, A.default)(a, s), er = (0, f.useIsUserInUserAppExperiment)({
    location: "GroupDMUserContextMenu"
  }), eo = a.isNonUserBot(), ef = s.isManaged(), ec = null === (t = s.recipients) || void 0 === t ? void 0 : t.includes(a.id);
  return (0, l.jsxs)(u.Menu, {
    navId: "user-context",
    onClose: d.closeContextMenu,
    "aria-label": F.default.Messages.USER_ACTIONS_MENU_LABEL,
    onSelect: G,
    children: [!eo && (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)(u.MenuGroup, {
        children: ed
      }), (0, l.jsxs)(u.MenuGroup, {
        children: [k && w, o && y, z, H, !ef && B, k && W, k && Y, ea]
      }), D && (0, l.jsx)(u.MenuGroup, {
        children: K
      }), ec && (0, l.jsxs)(u.MenuGroup, {
        children: [!ef && q, ei]
      }), (0, l.jsx)(u.MenuGroup, {
        children: k && J
      }), (0, l.jsxs)(u.MenuGroup, {
        children: [D && Z, D && X, er && en, k && Q, $, k && ee, D && es]
      }), P && (0, l.jsxs)(u.MenuGroup, {
        children: [eu, el]
      })]
    }), (0, l.jsx)(u.MenuGroup, {
      children: et
    })]
  })
}, {
  object: D.AnalyticsObjects.CONTEXT_MENU
}), [o.default.CONTEXT_MENU, o.default.GROUP_DM_USER_MENU])