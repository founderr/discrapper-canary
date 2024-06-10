"use strict";
n.r(t), n.d(t, {
  default: function() {
    return U
  },
  useMessageMenu: function() {
    return F
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
  _ = n("168405"),
  T = n("536639"),
  C = n("720904"),
  R = n("88791"),
  O = n("235047"),
  x = n("385302"),
  y = n("873699"),
  N = n("134323"),
  j = n("429260"),
  b = n("1626"),
  P = n("279329"),
  D = n("627938"),
  L = n("481300"),
  G = n("689938");

function U(e) {
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
  return F({
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
    ariaLabel: G.default.Messages.MESSAGE_ACTIONS_MENU_LABEL,
    shouldHideMediaOptions: E
  })
}

function F(e) {
  let {
    message: t,
    channel: n,
    mediaItem: i,
    textSelection: s,
    favoriteableType: U,
    favoriteableId: F,
    favoriteableName: w,
    itemHref: k,
    itemSrc: V,
    itemSafeSrc: K,
    itemTextContent: Y,
    canReport: H,
    onHeightUpdate: X,
    onSelect: B,
    onClose: Z,
    navId: z,
    ariaLabel: W,
    shouldHideMediaOptions: J = !1
  } = e, q = (0, o.default)(s), $ = (0, f.default)(s), Q = (0, C.default)(t, n), ee = (0, m.default)(t, n), et = (0, I.default)(t, n), en = (0, T.default)(t, n), ea = (0, A.default)({
    type: U,
    id: F,
    name: w
  }), ei = (0, b.default)(t, n), el = (0, _.default)(t, n), es = (0, R.default)(t), eu = (0, v.default)(t, n), er = (0, p.default)(t, n), eo = (0, x.default)(t, n), ed = (0, y.default)(t, n), ec = (0, h.default)(t, n), ef = (0, j.default)(t), eE = (0, P.default)(t, n), eM = (0, c.default)(null != k ? k : V, Y, t, {
    shouldHideMediaOptions: J
  }), eg = (0, d.default)(K, t, {
    shouldHideMediaOptions: J
  }), em = (0, L.default)(t, i), ev = (0, r.default)({
    id: t.id,
    label: G.default.Messages.COPY_ID_MESSAGE,
    shiftId: "".concat(t.channel_id, "-").concat(t.id)
  }), ep = (0, N.default)(t, n), eS = (0, D.default)(t, n), eh = (0, g.default)(s, n.getGuildId()), eI = (0, O.default)(t), eA = (0, S.default)(t), e_ = (0, M.default)({
    commandType: u.ApplicationCommandType.MESSAGE,
    commandTargetId: t.id,
    channel: n,
    guildId: void 0,
    onHeightUpdate: X
  }), eT = (0, E.default)(t);
  return (0, a.jsxs)(l.Menu, {
    navId: z,
    onClose: Z,
    "aria-label": W,
    onSelect: B,
    children: [(0, a.jsx)(l.MenuGroup, {
      children: q
    }), (0, a.jsx)(l.MenuGroup, {
      children: $
    }), (0, a.jsxs)(l.MenuGroup, {
      children: ["" === s ? Q : null, ee, es, et, en, ea, ep, eS, eA, e_, ei, el, eI, eu, er, eE, eT, ed, eo, ec, H && ef]
    }), null != eh && (0, a.jsx)(l.MenuGroup, {
      children: eh
    }), (0, a.jsxs)(l.MenuGroup, {
      children: [eg, em]
    }), (0, a.jsx)(l.MenuGroup, {
      children: eM
    }), (0, a.jsx)(l.MenuGroup, {
      children: ev
    })]
  })
}