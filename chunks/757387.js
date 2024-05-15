"use strict";
a.r(t);
var l = a("735250");
a("470079");
var u = a("481060"),
  d = a("239091"),
  s = a("883385"),
  n = a("108843"),
  i = a("911969"),
  o = a("947440"),
  r = a("100527"),
  f = a("441061"),
  c = a("167675"),
  E = a("737013"),
  S = a("299206"),
  M = a("976192"),
  _ = a("819403"),
  g = a("286694"),
  A = a("777658"),
  T = a("858488"),
  N = a("185457"),
  m = a("933409"),
  C = a("570870"),
  U = a("389052"),
  I = a("24311"),
  L = a("332576"),
  O = a("710631"),
  v = a("297047"),
  p = a("88966"),
  b = a("712301"),
  x = a("991307"),
  h = a("725119"),
  D = a("931617"),
  R = a("700994"),
  j = a("332031"),
  F = a("981631"),
  V = a("689938");
t.default = (0, n.default)((0, s.default)(function(e) {
  let {
    user: t,
    guildId: a,
    channel: s,
    showMediaItems: n = !1,
    showChatItems: r = !0,
    showChannelCallItems: k = !1,
    showModalItems: G = !0,
    showStageChannelItems: P = !1,
    context: y,
    onSelect: B,
    onHeightUpdate: H
  } = e, w = {
    page: F.AnalyticsPages.GUILD_CHANNEL,
    section: F.AnalyticsSections.CHAT_USERNAME,
    object: F.AnalyticsObjects.CONTEXT_MENU_ITEM
  }, K = (0, h.default)(t.id, a, s.id), Y = (0, v.default)(t, a, y), q = (0, p.default)(t.id, y), W = (0, j.default)(t.id), X = (0, I.default)(t, y), Q = (0, N.default)({
    user: t,
    guildId: a,
    context: y
  }), z = (0, T.default)({
    user: t
  }), J = (0, R.default)(t.id), Z = (0, x.default)(t.id), $ = (0, M.default)({
    guildId: a,
    userId: t.id,
    analyticsLocation: w,
    context: y
  }), ee = (0, O.default)({
    user: t,
    guildId: a
  }), et = (0, o.default)(null, t), ea = (0, A.default)(t), el = (0, U.default)({
    user: t
  }), eu = (0, m.default)(t, a, s.id), ed = (0, D.default)(t.id, a), es = (0, b.default)(t, a), en = (0, S.default)({
    id: t.id,
    label: V.default.Messages.COPY_ID_USER
  }), ei = (0, L.default)(t.id, s.id), eo = (0, c.default)(t.id), er = (0, f.default)(s.id), ef = (0, _.default)(t), ec = (0, g.default)(t, a, s.id), eE = (0, C.default)({
    commandType: i.ApplicationCommandType.USER,
    commandTargetId: t.id,
    channel: s,
    guildId: a,
    onHeightUpdate: H,
    context: y
  }), eS = (0, E.default)(t.id), eM = t.isNonUserBot();
  return (0, l.jsxs)(u.Menu, {
    navId: "user-context",
    onClose: d.closeContextMenu,
    "aria-label": V.default.Messages.USER_ACTIONS_MENU_LABEL,
    onSelect: B,
    children: [!eM && (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsxs)(u.MenuGroup, {
        children: [ef, P && ec]
      }), (0, l.jsxs)(u.MenuGroup, {
        children: [G && K, r && Y, q, X, G && Q, G && z, W]
      }), n && (0, l.jsx)(u.MenuGroup, {
        children: J
      }), (0, l.jsx)(u.MenuGroup, {
        children: G && et
      }), (0, l.jsxs)(u.MenuGroup, {
        children: [n && Z, n && ei, G && $, eE, G && ee, ea, G && el, k && eS]
      }), (0, l.jsx)(u.MenuGroup, {
        children: eu
      }), (0, l.jsxs)(u.MenuGroup, {
        children: [ed, es]
      }), k && (0, l.jsxs)(u.MenuGroup, {
        children: [er, eo]
      })]
    }), (0, l.jsx)(u.MenuGroup, {
      children: en
    })]
  })
}, {
  object: F.AnalyticsObjects.CONTEXT_MENU
}), [r.default.CONTEXT_MENU, r.default.GUILD_CHANNEL_USER_MENU])