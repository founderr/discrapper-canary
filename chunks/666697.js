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
    let { applicationId: t, onScroll: n, onOpenCategorySearch: i, onCloseAppDetails: r } = e,
        N = (0, s.e7)([c.Z], () => c.Z.getApplication(t)),
        T = (0, s.e7)([c.Z], () => c.Z.getApplicationFetchState(t));
    a.useEffect(() => {
        null != t && null == N && o.i6(t);
    }, [t, N]);
    let x = null == N ? void 0 : N.storefront_available,
        [A, b] = a.useState('about');
    a.useEffect(() => {
        (null == N ? void 0 : N.storefront_available) && null != t && (0, u.Z)(t);
    }, [null == N ? void 0 : N.storefront_available, t]);
    let Z = a.useMemo(
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
        y = a.useMemo(() => {
            if (null == N) return null;
            switch (A) {
                case 'about':
                    return (0, l.jsx)(f.Z, { application: N });
                case 'store':
                    return (0, l.jsx)(C.Z, { application: N });
            }
        }, [A, N]),
        L = a.useCallback(
            (e) => {
                r(), null == i || i('', e);
            },
            [r, i]
        );
    if (null == N)
        return T === c.M.FETCHING
            ? (0, l.jsx)('div', {
                  className: S.centerContainer,
                  children: (0, l.jsx)(d.Z, { loading: !0 })
              })
            : (0, l.jsx)('div', {
                  className: S.centerContainer,
                  children: (0, l.jsx)(g.Z, { className: S.error })
              });
    let R = 'about' === A;
    return (0, l.jsx)(p.Z, {
        onScroll: n,
        children: (0, l.jsx)(h.Z, {
            children: (0, l.jsxs)('div', {
                className: S.detailContainer,
                children: [
                    (0, l.jsx)(_.Z, { application: N }),
                    (0, l.jsxs)('div', {
                        className: S.contentContainer,
                        children: [
                            (0, l.jsxs)('div', {
                                className: S.contentTabsContainer,
                                children: [
                                    x &&
                                        (0, l.jsx)('div', {
                                            className: S.contentTabs,
                                            children: (0, l.jsx)(m.Z, {
                                                tabs: Z,
                                                onTabSelect: b,
                                                selectedTab: A
                                            })
                                        }),
                                    y,
                                    (0, l.jsx)(I.Z, { application: N })
                                ]
                            }),
                            R &&
                                (0, l.jsx)(E.Z, {
                                    className: S.sidebar,
                                    application: N,
                                    onSelectCategory: L
                                })
                        ]
                    })
                ]
            })
        })
    });
};
