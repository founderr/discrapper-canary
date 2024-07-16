var r = n(735250),
  a = n(470079),
  o = n(120356),
  i = n.n(o),
  l = n(399606),
  s = n(376345),
  c = n(607070),
  d = n(302221),
  u = n(884697),
  f = n(372654),
  g = n(916305);
t.Z = e => {
  let {
asset: t,
size: n = f.yV,
addGradient: o = !1,
className: p,
style: C,
children: m,
blur: v = !1
  } = e, E = (0, l.e7)([c.Z], () => c.Z.saturation), h = a.useMemo(() => {
if (null == t)
  return C;
let e = (0, u.uV)(t, {
    size: n,
    format: 'jpg'
  }),
  r = v ? {
    filter: 'blur(2px)',
    transform: 'scale(1.02)'
  } : {};
if (1 === E)
  return {
    ...C,
    backgroundImage: o ? 'url('.concat(e, '), linear-gradient(180deg, rgba(0, 71, 94, 0.6) 5%, rgba(9, 33, 65, 0.6) 95%)') : 'url('.concat(e, ')'),
    backgroundBlendMode: 'multiply',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    ...r
  };
let a = (0, d.aD)(s.ZP.unsafe_rawColors.BLACK_500, 1 - E);
return {
  ...C,
  backgroundImage: 'linear-gradient('.concat(a, ', ').concat(a, '), url(').concat(e, ')'),
  backgroundBlendMode: 'saturation',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  ...r
};
  }, [
t,
n,
E,
C,
v,
o
  ]);
  return (0, r.jsx)('div', {
className: i()(g.banner, p),
style: h,
children: m
  });
};