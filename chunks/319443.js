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
    h = n(578470),
    m = n(726941),
    I = n(666697),
    p = n(370648),
    g = n(569527),
    T = n(979007),
    S = n(689938),
    f = n(842221);
t.Z = function () {
    let { onScroll: e, scrollPosition: t, resetScrollPosition: n } = (0, l.M)(),
        { tabs: C, selectedTab: N, onSelectTab: A } = (0, E.i)();
    a.useEffect(() => {
        n();
    }, [N, n]),
        a.useEffect(() => {
            r.CP();
        }, []),
        a.useEffect(() => {
            r.g5();
        }, []);
    let { searchQuery: v, searchFetchedQuery: Z, onSearchTextChange: L, onClearSearch: O, onSearchSubmit: R, isSearchVisible: x } = (0, _.M)(),
        {
            searchBarState: b,
            onTabsAvailableWidthChange: M,
            onCollapsedSearchBarClick: P,
            onSearchBarBlur: D
        } = (0, o.U)({
            isSearchBarVisible: !0,
            isSearchBarEmpty: '' === v.trim()
        }),
        { onSelectApplication: y, onCloseAppDetails: j, selectedAppId: U } = (0, h.g)(),
        G = null != U,
        w = a.useCallback(
            (e) => {
                A(e), x && O();
            },
            [x, O, A]
        );
    return (0, i.jsxs)('div', {
        className: f.container,
        children: [
            (0, i.jsxs)(c.ZP, {
                className: x ? f.search : void 0,
                children: [
                    !x && (0, i.jsx)(c.z6, { scrollPosition: t }),
                    (0, i.jsx)(c.aV, {
                        icon: x || G ? s.ArrowLargeLeftIcon : s.AppsIcon,
                        iconColor: x ? s.tokens.colors.INTERACTIVE_NORMAL : void 0,
                        onClick: G ? j : x ? O : void 0
                    }),
                    G || x
                        ? (0, i.jsx)(s.Heading, {
                              variant: 'heading-lg/semibold',
                              color: G ? void 0 : 'header-primary',
                              className: f.alternateHeader,
                              children: G ? S.Z.Messages.BACK : S.Z.Messages.GLOBAL_DISCOVERY_SERVERS_SEARCH_RESULTS_HEADER.format({ query: Z })
                          })
                        : (0, i.jsx)(d.Z, {
                              tabs: C,
                              selectedTab: N,
                              onTabSelect: w,
                              onAvailableWidthChange: M
                          }),
                    !G &&
                        (0, i.jsx)(u.Z, {
                            query: v,
                            placeholder: S.Z.Messages.APP_DIRECTORY_SEARCH_PLACEHOLDER_V2,
                            onTextChange: L,
                            onClear: O,
                            onSubmit: R,
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
                : x
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
