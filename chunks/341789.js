n.d(t, {
    Z: function () {
        return T;
    }
});
var i = n(735250),
    a = n(470079),
    s = n(442837),
    r = n(212093),
    l = n(683301),
    o = n(823379),
    c = n(900849),
    d = n(571457),
    u = n(766219),
    _ = n(756101),
    E = n(871348),
    h = n(705063),
    m = n(49898);
let I = [];
function g(e) {
    let { onScroll: t, onGuildCardSeen: n, onGuildCardClick: o } = e,
        c = (0, s.Wu)([l.ZP], () => {
            var e, t;
            return null !== (t = null === (e = l.ZP.getDiscoverableGuilds().featured) || void 0 === e ? void 0 : e.guilds) && void 0 !== t ? t : I;
        });
    return (
        a.useEffect(() => {
            (0, r.$z)(0, 30);
        }, []),
        (0, i.jsx)(_.Z, {
            tab: m.vf.FEATURED,
            guilds: c,
            onScroll: t,
            onGuildCardSeen: n,
            onGuildCardClick: o
        })
    );
}
function p(e) {
    let { tab: t, onScroll: n, onGuildCardSeen: o, onGuildCardClick: c } = e,
        d = (0, u.lg)(t),
        E = (0, s.Wu)([l.ZP], () => {
            var e, t;
            return null !== (t = null === (e = l.ZP.getDiscoverableGuilds()[d]) || void 0 === e ? void 0 : e.guilds) && void 0 !== t ? t : I;
        });
    return (
        a.useEffect(() => {
            (0, r.K5)(d);
        }, [d]),
        (0, i.jsx)(_.Z, {
            tab: t,
            guilds: E,
            onScroll: n,
            onGuildCardSeen: o,
            onGuildCardClick: c
        })
    );
}
function T(e) {
    let { loadId: t, selectedTab: n, onScroll: r, onGuildCardSeen: _, onGuildCardClick: I } = e,
        T = (0, u.lg)(n),
        f = (0, s.e7)([l.ZP], () => l.ZP.isFetching()),
        S = (0, s.Wu)([l.ZP], () => l.ZP.getDiscoverableGuilds().featured.guilds),
        C = (0, s.Wu)([l.ZP], () => l.ZP.getDiscoverableGuilds().gamesYouPlay.guilds),
        N = a.useRef(f);
    switch (
        (a.useEffect(() => {
            N.current !== f &&
                !f &&
                c.Zt({
                    allGuilds: S,
                    loadId: t,
                    gamesYouPlayGuilds: C,
                    categoryId: T
                }),
                (N.current = f);
        }, [S, T, C, f, t]),
        a.useEffect(() => {
            (0, d.k)({ selectedCategoryId: T });
        }, [T]),
        n)
    ) {
        case m.vf.FEATURED:
            return (0, i.jsx)(g, {
                tab: n,
                onScroll: r,
                onGuildCardClick: I,
                onGuildCardSeen: _
            });
        case m.vf.GAMING:
        case m.vf.MUSIC:
        case m.vf.ENTERTAINMENT:
        case m.vf.TECH:
        case m.vf.EDUCATION:
            return (0, i.jsx)(
                p,
                {
                    tab: n,
                    onScroll: r,
                    onGuildCardClick: I,
                    onGuildCardSeen: _
                },
                n
            );
        case m.vf.HUBS:
            return (0, i.jsx)(h.X, {
                onScroll: r,
                loadId: t
            });
        case m.vf.GUILDS:
            return (0, i.jsx)(E.U, { onScroll: r });
        default:
            (0, o.vE)(n);
    }
}
