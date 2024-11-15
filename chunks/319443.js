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
        { applicationId: b, section: x } = (null == T ? void 0 : T.type) === g.m_.APPLICATION ? T : {},
        { tabs: Z, selectedTab: L, onSelectTab: y } = (0, p.i)(null == A ? void 0 : A.toString());
    r.useEffect(() => {
        a.CP();
    }, []),
        r.useEffect(() => {
            a.g5();
        }, []);
    let { searchQuery: O, searchFetchedQuery: R, onSearchTextChange: P, onClearSearch: j, onSearchSubmit: D, hasSearchView: M } = (0, m.M)(),
        {
            searchBarState: w,
            onTabsAvailableWidthChange: k,
            onCollapsedSearchBarClick: U,
            onSearchBarBlur: G
        } = (0, o.U)({
            isSearchBarVisible: !0,
            isSearchBarEmpty: '' === O.trim()
        }),
        B = null != b,
        V = M && !B,
        H = r.useCallback(
            (e) => {
                y(e), V && j(), n();
            },
            [V, j, y, n]
        ),
        F = r.useCallback((e) => (0, f.ph)({ applicationId: e }), []),
        z = B || V,
        Y = r.useCallback(() => {
            null != (0, g.Uc)() ? (0, h.op)() : (0, f.Yp)();
        }, []);
    return (0, i.jsxs)('div', {
        className: N.container,
        children: [
            (0, i.jsxs)(c.ZP, {
                className: V ? N.search : void 0,
                children: [
                    !V && (0, i.jsx)(c.z6, { scrollPosition: t }),
                    z
                        ? (0, i.jsx)(c.Cm, {
                              icon: l.ArrowLargeLeftIcon,
                              onClick: Y,
                              variant: V ? c.HS.DEFAULT : c.HS.OVERLAY
                          })
                        : (0, i.jsx)(c.aV, { icon: l.AppsIcon }),
                    B
                        ? null
                        : V
                          ? (0, i.jsx)(l.Heading, {
                                variant: 'heading-lg/semibold',
                                color: 'header-primary',
                                className: N.alternateHeader,
                                children: S.intl.formatToPlainString(S.t.zHdzqa, { query: R })
                            })
                          : (0, i.jsx)(d.Z, {
                                tabs: Z,
                                selectedTab: L,
                                onTabSelect: H,
                                onAvailableWidthChange: k
                            }),
                    !B &&
                        (0, i.jsx)(u.Z, {
                            query: O,
                            placeholder: S.intl.string(S.t['7J5i+/']),
                            onTextChange: P,
                            onClear: j,
                            onSubmit: D,
                            onCollapsedClick: U,
                            state: w,
                            onBlur: G
                        })
                ]
            }),
            B
                ? (0, i.jsx)(E.Z, {
                      onScroll: e,
                      onSelectApplication: F,
                      applicationId: b,
                      initialTab: x
                  })
                : V
                  ? (0, i.jsx)(C.Z, {
                        query: R,
                        onSelectApplication: F
                    })
                  : L === v.kK
                    ? (0, i.jsx)(I.Z, {
                          onScroll: e,
                          onSelectApplication: F
                      })
                    : (0, i.jsx)(_.Z, {
                          tabId: Number(L),
                          onScroll: e,
                          onSelectApplication: F
                      })
        ]
    });
};
