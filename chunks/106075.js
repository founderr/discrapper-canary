n.d(t, {
    Z: function () {
        return T;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(481060),
    a = n(979233),
    o = n(88693),
    s = n(611928),
    c = n(922122),
    d = n(680180),
    u = n(164991),
    h = n(444324),
    m = n(726115),
    p = n(859921),
    g = n(750910),
    f = n(28494),
    _ = n(29086),
    E = n(590771),
    I = n(273596),
    C = n(128449),
    v = n(49898),
    S = n(388032),
    N = n(608576);
function T() {
    let e = r.useRef((0, m.PM)()),
        { onScroll: t, scrollPosition: n, resetScrollPosition: T } = (0, a.M)(),
        { tabs: b, selectedTab: A, setSelectedTab: x } = (0, _.Y)(),
        Z = (0, m.lg)(A),
        L = !C.MU.has(A),
        { searchQuery: y, onSearchTextChange: P, onClearSearch: O, onSearchSubmit: R, isSearchVisible: j } = (0, f.H)({ loadId: e.current }),
        D = p.Z.useField('searchBarState'),
        {
            onTabsAvailableWidthChange: M,
            onCollapsedSearchBarClick: w,
            onSearchBarBlur: k,
            tabsClassName: U
        } = (0, o.U)({
            isSearchBarVisible: L,
            isSearchBarEmpty: '' === y.trim(),
            searchBarState: D,
            setSearchBarState: (e) => p.Z.setState({ searchBarState: e })
        }),
        G = u.Z.useField('fetchedQuery'),
        B = r.useCallback(
            (e) => {
                x(e), j && O();
            },
            [j, O, x]
        ),
        H = r.useMemo(
            () =>
                j
                    ? b.filter((e) => {
                          let { id: t } = e;
                          return !C.MU.has(t);
                      })
                    : b,
            [b, j]
        ),
        V = r.useRef(new h.Z(Z)),
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
        }, [A, T]),
        r.useEffect(() => {
            !j && u.Z.setState({ scrollPosition: null });
        }, [j]),
        (0, i.jsxs)('div', {
            className: N.container,
            children: [
                (0, i.jsxs)(s.ZP, {
                    variant: j ? s._6.RELATIVE : s._6.OVERLAY,
                    children: [
                        !j && (0, i.jsx)(s.z6, { scrollPosition: n }),
                        j
                            ? (0, i.jsx)(s.Cm, {
                                  icon: l.ArrowLargeLeftIcon,
                                  onClick: O
                              })
                            : (0, i.jsx)(s.aV, { icon: l.ServerIcon }),
                        !j &&
                            (0, i.jsx)(c.Z, {
                                className: U,
                                tabs: H,
                                selectedTab: j ? null : A,
                                onTabSelect: B,
                                onAvailableWidthChange: M
                            }),
                        j &&
                            (0, i.jsx)(l.Heading, {
                                variant: 'heading-lg/semibold',
                                color: 'header-primary',
                                className: N.searchResultsHeader,
                                children: S.intl.format(S.t.zHdzqa, { query: G })
                            }),
                        L &&
                            (0, i.jsx)(d.Z, {
                                query: y,
                                placeholder: S.intl.string(S.t['5h0QOD']),
                                onTextChange: P,
                                onClear: O,
                                onSubmit: R,
                                onCollapsedClick: w,
                                state: j ? v.GlobalDiscoverySearchBarState.DEFAULT : D,
                                onBlur: k
                            })
                    ]
                }),
                j
                    ? (0, i.jsx)(I.Z, {
                          loadId: e.current,
                          onGuildCardClick: z,
                          onGuildCardSeen: F
                      })
                    : (0, i.jsx)(E.Z, {
                          selectedTab: A,
                          onScroll: t,
                          onGuildCardClick: z,
                          onGuildCardSeen: F
                      })
            ]
        })
    );
}
