var i = n(200651),
    r = n(192379),
    l = n(442837),
    a = n(481060),
    s = n(894653),
    o = n(34674),
    c = n(388032),
    d = n(207876),
    u = n(882008);
t.Z = function (e) {
    let { selectedCategoryId: t, searchAllCategories: n } = e,
        h = (0, l.e7)([s.Z], () => s.Z.getCategories()),
        m = r.useMemo(() => {
            var e;
            return null === (e = h.find((e) => e.id === t)) || void 0 === e ? void 0 : e.name;
        }, [h, t]),
        p = t === o.MU || null == m ? c.intl.string(c.t['FVJt+/']) : c.intl.formatToPlainString(c.t.FjCaND, { categoryName: m }),
        g = t === o.MU ? c.intl.string(c.t.GXiMtb) : c.intl.format(c.t.JaLoFB, { onClick: n });
    return (0, i.jsxs)('div', {
        className: d.container,
        children: [
            (0, i.jsx)('img', {
                alt: '',
                src: u,
                className: d.image
            }),
            (0, i.jsx)(a.Heading, {
                variant: 'heading-xl/semibold',
                className: d.header,
                children: p
            }),
            (0, i.jsx)(a.Text, {
                variant: 'text-md/normal',
                color: 'header-secondary',
                children: g
            })
        ]
    });
};
