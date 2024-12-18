n(47120);
var r = n(200651);
n(192379);
var a = n(120356),
    i = n.n(a),
    l = n(180650),
    s = n(960048),
    o = n(381585),
    c = n(597688),
    d = n(606414),
    u = n(788822),
    m = n(215023),
    h = n(388032),
    p = n(218142);
t.Z = (e) => {
    let { isLoading: t, handleTransition: n, categories: a } = e,
        g = (0, d.c)('CollectiblesFeedShop') && null != c.Z.getCategory(l.T.ROBERT);
    if (a.length < 2) return s.Z.captureMessage('Collectible Featured Block requires at least 2 categories'), null;
    let [f, C] = a;
    if (t)
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)('div', {
                    className: i()(p.skeleton, p.featuredBlock),
                    children: (0, r.jsx)('div', { className: p.skeletonBody })
                }),
                (0, r.jsx)('div', {
                    className: i()(p.skeleton, p.featuredBlock),
                    children: (0, r.jsx)('div', { className: p.skeletonBody })
                })
            ]
        });
    let v = (null == f ? void 0 : f.unpublishedAt) != null ? h.intl.string(h.t['h/uBCQ']) : void 0,
        b = h.intl.string(new Date() > m.gJ ? h.t.l0CjbW : h.t.uPewb2),
        x = g ? b : h.intl.string(h.t['o/oRJC']);
    return (0, r.jsx)('div', {
        className: i()(p.section, p.col2, p.featuredBlocksContainer),
        children: (0, r.jsxs)(o.k0, {
            newValue: {
                categoryPosition: 1,
                pageSection: 'featured_block'
            },
            children: [
                null != f &&
                    (0, r.jsx)(u.q, {
                        category: f,
                        badgeText: v,
                        handleTransition: n
                    }),
                null != C &&
                    (0, r.jsx)(u.q, {
                        category: C,
                        badgeText: x,
                        handleTransition: n
                    })
            ]
        })
    });
};
