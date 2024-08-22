t(47120);
var i = t(470079),
    l = t(688619),
    r = t.n(l);
t(979590);
var o = t(442837),
    a = t(866442),
    u = t(607070),
    c = t(220082),
    d = t(981631);
e.Z = (n) => {
    var e, l, s, C, h, f;
    let p;
    p = t(481060).tokens;
    let v = (0, o.e7)([u.Z], () => u.Z.saturation),
        [_, m] = (0, c.Cf)(
            n,
            null !==
                (f =
                    null == p
                        ? void 0
                        : null === (h = p.colors) || void 0 === h
                          ? void 0
                          : null === (C = h.BACKGROUND_FLOATING) || void 0 === C
                            ? void 0
                            : null === (s = C.resolve) || void 0 === s
                              ? void 0
                              : null ===
                                      (l = s.call(C, {
                                          theme: d.BRd.DARK,
                                          saturation: v
                                      })) || void 0 === l
                                ? void 0
                                : null === (e = l.hex) || void 0 === e
                                  ? void 0
                                  : e.call(l)) && void 0 !== f
                ? f
                : '#000'
        );
    return i.useMemo(() => {
        let n = (0, a._i)(_),
            e = (0, a._i)(m);
        for (let e = 1; e < 8 && !((0, a.Bd)(n) >= 0.725); e++) {
            n = r()(n).darken(0.5).num();
        }
        for (let n = 1; n < 8 && !((0, a.Bd)(e) >= 0.725); n++) {
            e = r()(e).darken(0.5).num();
        }
        let t = (0, a.Rf)(n);
        return {
            primaryColor: t,
            secondaryColor: (0, a.Rf)(e)
        };
    }, [_, m]);
};
