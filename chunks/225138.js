"use strict";
n.r(t), n.d(t, {
  default: function() {
    return F
  },
  useMessageMenu: function() {
    return w
  }
});
var a = n("735250");
n("470079");
var i = n("374470"),
  l = n("481060"),
  s = n("239091"),
  r = n("911969"),
  u = n("299206"),
  o = n("26737"),
  d = n("29264"),
  c = n("905041"),
  f = n("89013"),
  M = n("988500"),
  E = n("570870"),
  m = n("786095"),
  g = n("667922"),
  v = n("941389"),
  I = n("449751"),
  h = n("749339"),
  p = n("601184"),
  S = n("6148"),
  A = n("519110"),
  C = n("759875"),
  _ = n("168405"),
  T = n("536639"),
  R = n("720904"),
  O = n("88791"),
  x = n("235047"),
  y = n("385302"),
  N = n("873699"),
  j = n("134323"),
  b = n("429260"),
  D = n("1626"),
  L = n("279329"),
  P = n("627938"),
  G = n("481300"),
  U = n("689938");

function F(e) {
  var t, n;
  let a, l, r, u, {
      channel: o,
      message: d,
      target: c,
      mediaItem: f,
      shouldHideMediaOptions: M,
      onSelect: E,
      onHeightUpdate: m
    } = e,
    g = c,
    v = c.getAttribute("data-type"),
    I = c.getAttribute("data-id"),
    h = c.getAttribute("data-name");
  if (null != f) l = a = r = f.url;
  else
    for (;
      (0, i.isElement)(g);)(0, i.isElement)(g, HTMLImageElement) && null != g.src && (l = g.src), (0, i.isElement)(g, HTMLAnchorElement) && null != g.href && (a = g.href, u = g.textContent, null == l && "img" === g.getAttribute("data-role") && (l = a, g.hasAttribute("data-safe-src") && "" !== g.getAttribute("data-safe-src") && (r = g.getAttribute("data-safe-src")))), g = g.parentNode;
  return w({
    message: d,
    channel: o,
    mediaItem: f,
    textSelection: null !== (n = null === (t = document.getSelection()) || void 0 === t ? void 0 : t.toString()) && void 0 !== n ? n : "",
    favoriteableType: v,
    favoriteableId: I,
    favoriteableName: h,
    itemHref: a,
    itemSrc: l,
    itemSafeSrc: r,
    itemTextContent: u,
    canReport: !0,
    onHeightUpdate: m,
    onSelect: E,
    onClose: s.closeContextMenu,
    navId: "message",
    ariaLabel: U.default.Messages.MESSAGE_ACTIONS_MENU_LABEL,
    shouldHideMediaOptions: M
  })
}

function w(e) {
  let {
    message: t,
    channel: n,
    mediaItem: i,
    textSelection: s,
    favoriteableType: F,
    favoriteableId: w,
    favoriteableName: k,
    itemHref: V,
    itemSrc: K,
    itemSafeSrc: Y,
    itemTextContent: H,
    canReport: X,
    onHeightUpdate: B,
    onSelect: Z,
    onClose: W,
    navId: z,
    ariaLabel: J,
    shouldHideMediaOptions: q = !1
  } = e, $ = (0, o.default)(s), Q = (0, f.default)(s), ee = (0, R.default)(t, n), et = (0, g.default)(t, n), en = (0, S.default)(t, n), ea = (0, T.default)(t, n), ei = (0, A.default)({
    type: F,
    id: w,
    name: k
  }), el = (0, D.default)(t, n), es = (0, _.default)(t, n), er = (0, O.default)(t), eu = (0, v.default)(t, n), eo = (0, I.default)(t, n), ed = (0, y.default)(t, n), ec = (0, N.default)(t, n), ef = (0, p.default)(t, n), eM = (0, b.default)(t), eE = (0, L.default)(t, n), em = (0, c.default)(null != V ? V : K, H, t, {
    shouldHideMediaOptions: q
  }), eg = (0, d.default)(Y, t, {
    shouldHideMediaOptions: q
  }), ev = (0, G.default)(t, i), eI = (0, u.default)({
    id: t.id,
    label: U.default.Messages.COPY_ID_MESSAGE,
    shiftId: "".concat(t.channel_id, "-").concat(t.id)
  }), eh = (0, j.default)(t, n), ep = (0, C.default)(t, n), eS = (0, P.default)(t, n), eA = (0, m.default)(s, n.getGuildId()), eC = (0, x.default)(t), e_ = (0, h.default)(t), eT = (0, E.default)({
    commandType: r.ApplicationCommandType.MESSAGE,
    commandTargetId: t.id,
    channel: n,
    guildId: void 0,
    onHeightUpdate: B
  }), eR = (0, M.default)(t);
  return (0, a.jsxs)(l.Menu, {
    navId: z,
    onClose: W,
    "aria-label": J,
    onSelect: Z,
    children: [(0, a.jsx)(l.MenuGroup, {
      children: $
    }), (0, a.jsx)(l.MenuGroup, {
      children: Q
    }), (0, a.jsxs)(l.MenuGroup, {
      children: ["" === s ? ee : null, et, er, en, ea, ei, eh, ep, eS, e_, eT, el, es, eC, eu, eo, eE, eR, ec, ed, ef, X && eM]
    }), null != eA && (0, a.jsx)(l.MenuGroup, {
      children: eA
    }), (0, a.jsxs)(l.MenuGroup, {
      children: [eg, ev]
    }), (0, a.jsx)(l.MenuGroup, {
      children: em
    }), (0, a.jsx)(l.MenuGroup, {
      children: eI
    })]
  })
}