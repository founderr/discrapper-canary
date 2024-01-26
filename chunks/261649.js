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
  I = n("175537"),
  p = n("485598"),
  S = n("518155"),
  A = n("355669"),
  v = n("718381"),
  h = n("442711"),
  _ = n("702495"),
  T = n("875834"),
  C = n("780657"),
  R = n("204462"),
  O = n("487051"),
  x = n("815384"),
  N = n("263879"),
  y = n("604179"),
  b = n("167670"),
  j = n("913274"),
  D = n("514705"),
  G = n("321456"),
  L = n("470254"),
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
    I = c.getAttribute("data-type"),
    p = c.getAttribute("data-id"),
    S = c.getAttribute("data-name");
  if (null != f) l = a = u = f.url;
  else
    for (;
      (0, i.isElement)(g);)(0, i.isElement)(g, HTMLImageElement) && null != g.src && (l = g.src), (0, i.isElement)(g, HTMLAnchorElement) && null != g.href && (a = g.href, r = g.textContent, null == l && "img" === g.getAttribute("data-role") && (l = a, g.hasAttribute("data-safe-src") && "" !== g.getAttribute("data-safe-src") && (u = g.getAttribute("data-safe-src")))), g = g.parentNode;
  let A = null !== (n = null === (t = document.getSelection()) || void 0 === t ? void 0 : t.toString()) && void 0 !== n ? n : "";
  return k({
    message: o,
    channel: d,
    attachment: f,
    textSelection: A,
    favoriteableType: I,
    favoriteableId: p,
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
    itemSafeSrc: H,
    itemTextContent: B,
    canReport: Y,
    onHeightUpdate: z,
    onSelect: X,
    onClose: Z,
    navId: W,
    ariaLabel: J,
    shouldHideMediaOptions: q = !1
  } = e, $ = (0, d.default)(s), Q = (0, f.default)(s), ee = (0, R.default)(t, n), et = (0, I.default)(t, n), en = (0, h.default)(t, n), ea = (0, C.default)(t, n), ei = (0, _.default)({
    type: U,
    id: k,
    name: w
  }), el = (0, D.default)(t, n), es = (0, T.default)(t, n), eu = (0, O.default)(t), er = (0, p.default)(t, n), ed = (0, S.default)(t, n), eo = (0, N.default)(t, n), ec = (0, y.default)(t, n), ef = (0, v.default)(t, n), eE = (0, j.default)(t), eM = (0, G.default)(t, n), em = (0, c.default)(null != V ? V : K, B, t, {
    shouldHideMediaOptions: q
  }), eg = (0, o.default)(H, t, {
    shouldHideMediaOptions: q
  }), eI = (0, P.default)(t, i), ep = (0, r.default)({
    id: t.id,
    label: F.default.Messages.COPY_ID_MESSAGE,
    shiftId: "".concat(t.channel_id, "-").concat(t.id)
  }), eS = (0, b.default)(t, n), eA = (0, L.default)(t, n), ev = (0, g.default)(t, n, {
    hoist: !0
  }), eh = (0, m.default)(s, n.getGuildId()), e_ = (0, x.default)(t), eT = (0, A.default)(t), eC = (0, M.default)({
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
      children: ["" === s ? ee : null, et, eu, en, ea, ei, eS, eA, eT, eC, el, es, e_, er, ed, eM, ev, eR, ec, eo, ef, Y && eE]
    }), null != eh && (0, a.jsx)(l.MenuGroup, {
      children: eh
    }), (0, a.jsxs)(l.MenuGroup, {
      children: [eg, eI]
    }), (0, a.jsx)(l.MenuGroup, {
      children: em
    }), (0, a.jsx)(l.MenuGroup, {
      children: ep
    })]
  })
}