"use strict";
n.r(t);
var a = n("735250");
n("470079");
var u = n("481060"),
  i = n("239091"),
  l = n("883385"),
  s = n("108843"),
  r = n("911969"),
  o = n("947440"),
  d = n("100527"),
  f = n("441061"),
  c = n("167675"),
  S = n("737013"),
  I = n("461535"),
  _ = n("776568"),
  E = n("299206"),
  M = n("895563"),
  m = n("212205"),
  p = n("62420"),
  C = n("455395"),
  T = n("581052"),
  g = n("875252"),
  v = n("122074"),
  N = n("819403"),
  h = n("777658"),
  A = n("858488"),
  R = n("185457"),
  x = n("570870"),
  O = n("389052"),
  U = n("24311"),
  F = n("794973"),
  G = n("332576"),
  j = n("710631"),
  y = n("558924"),
  P = n("991307"),
  b = n("725119"),
  D = n("700994"),
  k = n("332031"),
  L = n("981631"),
  V = n("689938");
t.default = (0, s.default)((0, l.default)(function(e) {
  let {
    user: t,
    channel: n,
    channelSelected: l = !1,
    showMute: s = !0,
    showMediaItems: d = !1,
    showChannelCallItems: W = !1,
    showModalItems: w = !0,
    targetIsUser: Y = !1,
    context: K,
    onSelect: B,
    onHeightUpdate: q
  } = e, H = (0, b.default)(t.id, null), Q = (0, U.default)(t, K), X = (0, R.default)({
    user: t,
    context: K
  }), z = (0, A.default)({
    user: t
  }), J = (0, k.default)(t.id), Z = (0, F.default)(n.id, l), $ = (0, j.default)({
    user: t
  }), ee = (0, o.default)(null, t), et = (0, D.default)(t.id), en = (0, y.default)(t.id, n.id), ea = (0, h.default)(t), eu = (0, P.default)(t.id), ei = (0, G.default)(t.id, n.id), el = (0, O.default)({
    user: t
  }), es = (0, _.default)(n), er = (0, v.default)(L.ZERO_STRING_GUILD_ID, n.id), eo = (0, E.default)({
    id: t.id,
    label: V.default.Messages.COPY_ID_USER
  }), ed = (0, E.default)({
    id: n.id,
    label: V.default.Messages.COPY_ID_CHANNEL
  }), ef = (0, I.default)(n), ec = (0, c.default)(t.id), eS = (0, f.default)(n.id), eI = (0, N.default)(t), e_ = (0, S.default)(t.id), eE = (0, x.default)({
    commandType: r.ApplicationCommandType.USER,
    commandTargetId: t.id,
    channel: n,
    guildId: void 0,
    onHeightUpdate: q
  }), eM = (0, M.useAddToFavoritesItem)(n), em = (0, M.useRemoveFromFavoritesItem)(n), ep = (0, m.default)(n), eC = (0, p.default)(n), eT = (0, T.useMessageRequestItem)(n), eg = (0, C.useInappropriateConversationItem)(n), ev = (0, g.useSafetyWarningsItem)(n), eN = n.isManaged(), eh = t.isNonUserBot();
  return (0, a.jsxs)(u.Menu, {
    navId: "user-context",
    onClose: i.closeContextMenu,
    "aria-label": V.default.Messages.USER_ACTIONS_MENU_LABEL,
    onSelect: B,
    children: [(0, a.jsx)(u.MenuGroup, {
      children: !eh && ef
    }), (0, a.jsx)(u.MenuGroup, {
      children: eT
    }), (0, a.jsx)(u.MenuGroup, {
      children: ev
    }), (0, a.jsx)(u.MenuGroup, {
      children: eg
    }), (0, a.jsxs)(u.MenuGroup, {
      children: [eM, ep, eC]
    }), (0, a.jsx)(u.MenuGroup, {
      children: !eh && eI
    }), (0, a.jsxs)(u.MenuGroup, {
      children: [!eh && (0, a.jsxs)(a.Fragment, {
        children: [w && H, Q, !eN && en, w && X, w && z, J]
      }), Z]
    }), !eh && (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(u.MenuGroup, {
        children: d && et
      }), (0, a.jsx)(u.MenuGroup, {
        children: w && ee
      }), (0, a.jsxs)(u.MenuGroup, {
        children: [d && eu, d && ei, eE, w && $, ea, w && el, d && e_]
      }), (0, a.jsxs)(u.MenuGroup, {
        children: [s && es, er]
      }), W && (0, a.jsxs)(u.MenuGroup, {
        children: [eS, ec]
      })]
    }), (0, a.jsx)(u.MenuGroup, {
      children: em
    }), (0, a.jsxs)(u.MenuGroup, {
      children: [eo, !Y && ed]
    })]
  })
}, {
  object: L.AnalyticsObjects.CONTEXT_MENU
}), [d.default.CONTEXT_MENU, d.default.DM_USER_MENU])