l(47120);
var t = l(470079),
    r = l(688619),
    i = l.n(r);
l(979590);
var a = l(442837),
    s = l(866442),
    u = l(607070),
    o = l(220082),
    c = l(981631);
n.Z = (e) => {
    var n, r, d, m, p, f;
    let E;
    E = l(481060).tokens;
    let N = (0, a.e7)([u.Z], () => u.Z.saturation),
        [C, v] = (0, o.Cf)(
            e,
            null !==
                (f =
                    null == E
                        ? void 0
                        : null === (p = E.colors) || void 0 === p
                          ? void 0
                          : null === (m = p.BACKGROUND_FLOATING) || void 0 === m
                            ? void 0
                            : null === (d = m.resolve) || void 0 === d
                              ? void 0
                              : null ===
                                      (r = d.call(m, {
                                          theme: c.BRd.DARK,
                                          saturation: N
                                      })) || void 0 === r
                                ? void 0
                                : null === (n = r.hex) || void 0 === n
                                  ? void 0
                                  : n.call(r)) && void 0 !== f
                ? f
                : '#000'
        );
    return t.useMemo(() => {
        let e = (0, s._i)(C),
            n = (0, s._i)(v);
        for (let n = 1; n < 8 && !((0, s.Bd)(e) >= 0.725); n++) {
            e = i()(e).darken(0.5).num();
        }
        for (let e = 1; e < 8 && !((0, s.Bd)(n) >= 0.725); e++) {
            n = i()(n).darken(0.5).num();
        }
        let l = (0, s.Rf)(e);
        return {
            primaryColor: l,
            secondaryColor: (0, s.Rf)(n)
        };
    }, [C, v]);
};
