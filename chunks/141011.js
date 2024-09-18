var r = n(735250),
    a = n(470079),
    s = n(120356),
    o = n.n(s),
    i = n(399606),
    l = n(376345),
    c = n(607070),
    d = n(302221),
    u = n(884697),
    f = n(372654),
    g = n(689380);
t.Z = (e) => {
    let { asset: t, size: n = f.yV, className: s, style: p, children: v, categoryBannerOverride: C } = e,
        m = (0, i.e7)([c.Z], () => c.Z.saturation),
        E = a.useMemo(() => {
            if (null == t) return p;
            let e = (0, u.uV)(t, {
                    size: n,
                    format: 'jpg'
                }),
                r = (null == C ? void 0 : C.blur)
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
                    ...r
                };
            let a = (0, d.aD)(l.ZP.unsafe_rawColors.BLACK_500, 1 - m);
            return {
                ...p,
                backgroundImage: 'linear-gradient('.concat(a, ', ').concat(a, '), url(').concat(e, ')'),
                backgroundBlendMode: 'saturation',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                ...r
            };
        }, [t, n, m, p, null == C ? void 0 : C.blur, null == C ? void 0 : C.addGradient]);
    return (0, r.jsx)('div', {
        className: o()(g.banner, s),
        style: E,
        children: v
    });
};
