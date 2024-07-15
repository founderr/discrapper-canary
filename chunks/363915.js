n.d(t, {
  Z: function() {
return E;
  }
});
var i = n(735250),
  a = n(470079),
  s = n(338545),
  r = n(442837),
  l = n(481060),
  o = n(607070),
  c = n(981562);
let d = {
mass: 1,
tension: 300,
friction: 60,
clamp: !0
  },
  u = {
mass: 1,
tension: 600,
friction: 60,
clamp: !0
  };

function _(e) {
  var t, n, a, _;
  let {
state: E,
direction: h,
cleanUp: I,
children: m
  } = e, g = (0, r.e7)([o.Z], () => o.Z.useReducedMotion);
  let p = (0, s.useSpring)((t = E, n = h, a = I, _ = g, t === l.TransitionStates.MOUNTED ? {
from: {
  opacity: 0,
  transform: 'translateY(40px) translateX(0px)'
},
to: {
  opacity: 1,
  transform: 'translateY(0px) translateX(0px)'
},
config: d,
delay: 500,
immediate: _
  } : t === l.TransitionStates.ENTERED ? {
from: {
  opacity: 0,
  transform: 'translateY(0px) translateX('.concat(-1 === n ? -40 : 40, 'px)')
},
to: {
  opacity: 1,
  transform: 'translateY(0px) translateX(0px)'
},
config: u,
delay: 500,
immediate: _
  } : {
from: {
  opacity: 1,
  transform: 'translateY(0px) translateX(0px)'
},
to: {
  opacity: 0,
  transform: 'translateY(0px) translateX('.concat(-1 === n ? 40 : -40, 'px))')
},
config: u,
immediate: _,
onRest: () => {
  a();
}
  }));
  return (0, i.jsx)(s.animated.div, {
style: p,
className: c.step,
children: (0, i.jsx)(l.ScrollerThin, {
  className: c.scroller,
  children: m
})
  });
}

function E(e) {
  let {
currentStep: t,
renderItem: n,
items: s,
getItemKey: r
  } = e, o = a.useRef(t - 1);
  a.useEffect(() => {
o.current = t;
  }, [t]);
  let d = a.useMemo(() => null == o.current || t === o.current ? 0 : o.current < t ? 1 : -1, [t]),
u = a.useCallback((e, t, a, s) => (0, i.jsx)(_, {
  state: a,
  cleanUp: s,
  direction: d,
  children: n(t)
}, e), [
  d,
  n
]);
  return (0, i.jsx)('div', {
className: c.stepsTransitionGroup,
children: (0, i.jsx)(l.TransitionGroup, {
  items: s,
  renderItem: u,
  getItemKey: r
})
  });
}