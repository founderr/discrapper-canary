var n = r(735250),
    a = r(470079),
    s = r(120356),
    o = r.n(s),
    i = r(399606),
    l = r(376345),
    c = r(607070),
    d = r(302221),
    u = r(884697),
    f = r(372654),
    g = r(689380);
t.Z = (e) => {
    let { asset: t, size: r = f.yV, className: s, style: p, children: v, categoryBannerOverride: C } = e,
        m = (0, i.e7)([c.Z], () => c.Z.saturation),
        E = a.useMemo(() => {
            if (null == t) return p;
            let e = (0, u.uV)(t, {
                    size: r,
                    format: 'jpg'
                }),
                n = (null == C ? void 0 : C.blur)
                    ? {
                          filter: 'blur(2px)',
                          transform: 'scale(1.02)'
                      }
                    : {};
            if (1 === m)
                return {
                    ...p,
                    backgroundImage: (null == C ? void 0 : C.addGradient) ? 'url('.concat(e, '), linear-gradient(180deg, rgba(0, 71, 94, 0.6) 5%, rgba(9, 33, 65, 0.6) 95%)') : 'url('.concat(e, ')'),
                    backgroundBlendMode: 'multiply',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    ...n
                };
            let a = (0, d.aD)(l.ZP.unsafe_rawColors.BLACK_500, 1 - m);
            return {
                ...p,
                backgroundImage: 'linear-gradient('.concat(a, ', ').concat(a, '), url(').concat(e, ')'),
                backgroundBlendMode: 'saturation',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                ...n
            };
        }, [t, r, m, p, null == C ? void 0 : C.blur, null == C ? void 0 : C.addGradient]);
    return (0, n.jsx)('div', {
        className: o()(g.banner, s),
        style: E,
        children: v
    });
};
