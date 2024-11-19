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
    T = n(388032),
    N = n(327900);
t.Z = function () {
    let { onScroll: e, scrollPosition: t, resetScrollPosition: n } = (0, s.M)(),
        S = (0, g.Xh)(),
        A = (null == S ? void 0 : S.type) === g.m_.CATEGORY ? S.categoryId : void 0,
        { applicationId: b, section: x } = (null == S ? void 0 : S.type) === g.m_.APPLICATION ? S : {},
        { query: Z } = (null == S ? void 0 : S.type) === g.m_.SEARCH ? S : {},
        { tabs: L, selectedTab: y, onSelectTab: O } = (0, p.i)(null == A ? void 0 : A.toString());
    r.useEffect(() => {
        a.CP();
    }, []),
        r.useEffect(() => {
            a.g5();
        }, []);
    let P = null != b,
        R = (null == S ? void 0 : S.type) === g.m_.SEARCH,
        { searchQuery: j, onSearchTextChange: D, onClearSearch: M, onSearchSubmit: w } = (0, m.M)({ initialQuery: null != Z ? Z : '' }),
        {
            searchBarState: k,
            onTabsAvailableWidthChange: U,
            onCollapsedSearchBarClick: G,
            onSearchBarBlur: B
        } = (0, o.U)({
            isSearchBarVisible: !0,
            isSearchBarEmpty: '' === j.trim()
        }),
        H = r.useCallback(
            (e) => {
                O(e), R && M(), n();
            },
            [R, M, O, n]
        ),
        V = r.useCallback((e) => (0, f.ph)({ applicationId: e }), []),
        F = P || R,
        z = r.useCallback(() => {
            null != (0, g.Uc)() ? (0, h.op)() : (0, f.Yp)();
        }, []);
    return (0, i.jsxs)('div', {
        className: N.container,
        children: [
            (0, i.jsxs)(c.ZP, {
                className: R ? N.search : void 0,
                children: [
                    !R && (0, i.jsx)(c.z6, { scrollPosition: t }),
                    F
                        ? (0, i.jsx)(c.Cm, {
                              icon: l.ArrowLargeLeftIcon,
                              onClick: z,
                              variant: R ? c.HS.DEFAULT : c.HS.OVERLAY
                          })
                        : (0, i.jsx)(c.aV, { icon: l.AppsIcon }),
                    P
                        ? null
                        : R
                          ? (0, i.jsx)(l.Heading, {
                                variant: 'heading-lg/semibold',
                                color: 'header-primary',
                                className: N.alternateHeader,
                                children: T.intl.formatToPlainString(T.t.zHdzqa, { query: Z })
                            })
                          : (0, i.jsx)(d.Z, {
                                tabs: L,
                                selectedTab: y,
                                onTabSelect: H,
                                onAvailableWidthChange: U
                            }),
                    !P &&
                        (0, i.jsx)(u.Z, {
                            query: j,
                            placeholder: T.intl.string(T.t['7J5i+/']),
                            onTextChange: D,
                            onClear: M,
                            onSubmit: w,
                            onCollapsedClick: G,
                            state: k,
                            onBlur: B
                        })
                ]
            }),
            P
                ? (0, i.jsx)(E.Z, {
                      onScroll: e,
                      onSelectApplication: V,
                      applicationId: b,
                      initialTab: x
                  })
                : R
                  ? (0, i.jsx)(C.Z, { onSelectApplication: V })
                  : y === v.kK
                    ? (0, i.jsx)(I.Z, {
                          onScroll: e,
                          onSelectApplication: V
                      })
                    : (0, i.jsx)(_.Z, {
                          tabId: Number(y),
                          onScroll: e,
                          onSelectApplication: V
                      })
        ]
    });
};
