n.d(t, {
  Z: function() {
    return h
  }
});
var i = n(735250),
  s = n(470079),
  l = n(920906),
  a = n(442837),
  r = n(481060),
  o = n(607070),
  c = n(741541);
let u = {
    mass: 1,
    tension: 300,
    friction: 60,
    clamp: !0
  },
  d = {
    mass: 1,
    tension: 600,
    friction: 60,
    clamp: !0
  };

function E(e) {
  var t, n, s, E;
  let {
    state: h,
    direction: _,
    cleanUp: I,
    children: m
  } = e, g = (0, a.e7)([o.Z], () => o.Z.useReducedMotion);
  let p = (0, l.useSpring)((t = h, n = _, s = I, E = g, t === r.TransitionStates.MOUNTED ? {
    from: {
      opacity: 0,
      transform: "translateY(40px) translateX(0px)"
    },
    to: {
      opacity: 1,
      transform: "translateY(0px) translateX(0px)"
    },
    config: u,
    delay: 500,
    immediate: E
  } : t === r.TransitionStates.ENTERED ? {
    from: {
      opacity: 0,
      transform: "translateY(0px) translateX(".concat(-1 === n ? -40 : 40, "px)")
    },
    to: {
      opacity: 1,
      transform: "translateY(0px) translateX(0px)"
    },
    config: d,
    delay: 500,
    immediate: E
  } : {
    from: {
      opacity: 1,
      transform: "translateY(0px) translateX(0px)"
    },
    to: {
      opacity: 0,
      transform: "translateY(0px) translateX(".concat(-1 === n ? 40 : -40, "px))")
    },
    config: d,
    immediate: E,
    onRest: () => {
      s()
    }
  }));
  return (0, i.jsx)(l.animated.div, {
    style: p,
    className: c.step,
    children: (0, i.jsx)(r.ScrollerThin, {
      className: c.scroller,
      children: m
    })
  })
}

function h(e) {
  let {
    currentStep: t,
    renderItem: n,
    items: l,
    getItemKey: a
  } = e, o = s.useRef(t - 1);
  s.useEffect(() => {
    o.current = t
  }, [t]);
  let u = s.useMemo(() => null == o.current || t === o.current ? 0 : o.current < t ? 1 : -1, [t]),
    d = s.useCallback((e, t, s, l) => (0, i.jsx)(E, {
      state: s,
      cleanUp: l,
      direction: u,
      children: n(t)
    }, e), [u, n]);
  return (0, i.jsx)("div", {
    className: c.stepsTransitionGroup,
    children: (0, i.jsx)(r.TransitionGroup, {
      items: l,
      renderItem: d,
      getItemKey: a
    })
  })
}