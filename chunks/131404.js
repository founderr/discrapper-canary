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
  I = n("461535"),
  _ = n("776568"),
  M = n("299206"),
  E = n("895563"),
  m = n("212205"),
  p = n("62420"),
  C = n("455395"),
  T = n("581052"),
  g = n("875252"),
  N = n("122074"),
  A = n("819403"),
  h = n("777658"),
  v = n("858488"),
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
  L = n("332031"),
  V = n("981631"),
  k = n("689938");
t.default = (0, s.default)((0, i.default)(function(e) {
  let {
    user: t,
    channel: n,
    channelSelected: i = !1,
    showMute: s = !0,
    showMediaItems: o = !1,
    showChannelCallItems: W = !1,
    showModalItems: w = !0,
    targetIsUser: Y = !1,
    context: K,
    onSelect: B,
    onHeightUpdate: q
  } = e, H = (0, b.default)(t.id, null), Q = (0, U.default)(t, K), X = (0, R.default)({
    user: t,
    context: K
  }), z = (0, v.default)({
    user: t
  }), J = (0, L.default)(t.id), Z = (0, F.default)(n.id, i), $ = (0, j.default)({
    user: t
  }), ee = (0, d.default)(null, t), et = (0, D.default)(t.id), en = (0, y.default)(t.id, n.id), ea = (0, h.default)(t), eu = (0, P.default)(t.id), el = (0, G.default)(t.id, n.id), ei = (0, O.default)({
    user: t
  }), es = (0, _.default)(n), er = (0, N.default)(V.ZERO_STRING_GUILD_ID, n.id), ed = (0, M.default)({
    id: t.id,
    label: k.default.Messages.COPY_ID_USER
  }), eo = (0, M.default)({
    id: n.id,
    label: k.default.Messages.COPY_ID_CHANNEL
  }), ef = (0, I.default)(n), ec = (0, c.default)(t.id), eS = (0, f.default)(n.id), eI = (0, A.default)(t), e_ = (0, S.default)(t.id), eM = (0, x.default)({
    commandType: r.ApplicationCommandType.USER,
    commandTargetId: t.id,
    channel: n,
    guildId: void 0,
    onHeightUpdate: q
  }), eE = (0, E.useAddToFavoritesItem)(n), em = (0, E.useRemoveFromFavoritesItem)(n), ep = (0, m.default)(n), eC = (0, p.default)(n), eT = (0, T.useMessageRequestItem)(n), eg = (0, C.useInappropriateConversationItem)(n), eN = (0, g.useSafetyWarningsItem)(n), eA = n.isManaged(), eh = t.isNonUserBot();
  return (0, a.jsxs)(u.Menu, {
    navId: "user-context",
    onClose: l.closeContextMenu,
    "aria-label": k.default.Messages.USER_ACTIONS_MENU_LABEL,
    onSelect: B,
    children: [(0, a.jsx)(u.MenuGroup, {
      children: !eh && ef
    }), (0, a.jsx)(u.MenuGroup, {
      children: eT
    }), (0, a.jsx)(u.MenuGroup, {
      children: eN
    }), (0, a.jsx)(u.MenuGroup, {
      children: eg
    }), (0, a.jsxs)(u.MenuGroup, {
      children: [eE, ep, eC]
    }), (0, a.jsx)(u.MenuGroup, {
      children: !eh && eI
    }), (0, a.jsxs)(u.MenuGroup, {
      children: [!eh && (0, a.jsxs)(a.Fragment, {
        children: [w && H, Q, !eA && en, w && X, w && z, J]
      }), Z]
    }), !eh && (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(u.MenuGroup, {
        children: o && et
      }), (0, a.jsx)(u.MenuGroup, {
        children: w && ee
      }), (0, a.jsxs)(u.MenuGroup, {
        children: [o && eu, o && el, eM, w && $, ea, w && ei, o && e_]
      }), (0, a.jsxs)(u.MenuGroup, {
        children: [s && es, er]
      }), W && (0, a.jsxs)(u.MenuGroup, {
        children: [eS, ec]
      })]
    }), (0, a.jsx)(u.MenuGroup, {
      children: em
    }), (0, a.jsxs)(u.MenuGroup, {
      children: [ed, !Y && eo]
    })]
  })
}, {
  object: V.AnalyticsObjects.CONTEXT_MENU
}), [o.default.CONTEXT_MENU, o.default.DM_USER_MENU])