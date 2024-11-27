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
    _ = n(31569),
    I = n(975907),
    E = n(119014),
    C = n(258971),
    v = n(133743),
    N = n(726941),
    S = n(666697),
    T = n(370648),
    x = n(569527),
    b = n(979007),
    A = n(388032),
    Z = n(544973);
function L(e) {
    let { applicationId: t, onClickBack: n } = e,
        r = (0, l.e7)([o.Z], () => o.Z.getApplication(t));
    return (0, i.jsxs)('div', {
        className: Z.detailHeaderContainer,
        children: [
            (0, i.jsx)('div', {
                className: Z.detailHeaderSection,
                children: (0, i.jsx)(m.Cm, {
                    icon: a.ArrowLargeLeftIcon,
                    onClick: n
                })
            }),
            (0, i.jsx)(a.Heading, {
                variant: 'heading-lg/semibold',
                color: 'header-primary',
                className: Z.detailHeader,
                lineClamp: 1,
                children: null == r ? void 0 : r.name
            }),
            (0, i.jsx)('div', { className: Z.detailHeaderSection })
        ]
    });
}
t.Z = function () {
    var e;
    let { onScroll: t, scrollPosition: n, resetScrollPosition: o } = (0, u.M)(),
        y = (0, C.Xh)(),
        P = (null == y ? void 0 : y.type) === C.m_.CATEGORY ? y.categoryId : void 0,
        { applicationId: O, section: R } = (null == y ? void 0 : y.type) === C.m_.APPLICATION ? y : {},
        { query: j, categoryId: D } = (null == y ? void 0 : y.type) === C.m_.SEARCH ? y : {},
        M = (0, l.e7)([c.Z], () => c.Z.getCategories()),
        w = r.useMemo(() => [(0, d.KQ)(), ...M], [M]),
        k = r.useMemo(() => w.find((e) => e.id === Number(D)), [w, D]),
        { tabs: U, selectedTab: G, onSelectTab: B } = (0, E.i)(null == P ? void 0 : P.toString());
    r.useEffect(() => {
        s.CP();
    }, []),
        r.useEffect(() => {
            s.g5();
        }, []),
        r.useEffect(() => C.aQ.setState({ lastItem: y }), [y]);
    let H = null != O,
        V = (null == y ? void 0 : y.type) === C.m_.SEARCH,
        { searchQuery: F, onSearchTextChange: z, onClearSearch: W, onSearchSubmit: Y } = (0, I.M)({ initialQuery: null != j ? j : '' }),
        K = _.Z.useField('searchBarState'),
        {
            onTabsAvailableWidthChange: q,
            onCollapsedSearchBarClick: X,
            onSearchBarBlur: Q
        } = (0, h.U)({
            isSearchBarVisible: !0,
            isSearchBarEmpty: '' === F.trim(),
            searchBarState: K,
            setSearchBarState: (e) => _.Z.setState({ searchBarState: e })
        }),
        J = r.useCallback(
            (e) => {
                B(e), V && W(), o();
            },
            [V, W, B, o]
        ),
        $ = r.useCallback((e) => (0, v.ph)({ applicationId: e }), []),
        ee = H || V,
        et = r.useCallback(() => {
            null != (0, C.Uc)() ? (0, f.op)() : (0, v.Yp)();
        }, []);
    return (0, i.jsxs)('div', {
        className: Z.container,
        children: [
            (0, i.jsxs)(m.ZP, {
                variant: ee ? m._6.RELATIVE : m._6.OVERLAY,
                children: [
                    !ee && (0, i.jsx)(m.z6, { scrollPosition: n }),
                    H
                        ? (0, i.jsx)(L, {
                              applicationId: O,
                              onClickBack: et
                          })
                        : (0, i.jsxs)(i.Fragment, {
                              children: [
                                  V
                                      ? (0, i.jsx)(m.Cm, {
                                            icon: a.ArrowLargeLeftIcon,
                                            onClick: et
                                        })
                                      : (0, i.jsx)(m.aV, { icon: a.AppsIcon }),
                                  V
                                      ? (0, i.jsx)(a.Heading, {
                                            variant: 'heading-lg/semibold',
                                            color: 'header-primary',
                                            className: Z.searchHeader,
                                            children: null != j && '' !== j ? A.intl.formatToPlainString(A.t.zHdzqa, { query: j }) : A.intl.formatToPlainString(A.t.Qhj5Bg, { categoryName: null !== (e = null == k ? void 0 : k.name) && void 0 !== e ? e : A.intl.string(A.t.E407b2) })
                                        })
                                      : (0, i.jsx)(p.Z, {
                                            tabs: U,
                                            selectedTab: G,
                                            onTabSelect: J,
                                            onAvailableWidthChange: q
                                        }),
                                  (0, i.jsx)(g.Z, {
                                      query: F,
                                      placeholder: A.intl.string(A.t['7J5i+/']),
                                      onTextChange: z,
                                      onClear: W,
                                      onSubmit: Y,
                                      onCollapsedClick: X,
                                      state: K,
                                      onBlur: Q
                                  })
                              ]
                          })
                ]
            }),
            H
                ? (0, i.jsx)(S.Z, {
                      onScroll: t,
                      onSelectApplication: $,
                      applicationId: O,
                      initialTab: R
                  })
                : V
                  ? (0, i.jsx)(x.Z, { onSelectApplication: $ })
                  : G === b.kK
                    ? (0, i.jsx)(T.Z, {
                          onScroll: t,
                          onSelectApplication: $
                      })
                    : (0, i.jsx)(N.Z, {
                          tabId: Number(G),
                          onScroll: t,
                          onSelectApplication: $
                      })
        ]
    });
};
