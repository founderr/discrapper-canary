"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
});
var a = n("735250"),
  s = n("470079"),
  l = n("920906"),
  i = n("442837"),
  r = n("481060"),
  o = n("607070"),
  u = n("106156");
let d = {
    mass: 1,
    tension: 300,
    friction: 60,
    clamp: !0
  },
  c = {
    mass: 1,
    tension: 600,
    friction: 60,
    clamp: !0
  };

function f(e) {
  var t, n, s, f;
  let {
    state: E,
    direction: h,
    cleanUp: _,
    children: C
  } = e, m = (0, i.useStateFromStores)([o.default], () => o.default.useReducedMotion);
  let S = (0, l.useSpring)((t = E, n = h, s = _, f = m, t === r.TransitionStates.MOUNTED ? {
    from: {
      opacity: 0,
      transform: "translateY(40px) translateX(0px)"
    },
    to: {
      opacity: 1,
      transform: "translateY(0px) translateX(0px)"
    },
    config: d,
    delay: 500,
    immediate: f
  } : t === r.TransitionStates.ENTERED ? {
    from: {
      opacity: 0,
      transform: "translateY(0px) translateX(".concat(-1 === n ? -40 : 40, "px)")
    },
    to: {
      opacity: 1,
      transform: "translateY(0px) translateX(0px)"
    },
    config: c,
    delay: 500,
    immediate: f
  } : {
    from: {
      opacity: 1,
      transform: "translateY(0px) translateX(0px)"
    },
    to: {
      opacity: 0,
      transform: "translateY(0px) translateX(".concat(-1 === n ? 40 : -40, "px))")
    },
    config: c,
    immediate: f,
    onRest: () => {
      s()
    }
  }));
  return (0, a.jsx)(l.animated.div, {
    style: S,
    className: u.step,
    children: (0, a.jsx)(r.ScrollerThin, {
      className: u.scroller,
      children: C
    })
  })
}

function E(e) {
  let {
    currentStep: t,
    renderItem: n,
    items: l,
    getItemKey: i
  } = e, o = s.useRef(t - 1);
  s.useEffect(() => {
    o.current = t
  }, [t]);
  let d = s.useMemo(() => null == o.current || t === o.current ? 0 : o.current < t ? 1 : -1, [t]),
    c = s.useCallback((e, t, s, l) => (0, a.jsx)(f, {
      state: s,
      cleanUp: l,
      direction: d,
      children: n(t)
    }, e), [d, n]);
  return (0, a.jsx)("div", {
    className: u.stepsTransitionGroup,
    children: (0, a.jsx)(r.TransitionGroup, {
      items: l,
      renderItem: c,
      getItemKey: i
    })
  })
}