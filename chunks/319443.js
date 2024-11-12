var i = n(200651),
    r = n(192379),
    l = n(481060),
    a = n(674588),
    s = n(979233),
    o = n(88693),
    c = n(611928),
    d = n(922122),
    u = n(680180),
    h = n(975907),
    m = n(119014),
    p = n(578470),
    g = n(726941),
    f = n(666697),
    _ = n(370648),
    E = n(569527),
    I = n(979007),
    C = n(388032),
    v = n(842221);
t.Z = function () {
    let { onScroll: e, scrollPosition: t, resetScrollPosition: n } = (0, s.M)(),
        { tabs: S, selectedTab: N, onSelectTab: T } = (0, m.i)();
    r.useEffect(() => {
        a.CP();
    }, []),
        r.useEffect(() => {
            a.g5();
        }, []);
    let { searchQuery: x, searchFetchedQuery: b, onSearchTextChange: A, onClearSearch: Z, onSearchSubmit: y, hasSearchView: L, initialSearchCategoryId: R, onOpenCategorySearch: j } = (0, h.M)(),
        {
            searchBarState: O,
            onTabsAvailableWidthChange: P,
            onCollapsedSearchBarClick: D,
            onSearchBarBlur: M
        } = (0, o.U)({
            isSearchBarVisible: !0,
            isSearchBarEmpty: '' === x.trim()
        }),
        { onSelectApplication: w, onCloseAppDetails: k, selectedAppId: U } = (0, p.g)(n),
        G = null != U,
        B = L && !G,
        H = r.useCallback(
            (e) => {
                T(e), B && Z(), n();
            },
            [B, Z, T, n]
        );
    return (0, i.jsxs)('div', {
        className: v.container,
        children: [
            (0, i.jsxs)(c.ZP, {
                className: B ? v.search : void 0,
                children: [
                    !B &&
                        (0, i.jsx)(
                            c.z6,
                            {
                                scrollPosition: t,
                                minOpacity: G ? 0.4 : 0
                            },
                            G ? 'apps' : ''
                        ),
                    (0, i.jsx)(c.aV, {
                        icon: B || G ? l.ArrowLargeLeftIcon : l.AppsIcon,
                        onClick: G ? k : B ? Z : void 0
                    }),
                    G || B
                        ? (0, i.jsx)(l.Heading, {
                              variant: 'heading-lg/semibold',
                              color: 'header-primary',
                              className: v.alternateHeader,
                              children: G ? C.intl.string(C.t['13/7kZ']) : C.intl.formatToPlainString(C.t.zHdzqa, { query: b })
                          })
                        : (0, i.jsx)(d.Z, {
                              tabs: S,
                              selectedTab: N,
                              onTabSelect: H,
                              onAvailableWidthChange: P
                          }),
                    !G &&
                        (0, i.jsx)(u.Z, {
                            query: x,
                            placeholder: C.intl.string(C.t['7J5i+/']),
                            onTextChange: A,
                            onClear: Z,
                            onSubmit: y,
                            onCollapsedClick: D,
                            state: O,
                            onBlur: M
                        })
                ]
            }),
            G
                ? (0, i.jsx)(f.Z, {
                      onScroll: e,
                      onSelectApplication: w,
                      applicationId: U,
                      onCloseAppDetails: k,
                      onOpenCategorySearch: j
                  })
                : B
                  ? (0, i.jsx)(E.Z, {
                        query: b,
                        onSelectApplication: w,
                        initialCategoryId: R
                    })
                  : N === I.kK
                    ? (0, i.jsx)(_.Z, {
                          onScroll: e,
                          onSelectApplication: w
                      })
                    : (0, i.jsx)(g.Z, {
                          tabId: Number(N),
                          onScroll: e,
                          onSelectApplication: w
                      })
        ]
    });
};
