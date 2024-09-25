n.d(t, {
    Z: function () {
        return b;
    }
});
var i = n(735250),
    a = n(470079),
    s = n(120356),
    r = n.n(s),
    l = n(143927),
    o = n(481060),
    c = n(827837),
    d = n(963202),
    u = n(117496),
    _ = n(702646),
    E = n(207796),
    h = n(979233),
    m = n(88693),
    I = n(611928),
    g = n(922122),
    p = n(680180),
    T = n(164991),
    S = n(444324),
    f = n(726115),
    C = n(750910),
    N = n(28494),
    A = n(29086),
    v = n(590771),
    Z = n(273596),
    L = n(128449),
    R = n(731455),
    O = n(689938),
    x = n(636872);
function b() {
    let e = a.useRef((0, u.P)()),
        { onScroll: t, scrollPosition: n, resetScrollPosition: s } = (0, h.M)(),
        { tabs: b, selectedTab: P, setSelectedTab: M } = (0, A.Y)(),
        D = (0, f.lg)(P),
        y = !L.MU.has(P),
        j = (0, d.iN)('global_discovery_servers_layout'),
        { searchBarState: U, onTabsAvailableWidthChange: G, onCollapsedSearchBarClick: w, onSearchBarBlur: k, tabsClassName: B } = (0, m.U)({ isSearchBarVisible: y }),
        { searchQuery: H, onSearchTextChange: V, onClearSearch: F, onSearchSubmit: Y, isSearchVisible: z } = (0, N.H)({ loadId: e.current }),
        W = (0, E.GN)((e) => e.mode, l.Z),
        K = a.useCallback(
            (e) => {
                M(e), z && F();
            },
            [z, F, M]
        ),
        q = a.useMemo(
            () =>
                z
                    ? b.filter((e) => {
                          let { id: t } = e;
                          return !L.MU.has(t);
                      })
                    : b,
            [b, z]
        ),
        Q = W === E.v0.SAVED_GUILDS,
        X = a.useRef(new S.Z(D)),
        { onGuildCardSeen: J, onGuildCardClick: $ } = (0, C.H)({
            guildDiscoveryCardSeenManager: X.current,
            loadId: e.current
        });
    a.useEffect(() => {
        X.current.flushSeenGuilds(e.current);
    }, [D]),
        a.useEffect(() => {
            s();
        }, [P, s]),
        a.useEffect(() => {
            !z && (0, T.LD)({ scrollPosition: null });
        }, [z]),
        a.useEffect(() => {
            (0, c.N)();
        }, []);
    let ee = a.useMemo(() => {
        switch (P) {
            case L.vf.HUBS:
                return null;
            case L.vf.GUILDS:
                if (j) return (0, i.jsx)(_.Z, { className: r()(x.clanDiscoveryToolbar, !Q && x.rightAlignedToolbar) });
                return null;
            default:
                return (0, i.jsx)(p.Z, {
                    query: H,
                    placeholder: D === R.Hk ? O.Z.Messages.SEARCH : O.Z.Messages.GLOBAL_DISCOVERY_SEARCH_PLACEHOLDER.format({ title: (0, f.vb)(P) }),
                    onTextChange: V,
                    onClear: F,
                    onSubmit: Y,
                    onCollapsedClick: w,
                    state: U,
                    onBlur: k
                });
        }
    }, [P, j, H, D, V, F, Y, w, U, k, Q]);
    return (0, i.jsxs)('div', {
        className: x.container,
        children: [
            (0, i.jsxs)(I.ZP, {
                className: z ? x.search : void 0,
                children: [
                    !z && (0, i.jsx)(I.z6, { scrollPosition: n }),
                    !Q &&
                        (0, i.jsx)(I.aV, {
                            icon: z ? o.ArrowLargeLeftIcon : o.ServerIcon,
                            onClick: z ? F : void 0
                        }),
                    !Q &&
                        (0, i.jsx)(g.Z, {
                            className: B,
                            tabs: q,
                            selectedTab: z ? null : P,
                            onTabSelect: K,
                            onAvailableWidthChange: G
                        }),
                    ee
                ]
            }),
            z
                ? (0, i.jsx)(Z.Z, {
                      loadId: e.current,
                      onGuildCardClick: $,
                      onGuildCardSeen: J
                  })
                : (0, i.jsx)(v.Z, {
                      loadId: e.current,
                      selectedTab: P,
                      onScroll: t,
                      onGuildCardClick: $,
                      onGuildCardSeen: J
                  })
        ]
    });
}
