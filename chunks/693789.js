"use strict";
n.d(t, {
  Ph: function() {
    return T
  },
  Tt: function() {
    return I
  },
  ZP: function() {
    return f
  },
  iL: function() {
    return E
  },
  nY: function() {
    return h
  },
  zx: function() {
    return S
  }
});
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(613828),
  l = n(680732),
  u = n(84735),
  _ = n(922770),
  c = n(689938),
  d = n(249706);
let E = {
    FILLED: d.lookFilled,
    OUTLINED: d.lookOutlined,
    LINK: d.lookLink,
    BLANK: d.lookBlank
  },
  I = {
    BRAND: d.colorBrand,
    BRAND_INVERTED: d.colorBrandInverted,
    RED: d.colorRed,
    GREEN: d.colorGreen,
    PRIMARY: d.colorPrimary,
    LINK: d.colorLink,
    WHITE: d.colorWhite,
    TRANSPARENT: d.colorTransparent,
    CUSTOM: ""
  },
  T = {
    NONE: "",
    TINY: d.sizeTiny,
    SMALL: d.sizeSmall,
    MEDIUM: d.sizeMedium,
    LARGE: d.sizeLarge,
    MIN: d.sizeMin,
    MAX: d.sizeMax,
    ICON: d.sizeIcon
  };

function h() {
  let {
    look: e = E.FILLED,
    color: t = I.BRAND,
    size: n = T.MEDIUM,
    fullWidth: i = !1,
    grow: r = !0,
    submitting: s = !1,
    disabled: a = !1
  } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
  return o()(d.button, e, t, n, {
    [d.fullWidth]: i,
    [d.grow]: r,
    [d.submitting]: s && !a
  })
}

function S(e) {
  let {
    look: t = E.FILLED,
    color: n = I.BRAND,
    size: s = T.MEDIUM,
    fullWidth: a = !1,
    grow: S = !0,
    disabled: f = !1,
    submitting: N = !1,
    type: A = "button",
    style: m,
    wrapperClassName: O,
    className: R,
    innerClassName: p,
    onClick: g,
    onDoubleClick: C,
    onMouseDown: v,
    onMouseUp: L,
    onMouseEnter: D,
    onMouseLeave: M,
    onKeyDown: P,
    children: y,
    rel: U,
    buttonRef: b,
    focusProps: G,
    "aria-label": w,
    submittingStartedLabel: B,
    submittingFinishedLabel: k,
    ...x
  } = e, V = f || N, Z = V && (null != D || null != M), H = function(e, t) {
    var n, i, r, s;
    let o = null == e ? void 0 : e.offset;
    if (t === E.LINK || t === E.BLANK) return o;
    if (null == o) return -2;
    if ("number" == typeof o) return o + 2;
    return {
      top: (null !== (n = o.top) && void 0 !== n ? n : 0) - 2,
      right: (null !== (i = o.right) && void 0 !== i ? i : 0) - 2,
      bottom: (null !== (r = o.bottom) && void 0 !== r ? r : 0) - 2,
      left: (null !== (s = o.left) && void 0 !== s ? s : 0) - 2
    }
  }(G, t), F = r.useRef(!1);
  r.useEffect(() => {
    !0 === N && (F.current = !0, l.u.announce(null != B ? B : c.Z.Messages.A11Y_LOADING_STARTED)), !1 === N && !0 === F.current && l.u.announce(null != k ? k : c.Z.Messages.A11Y_LOADING_FINISHED)
  }, [N, B, k]);
  let Y = (0, i.jsx)(u.t, {
    ...G,
    offset: H,
    children: (0, i.jsxs)("button", {
      ...V ? null : x,
      "aria-label": w,
      "aria-busy": !!N || void 0,
      ref: b,
      onClick: V ? e => e.preventDefault() : g,
      onDoubleClick: V ? e => e.preventDefault() : C,
      onMouseUp: f ? void 0 : L,
      onMouseDown: f ? void 0 : v,
      onMouseEnter: D,
      onMouseLeave: M,
      onKeyDown: f ? void 0 : P,
      type: A,
      disabled: f,
      style: m,
      rel: U,
      className: o()(R, h({
        look: t,
        color: n,
        size: s,
        fullWidth: a,
        grow: S,
        submitting: N,
        disabled: f
      }), Z ? null : O),
      children: [N && !f ? (0, i.jsx)(_.$, {
        type: _.$.Type.PULSING_ELLIPSIS,
        className: d.spinner,
        itemClassName: d.spinnerItem
      }) : null, (0, i.jsx)("div", {
        className: o()(d.contents, p),
        children: y
      })]
    })
  });
  return Z ? (0, i.jsxs)("span", {
    className: o()(d.disabledButtonWrapper, O, s, {
      [d.grow]: S,
      [d.fullWidth]: a
    }),
    children: [Y, (0, i.jsx)("span", {
      onMouseEnter: D,
      onMouseLeave: M,
      className: d.disabledButtonOverlay
    })]
  }) : Y
}

function f(e) {
  let {
    look: t = E.FILLED,
    color: n = I.BRAND,
    size: r = T.MEDIUM,
    fullWidth: s = !1,
    grow: l = !0,
    style: u,
    className: _,
    innerClassName: c,
    to: h,
    onClick: S,
    onMouseDown: f,
    onMouseUp: N,
    children: A,
    rel: m,
    ...O
  } = e;
  return (0, i.jsx)(a.rU, {
    ...O,
    to: h,
    onClick: S,
    onMouseUp: N,
    onMouseDown: f,
    style: u,
    rel: m,
    className: o()(_, d.button, t, n, r, {
      [d.fullWidth]: s,
      [d.grow]: l
    }),
    children: (0, i.jsx)("span", {
      className: o()(d.contents, c),
      children: A
    })
  })
}
S.Looks = E, S.Colors = I, S.Sizes = T, S.Link = f