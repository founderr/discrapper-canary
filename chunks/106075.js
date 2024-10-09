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
    p = n(922122),
    g = n(680180),
    T = n(164991),
    f = n(444324),
    S = n(726115),
    C = n(750910),
    N = n(28494),
    A = n(29086),
    v = n(590771),
    Z = n(273596),
    L = n(128449),
    R = n(49898),
    O = n(689938),
    x = n(636872);
function b() {
    let e = a.useRef((0, u.P)()),
        { onScroll: t, scrollPosition: n, resetScrollPosition: s } = (0, h.M)(),
        { tabs: b, selectedTab: M, setSelectedTab: P } = (0, A.Y)(),
        D = (0, S.lg)(M),
        y = !L.MU.has(M),
        j = (0, d.iN)('global_discovery_servers_layout'),
        { searchQuery: U, onSearchTextChange: G, onClearSearch: w, onSearchSubmit: k, isSearchVisible: B } = (0, N.H)({ loadId: e.current }),
        {
            searchBarState: V,
            onTabsAvailableWidthChange: H,
            onCollapsedSearchBarClick: F,
            onSearchBarBlur: Y,
            tabsClassName: z
        } = (0, m.U)({
            isSearchBarVisible: y,
            isSearchBarEmpty: '' === U.trim()
        }),
        W = (0, T.NL)(),
        K = (0, E.GN)((e) => e.mode, l.Z),
        q = a.useCallback(
            (e) => {
                P(e), B && w();
            },
            [B, w, P]
        ),
        Q = a.useMemo(
            () =>
                B
                    ? b.filter((e) => {
                          let { id: t } = e;
                          return !L.MU.has(t);
                      })
                    : b,
            [b, B]
        ),
        X = K === E.v0.SAVED_GUILDS,
        J = a.useRef(new f.Z(D)),
        { onGuildCardSeen: $, onGuildCardClick: ee } = (0, C.H)({
            guildDiscoveryCardSeenManager: J.current,
            loadId: e.current
        });
    a.useEffect(() => {
        J.current.flushSeenGuilds(e.current);
    }, [D]),
        a.useEffect(() => {
            s();
        }, [M, s]),
        a.useEffect(() => {
            !B && (0, T.LD)({ scrollPosition: null });
        }, [B]),
        a.useEffect(() => {
            (0, c.N)();
        }, []);
    let et = a.useMemo(() => {
        switch (M) {
            case L.vf.HUBS:
                return null;
            case L.vf.GUILDS:
                if (j) return (0, i.jsx)(_.Z, { className: r()(x.clanDiscoveryToolbar, !X && x.rightAlignedToolbar) });
                return null;
            default:
                return (0, i.jsx)(g.Z, {
                    query: U,
                    placeholder: O.Z.Messages.SEARCH,
                    onTextChange: G,
                    onClear: w,
                    onSubmit: k,
                    onCollapsedClick: F,
                    state: B ? R.WB.DEFAULT : V,
                    onBlur: Y
                });
        }
    }, [M, j, U, G, w, k, F, B, V, Y, X]);
    return (0, i.jsxs)('div', {
        className: x.container,
        children: [
            (0, i.jsxs)(I.ZP, {
                className: B ? x.search : void 0,
                children: [
                    !B && (0, i.jsx)(I.z6, { scrollPosition: n }),
                    !X &&
                        (0, i.jsx)(I.aV, {
                            icon: B ? o.ArrowLargeLeftIcon : o.ServerIcon,
                            onClick: B ? w : void 0
                        }),
                    !X &&
                        !B &&
                        (0, i.jsx)(p.Z, {
                            className: z,
                            tabs: Q,
                            selectedTab: B ? null : M,
                            onTabSelect: q,
                            onAvailableWidthChange: H
                        }),
                    !X &&
                        B &&
                        (0, i.jsx)(o.Heading, {
                            variant: 'heading-lg/semibold',
                            color: 'header-primary',
                            className: x.searchResultsHeader,
                            children: O.Z.Messages.GLOBAL_DISCOVERY_SERVERS_SEARCH_RESULTS_HEADER.format({ query: W })
                        }),
                    et
                ]
            }),
            B
                ? (0, i.jsx)(Z.Z, {
                      loadId: e.current,
                      onGuildCardClick: ee,
                      onGuildCardSeen: $
                  })
                : (0, i.jsx)(v.Z, {
                      loadId: e.current,
                      selectedTab: M,
                      onScroll: t,
                      onGuildCardClick: ee,
                      onGuildCardSeen: $
                  })
        ]
    });
}
