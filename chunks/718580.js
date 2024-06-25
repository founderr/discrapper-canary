"use strict";
n.d(t, {
  H: function() {
    return S
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

function S(e) {
  var t, n, h, S, f;
  let {
    contentDisplay: N,
    fadeInOut: A = !1,
    ...m
  } = e, O = {}, {
    analyticsLocations: R
  } = (0, c.ZP)();
  r.Children.forEach(m.children, (e, t) => {
    O[e.props.id] = {
      children: e.props.children,
      impressionName: e.props.impressionName,
      impressionProperties: e.props.impressionProperties,
      index: t
    }
  });
  let p = m.activeSlide,
    g = (0, _.Z)(m.activeSlide);
  let C = null !== (t = m.directionOverride) && void 0 !== t ? t : (S = null != g ? O[g] : null, f = O[p], null == S ? null : S.index > f.index ? "backwards" : S.index < f.index ? "forwards" : null),
    {
      reducedMotion: v
    } = r.useContext(l.S),
    L = r.useContext(d.Z),
    D = O[p].impressionName,
    M = {
      ...O[p].impressionProperties,
      location_stack: R
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
  } = (0, u.Z)(p), b = {
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
  }), w = (0, s.useTransition)(p, {
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
      n === p && null != m.onSlideReady && m.onSlideReady(n)
    }
  }), B = (0, E.Z)(C), {
    width: x,
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
        ref: t === p ? P : null,
        style: {
          position: "absolute",
          display: N,
          flexDirection: "column",
          backfaceVisibility: "hidden",
          width: a.tq ? "100%" : x,
          ...H,
          ...v.enabled ? o : {
            left: e.value.to(T("left", B)),
            right: e.value.to(T("right", B)),
            ...A && o
          }
        },
        children: O[t].children
      }, r)
    })
  })
}