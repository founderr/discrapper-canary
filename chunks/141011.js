var a = n(735250),
    r = n(470079),
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
    let { asset: t, size: n = f.yV, className: s, style: p, children: E, categoryBannerOverride: T } = e,
        C = (0, i.e7)([c.Z], () => c.Z.saturation),
        h = r.useMemo(() => {
            if (null == t) return p;
            let e = (0, u.uV)(t, {
                    size: n,
                    format: 'jpg'
                }),
                a = (null == T ? void 0 : T.blur)
                    ? {
                          filter: 'blur(2px)',
                          transform: 'scale(1.02)'
                      }
                    : {};
            if (1 === C)
                return {
                    ...p,
                    backgroundImage: (null == T ? void 0 : T.addGradient) ? 'url('.concat(e, '), linear-gradient(180deg, rgba(0, 71, 94, 0.6) 5%, rgba(9, 33, 65, 0.6) 95%)') : 'url('.concat(e, ')'),
                    backgroundBlendMode: 'multiply',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    ...a
                };
            let r = (0, d.aD)(l.ZP.unsafe_rawColors.BLACK_500, 1 - C);
            return {
                ...p,
                backgroundImage: 'linear-gradient('.concat(r, ', ').concat(r, '), url(').concat(e, ')'),
                backgroundBlendMode: 'saturation',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                ...a
            };
        }, [t, n, C, p, null == T ? void 0 : T.blur, null == T ? void 0 : T.addGradient]);
    return (0, a.jsx)('div', {
        className: o()(g.banner, s),
        style: h,
        children: E
    });
};
