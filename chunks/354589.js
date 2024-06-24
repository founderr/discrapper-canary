i.r(n);
var r = i(735250);
i(470079);
var s = i(481060),
  a = i(239091),
  t = i(883385),
  l = i(108843),
  d = i(911969),
  u = i(947440),
  o = i(100527),
  c = i(441061),
  Z = i(167675),
  m = i(737013),
  f = i(145474),
  M = i(299206),
  g = i(819403),
  h = i(777658),
  E = i(858488),
  v = i(185457),
  _ = i(570870),
  x = i(389052),
  I = i(24311),
  p = i(915193),
  C = i(332576),
  N = i(710631),
  j = i(297047),
  S = i(88966),
  R = i(397616),
  A = i(558924),
  T = i(991307),
  O = i(725119),
  U = i(700994),
  P = i(332031),
  G = i(981631),
  b = i(689938);
n.default = (0, l.Z)((0, t.Z)(function(e) {
  var n;
  let {
    user: i,
    channel: t,
    context: l,
    showChatItems: o = !0,
    showMediaItems: G = !1,
    showChannelCallItems: w = !1,
    showModalItems: F = !0,
    onSelect: L,
    onHeightUpdate: k
  } = e, y = (0, O.Z)(i.id, null), z = (0, j.Z)(i, null, l), V = (0, A.Z)(i.id, t.id), D = (0, S.Z)(i.id, l), W = (0, I.Z)(i, l), H = (0, v.Z)({
    user: i,
    context: l
  }), K = (0, E.Z)({
    user: i
  }), B = (0, U.Z)(i.id), Y = (0, R.Z)(i.id, t.id), X = (0, T.Z)(i.id), q = (0, f.P)(i.id, t.id), J = (0, C.Z)(i.id, t.id), Q = (0, N.Z)({
    user: i
  }), $ = (0, u.Z)(null, i), ee = (0, h.Z)(i), en = (0, x.Z)({
    user: i
  }), ei = (0, M.Z)({
    id: i.id,
    label: b.Z.Messages.COPY_ID_USER
  }), er = (0, P.Z)(i.id), es = (0, Z.Z)(i.id), ea = (0, c.Z)(t.id), et = (0, g.Z)(i), el = (0, m.Z)(i.id), ed = (0, _.Z)({
    commandType: d.yU.USER,
    commandTargetId: i.id,
    channel: t,
    guildId: void 0,
    onHeightUpdate: k
  }), eu = (0, p.Z)(i, t), eo = i.isNonUserBot(), ec = t.isManaged(), eZ = null === (n = t.recipients) || void 0 === n ? void 0 : n.includes(i.id);
  return (0, r.jsxs)(s.Menu, {
    navId: "user-context",
    onClose: a.Zy,
    "aria-label": b.Z.Messages.USER_ACTIONS_MENU_LABEL,
    onSelect: L,
    children: [!eo && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(s.MenuGroup, {
        children: et
      }), (0, r.jsxs)(s.MenuGroup, {
        children: [F && y, o && z, D, W, !ec && V, F && H, F && K, er]
      }), G && (0, r.jsx)(s.MenuGroup, {
        children: B
      }), eZ && (0, r.jsxs)(s.MenuGroup, {
        children: [!ec && Y, eu]
      }), (0, r.jsx)(s.MenuGroup, {
        children: F && $
      }), (0, r.jsxs)(s.MenuGroup, {
        children: [G && X, G && q, G && J, ed, F && Q, ee, F && en, G && el]
      }), w && (0, r.jsxs)(s.MenuGroup, {
        children: [ea, es]
      })]
    }), (0, r.jsx)(s.MenuGroup, {
      children: ei
    })]
  })
}, {
  object: G.qAy.CONTEXT_MENU
}), [o.Z.CONTEXT_MENU, o.Z.GROUP_DM_USER_MENU])