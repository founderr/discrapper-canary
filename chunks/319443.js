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
    I = n(979007),
    p = n(689938),
    g = n(842221);
t.Z = function () {
    let { onScroll: e, scrollPosition: t, resetScrollPosition: n } = (0, l.M)(),
        { tabs: T, selectedTab: f, onSelectTab: S } = (0, E.i)();
    a.useEffect(() => {
        n();
    }, [f, n]),
        a.useEffect(() => {
            r.CP();
        }, []),
        a.useEffect(() => {
            r.g5();
        }, []);
    let { searchQuery: C, onSearchTextChange: N, onClearSearch: A, onSearchSubmit: v } = (0, _.M)(),
        {
            searchBarState: Z,
            onTabsAvailableWidthChange: L,
            onCollapsedSearchBarClick: R,
            onSearchBarBlur: O
        } = (0, o.U)({
            isSearchBarVisible: !0,
            isSearchBarEmpty: '' === C.trim()
        });
    return (0, i.jsxs)('div', {
        className: g.container,
        children: [
            (0, i.jsxs)(c.ZP, {
                children: [
                    (0, i.jsx)(c.z6, { scrollPosition: t }),
                    (0, i.jsx)(c.aV, { icon: s.AppsIcon }),
                    (0, i.jsx)(d.Z, {
                        tabs: T,
                        selectedTab: f,
                        onTabSelect: S,
                        onAvailableWidthChange: L
                    }),
                    (0, i.jsx)(u.Z, {
                        query: C,
                        placeholder: p.Z.Messages.APP_DIRECTORY_SEARCH_PLACEHOLDER_V2,
                        onTextChange: N,
                        onClear: A,
                        onSubmit: v,
                        onCollapsedClick: R,
                        state: Z,
                        onBlur: O
                    })
                ]
            }),
            f === I.k
                ? (0, i.jsx)(m.Z, { onScroll: e })
                : (0, i.jsx)(h.Z, {
                      tabId: Number(f),
                      onScroll: e
                  })
        ]
    });
};
