t.r(n), t.d(n, {
  default: function() {
    return w
  },
  useMessageMenu: function() {
    return F
  }
});
var i = t(735250);
t(470079);
var a = t(374470),
  r = t(481060),
  l = t(239091),
  o = t(911969),
  u = t(299206),
  s = t(26737),
  c = t(29264),
  d = t(905041),
  E = t(89013),
  f = t(988500),
  I = t(570870),
  M = t(786095),
  g = t(667922),
  m = t(941389),
  Z = t(449751),
  _ = t(749339),
  v = t(601184),
  S = t(6148),
  A = t(519110),
  T = t(759875),
  h = t(168405),
  p = t(536639),
  O = t(720904),
  R = t(88791),
  N = t(235047),
  x = t(385302),
  C = t(873699),
  j = t(134323),
  P = t(429260),
  b = t(1626),
  L = t(279329),
  y = t(627938),
  D = t(512303),
  G = t(481300),
  U = t(689938);

function w(e) {
  var n, t;
  let i, r, o, u, {
      channel: s,
      message: c,
      target: d,
      mediaItem: E,
      shouldHideMediaOptions: f,
      onSelect: I,
      onHeightUpdate: M
    } = e,
    g = d,
    m = d.getAttribute("data-type"),
    Z = d.getAttribute("data-id"),
    _ = d.getAttribute("data-name");
  if (null != E) r = i = o = E.url;
  else
    for (;
      (0, a.k)(g);)(0, a.k)(g, HTMLImageElement) && null != g.src && (r = g.src), (0, a.k)(g, HTMLAnchorElement) && null != g.href && (i = g.href, u = g.textContent, null == r && "img" === g.getAttribute("data-role") && (r = i, g.hasAttribute("data-safe-src") && "" !== g.getAttribute("data-safe-src") && (o = g.getAttribute("data-safe-src")))), g = g.parentNode;
  return F({
    message: c,
    channel: s,
    mediaItem: E,
    textSelection: null !== (t = null === (n = document.getSelection()) || void 0 === n ? void 0 : n.toString()) && void 0 !== t ? t : "",
    favoriteableType: m,
    favoriteableId: Z,
    favoriteableName: _,
    itemHref: i,
    itemSrc: r,
    itemSafeSrc: o,
    itemTextContent: u,
    canReport: !0,
    onHeightUpdate: M,
    onSelect: I,
    onClose: l.Zy,
    navId: "message",
    ariaLabel: U.Z.Messages.MESSAGE_ACTIONS_MENU_LABEL,
    shouldHideMediaOptions: f
  })
}

function F(e) {
  let {
    message: n,
    channel: t,
    mediaItem: a,
    textSelection: l,
    favoriteableType: w,
    favoriteableId: F,
    favoriteableName: k,
    itemHref: K,
    itemSrc: V,
    itemSafeSrc: H,
    itemTextContent: X,
    canReport: z,
    onHeightUpdate: Y,
    onSelect: B,
    onClose: W,
    navId: q,
    ariaLabel: J,
    shouldHideMediaOptions: $ = !1
  } = e, Q = (0, s.Z)(l), ee = (0, E.Z)(l), en = (0, O.Z)(n, t), et = (0, g.Z)(n, t), ei = (0, S.Z)(n, t), ea = (0, p.Z)(n, t), er = (0, A.Z)({
    type: w,
    id: F,
    name: k
  }), el = (0, b.Z)(n, t), eo = (0, h.Z)(n, t), eu = (0, R.Z)(n), es = (0, m.Z)(n, t), ec = (0, Z.Z)(n, t), ed = (0, x.Z)(n, t), eE = (0, C.Z)(n, t), ef = (0, v.Z)(n, t), eI = (0, P.Z)(n), eM = (0, L.Z)(n, t), eg = (0, d.Z)(null != K ? K : V, X, n, {
    shouldHideMediaOptions: $
  }), em = (0, c.Z)(H, n, {
    shouldHideMediaOptions: $
  }), eZ = (0, G.Z)(n, a), e_ = (0, u.Z)({
    id: n.id,
    label: U.Z.Messages.COPY_ID_MESSAGE,
    shiftId: "".concat(n.channel_id, "-").concat(n.id)
  }), ev = (0, j.Z)(n, t), eS = (0, T.Z)(n, t), eA = (0, y.Z)(n, t), eT = (0, M.Z)(l, t.getGuildId()), eh = (0, N.Z)(n), ep = (0, _.Z)(n), eO = (0, I.Z)({
    commandType: o.yU.MESSAGE,
    commandTargetId: n.id,
    channel: t,
    guildId: void 0,
    onHeightUpdate: Y
  }), eR = (0, D.Z)(n), eN = (0, f.Z)(n);
  return (0, i.jsxs)(r.Menu, {
    navId: q,
    onClose: W,
    "aria-label": J,
    onSelect: B,
    children: [(0, i.jsx)(r.MenuGroup, {
      children: Q
    }), (0, i.jsx)(r.MenuGroup, {
      children: ee
    }), (0, i.jsxs)(r.MenuGroup, {
      children: ["" === l ? en : null, et, eu, ei, ea, er, ev, eS, eA, ep, eO, el, eo, eh, es, ec, eM, eN, eE, ed, eR, ef, z && eI]
    }), null != eT && (0, i.jsx)(r.MenuGroup, {
      children: eT
    }), (0, i.jsxs)(r.MenuGroup, {
      children: [em, eZ]
    }), (0, i.jsx)(r.MenuGroup, {
      children: eg
    }), (0, i.jsx)(r.MenuGroup, {
      children: e_
    })]
  })
}