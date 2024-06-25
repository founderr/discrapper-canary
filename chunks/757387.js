t.r(n);
var i = t(735250);
t(470079);
var r = t(442837),
  l = t(481060),
  u = t(239091),
  a = t(883385),
  o = t(108843),
  s = t(911969),
  d = t(947440),
  c = t(100527),
  E = t(441061),
  _ = t(167675),
  I = t(737013),
  T = t(145474),
  N = t(299206),
  S = t(976192),
  A = t(819403),
  p = t(286694),
  O = t(592125),
  f = t(777658),
  M = t(858488),
  Z = t(185457),
  h = t(933409),
  R = t(570870),
  g = t(389052),
  C = t(24311),
  m = t(332576),
  G = t(710631),
  v = t(297047),
  y = t(88966),
  D = t(712301),
  P = t(991307),
  U = t(725119),
  b = t(931617),
  L = t(700994),
  x = t(332031),
  H = t(981631),
  F = t(689938);
n.default = (0, o.Z)((0, a.Z)(function(e) {
  let {
    user: n,
    guildId: t,
    channel: a,
    showMediaItems: o = !1,
    showChatItems: c = !0,
    showChannelCallItems: V = !1,
    showModalItems: B = !0,
    showStageChannelItems: k = !1,
    context: j,
    onSelect: w,
    onHeightUpdate: K,
    viewingChannelId: W
  } = e, Y = {
    page: H.ZY5.GUILD_CHANNEL,
    section: H.jXE.CHAT_USERNAME,
    object: H.qAy.CONTEXT_MENU_ITEM
  }, q = (0, U.Z)(n.id, t, a.id), z = (0, v.Z)(n, t, j), Q = (0, y.Z)(n.id, j), X = (0, x.Z)(n.id), $ = (0, C.Z)(n, j), J = (0, Z.Z)({
    user: n,
    guildId: t,
    context: j
  }), ee = (0, M.Z)({
    user: n
  }), en = (0, L.Z)(n.id), et = (0, P.Z)(n.id), ei = (0, T.P)(n.id, a.id), er = (0, S.Z)({
    guildId: t,
    userId: n.id,
    analyticsLocation: Y,
    context: j
  }), el = (0, G.Z)({
    user: n,
    guildId: t
  }), eu = (0, d.Z)(null, n), ea = (0, f.Z)(n), eo = (0, g.Z)({
    user: n
  }), es = (0, h.Z)(n, t, a.id), ed = (0, b.Z)(n.id, t), ec = (0, D.Z)(n, t), eE = (0, N.Z)({
    id: n.id,
    label: F.Z.Messages.COPY_ID_USER
  }), e_ = (0, m.Z)(n.id, a.id), eI = (0, _.Z)(n.id), eT = (0, E.Z)(a.id), eN = (0, A.Z)(n), eS = (0, p.Z)(n, t, a.id), eA = (0, r.e7)([O.Z], () => null != W ? O.Z.getChannel(W) : null), ep = (0, R.Z)({
    commandType: s.yU.USER,
    commandTargetId: n.id,
    channel: null != eA ? eA : a,
    guildId: t,
    onHeightUpdate: K,
    context: j
  }), eO = (0, I.Z)(n.id), ef = n.isNonUserBot();
  return (0, i.jsxs)(l.Menu, {
    navId: "user-context",
    onClose: u.Zy,
    "aria-label": F.Z.Messages.USER_ACTIONS_MENU_LABEL,
    onSelect: w,
    children: [!ef && (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsxs)(l.MenuGroup, {
        children: [eN, k && eS]
      }), (0, i.jsxs)(l.MenuGroup, {
        children: [B && q, c && z, Q, $, B && J, B && ee, X]
      }), o && (0, i.jsx)(l.MenuGroup, {
        children: en
      }), (0, i.jsx)(l.MenuGroup, {
        children: B && eu
      }), (0, i.jsxs)(l.MenuGroup, {
        children: [o && et, o && ei, o && e_, B && er, ep, B && el, ea, B && eo, V && eO]
      }), (0, i.jsx)(l.MenuGroup, {
        children: es
      }), (0, i.jsxs)(l.MenuGroup, {
        children: [ed, ec]
      }), V && (0, i.jsxs)(l.MenuGroup, {
        children: [eT, eI]
      })]
    }), (0, i.jsx)(l.MenuGroup, {
      children: eE
    })]
  })
}, {
  object: H.qAy.CONTEXT_MENU
}), [c.Z.CONTEXT_MENU, c.Z.GUILD_CHANNEL_USER_MENU])