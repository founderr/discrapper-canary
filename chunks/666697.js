n(47120);
var i = n(200651),
    r = n(192379),
    l = n(442837),
    a = n(674588),
    o = n(264043),
    s = n(303383),
    c = n(125909),
    d = n(283836),
    u = n(374939),
    h = n(233374),
    m = n(283293),
    p = n(881294),
    g = n(292191),
    f = n(258971),
    _ = n(133743),
    E = n(680474),
    I = n(571737),
    C = n(101400),
    v = n(946542),
    N = n(213746),
    S = n(979007),
    T = n(981631),
    b = n(388032),
    x = n(890030);
t.Z = function (e) {
    let { applicationId: t, onSelectApplication: n, onScroll: A, initialTab: Z, onButtonsVisibilityChange: L } = e,
        P = r.useRef(null),
        y = (0, l.e7)([o.Z], () => o.Z.getApplication(t)),
        O = (0, l.e7)([o.Z], () => o.Z.getApplicationFetchState(t));
    r.useEffect(() => {
        null != t && null == y && a.i6(t);
    }, [t, y]),
        r.useEffect(() => {
            a.T4({ applicationId: t });
        }, [t]),
        r.useEffect(() => () => L(!0), [L]);
    let R = null == y ? void 0 : y.storefront_available,
        [j, D] = r.useState(null != Z ? Z : S.GlobalDiscoveryAppsSections.ABOUT),
        M = r.useCallback(
            (e) => {
                var t;
                null === (t = P.current) || void 0 === t || t.scrollTo({ to: 0 }), D(S.GlobalDiscoveryAppsSections.ABOUT), n(e);
            },
            [n]
        );
    r.useEffect(() => {
        (null == y ? void 0 : y.storefront_available) && null != t && (0, d.Z)(t);
    }, [null == y ? void 0 : y.storefront_available, t]);
    let w = (0, f.Uc)(),
        k = (0, l.e7)([s.Z], () => s.Z.getFetchState({ applicationId: null == y ? void 0 : y.id })),
        U = (0, l.e7)([s.Z], () => s.Z.getSimilarApplications({ applicationId: null == y ? void 0 : y.id })),
        G = r.useMemo(() => (null == U ? void 0 : U.applications.slice(0, 3)), [U]);
    r.useEffect(() => {
        (null == y ? void 0 : y.id) != null &&
            k !== s.M.FETCHING &&
            (0, p.z)(T.rMx.APP_DIRECTORY_PAGE_VIEWED, {
                current_page: f.m_.APPLICATION,
                previous_page: null == w ? void 0 : w.type,
                application_id: y.id,
                referrer: document.referrer,
                suggested_application_ids: null == G ? void 0 : G.map((e) => e.id)
            });
    }, [null == y ? void 0 : y.id, k]);
    let B = r.useMemo(
            () => [
                {
                    id: S.GlobalDiscoveryAppsSections.ABOUT,
                    label: b.intl.string(b.t.DkyHMD)
                },
                {
                    id: S.GlobalDiscoveryAppsSections.STORE,
                    label: b.intl.string(b.t.jgEXGB)
                }
            ],
            []
        ),
        H = r.useMemo(() => {
            if (null == y) return null;
            switch (j) {
                case S.GlobalDiscoveryAppsSections.ABOUT:
                    return (0, i.jsx)(E.Z, { application: y });
                case S.GlobalDiscoveryAppsSections.STORE:
                    return (0, i.jsx)(N.Z, { application: y });
            }
        }, [j, y]),
        V = r.useCallback(
            (e) => {
                (0, p.z)(T.rMx.APP_DIRECTORY_PROFILE_TAB_CLICKED, {
                    application_id: t,
                    tab_name: e
                }),
                    D(e),
                    e === S.GlobalDiscoveryAppsSections.ABOUT ? (0, _.Gp)(T.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE(t)) : (0, _.Gp)(T.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(t, e));
            },
            [t]
        ),
        F = r.useCallback((e) => {
            (0, p.z)(T.rMx.APP_DIRECTORY_CATEGORY_CLICKED, {
                category: e.name,
                category_id: e.id,
                current_page: f.m_.APPLICATION
            }),
                (0, _.pR)({ categoryId: e.id });
        }, []),
        z = j === S.GlobalDiscoveryAppsSections.ABOUT;
    return (0, i.jsx)(m.Z, {
        onScroll: A,
        ref: P,
        children: (0, i.jsx)(u.Z, {
            children:
                null == y
                    ? null == O || O === o.M.FETCHING
                        ? (0, i.jsx)('div', {
                              className: x.centerContainer,
                              children: (0, i.jsx)(c.Z, { loading: !0 })
                          })
                        : (0, i.jsx)('div', {
                              className: x.centerContainer,
                              children: (0, i.jsx)(g.Z, { className: x.error })
                          })
                    : (0, i.jsxs)('div', {
                          className: x.detailContainer,
                          children: [
                              (0, i.jsx)(I.Z, {
                                  application: y,
                                  onButtonsVisibilityChange: L
                              }),
                              (0, i.jsxs)('div', {
                                  className: x.contentContainer,
                                  children: [
                                      (0, i.jsxs)('div', {
                                          className: x.contentTabsContainer,
                                          children: [
                                              R &&
                                                  (0, i.jsx)('div', {
                                                      className: x.contentTabs,
                                                      children: (0, i.jsx)(h.Z, {
                                                          tabs: B,
                                                          onTabSelect: V,
                                                          selectedTab: j
                                                      })
                                                  }),
                                              H,
                                              (0, i.jsx)(v.Z, {
                                                  applicationId: t,
                                                  fetchState: k,
                                                  similarApplications: G,
                                                  onSelectApplication: M,
                                                  similarLoadId: null == U ? void 0 : U.loadId
                                              })
                                          ]
                                      }),
                                      z &&
                                          (0, i.jsx)(C.Z, {
                                              className: x.sidebar,
                                              application: y,
                                              onSelectCategory: F
                                          })
                                  ]
                              })
                          ]
                      })
        })
    });
};
