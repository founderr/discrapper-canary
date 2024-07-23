s.d(t, {
  $: function() {
return m;
  }
}), s(653041);
var n = s(735250),
  r = s(470079),
  a = s(120356),
  o = s.n(a),
  i = s(338545),
  l = s(873546),
  c = s(481060),
  d = s(774078),
  u = s(689938),
  p = s(447986),
  g = s(493978),
  f = s(932135);

function C(e) {
  let {
endDate: t
  } = e, {
days: s,
hours: r,
minutes: a,
seconds: o
  } = (0, d.Z)(t), i = function(e, t, s, n) {
let r = (e, t) => ''.concat(e.toString().padStart(2, '0')).concat(t),
  a = [];
return e > 0 && a.push(r(e, u.Z.Messages.COUNTDOWN_UNITS_DAYS)), (t > 0 || a.length > 0) && a.push(r(t, u.Z.Messages.COUNTDOWN_UNITS_HOURS)), (s > 0 || a.length > 0) && a.push(r(s, u.Z.Messages.COUNTDOWN_UNITS_MINUTES)), a.push(r(n, u.Z.Messages.COUNTDOWN_UNITS_SECONDS)), a.join(':');
  }(s, r, a, o);
  return (0, n.jsx)(c.Text, {
variant: 'heading-md/medium',
className: p.countdown,
tag: 'div',
children: (0, n.jsx)('div', {
  role: 'timer',
  'aria-relevant': 'all',
  children: i
})
  });
}
let m = r.memo(function(e) {
  let {
unpublishedAt: t,
isVisible: s,
displayOptions: r,
isFullScreen: a
  } = e, d = (0, c.useSpring)({
transform: 'translateX(-50%) '.concat(s ? 'translateY(-75%)' : 'translateY(0%)'),
opacity: s ? 1 : 0,
config: {
  tension: 120,
  friction: 12
}
  });
  return (0, n.jsxs)(i.animated.div, {
className: o()([
  p.countDownWrapper,
  a && p.fullScreenWrapper,
  l.tq && p.mobileWrapper
]),
role: 'status',
style: {
  ...r.style,
  ...d
},
children: [
  (0, n.jsx)(c.Text, {
    variant: 'text-md/medium',
    className: p.countdownLabel,
    children: r.label()
  }),
  null != r.iconSrc && (0, n.jsx)('img', {
    src: r.iconSrc,
    className: p.countdownIcon,
    alt: '',
    'aria-hidden': !0
  }),
  (0, n.jsx)(C, {
    endDate: t
  }),
  (0, n.jsx)('img', {
    src: g,
    className: o()(p.sparkles, p.left),
    alt: '',
    'aria-hidden': !0
  }),
  (0, n.jsx)('img', {
    src: f,
    className: o()(p.sparkles, p.right),
    alt: '',
    'aria-hidden': !0
  })
]
  });
});