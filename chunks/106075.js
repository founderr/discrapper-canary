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
    h = n(207796),
    E = n(979233),
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
        { onScroll: t, scrollPosition: n, resetScrollPosition: s } = (0, E.M)(),
        { tabs: b, selectedTab: P, setSelectedTab: M } = (0, A.Y)(),
        D = (0, f.lg)(P),
        y = !L.MU.has(P),
        j = (0, d.iN)('global_discovery_servers_layout'),
        { searchBarState: U, onTabsAvailableWidthChange: G, onCollapsedSearchBarClick: w, onSearchBarBlur: k, tabsClassName: B } = (0, m.U)({ isSearchBarVisible: y }),
        { searchQuery: H, onSearchTextChange: V, onClearSearch: F, onSearchSubmit: Y, isSearchVisible: W } = (0, N.H)({ loadId: e.current }),
        z = (0, T.NL)(),
        K = (0, h.GN)((e) => e.mode, l.Z),
        q = a.useCallback(
            (e) => {
                M(e), W && F();
            },
            [W, F, M]
        ),
        Q = a.useMemo(
            () =>
                W
                    ? b.filter((e) => {
                          let { id: t } = e;
                          return !L.MU.has(t);
                      })
                    : b,
            [b, W]
        ),
        X = K === h.v0.SAVED_GUILDS,
        J = a.useRef(new S.Z(D)),
        { onGuildCardSeen: $, onGuildCardClick: ee } = (0, C.H)({
            guildDiscoveryCardSeenManager: J.current,
            loadId: e.current
        });
    a.useEffect(() => {
        J.current.flushSeenGuilds(e.current);
    }, [D]),
        a.useEffect(() => {
            s();
        }, [P, s]),
        a.useEffect(() => {
            !W && (0, T.LD)({ scrollPosition: null });
        }, [W]),
        a.useEffect(() => {
            (0, c.N)();
        }, []);
    let et = a.useMemo(() => {
        switch (P) {
            case L.vf.HUBS:
                return null;
            case L.vf.GUILDS:
                if (j) return (0, i.jsx)(_.Z, { className: r()(x.clanDiscoveryToolbar, !X && x.rightAlignedToolbar) });
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
    }, [P, j, H, D, V, F, Y, w, U, k, X]);
    return (0, i.jsxs)('div', {
        className: x.container,
        children: [
            (0, i.jsxs)(I.ZP, {
                className: W ? x.search : void 0,
                children: [
                    !W && (0, i.jsx)(I.z6, { scrollPosition: n }),
                    !X &&
                        (0, i.jsx)(I.aV, {
                            icon: W ? o.ArrowLargeLeftIcon : o.ServerIcon,
                            iconColor: W ? o.tokens.colors.INTERACTIVE_NORMAL : void 0,
                            onClick: W ? F : void 0
                        }),
                    !X &&
                        !W &&
                        (0, i.jsx)(g.Z, {
                            className: B,
                            tabs: Q,
                            selectedTab: W ? null : P,
                            onTabSelect: q,
                            onAvailableWidthChange: G
                        }),
                    !X &&
                        W &&
                        (0, i.jsx)(o.Heading, {
                            variant: 'heading-lg/semibold',
                            color: 'header-primary',
                            className: x.searchResultsHeader,
                            children: O.Z.Messages.GLOBAL_DISCOVERY_SERVERS_SEARCH_RESULTS_HEADER.format({ query: z })
                        }),
                    et
                ]
            }),
            W
                ? (0, i.jsx)(Z.Z, {
                      loadId: e.current,
                      onGuildCardClick: ee,
                      onGuildCardSeen: $
                  })
                : (0, i.jsx)(v.Z, {
                      loadId: e.current,
                      selectedTab: P,
                      onScroll: t,
                      onGuildCardClick: ee,
                      onGuildCardSeen: $
                  })
        ]
    });
}
