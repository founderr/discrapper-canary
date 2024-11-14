var i = n(200651),
    r = n(192379),
    l = n(481060),
    a = n(674588),
    s = n(979233),
    o = n(88693),
    c = n(611928),
    d = n(922122),
    u = n(680180),
    h = n(703656),
    m = n(975907),
    p = n(119014),
    g = n(258971),
    f = n(133743),
    _ = n(726941),
    E = n(666697),
    I = n(370648),
    C = n(569527),
    v = n(979007),
    S = n(388032),
    N = n(842221);
t.Z = function () {
    let { onScroll: e, scrollPosition: t, resetScrollPosition: n } = (0, s.M)(),
        T = (0, g.Xh)(),
        A = (null == T ? void 0 : T.type) === g.m_.CATEGORY ? T.categoryId : void 0,
        { applicationId: b } = (null == T ? void 0 : T.type) === g.m_.APPLICATION ? T : {},
        { tabs: x, selectedTab: Z, onSelectTab: L } = (0, p.i)(null == A ? void 0 : A.toString());
    r.useEffect(() => {
        a.CP();
    }, []),
        r.useEffect(() => {
            a.g5();
        }, []);
    let { searchQuery: y, searchFetchedQuery: R, onSearchTextChange: O, onClearSearch: P, onSearchSubmit: j, hasSearchView: D } = (0, m.M)(),
        {
            searchBarState: M,
            onTabsAvailableWidthChange: w,
            onCollapsedSearchBarClick: k,
            onSearchBarBlur: U
        } = (0, o.U)({
            isSearchBarVisible: !0,
            isSearchBarEmpty: '' === y.trim()
        }),
        G = null != b,
        B = D && !G,
        V = r.useCallback(
            (e) => {
                L(e), B && P(), n();
            },
            [B, P, L, n]
        ),
        H = r.useCallback((e) => (0, f.ph)({ applicationId: e }), []),
        F = G || B,
        z = r.useCallback(() => {
            null != (0, g.Uc)() ? (0, h.op)() : (0, f.Yp)();
        }, []);
    return (0, i.jsxs)('div', {
        className: N.container,
        children: [
            (0, i.jsxs)(c.ZP, {
                className: B ? N.search : void 0,
                children: [
                    !B && (0, i.jsx)(c.z6, { scrollPosition: t }),
                    (0, i.jsx)(c.aV, {
                        icon: F ? l.ArrowLargeLeftIcon : l.AppsIcon,
                        onClick: F ? z : void 0
                    }),
                    F
                        ? (0, i.jsx)(l.Heading, {
                              variant: 'heading-lg/semibold',
                              color: 'header-primary',
                              className: N.alternateHeader,
                              children: G ? S.intl.string(S.t['13/7kZ']) : S.intl.formatToPlainString(S.t.zHdzqa, { query: R })
                          })
                        : (0, i.jsx)(d.Z, {
                              tabs: x,
                              selectedTab: Z,
                              onTabSelect: V,
                              onAvailableWidthChange: w
                          }),
                    !G &&
                        (0, i.jsx)(u.Z, {
                            query: y,
                            placeholder: S.intl.string(S.t['7J5i+/']),
                            onTextChange: O,
                            onClear: P,
                            onSubmit: j,
                            onCollapsedClick: k,
                            state: M,
                            onBlur: U
                        })
                ]
            }),
            G
                ? (0, i.jsx)(E.Z, {
                      onScroll: e,
                      onSelectApplication: H,
                      applicationId: b
                  })
                : B
                  ? (0, i.jsx)(C.Z, {
                        query: R,
                        onSelectApplication: H
                    })
                  : Z === v.kK
                    ? (0, i.jsx)(I.Z, {
                          onScroll: e,
                          onSelectApplication: H
                      })
                    : (0, i.jsx)(_.Z, {
                          tabId: Number(Z),
                          onScroll: e,
                          onSelectApplication: H
                      })
        ]
    });
};
