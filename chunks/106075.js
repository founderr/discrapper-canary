n.d(t, {
    Z: function () {
        return x;
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
    h = n(207796),
    E = n(979233),
    m = n(88693),
    I = n(611928),
    g = n(922122),
    p = n(680180),
    T = n(164991),
    f = n(444324),
    S = n(726115),
    C = n(750910),
    N = n(28494),
    A = n(29086),
    v = n(590771),
    Z = n(273596),
    L = n(128449),
    R = n(689938),
    O = n(636872);
function x() {
    let e = a.useRef((0, u.P)()),
        { onScroll: t, scrollPosition: n, resetScrollPosition: s } = (0, E.M)(),
        { tabs: x, selectedTab: b, setSelectedTab: P } = (0, A.Y)(),
        M = (0, S.lg)(b),
        D = !L.MU.has(b),
        y = (0, d.iN)('global_discovery_servers_layout'),
        { searchBarState: j, onTabsAvailableWidthChange: U, onCollapsedSearchBarClick: G, onSearchBarBlur: w, tabsClassName: k } = (0, m.U)({ isSearchBarVisible: D }),
        { searchQuery: B, onSearchTextChange: H, onClearSearch: V, onSearchSubmit: F, isSearchVisible: Y } = (0, N.H)({ loadId: e.current }),
        W = (0, T.NL)(),
        z = (0, h.GN)((e) => e.mode, l.Z),
        K = a.useCallback(
            (e) => {
                P(e), Y && V();
            },
            [Y, V, P]
        ),
        q = a.useMemo(
            () =>
                Y
                    ? x.filter((e) => {
                          let { id: t } = e;
                          return !L.MU.has(t);
                      })
                    : x,
            [x, Y]
        ),
        Q = z === h.v0.SAVED_GUILDS,
        X = a.useRef(new f.Z(M)),
        { onGuildCardSeen: J, onGuildCardClick: $ } = (0, C.H)({
            guildDiscoveryCardSeenManager: X.current,
            loadId: e.current
        });
    a.useEffect(() => {
        X.current.flushSeenGuilds(e.current);
    }, [M]),
        a.useEffect(() => {
            s();
        }, [b, s]),
        a.useEffect(() => {
            !Y && (0, T.LD)({ scrollPosition: null });
        }, [Y]),
        a.useEffect(() => {
            (0, c.N)();
        }, []);
    let ee = a.useMemo(() => {
        switch (b) {
            case L.vf.HUBS:
                return null;
            case L.vf.GUILDS:
                if (y) return (0, i.jsx)(_.Z, { className: r()(O.clanDiscoveryToolbar, !Q && O.rightAlignedToolbar) });
                return null;
            default:
                return (0, i.jsx)(p.Z, {
                    query: B,
                    placeholder: R.Z.Messages.SEARCH,
                    onTextChange: H,
                    onClear: V,
                    onSubmit: F,
                    onCollapsedClick: G,
                    state: j,
                    onBlur: w
                });
        }
    }, [b, y, B, H, V, F, G, j, w, Q]);
    return (0, i.jsxs)('div', {
        className: O.container,
        children: [
            (0, i.jsxs)(I.ZP, {
                className: Y ? O.search : void 0,
                children: [
                    !Y && (0, i.jsx)(I.z6, { scrollPosition: n }),
                    !Q &&
                        (0, i.jsx)(I.aV, {
                            icon: Y ? o.ArrowLargeLeftIcon : o.ServerIcon,
                            iconColor: Y ? o.tokens.colors.INTERACTIVE_NORMAL : void 0,
                            onClick: Y ? V : void 0
                        }),
                    !Q &&
                        !Y &&
                        (0, i.jsx)(g.Z, {
                            className: k,
                            tabs: q,
                            selectedTab: Y ? null : b,
                            onTabSelect: K,
                            onAvailableWidthChange: U
                        }),
                    !Q &&
                        Y &&
                        (0, i.jsx)(o.Heading, {
                            variant: 'heading-lg/semibold',
                            color: 'header-primary',
                            className: O.searchResultsHeader,
                            children: R.Z.Messages.GLOBAL_DISCOVERY_SERVERS_SEARCH_RESULTS_HEADER.format({ query: W })
                        }),
                    ee
                ]
            }),
            Y
                ? (0, i.jsx)(Z.Z, {
                      loadId: e.current,
                      onGuildCardClick: $,
                      onGuildCardSeen: J
                  })
                : (0, i.jsx)(v.Z, {
                      loadId: e.current,
                      selectedTab: b,
                      onScroll: t,
                      onGuildCardClick: $,
                      onGuildCardSeen: J
                  })
        ]
    });
}
