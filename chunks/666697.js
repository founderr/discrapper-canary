n(47120);
var i,
    a,
    s = n(735250),
    r = n(470079),
    l = n(120356),
    o = n.n(l),
    c = n(442837),
    d = n(674588),
    u = n(264043),
    _ = n(125909),
    E = n(374939),
    h = n(233374),
    m = n(283293),
    I = n(292191),
    p = n(680474),
    g = n(571737),
    T = n(101400),
    f = n(689938),
    S = n(850258);
((a = i || (i = {})).ABOUT = 'about'), (a.STORE = 'store');
t.Z = function (e) {
    let { applicationId: t, onScroll: n } = e,
        i = (0, c.e7)([u.Z], () => u.Z.getApplication(t)),
        a = (0, c.e7)([u.Z], () => u.Z.getApplicationFetchState(t));
    r.useEffect(() => {
        null != t && null == i && d.i6(t);
    }, [t, i]);
    let l = null == i ? void 0 : i.storefront_available,
        [C, N] = r.useState('about'),
        A = r.useMemo(
            () => [
                {
                    id: 'about',
                    label: f.Z.Messages.APP_DIRECTORY_ABOUT
                },
                {
                    id: 'store',
                    label: f.Z.Messages.APP_DIRECTORY_STORE
                }
            ],
            []
        ),
        v = r.useMemo(() => {
            if (null == i) return null;
            switch (C) {
                case 'about':
                    return (0, s.jsx)(p.Z, { application: i });
                case 'store':
                    return null;
            }
        }, [C, i]);
    if (null == i)
        return a === u.M.FETCHING
            ? (0, s.jsx)('div', {
                  className: S.centerContainer,
                  children: (0, s.jsx)(_.Z, { loading: !0 })
              })
            : (0, s.jsx)('div', {
                  className: S.centerContainer,
                  children: (0, s.jsx)(I.Z, { className: S.error })
              });
    let Z = 'about' === C;
    return (0, s.jsx)(m.Z, {
        onScroll: n,
        children: (0, s.jsxs)(E.Z, {
            children: [
                (0, s.jsx)(g.Z, { application: i }),
                (0, s.jsxs)('div', {
                    className: S.contentContainer,
                    children: [
                        (0, s.jsxs)('div', {
                            className: o()(S.contentTabsContainer, { [S.contentTabsContainerWithSidebar]: Z }),
                            children: [
                                l &&
                                    (0, s.jsx)('div', {
                                        className: S.contentTabs,
                                        children: (0, s.jsx)(h.Z, {
                                            tabs: A,
                                            onTabSelect: N,
                                            selectedTab: C
                                        })
                                    }),
                                v
                            ]
                        }),
                        Z &&
                            (0, s.jsx)(T.Z, {
                                className: S.sidebar,
                                application: i
                            })
                    ]
                })
            ]
        })
    });
};
