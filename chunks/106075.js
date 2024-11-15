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
    N = n(491588);
function T() {
    let e = r.useRef((0, a.P)()),
        { onScroll: t, scrollPosition: n, resetScrollPosition: T } = (0, s.M)(),
        { tabs: A, selectedTab: b, setSelectedTab: x } = (0, _.Y)(),
        Z = (0, p.lg)(b),
        L = !C.MU.has(b),
        { searchQuery: y, onSearchTextChange: O, onClearSearch: R, onSearchSubmit: P, isSearchVisible: j } = (0, f.H)({ loadId: e.current }),
        {
            searchBarState: D,
            onTabsAvailableWidthChange: M,
            onCollapsedSearchBarClick: w,
            onSearchBarBlur: k,
            tabsClassName: U
        } = (0, o.U)({
            isSearchBarVisible: L,
            isSearchBarEmpty: '' === y.trim()
        }),
        G = h.Z.useField('fetchedQuery'),
        B = r.useCallback(
            (e) => {
                x(e), j && R();
            },
            [j, R, x]
        ),
        V = r.useMemo(
            () =>
                j
                    ? A.filter((e) => {
                          let { id: t } = e;
                          return !C.MU.has(t);
                      })
                    : A,
            [A, j]
        ),
        H = r.useRef(new m.Z(Z)),
        { onGuildCardSeen: F, onGuildCardClick: z } = (0, g.H)({
            guildDiscoveryCardSeenManager: H.current,
            loadId: e.current
        });
    return (
        r.useEffect(() => {
            H.current.flushSeenGuilds(e.current);
        }, [Z]),
        r.useEffect(() => {
            T();
        }, [b, T]),
        r.useEffect(() => {
            !j && h.Z.setState({ scrollPosition: null });
        }, [j]),
        (0, i.jsxs)('div', {
            className: N.container,
            children: [
                (0, i.jsxs)(c.ZP, {
                    className: j ? N.search : void 0,
                    children: [
                        !j && (0, i.jsx)(c.z6, { scrollPosition: n }),
                        j
                            ? (0, i.jsx)(c.Cm, {
                                  icon: l.ArrowLargeLeftIcon,
                                  onClick: R
                              })
                            : (0, i.jsx)(c.aV, { icon: l.ServerIcon }),
                        !j &&
                            (0, i.jsx)(d.Z, {
                                className: U,
                                tabs: V,
                                selectedTab: j ? null : b,
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
                            (0, i.jsx)(u.Z, {
                                query: y,
                                placeholder: S.intl.string(S.t['5h0QOD']),
                                onTextChange: O,
                                onClear: R,
                                onSubmit: P,
                                onCollapsedClick: w,
                                state: j ? v.WB.DEFAULT : D,
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
                          selectedTab: b,
                          onScroll: t,
                          onGuildCardClick: z,
                          onGuildCardSeen: F
                      })
            ]
        })
    );
}
