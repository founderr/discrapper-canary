n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(392711),
    s = n(442837),
    c = n(481060),
    d = n(674588),
    u = n(264043),
    h = n(894653),
    m = n(34674),
    p = n(132871),
    g = n(979233),
    f = n(88693),
    _ = n(611928),
    E = n(922122),
    I = n(680180),
    C = n(726115),
    v = n(703656),
    S = n(594174),
    N = n(626135),
    T = n(31569),
    b = n(881294),
    A = n(975907),
    x = n(119014),
    Z = n(258971),
    L = n(133743),
    y = n(726941),
    P = n(666697),
    O = n(548514),
    R = n(370648),
    j = n(569527),
    D = n(979007),
    M = n(981631),
    w = n(388032),
    k = n(544973);
function U(e) {
    let { applicationId: t, hideDetailHeaderButtons: n, onClickBack: l } = e,
        o = (0, s.e7)([u.Z], () => u.Z.getApplication(t)),
        [d, h] = r.useState(n),
        m = r.useCallback(() => {
            h(n);
        }, [n]);
    return (0, i.jsxs)('div', {
        className: k.detailHeaderContainer,
        children: [
            (0, i.jsx)('div', {
                className: k.detailHeaderSection,
                children: (0, i.jsx)(_.Cm, {
                    icon: c.ArrowLargeLeftIcon,
                    onClick: l
                })
            }),
            (0, i.jsx)(c.Heading, {
                variant: 'heading-lg/semibold',
                color: 'header-primary',
                className: k.detailHeader,
                lineClamp: 1,
                children: null == o ? void 0 : o.name
            }),
            (0, i.jsx)('div', {
                className: a()(k.detailHeaderSection, k.detailHeaderButtonsContainer, {
                    [k.visible]: !n,
                    [k.hide]: n && !d,
                    [k.hidden]: n && d
                }),
                onTransitionEnd: m,
                children:
                    null != o
                        ? (0, i.jsx)(O.Z, {
                              application: o,
                              size: 'sm'
                          })
                        : null
            })
        ]
    });
}
t.Z = function () {
    var e;
    let { onScroll: t, scrollPosition: n, resetScrollPosition: l } = (0, g.M)(),
        a = (0, Z.Xh)(),
        u = (null == a ? void 0 : a.type) === Z.m_.CATEGORY ? a.categoryId : void 0,
        { applicationId: O, section: G } = (null == a ? void 0 : a.type) === Z.m_.APPLICATION ? a : {},
        { query: B, categoryId: H } = (null == a ? void 0 : a.type) === Z.m_.SEARCH ? a : {},
        V = (0, s.e7)([h.Z], () => h.Z.getCategories()),
        F = r.useMemo(() => [(0, m.KQ)(), ...V], [V]),
        z = r.useMemo(() => F.find((e) => e.id === Number(H)), [F, H]),
        { tabs: Y, selectedTab: W, onSelectTab: K } = (0, x.i)(null == u ? void 0 : u.toString()),
        [q, X] = r.useState(!0),
        Q = Z.z8.useField('trackedOpenedFromExternalEntrypoint'),
        J = Z.z8.useField('sessionId'),
        $ = (0, s.e7)([S.default], () => S.default.getCurrentUser());
    r.useEffect(() => {
        if (!Q && null == J) {
            let e = (0, C.PM)();
            N.default.track(M.rMx.APP_DIRECTORY_OPENED, {
                source: p.ApplicationDirectoryEntrypointNames.EXTERNAL,
                session_id: e,
                user_id: null == $ ? void 0 : $.id
            }),
                Z.z8.setState({
                    trackedOpenedFromExternalEntrypoint: !0,
                    sessionId: e,
                    entrypoint: { name: p.ApplicationDirectoryEntrypointNames.EXTERNAL },
                    guildId: null
                });
        }
    }, [J, Q, null == $ ? void 0 : $.id]),
        r.useEffect(() => {
            d.CP();
        }, []),
        r.useEffect(() => {
            d.g5();
        }, []),
        r.useEffect(() => Z.aQ.setState({ lastItem: a }), [a]);
    let ee = null != O,
        et = (null == a ? void 0 : a.type) === Z.m_.SEARCH,
        { searchQuery: en, onSearchTextChange: ei, onClearSearch: er, onSearchSubmit: el } = (0, A.M)({ initialQuery: null != B ? B : '' }),
        ea = T.Z.useField('searchBarState'),
        {
            onTabsAvailableWidthChange: eo,
            onCollapsedSearchBarClick: es,
            onSearchBarBlur: ec
        } = (0, f.U)({
            isSearchBarVisible: !0,
            isSearchBarEmpty: '' === en.trim(),
            searchBarState: ea,
            setSearchBarState: (e) => T.Z.setState({ searchBarState: e })
        }),
        ed = r.useCallback(
            (e) => {
                K(e), et && er(), l();
            },
            [et, er, K, l]
        ),
        eu = r.useCallback((e) => (0, L.ph)({ applicationId: e }), []),
        eh = ee || et,
        em = r.useCallback(() => {
            null != (0, Z.Uc)() ? (0, v.op)() : (0, L.Yp)();
        }, []),
        ep = (0, o.debounce)((e) => {
            let { scrollTop: t, offsetHeight: n, scrollHeight: i, location: r } = e;
            t > 0 &&
                (0, b.z)(M.rMx.APP_DIRECTORY_PAGE_SCROLLED, {
                    scroll_visible_percentile: (t + n) / i,
                    current_page: r
                });
        }, 200),
        eg = r.useCallback(
            (e, n) => {
                t(e),
                    ep({
                        scrollTop: e.currentTarget.scrollTop,
                        offsetHeight: e.currentTarget.offsetHeight,
                        scrollHeight: e.currentTarget.scrollHeight,
                        location: n
                    });
            },
            [ep, t]
        );
    return (0, i.jsxs)('div', {
        className: k.container,
        children: [
            (0, i.jsxs)(_.ZP, {
                variant: eh ? _._6.RELATIVE : _._6.OVERLAY,
                children: [
                    !eh && (0, i.jsx)(_.z6, { scrollPosition: n }),
                    ee
                        ? (0, i.jsx)(U, {
                              applicationId: O,
                              hideDetailHeaderButtons: q,
                              onClickBack: em
                          })
                        : (0, i.jsxs)(i.Fragment, {
                              children: [
                                  et
                                      ? (0, i.jsx)(_.Cm, {
                                            icon: c.ArrowLargeLeftIcon,
                                            onClick: em
                                        })
                                      : (0, i.jsx)(_.aV, { icon: c.AppsIcon }),
                                  et
                                      ? (0, i.jsx)(c.Heading, {
                                            variant: 'heading-lg/semibold',
                                            color: 'header-primary',
                                            className: k.searchHeader,
                                            children: null != B && '' !== B ? w.intl.formatToPlainString(w.t.zHdzqa, { query: B }) : w.intl.formatToPlainString(w.t.Qhj5Bg, { categoryName: null !== (e = null == z ? void 0 : z.name) && void 0 !== e ? e : w.intl.string(w.t.E407b2) })
                                        })
                                      : (0, i.jsx)(E.Z, {
                                            tabs: Y,
                                            selectedTab: W,
                                            onTabSelect: ed,
                                            onAvailableWidthChange: eo
                                        }),
                                  (0, i.jsx)(I.Z, {
                                      query: en,
                                      placeholder: w.intl.string(w.t.HPQXEB),
                                      onTextChange: ei,
                                      onClear: er,
                                      onSubmit: el,
                                      onCollapsedClick: es,
                                      state: ea,
                                      onBlur: ec
                                  })
                              ]
                          })
                ]
            }),
            ee
                ? (0, i.jsx)(P.Z, {
                      onScroll: (e) => eg(e, Z.m_.APPLICATION),
                      onSelectApplication: eu,
                      applicationId: O,
                      initialTab: G,
                      onButtonsVisibilityChange: X
                  })
                : et
                  ? (0, i.jsx)(j.Z, {
                        onSelectApplication: eu,
                        onScroll: (e) => eg(e, Z.m_.SEARCH)
                    })
                  : W === D.GLOBAL_DISCOVERY_APPS_FEATURED_CATEGORY_ID.toString()
                    ? (0, i.jsx)(R.Z, {
                          onScroll: (e) => eg(e, Z.m_.HOME),
                          onSelectApplication: eu
                      })
                    : (0, i.jsx)(y.Z, {
                          tabId: Number(W),
                          onScroll: (e) => eg(e, Z.m_.CATEGORY),
                          onSelectApplication: eu
                      })
        ]
    });
};
