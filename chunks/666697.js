n(47120);
var i,
    r,
    l = n(200651),
    a = n(192379),
    s = n(442837),
    o = n(674588),
    c = n(264043),
    d = n(125909),
    u = n(283836),
    h = n(374939),
    m = n(233374),
    p = n(283293),
    g = n(292191),
    f = n(680474),
    _ = n(571737),
    E = n(101400),
    I = n(946542),
    C = n(213746),
    v = n(388032),
    S = n(850258);
((r = i || (i = {})).ABOUT = 'about'), (r.STORE = 'store');
t.Z = function (e) {
    let { applicationId: t, onSelectApplication: n, onScroll: i, onOpenCategorySearch: r, onCloseAppDetails: N } = e,
        T = a.useRef(null),
        x = (0, s.e7)([c.Z], () => c.Z.getApplication(t)),
        b = (0, s.e7)([c.Z], () => c.Z.getApplicationFetchState(t));
    a.useEffect(() => {
        null != t && null == x && o.i6(t);
    }, [t, x]);
    let A = null == x ? void 0 : x.storefront_available,
        [Z, y] = a.useState('about'),
        L = a.useCallback(
            (e) => {
                var t;
                null === (t = T.current) || void 0 === t || t.scrollTo({ to: 0 }), y('about'), n(e);
            },
            [n]
        );
    a.useEffect(() => {
        (null == x ? void 0 : x.storefront_available) && null != t && (0, u.Z)(t);
    }, [null == x ? void 0 : x.storefront_available, t]);
    let R = a.useMemo(
            () => [
                {
                    id: 'about',
                    label: v.intl.string(v.t.JkjJBQ)
                },
                {
                    id: 'store',
                    label: v.intl.string(v.t.NfuihY)
                }
            ],
            []
        ),
        j = a.useMemo(() => {
            if (null == x) return null;
            switch (Z) {
                case 'about':
                    return (0, l.jsx)(f.Z, { application: x });
                case 'store':
                    return (0, l.jsx)(C.Z, { application: x });
            }
        }, [Z, x]),
        O = a.useCallback(
            (e) => {
                N(), null == r || r('', e);
            },
            [N, r]
        );
    if (null == x)
        return b === c.M.FETCHING
            ? (0, l.jsx)('div', {
                  className: S.centerContainer,
                  children: (0, l.jsx)(d.Z, { loading: !0 })
              })
            : (0, l.jsx)('div', {
                  className: S.centerContainer,
                  children: (0, l.jsx)(g.Z, { className: S.error })
              });
    let P = 'about' === Z;
    return (0, l.jsx)(p.Z, {
        onScroll: i,
        ref: T,
        children: (0, l.jsx)(h.Z, {
            children: (0, l.jsxs)('div', {
                className: S.detailContainer,
                children: [
                    (0, l.jsx)(_.Z, { application: x }),
                    (0, l.jsxs)('div', {
                        className: S.contentContainer,
                        children: [
                            (0, l.jsxs)('div', {
                                className: S.contentTabsContainer,
                                children: [
                                    A &&
                                        (0, l.jsx)('div', {
                                            className: S.contentTabs,
                                            children: (0, l.jsx)(m.Z, {
                                                tabs: R,
                                                onTabSelect: y,
                                                selectedTab: Z
                                            })
                                        }),
                                    j,
                                    (0, l.jsx)(I.Z, {
                                        application: x,
                                        onSelectApplication: L
                                    })
                                ]
                            }),
                            P &&
                                (0, l.jsx)(E.Z, {
                                    className: S.sidebar,
                                    application: x,
                                    onSelectCategory: O
                                })
                        ]
                    })
                ]
            })
        })
    });
};
