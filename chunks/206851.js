t.d(n, {
  Z: function() {
return _;
  }
});
var a = t(735250);
t(470079);
var r = t(249849),
  i = t(907561),
  s = t(689938),
  o = t(924936);
let l = [
'#1e349e',
'#4d61de',
'#7887e2',
'#92a6e4'
  ],
  c = ['#fc6e4e'],
  d = [
0.05,
0.15,
0.26,
0.4
  ],
  u = [{
  base: 8,
  tint: 1
},
{
  base: 8,
  tint: 1
},
{
  base: 8,
  tint: 1
},
{
  base: 8,
  tint: 1
}
  ],
  m = [0.35],
  f = [{
base: 4,
tint: 1
  }];

function _(e) {
  let {
width: n,
height: t,
primaryTintColor: _,
secondaryTintColor: C,
...h
  } = e, {
primaryColorsTransformed: x,
secondaryColorsTransformed: g
  } = (0, r.s)({
primaryBaseColors: l,
primaryTintColor: _,
primaryTintLuminances: d,
primaryLuminanceWeights: u,
secondaryBaseColors: c,
secondaryTintColor: C,
secondaryTintLuminances: m,
secondaryLuminanceWeights: f
  }), {
styleContent: p,
containerId: T
  } = (0, i.bC)(x, g);
  return (0, a.jsxs)('svg', {
...h,
'aria-label': s.Z.Messages.CLAN_LOOK_BANNER,
width: n,
height: t,
viewBox: '0 0 '.concat(i.Km, ' ').concat(i.md),
children: [
  (0, a.jsx)('defs', {
    children: (0, a.jsx)('style', {
      children: p
    })
  }),
  (0, a.jsx)('use', {
    href: ''.concat(o, '#wrapper-layer'),
    id: T
  })
]
  });
}