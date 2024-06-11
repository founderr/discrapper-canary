"use strict";
n.r(t), n.d(t, {
  Slide: function() {
    return f
  },
  Slides: function() {
    return S
  }
});
var i = n("735250"),
  r = n("470079"),
  s = n("920906"),
  a = n("990547"),
  o = n("873546"),
  l = n("186325"),
  u = n("393238"),
  d = n("699682"),
  _ = n("906732"),
  c = n("812663"),
  E = n("863840");
let I = {
  mass: 1,
  tension: 300,
  friction: 28,
  clamp: !0
};

function T(e, t) {
  return n => {
    if (0 === n) return "auto";
    let i = "forwards" === t.current,
      r = n > 0,
      s = !1;
    return r && i && "left" === e && (s = !0), r && !i && "right" === e && (s = !0), !r && i && "right" === e && (s = !0), !r && !i && "left" === e && (s = !0), s ? "".concat(100 * Math.abs(n), "%") : "auto"
  }
}

function f(e) {
  return null
}

function S(e) {
  var t, n, f, S, h;
  let {
    contentDisplay: A,
    fadeInOut: m = !1,
    ...N
  } = e, p = {}, {
    analyticsLocations: O
  } = (0, _.default)();
  r.Children.forEach(N.children, (e, t) => {
    p[e.props.id] = {
      children: e.props.children,
      impressionName: e.props.impressionName,
      impressionProperties: e.props.impressionProperties,
      index: t
    }
  });
  let C = N.activeSlide,
    R = (0, d.default)(N.activeSlide);
  let g = null !== (t = N.directionOverride) && void 0 !== t ? t : (S = null != R ? p[R] : null, h = p[C], null == S ? null : S.index > h.index ? "backwards" : S.index < h.index ? "forwards" : null),
    {
      reducedMotion: L
    } = r.useContext(l.AccessibilityPreferencesContext),
    v = r.useContext(c.default),
    D = p[C].impressionName,
    M = {
      ...p[C].impressionProperties,
      location_stack: O
    };
  v({
    type: a.ImpressionTypes.MODAL,
    name: D,
    properties: M,
    _stackContext: {
      isSlide: !0
    }
  });
  let {
    ref: y,
    width: P = 0,
    height: U = 0
  } = (0, u.default)(C), b = {
    ...I,
    ...N.springConfig,
    ...L.enabled ? {
      clamp: !0
    } : null
  }, G = (0, s.useSpring)({
    immediate: null == R,
    width: null !== (n = N.width) && void 0 !== n ? n : P,
    height: U,
    config: b
  }), w = (0, s.useTransition)(C, {
    immediate: null == R,
    value: 0,
    from: {
      value: 1
    },
    enter: {
      value: 0
    },
    leave: {
      value: -1
    },
    config: b,
    onRest: (e, t) => {
      let {
        item: n
      } = t;
      n === C && null != N.onSlideReady && N.onSlideReady(n)
    }
  }), k = (0, E.default)(g), {
    width: B,
    centered: x = !0
  } = N, V = o.isMobile ? "100%" : G.width.to(e => Math.round(e)), F = o.isMobile ? "100%" : G.height.to(e => Math.round(e)), H = o.isMobile ? {} : x ? {
    transform: "translate3d(0, -50%, 0) scale(1.0, 1.0)",
    top: "50%"
  } : {
    transform: "scale(1.0, 1.0)"
  }, Y = o.isMobile ? {} : {
    overflow: null !== (f = N.overflow) && void 0 !== f ? f : "hidden"
  };
  return (0, i.jsx)(s.animated.div, {
    style: {
      position: "relative",
      width: V,
      height: F,
      ...Y
    },
    children: w((e, t, n) => {
      let {
        key: r
      } = n, a = {
        opacity: e.value.to(e => 1 - Math.abs(e))
      };
      return (0, i.jsx)(s.animated.div, {
        ref: t === C ? y : null,
        style: {
          position: "absolute",
          display: A,
          flexDirection: "column",
          backfaceVisibility: "hidden",
          width: o.isMobile ? "100%" : B,
          ...H,
          ...L.enabled ? a : {
            left: e.value.to(T("left", k)),
            right: e.value.to(T("right", k)),
            ...m && a
          }
        },
        children: p[t].children
      }, r)
    })
  })
}