n.d(t, {
    Z: function () {
        return u;
    }
});
var i = n(735250);
n(470079);
var a = n(481060),
    s = n(229765),
    r = n(374939),
    l = n(726115),
    o = n(294330),
    c = n(481685),
    d = n(417712);
function u(e) {
    let { tab: t, guildIds: n, onScroll: u, onGuildCardClick: _, onGuildCardSeen: E } = e,
        h = (0, l.Mf)(t),
        m = (0, l.a$)(t),
        I = (0, l.QW)(t),
        g = (0, l.lg)(t);
    return (0, i.jsxs)(r.Z, {
        title: h,
        description: m,
        onScroll: u,
        bannerBackground: (0, i.jsx)(c.Z, {}),
        children: [
            (0, i.jsx)(s.KY, {
                location: 'global_discovery',
                query: t
            }),
            (0, i.jsx)(a.Heading, {
                className: d.sectionTitle,
                variant: 'heading-lg/semibold',
                color: 'header-primary',
                children: I
            }),
            (0, i.jsx)('div', {
                className: d.content,
                children: n.map((e, t) =>
                    (0, i.jsx)(
                        o.Z,
                        {
                            guildId: e,
                            onClick: (e) => _(e, t, g),
                            onView: (e) => E(e, g)
                        },
                        e
                    )
                )
            })
        ]
    });
}
