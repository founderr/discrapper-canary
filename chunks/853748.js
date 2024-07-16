s.d(t, {
  $: function() {
return h;
  }
}), s(653041);
var n = s(735250),
  r = s(470079),
  a = s(120356),
  o = s.n(a),
  i = s(338545),
  l = s(873546),
  c = s(399606),
  d = s(481060),
  u = s(774078),
  p = s(607070),
  g = s(689938),
  f = s(447986),
  C = s(493978),
  m = s(932135);

function _(e) {
  let {
endDate: t
  } = e, {
days: s,
hours: r,
minutes: a,
seconds: o
  } = (0, u.Z)(t), i = function(e, t, s, n) {
let r = (e, t) => ''.concat(e.toString().padStart(2, '0')).concat(t),
  a = [];
return e > 0 && a.push(r(e, g.Z.Messages.COUNTDOWN_UNITS_DAYS)), (t > 0 || a.length > 0) && a.push(r(t, g.Z.Messages.COUNTDOWN_UNITS_HOURS)), (s > 0 || a.length > 0) && a.push(r(s, g.Z.Messages.COUNTDOWN_UNITS_MINUTES)), a.push(r(n, g.Z.Messages.COUNTDOWN_UNITS_SECONDS)), a.join(':');
  }(s, r, a, o);
  return (0, n.jsx)(d.Text, {
variant: 'heading-md/medium',
className: f.countdown,
tag: 'div',
children: (0, n.jsx)('div', {
  role: 'timer',
  'aria-relevant': 'all',
  children: i
})
  });
}
let h = r.memo(function(e) {
  let {
unpublishedAt: t,
isVisible: s,
displayOptions: r,
isFullScreen: a
  } = e, u = (0, c.e7)([p.Z], () => p.Z.useReducedMotion), g = (0, i.useSpring)({
transform: 'translateX(-50%) '.concat(s ? 'translateY(-75%)' : 'translateY(0%)'),
opacity: s ? 1 : 0,
config: {
  tension: 120,
  friction: 12
},
immediate: u
  });
  return (0, n.jsxs)(i.animated.div, {
className: o()([
  f.countDownWrapper,
  a && f.fullScreenWrapper,
  l.tq && f.mobileWrapper
]),
role: 'status',
style: {
  ...r.style,
  ...g
},
children: [
  (0, n.jsx)(d.Text, {
    variant: 'text-md/medium',
    className: f.countdownLabel,
    children: r.label()
  }),
  null != r.iconSrc && (0, n.jsx)('img', {
    src: r.iconSrc,
    className: f.countdownIcon,
    alt: '',
    'aria-hidden': !0
  }),
  (0, n.jsx)(_, {
    endDate: t
  }),
  (0, n.jsx)('img', {
    src: C,
    className: o()(f.sparkles, f.left),
    alt: '',
    'aria-hidden': !0
  }),
  (0, n.jsx)('img', {
    src: m,
    className: o()(f.sparkles, f.right),
    alt: '',
    'aria-hidden': !0
  })
]
  });
});