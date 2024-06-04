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
  var t, n, f, S;
  let {
    contentDisplay: h,
    fadeInOut: A = !1,
    ...m
  } = e, N = {}, {
    analyticsLocations: p
  } = (0, _.default)();
  r.Children.forEach(m.children, (e, t) => {
    N[e.props.id] = {
      children: e.props.children,
      impressionName: e.props.impressionName,
      impressionProperties: e.props.impressionProperties,
      index: t
    }
  });
  let O = m.activeSlide,
    C = (0, d.default)(m.activeSlide);
  let R = (f = null != C ? N[C] : null, S = N[O], null == f ? null : f.index > S.index ? "backwards" : f.index < S.index ? "forwards" : null),
    {
      reducedMotion: g
    } = r.useContext(l.AccessibilityPreferencesContext),
    L = r.useContext(c.default),
    v = N[O].impressionName,
    D = {
      ...N[O].impressionProperties,
      location_stack: p
    };
  L({
    type: a.ImpressionTypes.MODAL,
    name: v,
    properties: D,
    _stackContext: {
      isSlide: !0
    }
  });
  let {
    ref: M,
    width: y = 0,
    height: P = 0
  } = (0, u.default)(O), U = {
    ...I,
    ...m.springConfig,
    ...g.enabled ? {
      clamp: !0
    } : null
  }, b = (0, s.useSpring)({
    immediate: null == C,
    width: null !== (t = m.width) && void 0 !== t ? t : y,
    height: P,
    config: U
  }), G = (0, s.useTransition)(O, {
    immediate: null == C,
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
    config: U,
    onRest: (e, t) => {
      let {
        item: n
      } = t;
      n === O && null != m.onSlideReady && m.onSlideReady(n)
    }
  }), w = (0, E.default)(R), {
    width: k,
    centered: B = !0
  } = m, V = o.isMobile ? "100%" : b.width.to(e => Math.round(e)), x = o.isMobile ? "100%" : b.height.to(e => Math.round(e)), F = o.isMobile ? {} : B ? {
    transform: "translate3d(0, -50%, 0) scale(1.0, 1.0)",
    top: "50%"
  } : {
    transform: "scale(1.0, 1.0)"
  }, H = o.isMobile ? {} : {
    overflow: null !== (n = m.overflow) && void 0 !== n ? n : "hidden"
  };
  return (0, i.jsx)(s.animated.div, {
    style: {
      position: "relative",
      width: V,
      height: x,
      ...H
    },
    children: G((e, t, n) => {
      let {
        key: r
      } = n, a = {
        opacity: e.value.to(e => 1 - Math.abs(e))
      };
      return (0, i.jsx)(s.animated.div, {
        ref: t === O ? M : null,
        style: {
          position: "absolute",
          display: h,
          flexDirection: "column",
          backfaceVisibility: "hidden",
          width: o.isMobile ? "100%" : k,
          ...F,
          ...g.enabled ? a : {
            left: e.value.to(T("left", w)),
            right: e.value.to(T("right", w)),
            ...A && a
          }
        },
        children: N[t].children
      }, r)
    })
  })
}