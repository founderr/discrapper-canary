"use strict";
n.r(t), n.d(t, {
  default: function() {
    return U
  },
  useMessageMenu: function() {
    return w
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
  S = n("175537"),
  I = n("485598"),
  p = n("518155"),
  h = n("355669"),
  v = n("718381"),
  _ = n("442711"),
  A = n("702495"),
  T = n("875834"),
  C = n("780657"),
  R = n("204462"),
  y = n("487051"),
  O = n("815384"),
  x = n("263879"),
  N = n("604179"),
  b = n("167670"),
  G = n("913274"),
  j = n("514705"),
  D = n("321456"),
  F = n("470254"),
  L = n("678803"),
  P = n("782340");

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
    S = c.getAttribute("data-type"),
    I = c.getAttribute("data-id"),
    p = c.getAttribute("data-name");
  if (null != f) l = a = u = f.url;
  else
    for (;
      (0, i.isElement)(g);)(0, i.isElement)(g, HTMLImageElement) && null != g.src && (l = g.src), (0, i.isElement)(g, HTMLAnchorElement) && null != g.href && (a = g.href, r = g.textContent, null == l && "img" === g.getAttribute("data-role") && (l = a, g.hasAttribute("data-safe-src") && "" !== g.getAttribute("data-safe-src") && (u = g.getAttribute("data-safe-src")))), g = g.parentNode;
  let h = null !== (n = null === (t = document.getSelection()) || void 0 === t ? void 0 : t.toString()) && void 0 !== n ? n : "";
  return w({
    message: o,
    channel: d,
    attachment: f,
    textSelection: h,
    favoriteableType: S,
    favoriteableId: I,
    favoriteableName: p,
    itemHref: a,
    itemSrc: l,
    itemSafeSrc: u,
    itemTextContent: r,
    canReport: !0,
    onHeightUpdate: m,
    onSelect: M,
    onClose: s.closeContextMenu,
    navId: "message",
    ariaLabel: P.default.Messages.MESSAGE_ACTIONS_MENU_LABEL,
    shouldHideMediaOptions: E
  })
}

function w(e) {
  let {
    message: t,
    channel: n,
    attachment: i,
    textSelection: s,
    favoriteableType: U,
    favoriteableId: w,
    favoriteableName: k,
    itemHref: V,
    itemSrc: K,
    itemSafeSrc: H,
    itemTextContent: Y,
    canReport: B,
    onHeightUpdate: X,
    onSelect: Z,
    onClose: z,
    navId: J,
    ariaLabel: W,
    shouldHideMediaOptions: q = !1
  } = e, $ = (0, d.default)(s), Q = (0, f.default)(s), ee = (0, R.default)(t, n), et = (0, S.default)(t, n), en = (0, _.default)(t, n), ea = (0, C.default)(t, n), ei = (0, A.default)({
    type: U,
    id: w,
    name: k
  }), el = (0, j.default)(t, n), es = (0, T.default)(t, n), eu = (0, y.default)(t), er = (0, I.default)(t, n), ed = (0, p.default)(t, n), eo = (0, x.default)(t, n), ec = (0, N.default)(t, n), ef = (0, v.default)(t, n), eE = (0, G.default)(t), eM = (0, D.default)(t, n), em = (0, c.default)(null != V ? V : K, Y, t, {
    shouldHideMediaOptions: q
  }), eg = (0, o.default)(H, t, {
    shouldHideMediaOptions: q
  }), eS = (0, L.default)(t, i), eI = (0, r.default)({
    id: t.id,
    label: P.default.Messages.COPY_ID_MESSAGE,
    shiftId: "".concat(t.channel_id, "-").concat(t.id)
  }), ep = (0, b.default)(t, n), eh = (0, F.default)(t, n), ev = (0, g.default)(t, n, {
    hoist: !0
  }), e_ = (0, m.default)(s, n.getGuildId()), eA = (0, O.default)(t), eT = (0, h.default)(t), eC = (0, M.default)({
    commandType: u.ApplicationCommandType.MESSAGE,
    commandTargetId: t.id,
    channel: n,
    guildId: void 0,
    onHeightUpdate: X
  }), eR = (0, E.default)(t, n);
  return (0, a.jsxs)(l.Menu, {
    navId: J,
    onClose: z,
    "aria-label": W,
    onSelect: Z,
    children: [(0, a.jsx)(l.MenuGroup, {
      children: $
    }), (0, a.jsx)(l.MenuGroup, {
      children: Q
    }), (0, a.jsxs)(l.MenuGroup, {
      children: ["" === s ? ee : null, et, eu, en, ea, ei, ep, eh, eT, eC, el, es, eA, er, ed, eM, ev, eR, ec, eo, ef, B && eE]
    }), null != e_ && (0, a.jsx)(l.MenuGroup, {
      children: e_
    }), (0, a.jsxs)(l.MenuGroup, {
      children: [eg, eS]
    }), (0, a.jsx)(l.MenuGroup, {
      children: em
    }), (0, a.jsx)(l.MenuGroup, {
      children: eI
    })]
  })
}