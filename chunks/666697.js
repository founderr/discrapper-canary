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
    let { applicationId: t, onSelectApplication: n, onScroll: T, initialTab: x } = e,
        b = r.useRef(null),
        A = (0, l.e7)([s.Z], () => s.Z.getApplication(t)),
        Z = (0, l.e7)([s.Z], () => s.Z.getApplicationFetchState(t));
    r.useEffect(() => {
        null != t && null == A && a.i6(t);
    }, [t, A]);
    let L = null == A ? void 0 : A.storefront_available,
        [y, P] = r.useState(null != x ? x : C.Wc.ABOUT),
        O = r.useCallback(
            (e) => {
                var t;
                null === (t = b.current) || void 0 === t || t.scrollTo({ to: 0 }), P(C.Wc.ABOUT), n(e);
            },
            [n]
        );
    r.useEffect(() => {
        (null == A ? void 0 : A.storefront_available) && null != t && (0, c.Z)(t);
    }, [null == A ? void 0 : A.storefront_available, t]);
    let R = r.useMemo(
            () => [
                {
                    id: C.Wc.ABOUT,
                    label: N.intl.string(N.t.JkjJBQ)
                },
                {
                    id: C.Wc.STORE,
                    label: N.intl.string(N.t.NfuihY)
                }
            ],
            []
        ),
        j = r.useMemo(() => {
            if (null == A) return null;
            switch (y) {
                case C.Wc.ABOUT:
                    return (0, i.jsx)(g.Z, { application: A });
                case C.Wc.STORE:
                    return (0, i.jsx)(I.Z, { application: A });
            }
        }, [y, A]),
        D = r.useCallback(
            (e) => {
                P(e), e === C.Wc.ABOUT ? (0, p.Gp)(v.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE(t)) : (0, p.Gp)(v.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(t, e));
            },
            [t]
        ),
        M = r.useCallback((e) => {
            (0, p.pR)({ categoryId: e });
        }, []);
    if (null == A)
        return Z === s.M.FETCHING
            ? (0, i.jsx)('div', {
                  className: S.centerContainer,
                  children: (0, i.jsx)(o.Z, { loading: !0 })
              })
            : (0, i.jsx)('div', {
                  className: S.centerContainer,
                  children: (0, i.jsx)(m.Z, { className: S.error })
              });
    let w = y === C.Wc.ABOUT;
    return (0, i.jsx)(h.Z, {
        onScroll: T,
        ref: b,
        children: (0, i.jsx)(d.Z, {
            children: (0, i.jsxs)('div', {
                className: S.detailContainer,
                children: [
                    (0, i.jsx)(f.Z, { application: A }),
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
                                        application: A,
                                        onSelectApplication: O
                                    })
                                ]
                            }),
                            w &&
                                (0, i.jsx)(_.Z, {
                                    className: S.sidebar,
                                    application: A,
                                    onSelectCategory: M
                                })
                        ]
                    })
                ]
            })
        })
    });
};
