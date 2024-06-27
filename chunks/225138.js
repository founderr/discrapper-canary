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
  s = t(299206),
  u = t(26737),
  d = t(29264),
  c = t(905041),
  E = t(89013),
  f = t(988500),
  M = t(570870),
  I = t(786095),
  g = t(667922),
  m = t(941389),
  _ = t(449751),
  Z = t(749339),
  S = t(601184),
  v = t(6148),
  A = t(519110),
  T = t(759875),
  h = t(168405),
  O = t(536639),
  R = t(720904),
  p = t(88791),
  N = t(235047),
  x = t(385302),
  C = t(873699),
  b = t(134323),
  j = t(429260),
  P = t(1626),
  L = t(279329),
  D = t(627938),
  G = t(512303),
  y = t(481300),
  U = t(689938);

function w(e) {
  var n, t;
  let i, r, o, s, {
      channel: u,
      message: d,
      target: c,
      mediaItem: E,
      shouldHideMediaOptions: f,
      onSelect: M,
      onHeightUpdate: I
    } = e,
    g = c,
    m = c.getAttribute("data-type"),
    _ = c.getAttribute("data-id"),
    Z = c.getAttribute("data-name");
  if (null != E) r = i = o = E.url;
  else
    for (;
      (0, a.k)(g);)(0, a.k)(g, HTMLImageElement) && null != g.src && (r = g.src), (0, a.k)(g, HTMLAnchorElement) && null != g.href && (i = g.href, s = g.textContent, null == r && "img" === g.getAttribute("data-role") && (r = i, g.hasAttribute("data-safe-src") && "" !== g.getAttribute("data-safe-src") && (o = g.getAttribute("data-safe-src")))), g = g.parentNode;
  return F({
    message: d,
    channel: u,
    mediaItem: E,
    textSelection: null !== (t = null === (n = document.getSelection()) || void 0 === n ? void 0 : n.toString()) && void 0 !== t ? t : "",
    favoriteableType: m,
    favoriteableId: _,
    favoriteableName: Z,
    itemHref: i,
    itemSrc: r,
    itemSafeSrc: o,
    itemTextContent: s,
    canReport: !0,
    onHeightUpdate: I,
    onSelect: M,
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
    canReport: Y,
    onHeightUpdate: z,
    onSelect: B,
    onClose: W,
    navId: q,
    ariaLabel: J,
    shouldHideMediaOptions: $ = !1
  } = e, Q = (0, u.Z)(l), ee = (0, E.Z)(l), en = (0, R.Z)(n, t), et = (0, g.Z)(n, t), ei = (0, v.Z)(n, t), ea = (0, O.Z)(n, t), er = (0, A.Z)({
    type: w,
    id: F,
    name: k
  }), el = (0, P.Z)(n, t), eo = (0, h.Z)(n, t), es = (0, p.Z)(n), eu = (0, m.Z)(n, t), ed = (0, _.Z)(n, t), ec = (0, x.Z)(n, t), eE = (0, C.Z)(n, t), ef = (0, S.Z)(n, t), eM = (0, j.Z)(n), eI = (0, L.Z)(n, t), eg = (0, c.Z)(null != K ? K : V, X, n, {
    shouldHideMediaOptions: $
  }), em = (0, d.Z)(H, n, {
    shouldHideMediaOptions: $
  }), e_ = (0, y.Z)(n, a), eZ = (0, s.Z)({
    id: n.id,
    label: U.Z.Messages.COPY_ID_MESSAGE,
    shiftId: "".concat(n.channel_id, "-").concat(n.id)
  }), eS = (0, b.Z)(n, t), ev = (0, T.Z)(n, t), eA = (0, D.Z)(n, t), eT = (0, I.Z)(l, t.getGuildId()), eh = (0, N.Z)(n), eO = (0, Z.Z)(n), eR = (0, M.Z)({
    commandType: o.yU.MESSAGE,
    commandTargetId: n.id,
    channel: t,
    guildId: void 0,
    onHeightUpdate: z
  }), ep = (0, G.Z)(n), eN = (0, f.Z)(n);
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
      children: ["" === l ? en : null, et, es, ei, ea, er, eS, ev, eA, eO, eR, el, eo, eh, eu, ed, eI, eN, eE, ec, ep, ef, Y && eM]
    }), null != eT && (0, i.jsx)(r.MenuGroup, {
      children: eT
    }), (0, i.jsxs)(r.MenuGroup, {
      children: [em, e_]
    }), (0, i.jsx)(r.MenuGroup, {
      children: eg
    }), (0, i.jsx)(r.MenuGroup, {
      children: eZ
    })]
  })
}