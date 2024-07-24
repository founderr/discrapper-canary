t.d(n, {
  w: function() {
return m;
  }
}), t(47120);
var a = t(470079),
  l = t(688619),
  r = t.n(l),
  i = t(979590),
  o = t.n(i),
  u = t(442837),
  c = t(866442),
  s = t(607070),
  d = t(220082),
  f = t(981631);
let h = (e, n) => {
let t = s.Z.desaturateUserColors ? s.Z.saturation : 1,
  a = d.SR.getState().palette[e],
  l = null == a ? void 0 : a.map(e => {
    let [n, a, l] = e, {
      h: r,
      s: i,
      l: u
    } = o()({
      r: n,
      g: a,
      b: l
    }).toHsl();
    return o()({
      h: r,
      s: i * t,
      l: u
    }).toHexString();
  });
return null != l ? l : [
  n,
  n
];
  },
  m = e => {
var n, a, l, i, o, u;
let d;
d = t(481060).tokens;
let m = s.Z.saturation,
  [v, _] = h(e, null !== (u = null == d ? void 0 : null === (o = d.colors) || void 0 === o ? void 0 : null === (i = o.BACKGROUND_FLOATING) || void 0 === i ? void 0 : null === (l = i.resolve) || void 0 === l ? void 0 : null === (a = l.call(i, {
    theme: f.BRd.DARK,
    saturation: m
  })) || void 0 === a ? void 0 : null === (n = a.hex) || void 0 === n ? void 0 : n.call(a)) && void 0 !== u ? u : '#000'),
  E = (0, c._i)(v),
  g = (0, c._i)(_);
for (let e = 1; e < 8 && !((0, c.Bd)(E) >= 0.725); e++) {
  ;
  E = r()(E).darken(0.5).num();
}
for (let e = 1; e < 8 && !((0, c.Bd)(g) >= 0.725); e++) {
  ;
  g = r()(g).darken(0.5).num();
}
let N = (0, c.Rf)(E);
return {
  primaryColor: N,
  secondaryColor: (0, c.Rf)(g)
};
  };
n.Z = e => {
  var n, l, i, o, h, m;
  let v;
  v = t(481060).tokens;
  let _ = (0, u.e7)([s.Z], () => s.Z.saturation),
[E, g] = (0, d.Cf)(e, null !== (m = null == v ? void 0 : null === (h = v.colors) || void 0 === h ? void 0 : null === (o = h.BACKGROUND_FLOATING) || void 0 === o ? void 0 : null === (i = o.resolve) || void 0 === i ? void 0 : null === (l = i.call(o, {
  theme: f.BRd.DARK,
  saturation: _
})) || void 0 === l ? void 0 : null === (n = l.hex) || void 0 === n ? void 0 : n.call(l)) && void 0 !== m ? m : '#000');
  return a.useMemo(() => {
let e = (0, c._i)(E),
  n = (0, c._i)(g);
for (let n = 1; n < 8 && !((0, c.Bd)(e) >= 0.725); n++) {
  ;
  e = r()(e).darken(0.5).num();
}
for (let e = 1; e < 8 && !((0, c.Bd)(n) >= 0.725); e++) {
  ;
  n = r()(n).darken(0.5).num();
}
let t = (0, c.Rf)(e);
return {
  primaryColor: t,
  secondaryColor: (0, c.Rf)(n)
};
  }, [
E,
g
  ]);
};