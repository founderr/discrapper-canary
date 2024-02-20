"use strict";
n.r(t), n.d(t, {
  Slide: function() {
    return _
  },
  Slides: function() {
    return m
  }
});
var i = n("37983"),
  r = n("884691"),
  s = n("907002"),
  a = n("759843"),
  o = n("394846"),
  l = n("413197"),
  u = n("731898"),
  c = n("634634"),
  d = n("685665"),
  p = n("542489"),
  h = n("561744");
let f = {
  mass: 1,
  tension: 300,
  friction: 28,
  clamp: !0
};

function E(e, t) {
  return n => {
    if (0 === n) return "auto";
    let i = "forwards" === t.current,
      r = n > 0,
      s = !1;
    return r && i && "left" === e && (s = !0), r && !i && "right" === e && (s = !0), !r && i && "right" === e && (s = !0), !r && !i && "left" === e && (s = !0), s ? "".concat(100 * Math.abs(n), "%") : "auto"
  }
}

function _(e) {
  return null
}

function m(e) {
  var t, n, _, m;
  let {
    contentDisplay: S,
    ...g
  } = e, T = {}, {
    analyticsLocations: I
  } = (0, d.default)();
  r.Children.forEach(g.children, (e, t) => {
    T[e.props.id] = {
      children: e.props.children,
      impressionName: e.props.impressionName,
      impressionProperties: e.props.impressionProperties,
      index: t
    }
  });
  let v = g.activeSlide,
    C = (0, c.default)(g.activeSlide);
  let A = (_ = null != C ? T[C] : null, m = T[v], null == _ ? null : _.index > m.index ? "backwards" : _.index < m.index ? "forwards" : null),
    {
      reducedMotion: R
    } = r.useContext(l.AccessibilityPreferencesContext),
    N = r.useContext(p.default),
    y = T[v].impressionName,
    O = {
      ...T[v].impressionProperties,
      location_stack: I
    };
  N({
    type: a.ImpressionTypes.MODAL,
    name: y,
    properties: O,
    _stackContext: {
      isSlide: !0
    }
  });
  let {
    ref: D,
    width: b = 0,
    height: P = 0
  } = (0, u.default)(v), L = {
    ...f,
    ...g.springConfig,
    ...R.enabled ? {
      clamp: !0
    } : null
  }, M = (0, s.useSpring)({
    immediate: null == C,
    width: null !== (t = g.width) && void 0 !== t ? t : b,
    height: P,
    config: L
  }), U = (0, s.useTransition)(v, {
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
    config: L,
    onRest: (e, t) => {
      let {
        item: n
      } = t;
      n === v && null != g.onSlideReady && g.onSlideReady(n)
    }
  }), w = (0, h.default)(A), {
    width: k,
    centered: G = !0
  } = g, x = o.isMobile ? "100%" : M.width.to(e => Math.round(e)), F = o.isMobile ? "100%" : M.height.to(e => Math.round(e)), V = o.isMobile ? {} : G ? {
    transform: "translate3d(0, -50%, 0) scale(1.0, 1.0)",
    top: "50%"
  } : {
    transform: "scale(1.0, 1.0)"
  }, B = o.isMobile ? {} : {
    overflow: null !== (n = g.overflow) && void 0 !== n ? n : "hidden"
  };
  return (0, i.jsx)(s.animated.div, {
    style: {
      position: "relative",
      width: x,
      height: F,
      ...B
    },
    children: U((e, t, n) => {
      let {
        key: r
      } = n;
      return (0, i.jsx)(s.animated.div, {
        ref: t === v ? D : null,
        style: {
          position: "absolute",
          display: S,
          flexDirection: "column",
          backfaceVisibility: "hidden",
          width: o.isMobile ? "100%" : k,
          ...V,
          ...R.enabled ? {
            opacity: e.value.to(e => 1 - Math.abs(e))
          } : {
            left: e.value.to(E("left", w)),
            right: e.value.to(E("right", w))
          }
        },
        children: T[t].children
      }, r)
    })
  })
}