t(47120);
var a = t(470079),
    r = t(688619),
    s = t.n(r);
t(979590);
var i = t(442837),
    o = t(866442),
    l = t(607070),
    c = t(220082),
    d = t(981631);
n.Z = (e) => {
    var n, r, u, _, E, m;
    let I;
    I = t(481060).tokens;
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
    return a.useMemo(() => {
        let e = (0, o._i)(p),
            n = (0, o._i)(g);
        for (let n = 1; n < 8 && !((0, o.Bd)(e) >= 0.725); n++) {
            e = s()(e).darken(0.5).num();
        }
        for (let e = 1; e < 8 && !((0, o.Bd)(n) >= 0.725); e++) {
            n = s()(n).darken(0.5).num();
        }
        let t = (0, o.Rf)(e);
        return {
            primaryColor: t,
            secondaryColor: (0, o.Rf)(n)
        };
    }, [p, g]);
};
