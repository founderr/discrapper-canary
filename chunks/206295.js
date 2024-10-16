a(47120);
var t = a(470079),
    r = a(688619),
    s = a.n(r);
a(979590);
var i = a(442837),
    o = a(866442),
    l = a(607070),
    c = a(220082),
    d = a(981631);
n.Z = (e) => {
    var n, r, u, _, E, m;
    let I;
    I = a(481060).tokens;
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
                                : null === (n = r.hex) || void 0 === n
                                  ? void 0
                                  : n.call(r)) && void 0 !== m
                ? m
                : '#000'
        );
    return t.useMemo(() => {
        let e = (0, o._i)(p),
            n = (0, o._i)(g);
        for (let n = 1; n < 8 && !((0, o.Bd)(e) >= 0.725); n++) {
            e = s()(e).darken(0.5).num();
        }
        for (let e = 1; e < 8 && !((0, o.Bd)(n) >= 0.725); e++) {
            n = s()(n).darken(0.5).num();
        }
        let a = (0, o.Rf)(e);
        return {
            primaryColor: a,
            secondaryColor: (0, o.Rf)(n)
        };
    }, [p, g]);
};
