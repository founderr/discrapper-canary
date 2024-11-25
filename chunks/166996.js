n.d(t, {
    Z: function () {
        return _;
    }
}),
    n(47120),
    n(610138),
    n(216116),
    n(78328),
    n(815648);
var i = n(200651),
    a = n(192379),
    l = n(120356),
    r = n.n(l),
    c = n(399606),
    o = n(481060),
    s = n(626135),
    d = n(463571),
    u = n(894653),
    g = n(34674),
    m = n(132871),
    f = n(981631),
    p = n(533232);
function _(e) {
    let { currentCategoryId: t, className: n, countsByCategory: l, onView: _ } = e,
        h = (0, m.useApplicationDirectoryHistory)((e) => e.guildId),
        x = (0, c.e7)([u.Z], () => u.Z.getCategories()),
        C = a.useMemo(() => [(0, g.KQ)(), ...x], [x]),
        b = (0, m.getCurrentView)();
    return (0, i.jsx)(o.TabBar, {
        className: r()(p.container, n),
        selectedItem: t,
        type: 'top-pill',
        onItemSelect: (e) => {
            if (e === t) return;
            let n = C.find((t) => t.id === e);
            s.default.track(f.rMx.APP_DIRECTORY_CATEGORY_CLICKED, {
                category: n.name,
                category_id: n.id,
                current_page: null == b ? void 0 : b.type,
                guild_id: h
            }),
                _(n);
        },
        orientation: 'vertical',
        children: C.map((e) => {
            var n;
            let a = e.id,
                c = e.name,
                s = (0, g.tu)(e),
                u = r()(p.category, { [p.activeCategory]: t === a }),
                m = new URLSearchParams();
            return (
                m.set('category_id', a.toString()),
                (0, i.jsx)(
                    o.TabBar.Item,
                    {
                        id: a,
                        'aria-label': c,
                        disableItemStyles: !0,
                        children: (0, i.jsxs)(d.Z, {
                            href: ''.concat(f.Z5c.APPLICATION_DIRECTORY_SEARCH, '?').concat(m),
                            className: u,
                            children: [
                                (0, i.jsx)(s, {
                                    className: p.icon,
                                    color: 'currentColor'
                                }),
                                (0, i.jsx)(o.Text, {
                                    variant: 'text-md/normal',
                                    children: c
                                }),
                                null != l
                                    ? (0, i.jsx)(o.Text, {
                                          className: p.count,
                                          variant: 'text-md/normal',
                                          color: 'text-muted',
                                          children: null !== (n = null == l ? void 0 : l[a]) && void 0 !== n ? n : 0
                                      })
                                    : null
                            ]
                        })
                    },
                    a
                )
            );
        })
    });
}
