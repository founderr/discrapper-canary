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
    g = n(258971),
    f = n(726941),
    _ = n(666697),
    E = n(370648),
    I = n(569527),
    C = n(979007),
    v = n(388032),
    S = n(842221);
t.Z = function () {
    let { onScroll: e, scrollPosition: t, resetScrollPosition: n } = (0, s.M)(),
        N = (0, g.Xh)(),
        T = (null == N ? void 0 : N.type) === g.m_.CATEGORY ? N.categoryId : void 0,
        { tabs: A, selectedTab: b, onSelectTab: x } = (0, m.i)(null == T ? void 0 : T.toString());
    r.useEffect(() => {
        a.CP();
    }, []),
        r.useEffect(() => {
            a.g5();
        }, []);
    let { searchQuery: Z, searchFetchedQuery: L, onSearchTextChange: y, onClearSearch: R, onSearchSubmit: O, hasSearchView: P } = (0, h.M)(),
        {
            searchBarState: j,
            onTabsAvailableWidthChange: D,
            onCollapsedSearchBarClick: M,
            onSearchBarBlur: w
        } = (0, o.U)({
            isSearchBarVisible: !0,
            isSearchBarEmpty: '' === Z.trim()
        }),
        { onSelectApplication: k, onCloseAppDetails: U, selectedAppId: G } = (0, p.g)(n),
        B = null != G,
        V = P && !B,
        H = r.useCallback(
            (e) => {
                x(e), V && R(), n();
            },
            [V, R, x, n]
        );
    return (0, i.jsxs)('div', {
        className: S.container,
        children: [
            (0, i.jsxs)(c.ZP, {
                className: V ? S.search : void 0,
                children: [
                    !V && (0, i.jsx)(c.z6, { scrollPosition: t }),
                    (0, i.jsx)(c.aV, {
                        icon: V || B ? l.ArrowLargeLeftIcon : l.AppsIcon,
                        onClick: B ? U : V ? R : void 0
                    }),
                    B || V
                        ? (0, i.jsx)(l.Heading, {
                              variant: 'heading-lg/semibold',
                              color: 'header-primary',
                              className: S.alternateHeader,
                              children: B ? v.intl.string(v.t['13/7kZ']) : v.intl.formatToPlainString(v.t.zHdzqa, { query: L })
                          })
                        : (0, i.jsx)(d.Z, {
                              tabs: A,
                              selectedTab: b,
                              onTabSelect: H,
                              onAvailableWidthChange: D
                          }),
                    !B &&
                        (0, i.jsx)(u.Z, {
                            query: Z,
                            placeholder: v.intl.string(v.t['7J5i+/']),
                            onTextChange: y,
                            onClear: R,
                            onSubmit: O,
                            onCollapsedClick: M,
                            state: j,
                            onBlur: w
                        })
                ]
            }),
            B
                ? (0, i.jsx)(_.Z, {
                      onScroll: e,
                      onSelectApplication: k,
                      applicationId: G,
                      onCloseAppDetails: U
                  })
                : V
                  ? (0, i.jsx)(I.Z, {
                        query: L,
                        onSelectApplication: k
                    })
                  : b === C.kK
                    ? (0, i.jsx)(E.Z, {
                          onScroll: e,
                          onSelectApplication: k
                      })
                    : (0, i.jsx)(f.Z, {
                          tabId: Number(b),
                          onScroll: e,
                          onSelectApplication: k
                      })
        ]
    });
};
