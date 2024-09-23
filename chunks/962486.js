n.d(t, {
    Z: function () {
        return E;
    }
});
var i = n(735250);
n(470079);
var a = n(481060),
    s = n(229765),
    r = n(17845),
    l = n(374939),
    o = n(283293),
    c = n(726115),
    d = n(294330),
    u = n(482543),
    _ = n(417712);
function E(e) {
    let { tab: t, guildIds: n, onScroll: E, onGuildCardClick: h, onGuildCardSeen: m } = e,
        I = (0, c.Mf)(t),
        g = (0, c.a$)(t),
        p = (0, c.QW)(t),
        T = (0, c.lg)(t),
        S = (0, u.p)();
    return (0, i.jsxs)(o.Z, {
        onScroll: E,
        children: [
            (0, i.jsx)(r.Z, {
                title: I,
                description: g,
                className: S
            }),
            (0, i.jsxs)(l.Z, {
                children: [
                    (0, i.jsx)(s.KY, {
                        location: 'global_discovery',
                        query: t
                    }),
                    (0, i.jsx)(a.Heading, {
                        className: _.sectionTitle,
                        variant: 'heading-lg/semibold',
                        color: 'header-primary',
                        children: p
                    }),
                    (0, i.jsx)('div', {
                        className: _.content,
                        children: n.map((e, t) =>
                            (0, i.jsx)(
                                d.Z,
                                {
                                    guildId: e,
                                    onClick: (e) => h(e, t, T),
                                    onView: (e) => m(e, T)
                                },
                                e
                            )
                        )
                    })
                ]
            })
        ]
    });
}
