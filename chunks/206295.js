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
    var t, i, d, f, _, h;
    let p;
    p = n(481060).tokens;
    let m = (0, s.e7)([l.Z], () => l.Z.saturation),
        [g, E] = (0, u.Cf)(
            e,
            null !==
                (h =
                    null == p
                        ? void 0
                        : null === (_ = p.colors) || void 0 === _
                          ? void 0
                          : null === (f = _.BACKGROUND_FLOATING) || void 0 === f
                            ? void 0
                            : null === (d = f.resolve) || void 0 === d
                              ? void 0
                              : null ===
                                      (i = d.call(f, {
                                          theme: c.BRd.DARK,
                                          saturation: m
                                      })) || void 0 === i
                                ? void 0
                                : null === (t = i.hex) || void 0 === t
                                  ? void 0
                                  : t.call(i)) && void 0 !== h
                ? h
                : '#000'
        );
    return r.useMemo(() => {
        let e = (0, o._i)(g),
            t = (0, o._i)(E);
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
    }, [g, E]);
};
