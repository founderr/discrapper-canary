"use strict";
n.r(t);
var a = n("735250");
n("470079");
var u = n("481060"),
  i = n("239091"),
  r = n("883385"),
  l = n("108843"),
  s = n("911969"),
  d = n("947440"),
  o = n("100527"),
  f = n("441061"),
  c = n("167675"),
  _ = n("737013"),
  p = n("461535"),
  M = n("776568"),
  S = n("299206"),
  E = n("895563"),
  m = n("212205"),
  I = n("62420"),
  g = n("455395"),
  h = n("581052"),
  T = n("875252"),
  A = n("122074"),
  C = n("819403"),
  v = n("777658"),
  R = n("858488"),
  N = n("185457"),
  x = n("570870"),
  F = n("389052"),
  O = n("24311"),
  j = n("794973"),
  G = n("332576"),
  y = n("710631"),
  U = n("558924"),
  b = n("991307"),
  P = n("725119"),
  V = n("700994"),
  D = n("332031"),
  L = n("981631"),
  k = n("689938");
t.default = (0, l.default)((0, r.default)(function(e) {
  let {
    user: t,
    channel: n,
    channelSelected: r = !1,
    showMute: l = !0,
    showMediaItems: o = !1,
    showChannelCallItems: L = !1,
    showModalItems: W = !0,
    targetIsUser: Y = !1,
    context: w,
    onSelect: K,
    onHeightUpdate: q
  } = e, H = (0, P.default)(t.id, null), B = (0, O.default)(t, w), X = (0, N.default)({
    user: t,
    context: w
  }), z = (0, R.default)(t), Q = (0, D.default)(t.id), J = (0, j.default)(n.id, r), Z = (0, y.default)(t), $ = (0, d.default)(null, t), ee = (0, V.default)(t.id), et = (0, U.default)(t.id, n.id), en = (0, v.default)(t), ea = (0, b.default)(t.id), eu = (0, G.default)(t.id, n.id), ei = (0, F.default)(t), er = (0, M.default)(n), el = (0, A.default)(), es = (0, S.default)({
    id: t.id,
    label: k.default.Messages.COPY_ID_USER
  }), ed = (0, S.default)({
    id: n.id,
    label: k.default.Messages.COPY_ID_CHANNEL
  }), eo = (0, p.default)(n), ef = (0, c.default)(t.id), ec = (0, f.default)(n.id), e_ = (0, C.default)(t), ep = (0, _.default)(t.id), eM = (0, x.default)({
    commandType: s.ApplicationCommandType.USER,
    commandTargetId: t.id,
    channel: n,
    guildId: void 0,
    onHeightUpdate: q
  }), eS = (0, E.useAddToFavoritesItem)(n), eE = (0, E.useRemoveFromFavoritesItem)(n), em = (0, m.default)(n), eI = (0, I.default)(n), eg = (0, h.useMessageRequestItem)(n), eh = (0, g.useInappropriateConversationItem)(n), eT = (0, T.useSafetyWarningsItem)(n), eA = n.isManaged(), eC = t.isNonUserBot();
  return (0, a.jsxs)(u.Menu, {
    navId: "user-context",
    onClose: i.closeContextMenu,
    "aria-label": k.default.Messages.USER_ACTIONS_MENU_LABEL,
    onSelect: K,
    children: [(0, a.jsx)(u.MenuGroup, {
      children: !eC && eo
    }), (0, a.jsx)(u.MenuGroup, {
      children: eg
    }), (0, a.jsx)(u.MenuGroup, {
      children: eT
    }), (0, a.jsx)(u.MenuGroup, {
      children: eh
    }), (0, a.jsxs)(u.MenuGroup, {
      children: [eS, em, eI]
    }), (0, a.jsx)(u.MenuGroup, {
      children: !eC && e_
    }), (0, a.jsxs)(u.MenuGroup, {
      children: [!eC && (0, a.jsxs)(a.Fragment, {
        children: [W && H, B, !eA && et, W && X, W && z, Q]
      }), J]
    }), !eC && (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(u.MenuGroup, {
        children: o && ee
      }), (0, a.jsx)(u.MenuGroup, {
        children: W && $
      }), (0, a.jsxs)(u.MenuGroup, {
        children: [o && ea, o && eu, eM, W && Z, en, W && ei, o && ep]
      }), (0, a.jsxs)(u.MenuGroup, {
        children: [l && er, el]
      }), L && (0, a.jsxs)(u.MenuGroup, {
        children: [ec, ef]
      })]
    }), (0, a.jsx)(u.MenuGroup, {
      children: eE
    }), (0, a.jsxs)(u.MenuGroup, {
      children: [es, !Y && ed]
    })]
  })
}, {
  object: L.AnalyticsObjects.CONTEXT_MENU
}), [o.default.CONTEXT_MENU, o.default.DM_USER_MENU])