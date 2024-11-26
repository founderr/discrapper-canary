n(47120);
var i = n(200651),
    r = n(192379),
    l = n(442837),
    a = n(481060),
    s = n(674588),
    o = n(264043),
    c = n(894653),
    d = n(34674),
    u = n(979233),
    h = n(88693),
    m = n(611928),
    p = n(922122),
    g = n(680180),
    f = n(703656),
    _ = n(975907),
    E = n(119014),
    I = n(258971),
    C = n(133743),
    v = n(726941),
    N = n(666697),
    S = n(370648),
    T = n(569527),
    x = n(979007),
    b = n(388032),
    A = n(544973);
function Z(e) {
    let { applicationId: t, onClickBack: n } = e,
        r = (0, l.e7)([o.Z], () => o.Z.getApplication(t));
    return (0, i.jsxs)('div', {
        className: A.detailHeaderContainer,
        children: [
            (0, i.jsx)('div', {
                className: A.detailHeaderSection,
                children: (0, i.jsx)(m.Cm, {
                    icon: a.ArrowLargeLeftIcon,
                    onClick: n
                })
            }),
            (0, i.jsx)(a.Heading, {
                variant: 'heading-lg/semibold',
                color: 'header-primary',
                className: A.detailHeader,
                lineClamp: 1,
                children: null == r ? void 0 : r.name
            }),
            (0, i.jsx)('div', { className: A.detailHeaderSection })
        ]
    });
}
t.Z = function () {
    var e;
    let { onScroll: t, scrollPosition: n, resetScrollPosition: o } = (0, u.M)(),
        L = (0, I.Xh)(),
        y = (null == L ? void 0 : L.type) === I.m_.CATEGORY ? L.categoryId : void 0,
        { applicationId: P, section: O } = (null == L ? void 0 : L.type) === I.m_.APPLICATION ? L : {},
        { query: R, categoryId: j } = (null == L ? void 0 : L.type) === I.m_.SEARCH ? L : {},
        D = (0, l.e7)([c.Z], () => c.Z.getCategories()),
        M = r.useMemo(() => [(0, d.KQ)(), ...D], [D]),
        w = r.useMemo(() => M.find((e) => e.id === Number(j)), [M, j]),
        { tabs: k, selectedTab: U, onSelectTab: G } = (0, E.i)(null == y ? void 0 : y.toString());
    r.useEffect(() => {
        s.CP();
    }, []),
        r.useEffect(() => {
            s.g5();
        }, []),
        r.useEffect(() => I.aQ.setState({ lastItem: L }), [L]);
    let B = null != P,
        H = (null == L ? void 0 : L.type) === I.m_.SEARCH,
        { searchQuery: V, onSearchTextChange: F, onClearSearch: z, onSearchSubmit: W } = (0, _.M)({ initialQuery: null != R ? R : '' }),
        {
            searchBarState: Y,
            onTabsAvailableWidthChange: K,
            onCollapsedSearchBarClick: q,
            onSearchBarBlur: X
        } = (0, h.U)({
            isSearchBarVisible: !0,
            isSearchBarEmpty: '' === V.trim()
        }),
        Q = r.useCallback(
            (e) => {
                G(e), H && z(), o();
            },
            [H, z, G, o]
        ),
        J = r.useCallback((e) => (0, C.ph)({ applicationId: e }), []),
        $ = B || H,
        ee = r.useCallback(() => {
            null != (0, I.Uc)() ? (0, f.op)() : (0, C.Yp)();
        }, []);
    return (0, i.jsxs)('div', {
        className: A.container,
        children: [
            (0, i.jsxs)(m.ZP, {
                variant: $ ? m._6.RELATIVE : m._6.OVERLAY,
                children: [
                    !$ && (0, i.jsx)(m.z6, { scrollPosition: n }),
                    B
                        ? (0, i.jsx)(Z, {
                              applicationId: P,
                              onClickBack: ee
                          })
                        : (0, i.jsxs)(i.Fragment, {
                              children: [
                                  H
                                      ? (0, i.jsx)(m.Cm, {
                                            icon: a.ArrowLargeLeftIcon,
                                            onClick: ee
                                        })
                                      : (0, i.jsx)(m.aV, { icon: a.AppsIcon }),
                                  H
                                      ? (0, i.jsx)(a.Heading, {
                                            variant: 'heading-lg/semibold',
                                            color: 'header-primary',
                                            className: A.searchHeader,
                                            children: null != R && '' !== R ? b.intl.formatToPlainString(b.t.zHdzqa, { query: R }) : b.intl.formatToPlainString(b.t.Qhj5Bg, { categoryName: null !== (e = null == w ? void 0 : w.name) && void 0 !== e ? e : b.intl.string(b.t.E407b2) })
                                        })
                                      : (0, i.jsx)(p.Z, {
                                            tabs: k,
                                            selectedTab: U,
                                            onTabSelect: Q,
                                            onAvailableWidthChange: K
                                        }),
                                  (0, i.jsx)(g.Z, {
                                      query: V,
                                      placeholder: b.intl.string(b.t['7J5i+/']),
                                      onTextChange: F,
                                      onClear: z,
                                      onSubmit: W,
                                      onCollapsedClick: q,
                                      state: Y,
                                      onBlur: X
                                  })
                              ]
                          })
                ]
            }),
            B
                ? (0, i.jsx)(N.Z, {
                      onScroll: t,
                      onSelectApplication: J,
                      applicationId: P,
                      initialTab: O
                  })
                : H
                  ? (0, i.jsx)(T.Z, { onSelectApplication: J })
                  : U === x.kK
                    ? (0, i.jsx)(S.Z, {
                          onScroll: t,
                          onSelectApplication: J
                      })
                    : (0, i.jsx)(v.Z, {
                          tabId: Number(U),
                          onScroll: t,
                          onSelectApplication: J
                      })
        ]
    });
};
