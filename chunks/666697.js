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
    let { applicationId: t, onSelectApplication: n, onScroll: T, initialTab: b } = e,
        A = r.useRef(null),
        x = (0, l.e7)([s.Z], () => s.Z.getApplication(t)),
        Z = (0, l.e7)([s.Z], () => s.Z.getApplicationFetchState(t));
    r.useEffect(() => {
        null != t && null == x && a.i6(t);
    }, [t, x]);
    let L = null == x ? void 0 : x.storefront_available,
        [y, P] = r.useState(null != b ? b : C.GlobalDiscoveryAppsSections.ABOUT),
        O = r.useCallback(
            (e) => {
                var t;
                null === (t = A.current) || void 0 === t || t.scrollTo({ to: 0 }), P(C.GlobalDiscoveryAppsSections.ABOUT), n(e);
            },
            [n]
        );
    r.useEffect(() => {
        (null == x ? void 0 : x.storefront_available) && null != t && (0, c.Z)(t);
    }, [null == x ? void 0 : x.storefront_available, t]);
    let R = r.useMemo(
            () => [
                {
                    id: C.GlobalDiscoveryAppsSections.ABOUT,
                    label: N.intl.string(N.t.JkjJBQ)
                },
                {
                    id: C.GlobalDiscoveryAppsSections.STORE,
                    label: N.intl.string(N.t.NfuihY)
                }
            ],
            []
        ),
        j = r.useMemo(() => {
            if (null == x) return null;
            switch (y) {
                case C.GlobalDiscoveryAppsSections.ABOUT:
                    return (0, i.jsx)(g.Z, { application: x });
                case C.GlobalDiscoveryAppsSections.STORE:
                    return (0, i.jsx)(I.Z, { application: x });
            }
        }, [y, x]),
        D = r.useCallback(
            (e) => {
                P(e), e === C.GlobalDiscoveryAppsSections.ABOUT ? (0, p.Gp)(v.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE(t)) : (0, p.Gp)(v.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(t, e));
            },
            [t]
        ),
        M = r.useCallback((e) => {
            (0, p.pR)({ categoryId: e });
        }, []),
        w = y === C.GlobalDiscoveryAppsSections.ABOUT;
    return (0, i.jsx)(h.Z, {
        onScroll: T,
        ref: A,
        children: (0, i.jsx)(d.Z, {
            children:
                null == x
                    ? null == Z || Z === s.M.FETCHING
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
                              (0, i.jsx)(f.Z, { application: x }),
                              (0, i.jsxs)('div', {
                                  className: S.contentContainer,
                                  children: [
                                      (0, i.jsxs)('div', {
                                          className: S.contentTabsContainer,
                                          children: [
                                              L &&
                                                  (0, i.jsx)('div', {
                                                      className: S.contentTabs,
                                                      children: (0, i.jsx)(u.Z, {
                                                          tabs: R,
                                                          onTabSelect: D,
                                                          selectedTab: y
                                                      })
                                                  }),
                                              j,
                                              (0, i.jsx)(E.Z, {
                                                  application: x,
                                                  onSelectApplication: O
                                              })
                                          ]
                                      }),
                                      w &&
                                          (0, i.jsx)(_.Z, {
                                              className: S.sidebar,
                                              application: x,
                                              onSelectCategory: M
                                          })
                                  ]
                              })
                          ]
                      })
        })
    });
};
