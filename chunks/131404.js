t.r(n);
var i = t(735250);
t(470079);
var l = t(481060),
  a = t(239091),
  r = t(883385),
  u = t(108843),
  s = t(911969),
  o = t(947440),
  d = t(100527),
  c = t(441061),
  _ = t(167675),
  I = t(737013),
  M = t(145474),
  f = t(702321),
  E = t(461535),
  N = t(776568),
  T = t(299206),
  Z = t(895563),
  A = t(212205),
  S = t(62420),
  g = t(455395),
  C = t(581052),
  O = t(875252),
  m = t(122074),
  x = t(819403),
  h = t(777658),
  R = t(858488),
  U = t(185457),
  v = t(570870),
  p = t(389052),
  P = t(24311),
  j = t(794973),
  G = t(332576),
  y = t(710631),
  b = t(558924),
  D = t(991307),
  L = t(725119),
  F = t(700994),
  V = t(332031),
  k = t(981631),
  Y = t(689938);
n.default = (0, u.Z)((0, r.Z)(function(e) {
  let {
    user: n,
    channel: t,
    channelSelected: r = !1,
    showMute: u = !0,
    showMediaItems: d = !1,
    showChannelCallItems: z = !1,
    showModalItems: w = !0,
    targetIsUser: K = !1,
    context: B,
    onSelect: W,
    onHeightUpdate: H
  } = e, X = (0, L.Z)(n.id, null), q = (0, P.Z)(n, B), Q = (0, U.Z)({
    user: n,
    context: B
  }), J = (0, R.Z)({
    user: n
  }), $ = (0, V.Z)(n.id), ee = (0, j.Z)(t.id, r), en = (0, y.Z)({
    user: n
  }), et = (0, o.Z)(null, n), ei = (0, F.Z)(n.id), el = (0, b.Z)(n.id, t.id), ea = (0, h.Z)(n), er = (0, D.Z)(n.id), eu = (0, M.P)(n.id, t.id), es = (0, G.Z)(n.id, t.id), eo = (0, p.Z)({
    user: n
  }), ed = (0, N.ZP)(t), ec = (0, m.Uf)(k.aIL, t.id, "trailing"), e_ = (0, T.Z)({
    id: n.id,
    label: Y.Z.Messages.COPY_ID_USER
  }), eI = (0, T.Z)({
    id: t.id,
    label: Y.Z.Messages.COPY_ID_CHANNEL
  }), eM = (0, E.Z)(t), ef = (0, _.Z)(n.id), eE = (0, c.Z)(t.id), eN = (0, x.Z)(n), eT = (0, I.Z)(n.id), eZ = (0, v.Z)({
    commandType: s.yU.USER,
    commandTargetId: n.id,
    channel: t,
    guildId: void 0,
    onHeightUpdate: H
  }), eA = (0, Z.l)(t), eS = (0, Z.P)(t), eg = (0, A.Z)(t), eC = (0, S.Z)(t), eO = (0, C.V)(t), em = (0, g.i)(t), ex = (0, O.H)(t), eh = t.isManaged(), eR = n.isNonUserBot();
  return (0, i.jsxs)(l.Menu, {
    navId: "user-context",
    onClose: a.Zy,
    "aria-label": Y.Z.Messages.USER_ACTIONS_MENU_LABEL,
    onSelect: W,
    children: [(0, i.jsx)(l.MenuGroup, {
      children: !(eR && !(0, f.Z)(t.id)) && eM
    }), (0, i.jsx)(l.MenuGroup, {
      children: eO
    }), (0, i.jsx)(l.MenuGroup, {
      children: ex
    }), (0, i.jsx)(l.MenuGroup, {
      children: em
    }), (0, i.jsxs)(l.MenuGroup, {
      children: [eA, eg, eC]
    }), (0, i.jsx)(l.MenuGroup, {
      children: !eR && eN
    }), (0, i.jsxs)(l.MenuGroup, {
      children: [!eR && (0, i.jsxs)(i.Fragment, {
        children: [w && X, q, !eh && el, w && Q, w && J, $]
      }), (0, f.Z)(t.id) && X, ee]
    }), !eR && (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(l.MenuGroup, {
        children: d && ei
      }), (0, i.jsx)(l.MenuGroup, {
        children: w && et
      }), (0, i.jsxs)(l.MenuGroup, {
        children: [d && er, w && eu, d && es, eZ, w && en, ea, w && eo, d && eT]
      }), (0, i.jsxs)(l.MenuGroup, {
        children: [u && ed, ec]
      }), z && (0, i.jsxs)(l.MenuGroup, {
        children: [eE, ef]
      })]
    }), (0, f.Z)(t.id) && (0, i.jsxs)(l.MenuGroup, {
      children: [u && ed, ec]
    }), (0, i.jsx)(l.MenuGroup, {
      children: eS
    }), (0, i.jsxs)(l.MenuGroup, {
      children: [e_, !K && eI]
    })]
  })
}, {
  object: k.qAy.CONTEXT_MENU
}), [d.Z.CONTEXT_MENU, d.Z.DM_USER_MENU])