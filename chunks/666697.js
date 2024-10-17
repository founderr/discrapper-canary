n(47120);
var i,
    a,
    s = n(735250),
    r = n(470079),
    l = n(442837),
    o = n(674588),
    c = n(264043),
    d = n(125909),
    u = n(374939),
    _ = n(233374),
    E = n(283293),
    h = n(292191),
    m = n(680474),
    I = n(571737),
    p = n(689938),
    g = n(850258);
((a = i || (i = {})).ABOUT = 'about'), (a.STORE = 'store');
t.Z = function (e) {
    let { applicationId: t, onScroll: n } = e,
        i = (0, l.e7)([c.Z], () => c.Z.getApplication(t)),
        a = (0, l.e7)([c.Z], () => c.Z.getApplicationFetchState(t));
    r.useEffect(() => {
        null != t && null == i && o.i6(t);
    }, [t, i]);
    let T = null == i ? void 0 : i.storefront_available,
        [S, f] = r.useState('about'),
        C = r.useMemo(
            () => [
                {
                    id: 'about',
                    label: p.Z.Messages.APP_DIRECTORY_ABOUT
                },
                {
                    id: 'store',
                    label: p.Z.Messages.APP_DIRECTORY_STORE
                }
            ],
            []
        ),
        N = r.useMemo(() => {
            if (null == i) return null;
            switch (S) {
                case 'about':
                    return (0, s.jsx)(m.Z, { application: i });
                case 'store':
                    return null;
            }
        }, [S, i]);
    if (null == i)
        return a === c.M.FETCHING
            ? (0, s.jsx)('div', {
                  className: g.centerContainer,
                  children: (0, s.jsx)(d.Z, { loading: !0 })
              })
            : (0, s.jsx)('div', {
                  className: g.centerContainer,
                  children: (0, s.jsx)(h.Z, { className: g.error })
              });
    return (0, s.jsx)(E.Z, {
        onScroll: n,
        children: (0, s.jsxs)(u.Z, {
            children: [
                (0, s.jsx)(I.Z, { application: i }),
                (0, s.jsxs)('div', {
                    className: g.contentContainer,
                    children: [
                        T &&
                            (0, s.jsx)('div', {
                                className: g.contentTabs,
                                children: (0, s.jsx)(_.Z, {
                                    tabs: C,
                                    onTabSelect: f,
                                    selectedTab: S
                                })
                            }),
                        N
                    ]
                })
            ]
        })
    });
};
