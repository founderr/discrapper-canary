"use strict";
n.r(t);
var a = n("735250");
n("470079");
var u = n("481060"),
  i = n("239091"),
  l = n("883385"),
  s = n("108843"),
  r = n("911969"),
  d = n("947440"),
  o = n("100527"),
  f = n("441061"),
  c = n("167675"),
  _ = n("737013"),
  M = n("461535"),
  S = n("776568"),
  I = n("299206"),
  E = n("895563"),
  p = n("212205"),
  m = n("62420"),
  T = n("455395"),
  g = n("581052"),
  h = n("875252"),
  A = n("122074"),
  C = n("819403"),
  N = n("777658"),
  R = n("858488"),
  v = n("185457"),
  x = n("570870"),
  O = n("389052"),
  F = n("24311"),
  U = n("794973"),
  j = n("332576"),
  G = n("710631"),
  y = n("558924"),
  b = n("991307"),
  P = n("725119"),
  D = n("700994"),
  V = n("332031"),
  L = n("981631"),
  k = n("689938");
t.default = (0, s.default)((0, l.default)(function(e) {
  let {
    user: t,
    channel: n,
    channelSelected: l = !1,
    showMute: s = !0,
    showMediaItems: o = !1,
    showChannelCallItems: L = !1,
    showModalItems: W = !0,
    targetIsUser: Y = !1,
    context: w,
    onSelect: K,
    onHeightUpdate: q
  } = e, B = (0, P.default)(t.id, null), H = (0, F.default)(t, w), X = (0, v.default)({
    user: t,
    context: w
  }), z = (0, R.default)({
    user: t
  }), Q = (0, V.default)(t.id), J = (0, U.default)(n.id, l), Z = (0, G.default)({
    user: t
  }), $ = (0, d.default)(null, t), ee = (0, D.default)(t.id), et = (0, y.default)(t.id, n.id), en = (0, N.default)(t), ea = (0, b.default)(t.id), eu = (0, j.default)(t.id, n.id), ei = (0, O.default)({
    user: t
  }), el = (0, S.default)(n), es = (0, A.default)(), er = (0, I.default)({
    id: t.id,
    label: k.default.Messages.COPY_ID_USER
  }), ed = (0, I.default)({
    id: n.id,
    label: k.default.Messages.COPY_ID_CHANNEL
  }), eo = (0, M.default)(n), ef = (0, c.default)(t.id), ec = (0, f.default)(n.id), e_ = (0, C.default)(t), eM = (0, _.default)(t.id), eS = (0, x.default)({
    commandType: r.ApplicationCommandType.USER,
    commandTargetId: t.id,
    channel: n,
    guildId: void 0,
    onHeightUpdate: q
  }), eI = (0, E.useAddToFavoritesItem)(n), eE = (0, E.useRemoveFromFavoritesItem)(n), ep = (0, p.default)(n), em = (0, m.default)(n), eT = (0, g.useMessageRequestItem)(n), eg = (0, T.useInappropriateConversationItem)(n), eh = (0, h.useSafetyWarningsItem)(n), eA = n.isManaged(), eC = t.isNonUserBot();
  return (0, a.jsxs)(u.Menu, {
    navId: "user-context",
    onClose: i.closeContextMenu,
    "aria-label": k.default.Messages.USER_ACTIONS_MENU_LABEL,
    onSelect: K,
    children: [(0, a.jsx)(u.MenuGroup, {
      children: !eC && eo
    }), (0, a.jsx)(u.MenuGroup, {
      children: eT
    }), (0, a.jsx)(u.MenuGroup, {
      children: eh
    }), (0, a.jsx)(u.MenuGroup, {
      children: eg
    }), (0, a.jsxs)(u.MenuGroup, {
      children: [eI, ep, em]
    }), (0, a.jsx)(u.MenuGroup, {
      children: !eC && e_
    }), (0, a.jsxs)(u.MenuGroup, {
      children: [!eC && (0, a.jsxs)(a.Fragment, {
        children: [W && B, H, !eA && et, W && X, W && z, Q]
      }), J]
    }), !eC && (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(u.MenuGroup, {
        children: o && ee
      }), (0, a.jsx)(u.MenuGroup, {
        children: W && $
      }), (0, a.jsxs)(u.MenuGroup, {
        children: [o && ea, o && eu, eS, W && Z, en, W && ei, o && eM]
      }), (0, a.jsxs)(u.MenuGroup, {
        children: [s && el, es]
      }), L && (0, a.jsxs)(u.MenuGroup, {
        children: [ec, ef]
      })]
    }), (0, a.jsx)(u.MenuGroup, {
      children: eE
    }), (0, a.jsxs)(u.MenuGroup, {
      children: [er, !Y && ed]
    })]
  })
}, {
  object: L.AnalyticsObjects.CONTEXT_MENU
}), [o.default.CONTEXT_MENU, o.default.DM_USER_MENU])