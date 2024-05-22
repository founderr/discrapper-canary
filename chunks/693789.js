"use strict";
n.r(t), n.d(t, {
  Button: function() {
    return S
  },
  ButtonColors: function() {
    return I
  },
  ButtonLink: function() {
    return h
  },
  ButtonLooks: function() {
    return E
  },
  ButtonSizes: function() {
    return T
  },
  getButtonStyle: function() {
    return f
  }
});
var i = n("735250"),
  r = n("470079"),
  s = n("120356"),
  a = n.n(s),
  o = n("613828"),
  l = n("680732"),
  u = n("84735"),
  d = n("922770"),
  _ = n("689938"),
  c = n("690514");
let E = {
    FILLED: c.lookFilled,
    INVERTED: c.lookInverted,
    OUTLINED: c.lookOutlined,
    LINK: c.lookLink,
    BLANK: c.lookBlank
  },
  I = {
    BRAND: c.colorBrand,
    RED: c.colorRed,
    GREEN: c.colorGreen,
    PRIMARY: c.colorPrimary,
    LINK: c.colorLink,
    WHITE: c.colorWhite,
    TRANSPARENT: c.colorTransparent,
    CUSTOM: ""
  },
  T = {
    NONE: "",
    TINY: c.sizeTiny,
    SMALL: c.sizeSmall,
    MEDIUM: c.sizeMedium,
    LARGE: c.sizeLarge,
    MIN: c.sizeMin,
    MAX: c.sizeMax,
    ICON: c.sizeIcon
  };

function f() {
  let {
    look: e = E.FILLED,
    color: t = I.BRAND,
    size: n = T.MEDIUM,
    fullWidth: i = !1,
    grow: r = !0,
    submitting: s = !1,
    disabled: o = !1
  } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
  return a()(c.button, e, t, n, {
    [c.fullWidth]: i,
    [c.grow]: r,
    [c.submitting]: s && !o
  })
}

function S(e) {
  let {
    look: t = E.FILLED,
    color: n = I.BRAND,
    size: s = T.MEDIUM,
    fullWidth: o = !1,
    grow: S = !0,
    disabled: h = !1,
    submitting: A = !1,
    type: m = "button",
    style: N,
    wrapperClassName: p,
    className: O,
    innerClassName: C,
    onClick: R,
    onDoubleClick: g,
    onMouseDown: L,
    onMouseUp: v,
    onMouseEnter: D,
    onMouseLeave: M,
    onKeyDown: y,
    children: P,
    rel: U,
    buttonRef: b,
    focusProps: G,
    "aria-label": w,
    submittingStartedLabel: k,
    submittingFinishedLabel: B,
    ...V
  } = e, x = h || A, F = x && (null != D || null != M), H = function(e, t) {
    var n, i, r, s;
    let a = null == e ? void 0 : e.offset;
    if (t === E.LINK || t === E.BLANK) return a;
    if (null == a) return -2;
    if ("number" == typeof a) return a + 2;
    return {
      top: (null !== (n = a.top) && void 0 !== n ? n : 0) - 2,
      right: (null !== (i = a.right) && void 0 !== i ? i : 0) - 2,
      bottom: (null !== (r = a.bottom) && void 0 !== r ? r : 0) - 2,
      left: (null !== (s = a.left) && void 0 !== s ? s : 0) - 2
    }
  }(G, t), Y = r.useRef(!1);
  r.useEffect(() => {
    !0 === A && (Y.current = !0, l.AccessibilityAnnouncer.announce(null != k ? k : _.default.Messages.A11Y_LOADING_STARTED)), !1 === A && !0 === Y.current && l.AccessibilityAnnouncer.announce(null != B ? B : _.default.Messages.A11Y_LOADING_FINISHED)
  }, [A, k, B]);
  let j = (0, i.jsx)(u.FocusRing, {
    ...G,
    offset: H,
    children: (0, i.jsxs)("button", {
      ...x ? null : V,
      "aria-label": w,
      "aria-busy": !!A || void 0,
      ref: b,
      onClick: x ? e => e.preventDefault() : R,
      onDoubleClick: x ? e => e.preventDefault() : g,
      onMouseUp: h ? void 0 : v,
      onMouseDown: h ? void 0 : L,
      onMouseEnter: D,
      onMouseLeave: M,
      onKeyDown: h ? void 0 : y,
      type: m,
      disabled: h,
      style: N,
      rel: U,
      className: a()(O, f({
        look: t,
        color: n,
        size: s,
        fullWidth: o,
        grow: S,
        submitting: A,
        disabled: h
      }), F ? null : p),
      children: [A && !h ? (0, i.jsx)(d.Spinner, {
        type: d.Spinner.Type.PULSING_ELLIPSIS,
        className: c.spinner,
        itemClassName: c.spinnerItem
      }) : null, (0, i.jsx)("div", {
        className: a()(c.contents, C),
        children: P
      })]
    })
  });
  return F ? (0, i.jsxs)("span", {
    className: a()(c.disabledButtonWrapper, p, s, {
      [c.grow]: S,
      [c.fullWidth]: o
    }),
    children: [j, (0, i.jsx)("span", {
      onMouseEnter: D,
      onMouseLeave: M,
      className: c.disabledButtonOverlay
    })]
  }) : j
}

function h(e) {
  let {
    look: t = E.FILLED,
    color: n = I.BRAND,
    size: r = T.MEDIUM,
    fullWidth: s = !1,
    grow: l = !0,
    style: u,
    className: d,
    innerClassName: _,
    to: f,
    onClick: S,
    onMouseDown: h,
    onMouseUp: A,
    children: m,
    rel: N,
    ...p
  } = e;
  return (0, i.jsx)(o.Link, {
    ...p,
    to: f,
    onClick: S,
    onMouseUp: A,
    onMouseDown: h,
    style: u,
    rel: N,
    className: a()(d, c.button, t, n, r, {
      [c.fullWidth]: s,
      [c.grow]: l
    }),
    children: (0, i.jsx)("span", {
      className: a()(c.contents, _),
      children: m
    })
  })
}
S.Looks = E, S.Colors = I, S.Sizes = T, S.Link = h