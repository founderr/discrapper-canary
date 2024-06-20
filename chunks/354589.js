r.r(n);
var i = r(735250);
r(470079);
var t = r(481060),
  a = r(239091),
  s = r(883385),
  l = r(108843),
  u = r(911969),
  d = r(947440),
  o = r(100527),
  c = r(441061),
  Z = r(167675),
  f = r(737013),
  m = r(145474),
  g = r(299206),
  M = r(819403),
  v = r(777658),
  E = r(858488),
  _ = r(185457),
  h = r(570870),
  x = r(389052),
  I = r(24311),
  p = r(915193),
  C = r(332576),
  S = r(710631),
  N = r(297047),
  j = r(88966),
  R = r(397616),
  A = r(558924),
  T = r(991307),
  U = r(725119),
  O = r(700994),
  P = r(332031),
  b = r(981631),
  G = r(689938);
n.default = (0, l.Z)((0, s.Z)(function(e) {
  var n;
  let {
    user: r,
    channel: s,
    context: l,
    showChatItems: o = !0,
    showMediaItems: b = !1,
    showChannelCallItems: F = !1,
    showModalItems: w = !0,
    onSelect: L,
    onHeightUpdate: k
  } = e, y = (0, U.Z)(r.id, null), z = (0, N.Z)(r, null, l), V = (0, A.Z)(r.id, s.id), D = (0, j.Z)(r.id, l), W = (0, I.Z)(r, l), H = (0, _.Z)({
    user: r,
    context: l
  }), K = (0, E.Z)({
    user: r
  }), B = (0, O.Z)(r.id), Y = (0, R.Z)(r.id, s.id), J = (0, T.Z)(r.id), X = (0, m.P)(r.id, s.id), q = (0, C.Z)(r.id, s.id), Q = (0, S.Z)({
    user: r
  }), $ = (0, d.Z)(null, r), ee = (0, v.Z)(r), en = (0, x.Z)({
    user: r
  }), er = (0, g.Z)({
    id: r.id,
    label: G.Z.Messages.COPY_ID_USER
  }), ei = (0, P.Z)(r.id), et = (0, Z.Z)(r.id), ea = (0, c.Z)(s.id), es = (0, M.Z)(r), el = (0, f.Z)(r.id), eu = (0, h.Z)({
    commandType: u.yU.USER,
    commandTargetId: r.id,
    channel: s,
    guildId: void 0,
    onHeightUpdate: k
  }), ed = (0, p.Z)(r, s), eo = r.isNonUserBot(), ec = s.isManaged(), eZ = null === (n = s.recipients) || void 0 === n ? void 0 : n.includes(r.id);
  return (0, i.jsxs)(t.Menu, {
    navId: "user-context",
    onClose: a.Zy,
    "aria-label": G.Z.Messages.USER_ACTIONS_MENU_LABEL,
    onSelect: L,
    children: [!eo && (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(t.MenuGroup, {
        children: es
      }), (0, i.jsxs)(t.MenuGroup, {
        children: [w && y, o && z, D, W, !ec && V, w && H, w && K, ei]
      }), b && (0, i.jsx)(t.MenuGroup, {
        children: B
      }), eZ && (0, i.jsxs)(t.MenuGroup, {
        children: [!ec && Y, ed]
      }), (0, i.jsx)(t.MenuGroup, {
        children: w && $
      }), (0, i.jsxs)(t.MenuGroup, {
        children: [b && J, b && X, b && q, eu, w && Q, ee, w && en, b && el]
      }), F && (0, i.jsxs)(t.MenuGroup, {
        children: [ea, et]
      })]
    }), (0, i.jsx)(t.MenuGroup, {
      children: er
    })]
  })
}, {
  object: b.qAy.CONTEXT_MENU
}), [o.Z.CONTEXT_MENU, o.Z.GROUP_DM_USER_MENU])