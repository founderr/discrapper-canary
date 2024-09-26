n.d(t, {
    Z: function () {
        return g;
    }
});
var i = n(735250),
    a = n(470079),
    s = n(442837),
    r = n(571457),
    l = n(823379),
    o = n(762692),
    c = n(356164),
    d = n(726115),
    u = n(962486),
    _ = n(62938),
    h = n(149788),
    E = n(128449);
function m(e) {
    let { onScroll: t, onGuildCardSeen: n, onGuildCardClick: r } = e,
        l = (0, d.sS)(),
        _ = (0, s.e7)([c.Z], () => {
            var e;
            return null !== (e = c.Z.getGuildIds(l)) && void 0 !== e ? e : E.q5;
        }),
        h = (0, s.e7)([c.Z], () => {
            var e;
            return null === (e = c.Z.getIsFetching(l)) || void 0 === e || e;
        });
    return (
        a.useEffect(() => {
            o.Z.fetchFeaturedGuilds();
        }, []),
        (0, i.jsx)(u.Z, {
            tab: E.vf.FEATURED,
            guildIds: _,
            loading: h,
            onScroll: t,
            onGuildCardSeen: n,
            onGuildCardClick: r
        })
    );
}
function I(e) {
    let { tab: t, onScroll: n, onGuildCardSeen: r, onGuildCardClick: l } = e,
        _ = (0, d.lg)(t),
        h = (0, d.Io)({ categoryId: _ }),
        m = (0, s.e7)([c.Z], () => {
            var e;
            return null !== (e = c.Z.getGuildIds(h)) && void 0 !== e ? e : E.q5;
        }),
        I = (0, s.e7)([c.Z], () => {
            var e;
            return null === (e = c.Z.getIsFetching(h)) || void 0 === e || e;
        });
    return (
        a.useEffect(() => {
            o.Z.fetchCategoryFeaturedGuilds({ categoryId: _ });
        }, [_]),
        (0, i.jsx)(u.Z, {
            tab: t,
            guildIds: m,
            loading: I,
            onScroll: n,
            onGuildCardSeen: r,
            onGuildCardClick: l
        })
    );
}
function g(e) {
    let { loadId: t, selectedTab: n, onScroll: s, onGuildCardSeen: o, onGuildCardClick: c } = e;
    switch (
        (a.useEffect(() => {
            let e = (0, d.lg)(n);
            (0, r.kR)({ selectedCategoryId: e });
        }, [n]),
        n)
    ) {
        case E.vf.FEATURED:
            return (0, i.jsx)(m, {
                tab: n,
                onScroll: s,
                onGuildCardClick: c,
                onGuildCardSeen: o
            });
        case E.vf.GAMING:
        case E.vf.MUSIC:
        case E.vf.ENTERTAINMENT:
        case E.vf.TECH:
        case E.vf.EDUCATION:
            return (0, i.jsx)(
                I,
                {
                    tab: n,
                    onScroll: s,
                    onGuildCardClick: c,
                    onGuildCardSeen: o
                },
                n
            );
        case E.vf.HUBS:
            return (0, i.jsx)(h.X, {
                onScroll: s,
                loadId: t
            });
        case E.vf.GUILDS:
            return (0, i.jsx)(_.U, { onScroll: s });
        default:
            (0, l.vE)(n);
    }
}
