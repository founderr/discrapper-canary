var r = n(47120);
var i = n(470079),
    a = n(688619),
    o = n.n(a),
    s = n(979590);
var l = n(442837),
    u = n(866442),
    c = n(607070),
    d = n(220082),
    _ = n(981631);
let E = 8,
    f = 0.725,
    h = (e, t) => {
        let n = AccessibilityStore.desaturateUserColors ? AccessibilityStore.saturation : 1,
            r = useColorStore.getState().palette[e],
            i =
                null == r
                    ? void 0
                    : r.map((e) => {
                          let [t, r, i] = e,
                              {
                                  h: a,
                                  s: o,
                                  l: s
                              } = tinycolor({
                                  r: t,
                                  g: r,
                                  b: i
                              }).toHsl();
                          return tinycolor({
                              h: a,
                              s: o * n,
                              l: s
                          }).toHexString();
                      });
        return null != i ? i : [t, t];
    },
    p = (e) => {
        var t, r, a, s, h, p;
        let m;
        m = n(481060).tokens;
        let I = (0, l.e7)([c.Z], () => c.Z.saturation),
            [T, g] = (0, d.Cf)(
                e,
                null !==
                    (p =
                        null == m
                            ? void 0
                            : null === (h = m.colors) || void 0 === h
                              ? void 0
                              : null === (s = h.BACKGROUND_FLOATING) || void 0 === s
                                ? void 0
                                : null === (a = s.resolve) || void 0 === a
                                  ? void 0
                                  : null ===
                                          (r = a.call(s, {
                                              theme: _.BRd.DARK,
                                              saturation: I
                                          })) || void 0 === r
                                    ? void 0
                                    : null === (t = r.hex) || void 0 === t
                                      ? void 0
                                      : t.call(r)) && void 0 !== p
                    ? p
                    : '#000'
            );
        return i.useMemo(() => {
            let e = (0, u._i)(T),
                t = (0, u._i)(g);
            for (let t = 1; t < E && !((0, u.Bd)(e) >= f); t++) {
                e = o()(e).darken(0.5).num();
            }
            for (let e = 1; e < E && !((0, u.Bd)(t) >= f); e++) {
                t = o()(t).darken(0.5).num();
            }
            let n = (0, u.Rf)(e);
            return {
                primaryColor: n,
                secondaryColor: (0, u.Rf)(t)
            };
        }, [T, g]);
    };
t.Z = p;
