"use strict";
a.r(t), a.d(t, {
  getHeroColors: function() {
    return E
  }
}), a("47120");
var n = a("470079"),
  r = a("688619"),
  l = a.n(r),
  i = a("979590"),
  o = a.n(i),
  s = a("442837"),
  u = a("866442"),
  d = a("607070"),
  c = a("220082"),
  g = a("981631");
let f = (e, t) => {
    let a = d.default.desaturateUserColors ? d.default.saturation : 1,
      n = c.useColorStore.getState().palette[e],
      r = null == n ? void 0 : n.map(e => {
        let [t, n, r] = e, {
          h: l,
          s: i,
          l: s
        } = o()({
          r: t,
          g: n,
          b: r
        }).toHsl();
        return o()({
          h: l,
          s: i * a,
          l: s
        }).toHexString()
      });
    return null != r ? r : [t, t]
  },
  E = e => {
    var t, n, r, i, o, s;
    let c;
    c = a("481060").tokens;
    let E = d.default.saturation,
      [m, T] = f(e, null !== (s = null == c ? void 0 : null === (o = c.colors) || void 0 === o ? void 0 : null === (i = o.BACKGROUND_FLOATING) || void 0 === i ? void 0 : null === (r = i.resolve) || void 0 === r ? void 0 : null === (n = r.call(i, {
        theme: g.ThemeTypes.DARK,
        saturation: E
      })) || void 0 === n ? void 0 : null === (t = n.hex) || void 0 === t ? void 0 : t.call(n)) && void 0 !== s ? s : "#000"),
      _ = (0, u.hex2int)(m),
      h = (0, u.hex2int)(T);
    for (let e = 1; e < 8 && !((0, u.getDarkness)(_) >= .725); e++) _ = l()(_).darken(.5).num();
    for (let e = 1; e < 8 && !((0, u.getDarkness)(h) >= .725); e++) h = l()(h).darken(.5).num();
    let v = (0, u.int2hex)(_);
    return {
      primaryColor: v,
      secondaryColor: (0, u.int2hex)(h)
    }
  };
t.default = e => {
  var t, r, i, o, f, E;
  let m;
  m = a("481060").tokens;
  let T = (0, s.useStateFromStores)([d.default], () => d.default.saturation),
    [_, h] = (0, c.useAvatarColors)(e, null !== (E = null == m ? void 0 : null === (f = m.colors) || void 0 === f ? void 0 : null === (o = f.BACKGROUND_FLOATING) || void 0 === o ? void 0 : null === (i = o.resolve) || void 0 === i ? void 0 : null === (r = i.call(o, {
      theme: g.ThemeTypes.DARK,
      saturation: T
    })) || void 0 === r ? void 0 : null === (t = r.hex) || void 0 === t ? void 0 : t.call(r)) && void 0 !== E ? E : "#000");
  return n.useMemo(() => {
    let e = (0, u.hex2int)(_),
      t = (0, u.hex2int)(h);
    for (let t = 1; t < 8 && !((0, u.getDarkness)(e) >= .725); t++) e = l()(e).darken(.5).num();
    for (let e = 1; e < 8 && !((0, u.getDarkness)(t) >= .725); e++) t = l()(t).darken(.5).num();
    let a = (0, u.int2hex)(e);
    return {
      primaryColor: a,
      secondaryColor: (0, u.int2hex)(t)
    }
  }, [_, h])
}