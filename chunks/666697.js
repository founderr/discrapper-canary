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
    f = n(133743),
    _ = n(680474),
    E = n(571737),
    I = n(101400),
    C = n(946542),
    v = n(213746),
    S = n(388032),
    N = n(850258);
((r = i || (i = {})).ABOUT = 'about'), (r.STORE = 'store');
t.Z = function (e) {
    let { applicationId: t, onSelectApplication: n, onScroll: i, onCloseAppDetails: r } = e,
        T = a.useRef(null),
        x = (0, s.e7)([c.Z], () => c.Z.getApplication(t)),
        A = (0, s.e7)([c.Z], () => c.Z.getApplicationFetchState(t));
    a.useEffect(() => {
        null != t && null == x && o.i6(t);
    }, [t, x]);
    let b = null == x ? void 0 : x.storefront_available,
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
                    label: S.intl.string(S.t.JkjJBQ)
                },
                {
                    id: 'store',
                    label: S.intl.string(S.t.NfuihY)
                }
            ],
            []
        ),
        O = a.useMemo(() => {
            if (null == x) return null;
            switch (Z) {
                case 'about':
                    return (0, l.jsx)(_.Z, { application: x });
                case 'store':
                    return (0, l.jsx)(v.Z, { application: x });
            }
        }, [Z, x]),
        j = a.useCallback(
            (e) => {
                r(), (0, f.O)({ categoryId: e.toString() });
            },
            [r]
        );
    if (null == x)
        return A === c.M.FETCHING
            ? (0, l.jsx)('div', {
                  className: N.centerContainer,
                  children: (0, l.jsx)(d.Z, { loading: !0 })
              })
            : (0, l.jsx)('div', {
                  className: N.centerContainer,
                  children: (0, l.jsx)(g.Z, { className: N.error })
              });
    let P = 'about' === Z;
    return (0, l.jsx)(p.Z, {
        onScroll: i,
        ref: T,
        children: (0, l.jsx)(h.Z, {
            children: (0, l.jsxs)('div', {
                className: N.detailContainer,
                children: [
                    (0, l.jsx)(E.Z, { application: x }),
                    (0, l.jsxs)('div', {
                        className: N.contentContainer,
                        children: [
                            (0, l.jsxs)('div', {
                                className: N.contentTabsContainer,
                                children: [
                                    b &&
                                        (0, l.jsx)('div', {
                                            className: N.contentTabs,
                                            children: (0, l.jsx)(m.Z, {
                                                tabs: R,
                                                onTabSelect: y,
                                                selectedTab: Z
                                            })
                                        }),
                                    O,
                                    (0, l.jsx)(C.Z, {
                                        application: x,
                                        onSelectApplication: L
                                    })
                                ]
                            }),
                            P &&
                                (0, l.jsx)(I.Z, {
                                    className: N.sidebar,
                                    application: x,
                                    onSelectCategory: j
                                })
                        ]
                    })
                ]
            })
        })
    });
};
