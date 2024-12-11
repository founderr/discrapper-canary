n(47120);
var i = n(200651),
    r = n(192379),
    l = n(442837),
    a = n(674588),
    o = n(264043),
    s = n(125909),
    c = n(283836),
    d = n(374939),
    u = n(233374),
    h = n(283293),
    m = n(881294),
    p = n(292191),
    g = n(258971),
    f = n(133743),
    _ = n(680474),
    E = n(571737),
    I = n(101400),
    C = n(946542),
    v = n(213746),
    S = n(979007),
    N = n(981631),
    T = n(388032),
    b = n(890030);
t.Z = function (e) {
    let { applicationId: t, onSelectApplication: n, onScroll: A, initialTab: x, onButtonsVisibilityChange: Z } = e,
        L = r.useRef(null),
        y = (0, l.e7)([o.Z], () => o.Z.getApplication(t)),
        P = (0, l.e7)([o.Z], () => o.Z.getApplicationFetchState(t));
    r.useEffect(() => {
        null != t && null == y && a.i6(t);
    }, [t, y]),
        r.useEffect(() => () => Z(!1), [Z]);
    let O = null == y ? void 0 : y.storefront_available,
        [R, j] = r.useState(null != x ? x : S.GlobalDiscoveryAppsSections.ABOUT),
        D = r.useCallback(
            (e) => {
                var t;
                null === (t = L.current) || void 0 === t || t.scrollTo({ to: 0 }), j(S.GlobalDiscoveryAppsSections.ABOUT), n(e);
            },
            [n]
        );
    r.useEffect(() => {
        (null == y ? void 0 : y.storefront_available) && null != t && (0, c.Z)(t);
    }, [null == y ? void 0 : y.storefront_available, t]);
    let M = r.useMemo(
            () => [
                {
                    id: S.GlobalDiscoveryAppsSections.ABOUT,
                    label: T.intl.string(T.t.DkyHMD)
                },
                {
                    id: S.GlobalDiscoveryAppsSections.STORE,
                    label: T.intl.string(T.t.jgEXGB)
                }
            ],
            []
        ),
        w = r.useMemo(() => {
            if (null == y) return null;
            switch (R) {
                case S.GlobalDiscoveryAppsSections.ABOUT:
                    return (0, i.jsx)(_.Z, { application: y });
                case S.GlobalDiscoveryAppsSections.STORE:
                    return (0, i.jsx)(v.Z, { application: y });
            }
        }, [R, y]),
        k = r.useCallback(
            (e) => {
                j(e), e === S.GlobalDiscoveryAppsSections.ABOUT ? (0, f.Gp)(N.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE(t)) : (0, f.Gp)(N.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(t, e));
            },
            [t]
        ),
        U = r.useCallback((e) => {
            (0, m.z)(N.rMx.APP_DIRECTORY_CATEGORY_CLICKED, {
                category: e.name,
                category_id: e.id,
                current_page: g.m_.APPLICATION
            }),
                (0, f.pR)({ categoryId: e.id });
        }, []),
        G = R === S.GlobalDiscoveryAppsSections.ABOUT;
    return (0, i.jsx)(h.Z, {
        onScroll: A,
        ref: L,
        children: (0, i.jsx)(d.Z, {
            children:
                null == y
                    ? null == P || P === o.M.FETCHING
                        ? (0, i.jsx)('div', {
                              className: b.centerContainer,
                              children: (0, i.jsx)(s.Z, { loading: !0 })
                          })
                        : (0, i.jsx)('div', {
                              className: b.centerContainer,
                              children: (0, i.jsx)(p.Z, { className: b.error })
                          })
                    : (0, i.jsxs)('div', {
                          className: b.detailContainer,
                          children: [
                              (0, i.jsx)(E.Z, {
                                  application: y,
                                  onButtonsVisibilityChange: Z
                              }),
                              (0, i.jsxs)('div', {
                                  className: b.contentContainer,
                                  children: [
                                      (0, i.jsxs)('div', {
                                          className: b.contentTabsContainer,
                                          children: [
                                              O &&
                                                  (0, i.jsx)('div', {
                                                      className: b.contentTabs,
                                                      children: (0, i.jsx)(u.Z, {
                                                          tabs: M,
                                                          onTabSelect: k,
                                                          selectedTab: R
                                                      })
                                                  }),
                                              w,
                                              (0, i.jsx)(C.Z, {
                                                  application: y,
                                                  onSelectApplication: D
                                              })
                                          ]
                                      }),
                                      G &&
                                          (0, i.jsx)(I.Z, {
                                              className: b.sidebar,
                                              application: y,
                                              onSelectCategory: U
                                          })
                                  ]
                              })
                          ]
                      })
        })
    });
};
