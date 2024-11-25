i.d(t, {
    Z: function () {
        return _;
    }
}),
    i(47120);
var n = i(200651),
    a = i(192379),
    r = i(481060),
    o = i(626135),
    l = i(34674),
    s = i(190733),
    c = i(132871),
    d = i(147890),
    u = i(981631),
    h = i(388032),
    p = i(384552),
    m = i(943935);
function _() {
    let e = (0, c.useApplicationDirectoryHistory)((e) => e.guildId),
        [t, i] = a.useState(''),
        _ = a.useCallback(() => {
            let i = (0, l.KQ)();
            o.default.track(u.rMx.APP_DIRECTORY_SEARCH_STARTED, {
                search_term: t,
                category: i.name,
                current_page: c.ApplicationDirectoryViews.HOME,
                category_id: i.id,
                guild_id: e
            }),
                (0, d.goSearch)({ query: t });
        }, [e, t]);
    return (0, n.jsxs)('div', {
        className: p.container,
        children: [
            (0, n.jsxs)('div', {
                className: p.searchBarContainer,
                children: [
                    (0, n.jsx)(r.Heading, {
                        variant: 'display-lg',
                        className: p.heading,
                        children: h.intl.string(h.t['n61/Q0'])
                    }),
                    (0, n.jsx)(s.Z, {
                        className: p.searchBar,
                        query: t,
                        onChange: i,
                        onSubmit: _,
                        canShowCta: !0
                    })
                ]
            }),
            (0, n.jsx)('img', {
                src: m,
                alt: '',
                className: p.rightImage
            })
        ]
    });
}
