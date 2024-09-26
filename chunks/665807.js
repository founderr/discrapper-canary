var i = n(735250),
    a = n(470079),
    s = n(442837),
    r = n(481060),
    l = n(150192),
    o = n(164991),
    c = n(726115),
    d = n(731455),
    u = n(689938),
    _ = n(501612),
    h = n(882008);
t.Z = function (e) {
    let { loadId: t } = e,
        n = (0, o.lZ)(),
        E = (0, s.e7)([l.Z], () => l.Z.getCategoryName(n)),
        m = a.useCallback(() => {
            (0, c.XW)({
                loadId: t,
                categoryId: d.Hk,
                searchQuery: (0, o.uP)(),
                languageCode: (0, o.a7)()
            });
        }, [t]),
        I = n === d.Hk ? u.Z.Messages.GUILD_DISCOVERY_SEARCH_EMPTY_HEADER : u.Z.Messages.GUILD_DISCOVERY_SEARCH_EMPTY_CATEGORY_HEADER.format({ categoryName: E }),
        g = n === d.Hk ? u.Z.Messages.GUILD_DISCOVERY_SEARCH_EMPTY_BODY : u.Z.Messages.GUILD_DISCOVERY_SEARCH_EMPTY_CATEGORY_BODY.format({ onClick: m });
    return (0, i.jsxs)('div', {
        className: _.container,
        children: [
            (0, i.jsx)('img', {
                alt: '',
                src: h,
                className: _.image
            }),
            (0, i.jsx)(r.Heading, {
                variant: 'heading-xl/semibold',
                className: _.header,
                children: I
            }),
            (0, i.jsx)(r.Text, {
                variant: 'text-md/normal',
                color: 'header-secondary',
                children: g
            })
        ]
    });
};
