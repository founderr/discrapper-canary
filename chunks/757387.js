"use strict";
a.r(t);
var u = a("735250");
a("470079");
var l = a("442837"),
  d = a("481060"),
  s = a("239091"),
  n = a("883385"),
  o = a("108843"),
  r = a("911969"),
  i = a("947440"),
  f = a("100527"),
  c = a("441061"),
  E = a("167675"),
  S = a("737013"),
  _ = a("145474"),
  M = a("299206"),
  A = a("976192"),
  g = a("819403"),
  m = a("286694"),
  I = a("592125"),
  U = a("777658"),
  T = a("858488"),
  N = a("185457"),
  C = a("933409"),
  O = a("570870"),
  D = a("389052"),
  R = a("24311"),
  h = a("332576"),
  v = a("710631"),
  L = a("297047"),
  p = a("88966"),
  b = a("712301"),
  F = a("991307"),
  x = a("725119"),
  V = a("931617"),
  j = a("700994"),
  G = a("332031"),
  k = a("981631"),
  P = a("689938");
t.default = (0, o.default)((0, n.default)(function(e) {
  let {
    user: t,
    guildId: a,
    channel: n,
    showMediaItems: o = !1,
    showChatItems: f = !0,
    showChannelCallItems: y = !1,
    showModalItems: Y = !0,
    showStageChannelItems: B = !1,
    context: H,
    onSelect: w,
    onHeightUpdate: K,
    viewingChannelId: W
  } = e, q = {
    page: k.AnalyticsPages.GUILD_CHANNEL,
    section: k.AnalyticsSections.CHAT_USERNAME,
    object: k.AnalyticsObjects.CONTEXT_MENU_ITEM
  }, X = (0, x.default)(t.id, a, n.id), z = (0, L.default)(t, a, H), Q = (0, p.default)(t.id, H), J = (0, G.default)(t.id), Z = (0, R.default)(t, H), $ = (0, N.default)({
    user: t,
    guildId: a,
    context: H
  }), ee = (0, T.default)({
    user: t
  }), et = (0, j.default)(t.id), ea = (0, F.default)(t.id), eu = (0, _.useSecureFrameItem)(t.id, n.id), el = (0, A.default)({
    guildId: a,
    userId: t.id,
    analyticsLocation: q,
    context: H
  }), ed = (0, v.default)({
    user: t,
    guildId: a
  }), es = (0, i.default)(null, t), en = (0, U.default)(t), eo = (0, D.default)({
    user: t
  }), er = (0, C.default)(t, a, n.id), ei = (0, V.default)(t.id, a), ef = (0, b.default)(t, a), ec = (0, M.default)({
    id: t.id,
    label: P.default.Messages.COPY_ID_USER
  }), eE = (0, h.default)(t.id, n.id), eS = (0, E.default)(t.id), e_ = (0, c.default)(n.id), eM = (0, g.default)(t), eA = (0, m.default)(t, a, n.id), eg = (0, l.useStateFromStores)([I.default], () => null != W ? I.default.getChannel(W) : null), em = (0, O.default)({
    commandType: r.ApplicationCommandType.USER,
    commandTargetId: t.id,
    channel: null != eg ? eg : n,
    guildId: a,
    onHeightUpdate: K,
    context: H
  }), eI = (0, S.default)(t.id), eU = t.isNonUserBot();
  return (0, u.jsxs)(d.Menu, {
    navId: "user-context",
    onClose: s.closeContextMenu,
    "aria-label": P.default.Messages.USER_ACTIONS_MENU_LABEL,
    onSelect: w,
    children: [!eU && (0, u.jsxs)(u.Fragment, {
      children: [(0, u.jsxs)(d.MenuGroup, {
        children: [eM, B && eA]
      }), (0, u.jsxs)(d.MenuGroup, {
        children: [Y && X, f && z, Q, Z, Y && $, Y && ee, J]
      }), o && (0, u.jsx)(d.MenuGroup, {
        children: et
      }), (0, u.jsx)(d.MenuGroup, {
        children: Y && es
      }), (0, u.jsxs)(d.MenuGroup, {
        children: [o && ea, o && eu, o && eE, Y && el, em, Y && ed, en, Y && eo, y && eI]
      }), (0, u.jsx)(d.MenuGroup, {
        children: er
      }), (0, u.jsxs)(d.MenuGroup, {
        children: [ei, ef]
      }), y && (0, u.jsxs)(d.MenuGroup, {
        children: [e_, eS]
      })]
    }), (0, u.jsx)(d.MenuGroup, {
      children: ec
    })]
  })
}, {
  object: k.AnalyticsObjects.CONTEXT_MENU
}), [f.default.CONTEXT_MENU, f.default.GUILD_CHANNEL_USER_MENU])