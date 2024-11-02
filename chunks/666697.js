n(47120);
var i,
    r,
    l = n(200651),
    a = n(192379),
    s = n(120356),
    o = n.n(s),
    c = n(442837),
    d = n(674588),
    u = n(264043),
    h = n(125909),
    m = n(374939),
    p = n(233374),
    g = n(283293),
    f = n(292191),
    _ = n(680474),
    E = n(571737),
    I = n(101400),
    C = n(388032),
    v = n(850258);
((r = i || (i = {})).ABOUT = 'about'), (r.STORE = 'store');
t.Z = function (e) {
    let { applicationId: t, onScroll: n } = e,
        i = (0, c.e7)([u.Z], () => u.Z.getApplication(t)),
        r = (0, c.e7)([u.Z], () => u.Z.getApplicationFetchState(t));
    a.useEffect(() => {
        null != t && null == i && d.i6(t);
    }, [t, i]);
    let s = null == i ? void 0 : i.storefront_available,
        [S, N] = a.useState('about'),
        T = a.useMemo(
            () => [
                {
                    id: 'about',
                    label: C.intl.string(C.t.JkjJBQ)
                },
                {
                    id: 'store',
                    label: C.intl.string(C.t.NfuihY)
                }
            ],
            []
        ),
        x = a.useMemo(() => {
            if (null == i) return null;
            switch (S) {
                case 'about':
                    return (0, l.jsx)(_.Z, { application: i });
                case 'store':
                    return null;
            }
        }, [S, i]);
    if (null == i)
        return r === u.M.FETCHING
            ? (0, l.jsx)('div', {
                  className: v.centerContainer,
                  children: (0, l.jsx)(h.Z, { loading: !0 })
              })
            : (0, l.jsx)('div', {
                  className: v.centerContainer,
                  children: (0, l.jsx)(f.Z, { className: v.error })
              });
    let b = 'about' === S;
    return (0, l.jsx)(g.Z, {
        onScroll: n,
        children: (0, l.jsxs)(m.Z, {
            children: [
                (0, l.jsx)(E.Z, { application: i }),
                (0, l.jsxs)('div', {
                    className: v.contentContainer,
                    children: [
                        (0, l.jsxs)('div', {
                            className: o()(v.contentTabsContainer, { [v.contentTabsContainerWithSidebar]: b }),
                            children: [
                                s &&
                                    (0, l.jsx)('div', {
                                        className: v.contentTabs,
                                        children: (0, l.jsx)(p.Z, {
                                            tabs: T,
                                            onTabSelect: N,
                                            selectedTab: S
                                        })
                                    }),
                                x
                            ]
                        }),
                        b &&
                            (0, l.jsx)(I.Z, {
                                className: v.sidebar,
                                application: i
                            })
                    ]
                })
            ]
        })
    });
};
