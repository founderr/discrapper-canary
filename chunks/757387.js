"use strict";
a.r(t);
var u = a("735250");
a("470079");
var l = a("442837"),
  d = a("481060"),
  s = a("239091"),
  n = a("883385"),
  i = a("108843"),
  r = a("911969"),
  o = a("947440"),
  f = a("100527"),
  c = a("441061"),
  E = a("167675"),
  S = a("737013"),
  _ = a("145474"),
  M = a("299206"),
  m = a("976192"),
  g = a("819403"),
  A = a("286694"),
  T = a("592125"),
  I = a("777658"),
  U = a("858488"),
  C = a("185457"),
  N = a("933409"),
  b = a("570870"),
  v = a("389052"),
  p = a("24311"),
  L = a("332576"),
  O = a("710631"),
  x = a("297047"),
  h = a("88966"),
  F = a("712301"),
  D = a("991307"),
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
  }, X = (0, R.default)(t.id, a, n.id), z = (0, x.default)(t, a, w), Q = (0, h.default)(t.id, w), J = (0, k.default)(t.id), Z = (0, p.default)(t, w), $ = (0, C.default)({
    user: t,
    guildId: a,
    context: w
  }), ee = (0, U.default)({
    user: t
  }), et = (0, V.default)(t.id), ea = (0, D.default)(t.id), eu = (0, _.useSecureFrameItem)(t.id, n.id), el = (0, m.default)({
    guildId: a,
    userId: t.id,
    analyticsLocation: q,
    context: w
  }), ed = (0, O.default)({
    user: t,
    guildId: a
  }), es = (0, o.default)(null, t), en = (0, I.default)(t), ei = (0, v.default)({
    user: t
  }), er = (0, N.default)(t, a, n.id), eo = (0, j.default)(t.id, a), ef = (0, F.default)(t, a), ec = (0, M.default)({
    id: t.id,
    label: P.default.Messages.COPY_ID_USER
  }), eE = (0, L.default)(t.id, n.id), eS = (0, E.default)(t.id), e_ = (0, c.default)(n.id), eM = (0, g.default)(t), em = (0, A.default)(t, a, n.id), eg = (0, l.useStateFromStores)([T.default], () => null != W ? T.default.getChannel(W) : null), eA = (0, b.default)({
    commandType: r.ApplicationCommandType.USER,
    commandTargetId: t.id,
    channel: null != eg ? eg : n,
    guildId: a,
    onHeightUpdate: Y,
    context: w
  }), eT = (0, S.default)(t.id), eI = t.isNonUserBot();
  return (0, u.jsxs)(d.Menu, {
    navId: "user-context",
    onClose: s.closeContextMenu,
    "aria-label": P.default.Messages.USER_ACTIONS_MENU_LABEL,
    onSelect: K,
    children: [!eI && (0, u.jsxs)(u.Fragment, {
      children: [(0, u.jsxs)(d.MenuGroup, {
        children: [eM, H && em]
      }), (0, u.jsxs)(d.MenuGroup, {
        children: [B && X, f && z, Q, Z, B && $, B && ee, J]
      }), i && (0, u.jsx)(d.MenuGroup, {
        children: et
      }), (0, u.jsx)(d.MenuGroup, {
        children: B && es
      }), (0, u.jsxs)(d.MenuGroup, {
        children: [i && ea, i && eu, i && eE, B && el, eA, B && ed, en, B && ei, y && eT]
      }), (0, u.jsx)(d.MenuGroup, {
        children: er
      }), (0, u.jsxs)(d.MenuGroup, {
        children: [eo, ef]
      }), y && (0, u.jsxs)(d.MenuGroup, {
        children: [e_, eS]
      })]
    }), (0, u.jsx)(d.MenuGroup, {
      children: ec
    })]
  })
}, {
  object: G.AnalyticsObjects.CONTEXT_MENU
}), [f.default.CONTEXT_MENU, f.default.GUILD_CHANNEL_USER_MENU])