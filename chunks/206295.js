t(47120);
var l = t(470079),
    i = t(688619),
    a = t.n(i);
t(979590);
var r = t(442837),
    o = t(866442),
    s = t(607070),
    c = t(220082),
    u = t(981631);
n.Z = (e) => {
    var n, i, d, m, f, _;
    let p;
    p = t(481060).tokens;
    let C = (0, r.e7)([s.Z], () => s.Z.saturation),
        [h, I] = (0, c.Cf)(
            e,
            null !==
                (_ =
                    null == p
                        ? void 0
                        : null === (f = p.colors) || void 0 === f
                          ? void 0
                          : null === (m = f.BACKGROUND_FLOATING) || void 0 === m
                            ? void 0
                            : null === (d = m.resolve) || void 0 === d
                              ? void 0
                              : null ===
                                      (i = d.call(m, {
                                          theme: u.BRd.DARK,
                                          saturation: C
                                      })) || void 0 === i
                                ? void 0
                                : null === (n = i.hex) || void 0 === n
                                  ? void 0
                                  : n.call(i)) && void 0 !== _
                ? _
                : '#000'
        );
    return l.useMemo(() => {
        let e = (0, o._i)(h),
            n = (0, o._i)(I);
        for (let n = 1; n < 8 && !((0, o.Bd)(e) >= 0.725); n++) {
            e = a()(e).darken(0.5).num();
        }
        for (let e = 1; e < 8 && !((0, o.Bd)(n) >= 0.725); e++) {
            n = a()(n).darken(0.5).num();
        }
        let t = (0, o.Rf)(e);
        return {
            primaryColor: t,
            secondaryColor: (0, o.Rf)(n)
        };
    }, [h, I]);
};
