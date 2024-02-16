"use strict";
n.r(t), n.d(t, {
  default: function() {
    return Image
  }
}), n("222007");
var i, Image, r = n("37983"),
  l = n("884691"),
  a = n("414456"),
  s = n.n(a),
  o = n("819855"),
  u = n("77078"),
  c = n("841098"),
  d = n("862013"),
  f = n("103603"),
  m = n("547630"),
  _ = n("193513"),
  E = n("719347"),
  T = n("49111"),
  I = n("782340"),
  C = n("366822"),
  p = n("653240"),
  P = n("140802");

function S(e) {
  let {
    size: t,
    mediaLayoutType: n,
    alt: i
  } = e, l = (0, c.default)();
  return (0, r.jsx)("div", {
    className: C.imageErrorWrapper,
    style: function(e, t) {
      switch (t) {
        case E.MediaLayoutType.MOSAIC:
          return {
            width: "100%", height: "100%", aspectRatio: "".concat(e.width, " / ").concat(e.height), display: "flex", maxHeight: "inherit"
          };
        case E.MediaLayoutType.RESPONSIVE:
          return {
            ...O(e), display: "flex"
          };
        default:
          return e
      }
    }(t, n),
    children: (0, r.jsx)("img", {
      src: (0, o.isThemeLight)(l) ? P : p,
      className: C.imageError,
      alt: null != i ? i : I.default.Messages.IMAGE
    })
  })
}(i = class extends l.PureComponent {
  render() {
    let e;
    let {
      className: t,
      imageClassName: n,
      readyState: i,
      src: l,
      placeholder: a,
      placeholderVersion: o,
      alt: c,
      width: m,
      height: p,
      maxWidth: P = m,
      maxHeight: O = p,
      minWidth: M,
      minHeight: L,
      mediaLayoutType: g,
      limitResponsiveWidth: h = !0,
      accessory: x,
      zoomable: N,
      original: A,
      children: v,
      renderAccessory: U,
      onClick: b,
      tabIndex: D,
      useFullWidth: y = !1,
      ...j
    } = this.props;
    if (1 === m && 1 === p) return null;
    let F = (0, f.fit)({
        width: m,
        height: p,
        maxWidth: P,
        maxHeight: O,
        minWidth: M,
        minHeight: L
      }),
      B = 0 !== F.width ? F.width / F.height : 1;
    null != l && i !== T.ImageReadyStates.ERROR ? e = v({
      src: l,
      size: F,
      alt: c,
      className: n,
      mediaLayoutType: g
    }) : i !== T.ImageReadyStates.LOADING && (e = (0, r.jsx)(S, {
      size: F,
      mediaLayoutType: g,
      alt: c
    })), e = (0, r.jsx)(_.ImageLoadingOverlay, {
      readyState: i,
      aspectRatio: B,
      placeholder: a,
      placeholderVersion: o,
      placeholderStyle: R(F, g),
      children: e
    });
    let w = null != U ? U() : null;
    return w = null != w ? w : x, (0, r.jsx)(u.FocusRing, {
      ringTarget: this._containerRef,
      focusTarget: this._clickableRef,
      children: (0, r.jsxs)("div", {
        className: s(C.imageWrapper, {
          [C.imageZoom]: N,
          [C.imageWrapperBackground]: i !== T.ImageReadyStates.READY,
          [C.clickable]: null != b
        }, t),
        style: function(e, t, n, i) {
          return i === E.MediaLayoutType.MOSAIC ? {
            display: "block",
            maxHeight: "inherit",
            margin: "auto",
            width: !n && e.width <= E.MEDIA_MOSAIC_MAX_WIDTH ? e.width : "100%",
            height: "100%"
          } : i === E.MediaLayoutType.RESPONSIVE ? {
            maxWidth: t ? e.width : void 0,
            width: "100%",
            aspectRatio: "".concat(e.width, " / ").concat(e.height)
          } : e
        }(F, h, y, g),
        ...j,
        children: [null != A && (0, r.jsx)("a", {
          tabIndex: -1,
          onClick: b,
          "aria-hidden": !0,
          className: C.originalLink,
          href: A,
          ref: this._containerRef,
          "data-role": "img",
          "data-safe-src": l
        }), null != b ? (0, r.jsx)(u.Clickable, {
          className: C.clickableWrapper,
          tabIndex: null != D ? D : 0,
          onClick: b,
          "aria-label": null != c ? c : I.default.Messages.IMAGE,
          "aria-describedby": d.IMAGE_OPEN_DIALOG_DESCRIPTION,
          innerRef: this._clickableRef,
          focusProps: {
            enabled: !1
          },
          children: e
        }) : e, null != w ? (0, r.jsx)("div", {
          className: C.imageAccessory,
          children: w
        }) : null]
      })
    })
  }
  constructor(...e) {
    super(...e), this._containerRef = l.createRef(), this._clickableRef = l.createRef()
  }
}).defaultProps = {
  readyState: T.ImageReadyStates.READY,
  zoomable: !0,
  children: e => {
    let {
      src: t,
      size: n,
      alt: i,
      className: l,
      mediaLayoutType: a
    } = e;
    return (0, r.jsx)("img", {
      className: null != l ? l : void 0,
      alt: null != i ? i : I.default.Messages.IMAGE,
      src: t,
      style: R(n, a)
    })
  },
  minWidth: 0,
  minHeight: 0
}, Image = i;

function R(e, t) {
  switch (t) {
    case E.MediaLayoutType.MOSAIC:
      return {
        display: "block", objectFit: "cover", minWidth: "100%", minHeight: "100%", maxWidth: 1 === (0, m.default)() ? "calc(100% + 1px)" : "100%"
      };
    case E.MediaLayoutType.RESPONSIVE:
      return O(e);
    default:
      return e
  }
}

function O(e) {
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