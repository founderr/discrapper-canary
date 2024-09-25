t.d(n, {
    Z: function () {
        return p;
    }
}),
    t(47120),
    t(610138),
    t(216116),
    t(78328),
    t(815648);
var a = t(735250),
    i = t(470079),
    l = t(120356),
    s = t.n(l),
    r = t(399606),
    c = t(481060),
    o = t(626135),
    d = t(463571),
    u = t(894653),
    _ = t(34674),
    g = t(132871),
    m = t(981631),
    C = t(37381);
function p(e) {
    let { currentCategoryId: n, className: t, countsByCategory: l, onView: p } = e,
        f = (0, g.useApplicationDirectoryHistory)((e) => e.guildId),
        h = (0, r.e7)([u.Z], () => u.Z.getCategories()),
        x = i.useMemo(() => [(0, _.KQ)(), ...h], [h]),
        I = (0, g.getCurrentView)();
    return (0, a.jsx)(c.TabBar, {
        className: s()(C.container, t),
        selectedItem: n,
        type: 'top-pill',
        onItemSelect: (e) => {
            if (e === n) return;
            let t = x.find((n) => n.id === e);
            o.default.track(m.rMx.APP_DIRECTORY_CATEGORY_CLICKED, {
                category: t.name,
                category_id: t.id,
                current_page: null == I ? void 0 : I.type,
                guild_id: f
            }),
                p(t);
        },
        orientation: 'vertical',
        children: x.map((e) => {
            var t;
            let i = e.id,
                r = e.name,
                o = (0, _.tu)(e),
                u = s()(C.category, { [C.activeCategory]: n === i }),
                g = new URLSearchParams();
            return (
                g.set('category_id', i.toString()),
                (0, a.jsx)(
                    c.TabBar.Item,
                    {
                        id: i,
                        'aria-label': r,
                        disableItemStyles: !0,
                        children: (0, a.jsxs)(d.Z, {
                            href: ''.concat(m.Z5c.APPLICATION_DIRECTORY_SEARCH, '?').concat(g),
                            className: u,
                            children: [
                                (0, a.jsx)(o, {
                                    className: C.icon,
                                    color: 'currentColor'
                                }),
                                (0, a.jsx)(c.Text, {
                                    variant: 'text-md/normal',
                                    children: r
                                }),
                                null != l
                                    ? (0, a.jsx)(c.Text, {
                                          className: C.count,
                                          variant: 'text-md/normal',
                                          color: 'text-muted',
                                          children: null !== (t = null == l ? void 0 : l[i]) && void 0 !== t ? t : 0
                                      })
                                    : null
                            ]
                        })
                    },
                    i
                )
            );
        })
    });
}
