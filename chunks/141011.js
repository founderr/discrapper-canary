var r = n(200651),
    a = n(192379),
    i = n(120356),
    o = n.n(i),
    s = n(399606),
    l = n(376345),
    c = n(607070),
    d = n(302221),
    u = n(884697),
    f = n(372654),
    g = n(450957);
e.Z = (t) => {
    let { asset: e, size: n = f.yV, className: i, style: p, children: h, categoryBannerOverride: b } = t,
        m = (0, s.e7)([c.Z], () => c.Z.saturation),
        v = a.useMemo(() => {
            if (null == e) return p;
            let t = (0, u.uV)(e, {
                    size: n,
                    format: 'jpg'
                }),
                r = (null == b ? void 0 : b.blur)
                    ? {
                          filter: 'blur(2px)',
                          transform: 'scale(1.02)'
                      }
                    : {};
            if (1 === m)
                return {
                    ...p,
                    backgroundImage: (null == b ? void 0 : b.addGradient) ? 'url('.concat(t, '), linear-gradient(180deg, rgba(0, 71, 94, 0.6) 5%, rgba(9, 33, 65, 0.6) 95%)') : 'url('.concat(t, ')'),
                    backgroundBlendMode: 'multiply',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    ...r
                };
            let a = (0, d.aD)(l.ZP.unsafe_rawColors.BLACK_500, 1 - m);
            return {
                ...p,
                backgroundImage: 'linear-gradient('.concat(a, ', ').concat(a, '), url(').concat(t, ')'),
                backgroundBlendMode: 'saturation',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                ...r
            };
        }, [e, n, m, p, null == b ? void 0 : b.blur, null == b ? void 0 : b.addGradient]);
    return (0, r.jsx)('div', {
        className: o()(g.banner, i),
        style: v,
        children: h
    });
};
