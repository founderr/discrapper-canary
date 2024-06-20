i.r(n);
var r = i(735250);
i(470079);
var t = i(442837),
  l = i(481060),
  a = i(239091),
  s = i(883385),
  u = i(108843),
  d = i(911969),
  o = i(947440),
  Z = i(100527),
  c = i(441061),
  E = i(167675),
  _ = i(737013),
  M = i(145474),
  C = i(299206),
  N = i(976192),
  f = i(819403),
  A = i(286694),
  I = i(592125),
  T = i(777658),
  S = i(858488),
  U = i(185457),
  g = i(933409),
  h = i(570870),
  p = i(389052),
  v = i(24311),
  x = i(332576),
  P = i(710631),
  m = i(297047),
  j = i(88966),
  R = i(712301),
  O = i(991307),
  G = i(725119),
  L = i(931617),
  b = i(700994),
  F = i(332031),
  y = i(981631),
  V = i(689938);
n.default = (0, u.Z)((0, s.Z)(function(e) {
  let {
    user: n,
    guildId: i,
    channel: s,
    showMediaItems: u = !1,
    showChatItems: Z = !0,
    showChannelCallItems: k = !1,
    showModalItems: H = !0,
    showStageChannelItems: D = !1,
    context: K,
    onSelect: w,
    onHeightUpdate: B,
    viewingChannelId: X
  } = e, Y = {
    page: y.ZY5.GUILD_CHANNEL,
    section: y.jXE.CHAT_USERNAME,
    object: y.qAy.CONTEXT_MENU_ITEM
  }, q = (0, G.Z)(n.id, i, s.id), z = (0, m.Z)(n, i, K), W = (0, j.Z)(n.id, K), J = (0, F.Z)(n.id), Q = (0, v.Z)(n, K), $ = (0, U.Z)({
    user: n,
    guildId: i,
    context: K
  }), ee = (0, S.Z)({
    user: n
  }), en = (0, b.Z)(n.id), ei = (0, O.Z)(n.id), er = (0, M.P)(n.id, s.id), et = (0, N.Z)({
    guildId: i,
    userId: n.id,
    analyticsLocation: Y,
    context: K
  }), el = (0, P.Z)({
    user: n,
    guildId: i
  }), ea = (0, o.Z)(null, n), es = (0, T.Z)(n), eu = (0, p.Z)({
    user: n
  }), ed = (0, g.Z)(n, i, s.id), eo = (0, L.Z)(n.id, i), eZ = (0, R.Z)(n, i), ec = (0, C.Z)({
    id: n.id,
    label: V.Z.Messages.COPY_ID_USER
  }), eE = (0, x.Z)(n.id, s.id), e_ = (0, E.Z)(n.id), eM = (0, c.Z)(s.id), eC = (0, f.Z)(n), eN = (0, A.Z)(n, i, s.id), ef = (0, t.e7)([I.Z], () => null != X ? I.Z.getChannel(X) : null), eA = (0, h.Z)({
    commandType: d.yU.USER,
    commandTargetId: n.id,
    channel: null != ef ? ef : s,
    guildId: i,
    onHeightUpdate: B,
    context: K
  }), eI = (0, _.Z)(n.id), eT = n.isNonUserBot();
  return (0, r.jsxs)(l.Menu, {
    navId: "user-context",
    onClose: a.Zy,
    "aria-label": V.Z.Messages.USER_ACTIONS_MENU_LABEL,
    onSelect: w,
    children: [!eT && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsxs)(l.MenuGroup, {
        children: [eC, D && eN]
      }), (0, r.jsxs)(l.MenuGroup, {
        children: [H && q, Z && z, W, Q, H && $, H && ee, J]
      }), u && (0, r.jsx)(l.MenuGroup, {
        children: en
      }), (0, r.jsx)(l.MenuGroup, {
        children: H && ea
      }), (0, r.jsxs)(l.MenuGroup, {
        children: [u && ei, u && er, u && eE, H && et, eA, H && el, es, H && eu, k && eI]
      }), (0, r.jsx)(l.MenuGroup, {
        children: ed
      }), (0, r.jsxs)(l.MenuGroup, {
        children: [eo, eZ]
      }), k && (0, r.jsxs)(l.MenuGroup, {
        children: [eM, e_]
      })]
    }), (0, r.jsx)(l.MenuGroup, {
      children: ec
    })]
  })
}, {
  object: y.qAy.CONTEXT_MENU
}), [Z.Z.CONTEXT_MENU, Z.Z.GUILD_CHANNEL_USER_MENU])