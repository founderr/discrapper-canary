n.d(t, {
  O: function() {
    return u
  },
  h: function() {
    return c
  }
}), n(47120);
var s = n(470079),
  i = n(920906),
  l = n(442837),
  a = n(393238),
  r = n(607070),
  o = n(87894);

function c(e) {
  let t = s.useRef(null),
    [n, i] = s.useState("lg"),
    [l, r] = s.useState(void 0);
  return (0, a.P)(t, e => {
    let {
      width: t,
      scrollHeight: n
    } = e;
    return (r(n), null == t || t > o.j2) ? i("lg") : t > o.Z0 ? i("sm") : i("xs")
  }, null != e ? e : []), {
    containerRef: t,
    size: n,
    height: l
  }
}

function u(e) {
  let {
    initiallyExpanded: t
  } = e, [n, a] = s.useState(t), [o, c] = s.useState(!1), u = (0, l.e7)([r.Z], () => r.Z.useReducedMotion), d = s.useCallback(() => {
    a(e => !e), c(!0)
  }, []), {
    expansionSpring: E
  } = (0, i.useSpring)({
    expansionSpring: n ? 1 : 0,
    config: {
      tension: 450,
      friction: 45
    },
    immediate: u,
    onRest: () => c(!1)
  });
  return {
    expansionSpring: E,
    isAnimating: o,
    isExpanded: n,
    toggleExpanded: d
  }
}