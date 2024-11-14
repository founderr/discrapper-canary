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
    S = n(388032),
    N = n(850258);
t.Z = function (e) {
    let { applicationId: t, onSelectApplication: n, onScroll: T, initialTab: A } = e,
        b = r.useRef(null),
        x = (0, l.e7)([s.Z], () => s.Z.getApplication(t)),
        Z = (0, l.e7)([s.Z], () => s.Z.getApplicationFetchState(t));
    r.useEffect(() => {
        null != t && null == x && a.i6(t);
    }, [t, x]);
    let L = null == x ? void 0 : x.storefront_available,
        [y, O] = r.useState(null != A ? A : C.Wc.ABOUT),
        R = r.useCallback(
            (e) => {
                var t;
                null === (t = b.current) || void 0 === t || t.scrollTo({ to: 0 }), O(C.Wc.ABOUT), n(e);
            },
            [n]
        );
    r.useEffect(() => {
        (null == x ? void 0 : x.storefront_available) && null != t && (0, c.Z)(t);
    }, [null == x ? void 0 : x.storefront_available, t]);
    let P = r.useMemo(
            () => [
                {
                    id: C.Wc.ABOUT,
                    label: S.intl.string(S.t.JkjJBQ)
                },
                {
                    id: C.Wc.STORE,
                    label: S.intl.string(S.t.NfuihY)
                }
            ],
            []
        ),
        j = r.useMemo(() => {
            if (null == x) return null;
            switch (y) {
                case C.Wc.ABOUT:
                    return (0, i.jsx)(g.Z, { application: x });
                case C.Wc.STORE:
                    return (0, i.jsx)(I.Z, { application: x });
            }
        }, [y, x]),
        D = r.useCallback(
            (e) => {
                O(e), e === C.Wc.ABOUT ? (0, p.Gp)(v.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE(t)) : (0, p.Gp)(v.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(t, e));
            },
            [t]
        ),
        M = r.useCallback((e) => {
            (0, p.O4)({ categoryId: e.toString() });
        }, []);
    if (null == x)
        return Z === s.M.FETCHING
            ? (0, i.jsx)('div', {
                  className: N.centerContainer,
                  children: (0, i.jsx)(o.Z, { loading: !0 })
              })
            : (0, i.jsx)('div', {
                  className: N.centerContainer,
                  children: (0, i.jsx)(m.Z, { className: N.error })
              });
    let w = y === C.Wc.ABOUT;
    return (0, i.jsx)(h.Z, {
        onScroll: T,
        ref: b,
        children: (0, i.jsx)(d.Z, {
            children: (0, i.jsxs)('div', {
                className: N.detailContainer,
                children: [
                    (0, i.jsx)(f.Z, { application: x }),
                    (0, i.jsxs)('div', {
                        className: N.contentContainer,
                        children: [
                            (0, i.jsxs)('div', {
                                className: N.contentTabsContainer,
                                children: [
                                    L &&
                                        (0, i.jsx)('div', {
                                            className: N.contentTabs,
                                            children: (0, i.jsx)(u.Z, {
                                                tabs: P,
                                                onTabSelect: D,
                                                selectedTab: y
                                            })
                                        }),
                                    j,
                                    (0, i.jsx)(E.Z, {
                                        application: x,
                                        onSelectApplication: R
                                    })
                                ]
                            }),
                            w &&
                                (0, i.jsx)(_.Z, {
                                    className: N.sidebar,
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
