n.d(t, {
    Z: function () {
        return E;
    }
}),
    n(653041);
var i = n(735250),
    a = n(470079),
    s = n(481060),
    r = n(229765),
    l = n(322665),
    o = n(17845),
    c = n(374939),
    d = n(283293),
    u = n(726115),
    _ = n(294330),
    h = n(417712);
function E(e) {
    let { tab: t, guildIds: n, loading: E, onScroll: m, onGuildCardClick: I, onGuildCardSeen: g } = e,
        p = (0, u.Mf)(t),
        T = (0, u.a$)(t),
        S = (0, u.QW)(t),
        f = (0, u.lg)(t),
        C = a.useMemo(() => {
            let e = E ? 30 : n.length,
                t = [];
            for (let s = 0; s < e; s++) {
                var a;
                t.push(
                    (0, i.jsx)(_.Eo, {
                        guildId: null !== (a = n[s]) && void 0 !== a ? a : null,
                        index: s,
                        onClick: (e) => I(e, s, f),
                        onView: (e) => g(e, f)
                    })
                );
            }
            return t;
        }, [f, n, E, I, g]);
    return (0, i.jsxs)(d.Z, {
        onScroll: m,
        children: [
            (0, i.jsx)(o.Z, {
                title: p,
                description: T,
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
                        children: S
                    }),
                    (0, i.jsx)('div', {
                        className: h.content,
                        children: C
                    })
                ]
            })
        ]
    });
}
