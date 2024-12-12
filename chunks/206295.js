var i = r(47120);
var a = r(192379),
    s = r(688619),
    o = r.n(s),
    l = r(979590);
var u = r(442837),
    c = r(866442),
    d = r(607070),
    f = r(220082),
    _ = r(981631);
let h = 8,
    p = 0.725,
    m = (e, n) => {
        let r = AccessibilityStore.desaturateUserColors ? AccessibilityStore.saturation : 1,
            i = useColorStore.getState().palette[e],
            a =
                null == i
                    ? void 0
                    : i.map((e) => {
                          let [n, i, a] = e,
                              {
                                  h: s,
                                  s: o,
                                  l
                              } = tinycolor({
                                  r: n,
                                  g: i,
                                  b: a
                              }).toHsl();
                          return tinycolor({
                              h: s,
                              s: o * r,
                              l
                          }).toHexString();
                      });
        return null != a ? a : [n, n];
    },
    g = (e) => {
        var n, i, s, l, m, g;
        let E;
        E = r(481060).tokens;
        let v = (0, u.e7)([d.Z], () => d.Z.saturation),
            [I, T] = (0, f.Cf)(
                e,
                null !==
                    (g =
                        null == E
                            ? void 0
                            : null === (m = E.colors) || void 0 === m
                              ? void 0
                              : null === (l = m.BACKGROUND_FLOATING) || void 0 === l
                                ? void 0
                                : null === (s = l.resolve) || void 0 === s
                                  ? void 0
                                  : null ===
                                          (i = s.call(l, {
                                              theme: _.BRd.DARK,
                                              saturation: v
                                          })) || void 0 === i
                                    ? void 0
                                    : null === (n = i.hex) || void 0 === n
                                      ? void 0
                                      : n.call(i)) && void 0 !== g
                    ? g
                    : '#000'
            );
        return a.useMemo(() => {
            let e = (0, c._i)(I),
                n = (0, c._i)(T);
            for (let n = 1; n < h && !((0, c.Bd)(e) >= p); n++) {
                e = o()(e).darken(0.5).num();
            }
            for (let e = 1; e < h && !((0, c.Bd)(n) >= p); e++) {
                n = o()(n).darken(0.5).num();
            }
            let r = (0, c.Rf)(e);
            return {
                primaryColor: r,
                secondaryColor: (0, c.Rf)(n)
            };
        }, [I, T]);
    };
n.Z = g;
