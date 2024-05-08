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
  c = n("441061"),
  f = n("167675"),
  S = n("737013"),
  I = n("702321"),
  _ = n("461535"),
  E = n("776568"),
  M = n("299206"),
  m = n("895563"),
  C = n("212205"),
  T = n("62420"),
  p = n("455395"),
  N = n("581052"),
  A = n("875252"),
  g = n("122074"),
  h = n("819403"),
  v = n("777658"),
  O = n("858488"),
  R = n("185457"),
  x = n("570870"),
  U = n("389052"),
  F = n("24311"),
  G = n("794973"),
  y = n("332576"),
  j = n("710631"),
  P = n("558924"),
  D = n("991307"),
  b = n("725119"),
  L = n("700994"),
  k = n("332031"),
  V = n("981631"),
  W = n("689938");
t.default = (0, s.default)((0, l.default)(function(e) {
  let {
    user: t,
    channel: n,
    channelSelected: l = !1,
    showMute: s = !0,
    showMediaItems: d = !1,
    showChannelCallItems: w = !1,
    showModalItems: Y = !0,
    targetIsUser: B = !1,
    context: K,
    onSelect: q,
    onHeightUpdate: H
  } = e, z = (0, b.default)(t.id, null), Q = (0, F.default)(t, K), X = (0, R.default)({
    user: t,
    context: K
  }), Z = (0, O.default)({
    user: t
  }), J = (0, k.default)(t.id), $ = (0, G.default)(n.id, l), ee = (0, j.default)({
    user: t
  }), et = (0, o.default)(null, t), en = (0, L.default)(t.id), ea = (0, P.default)(t.id, n.id), eu = (0, v.default)(t), ei = (0, D.default)(t.id), el = (0, y.default)(t.id, n.id), es = (0, U.default)({
    user: t
  }), er = (0, E.default)(n), eo = (0, g.useCustomNotificationSoundDMContextMenuItem)(V.ZERO_STRING_GUILD_ID, n.id, "trailing"), ed = (0, M.default)({
    id: t.id,
    label: W.default.Messages.COPY_ID_USER
  }), ec = (0, M.default)({
    id: n.id,
    label: W.default.Messages.COPY_ID_CHANNEL
  }), ef = (0, _.default)(n), eS = (0, f.default)(t.id), eI = (0, c.default)(n.id), e_ = (0, h.default)(t), eE = (0, S.default)(t.id), eM = (0, x.default)({
    commandType: r.ApplicationCommandType.USER,
    commandTargetId: t.id,
    channel: n,
    guildId: void 0,
    onHeightUpdate: H
  }), em = (0, m.useAddToFavoritesItem)(n), eC = (0, m.useRemoveFromFavoritesItem)(n), eT = (0, C.default)(n), ep = (0, T.default)(n), eN = (0, N.useMessageRequestItem)(n), eA = (0, p.useInappropriateConversationItem)(n), eg = (0, A.useSafetyWarningsItem)(n), eh = n.isManaged(), ev = t.isNonUserBot();
  return (0, a.jsxs)(u.Menu, {
    navId: "user-context",
    onClose: i.closeContextMenu,
    "aria-label": W.default.Messages.USER_ACTIONS_MENU_LABEL,
    onSelect: q,
    children: [(0, a.jsx)(u.MenuGroup, {
      children: !(ev && !(0, I.default)(n.id)) && ef
    }), (0, a.jsx)(u.MenuGroup, {
      children: eN
    }), (0, a.jsx)(u.MenuGroup, {
      children: eg
    }), (0, a.jsx)(u.MenuGroup, {
      children: eA
    }), (0, a.jsxs)(u.MenuGroup, {
      children: [em, eT, ep]
    }), (0, a.jsx)(u.MenuGroup, {
      children: !ev && e_
    }), (0, a.jsxs)(u.MenuGroup, {
      children: [!ev && (0, a.jsxs)(a.Fragment, {
        children: [Y && z, Q, !eh && ea, Y && X, Y && Z, J]
      }), $]
    }), !ev && (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(u.MenuGroup, {
        children: d && en
      }), (0, a.jsx)(u.MenuGroup, {
        children: Y && et
      }), (0, a.jsxs)(u.MenuGroup, {
        children: [d && ei, d && el, eM, Y && ee, eu, Y && es, d && eE]
      }), (0, a.jsxs)(u.MenuGroup, {
        children: [s && er, eo]
      }), w && (0, a.jsxs)(u.MenuGroup, {
        children: [eI, eS]
      })]
    }), (0, I.default)(n.id) && (0, a.jsxs)(u.MenuGroup, {
      children: [s && er, eo]
    }), (0, a.jsx)(u.MenuGroup, {
      children: eC
    }), (0, a.jsxs)(u.MenuGroup, {
      children: [ed, !B && ec]
    })]
  })
}, {
  object: V.AnalyticsObjects.CONTEXT_MENU
}), [d.default.CONTEXT_MENU, d.default.DM_USER_MENU])