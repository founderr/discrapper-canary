n.d(t, {
    Z: function () {
        return A;
    }
});
var i = n(735250),
    a = n(470079),
    s = n(481060),
    r = n(117496),
    l = n(979233),
    o = n(88693),
    c = n(611928),
    d = n(922122),
    u = n(680180),
    _ = n(164991),
    E = n(444324),
    h = n(726115),
    m = n(750910),
    I = n(28494),
    p = n(29086),
    g = n(590771),
    T = n(273596),
    f = n(128449),
    S = n(49898),
    C = n(689938),
    N = n(636872);
function A() {
    let e = a.useRef((0, r.P)()),
        { onScroll: t, scrollPosition: n, resetScrollPosition: A } = (0, l.M)(),
        { tabs: v, selectedTab: Z, setSelectedTab: L } = (0, p.Y)(),
        R = (0, h.lg)(Z),
        O = !f.MU.has(Z),
        { searchQuery: x, onSearchTextChange: b, onClearSearch: M, onSearchSubmit: P, isSearchVisible: D } = (0, I.H)({ loadId: e.current }),
        {
            searchBarState: y,
            onTabsAvailableWidthChange: j,
            onCollapsedSearchBarClick: U,
            onSearchBarBlur: G,
            tabsClassName: w
        } = (0, o.U)({
            isSearchBarVisible: O,
            isSearchBarEmpty: '' === x.trim()
        }),
        k = (0, _.NL)(),
        B = a.useCallback(
            (e) => {
                L(e), D && M();
            },
            [D, M, L]
        ),
        H = a.useMemo(
            () =>
                D
                    ? v.filter((e) => {
                          let { id: t } = e;
                          return !f.MU.has(t);
                      })
                    : v,
            [v, D]
        ),
        V = a.useRef(new E.Z(R)),
        { onGuildCardSeen: F, onGuildCardClick: Y } = (0, m.H)({
            guildDiscoveryCardSeenManager: V.current,
            loadId: e.current
        });
    return (
        a.useEffect(() => {
            V.current.flushSeenGuilds(e.current);
        }, [R]),
        a.useEffect(() => {
            A();
        }, [Z, A]),
        a.useEffect(() => {
            !D && (0, _.LD)({ scrollPosition: null });
        }, [D]),
        (0, i.jsxs)('div', {
            className: N.container,
            children: [
                (0, i.jsxs)(c.ZP, {
                    className: D ? N.search : void 0,
                    children: [
                        !D && (0, i.jsx)(c.z6, { scrollPosition: n }),
                        (0, i.jsx)(c.aV, {
                            icon: D ? s.ArrowLargeLeftIcon : s.ServerIcon,
                            onClick: D ? M : void 0
                        }),
                        !D &&
                            (0, i.jsx)(d.Z, {
                                className: w,
                                tabs: H,
                                selectedTab: D ? null : Z,
                                onTabSelect: B,
                                onAvailableWidthChange: j
                            }),
                        D &&
                            (0, i.jsx)(s.Heading, {
                                variant: 'heading-lg/semibold',
                                color: 'header-primary',
                                className: N.searchResultsHeader,
                                children: C.Z.Messages.GLOBAL_DISCOVERY_SERVERS_SEARCH_RESULTS_HEADER.format({ query: k })
                            }),
                        O &&
                            (0, i.jsx)(u.Z, {
                                query: x,
                                placeholder: C.Z.Messages.SEARCH,
                                onTextChange: b,
                                onClear: M,
                                onSubmit: P,
                                onCollapsedClick: U,
                                state: D ? S.WB.DEFAULT : y,
                                onBlur: G
                            })
                    ]
                }),
                D
                    ? (0, i.jsx)(T.Z, {
                          loadId: e.current,
                          onGuildCardClick: Y,
                          onGuildCardSeen: F
                      })
                    : (0, i.jsx)(g.Z, {
                          selectedTab: Z,
                          onScroll: t,
                          onGuildCardClick: Y,
                          onGuildCardSeen: F
                      })
            ]
        })
    );
}
