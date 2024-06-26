"use strict";
n.d(t, {
  E: function() {
    return O
  }
}), n(47120);
var i, r = n(735250),
  s = n(470079),
  o = n(120356),
  a = n.n(o),
  l = n(780384),
  u = n(481060),
  _ = n(410030),
  c = n(446108),
  d = n(956664),
  E = n(921948),
  I = n(823023),
  T = n(981631),
  h = n(768760),
  f = n(689938),
  S = n(278919),
  N = n(167969),
  A = n(557256);

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class O extends(i = s.PureComponent) {
  render() {
    let e;
    let {
      className: t,
      imageClassName: n,
      readyState: i,
      src: s,
      placeholder: o,
      placeholderVersion: l,
      alt: _,
      width: E,
      height: N,
      maxWidth: A = E,
      maxHeight: m = N,
      minWidth: O,
      minHeight: g,
      mediaLayoutType: C,
      limitResponsiveWidth: v = !0,
      accessory: L,
      zoomable: D,
      original: M,
      children: P,
      renderAccessory: y,
      onClick: U,
      tabIndex: b,
      useFullWidth: G = !1,
      ...w
    } = this.props;
    if (1 === E && 1 === N) return null;
    let x = (0, d.Tj)({
        width: E,
        height: N,
        maxWidth: A,
        maxHeight: m,
        minWidth: O,
        minHeight: g
      }),
      B = 0 !== x.width ? x.width / x.height : 1;
    "" !== s && i !== T.zo9.ERROR ? e = P({
      src: s,
      size: x,
      alt: _,
      className: n,
      mediaLayoutType: C
    }) : i !== T.zo9.LOADING && (e = (0, r.jsx)(p, {
      size: x,
      mediaLayoutType: C,
      alt: _
    })), e = (0, r.jsx)(I.N, {
      readyState: i,
      aspectRatio: B,
      placeholder: o,
      placeholderVersion: l,
      placeholderStyle: R(x, C),
      children: e
    });
    let k = null != y ? y() : null;
    return k = null != k ? k : L, (0, r.jsx)(u.FocusRing, {
      ringTarget: this._containerRef,
      focusTarget: this._clickableRef,
      children: (0, r.jsxs)("div", {
        className: a()(S.imageWrapper, {
          [S.imageZoom]: D,
          [S.imageWrapperBackground]: i !== T.zo9.READY,
          [S.clickable]: null != U
        }, t),
        style: function(e, t, n, i) {
          return i === h.hV.MOSAIC ? {
            display: "block",
            maxHeight: "inherit",
            margin: "auto",
            width: !n && e.width <= h.mT ? e.width : "100%",
            height: "100%"
          } : i === h.hV.RESPONSIVE ? {
            maxWidth: t ? e.width : void 0,
            width: "100%",
            aspectRatio: "".concat(e.width, " / ").concat(e.height)
          } : e
        }(x, v, G, C),
        ...w,
        children: [null != M && (0, r.jsx)("a", {
          tabIndex: -1,
          onClick: U,
          "aria-hidden": !0,
          className: S.originalLink,
          href: M,
          ref: this._containerRef,
          "data-role": "img",
          "data-safe-src": s
        }), null != U ? (0, r.jsx)(u.Clickable, {
          className: S.clickableWrapper,
          tabIndex: null != b ? b : 0,
          onClick: U,
          "aria-label": null != _ ? _ : f.Z.Messages.IMAGE,
          "aria-describedby": c.r5,
          innerRef: this._clickableRef,
          focusProps: {
            enabled: !1
          },
          children: e
        }) : e, null != k ? (0, r.jsx)("div", {
          className: S.imageAccessory,
          children: k
        }) : null]
      })
    })
  }
  constructor(...e) {
    super(...e), m(this, "_containerRef", s.createRef()), m(this, "_clickableRef", s.createRef())
  }
}

function p(e) {
  let {
    size: t,
    mediaLayoutType: n,
    alt: i
  } = e, s = (0, _.ZP)();
  return (0, r.jsx)("div", {
    className: S.imageErrorWrapper,
    style: function(e, t) {
      switch (t) {
        case h.hV.MOSAIC:
          return {
            width: "100%", height: "100%", aspectRatio: "".concat(e.width, " / ").concat(e.height), display: "flex", maxHeight: "inherit"
          };
        case h.hV.RESPONSIVE:
          return {
            ...g(e), display: "flex"
          };
        default:
          return e
      }
    }(t, n),
    children: (0, r.jsx)("img", {
      src: (0, l.ap)(s) ? A : N,
      className: S.imageError,
      alt: null != i ? i : f.Z.Messages.IMAGE
    })
  })
}
m(O, "defaultProps", {
  readyState: T.zo9.READY,
  zoomable: !0,
  children: e => {
    let {
      src: t,
      size: n,
      alt: i,
      className: s,
      mediaLayoutType: o
    } = e;
    return (0, r.jsx)("img", {
      className: null != s ? s : void 0,
      alt: null != i ? i : f.Z.Messages.IMAGE,
      src: t,
      style: R(n, o)
    })
  },
  minWidth: 0,
  minHeight: 0
});

function R(e, t) {
  switch (t) {
    case h.hV.MOSAIC:
      return {
        display: "block", objectFit: "cover", minWidth: "100%", minHeight: "100%", maxWidth: 1 === (0, E.Z)() ? "calc(100% + 1px)" : "100%"
      };
    case h.hV.RESPONSIVE:
      return g(e);
    default:
      return e
  }
}

function g(e) {
  let {
    width: t,
    height: n
  } = e;
  return {
    maxWidth: t,
    maxHeight: n,
    width: "100%",
    display: "block",
    aspectRatio: "".concat(t, " / ").concat(n)
  }
}