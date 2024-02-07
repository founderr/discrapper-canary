"use strict";
i.r(t), i.d(t, {
  getStickerAltText: function() {
    return x
  },
  default: function() {
    return F
  }
}), i("222007");
var r = i("37983"),
  n = i("884691"),
  s = i("414456"),
  l = i.n(s),
  a = i("627445"),
  u = i.n(a),
  c = i("907002"),
  o = i("446674"),
  d = i("290381"),
  f = i("77078"),
  S = i("206230"),
  m = i("407063"),
  h = i("54560"),
  k = i("983782"),
  p = i("866190"),
  E = i("256860"),
  I = i("161585"),
  g = i("24373"),
  v = i("782340"),
  y = i("787309");
let R = e => e.preventDefault(),
  _ = {
    tension: 1100,
    friction: 40
  },
  T = {
    tension: 1600,
    friction: 60
  };

function C(e, t) {
  return n.cloneElement(e, {
    "data-type": "sticker",
    "data-id": t
  })
}

function x(e) {
  let t = "description" in e && null != e.description ? "".concat(e.name, ", ").concat(e.description) : e.name;
  return v.default.Messages.STICKER_A11Y_LABEL.format({
    stickerName: t
  })
}
let L = e => {
    let {
      children: t,
      hasError: i,
      isLoading: n,
      maskAsset: s,
      size: a,
      withLoadingIndicator: u = !0
    } = e, c = a >= 33;
    return (0, r.jsxs)("div", {
      className: l(y.assetWrapper, {
        [y.assetWrapperMasked]: i || s
      }),
      style: {
        height: a,
        width: a
      },
      children: [i ? (0, r.jsxs)("div", {
        className: y.error,
        children: [(0, r.jsx)(h.default, {
          className: y.errorIcon
        }), c && (0, r.jsx)(f.Text, {
          className: y.errorText,
          color: "header-secondary",
          variant: "text-sm/normal",
          children: v.default.Messages.STICKER_ASSET_LOAD_ERROR
        })]
      }) : t, u && n && (0, r.jsx)("div", {
        className: y.loadingIndicator
      })]
    })
  },
  M = e => {
    let {
      shouldAnimate: t,
      size: s,
      sticker: l,
      fileUri: a,
      assetData: c,
      isFocused: o,
      className: d,
      maskAsset: f,
      positionRef: S,
      withLoadingIndicator: h,
      onError: k
    } = e, p = n.useRef(null), E = n.useRef(null), [I, R] = n.useState(!0), [_, T] = n.useState(!1), M = n.useRef(!1);
    M.current = t && o;
    let N = null == a ? (0, g.getStickerAssetUrl)(l) : a;
    return (u(null != N, "Unable to determine sticker asset URL. Sticker ID: ".concat(l.id)), n.useEffect(() => {
      if (null == p.current || null == N) return;
      let e = Math.min(2, (0, m.getDevicePixelRatio)());
      p.current.width = s * e, p.current.height = s * e;
      let t = !1,
        r = async () => {
          let {
            default: e
          } = await i.el("619596").then(i.bind(i, "619596"));
          null != p.current && (E.current = new e({
            canvas: p.current,
            animationId: l.id,
            assetUrl: N,
            assetData: c,
            onInitialDraw: () => {
              !t && R(!1)
            },
            onError: () => {
              !t && (R(!1), T(!0), null == k || k())
            }
          }), M.current && E.current.setState(!0))
        };
      return r(), () => {
        var e;
        null === (e = E.current) || void 0 === e || e.drop(), E.current = null, t = !0
      }
    }, [N, s, l.id, c, k]), n.useEffect(() => {
      var e;
      let i;
      !t && (i = 0), null === (e = E.current) || void 0 === e || e.setState(t && o, i)
    }, [l, t, o]), null == N) ? null : (0, r.jsx)("div", {
      role: "img",
      className: d,
      "aria-label": _ ? v.default.Messages.ERROR_LOADING_STICKER : x(l),
      ref: S,
      children: (0, r.jsx)(L, {
        hasError: _,
        isLoading: I,
        maskAsset: f,
        size: s,
        withLoadingIndicator: h,
        children: C((0, r.jsx)("canvas", {
          className: y.lottieCanvas,
          ref: p
        }), l.id)
      })
    })
  },
  N = e => {
    let {
      shouldAnimate: t,
      sticker: i,
      isFocused: s,
      size: a,
      className: u,
      maskAsset: c,
      positionRef: o,
      withLoadingIndicator: f,
      fileUri: S
    } = e, [m, h] = n.useState(!1), [k, p] = n.useState(!0), [E, I] = n.useState(!1), v = n.useRef(null), _ = n.useRef(null), T = null != S ? S : (0, g.getStickerAssetUrl)(i, {
      isPreview: !t || !m || !s,
      size: a
    }), M = n.useCallback(() => {
      p(!1)
    }, []), N = n.useCallback(() => {
      I(!0)
    }, []);
    return (n.useEffect(() => {
      if (null != v.current) {
        let {
          isVisible: e
        } = v.current;
        h(e)
      }
    }, []), n.useLayoutEffect(() => {
      var e;
      (null === (e = _.current) || void 0 === e ? void 0 : e.complete) === !0 && p(!1)
    }, []), null == T) ? null : (0, r.jsx)(d.VisibilitySensor, {
      ref: v,
      onChange: h,
      threshold: .7,
      children: (0, r.jsx)("div", {
        className: l(u, y.pngImageWrapper),
        ref: o,
        children: (0, r.jsx)(L, {
          hasError: E,
          isLoading: k,
          maskAsset: c,
          size: a,
          withLoadingIndicator: f,
          children: C((0, r.jsx)("img", {
            className: y.pngImage,
            alt: x(i),
            src: T,
            draggable: !1,
            onError: N,
            onLoad: M,
            onContextMenu: R,
            ref: _
          }), i.id)
        })
      })
    })
  },
  U = e => {
    let {
      disableAnimation: t,
      enlargeScaleFactor: i,
      enlargeWithName: s,
      isInteracting: l,
      positionRef: a,
      size: u,
      sticker: d
    } = e, m = (0, o.useStateFromStores)([S.default], () => S.default.useReducedMotion), h = n.useRef(null), p = {
      transform: "scale(".concat(m ? 1 : 1 / i, ")"),
      opacity: 0
    }, E = (0, c.useTransition)(l, {
      ref: h,
      from: p,
      enter: {
        transform: "scale(1)",
        opacity: 1
      },
      leave: p,
      config: _
    }), I = n.useRef(null), g = (0, c.useSpring)({
      ref: I,
      transform: l || m ? "translateY(0)" : "translateY(-25px)",
      opacity: l ? 1 : 0,
      config: T
    });
    return (0, c.useChain)(l ? [h, I] : [I, h], l ? [0, .0625] : [0, 0]), E((e, n) => n && (0, r.jsx)(k.AppReferencePositionLayer, {
      className: y.positionedLayer,
      fixed: !0,
      align: "center",
      position: "center",
      reference: a,
      children: () => (0, r.jsxs)("div", {
        className: y.overlayWrapper,
        children: [(0, r.jsx)(c.animated.div, {
          className: y.overlayStickerWrapper,
          style: e,
          children: (0, r.jsx)(A, {
            className: y.overlaySticker,
            disableAnimation: t,
            enlargeOnInteraction: !1,
            isInteracting: l,
            maskAsset: !1,
            sticker: d,
            size: Math.round(u * i),
            withLoadingIndicator: !1
          })
        }), s && (0, r.jsx)(c.animated.div, {
          className: y.overlayLabelWrapper,
          style: g,
          children: (0, r.jsx)(f.Text, {
            variant: "text-sm/medium",
            className: y.overlayLabel,
            children: d.name
          })
        })]
      })
    }))
  },
  A = e => {
    let {
      isInteracting: t = !1,
      disableAnimation: i = !1,
      enlargeOnInteraction: s = !1,
      enlargeWithName: l = !0,
      enlargeScaleFactor: a = 1.55,
      maskAsset: u = !1,
      size: c,
      sticker: o,
      className: d,
      withLoadingIndicator: f,
      assetData: S,
      fileUri: m,
      onError: h
    } = e, k = (0, p.useIsWindowFocused)(), g = (0, E.useShouldAnimateSticker)(t) && !i, v = n.useRef(null);
    if (null == o) return null;
    let y = o.format_type === I.StickerFormat.LOTTIE ? M : N;
    return (0, r.jsxs)(n.Fragment, {
      children: [(0, r.jsx)(y, {
        shouldAnimate: g,
        isFocused: k,
        size: c,
        sticker: o,
        className: d,
        maskAsset: u,
        positionRef: v,
        withLoadingIndicator: f,
        assetData: S,
        fileUri: m,
        onError: h
      }), s && (0, r.jsx)(U, {
        disableAnimation: i,
        enlargeScaleFactor: a,
        enlargeWithName: l,
        isInteracting: t,
        positionRef: v,
        size: c,
        sticker: o
      })]
    }, "".concat(o.id, ",").concat(c))
  };
var F = A