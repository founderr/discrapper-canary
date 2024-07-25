s.d(a, {
  w: function() {
return I;
  }
}), s(47120);
var n = s(470079),
  t = s(688619),
  l = s.n(t),
  r = s(979590),
  i = s.n(r),
  o = s(442837),
  c = s(866442),
  E = s(607070),
  _ = s(220082),
  d = s(981631);
let u = (e, a) => {
let s = E.Z.desaturateUserColors ? E.Z.saturation : 1,
  n = _.SR.getState().palette[e],
  t = null == n ? void 0 : n.map(e => {
    let [a, n, t] = e, {
      h: l,
      s: r,
      l: o
    } = i()({
      r: a,
      g: n,
      b: t
    }).toHsl();
    return i()({
      h: l,
      s: r * s,
      l: o
    }).toHexString();
  });
return null != t ? t : [
  a,
  a
];
  },
  I = e => {
var a, n, t, r, i, o;
let _;
_ = s(481060).tokens;
let I = E.Z.saturation,
  [A, N] = u(e, null !== (o = null == _ ? void 0 : null === (i = _.colors) || void 0 === i ? void 0 : null === (r = i.BACKGROUND_FLOATING) || void 0 === r ? void 0 : null === (t = r.resolve) || void 0 === t ? void 0 : null === (n = t.call(r, {
    theme: d.BRd.DARK,
    saturation: I
  })) || void 0 === n ? void 0 : null === (a = n.hex) || void 0 === a ? void 0 : a.call(n)) && void 0 !== o ? o : '#000'),
  O = (0, c._i)(A),
  R = (0, c._i)(N);
for (let e = 1; e < 8 && !((0, c.Bd)(O) >= 0.725); e++) {
  ;
  O = l()(O).darken(0.5).num();
}
for (let e = 1; e < 8 && !((0, c.Bd)(R) >= 0.725); e++) {
  ;
  R = l()(R).darken(0.5).num();
}
let m = (0, c.Rf)(O);
return {
  primaryColor: m,
  secondaryColor: (0, c.Rf)(R)
};
  };
a.Z = e => {
  var a, t, r, i, u, I;
  let A;
  A = s(481060).tokens;
  let N = (0, o.e7)([E.Z], () => E.Z.saturation),
[O, R] = (0, _.Cf)(e, null !== (I = null == A ? void 0 : null === (u = A.colors) || void 0 === u ? void 0 : null === (i = u.BACKGROUND_FLOATING) || void 0 === i ? void 0 : null === (r = i.resolve) || void 0 === r ? void 0 : null === (t = r.call(i, {
  theme: d.BRd.DARK,
  saturation: N
})) || void 0 === t ? void 0 : null === (a = t.hex) || void 0 === a ? void 0 : a.call(t)) && void 0 !== I ? I : '#000');
  return n.useMemo(() => {
let e = (0, c._i)(O),
  a = (0, c._i)(R);
for (let a = 1; a < 8 && !((0, c.Bd)(e) >= 0.725); a++) {
  ;
  e = l()(e).darken(0.5).num();
}
for (let e = 1; e < 8 && !((0, c.Bd)(a) >= 0.725); e++) {
  ;
  a = l()(a).darken(0.5).num();
}
let s = (0, c.Rf)(e);
return {
  primaryColor: s,
  secondaryColor: (0, c.Rf)(a)
};
  }, [
O,
R
  ]);
};