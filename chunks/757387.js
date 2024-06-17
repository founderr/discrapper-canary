"use strict";
a.r(t);
var u = a("735250");
a("470079");
var l = a("442837"),
  d = a("481060"),
  s = a("239091"),
  n = a("883385"),
  i = a("108843"),
  o = a("911969"),
  r = a("947440"),
  f = a("100527"),
  c = a("441061"),
  E = a("167675"),
  S = a("737013"),
  M = a("145474"),
  _ = a("299206"),
  g = a("976192"),
  m = a("819403"),
  A = a("286694"),
  T = a("592125"),
  C = a("777658"),
  N = a("858488"),
  U = a("185457"),
  I = a("933409"),
  v = a("570870"),
  L = a("389052"),
  O = a("24311"),
  b = a("332576"),
  p = a("710631"),
  h = a("297047"),
  x = a("88966"),
  D = a("712301"),
  F = a("991307"),
  R = a("725119"),
  j = a("931617"),
  V = a("700994"),
  k = a("332031"),
  G = a("981631"),
  P = a("689938");
t.default = (0, i.default)((0, n.default)(function(e) {
  let {
    user: t,
    guildId: a,
    channel: n,
    showMediaItems: i = !1,
    showChatItems: f = !0,
    showChannelCallItems: y = !1,
    showModalItems: B = !0,
    showStageChannelItems: H = !1,
    context: w,
    onSelect: K,
    onHeightUpdate: Y,
    viewingChannelId: W
  } = e, q = {
    page: G.AnalyticsPages.GUILD_CHANNEL,
    section: G.AnalyticsSections.CHAT_USERNAME,
    object: G.AnalyticsObjects.CONTEXT_MENU_ITEM
  }, X = (0, R.default)(t.id, a, n.id), z = (0, h.default)(t, a, w), Q = (0, x.default)(t.id, w), J = (0, k.default)(t.id), Z = (0, O.default)(t, w), $ = (0, U.default)({
    user: t,
    guildId: a,
    context: w
  }), ee = (0, N.default)({
    user: t
  }), et = (0, V.default)(t.id), ea = (0, F.default)(t.id), eu = (0, M.useSecureFrameItem)(t.id, n.id), el = (0, g.default)({
    guildId: a,
    userId: t.id,
    analyticsLocation: q,
    context: w
  }), ed = (0, p.default)({
    user: t,
    guildId: a
  }), es = (0, r.default)(null, t), en = (0, C.default)(t), ei = (0, L.default)({
    user: t
  }), eo = (0, I.default)(t, a, n.id), er = (0, j.default)(t.id, a), ef = (0, D.default)(t, a), ec = (0, _.default)({
    id: t.id,
    label: P.default.Messages.COPY_ID_USER
  }), eE = (0, b.default)(t.id, n.id), eS = (0, E.default)(t.id), eM = (0, c.default)(n.id), e_ = (0, m.default)(t), eg = (0, A.default)(t, a, n.id), em = (0, l.useStateFromStores)([T.default], () => null != W ? T.default.getChannel(W) : null), eA = (0, v.default)({
    commandType: o.ApplicationCommandType.USER,
    commandTargetId: t.id,
    channel: null != em ? em : n,
    guildId: a,
    onHeightUpdate: Y,
    context: w
  }), eT = (0, S.default)(t.id), eC = t.isNonUserBot();
  return (0, u.jsxs)(d.Menu, {
    navId: "user-context",
    onClose: s.closeContextMenu,
    "aria-label": P.default.Messages.USER_ACTIONS_MENU_LABEL,
    onSelect: K,
    children: [!eC && (0, u.jsxs)(u.Fragment, {
      children: [(0, u.jsxs)(d.MenuGroup, {
        children: [e_, H && eg]
      }), (0, u.jsxs)(d.MenuGroup, {
        children: [B && X, f && z, Q, Z, B && $, B && ee, J]
      }), i && (0, u.jsx)(d.MenuGroup, {
        children: et
      }), (0, u.jsx)(d.MenuGroup, {
        children: B && es
      }), (0, u.jsxs)(d.MenuGroup, {
        children: [i && ea, i && eu, i && eE, B && el, eA, B && ed, en, B && ei, y && eT]
      }), (0, u.jsx)(d.MenuGroup, {
        children: eo
      }), (0, u.jsxs)(d.MenuGroup, {
        children: [er, ef]
      }), y && (0, u.jsxs)(d.MenuGroup, {
        children: [eM, eS]
      })]
    }), (0, u.jsx)(d.MenuGroup, {
      children: ec
    })]
  })
}, {
  object: G.AnalyticsObjects.CONTEXT_MENU
}), [f.default.CONTEXT_MENU, f.default.GUILD_CHANNEL_USER_MENU])