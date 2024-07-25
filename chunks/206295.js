n.d(e, {
  w: function() {
return _;
  }
}), n(47120);
var a = n(470079),
  l = n(688619),
  r = n.n(l),
  u = n(979590),
  i = n.n(u),
  o = n(442837),
  c = n(866442),
  s = n(607070),
  d = n(220082),
  f = n(981631);
let E = (t, e) => {
let n = s.Z.desaturateUserColors ? s.Z.saturation : 1,
  a = d.SR.getState().palette[t],
  l = null == a ? void 0 : a.map(t => {
    let [e, a, l] = t, {
      h: r,
      s: u,
      l: o
    } = i()({
      r: e,
      g: a,
      b: l
    }).toHsl();
    return i()({
      h: r,
      s: u * n,
      l: o
    }).toHexString();
  });
return null != l ? l : [
  e,
  e
];
  },
  _ = t => {
var e, a, l, u, i, o;
let d;
d = n(481060).tokens;
let _ = s.Z.saturation,
  [v, M] = E(t, null !== (o = null == d ? void 0 : null === (i = d.colors) || void 0 === i ? void 0 : null === (u = i.BACKGROUND_FLOATING) || void 0 === u ? void 0 : null === (l = u.resolve) || void 0 === l ? void 0 : null === (a = l.call(u, {
    theme: f.BRd.DARK,
    saturation: _
  })) || void 0 === a ? void 0 : null === (e = a.hex) || void 0 === e ? void 0 : e.call(a)) && void 0 !== o ? o : '#000'),
  h = (0, c._i)(v),
  N = (0, c._i)(M);
for (let t = 1; t < 8 && !((0, c.Bd)(h) >= 0.725); t++) {
  ;
  h = r()(h).darken(0.5).num();
}
for (let t = 1; t < 8 && !((0, c.Bd)(N) >= 0.725); t++) {
  ;
  N = r()(N).darken(0.5).num();
}
let Z = (0, c.Rf)(h);
return {
  primaryColor: Z,
  secondaryColor: (0, c.Rf)(N)
};
  };
e.Z = t => {
  var e, l, u, i, E, _;
  let v;
  v = n(481060).tokens;
  let M = (0, o.e7)([s.Z], () => s.Z.saturation),
[h, N] = (0, d.Cf)(t, null !== (_ = null == v ? void 0 : null === (E = v.colors) || void 0 === E ? void 0 : null === (i = E.BACKGROUND_FLOATING) || void 0 === i ? void 0 : null === (u = i.resolve) || void 0 === u ? void 0 : null === (l = u.call(i, {
  theme: f.BRd.DARK,
  saturation: M
})) || void 0 === l ? void 0 : null === (e = l.hex) || void 0 === e ? void 0 : e.call(l)) && void 0 !== _ ? _ : '#000');
  return a.useMemo(() => {
let t = (0, c._i)(h),
  e = (0, c._i)(N);
for (let e = 1; e < 8 && !((0, c.Bd)(t) >= 0.725); e++) {
  ;
  t = r()(t).darken(0.5).num();
}
for (let t = 1; t < 8 && !((0, c.Bd)(e) >= 0.725); t++) {
  ;
  e = r()(e).darken(0.5).num();
}
let n = (0, c.Rf)(t);
return {
  primaryColor: n,
  secondaryColor: (0, c.Rf)(e)
};
  }, [
h,
N
  ]);
};