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
  c = n("441061"),
  f = n("167675"),
  S = n("737013"),
  _ = n("145474"),
  M = n("702321"),
  E = n("461535"),
  I = n("776568"),
  m = n("299206"),
  T = n("895563"),
  C = n("212205"),
  g = n("62420"),
  N = n("455395"),
  A = n("581052"),
  p = n("875252"),
  v = n("122074"),
  h = n("819403"),
  O = n("777658"),
  x = n("858488"),
  U = n("185457"),
  R = n("570870"),
  F = n("389052"),
  D = n("24311"),
  b = n("794973"),
  j = n("332576"),
  G = n("710631"),
  y = n("558924"),
  L = n("991307"),
  P = n("725119"),
  V = n("700994"),
  k = n("332031"),
  B = n("981631"),
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
    context: q,
    onSelect: H,
    onHeightUpdate: z
  } = e, Q = (0, P.default)(t.id, null), X = (0, D.default)(t, q), Z = (0, U.default)({
    user: t,
    context: q
  }), J = (0, x.default)({
    user: t
  }), $ = (0, k.default)(t.id), ee = (0, b.default)(n.id, i), et = (0, G.default)({
    user: t
  }), en = (0, d.default)(null, t), ea = (0, V.default)(t.id), eu = (0, y.default)(t.id, n.id), el = (0, O.default)(t), ei = (0, L.default)(t.id), es = (0, _.useSecureFrameItem)(t.id, n.id), er = (0, j.default)(t.id, n.id), ed = (0, F.default)({
    user: t
  }), eo = (0, I.default)(n), ec = (0, v.useCustomNotificationSoundDMContextMenuItem)(B.ZERO_STRING_GUILD_ID, n.id, "trailing"), ef = (0, m.default)({
    id: t.id,
    label: W.default.Messages.COPY_ID_USER
  }), eS = (0, m.default)({
    id: n.id,
    label: W.default.Messages.COPY_ID_CHANNEL
  }), e_ = (0, E.default)(n), eM = (0, f.default)(t.id), eE = (0, c.default)(n.id), eI = (0, h.default)(t), em = (0, S.default)(t.id), eT = (0, R.default)({
    commandType: r.ApplicationCommandType.USER,
    commandTargetId: t.id,
    channel: n,
    guildId: void 0,
    onHeightUpdate: z
  }), eC = (0, T.useAddToFavoritesItem)(n), eg = (0, T.useRemoveFromFavoritesItem)(n), eN = (0, C.default)(n), eA = (0, g.default)(n), ep = (0, A.useMessageRequestItem)(n), ev = (0, N.useInappropriateConversationItem)(n), eh = (0, p.useSafetyWarningsItem)(n), eO = n.isManaged(), ex = t.isNonUserBot();
  return (0, a.jsxs)(u.Menu, {
    navId: "user-context",
    onClose: l.closeContextMenu,
    "aria-label": W.default.Messages.USER_ACTIONS_MENU_LABEL,
    onSelect: H,
    children: [(0, a.jsx)(u.MenuGroup, {
      children: !(ex && !(0, M.default)(n.id)) && e_
    }), (0, a.jsx)(u.MenuGroup, {
      children: ep
    }), (0, a.jsx)(u.MenuGroup, {
      children: eh
    }), (0, a.jsx)(u.MenuGroup, {
      children: ev
    }), (0, a.jsxs)(u.MenuGroup, {
      children: [eC, eN, eA]
    }), (0, a.jsx)(u.MenuGroup, {
      children: !ex && eI
    }), (0, a.jsxs)(u.MenuGroup, {
      children: [!ex && (0, a.jsxs)(a.Fragment, {
        children: [Y && Q, X, !eO && eu, Y && Z, Y && J, $]
      }), (0, M.default)(n.id) && Q, ee]
    }), !ex && (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(u.MenuGroup, {
        children: o && ea
      }), (0, a.jsx)(u.MenuGroup, {
        children: Y && en
      }), (0, a.jsxs)(u.MenuGroup, {
        children: [o && ei, Y && es, o && er, eT, Y && et, el, Y && ed, o && em]
      }), (0, a.jsxs)(u.MenuGroup, {
        children: [s && eo, ec]
      }), w && (0, a.jsxs)(u.MenuGroup, {
        children: [eE, eM]
      })]
    }), (0, M.default)(n.id) && (0, a.jsxs)(u.MenuGroup, {
      children: [s && eo, ec]
    }), (0, a.jsx)(u.MenuGroup, {
      children: eg
    }), (0, a.jsxs)(u.MenuGroup, {
      children: [ef, !K && eS]
    })]
  })
}, {
  object: B.AnalyticsObjects.CONTEXT_MENU
}), [o.default.CONTEXT_MENU, o.default.DM_USER_MENU])