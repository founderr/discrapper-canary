"use strict";
n.d(t, {
  Co: function() {
    return C
  }
}), n(47120);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(512722),
  l = n.n(a),
  u = n(920906),
  _ = n(442837),
  c = n(622535),
  d = n(481060),
  E = n(607070),
  I = n(134432),
  T = n(153850),
  h = n(506071),
  S = n(453070),
  f = n(373228),
  N = n(378233),
  A = n(689938),
  m = n(680413);
let O = e => e.preventDefault(),
  R = {
    tension: 1100,
    friction: 40
  },
  p = {
    tension: 1600,
    friction: 60
  };

function g(e, t) {
  return r.cloneElement(e, {
    "data-type": "sticker",
    "data-id": t
  })
}

function C(e) {
  let t = "description" in e && null != e.description ? "".concat(e.name, ", ").concat(e.description) : e.name;
  return A.Z.Messages.STICKER_A11Y_LABEL.format({
    stickerName: t
  })
}
let v = e => {
    let {
      children: t,
      hasError: n,
      isLoading: r,
      maskAsset: s,
      size: a,
      withLoadingIndicator: l = !0
    } = e, u = a >= 33;
    return (0, i.jsxs)("div", {
      className: o()(m.assetWrapper, {
        [m.assetWrapperMasked]: n || s
      }),
      style: {
        height: a,
        width: a
      },
      children: [n ? (0, i.jsxs)("div", {
        className: m.error,
        children: [(0, i.jsx)(d.StickerSadIcon, {
          size: "custom",
          width: 20,
          height: 20,
          color: "currentColor",
          className: m.errorIcon
        }), u && (0, i.jsx)(d.Text, {
          className: m.errorText,
          color: "header-secondary",
          variant: "text-sm/normal",
          children: A.Z.Messages.STICKER_ASSET_LOAD_ERROR
        })]
      }) : t, l && r && (0, i.jsx)("div", {
        className: m.loadingIndicator
      })]
    })
  },
  L = e => {
    let {
      shouldAnimate: t,
      size: s,
      sticker: o,
      fileUri: a,
      assetData: u,
      isFocused: _,
      className: c,
      maskAsset: d,
      positionRef: E,
      withLoadingIndicator: T,
      onError: h
    } = e, S = r.useRef(null), f = r.useRef(null), [O, R] = r.useState(!0), [p, L] = r.useState(!1), D = r.useRef(!1);
    D.current = t && _;
    let M = null == a ? (0, N.Q6)(o) : a;
    return (l()(null != M, "Unable to determine sticker asset URL. Sticker ID: ".concat(o.id)), r.useEffect(() => {
      if (null == S.current || null == M) return;
      let e = Math.min(2, (0, I.x_)());
      S.current.width = s * e, S.current.height = s * e;
      let t = !1;
      return (async () => {
        let {
          default: e
        } = await n.e("21617").then(n.bind(n, 186952));
        null != S.current && (f.current = new e({
          canvas: S.current,
          animationId: o.id,
          assetUrl: M,
          assetData: u,
          onInitialDraw: () => {
            !t && R(!1)
          },
          onError: () => {
            !t && (R(!1), L(!0), null == h || h())
          }
        }), D.current && f.current.setState(!0))
      })(), () => {
        var e;
        null === (e = f.current) || void 0 === e || e.drop(), f.current = null, t = !0
      }
    }, [M, s, o.id, u, h]), r.useEffect(() => {
      var e;
      let n;
      !t && (n = 0), null === (e = f.current) || void 0 === e || e.setState(t && _, n)
    }, [o, t, _]), null == M) ? null : (0, i.jsx)("div", {
      role: "img",
      className: c,
      "aria-label": p ? A.Z.Messages.ERROR_LOADING_STICKER : C(o),
      ref: E,
      children: (0, i.jsx)(v, {
        hasError: p,
        isLoading: O,
        maskAsset: d,
        size: s,
        withLoadingIndicator: T,
        children: g((0, i.jsx)("canvas", {
          className: m.lottieCanvas,
          ref: S
        }), o.id)
      })
    })
  },
  D = e => {
    let {
      shouldAnimate: t,
      sticker: n,
      isFocused: s,
      size: a,
      className: l,
      maskAsset: u,
      positionRef: _,
      withLoadingIndicator: d,
      fileUri: E
    } = e, [I, T] = r.useState(!1), [h, S] = r.useState(!0), [f, A] = r.useState(!1), R = r.useRef(null), p = r.useRef(null), L = null != E ? E : (0, N.Q6)(n, {
      isPreview: !t || !I || !s,
      size: a
    }), D = r.useCallback(() => {
      S(!1)
    }, []), M = r.useCallback(() => {
      A(!0)
    }, []);
    return (r.useEffect(() => {
      if (null != R.current) {
        let {
          isVisible: e
        } = R.current;
        T(e)
      }
    }, []), r.useLayoutEffect(() => {
      var e;
      (null === (e = p.current) || void 0 === e ? void 0 : e.complete) === !0 && S(!1)
    }, []), null == L) ? null : (0, i.jsx)(c.$, {
      ref: R,
      onChange: T,
      threshold: .7,
      children: (0, i.jsx)("div", {
        className: o()(l, m.__invalid_pngImageWrapper),
        ref: _,
        children: (0, i.jsx)(v, {
          hasError: f,
          isLoading: h,
          maskAsset: u,
          size: a,
          withLoadingIndicator: d,
          children: g((0, i.jsx)("img", {
            className: m.pngImage,
            alt: C(n),
            src: L,
            draggable: !1,
            onError: M,
            onLoad: D,
            onContextMenu: O,
            ref: p
          }), n.id)
        })
      })
    })
  },
  M = e => {
    let {
      disableAnimation: t,
      enlargeScaleFactor: n,
      enlargeWithName: s,
      isInteracting: o,
      positionRef: a,
      size: l,
      sticker: c
    } = e, I = (0, _.e7)([E.Z], () => E.Z.useReducedMotion), h = r.useRef(null), S = {
      transform: "scale(".concat(I ? 1 : 1 / n, ")"),
      opacity: 0
    }, f = (0, u.useTransition)(o, {
      ref: h,
      from: S,
      enter: {
        transform: "scale(1)",
        opacity: 1
      },
      leave: S,
      config: R
    }), N = r.useRef(null), A = (0, u.useSpring)({
      ref: N,
      transform: o || I ? "translateY(0)" : "translateY(-25px)",
      opacity: o ? 1 : 0,
      config: p
    });
    return (0, u.useChain)(o ? [h, N] : [N, h], o ? [0, .0625] : [0, 0]), f((e, r) => r && (0, i.jsx)(T.W5, {
      className: m.positionedLayer,
      fixed: !0,
      align: "center",
      position: "center",
      targetRef: a,
      children: () => (0, i.jsxs)("div", {
        className: m.overlayWrapper,
        children: [(0, i.jsx)(u.animated.div, {
          className: m.overlayStickerWrapper,
          style: e,
          children: (0, i.jsx)(P, {
            className: m.__invalid_overlaySticker,
            disableAnimation: t,
            enlargeOnInteraction: !1,
            isInteracting: o,
            maskAsset: !1,
            sticker: c,
            size: Math.round(l * n),
            withLoadingIndicator: !1
          })
        }), s && (0, i.jsx)(u.animated.div, {
          className: m.overlayLabelWrapper,
          style: A,
          children: (0, i.jsx)(d.Text, {
            variant: "text-sm/medium",
            className: m.overlayLabel,
            children: c.name
          })
        })]
      })
    }))
  },
  P = e => {
    let {
      isInteracting: t = !1,
      disableAnimation: n = !1,
      enlargeOnInteraction: s = !1,
      enlargeWithName: o = !0,
      enlargeScaleFactor: a = 1.55,
      maskAsset: l = !1,
      size: u,
      sticker: _,
      className: c,
      withLoadingIndicator: d,
      assetData: E,
      fileUri: I,
      onError: T
    } = e, N = (0, h.n)(), A = (0, S.t$)(t) && !n, m = r.useRef(null);
    if (null == _) return null;
    let O = _.format_type === f.u3.LOTTIE ? L : D;
    return (0, i.jsxs)(r.Fragment, {
      children: [(0, i.jsx)(O, {
        shouldAnimate: A,
        isFocused: N,
        size: u,
        sticker: _,
        className: c,
        maskAsset: l,
        positionRef: m,
        withLoadingIndicator: d,
        assetData: E,
        fileUri: I,
        onError: T
      }), s && (0, i.jsx)(M, {
        disableAnimation: n,
        enlargeScaleFactor: a,
        enlargeWithName: o,
        isInteracting: t,
        positionRef: m,
        size: u,
        sticker: _
      })]
    }, "".concat(_.id, ",").concat(u))
  };
t.ZP = P