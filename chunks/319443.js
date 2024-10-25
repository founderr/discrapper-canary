var i = n(200651),
    a = n(192379),
    s = n(481060),
    r = n(674588),
    l = n(979233),
    o = n(88693),
    c = n(611928),
    d = n(922122),
    u = n(680180),
    _ = n(975907),
    E = n(119014),
    h = n(578470),
    m = n(726941),
    I = n(666697),
    p = n(370648),
    g = n(569527),
    T = n(979007),
    f = n(689938),
    S = n(842221);
t.Z = function () {
    let { onScroll: e, scrollPosition: t, resetScrollPosition: n } = (0, l.M)(),
        { tabs: C, selectedTab: N, onSelectTab: A } = (0, E.i)();
    a.useEffect(() => {
        r.CP();
    }, []),
        a.useEffect(() => {
            r.g5();
        }, []);
    let { searchQuery: v, searchFetchedQuery: Z, onSearchTextChange: L, onClearSearch: R, onSearchSubmit: O, hasSearchView: x } = (0, _.M)(),
        {
            searchBarState: b,
            onTabsAvailableWidthChange: M,
            onCollapsedSearchBarClick: P,
            onSearchBarBlur: D
        } = (0, o.U)({
            isSearchBarVisible: !0,
            isSearchBarEmpty: '' === v.trim()
        }),
        { onSelectApplication: y, onCloseAppDetails: j, selectedAppId: U } = (0, h.g)(n),
        G = null != U,
        w = x && !G,
        k = a.useCallback(
            (e) => {
                A(e), w && R(), n();
            },
            [w, R, A, n]
        );
    return (0, i.jsxs)('div', {
        className: S.container,
        children: [
            (0, i.jsxs)(c.ZP, {
                className: w ? S.search : void 0,
                children: [
                    !w &&
                        (0, i.jsx)(
                            c.z6,
                            {
                                scrollPosition: t,
                                minOpacity: G ? 0.4 : 0
                            },
                            G ? 'apps' : ''
                        ),
                    (0, i.jsx)(c.aV, {
                        icon: w || G ? s.ArrowLargeLeftIcon : s.AppsIcon,
                        onClick: G ? j : w ? R : void 0
                    }),
                    G || w
                        ? (0, i.jsx)(s.Heading, {
                              variant: 'heading-lg/semibold',
                              color: 'header-primary',
                              className: S.alternateHeader,
                              children: G ? f.Z.Messages.BACK : f.Z.Messages.GLOBAL_DISCOVERY_SERVERS_SEARCH_RESULTS_HEADER.format({ query: Z })
                          })
                        : (0, i.jsx)(d.Z, {
                              tabs: C,
                              selectedTab: N,
                              onTabSelect: k,
                              onAvailableWidthChange: M
                          }),
                    !G &&
                        (0, i.jsx)(u.Z, {
                            query: v,
                            placeholder: f.Z.Messages.APP_DIRECTORY_SEARCH_PLACEHOLDER_V2,
                            onTextChange: L,
                            onClear: R,
                            onSubmit: O,
                            onCollapsedClick: P,
                            state: b,
                            onBlur: D
                        })
                ]
            }),
            G
                ? (0, i.jsx)(I.Z, {
                      onScroll: e,
                      applicationId: U
                  })
                : w
                  ? (0, i.jsx)(g.Z, {
                        query: Z,
                        onSelectApplication: y
                    })
                  : N === T.kK
                    ? (0, i.jsx)(p.Z, {
                          onScroll: e,
                          onSelectApplication: y
                      })
                    : (0, i.jsx)(m.Z, {
                          tabId: Number(N),
                          onScroll: e,
                          onSelectApplication: y
                      })
        ]
    });
};
