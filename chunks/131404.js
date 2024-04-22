"use strict";
n.r(t);
var a = n("735250");
n("470079");
var u = n("481060"),
  i = n("239091"),
  l = n("883385"),
  r = n("108843"),
  s = n("911969"),
  o = n("947440"),
  d = n("100527"),
  f = n("441061"),
  c = n("167675"),
  S = n("737013"),
  _ = n("461535"),
  I = n("776568"),
  M = n("299206"),
  E = n("895563"),
  p = n("212205"),
  m = n("62420"),
  g = n("455395"),
  C = n("581052"),
  T = n("875252"),
  v = n("122074"),
  h = n("819403"),
  N = n("777658"),
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
t.default = (0, r.default)((0, l.default)(function(e) {
  let {
    user: t,
    channel: n,
    channelSelected: l = !1,
    showMute: r = !0,
    showMediaItems: d = !1,
    showChannelCallItems: W = !1,
    showModalItems: Y = !0,
    targetIsUser: w = !1,
    context: K,
    onSelect: q,
    onHeightUpdate: B
  } = e, H = (0, b.default)(t.id, null), Q = (0, U.default)(t, K), X = (0, R.default)({
    user: t,
    context: K
  }), z = (0, A.default)({
    user: t
  }), J = (0, k.default)(t.id), Z = (0, F.default)(n.id, l), $ = (0, j.default)({
    user: t
  }), ee = (0, o.default)(null, t), et = (0, D.default)(t.id), en = (0, y.default)(t.id, n.id), ea = (0, N.default)(t), eu = (0, P.default)(t.id), ei = (0, G.default)(t.id, n.id), el = (0, O.default)({
    user: t
  }), er = (0, I.default)(n), es = (0, v.default)(L.ZERO_STRING_GUILD_ID, n.id), eo = (0, M.default)({
    id: t.id,
    label: V.default.Messages.COPY_ID_USER
  }), ed = (0, M.default)({
    id: n.id,
    label: V.default.Messages.COPY_ID_CHANNEL
  }), ef = (0, _.default)(n), ec = (0, c.default)(t.id), eS = (0, f.default)(n.id), e_ = (0, h.default)(t), eI = (0, S.default)(t.id), eM = (0, x.default)({
    commandType: s.ApplicationCommandType.USER,
    commandTargetId: t.id,
    channel: n,
    guildId: void 0,
    onHeightUpdate: B
  }), eE = (0, E.useAddToFavoritesItem)(n), ep = (0, E.useRemoveFromFavoritesItem)(n), em = (0, p.default)(n), eg = (0, m.default)(n), eC = (0, C.useMessageRequestItem)(n), eT = (0, g.useInappropriateConversationItem)(n), ev = (0, T.useSafetyWarningsItem)(n), eh = n.isManaged(), eN = t.isNonUserBot();
  return (0, a.jsxs)(u.Menu, {
    navId: "user-context",
    onClose: i.closeContextMenu,
    "aria-label": V.default.Messages.USER_ACTIONS_MENU_LABEL,
    onSelect: q,
    children: [(0, a.jsx)(u.MenuGroup, {
      children: !eN && ef
    }), (0, a.jsx)(u.MenuGroup, {
      children: eC
    }), (0, a.jsx)(u.MenuGroup, {
      children: ev
    }), (0, a.jsx)(u.MenuGroup, {
      children: eT
    }), (0, a.jsxs)(u.MenuGroup, {
      children: [eE, em, eg]
    }), (0, a.jsx)(u.MenuGroup, {
      children: !eN && e_
    }), (0, a.jsxs)(u.MenuGroup, {
      children: [!eN && (0, a.jsxs)(a.Fragment, {
        children: [Y && H, Q, !eh && en, Y && X, Y && z, J]
      }), Z]
    }), !eN && (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(u.MenuGroup, {
        children: d && et
      }), (0, a.jsx)(u.MenuGroup, {
        children: Y && ee
      }), (0, a.jsxs)(u.MenuGroup, {
        children: [d && eu, d && ei, eM, Y && $, ea, Y && el, d && eI]
      }), (0, a.jsxs)(u.MenuGroup, {
        children: [r && er, es]
      }), W && (0, a.jsxs)(u.MenuGroup, {
        children: [eS, ec]
      })]
    }), (0, a.jsx)(u.MenuGroup, {
      children: ep
    }), (0, a.jsxs)(u.MenuGroup, {
      children: [eo, !w && ed]
    })]
  })
}, {
  object: L.AnalyticsObjects.CONTEXT_MENU
}), [d.default.CONTEXT_MENU, d.default.DM_USER_MENU])