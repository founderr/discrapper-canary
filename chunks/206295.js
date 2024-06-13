"use strict";
n.r(t), n.d(t, {
  getHeroColors: function() {
    return m
  }
}), n("47120");
var a = n("470079"),
  r = n("688619"),
  l = n.n(r),
  i = n("979590"),
  o = n.n(i),
  s = n("442837"),
  u = n("866442"),
  d = n("607070"),
  c = n("220082"),
  g = n("981631");
let f = (e, t) => {
    let n = d.default.desaturateUserColors ? d.default.saturation : 1,
      a = c.useColorStore.getState().palette[e],
      r = null == a ? void 0 : a.map(e => {
        let [t, a, r] = e, {
          h: l,
          s: i,
          l: s
        } = o()({
          r: t,
          g: a,
          b: r
        }).toHsl();
        return o()({
          h: l,
          s: i * n,
          l: s
        }).toHexString()
      });
    return null != r ? r : [t, t]
  },
  m = e => {
    var t, a, r, i, o, s;
    let c;
    c = n("481060").tokens;
    let m = d.default.saturation,
      [E, T] = f(e, null !== (s = null == c ? void 0 : null === (o = c.colors) || void 0 === o ? void 0 : null === (i = o.BACKGROUND_FLOATING) || void 0 === i ? void 0 : null === (r = i.resolve) || void 0 === r ? void 0 : null === (a = r.call(i, {
        theme: g.ThemeTypes.DARK,
        saturation: m
      })) || void 0 === a ? void 0 : null === (t = a.hex) || void 0 === t ? void 0 : t.call(a)) && void 0 !== s ? s : "#000"),
      _ = (0, u.hex2int)(E),
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
  var t, r, i, o, f, m;
  let E;
  E = n("481060").tokens;
  let T = (0, s.useStateFromStores)([d.default], () => d.default.saturation),
    [_, h] = (0, c.useAvatarColors)(e, null !== (m = null == E ? void 0 : null === (f = E.colors) || void 0 === f ? void 0 : null === (o = f.BACKGROUND_FLOATING) || void 0 === o ? void 0 : null === (i = o.resolve) || void 0 === i ? void 0 : null === (r = i.call(o, {
      theme: g.ThemeTypes.DARK,
      saturation: T
    })) || void 0 === r ? void 0 : null === (t = r.hex) || void 0 === t ? void 0 : t.call(r)) && void 0 !== m ? m : "#000");
  return a.useMemo(() => {
    let e = (0, u.hex2int)(_),
      t = (0, u.hex2int)(h);
    for (let t = 1; t < 8 && !((0, u.getDarkness)(e) >= .725); t++) e = l()(e).darken(.5).num();
    for (let e = 1; e < 8 && !((0, u.getDarkness)(t) >= .725); e++) t = l()(t).darken(.5).num();
    let n = (0, u.int2hex)(e);
    return {
      primaryColor: n,
      secondaryColor: (0, u.int2hex)(t)
    }
  }, [_, h])
}