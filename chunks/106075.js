n.d(t, {
    Z: function () {
        return T;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(481060),
    a = n(117496),
    s = n(979233),
    o = n(88693),
    c = n(611928),
    d = n(922122),
    u = n(680180),
    h = n(164991),
    m = n(444324),
    p = n(726115),
    g = n(750910),
    f = n(28494),
    _ = n(29086),
    E = n(590771),
    I = n(273596),
    C = n(128449),
    v = n(49898),
    S = n(388032),
    N = n(636872);
function T() {
    let e = r.useRef((0, a.P)()),
        { onScroll: t, scrollPosition: n, resetScrollPosition: T } = (0, s.M)(),
        { tabs: x, selectedTab: b, setSelectedTab: A } = (0, _.Y)(),
        Z = (0, p.lg)(b),
        y = !C.MU.has(b),
        { searchQuery: L, onSearchTextChange: R, onClearSearch: j, onSearchSubmit: O, isSearchVisible: P } = (0, f.H)({ loadId: e.current }),
        {
            searchBarState: D,
            onTabsAvailableWidthChange: M,
            onCollapsedSearchBarClick: w,
            onSearchBarBlur: k,
            tabsClassName: U
        } = (0, o.U)({
            isSearchBarVisible: y,
            isSearchBarEmpty: '' === L.trim()
        }),
        G = h.Z.useField('fetchedQuery'),
        B = r.useCallback(
            (e) => {
                A(e), P && j();
            },
            [P, j, A]
        ),
        H = r.useMemo(
            () =>
                P
                    ? x.filter((e) => {
                          let { id: t } = e;
                          return !C.MU.has(t);
                      })
                    : x,
            [x, P]
        ),
        V = r.useRef(new m.Z(Z)),
        { onGuildCardSeen: F, onGuildCardClick: z } = (0, g.H)({
            guildDiscoveryCardSeenManager: V.current,
            loadId: e.current
        });
    return (
        r.useEffect(() => {
            V.current.flushSeenGuilds(e.current);
        }, [Z]),
        r.useEffect(() => {
            T();
        }, [b, T]),
        r.useEffect(() => {
            !P && h.Z.setState({ scrollPosition: null });
        }, [P]),
        (0, i.jsxs)('div', {
            className: N.container,
            children: [
                (0, i.jsxs)(c.ZP, {
                    className: P ? N.search : void 0,
                    children: [
                        !P && (0, i.jsx)(c.z6, { scrollPosition: n }),
                        (0, i.jsx)(c.aV, {
                            icon: P ? l.ArrowLargeLeftIcon : l.ServerIcon,
                            onClick: P ? j : void 0
                        }),
                        !P &&
                            (0, i.jsx)(d.Z, {
                                className: U,
                                tabs: H,
                                selectedTab: P ? null : b,
                                onTabSelect: B,
                                onAvailableWidthChange: M
                            }),
                        P &&
                            (0, i.jsx)(l.Heading, {
                                variant: 'heading-lg/semibold',
                                color: 'header-primary',
                                className: N.searchResultsHeader,
                                children: S.intl.format(S.t.zHdzqa, { query: G })
                            }),
                        y &&
                            (0, i.jsx)(u.Z, {
                                query: L,
                                placeholder: S.intl.string(S.t['5h0QOD']),
                                onTextChange: R,
                                onClear: j,
                                onSubmit: O,
                                onCollapsedClick: w,
                                state: P ? v.WB.DEFAULT : D,
                                onBlur: k
                            })
                    ]
                }),
                P
                    ? (0, i.jsx)(I.Z, {
                          loadId: e.current,
                          onGuildCardClick: z,
                          onGuildCardSeen: F
                      })
                    : (0, i.jsx)(E.Z, {
                          selectedTab: b,
                          onScroll: t,
                          onGuildCardClick: z,
                          onGuildCardSeen: F
                      })
            ]
        })
    );
}
