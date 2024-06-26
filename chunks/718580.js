"use strict";
n.d(t, {
  H: function() {
    return f
  },
  M: function() {
    return h
  }
});
var i = n(735250),
  r = n(470079),
  s = n(920906),
  o = n(990547),
  a = n(873546),
  l = n(186325),
  u = n(393238),
  _ = n(699682),
  c = n(906732),
  d = n(812663),
  E = n(863840);
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

function h(e) {
  return null
}

function f(e) {
  var t, n, h, f, S;
  let {
    contentDisplay: N,
    fadeInOut: A = !1,
    ...m
  } = e, O = {}, {
    analyticsLocations: p
  } = (0, c.ZP)();
  r.Children.forEach(m.children, (e, t) => {
    O[e.props.id] = {
      children: e.props.children,
      impressionName: e.props.impressionName,
      impressionProperties: e.props.impressionProperties,
      index: t
    }
  });
  let R = m.activeSlide,
    g = (0, _.Z)(m.activeSlide);
  let C = null !== (t = m.directionOverride) && void 0 !== t ? t : (f = null != g ? O[g] : null, S = O[R], null == f ? null : f.index > S.index ? "backwards" : f.index < S.index ? "forwards" : null),
    {
      reducedMotion: v
    } = r.useContext(l.S),
    L = r.useContext(d.Z),
    D = O[R].impressionName,
    M = {
      ...O[R].impressionProperties,
      location_stack: p
    };
  L({
    type: o.ImpressionTypes.MODAL,
    name: D,
    properties: M,
    _stackContext: {
      isSlide: !0
    }
  });
  let {
    ref: P,
    width: y = 0,
    height: U = 0
  } = (0, u.Z)(R), b = {
    ...I,
    ...m.springConfig,
    ...v.enabled ? {
      clamp: !0
    } : null
  }, G = (0, s.useSpring)({
    immediate: null == g,
    width: null !== (n = m.width) && void 0 !== n ? n : y,
    height: U,
    config: b
  }), w = (0, s.useTransition)(R, {
    immediate: null == g,
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
      n === R && null != m.onSlideReady && m.onSlideReady(n)
    }
  }), x = (0, E.Z)(C), {
    width: B,
    centered: k = !0
  } = m, V = a.tq ? "100%" : G.width.to(e => Math.round(e)), Z = a.tq ? "100%" : G.height.to(e => Math.round(e)), H = a.tq ? {} : k ? {
    transform: "translate3d(0, -50%, 0) scale(1.0, 1.0)",
    top: "50%"
  } : {
    transform: "scale(1.0, 1.0)"
  }, F = a.tq ? {} : {
    overflow: null !== (h = m.overflow) && void 0 !== h ? h : "hidden"
  };
  return (0, i.jsx)(s.animated.div, {
    style: {
      position: "relative",
      width: V,
      height: Z,
      ...F
    },
    children: w((e, t, n) => {
      let {
        key: r
      } = n, o = {
        opacity: e.value.to(e => 1 - Math.abs(e))
      };
      return (0, i.jsx)(s.animated.div, {
        ref: t === R ? P : null,
        style: {
          position: "absolute",
          display: N,
          flexDirection: "column",
          backfaceVisibility: "hidden",
          width: a.tq ? "100%" : B,
          ...H,
          ...v.enabled ? o : {
            left: e.value.to(T("left", x)),
            right: e.value.to(T("right", x)),
            ...A && o
          }
        },
        children: O[t].children
      }, r)
    })
  })
}