var i = n(735250),
    a = n(470079),
    s = n(481060),
    r = n(674588),
    l = n(979233),
    o = n(88693),
    c = n(611928),
    d = n(922122),
    u = n(680180),
    _ = n(975907),
    E = n(119014),
    h = n(726941),
    m = n(370648),
    I = n(569527),
    p = n(979007),
    g = n(689938),
    T = n(842221);
t.Z = function () {
    let { onScroll: e, scrollPosition: t, resetScrollPosition: n } = (0, l.M)(),
        { tabs: f, selectedTab: S, onSelectTab: C } = (0, E.i)();
    a.useEffect(() => {
        n();
    }, [S, n]),
        a.useEffect(() => {
            r.CP();
        }, []),
        a.useEffect(() => {
            r.g5();
        }, []);
    let { searchQuery: N, searchFetchedQuery: A, onSearchTextChange: v, onClearSearch: Z, onSearchSubmit: L, isSearchVisible: R } = (0, _.M)(),
        {
            searchBarState: O,
            onTabsAvailableWidthChange: x,
            onCollapsedSearchBarClick: b,
            onSearchBarBlur: M
        } = (0, o.U)({
            isSearchBarVisible: !0,
            isSearchBarEmpty: '' === N.trim()
        }),
        P = a.useCallback(
            (e) => {
                C(e), R && Z();
            },
            [R, Z, C]
        );
    return (0, i.jsxs)('div', {
        className: T.container,
        children: [
            (0, i.jsxs)(c.ZP, {
                className: R ? T.search : void 0,
                children: [
                    !R && (0, i.jsx)(c.z6, { scrollPosition: t }),
                    (0, i.jsx)(c.aV, {
                        icon: R ? s.ArrowLargeLeftIcon : s.AppsIcon,
                        iconColor: R ? s.tokens.colors.INTERACTIVE_NORMAL : void 0,
                        onClick: R ? Z : void 0
                    }),
                    R
                        ? (0, i.jsx)(s.Heading, {
                              variant: 'heading-lg/semibold',
                              color: 'header-primary',
                              className: T.searchResultsHeader,
                              children: g.Z.Messages.GLOBAL_DISCOVERY_SERVERS_SEARCH_RESULTS_HEADER.format({ query: A })
                          })
                        : (0, i.jsx)(d.Z, {
                              tabs: f,
                              selectedTab: S,
                              onTabSelect: P,
                              onAvailableWidthChange: x
                          }),
                    (0, i.jsx)(u.Z, {
                        query: N,
                        placeholder: g.Z.Messages.APP_DIRECTORY_SEARCH_PLACEHOLDER_V2,
                        onTextChange: v,
                        onClear: Z,
                        onSubmit: L,
                        onCollapsedClick: b,
                        state: O,
                        onBlur: M
                    })
                ]
            }),
            R
                ? (0, i.jsx)(I.Z, { query: A })
                : S === p.kK
                  ? (0, i.jsx)(m.Z, { onScroll: e })
                  : (0, i.jsx)(h.Z, {
                        tabId: Number(S),
                        onScroll: e
                    })
        ]
    });
};
