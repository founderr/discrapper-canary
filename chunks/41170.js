"use strict";
n.r(t), n.d(t, {
  getStickerAltText: function() {
    return M
  },
  default: function() {
    return k
  }
}), n("222007");
var r = n("37983"),
  a = n("884691"),
  s = n("414456"),
  i = n.n(s),
  l = n("627445"),
  c = n.n(l),
  u = n("907002"),
  o = n("446674"),
  d = n("290381"),
  f = n("77078"),
  E = n("206230"),
  v = n("407063"),
  h = n("54560"),
  m = n("983782"),
  N = n("866190"),
  C = n("256860"),
  S = n("161585"),
  g = n("24373"),
  p = n("782340"),
  x = n("787309");
let I = e => e.preventDefault(),
  A = {
    tension: 1100,
    friction: 40
  },
  R = {
    tension: 1600,
    friction: 60
  };

function _(e, t) {
  return a.cloneElement(e, {
    "data-type": "sticker",
    "data-id": t
  })
}

function M(e) {
  let t = "description" in e && null != e.description ? "".concat(e.name, ", ").concat(e.description) : e.name;
  return p.default.Messages.STICKER_A11Y_LABEL.format({
    stickerName: t
  })
}
let T = e => {
    let {
      children: t,
      hasError: n,
      isLoading: a,
      maskAsset: s,
      size: l,
      withLoadingIndicator: c = !0
    } = e, u = l >= 33;
    return (0, r.jsxs)("div", {
      className: i(x.assetWrapper, {
        [x.assetWrapperMasked]: n || s
      }),
      style: {
        height: l,
        width: l
      },
      children: [n ? (0, r.jsxs)("div", {
        className: x.error,
        children: [(0, r.jsx)(h.default, {
          className: x.errorIcon
        }), u && (0, r.jsx)(f.Text, {
          className: x.errorText,
          color: "header-secondary",
          variant: "text-sm/normal",
          children: p.default.Messages.STICKER_ASSET_LOAD_ERROR
        })]
      }) : t, c && a && (0, r.jsx)("div", {
        className: x.loadingIndicator
      })]
    })
  },
  V = e => {
    let {
      shouldAnimate: t,
      size: s,
      sticker: i,
      fileUri: l,
      assetData: u,
      isFocused: o,
      className: d,
      maskAsset: f,
      positionRef: E,
      withLoadingIndicator: h,
      onError: m
    } = e, N = a.useRef(null), C = a.useRef(null), [S, I] = a.useState(!0), [A, R] = a.useState(!1), V = a.useRef(!1);
    V.current = t && o;
    let j = null == l ? (0, g.getStickerAssetUrl)(i) : l;
    return (c(null != j, "Unable to determine sticker asset URL. Sticker ID: ".concat(i.id)), a.useEffect(() => {
      if (null == N.current || null == j) return;
      let e = Math.min(2, (0, v.getDevicePixelRatio)());
      N.current.width = s * e, N.current.height = s * e;
      let t = !1,
        r = async () => {
          let {
            default: e
          } = await n.el("619596").then(n.bind(n, "619596"));
          null != N.current && (C.current = new e({
            canvas: N.current,
            animationId: i.id,
            assetUrl: j,
            assetData: u,
            onInitialDraw: () => {
              !t && I(!1)
            },
            onError: () => {
              !t && (I(!1), R(!0), null == m || m())
            }
          }), V.current && C.current.setState(!0))
        };
      return r(), () => {
        var e;
        null === (e = C.current) || void 0 === e || e.drop(), C.current = null, t = !0
      }
    }, [j, s, i.id, u, m]), a.useEffect(() => {
      var e;
      let n;
      !t && (n = 0), null === (e = C.current) || void 0 === e || e.setState(t && o, n)
    }, [i, t, o]), null == j) ? null : (0, r.jsx)("div", {
      role: "img",
      className: d,
      "aria-label": A ? p.default.Messages.ERROR_LOADING_STICKER : M(i),
      ref: E,
      children: (0, r.jsx)(T, {
        hasError: A,
        isLoading: S,
        maskAsset: f,
        size: s,
        withLoadingIndicator: h,
        children: _((0, r.jsx)("canvas", {
          className: x.lottieCanvas,
          ref: N
        }), i.id)
      })
    })
  },
  j = e => {
    let {
      shouldAnimate: t,
      sticker: n,
      isFocused: s,
      size: l,
      className: c,
      maskAsset: u,
      positionRef: o,
      withLoadingIndicator: f,
      fileUri: E
    } = e, [v, h] = a.useState(!1), [m, N] = a.useState(!0), [C, S] = a.useState(!1), p = a.useRef(null), A = a.useRef(null), R = null != E ? E : (0, g.getStickerAssetUrl)(n, {
      isPreview: !t || !v || !s,
      size: l
    }), V = a.useCallback(() => {
      N(!1)
    }, []), j = a.useCallback(() => {
      S(!0)
    }, []);
    return (a.useEffect(() => {
      if (null != p.current) {
        let {
          isVisible: e
        } = p.current;
        h(e)
      }
    }, []), a.useLayoutEffect(() => {
      var e;
      (null === (e = A.current) || void 0 === e ? void 0 : e.complete) === !0 && N(!1)
    }, []), null == R) ? null : (0, r.jsx)(d.VisibilitySensor, {
      ref: p,
      onChange: h,
      threshold: .7,
      children: (0, r.jsx)("div", {
        className: i(c, x.pngImageWrapper),
        ref: o,
        children: (0, r.jsx)(T, {
          hasError: C,
          isLoading: m,
          maskAsset: u,
          size: l,
          withLoadingIndicator: f,
          children: _((0, r.jsx)("img", {
            className: x.pngImage,
            alt: M(n),
            src: R,
            draggable: !1,
            onError: j,
            onLoad: V,
            onContextMenu: I,
            ref: A
          }), n.id)
        })
      })
    })
  },
  L = e => {
    let {
      disableAnimation: t,
      enlargeScaleFactor: n,
      enlargeWithName: s,
      isInteracting: i,
      positionRef: l,
      size: c,
      sticker: d
    } = e, v = (0, o.useStateFromStores)([E.default], () => E.default.useReducedMotion), h = a.useRef(null), N = {
      transform: "scale(".concat(v ? 1 : 1 / n, ")"),
      opacity: 0
    }, C = (0, u.useTransition)(i, {
      ref: h,
      from: N,
      enter: {
        transform: "scale(1)",
        opacity: 1
      },
      leave: N,
      config: A
    }), S = a.useRef(null), g = (0, u.useSpring)({
      ref: S,
      transform: i || v ? "translateY(0)" : "translateY(-25px)",
      opacity: i ? 1 : 0,
      config: R
    });
    return (0, u.useChain)(i ? [h, S] : [S, h], i ? [0, .0625] : [0, 0]), C((e, a) => a && (0, r.jsx)(m.AppReferencePositionLayer, {
      className: x.positionedLayer,
      fixed: !0,
      align: "center",
      position: "center",
      reference: l,
      children: () => (0, r.jsxs)("div", {
        className: x.overlayWrapper,
        children: [(0, r.jsx)(u.animated.div, {
          className: x.overlayStickerWrapper,
          style: e,
          children: (0, r.jsx)(w, {
            className: x.overlaySticker,
            disableAnimation: t,
            enlargeOnInteraction: !1,
            isInteracting: i,
            maskAsset: !1,
            sticker: d,
            size: Math.round(c * n),
            withLoadingIndicator: !1
          })
        }), s && (0, r.jsx)(u.animated.div, {
          className: x.overlayLabelWrapper,
          style: g,
          children: (0, r.jsx)(f.Text, {
            variant: "text-sm/medium",
            className: x.overlayLabel,
            children: d.name
          })
        })]
      })
    }))
  },
  w = e => {
    let {
      isInteracting: t = !1,
      disableAnimation: n = !1,
      enlargeOnInteraction: s = !1,
      enlargeWithName: i = !0,
      enlargeScaleFactor: l = 1.55,
      maskAsset: c = !1,
      size: u,
      sticker: o,
      className: d,
      withLoadingIndicator: f,
      assetData: E,
      fileUri: v,
      onError: h
    } = e, m = (0, N.useIsWindowFocused)(), g = (0, C.useShouldAnimateSticker)(t) && !n, p = a.useRef(null);
    if (null == o) return null;
    let x = o.format_type === S.StickerFormat.LOTTIE ? V : j;
    return (0, r.jsxs)(a.Fragment, {
      children: [(0, r.jsx)(x, {
        shouldAnimate: g,
        isFocused: m,
        size: u,
        sticker: o,
        className: d,
        maskAsset: c,
        positionRef: p,
        withLoadingIndicator: f,
        assetData: E,
        fileUri: v,
        onError: h
      }), s && (0, r.jsx)(L, {
        disableAnimation: n,
        enlargeScaleFactor: l,
        enlargeWithName: i,
        isInteracting: t,
        positionRef: p,
        size: u,
        sticker: o
      })]
    }, "".concat(o.id, ",").concat(u))
  };
var k = w