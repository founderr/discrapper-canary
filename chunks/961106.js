i.d(t, {
    Z: function () {
        return x;
    }
}),
    i(47120),
    i(610138),
    i(216116),
    i(78328),
    i(815648);
var n = i(735250),
    a = i(470079),
    r = i(120356),
    s = i.n(r),
    o = i(399606),
    l = i(481060),
    c = i(626135),
    d = i(463571),
    u = i(894653),
    h = i(34674),
    _ = i(132871),
    p = i(147890),
    m = i(981631),
    g = i(689938),
    C = i(583138);
function x(e) {
    let { className: t } = e,
        i = (0, _.useApplicationDirectoryHistory)((e) => e.guildId),
        r = (0, o.e7)([u.Z], () => u.Z.getCategories()),
        x = a.useMemo(() => [(0, h.KQ)(), ...r], [r]),
        f = (0, _.getCurrentView)(),
        I = (e) => {
            let t = x.find((t) => t.id === e);
            c.default.track(m.rMx.APP_DIRECTORY_CATEGORY_CLICKED, {
                category: t.name,
                category_id: t.id,
                current_page: null == f ? void 0 : f.type,
                guild_id: i
            }),
                (0, p.goToCategory)({ categoryId: t.id });
        };
    return (0, n.jsx)('nav', {
        className: s()(C.container, t),
        children: x.map((e) => {
            let t = e.id,
                i = e.name,
                a = (0, h.tu)(e),
                r = new URLSearchParams();
            return (
                r.set('category_id', t.toString()),
                (0, n.jsx)(
                    d.Z,
                    {
                        href: ''.concat(m.Z5c.APPLICATION_DIRECTORY_SEARCH, '?').concat(r),
                        children: (0, n.jsxs)(l.Clickable, {
                            className: C.category,
                            'aria-label': g.Z.Messages.APP_DIRECTORY_CATEGORY_BUTTON_A11Y_LABEL.format({ categoryName: i }),
                            onClick: () => I(t),
                            children: [
                                (0, n.jsx)(a, {
                                    className: C.icon,
                                    size: 'md',
                                    color: 'currentColor'
                                }),
                                (0, n.jsx)(l.Text, {
                                    variant: 'text-md/normal',
                                    children: i
                                })
                            ]
                        })
                    },
                    t
                )
            );
        })
    });
}
