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
  u = n("911969"),
  r = n("299206"),
  o = n("26737"),
  d = n("29264"),
  c = n("905041"),
  f = n("89013"),
  E = n("988500"),
  M = n("570870"),
  g = n("786095"),
  m = n("667922"),
  v = n("941389"),
  p = n("449751"),
  S = n("749339"),
  h = n("601184"),
  I = n("6148"),
  A = n("519110"),
  _ = n("759875"),
  T = n("168405"),
  C = n("536639"),
  R = n("720904"),
  O = n("88791"),
  x = n("235047"),
  y = n("385302"),
  N = n("873699"),
  j = n("134323"),
  b = n("429260"),
  P = n("1626"),
  D = n("279329"),
  L = n("627938"),
  G = n("481300"),
  U = n("689938");

function F(e) {
  var t, n;
  let a, l, u, r, {
      channel: o,
      message: d,
      target: c,
      mediaItem: f,
      shouldHideMediaOptions: E,
      onSelect: M,
      onHeightUpdate: g
    } = e,
    m = c,
    v = c.getAttribute("data-type"),
    p = c.getAttribute("data-id"),
    S = c.getAttribute("data-name");
  if (null != f) l = a = u = f.url;
  else
    for (;
      (0, i.isElement)(m);)(0, i.isElement)(m, HTMLImageElement) && null != m.src && (l = m.src), (0, i.isElement)(m, HTMLAnchorElement) && null != m.href && (a = m.href, r = m.textContent, null == l && "img" === m.getAttribute("data-role") && (l = a, m.hasAttribute("data-safe-src") && "" !== m.getAttribute("data-safe-src") && (u = m.getAttribute("data-safe-src")))), m = m.parentNode;
  return w({
    message: d,
    channel: o,
    mediaItem: f,
    textSelection: null !== (n = null === (t = document.getSelection()) || void 0 === t ? void 0 : t.toString()) && void 0 !== n ? n : "",
    favoriteableType: v,
    favoriteableId: p,
    favoriteableName: S,
    itemHref: a,
    itemSrc: l,
    itemSafeSrc: u,
    itemTextContent: r,
    canReport: !0,
    onHeightUpdate: g,
    onSelect: M,
    onClose: s.closeContextMenu,
    navId: "message",
    ariaLabel: U.default.Messages.MESSAGE_ACTIONS_MENU_LABEL,
    shouldHideMediaOptions: E
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
  } = e, $ = (0, o.default)(s), Q = (0, f.default)(s), ee = (0, R.default)(t, n), et = (0, m.default)(t, n), en = (0, I.default)(t, n), ea = (0, C.default)(t, n), ei = (0, A.default)({
    type: F,
    id: w,
    name: k
  }), el = (0, P.default)(t, n), es = (0, T.default)(t, n), eu = (0, O.default)(t), er = (0, v.default)(t, n), eo = (0, p.default)(t, n), ed = (0, y.default)(t, n), ec = (0, N.default)(t, n), ef = (0, h.default)(t, n), eE = (0, b.default)(t), eM = (0, D.default)(t, n), eg = (0, c.default)(null != V ? V : K, H, t, {
    shouldHideMediaOptions: q
  }), em = (0, d.default)(Y, t, {
    shouldHideMediaOptions: q
  }), ev = (0, G.default)(t, i), ep = (0, r.default)({
    id: t.id,
    label: U.default.Messages.COPY_ID_MESSAGE,
    shiftId: "".concat(t.channel_id, "-").concat(t.id)
  }), eS = (0, j.default)(t, n), eh = (0, _.default)(t, n), eI = (0, L.default)(t, n), eA = (0, g.default)(s, n.getGuildId()), e_ = (0, x.default)(t), eT = (0, S.default)(t), eC = (0, M.default)({
    commandType: u.ApplicationCommandType.MESSAGE,
    commandTargetId: t.id,
    channel: n,
    guildId: void 0,
    onHeightUpdate: B
  }), eR = (0, E.default)(t);
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
      children: ["" === s ? ee : null, et, eu, en, ea, ei, eS, eh, eI, eT, eC, el, es, e_, er, eo, eM, eR, ec, ed, ef, X && eE]
    }), null != eA && (0, a.jsx)(l.MenuGroup, {
      children: eA
    }), (0, a.jsxs)(l.MenuGroup, {
      children: [em, ev]
    }), (0, a.jsx)(l.MenuGroup, {
      children: eg
    }), (0, a.jsx)(l.MenuGroup, {
      children: ep
    })]
  })
}