t.r(n), t.d(n, {
  default: function() {
    return U
  },
  useMessageMenu: function() {
    return w
  }
});
var i = t(735250);
t(470079);
var a = t(374470),
  l = t(481060),
  r = t(239091),
  o = t(911969),
  u = t(299206),
  s = t(26737),
  c = t(29264),
  d = t(905041),
  E = t(89013),
  f = t(988500),
  M = t(570870),
  g = t(786095),
  m = t(667922),
  I = t(941389),
  Z = t(449751),
  _ = t(749339),
  v = t(601184),
  S = t(6148),
  A = t(519110),
  h = t(759875),
  p = t(168405),
  T = t(536639),
  O = t(720904),
  R = t(88791),
  N = t(235047),
  x = t(385302),
  C = t(873699),
  P = t(134323),
  j = t(429260),
  y = t(1626),
  b = t(279329),
  D = t(627938),
  L = t(481300),
  G = t(689938);

function U(e) {
  var n, t;
  let i, l, o, u, {
      channel: s,
      message: c,
      target: d,
      mediaItem: E,
      shouldHideMediaOptions: f,
      onSelect: M,
      onHeightUpdate: g
    } = e,
    m = d,
    I = d.getAttribute("data-type"),
    Z = d.getAttribute("data-id"),
    _ = d.getAttribute("data-name");
  if (null != E) l = i = o = E.url;
  else
    for (;
      (0, a.k)(m);)(0, a.k)(m, HTMLImageElement) && null != m.src && (l = m.src), (0, a.k)(m, HTMLAnchorElement) && null != m.href && (i = m.href, u = m.textContent, null == l && "img" === m.getAttribute("data-role") && (l = i, m.hasAttribute("data-safe-src") && "" !== m.getAttribute("data-safe-src") && (o = m.getAttribute("data-safe-src")))), m = m.parentNode;
  return w({
    message: c,
    channel: s,
    mediaItem: E,
    textSelection: null !== (t = null === (n = document.getSelection()) || void 0 === n ? void 0 : n.toString()) && void 0 !== t ? t : "",
    favoriteableType: I,
    favoriteableId: Z,
    favoriteableName: _,
    itemHref: i,
    itemSrc: l,
    itemSafeSrc: o,
    itemTextContent: u,
    canReport: !0,
    onHeightUpdate: g,
    onSelect: M,
    onClose: r.Zy,
    navId: "message",
    ariaLabel: G.Z.Messages.MESSAGE_ACTIONS_MENU_LABEL,
    shouldHideMediaOptions: f
  })
}

function w(e) {
  let {
    message: n,
    channel: t,
    mediaItem: a,
    textSelection: r,
    favoriteableType: U,
    favoriteableId: w,
    favoriteableName: k,
    itemHref: F,
    itemSrc: K,
    itemSafeSrc: V,
    itemTextContent: H,
    canReport: X,
    onHeightUpdate: B,
    onSelect: W,
    onClose: Y,
    navId: z,
    ariaLabel: q,
    shouldHideMediaOptions: J = !1
  } = e, $ = (0, s.Z)(r), Q = (0, E.Z)(r), ee = (0, O.Z)(n, t), en = (0, m.Z)(n, t), et = (0, S.Z)(n, t), ei = (0, T.Z)(n, t), ea = (0, A.Z)({
    type: U,
    id: w,
    name: k
  }), el = (0, y.Z)(n, t), er = (0, p.Z)(n, t), eo = (0, R.Z)(n), eu = (0, I.Z)(n, t), es = (0, Z.Z)(n, t), ec = (0, x.Z)(n, t), ed = (0, C.Z)(n, t), eE = (0, v.Z)(n, t), ef = (0, j.Z)(n), eM = (0, b.Z)(n, t), eg = (0, d.Z)(null != F ? F : K, H, n, {
    shouldHideMediaOptions: J
  }), em = (0, c.Z)(V, n, {
    shouldHideMediaOptions: J
  }), eI = (0, L.Z)(n, a), eZ = (0, u.Z)({
    id: n.id,
    label: G.Z.Messages.COPY_ID_MESSAGE,
    shiftId: "".concat(n.channel_id, "-").concat(n.id)
  }), e_ = (0, P.Z)(n, t), ev = (0, h.Z)(n, t), eS = (0, D.Z)(n, t), eA = (0, g.Z)(r, t.getGuildId()), eh = (0, N.Z)(n), ep = (0, _.Z)(n), eT = (0, M.Z)({
    commandType: o.yU.MESSAGE,
    commandTargetId: n.id,
    channel: t,
    guildId: void 0,
    onHeightUpdate: B
  }), eO = (0, f.Z)(n);
  return (0, i.jsxs)(l.Menu, {
    navId: z,
    onClose: Y,
    "aria-label": q,
    onSelect: W,
    children: [(0, i.jsx)(l.MenuGroup, {
      children: $
    }), (0, i.jsx)(l.MenuGroup, {
      children: Q
    }), (0, i.jsxs)(l.MenuGroup, {
      children: ["" === r ? ee : null, en, eo, et, ei, ea, e_, ev, eS, ep, eT, el, er, eh, eu, es, eM, eO, ed, ec, eE, X && ef]
    }), null != eA && (0, i.jsx)(l.MenuGroup, {
      children: eA
    }), (0, i.jsxs)(l.MenuGroup, {
      children: [em, eI]
    }), (0, i.jsx)(l.MenuGroup, {
      children: eg
    }), (0, i.jsx)(l.MenuGroup, {
      children: eZ
    })]
  })
}