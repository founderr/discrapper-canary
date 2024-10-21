n(47120);
var a = n(192379),
    r = n(688619),
    s = n.n(r);
n(979590);
var i = n(442837),
    o = n(866442),
    l = n(607070),
    c = n(220082),
    d = n(981631);
t.Z = (e) => {
    var t, r, u, _, E, m;
    let I;
    I = n(481060).tokens;
    let A = (0, i.e7)([l.Z], () => l.Z.saturation),
        [p, g] = (0, c.Cf)(
            e,
            null !==
                (m =
                    null == I
                        ? void 0
                        : null === (E = I.colors) || void 0 === E
                          ? void 0
                          : null === (_ = E.BACKGROUND_FLOATING) || void 0 === _
                            ? void 0
                            : null === (u = _.resolve) || void 0 === u
                              ? void 0
                              : null ===
                                      (r = u.call(_, {
                                          theme: d.BRd.DARK,
                                          saturation: A
                                      })) || void 0 === r
                                ? void 0
                                : null === (t = r.hex) || void 0 === t
                                  ? void 0
                                  : t.call(r)) && void 0 !== m
                ? m
                : '#000'
        );
    return a.useMemo(() => {
        let e = (0, o._i)(p),
            t = (0, o._i)(g);
        for (let t = 1; t < 8 && !((0, o.Bd)(e) >= 0.725); t++) {
            e = s()(e).darken(0.5).num();
        }
        for (let e = 1; e < 8 && !((0, o.Bd)(t) >= 0.725); e++) {
            t = s()(t).darken(0.5).num();
        }
        let n = (0, o.Rf)(e);
        return {
            primaryColor: n,
            secondaryColor: (0, o.Rf)(t)
        };
    }, [p, g]);
};
