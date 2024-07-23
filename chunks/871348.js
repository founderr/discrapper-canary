n.d(t, {
  U: function() {
return h;
  }
}), n(47120);
var i = n(735250),
  s = n(470079),
  a = n(338545),
  r = n(143927),
  l = n(481060),
  o = n(393238),
  c = n(931515),
  d = n(807933),
  u = n(207796),
  _ = n(895068),
  E = n(207462);

function h(e) {
  let {
onScroll: t
  } = e, {
loading: n
  } = (0, c.LE)(), {
ref: h,
width: I
  } = (0, o.Z)(), m = (0, u.GN)(e => e.mode, r.Z), [g, p] = s.useState(!0), T = (0, l.useSpring)({
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
onRest: () => p(!1)
  });
  return (0, i.jsxs)('section', {
ref: h,
className: E.guilds,
children: [
  n ? (0, i.jsx)('div', {
    className: E.loading,
    children: (0, i.jsx)(l.Spinner, {})
  }) : (0, i.jsx)(a.animated.div, {
    className: E.list,
    style: {
      opacity: T.opacity
    },
    children: (0, i.jsx)(_.ZP, {
      width: null != I ? I : 0,
      isAnimating: g,
      variant: _.Bj.GLOBAL_DISCOVERY,
      onScroll: t
    })
  }),
  (0, i.jsx)('div', {
    className: E.selectors,
    children: (0, i.jsx)(d.Z, {
      mode: m
    })
  })
]
  });
}