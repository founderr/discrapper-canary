n(47120);
var r = n(192379),
    i = n(688619),
    a = n.n(i);
n(979590);
var s = n(442837),
    o = n(866442),
    l = n(607070),
    u = n(220082),
    c = n(981631);
t.Z = (e) => {
    var t, i, d, _, E, f;
    let h;
    h = n(481060).tokens;
    let p = (0, s.e7)([l.Z], () => l.Z.saturation),
        [I, m] = (0, u.Cf)(
            e,
            null !==
                (f =
                    null == h
                        ? void 0
                        : null === (E = h.colors) || void 0 === E
                          ? void 0
                          : null === (_ = E.BACKGROUND_FLOATING) || void 0 === _
                            ? void 0
                            : null === (d = _.resolve) || void 0 === d
                              ? void 0
                              : null ===
                                      (i = d.call(_, {
                                          theme: c.BRd.DARK,
                                          saturation: p
                                      })) || void 0 === i
                                ? void 0
                                : null === (t = i.hex) || void 0 === t
                                  ? void 0
                                  : t.call(i)) && void 0 !== f
                ? f
                : '#000'
        );
    return r.useMemo(() => {
        let e = (0, o._i)(I),
            t = (0, o._i)(m);
        for (let t = 1; t < 8 && !((0, o.Bd)(e) >= 0.725); t++) {
            e = a()(e).darken(0.5).num();
        }
        for (let e = 1; e < 8 && !((0, o.Bd)(t) >= 0.725); e++) {
            t = a()(t).darken(0.5).num();
        }
        let n = (0, o.Rf)(e);
        return {
            primaryColor: n,
            secondaryColor: (0, o.Rf)(t)
        };
    }, [I, m]);
};
