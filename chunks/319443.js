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
    m = n(132871),
    p = n(979233),
    g = n(88693),
    f = n(611928),
    _ = n(922122),
    E = n(680180),
    I = n(726115),
    C = n(703656),
    v = n(626135),
    N = n(31569),
    S = n(975907),
    T = n(119014),
    b = n(258971),
    A = n(133743),
    x = n(726941),
    Z = n(666697),
    L = n(548514),
    y = n(370648),
    P = n(569527),
    O = n(979007),
    R = n(981631),
    j = n(388032),
    D = n(544973);
function M(e) {
    let { applicationId: t, showDetailHeaderButtons: n, onClickBack: l } = e,
        c = (0, s.e7)([d.Z], () => d.Z.getApplication(t)),
        [u, h] = r.useState(!n),
        m = r.useCallback(() => {
            h(!n);
        }, [n]);
    return (0, i.jsxs)('div', {
        className: D.detailHeaderContainer,
        children: [
            (0, i.jsx)('div', {
                className: D.detailHeaderSection,
                children: (0, i.jsx)(f.Cm, {
                    icon: o.ArrowLargeLeftIcon,
                    onClick: l
                })
            }),
            (0, i.jsx)(o.Heading, {
                variant: 'heading-lg/semibold',
                color: 'header-primary',
                className: D.detailHeader,
                lineClamp: 1,
                children: null == c ? void 0 : c.name
            }),
            (0, i.jsx)('div', {
                className: a()(D.detailHeaderSection, D.detailHeaderButtonsContainer, {
                    [D.visible]: n,
                    [D.hide]: !n && !u,
                    [D.hidden]: !n && u
                }),
                onTransitionEnd: m,
                children:
                    null != c
                        ? (0, i.jsx)(L.Z, {
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
    let { onScroll: t, scrollPosition: n, resetScrollPosition: l } = (0, p.M)(),
        a = (0, b.Xh)(),
        d = (null == a ? void 0 : a.type) === b.m_.CATEGORY ? a.categoryId : void 0,
        { applicationId: L, section: w } = (null == a ? void 0 : a.type) === b.m_.APPLICATION ? a : {},
        { query: k, categoryId: U } = (null == a ? void 0 : a.type) === b.m_.SEARCH ? a : {},
        G = (0, s.e7)([u.Z], () => u.Z.getCategories()),
        B = r.useMemo(() => [(0, h.KQ)(), ...G], [G]),
        H = r.useMemo(() => B.find((e) => e.id === Number(U)), [B, U]),
        { tabs: V, selectedTab: F, onSelectTab: z } = (0, T.i)(null == d ? void 0 : d.toString()),
        [W, Y] = r.useState(!1),
        K = r.useCallback((e) => {
            Y(!e);
        }, []),
        q = b.z8.useField('trackedOpenedFromExternalEntrypoint'),
        X = b.z8.useField('sessionId');
    r.useEffect(() => {
        if (!q && null == X) {
            let e = (0, I.PM)();
            v.default.track(R.rMx.APP_DIRECTORY_OPENED, {
                source: m.ApplicationDirectoryEntrypointNames.EXTERNAL,
                session_id: e
            }),
                b.z8.setState({
                    trackedOpenedFromExternalEntrypoint: !0,
                    sessionId: e,
                    entrypoint: { name: m.ApplicationDirectoryEntrypointNames.EXTERNAL },
                    guildId: null
                });
        }
    }, [X, q]),
        r.useEffect(() => {
            c.CP();
        }, []),
        r.useEffect(() => {
            c.g5();
        }, []),
        r.useEffect(() => b.aQ.setState({ lastItem: a }), [a]);
    let Q = null != L,
        J = (null == a ? void 0 : a.type) === b.m_.SEARCH,
        { searchQuery: $, onSearchTextChange: ee, onClearSearch: et, onSearchSubmit: en } = (0, S.M)({ initialQuery: null != k ? k : '' }),
        ei = N.Z.useField('searchBarState'),
        {
            onTabsAvailableWidthChange: er,
            onCollapsedSearchBarClick: el,
            onSearchBarBlur: ea
        } = (0, g.U)({
            isSearchBarVisible: !0,
            isSearchBarEmpty: '' === $.trim(),
            searchBarState: ei,
            setSearchBarState: (e) => N.Z.setState({ searchBarState: e })
        }),
        es = r.useCallback(
            (e) => {
                z(e), J && et(), l();
            },
            [J, et, z, l]
        ),
        eo = r.useCallback((e) => (0, A.ph)({ applicationId: e }), []),
        ec = Q || J,
        ed = r.useCallback(() => {
            null != (0, b.Uc)() ? (0, C.op)() : (0, A.Yp)();
        }, []);
    return (0, i.jsxs)('div', {
        className: D.container,
        children: [
            (0, i.jsxs)(f.ZP, {
                variant: ec ? f._6.RELATIVE : f._6.OVERLAY,
                children: [
                    !ec && (0, i.jsx)(f.z6, { scrollPosition: n }),
                    Q
                        ? (0, i.jsx)(M, {
                              applicationId: L,
                              showDetailHeaderButtons: W,
                              onClickBack: ed
                          })
                        : (0, i.jsxs)(i.Fragment, {
                              children: [
                                  J
                                      ? (0, i.jsx)(f.Cm, {
                                            icon: o.ArrowLargeLeftIcon,
                                            onClick: ed
                                        })
                                      : (0, i.jsx)(f.aV, { icon: o.AppsIcon }),
                                  J
                                      ? (0, i.jsx)(o.Heading, {
                                            variant: 'heading-lg/semibold',
                                            color: 'header-primary',
                                            className: D.searchHeader,
                                            children: null != k && '' !== k ? j.intl.formatToPlainString(j.t.zHdzqa, { query: k }) : j.intl.formatToPlainString(j.t.Qhj5Bg, { categoryName: null !== (e = null == H ? void 0 : H.name) && void 0 !== e ? e : j.intl.string(j.t.E407b2) })
                                        })
                                      : (0, i.jsx)(_.Z, {
                                            tabs: V,
                                            selectedTab: F,
                                            onTabSelect: es,
                                            onAvailableWidthChange: er
                                        }),
                                  (0, i.jsx)(E.Z, {
                                      query: $,
                                      placeholder: j.intl.string(j.t.HPQXEB),
                                      onTextChange: ee,
                                      onClear: et,
                                      onSubmit: en,
                                      onCollapsedClick: el,
                                      state: ei,
                                      onBlur: ea
                                  })
                              ]
                          })
                ]
            }),
            Q
                ? (0, i.jsx)(Z.Z, {
                      onScroll: t,
                      onSelectApplication: eo,
                      applicationId: L,
                      initialTab: w,
                      onButtonsVisibilityChange: K
                  })
                : J
                  ? (0, i.jsx)(P.Z, { onSelectApplication: eo })
                  : F === O.GLOBAL_DISCOVERY_APPS_FEATURED_CATEGORY_ID
                    ? (0, i.jsx)(y.Z, {
                          onScroll: t,
                          onSelectApplication: eo
                      })
                    : (0, i.jsx)(x.Z, {
                          tabId: Number(F),
                          onScroll: t,
                          onSelectApplication: eo
                      })
        ]
    });
};
