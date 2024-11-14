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
    let { applicationId: t, onSelectApplication: n, onScroll: i } = e,
        r = a.useRef(null),
        T = (0, s.e7)([c.Z], () => c.Z.getApplication(t)),
        A = (0, s.e7)([c.Z], () => c.Z.getApplicationFetchState(t));
    a.useEffect(() => {
        null != t && null == T && o.i6(t);
    }, [t, T]);
    let b = null == T ? void 0 : T.storefront_available,
        [x, Z] = a.useState('about'),
        L = a.useCallback(
            (e) => {
                var t;
                null === (t = r.current) || void 0 === t || t.scrollTo({ to: 0 }), Z('about'), n(e);
            },
            [n]
        );
    a.useEffect(() => {
        (null == T ? void 0 : T.storefront_available) && null != t && (0, u.Z)(t);
    }, [null == T ? void 0 : T.storefront_available, t]);
    let y = a.useMemo(
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
        R = a.useMemo(() => {
            if (null == T) return null;
            switch (x) {
                case 'about':
                    return (0, l.jsx)(_.Z, { application: T });
                case 'store':
                    return (0, l.jsx)(v.Z, { application: T });
            }
        }, [x, T]),
        O = a.useCallback((e) => {
            (0, f.O4)({ categoryId: e.toString() });
        }, []);
    if (null == T)
        return A === c.M.FETCHING
            ? (0, l.jsx)('div', {
                  className: N.centerContainer,
                  children: (0, l.jsx)(d.Z, { loading: !0 })
              })
            : (0, l.jsx)('div', {
                  className: N.centerContainer,
                  children: (0, l.jsx)(g.Z, { className: N.error })
              });
    let P = 'about' === x;
    return (0, l.jsx)(p.Z, {
        onScroll: i,
        ref: r,
        children: (0, l.jsx)(h.Z, {
            children: (0, l.jsxs)('div', {
                className: N.detailContainer,
                children: [
                    (0, l.jsx)(E.Z, { application: T }),
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
                                                tabs: y,
                                                onTabSelect: Z,
                                                selectedTab: x
                                            })
                                        }),
                                    R,
                                    (0, l.jsx)(C.Z, {
                                        application: T,
                                        onSelectApplication: L
                                    })
                                ]
                            }),
                            P &&
                                (0, l.jsx)(I.Z, {
                                    className: N.sidebar,
                                    application: T,
                                    onSelectCategory: O
                                })
                        ]
                    })
                ]
            })
        })
    });
};
