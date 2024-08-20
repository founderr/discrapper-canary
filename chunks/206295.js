n(47120);
var t = n(470079),
    r = n(688619),
    s = n.n(r);
n(979590);
var o = n(442837),
    i = n(866442),
    l = n(607070),
    c = n(220082),
    u = n(981631);
a.Z = (e) => {
    var a, r, _, E, d, I;
    let A;
    A = n(481060).tokens;
    let T = (0, o.e7)([l.Z], () => l.Z.saturation),
        [m, O] = (0, c.Cf)(
            e,
            null !==
                (I =
                    null == A
                        ? void 0
                        : null === (d = A.colors) || void 0 === d
                          ? void 0
                          : null === (E = d.BACKGROUND_FLOATING) || void 0 === E
                            ? void 0
                            : null === (_ = E.resolve) || void 0 === _
                              ? void 0
                              : null ===
                                      (r = _.call(E, {
                                          theme: u.BRd.DARK,
                                          saturation: T
                                      })) || void 0 === r
                                ? void 0
                                : null === (a = r.hex) || void 0 === a
                                  ? void 0
                                  : a.call(r)) && void 0 !== I
                ? I
                : '#000'
        );
    return t.useMemo(() => {
        let e = (0, i._i)(m),
            a = (0, i._i)(O);
        for (let a = 1; a < 8 && !((0, i.Bd)(e) >= 0.725); a++) {
            e = s()(e).darken(0.5).num();
        }
        for (let e = 1; e < 8 && !((0, i.Bd)(a) >= 0.725); e++) {
            a = s()(a).darken(0.5).num();
        }
        let n = (0, i.Rf)(e);
        return {
            primaryColor: n,
            secondaryColor: (0, i.Rf)(a)
        };
    }, [m, O]);
};
