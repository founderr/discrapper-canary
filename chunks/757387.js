i.r(n);
var l = i(735250);
i(470079);
var t = i(442837),
  u = i(481060),
  r = i(239091),
  s = i(883385),
  a = i(108843),
  d = i(911969),
  Z = i(947440),
  o = i(100527),
  E = i(441061),
  c = i(167675),
  _ = i(737013),
  M = i(145474),
  A = i(299206),
  I = i(976192),
  N = i(819403),
  C = i(286694),
  S = i(592125),
  T = i(777658),
  U = i(858488),
  f = i(185457),
  g = i(933409),
  h = i(570870),
  p = i(389052),
  v = i(24311),
  P = i(332576),
  R = i(710631),
  j = i(297047),
  x = i(88966),
  O = i(712301),
  G = i(991307),
  m = i(725119),
  L = i(931617),
  b = i(700994),
  F = i(332031),
  V = i(981631),
  k = i(689938);
n.default = (0, a.Z)((0, s.Z)(function(e) {
  let {
    user: n,
    guildId: i,
    channel: s,
    showMediaItems: a = !1,
    showChatItems: o = !0,
    showChannelCallItems: y = !1,
    showModalItems: H = !0,
    showStageChannelItems: D = !1,
    context: K,
    onSelect: B,
    onHeightUpdate: X,
    viewingChannelId: Y
  } = e, q = {
    page: V.ZY5.GUILD_CHANNEL,
    section: V.jXE.CHAT_USERNAME,
    object: V.qAy.CONTEXT_MENU_ITEM
  }, w = (0, m.Z)(n.id, i, s.id), W = (0, j.Z)(n, i, K), z = (0, x.Z)(n.id, K), J = (0, F.Z)(n.id), Q = (0, v.Z)(n, K), $ = (0, f.Z)({
    user: n,
    guildId: i,
    context: K
  }), ee = (0, U.Z)({
    user: n
  }), en = (0, b.Z)(n.id), ei = (0, G.Z)(n.id), el = (0, M.P)(n.id, s.id), et = (0, I.Z)({
    guildId: i,
    userId: n.id,
    analyticsLocation: q,
    context: K
  }), eu = (0, R.Z)({
    user: n,
    guildId: i
  }), er = (0, Z.Z)(null, n), es = (0, T.Z)(n), ea = (0, p.Z)({
    user: n
  }), ed = (0, g.Z)(n, i, s.id), eZ = (0, L.Z)(n.id, i), eo = (0, O.Z)(n, i), eE = (0, A.Z)({
    id: n.id,
    label: k.Z.Messages.COPY_ID_USER
  }), ec = (0, P.Z)(n.id, s.id), e_ = (0, c.Z)(n.id), eM = (0, E.Z)(s.id), eA = (0, N.Z)(n), eI = (0, C.Z)(n, i, s.id), eN = (0, t.e7)([S.Z], () => null != Y ? S.Z.getChannel(Y) : null), eC = (0, h.Z)({
    commandType: d.yU.USER,
    commandTargetId: n.id,
    channel: null != eN ? eN : s,
    guildId: i,
    onHeightUpdate: X,
    context: K
  }), eS = (0, _.Z)(n.id), eT = n.isNonUserBot();
  return (0, l.jsxs)(u.Menu, {
    navId: "user-context",
    onClose: r.Zy,
    "aria-label": k.Z.Messages.USER_ACTIONS_MENU_LABEL,
    onSelect: B,
    children: [!eT && (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsxs)(u.MenuGroup, {
        children: [eA, D && eI]
      }), (0, l.jsxs)(u.MenuGroup, {
        children: [H && w, o && W, z, Q, H && $, H && ee, J]
      }), a && (0, l.jsx)(u.MenuGroup, {
        children: en
      }), (0, l.jsx)(u.MenuGroup, {
        children: H && er
      }), (0, l.jsxs)(u.MenuGroup, {
        children: [a && ei, a && el, a && ec, H && et, eC, H && eu, es, H && ea, y && eS]
      }), (0, l.jsx)(u.MenuGroup, {
        children: ed
      }), (0, l.jsxs)(u.MenuGroup, {
        children: [eZ, eo]
      }), y && (0, l.jsxs)(u.MenuGroup, {
        children: [eM, e_]
      })]
    }), (0, l.jsx)(u.MenuGroup, {
      children: eE
    })]
  })
}, {
  object: V.qAy.CONTEXT_MENU
}), [o.Z.CONTEXT_MENU, o.Z.GUILD_CHANNEL_USER_MENU])