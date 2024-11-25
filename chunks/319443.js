n(47120);
var i = n(200651),
    r = n(192379),
    l = n(442837),
    a = n(481060),
    s = n(674588),
    o = n(894653),
    c = n(34674),
    d = n(979233),
    u = n(88693),
    h = n(611928),
    m = n(922122),
    p = n(680180),
    g = n(703656),
    f = n(975907),
    _ = n(119014),
    E = n(258971),
    I = n(133743),
    C = n(726941),
    v = n(666697),
    S = n(370648),
    N = n(569527),
    T = n(979007),
    A = n(388032),
    b = n(544973);
t.Z = function () {
    var e;
    let { onScroll: t, scrollPosition: n, resetScrollPosition: x } = (0, d.M)(),
        Z = (0, E.Xh)(),
        L = (null == Z ? void 0 : Z.type) === E.m_.CATEGORY ? Z.categoryId : void 0,
        { applicationId: y, section: O } = (null == Z ? void 0 : Z.type) === E.m_.APPLICATION ? Z : {},
        { query: R, categoryId: P } = (null == Z ? void 0 : Z.type) === E.m_.SEARCH ? Z : {},
        j = (0, l.e7)([o.Z], () => o.Z.getCategories()),
        D = r.useMemo(() => [(0, c.KQ)(), ...j], [j]),
        M = r.useMemo(() => D.find((e) => e.id === Number(P)), [D, P]),
        { tabs: w, selectedTab: k, onSelectTab: U } = (0, _.i)(null == L ? void 0 : L.toString());
    r.useEffect(() => {
        s.CP();
    }, []),
        r.useEffect(() => {
            s.g5();
        }, []),
        r.useEffect(() => E.aQ.setState({ lastItem: Z }), [Z]);
    let G = null != y,
        B = (null == Z ? void 0 : Z.type) === E.m_.SEARCH,
        { searchQuery: V, onSearchTextChange: H, onClearSearch: F, onSearchSubmit: z } = (0, f.M)({ initialQuery: null != R ? R : '' }),
        {
            searchBarState: Y,
            onTabsAvailableWidthChange: W,
            onCollapsedSearchBarClick: K,
            onSearchBarBlur: q
        } = (0, u.U)({
            isSearchBarVisible: !0,
            isSearchBarEmpty: '' === V.trim()
        }),
        X = r.useCallback(
            (e) => {
                U(e), B && F(), x();
            },
            [B, F, U, x]
        ),
        Q = r.useCallback((e) => (0, I.ph)({ applicationId: e }), []),
        J = G || B,
        $ = r.useCallback(() => {
            null != (0, E.Uc)() ? (0, g.op)() : (0, I.Yp)();
        }, []);
    return (0, i.jsxs)('div', {
        className: b.container,
        children: [
            (0, i.jsxs)(h.ZP, {
                variant: J ? h._6.RELATIVE : h._6.OVERLAY,
                children: [
                    !J && (0, i.jsx)(h.z6, { scrollPosition: n }),
                    J
                        ? (0, i.jsx)(h.Cm, {
                              icon: a.ArrowLargeLeftIcon,
                              onClick: $
                          })
                        : (0, i.jsx)(h.aV, { icon: a.AppsIcon }),
                    G
                        ? null
                        : B
                          ? (0, i.jsx)(a.Heading, {
                                variant: 'heading-lg/semibold',
                                color: 'header-primary',
                                className: b.alternateHeader,
                                children: null != R && '' !== R ? A.intl.formatToPlainString(A.t.zHdzqa, { query: R }) : A.intl.formatToPlainString(A.t.Qhj5Bg, { categoryName: null !== (e = null == M ? void 0 : M.name) && void 0 !== e ? e : A.intl.string(A.t.E407b2) })
                            })
                          : (0, i.jsx)(m.Z, {
                                tabs: w,
                                selectedTab: k,
                                onTabSelect: X,
                                onAvailableWidthChange: W
                            }),
                    !G &&
                        (0, i.jsx)(p.Z, {
                            query: V,
                            placeholder: A.intl.string(A.t['7J5i+/']),
                            onTextChange: H,
                            onClear: F,
                            onSubmit: z,
                            onCollapsedClick: K,
                            state: Y,
                            onBlur: q
                        })
                ]
            }),
            G
                ? (0, i.jsx)(v.Z, {
                      onScroll: t,
                      onSelectApplication: Q,
                      applicationId: y,
                      initialTab: O
                  })
                : B
                  ? (0, i.jsx)(N.Z, { onSelectApplication: Q })
                  : k === T.kK
                    ? (0, i.jsx)(S.Z, {
                          onScroll: t,
                          onSelectApplication: Q
                      })
                    : (0, i.jsx)(C.Z, {
                          tabId: Number(k),
                          onScroll: t,
                          onSelectApplication: Q
                      })
        ]
    });
};
