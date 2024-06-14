"use strict";
n.r(t);
var a = n("735250");
n("470079");
var u = n("481060"),
  l = n("239091"),
  s = n("883385"),
  i = n("108843"),
  r = n("911969"),
  d = n("947440"),
  o = n("100527"),
  f = n("441061"),
  c = n("167675"),
  S = n("737013"),
  E = n("145474"),
  _ = n("702321"),
  M = n("461535"),
  I = n("776568"),
  m = n("299206"),
  T = n("895563"),
  C = n("212205"),
  g = n("62420"),
  A = n("455395"),
  N = n("581052"),
  p = n("875252"),
  O = n("122074"),
  h = n("819403"),
  v = n("777658"),
  U = n("858488"),
  R = n("185457"),
  x = n("570870"),
  D = n("389052"),
  F = n("24311"),
  b = n("794973"),
  G = n("332576"),
  j = n("710631"),
  y = n("558924"),
  L = n("991307"),
  P = n("725119"),
  V = n("700994"),
  k = n("332031"),
  Y = n("981631"),
  W = n("689938");
t.default = (0, i.default)((0, s.default)(function(e) {
  let {
    user: t,
    channel: n,
    channelSelected: s = !1,
    showMute: i = !0,
    showMediaItems: o = !1,
    showChannelCallItems: B = !1,
    showModalItems: w = !0,
    targetIsUser: K = !1,
    context: H,
    onSelect: q,
    onHeightUpdate: z
  } = e, Q = (0, P.default)(t.id, null), X = (0, F.default)(t, H), Z = (0, R.default)({
    user: t,
    context: H
  }), J = (0, U.default)({
    user: t
  }), $ = (0, k.default)(t.id), ee = (0, b.default)(n.id, s), et = (0, j.default)({
    user: t
  }), en = (0, d.default)(null, t), ea = (0, V.default)(t.id), eu = (0, y.default)(t.id, n.id), el = (0, v.default)(t), es = (0, L.default)(t.id), ei = (0, E.useSecureFrameItem)(t.id, n.id), er = (0, G.default)(t.id, n.id), ed = (0, D.default)({
    user: t
  }), eo = (0, I.default)(n), ef = (0, O.useCustomNotificationSoundDMContextMenuItem)(Y.ZERO_STRING_GUILD_ID, n.id, "trailing"), ec = (0, m.default)({
    id: t.id,
    label: W.default.Messages.COPY_ID_USER
  }), eS = (0, m.default)({
    id: n.id,
    label: W.default.Messages.COPY_ID_CHANNEL
  }), eE = (0, M.default)(n), e_ = (0, c.default)(t.id), eM = (0, f.default)(n.id), eI = (0, h.default)(t), em = (0, S.default)(t.id), eT = (0, x.default)({
    commandType: r.ApplicationCommandType.USER,
    commandTargetId: t.id,
    channel: n,
    guildId: void 0,
    onHeightUpdate: z
  }), eC = (0, T.useAddToFavoritesItem)(n), eg = (0, T.useRemoveFromFavoritesItem)(n), eA = (0, C.default)(n), eN = (0, g.default)(n), ep = (0, N.useMessageRequestItem)(n), eO = (0, A.useInappropriateConversationItem)(n), eh = (0, p.useSafetyWarningsItem)(n), ev = n.isManaged(), eU = t.isNonUserBot();
  return (0, a.jsxs)(u.Menu, {
    navId: "user-context",
    onClose: l.closeContextMenu,
    "aria-label": W.default.Messages.USER_ACTIONS_MENU_LABEL,
    onSelect: q,
    children: [(0, a.jsx)(u.MenuGroup, {
      children: !(eU && !(0, _.default)(n.id)) && eE
    }), (0, a.jsx)(u.MenuGroup, {
      children: ep
    }), (0, a.jsx)(u.MenuGroup, {
      children: eh
    }), (0, a.jsx)(u.MenuGroup, {
      children: eO
    }), (0, a.jsxs)(u.MenuGroup, {
      children: [eC, eA, eN]
    }), (0, a.jsx)(u.MenuGroup, {
      children: !eU && eI
    }), (0, a.jsxs)(u.MenuGroup, {
      children: [!eU && (0, a.jsxs)(a.Fragment, {
        children: [w && Q, X, !ev && eu, w && Z, w && J, $]
      }), (0, _.default)(n.id) && Q, ee]
    }), !eU && (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(u.MenuGroup, {
        children: o && ea
      }), (0, a.jsx)(u.MenuGroup, {
        children: w && en
      }), (0, a.jsxs)(u.MenuGroup, {
        children: [o && es, w && ei, o && er, eT, w && et, el, w && ed, o && em]
      }), (0, a.jsxs)(u.MenuGroup, {
        children: [i && eo, ef]
      }), B && (0, a.jsxs)(u.MenuGroup, {
        children: [eM, e_]
      })]
    }), (0, _.default)(n.id) && (0, a.jsxs)(u.MenuGroup, {
      children: [i && eo, ef]
    }), (0, a.jsx)(u.MenuGroup, {
      children: eg
    }), (0, a.jsxs)(u.MenuGroup, {
      children: [ec, !K && eS]
    })]
  })
}, {
  object: Y.AnalyticsObjects.CONTEXT_MENU
}), [o.default.CONTEXT_MENU, o.default.DM_USER_MENU])