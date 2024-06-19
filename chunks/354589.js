r.r(n);
var i = r(735250);
r(470079);
var t = r(481060),
  s = r(239091),
  a = r(883385),
  l = r(108843),
  u = r(911969),
  d = r(947440),
  o = r(100527),
  c = r(441061),
  Z = r(167675),
  f = r(737013),
  m = r(145474),
  g = r(299206),
  _ = r(819403),
  v = r(777658),
  E = r(858488),
  M = r(185457),
  h = r(570870),
  I = r(389052),
  x = r(24311),
  S = r(915193),
  p = r(332576),
  C = r(710631),
  N = r(297047),
  j = r(88966),
  R = r(397616),
  A = r(558924),
  U = r(991307),
  O = r(725119),
  T = r(700994),
  P = r(332031),
  b = r(981631),
  G = r(689938);
n.default = (0, l.Z)((0, a.Z)(function(e) {
  var n;
  let {
    user: r,
    channel: a,
    context: l,
    showChatItems: o = !0,
    showMediaItems: b = !1,
    showChannelCallItems: F = !1,
    showModalItems: k = !0,
    onSelect: w,
    onHeightUpdate: L
  } = e, y = (0, O.Z)(r.id, null), V = (0, N.Z)(r, null, l), z = (0, A.Z)(r.id, a.id), D = (0, j.Z)(r.id, l), W = (0, x.Z)(r, l), H = (0, M.Z)({
    user: r,
    context: l
  }), K = (0, E.Z)({
    user: r
  }), B = (0, T.Z)(r.id), Y = (0, R.Z)(r.id, a.id), J = (0, U.Z)(r.id), X = (0, m.P)(r.id, a.id), q = (0, p.Z)(r.id, a.id), Q = (0, C.Z)({
    user: r
  }), $ = (0, d.Z)(null, r), ee = (0, v.Z)(r), en = (0, I.Z)({
    user: r
  }), er = (0, g.Z)({
    id: r.id,
    label: G.Z.Messages.COPY_ID_USER
  }), ei = (0, P.Z)(r.id), et = (0, Z.Z)(r.id), es = (0, c.Z)(a.id), ea = (0, _.Z)(r), el = (0, f.Z)(r.id), eu = (0, h.Z)({
    commandType: u.yU.USER,
    commandTargetId: r.id,
    channel: a,
    guildId: void 0,
    onHeightUpdate: L
  }), ed = (0, S.Z)(r, a), eo = r.isNonUserBot(), ec = a.isManaged(), eZ = null === (n = a.recipients) || void 0 === n ? void 0 : n.includes(r.id);
  return (0, i.jsxs)(t.Menu, {
    navId: "user-context",
    onClose: s.Zy,
    "aria-label": G.Z.Messages.USER_ACTIONS_MENU_LABEL,
    onSelect: w,
    children: [!eo && (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(t.MenuGroup, {
        children: ea
      }), (0, i.jsxs)(t.MenuGroup, {
        children: [k && y, o && V, D, W, !ec && z, k && H, k && K, ei]
      }), b && (0, i.jsx)(t.MenuGroup, {
        children: B
      }), eZ && (0, i.jsxs)(t.MenuGroup, {
        children: [!ec && Y, ed]
      }), (0, i.jsx)(t.MenuGroup, {
        children: k && $
      }), (0, i.jsxs)(t.MenuGroup, {
        children: [b && J, b && X, b && q, eu, k && Q, ee, k && en, b && el]
      }), F && (0, i.jsxs)(t.MenuGroup, {
        children: [es, et]
      })]
    }), (0, i.jsx)(t.MenuGroup, {
      children: er
    })]
  })
}, {
  object: b.qAy.CONTEXT_MENU
}), [o.Z.CONTEXT_MENU, o.Z.GROUP_DM_USER_MENU])