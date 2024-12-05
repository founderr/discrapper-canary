n(47120);
var i = n(200651),
    r = n(192379),
    l = n(442837),
    a = n(674588),
    s = n(264043),
    o = n(125909),
    c = n(283836),
    d = n(374939),
    u = n(233374),
    h = n(283293),
    m = n(292191),
    p = n(133743),
    g = n(680474),
    f = n(571737),
    _ = n(101400),
    E = n(946542),
    I = n(213746),
    C = n(979007),
    v = n(981631),
    N = n(388032),
    S = n(890030);
t.Z = function (e) {
    let { applicationId: t, onSelectApplication: n, onScroll: T, initialTab: b, onButtonsVisibilityChange: A } = e,
        x = r.useRef(null),
        Z = (0, l.e7)([s.Z], () => s.Z.getApplication(t)),
        L = (0, l.e7)([s.Z], () => s.Z.getApplicationFetchState(t));
    r.useEffect(() => {
        null != t && null == Z && a.i6(t);
    }, [t, Z]),
        r.useEffect(() => () => A(!1), [A]);
    let y = null == Z ? void 0 : Z.storefront_available,
        [P, O] = r.useState(null != b ? b : C.GlobalDiscoveryAppsSections.ABOUT),
        R = r.useCallback(
            (e) => {
                var t;
                null === (t = x.current) || void 0 === t || t.scrollTo({ to: 0 }), O(C.GlobalDiscoveryAppsSections.ABOUT), n(e);
            },
            [n]
        );
    r.useEffect(() => {
        (null == Z ? void 0 : Z.storefront_available) && null != t && (0, c.Z)(t);
    }, [null == Z ? void 0 : Z.storefront_available, t]);
    let j = r.useMemo(
            () => [
                {
                    id: C.GlobalDiscoveryAppsSections.ABOUT,
                    label: N.intl.string(N.t.DkyHMD)
                },
                {
                    id: C.GlobalDiscoveryAppsSections.STORE,
                    label: N.intl.string(N.t.jgEXGB)
                }
            ],
            []
        ),
        D = r.useMemo(() => {
            if (null == Z) return null;
            switch (P) {
                case C.GlobalDiscoveryAppsSections.ABOUT:
                    return (0, i.jsx)(g.Z, { application: Z });
                case C.GlobalDiscoveryAppsSections.STORE:
                    return (0, i.jsx)(I.Z, { application: Z });
            }
        }, [P, Z]),
        M = r.useCallback(
            (e) => {
                O(e), e === C.GlobalDiscoveryAppsSections.ABOUT ? (0, p.Gp)(v.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE(t)) : (0, p.Gp)(v.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(t, e));
            },
            [t]
        ),
        w = r.useCallback((e) => {
            (0, p.pR)({ categoryId: e });
        }, []),
        k = P === C.GlobalDiscoveryAppsSections.ABOUT;
    return (0, i.jsx)(h.Z, {
        onScroll: T,
        ref: x,
        children: (0, i.jsx)(d.Z, {
            children:
                null == Z
                    ? null == L || L === s.M.FETCHING
                        ? (0, i.jsx)('div', {
                              className: S.centerContainer,
                              children: (0, i.jsx)(o.Z, { loading: !0 })
                          })
                        : (0, i.jsx)('div', {
                              className: S.centerContainer,
                              children: (0, i.jsx)(m.Z, { className: S.error })
                          })
                    : (0, i.jsxs)('div', {
                          className: S.detailContainer,
                          children: [
                              (0, i.jsx)(f.Z, {
                                  application: Z,
                                  onButtonsVisibilityChange: A
                              }),
                              (0, i.jsxs)('div', {
                                  className: S.contentContainer,
                                  children: [
                                      (0, i.jsxs)('div', {
                                          className: S.contentTabsContainer,
                                          children: [
                                              y &&
                                                  (0, i.jsx)('div', {
                                                      className: S.contentTabs,
                                                      children: (0, i.jsx)(u.Z, {
                                                          tabs: j,
                                                          onTabSelect: M,
                                                          selectedTab: P
                                                      })
                                                  }),
                                              D,
                                              (0, i.jsx)(E.Z, {
                                                  application: Z,
                                                  onSelectApplication: R
                                              })
                                          ]
                                      }),
                                      k &&
                                          (0, i.jsx)(_.Z, {
                                              className: S.sidebar,
                                              application: Z,
                                              onSelectCategory: w
                                          })
                                  ]
                              })
                          ]
                      })
        })
    });
};
