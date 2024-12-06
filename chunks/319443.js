n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    s = n(442837),
    o = n(481060),
    c = n(674588),
    d = n(264043),
    u = n(894653),
    h = n(34674),
    m = n(979233),
    p = n(88693),
    g = n(611928),
    f = n(922122),
    _ = n(680180),
    E = n(703656),
    I = n(31569),
    C = n(975907),
    v = n(119014),
    N = n(258971),
    S = n(133743),
    T = n(726941),
    b = n(666697),
    x = n(548514),
    A = n(370648),
    Z = n(569527),
    L = n(979007),
    y = n(388032),
    P = n(544973);
function O(e) {
    let { applicationId: t, showDetailHeaderButtons: n, onClickBack: l } = e,
        c = (0, s.e7)([d.Z], () => d.Z.getApplication(t)),
        [u, h] = r.useState(!n),
        m = r.useCallback(() => {
            h(!n);
        }, [n]);
    return (0, i.jsxs)('div', {
        className: P.detailHeaderContainer,
        children: [
            (0, i.jsx)('div', {
                className: P.detailHeaderSection,
                children: (0, i.jsx)(g.Cm, {
                    icon: o.ArrowLargeLeftIcon,
                    onClick: l
                })
            }),
            (0, i.jsx)(o.Heading, {
                variant: 'heading-lg/semibold',
                color: 'header-primary',
                className: P.detailHeader,
                lineClamp: 1,
                children: null == c ? void 0 : c.name
            }),
            (0, i.jsx)('div', {
                className: a()(P.detailHeaderSection, P.detailHeaderButtonsContainer, {
                    [P.visible]: n,
                    [P.hide]: !n && !u,
                    [P.hidden]: !n && u
                }),
                onTransitionEnd: m,
                children:
                    null != c
                        ? (0, i.jsx)(x.Z, {
                              application: c,
                              size: 'sm'
                          })
                        : null
            })
        ]
    });
}
t.Z = function () {
    var e;
    let { onScroll: t, scrollPosition: n, resetScrollPosition: l } = (0, m.M)(),
        a = (0, N.Xh)(),
        d = (null == a ? void 0 : a.type) === N.m_.CATEGORY ? a.categoryId : void 0,
        { applicationId: x, section: R } = (null == a ? void 0 : a.type) === N.m_.APPLICATION ? a : {},
        { query: j, categoryId: D } = (null == a ? void 0 : a.type) === N.m_.SEARCH ? a : {},
        M = (0, s.e7)([u.Z], () => u.Z.getCategories()),
        w = r.useMemo(() => [(0, h.KQ)(), ...M], [M]),
        k = r.useMemo(() => w.find((e) => e.id === Number(D)), [w, D]),
        { tabs: U, selectedTab: G, onSelectTab: B } = (0, v.i)(null == d ? void 0 : d.toString()),
        [H, V] = r.useState(!1),
        F = r.useCallback((e) => {
            V(!e);
        }, []);
    r.useEffect(() => {
        c.CP();
    }, []),
        r.useEffect(() => {
            c.g5();
        }, []),
        r.useEffect(() => N.aQ.setState({ lastItem: a }), [a]);
    let z = null != x,
        W = (null == a ? void 0 : a.type) === N.m_.SEARCH,
        { searchQuery: Y, onSearchTextChange: K, onClearSearch: q, onSearchSubmit: X } = (0, C.M)({ initialQuery: null != j ? j : '' }),
        Q = I.Z.useField('searchBarState'),
        {
            onTabsAvailableWidthChange: J,
            onCollapsedSearchBarClick: $,
            onSearchBarBlur: ee
        } = (0, p.U)({
            isSearchBarVisible: !0,
            isSearchBarEmpty: '' === Y.trim(),
            searchBarState: Q,
            setSearchBarState: (e) => I.Z.setState({ searchBarState: e })
        }),
        et = r.useCallback(
            (e) => {
                B(e), W && q(), l();
            },
            [W, q, B, l]
        ),
        en = r.useCallback((e) => (0, S.ph)({ applicationId: e }), []),
        ei = z || W,
        er = r.useCallback(() => {
            null != (0, N.Uc)() ? (0, E.op)() : (0, S.Yp)();
        }, []);
    return (0, i.jsxs)('div', {
        className: P.container,
        children: [
            (0, i.jsxs)(g.ZP, {
                variant: ei ? g._6.RELATIVE : g._6.OVERLAY,
                children: [
                    !ei && (0, i.jsx)(g.z6, { scrollPosition: n }),
                    z
                        ? (0, i.jsx)(O, {
                              applicationId: x,
                              showDetailHeaderButtons: H,
                              onClickBack: er
                          })
                        : (0, i.jsxs)(i.Fragment, {
                              children: [
                                  W
                                      ? (0, i.jsx)(g.Cm, {
                                            icon: o.ArrowLargeLeftIcon,
                                            onClick: er
                                        })
                                      : (0, i.jsx)(g.aV, { icon: o.AppsIcon }),
                                  W
                                      ? (0, i.jsx)(o.Heading, {
                                            variant: 'heading-lg/semibold',
                                            color: 'header-primary',
                                            className: P.searchHeader,
                                            children: null != j && '' !== j ? y.intl.formatToPlainString(y.t.zHdzqa, { query: j }) : y.intl.formatToPlainString(y.t.Qhj5Bg, { categoryName: null !== (e = null == k ? void 0 : k.name) && void 0 !== e ? e : y.intl.string(y.t.E407b2) })
                                        })
                                      : (0, i.jsx)(f.Z, {
                                            tabs: U,
                                            selectedTab: G,
                                            onTabSelect: et,
                                            onAvailableWidthChange: J
                                        }),
                                  (0, i.jsx)(_.Z, {
                                      query: Y,
                                      placeholder: y.intl.string(y.t.HPQXEB),
                                      onTextChange: K,
                                      onClear: q,
                                      onSubmit: X,
                                      onCollapsedClick: $,
                                      state: Q,
                                      onBlur: ee
                                  })
                              ]
                          })
                ]
            }),
            z
                ? (0, i.jsx)(b.Z, {
                      onScroll: t,
                      onSelectApplication: en,
                      applicationId: x,
                      initialTab: R,
                      onButtonsVisibilityChange: F
                  })
                : W
                  ? (0, i.jsx)(Z.Z, { onSelectApplication: en })
                  : G === L.GLOBAL_DISCOVERY_APPS_FEATURED_CATEGORY_ID
                    ? (0, i.jsx)(A.Z, {
                          onScroll: t,
                          onSelectApplication: en
                      })
                    : (0, i.jsx)(T.Z, {
                          tabId: Number(G),
                          onScroll: t,
                          onSelectApplication: en
                      })
        ]
    });
};
