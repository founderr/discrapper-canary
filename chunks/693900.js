n.d(t, {
  n: function() {
    return p
  },
  t: function() {
    return u
  }
}), n(47120);
var o = n(735250),
  s = n(470079),
  r = n(920906),
  a = n(442837),
  i = n(393238),
  l = n(110924),
  c = n(607070);
let d = s.createContext({
  springConfig: {},
  onHeightChange: () => {},
  isExpanded: !1
});

function u(e) {
  let t = s.useMemo(() => ({
    springConfig: e.springConfig,
    isExpanded: e.isExpanded,
    onHeightChange: e.onHeightChange
  }), [e.springConfig, e.onHeightChange, e.isExpanded]);
  return (0, o.jsx)(d.Provider, {
    value: t,
    children: e.children
  })
}

function p(e) {
  var t;
  let {
    children: n
  } = e, {
    springConfig: u,
    isExpanded: p,
    onHeightChange: m
  } = s.useContext(d), x = (0, a.e7)([c.Z], () => c.Z.useReducedMotion), {
    ref: g,
    height: f = null
  } = (0, i.Z)(), C = null !== (t = (0, l.Z)(f)) && void 0 !== t ? t : null, [{
    height: h
  }, _] = (0, r.useSpring)(() => ({
    from: {
      height: 0
    },
    config: u,
    immediate: x
  }));
  return s.useLayoutEffect(() => {
    if (null === C || null === f) return;
    let e = f - C;
    0 !== e && m(e)
  }, [f, C, m, p]), s.useLayoutEffect(() => {
    null !== f && _({
      height: f,
      immediate: !p || x || null === C
    })
  }, [f, _, p, x, C]), (0, o.jsx)(r.animated.div, {
    style: {
      height: null === C ? "auto" : h,
      overflow: "hidden"
    },
    children: (0, o.jsx)("div", {
      style: {
        overflow: "hidden"
      },
      ref: g,
      children: n
    })
  })
}