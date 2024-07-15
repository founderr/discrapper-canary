n.d(t, {
  U: function() {
return m;
  }
}), n(47120);
var i = n(735250),
  a = n(470079),
  s = n(338545),
  r = n(143927),
  l = n(399606),
  o = n(481060),
  c = n(393238),
  d = n(607070),
  u = n(931515),
  _ = n(807933),
  E = n(207796),
  h = n(895068),
  I = n(374109);

function m(e) {
  let {
onScroll: t
  } = e, n = (0, l.e7)([d.Z], () => d.Z.useReducedMotion), {
loading: m
  } = (0, u.LE)(), {
ref: g,
width: p
  } = (0, c.Z)(), T = (0, E.GN)(e => e.mode, r.Z), [f, S] = a.useState(!0), C = (0, s.useSpring)({
from: {
  opacity: 0
},
to: {
  opacity: 1
},
config: {
  mass: 1,
  tension: 600,
  friction: 60
},
delay: 200,
immediate: n,
onRest: () => S(!1)
  });
  return (0, i.jsxs)('section', {
ref: g,
className: I.guilds,
children: [
  m ? (0, i.jsx)('div', {
    className: I.loading,
    children: (0, i.jsx)(o.Spinner, {})
  }) : (0, i.jsx)(s.animated.div, {
    className: I.list,
    style: {
      opacity: C.opacity
    },
    children: (0, i.jsx)(h.ZP, {
      width: null != p ? p : 0,
      isAnimating: f,
      variant: h.Bj.GLOBAL_DISCOVERY,
      onScroll: t
    })
  }),
  (0, i.jsx)('div', {
    className: I.selectors,
    children: (0, i.jsx)(_.Z, {
      mode: T
    })
  })
]
  });
}