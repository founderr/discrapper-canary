"use strict";
n.r(t), n.d(t, {
  default: function() {
    return U
  },
  useMessageMenu: function() {
    return k
  }
});
var a = n("37983");
n("884691");
var i = n("118810"),
  l = n("77078"),
  s = n("272030"),
  u = n("798609"),
  r = n("861370"),
  d = n("152298"),
  o = n("447651"),
  c = n("26051"),
  f = n("667358"),
  E = n("22582"),
  M = n("563816"),
  m = n("761136"),
  g = n("126423"),
  p = n("175537"),
  I = n("485598"),
  S = n("518155"),
  v = n("355669"),
  A = n("718381"),
  _ = n("442711"),
  h = n("702495"),
  T = n("875834"),
  C = n("780657"),
  R = n("204462"),
  x = n("487051"),
  O = n("815384"),
  N = n("263879"),
  y = n("604179"),
  b = n("167670"),
  j = n("913274"),
  D = n("514705"),
  L = n("321456"),
  G = n("470254"),
  P = n("678803"),
  F = n("782340");

function U(e) {
  var t, n;
  let a, l, u, r, {
      channel: d,
      message: o,
      target: c,
      attachment: f,
      shouldHideMediaOptions: E,
      onSelect: M,
      onHeightUpdate: m
    } = e,
    g = c,
    p = c.getAttribute("data-type"),
    I = c.getAttribute("data-id"),
    S = c.getAttribute("data-name");
  if (null != f) l = a = u = f.url;
  else
    for (;
      (0, i.isElement)(g);)(0, i.isElement)(g, HTMLImageElement) && null != g.src && (l = g.src), (0, i.isElement)(g, HTMLAnchorElement) && null != g.href && (a = g.href, r = g.textContent, null == l && "img" === g.getAttribute("data-role") && (l = a, g.hasAttribute("data-safe-src") && "" !== g.getAttribute("data-safe-src") && (u = g.getAttribute("data-safe-src")))), g = g.parentNode;
  let v = null !== (n = null === (t = document.getSelection()) || void 0 === t ? void 0 : t.toString()) && void 0 !== n ? n : "";
  return k({
    message: o,
    channel: d,
    attachment: f,
    textSelection: v,
    favoriteableType: p,
    favoriteableId: I,
    favoriteableName: S,
    itemHref: a,
    itemSrc: l,
    itemSafeSrc: u,
    itemTextContent: r,
    canReport: !0,
    onHeightUpdate: m,
    onSelect: M,
    onClose: s.closeContextMenu,
    navId: "message",
    ariaLabel: F.default.Messages.MESSAGE_ACTIONS_MENU_LABEL,
    shouldHideMediaOptions: E
  })
}

function k(e) {
  let {
    message: t,
    channel: n,
    attachment: i,
    textSelection: s,
    favoriteableType: U,
    favoriteableId: k,
    favoriteableName: w,
    itemHref: V,
    itemSrc: K,
    itemSafeSrc: B,
    itemTextContent: H,
    canReport: Y,
    onHeightUpdate: z,
    onSelect: X,
    onClose: Z,
    navId: W,
    ariaLabel: J,
    shouldHideMediaOptions: q = !1
  } = e, $ = (0, d.default)(s), Q = (0, f.default)(s), ee = (0, R.default)(t, n), et = (0, p.default)(t, n), en = (0, _.default)(t, n), ea = (0, C.default)(t, n), ei = (0, h.default)({
    type: U,
    id: k,
    name: w
  }), el = (0, D.default)(t, n), es = (0, T.default)(t, n), eu = (0, x.default)(t), er = (0, I.default)(t, n), ed = (0, S.default)(t, n), eo = (0, N.default)(t, n), ec = (0, y.default)(t, n), ef = (0, A.default)(t, n), eE = (0, j.default)(t), eM = (0, L.default)(t, n), em = (0, c.default)(null != V ? V : K, H, t, {
    shouldHideMediaOptions: q
  }), eg = (0, o.default)(B, t, {
    shouldHideMediaOptions: q
  }), ep = (0, P.default)(t, i), eI = (0, r.default)({
    id: t.id,
    label: F.default.Messages.COPY_ID_MESSAGE,
    shiftId: "".concat(t.channel_id, "-").concat(t.id)
  }), eS = (0, b.default)(t, n), ev = (0, G.default)(t, n), eA = (0, g.default)(t, n, {
    hoist: !0
  }), e_ = (0, m.default)(s, n.getGuildId()), eh = (0, O.default)(t), eT = (0, v.default)(t), eC = (0, M.default)({
    commandType: u.ApplicationCommandType.MESSAGE,
    commandTargetId: t.id,
    channel: n,
    guildId: void 0,
    onHeightUpdate: z
  }), eR = (0, E.default)(t, n);
  return (0, a.jsxs)(l.Menu, {
    navId: W,
    onClose: Z,
    "aria-label": J,
    onSelect: X,
    children: [(0, a.jsx)(l.MenuGroup, {
      children: $
    }), (0, a.jsx)(l.MenuGroup, {
      children: Q
    }), (0, a.jsxs)(l.MenuGroup, {
      children: ["" === s ? ee : null, et, eu, en, ea, ei, eS, ev, eT, eC, el, es, eh, er, ed, eM, eA, eR, ec, eo, ef, Y && eE]
    }), null != e_ && (0, a.jsx)(l.MenuGroup, {
      children: e_
    }), (0, a.jsxs)(l.MenuGroup, {
      children: [eg, ep]
    }), (0, a.jsx)(l.MenuGroup, {
      children: em
    }), (0, a.jsx)(l.MenuGroup, {
      children: eI
    })]
  })
}