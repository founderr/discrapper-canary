"use strict";
a.r(t);
var l = a("735250");
a("470079");
var u = a("442837"),
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
  M = a("299206"),
  _ = a("976192"),
  g = a("819403"),
  A = a("286694"),
  T = a("592125"),
  N = a("777658"),
  m = a("858488"),
  C = a("185457"),
  U = a("933409"),
  I = a("570870"),
  L = a("389052"),
  O = a("24311"),
  v = a("332576"),
  h = a("710631"),
  p = a("297047"),
  b = a("88966"),
  x = a("712301"),
  D = a("991307"),
  R = a("725119"),
  j = a("931617"),
  F = a("700994"),
  V = a("332031"),
  k = a("981631"),
  G = a("689938");
t.default = (0, i.default)((0, n.default)(function(e) {
  let {
    user: t,
    guildId: a,
    channel: n,
    showMediaItems: i = !1,
    showChatItems: f = !0,
    showChannelCallItems: P = !1,
    showModalItems: y = !0,
    showStageChannelItems: B = !1,
    context: H,
    onSelect: w,
    onHeightUpdate: K,
    viewingChannelId: Y
  } = e, q = {
    page: k.AnalyticsPages.GUILD_CHANNEL,
    section: k.AnalyticsSections.CHAT_USERNAME,
    object: k.AnalyticsObjects.CONTEXT_MENU_ITEM
  }, W = (0, R.default)(t.id, a, n.id), X = (0, p.default)(t, a, H), Q = (0, b.default)(t.id, H), z = (0, V.default)(t.id), J = (0, O.default)(t, H), Z = (0, C.default)({
    user: t,
    guildId: a,
    context: H
  }), $ = (0, m.default)({
    user: t
  }), ee = (0, F.default)(t.id), et = (0, D.default)(t.id), ea = (0, _.default)({
    guildId: a,
    userId: t.id,
    analyticsLocation: q,
    context: H
  }), el = (0, h.default)({
    user: t,
    guildId: a
  }), eu = (0, r.default)(null, t), ed = (0, N.default)(t), es = (0, L.default)({
    user: t
  }), en = (0, U.default)(t, a, n.id), ei = (0, j.default)(t.id, a), eo = (0, x.default)(t, a), er = (0, M.default)({
    id: t.id,
    label: G.default.Messages.COPY_ID_USER
  }), ef = (0, v.default)(t.id, n.id), ec = (0, E.default)(t.id), eE = (0, c.default)(n.id), eS = (0, g.default)(t), eM = (0, A.default)(t, a, n.id), e_ = (0, u.useStateFromStores)([T.default], () => null != Y ? T.default.getChannel(Y) : null), eg = (0, I.default)({
    commandType: o.ApplicationCommandType.USER,
    commandTargetId: t.id,
    channel: null != e_ ? e_ : n,
    guildId: a,
    onHeightUpdate: K,
    context: H
  }), eA = (0, S.default)(t.id), eT = t.isNonUserBot();
  return (0, l.jsxs)(d.Menu, {
    navId: "user-context",
    onClose: s.closeContextMenu,
    "aria-label": G.default.Messages.USER_ACTIONS_MENU_LABEL,
    onSelect: w,
    children: [!eT && (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsxs)(d.MenuGroup, {
        children: [eS, B && eM]
      }), (0, l.jsxs)(d.MenuGroup, {
        children: [y && W, f && X, Q, J, y && Z, y && $, z]
      }), i && (0, l.jsx)(d.MenuGroup, {
        children: ee
      }), (0, l.jsx)(d.MenuGroup, {
        children: y && eu
      }), (0, l.jsxs)(d.MenuGroup, {
        children: [i && et, i && ef, y && ea, eg, y && el, ed, y && es, P && eA]
      }), (0, l.jsx)(d.MenuGroup, {
        children: en
      }), (0, l.jsxs)(d.MenuGroup, {
        children: [ei, eo]
      }), P && (0, l.jsxs)(d.MenuGroup, {
        children: [eE, ec]
      })]
    }), (0, l.jsx)(d.MenuGroup, {
      children: er
    })]
  })
}, {
  object: k.AnalyticsObjects.CONTEXT_MENU
}), [f.default.CONTEXT_MENU, f.default.GUILD_CHANNEL_USER_MENU])