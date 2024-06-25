n.d(t, {
  n: function() {
    return p
  },
  t: function() {
    return d
  }
}), n(47120);
var s = n(735250),
  o = n(470079),
  r = n(920906),
  a = n(442837),
  l = n(393238),
  i = n(110924),
  c = n(607070);
let u = o.createContext({
  springConfig: {},
  onHeightChange: () => {},
  isExpanded: !1
});

function d(e) {
  let t = o.useMemo(() => ({
    springConfig: e.springConfig,
    isExpanded: e.isExpanded,
    onHeightChange: e.onHeightChange
  }), [e.springConfig, e.onHeightChange, e.isExpanded]);
  return (0, s.jsx)(u.Provider, {
    value: t,
    children: e.children
  })
}

function p(e) {
  var t;
  let {
    children: n
  } = e, {
    springConfig: d,
    isExpanded: p,
    onHeightChange: x
  } = o.useContext(u), m = (0, a.e7)([c.Z], () => c.Z.useReducedMotion), {
    ref: g,
    height: h = null
  } = (0, l.Z)(), C = null !== (t = (0, i.Z)(h)) && void 0 !== t ? t : null, [{
    height: f
  }, E] = (0, r.useSpring)(() => ({
    from: {
      height: 0
    },
    config: d,
    immediate: m
  }));
  return o.useLayoutEffect(() => {
    if (null === C || null === h) return;
    let e = h - C;
    0 !== e && x(e)
  }, [h, C, x, p]), o.useLayoutEffect(() => {
    null !== h && E({
      height: h,
      immediate: !p || m || null === C
    })
  }, [h, E, p, m, C]), (0, s.jsx)(r.animated.div, {
    style: {
      height: null === C ? "auto" : f,
      overflow: "hidden"
    },
    children: (0, s.jsx)("div", {
      style: {
        overflow: "hidden"
      },
      ref: g,
      children: n
    })
  })
}