"use strict";
n.r(t);
var a = n("735250");
n("470079");
var u = n("481060"),
  l = n("239091"),
  i = n("883385"),
  s = n("108843"),
  r = n("911969"),
  d = n("947440"),
  o = n("100527"),
  f = n("441061"),
  c = n("167675"),
  S = n("737013"),
  _ = n("702321"),
  I = n("461535"),
  M = n("776568"),
  E = n("299206"),
  T = n("895563"),
  m = n("212205"),
  p = n("62420"),
  C = n("455395"),
  N = n("581052"),
  A = n("875252"),
  g = n("122074"),
  h = n("819403"),
  v = n("777658"),
  R = n("858488"),
  O = n("185457"),
  x = n("570870"),
  U = n("389052"),
  F = n("24311"),
  G = n("794973"),
  j = n("332576"),
  y = n("710631"),
  P = n("558924"),
  b = n("991307"),
  D = n("725119"),
  L = n("700994"),
  k = n("332031"),
  V = n("981631"),
  W = n("689938");
t.default = (0, s.default)((0, i.default)(function(e) {
  let {
    user: t,
    channel: n,
    channelSelected: i = !1,
    showMute: s = !0,
    showMediaItems: o = !1,
    showChannelCallItems: w = !1,
    showModalItems: Y = !0,
    targetIsUser: K = !1,
    context: B,
    onSelect: q,
    onHeightUpdate: H
  } = e, Q = (0, D.default)(t.id, null), X = (0, F.default)(t, B), z = (0, O.default)({
    user: t,
    context: B
  }), J = (0, R.default)({
    user: t
  }), Z = (0, k.default)(t.id), $ = (0, G.default)(n.id, i), ee = (0, y.default)({
    user: t
  }), et = (0, d.default)(null, t), en = (0, L.default)(t.id), ea = (0, P.default)(t.id, n.id), eu = (0, v.default)(t), el = (0, b.default)(t.id), ei = (0, j.default)(t.id, n.id), es = (0, U.default)({
    user: t
  }), er = (0, M.default)(n), ed = (0, g.default)(V.ZERO_STRING_GUILD_ID, n.id), eo = (0, E.default)({
    id: t.id,
    label: W.default.Messages.COPY_ID_USER
  }), ef = (0, E.default)({
    id: n.id,
    label: W.default.Messages.COPY_ID_CHANNEL
  }), ec = (0, I.default)(n), eS = (0, c.default)(t.id), e_ = (0, f.default)(n.id), eI = (0, h.default)(t), eM = (0, S.default)(t.id), eE = (0, x.default)({
    commandType: r.ApplicationCommandType.USER,
    commandTargetId: t.id,
    channel: n,
    guildId: void 0,
    onHeightUpdate: H
  }), eT = (0, T.useAddToFavoritesItem)(n), em = (0, T.useRemoveFromFavoritesItem)(n), ep = (0, m.default)(n), eC = (0, p.default)(n), eN = (0, N.useMessageRequestItem)(n), eA = (0, C.useInappropriateConversationItem)(n), eg = (0, A.useSafetyWarningsItem)(n), eh = n.isManaged(), ev = t.isNonUserBot();
  return (0, a.jsxs)(u.Menu, {
    navId: "user-context",
    onClose: l.closeContextMenu,
    "aria-label": W.default.Messages.USER_ACTIONS_MENU_LABEL,
    onSelect: q,
    children: [(0, a.jsx)(u.MenuGroup, {
      children: !(ev && !(0, _.default)(n.id)) && ec
    }), (0, a.jsx)(u.MenuGroup, {
      children: eN
    }), (0, a.jsx)(u.MenuGroup, {
      children: eg
    }), (0, a.jsx)(u.MenuGroup, {
      children: eA
    }), (0, a.jsxs)(u.MenuGroup, {
      children: [eT, ep, eC]
    }), (0, a.jsx)(u.MenuGroup, {
      children: !ev && eI
    }), (0, a.jsxs)(u.MenuGroup, {
      children: [!ev && (0, a.jsxs)(a.Fragment, {
        children: [Y && Q, X, !eh && ea, Y && z, Y && J, Z]
      }), $]
    }), !ev && (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(u.MenuGroup, {
        children: o && en
      }), (0, a.jsx)(u.MenuGroup, {
        children: Y && et
      }), (0, a.jsxs)(u.MenuGroup, {
        children: [o && el, o && ei, eE, Y && ee, eu, Y && es, o && eM]
      }), (0, a.jsxs)(u.MenuGroup, {
        children: [s && er, ed]
      }), w && (0, a.jsxs)(u.MenuGroup, {
        children: [e_, eS]
      })]
    }), (0, _.default)(n.id) && (0, a.jsxs)(u.MenuGroup, {
      children: [s && er, ed]
    }), (0, a.jsx)(u.MenuGroup, {
      children: em
    }), (0, a.jsxs)(u.MenuGroup, {
      children: [eo, !K && ef]
    })]
  })
}, {
  object: V.AnalyticsObjects.CONTEXT_MENU
}), [o.default.CONTEXT_MENU, o.default.DM_USER_MENU])