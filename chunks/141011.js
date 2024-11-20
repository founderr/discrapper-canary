var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(399606),
    l = n(376345),
    c = n(607070),
    d = n(302221),
    u = n(884697),
    f = n(372654),
    g = n(689380);
e.Z = (t) => {
    let { asset: e, size: n = f.yV, className: a, style: p, children: v, categoryBannerOverride: h } = t,
        b = (0, o.e7)([c.Z], () => c.Z.saturation),
        m = i.useMemo(() => {
            if (null == e) return p;
            let t = (0, u.uV)(e, {
                    size: n,
                    format: 'jpg'
                }),
                r = (null == h ? void 0 : h.blur)
                    ? {
                          filter: 'blur(2px)',
                          transform: 'scale(1.02)'
                      }
                    : {};
            if (1 === b)
                return {
                    ...p,
                    backgroundImage: (null == h ? void 0 : h.addGradient) ? 'url('.concat(t, '), linear-gradient(180deg, rgba(0, 71, 94, 0.6) 5%, rgba(9, 33, 65, 0.6) 95%)') : 'url('.concat(t, ')'),
                    backgroundBlendMode: 'multiply',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    ...r
                };
            let i = (0, d.aD)(l.ZP.unsafe_rawColors.BLACK_500, 1 - b);
            return {
                ...p,
                backgroundImage: 'linear-gradient('.concat(i, ', ').concat(i, '), url(').concat(t, ')'),
                backgroundBlendMode: 'saturation',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                ...r
            };
        }, [e, n, b, p, null == h ? void 0 : h.blur, null == h ? void 0 : h.addGradient]);
    return (0, r.jsx)('div', {
        className: s()(g.banner, a),
        style: m,
        children: v
    });
};
