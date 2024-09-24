n.d(t, {
    Z: function () {
        return h;
    }
}),
    n(653041);
var i = n(735250),
    a = n(470079),
    s = n(481060),
    r = n(229765),
    l = n(17845),
    o = n(374939),
    c = n(283293),
    d = n(726115),
    u = n(294330),
    _ = n(482543),
    E = n(417712);
function h(e) {
    let { tab: t, guildIds: n, loading: h, onScroll: m, onGuildCardClick: I, onGuildCardSeen: g } = e,
        p = (0, d.Mf)(t),
        T = (0, d.a$)(t),
        f = (0, d.QW)(t),
        S = (0, d.lg)(t),
        C = (0, _.p)(),
        N = a.useMemo(() => {
            let e = h ? 30 : n.length,
                t = [];
            for (let s = 0; s < e; s++) {
                var a;
                t.push(
                    (0, i.jsx)(u.Eo, {
                        guildId: null !== (a = n[s]) && void 0 !== a ? a : null,
                        index: s,
                        onClick: (e) => I(e, s, S),
                        onView: (e) => g(e, S)
                    })
                );
            }
            return t;
        }, [S, n, h, I, g]);
    return (0, i.jsxs)(c.Z, {
        onScroll: m,
        children: [
            (0, i.jsx)(l.Z, {
                title: p,
                description: T,
                className: C
            }),
            (0, i.jsxs)(o.Z, {
                children: [
                    (0, i.jsx)(r.KY, {
                        location: 'global_discovery',
                        query: t
                    }),
                    (0, i.jsx)(s.Heading, {
                        className: E.sectionTitle,
                        variant: 'heading-lg/semibold',
                        color: 'header-primary',
                        children: f
                    }),
                    (0, i.jsx)('div', {
                        className: E.content,
                        children: N
                    })
                ]
            })
        ]
    });
}
