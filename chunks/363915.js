n.d(t, {
  Z: function() {
    return h
  }
});
var s = n(735250),
  i = n(470079),
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
  var t, n, i, E;
  let {
    state: h,
    direction: _,
    cleanUp: I,
    children: m
  } = e, T = (0, a.e7)([o.Z], () => o.Z.useReducedMotion);
  let g = (0, l.useSpring)((t = h, n = _, i = I, E = T, t === r.TransitionStates.MOUNTED ? {
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
      i()
    }
  }));
  return (0, s.jsx)(l.animated.div, {
    style: g,
    className: c.step,
    children: (0, s.jsx)(r.ScrollerThin, {
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
  } = e, o = i.useRef(t - 1);
  i.useEffect(() => {
    o.current = t
  }, [t]);
  let u = i.useMemo(() => null == o.current || t === o.current ? 0 : o.current < t ? 1 : -1, [t]),
    d = i.useCallback((e, t, i, l) => (0, s.jsx)(E, {
      state: i,
      cleanUp: l,
      direction: u,
      children: n(t)
    }, e), [u, n]);
  return (0, s.jsx)("div", {
    className: c.stepsTransitionGroup,
    children: (0, s.jsx)(r.TransitionGroup, {
      items: l,
      renderItem: d,
      getItemKey: a
    })
  })
}