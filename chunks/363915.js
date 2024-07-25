n.d(t, {
  Z: function() {
return u;
  }
});
var i = n(735250),
  s = n(470079),
  a = n(338545),
  r = n(481060),
  l = n(981562);
let o = {
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

function d(e) {
  var t, n, s;
  let {
state: d,
direction: u,
cleanUp: _,
children: h
  } = e;
  let E = (0, r.useSpring)((t = d, n = u, s = _, t === r.TransitionStates.MOUNTED ? {
from: {
  opacity: 0,
  transform: 'translateY(40px) translateX(0px)'
},
to: {
  opacity: 1,
  transform: 'translateY(0px) translateX(0px)'
},
config: o,
delay: 500
  } : t === r.TransitionStates.ENTERED ? {
from: {
  opacity: 0,
  transform: 'translateY(0px) translateX('.concat(-1 === n ? -40 : 40, 'px)')
},
to: {
  opacity: 1,
  transform: 'translateY(0px) translateX(0px)'
},
config: c,
delay: 500
  } : {
from: {
  opacity: 1,
  transform: 'translateY(0px) translateX(0px)'
},
to: {
  opacity: 0,
  transform: 'translateY(0px) translateX('.concat(-1 === n ? 40 : -40, 'px))')
},
config: c,
onRest: () => {
  s();
}
  }));
  return (0, i.jsx)(a.animated.div, {
style: E,
className: l.step,
children: (0, i.jsx)(r.ScrollerThin, {
  className: l.scroller,
  children: h
})
  });
}

function u(e) {
  let {
currentStep: t,
renderItem: n,
items: a,
getItemKey: o
  } = e, c = s.useRef(t - 1);
  s.useEffect(() => {
c.current = t;
  }, [t]);
  let u = s.useMemo(() => null == c.current || t === c.current ? 0 : c.current < t ? 1 : -1, [t]),
_ = s.useCallback((e, t, s, a) => (0, i.jsx)(d, {
  state: s,
  cleanUp: a,
  direction: u,
  children: n(t)
}, e), [
  u,
  n
]);
  return (0, i.jsx)('div', {
className: l.stepsTransitionGroup,
children: (0, i.jsx)(r.TransitionGroup, {
  items: a,
  renderItem: _,
  getItemKey: o
})
  });
}