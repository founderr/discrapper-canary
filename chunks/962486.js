n.d(t, {
    Z: function () {
        return I;
    }
}),
    n(653041);
var i = n(200651),
    a = n(192379),
    s = n(481060),
    r = n(229765),
    l = n(322665),
    o = n(17845),
    c = n(374939),
    d = n(283293),
    u = n(726115),
    _ = n(294330),
    E = n(981631),
    h = n(417712);
let m = {
    page: E.ZY5.GUILD_DISCOVERY,
    object: E.qAy.CARD,
    section: E.jXE.DISCOVER_POPULAR
};
function I(e) {
    let { tab: t, guildIds: n, loading: E, onScroll: I, onGuildCardClick: p, onGuildCardSeen: g } = e,
        T = (0, u.Mf)(t),
        S = (0, u.a$)(t),
        C = (0, u.QW)(t),
        f = (0, u.lg)(t),
        N = a.useMemo(() => {
            let e = E ? 30 : n.length,
                t = [];
            for (let s = 0; s < e; s++) {
                var a;
                t.push(
                    (0, i.jsx)(
                        _.Eo,
                        {
                            guildId: null !== (a = n[s]) && void 0 !== a ? a : null,
                            index: s,
                            onClick: (e) => p(e, s, f, m),
                            onView: (e) => g(e, f)
                        },
                        n[s]
                    )
                );
            }
            return t;
        }, [f, n, E, p, g]);
    return (0, i.jsxs)(d.Z, {
        onScroll: I,
        children: [
            (0, i.jsx)(o.Z, {
                title: T,
                description: S,
                children: (0, i.jsx)(l.Z, {})
            }),
            (0, i.jsxs)(c.Z, {
                children: [
                    (0, i.jsx)(r.KY, {
                        location: 'global_discovery',
                        query: t
                    }),
                    (0, i.jsx)(s.Heading, {
                        className: h.sectionTitle,
                        variant: 'heading-lg/semibold',
                        color: 'header-primary',
                        children: C
                    }),
                    (0, i.jsx)('div', {
                        className: h.content,
                        children: N
                    })
                ]
            })
        ]
    });
}
