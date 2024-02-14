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
  d = n("841098"),
  c = n("862013"),
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
  } = e, l = (0, d.default)();
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
      showThumbhashPlaceholder: d,
      alt: m,
      width: p,
      height: P,
      maxWidth: O = p,
      maxHeight: M = P,
      minWidth: L,
      minHeight: g,
      mediaLayoutType: h,
      limitResponsiveWidth: x = !0,
      accessory: N,
      zoomable: A,
      original: v,
      children: U,
      renderItem: b,
      renderAccessory: y,
      onClick: D,
      tabIndex: j,
      useFullWidth: F = !1,
      ...B
    } = this.props;
    if (1 === p && 1 === P) return null;
    let w = (0, f.fit)({
      width: p,
      height: P,
      maxWidth: O,
      maxHeight: M,
      minWidth: L,
      minHeight: g
    });
    if (null != l && i === T.ImageReadyStates.READY && "function" == typeof U) e = null != b ? b() : U({
      src: l,
      size: w,
      alt: m,
      className: n,
      mediaLayoutType: h
    });
    else if (!d) {
      if (i === T.ImageReadyStates.LOADING) {
        let t = 0 !== w.width ? w.height / w.width : 1;
        e = null != l && "" !== l ? (0, r.jsxs)("div", {
          children: [(0, r.jsx)("img", {
            alt: null != m ? m : I.default.Messages.IMAGE,
            title: m,
            src: l,
            style: R(w, h)
          }), (0, r.jsx)("div", {
            className: C.imagePlaceholderOverlay
          }), (0, r.jsx)(u.Spinner, {
            type: u.SpinnerTypes.WANDERING_CUBES,
            className: C.placeholderLoadingSpinner
          })]
        }) : (0, r.jsx)(r.Fragment, {
          children: (0, r.jsx)("div", {
            style: {
              paddingBottom: "".concat(100 * t, "%")
            },
            children: (0, r.jsx)("div", {
              className: C.loadingWrapperInner,
              children: (0, r.jsx)(u.Spinner, {
                type: u.SpinnerTypes.WANDERING_CUBES,
                className: C.loadingSpinner
              })
            })
          })
        })
      } else e = (0, r.jsx)(S, {
        size: w,
        mediaLayoutType: h,
        alt: m
      })
    }
    if (d) {
      let t = 0 !== w.width ? w.width / w.height : 1;
      null != l && "" !== l && i !== T.ImageReadyStates.ERROR ? e = U({
        src: l,
        size: w,
        alt: m,
        className: n,
        mediaLayoutType: h
      }) : i !== T.ImageReadyStates.LOADING && (e = (0, r.jsx)(S, {
        size: w,
        mediaLayoutType: h,
        alt: m
      })), e = (0, r.jsx)(_.ImageLoadingOverlay, {
        readyState: i,
        aspectRatio: t,
        placeholder: a,
        placeholderVersion: o,
        placeholderStyle: R(w, h),
        children: e
      })
    }
    let H = null != y ? y() : null;
    return H = null != H ? H : N, (0, r.jsx)(u.FocusRing, {
      ringTarget: this._containerRef,
      focusTarget: this._clickableRef,
      children: (0, r.jsxs)("div", {
        className: s(C.imageWrapper, {
          [C.imageZoom]: A,
          [C.imageWrapperBackground]: i !== T.ImageReadyStates.READY,
          [C.clickable]: null != D
        }, t),
        style: function(e, t, n, i, r) {
          return r === E.MediaLayoutType.MOSAIC ? {
            display: "block",
            maxHeight: "inherit",
            margin: "auto",
            width: !n && e.width <= E.MEDIA_MOSAIC_MAX_WIDTH ? e.width : "100%",
            height: "100%"
          } : null != i || r === E.MediaLayoutType.RESPONSIVE ? {
            maxWidth: t ? e.width : void 0,
            width: "100%",
            aspectRatio: "".concat(e.width, " / ").concat(e.height)
          } : e
        }(w, x, F, b, h),
        ...B,
        children: [null != v && (0, r.jsx)("a", {
          tabIndex: -1,
          onClick: D,
          "aria-hidden": !0,
          className: C.originalLink,
          href: v,
          ref: this._containerRef,
          "data-role": "img",
          "data-safe-src": l
        }), null != D ? (0, r.jsx)(u.Clickable, {
          className: C.clickableWrapper,
          tabIndex: null != j ? j : 0,
          onClick: D,
          "aria-label": null != m ? m : I.default.Messages.IMAGE,
          "aria-describedby": c.IMAGE_OPEN_DIALOG_DESCRIPTION,
          innerRef: this._clickableRef,
          focusProps: {
            enabled: !1
          },
          children: e
        }) : e, null != H ? (0, r.jsx)("div", {
          className: C.imageAccessory,
          children: H
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