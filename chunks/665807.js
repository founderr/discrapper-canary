var i = n(200651),
    r = n(192379),
    l = n(442837),
    a = n(481060),
    s = n(150192),
    o = n(959165),
    c = n(164991),
    d = n(731455),
    u = n(388032),
    h = n(548538),
    m = n(882008);
t.Z = function (e) {
    let { loadId: t } = e,
        n = c.Z.useField('categoryId'),
        p = (0, l.e7)([s.Z], () => s.Z.getCategoryName(n)),
        g = r.useCallback(() => {
            c.Z.setState({ categoryId: d.Hk }),
                o.Z.loadCategoryResults({
                    loadId: t,
                    categoryId: d.Hk,
                    query: c.Z.getField('fetchedQuery'),
                    languageCode: c.Z.getField('languageCode')
                });
        }, [t]),
        f = n === d.Hk ? u.intl.string(u.t.Ivw1Ii) : u.intl.formatToPlainString(u.t['+1WAFR'], { categoryName: p }),
        _ = n === d.Hk ? u.intl.string(u.t.aXvEjY) : u.intl.format(u.t.XLioqq, { onClick: g });
    return (0, i.jsxs)('div', {
        className: h.container,
        children: [
            (0, i.jsx)('img', {
                alt: '',
                src: m,
                className: h.image
            }),
            (0, i.jsx)(a.Heading, {
                variant: 'heading-xl/semibold',
                className: h.header,
                children: f
            }),
            (0, i.jsx)(a.Text, {
                variant: 'text-md/normal',
                color: 'header-secondary',
                children: _
            })
        ]
    });
};
