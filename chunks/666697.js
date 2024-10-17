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
    h = n(973616),
    m = n(292191),
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
    let T = null != i ? h.Z.createFromServer(i) : null,
        S = null == T ? void 0 : T.storefront_available,
        [f, C] = r.useState('about'),
        N = r.useMemo(
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
        );
    if (null == i)
        return a === c.M.FETCHING
            ? (0, s.jsx)('div', {
                  className: g.centerContainer,
                  children: (0, s.jsx)(d.Z, { loading: !0 })
              })
            : (0, s.jsx)('div', {
                  className: g.centerContainer,
                  children: (0, s.jsx)(m.Z, { className: g.error })
              });
    return (0, s.jsx)(E.Z, {
        onScroll: n,
        children: (0, s.jsxs)(u.Z, {
            children: [
                (0, s.jsx)(I.Z, { application: i }),
                S &&
                    (0, s.jsx)('div', {
                        className: g.contentTabs,
                        children: (0, s.jsx)(_.Z, {
                            tabs: N,
                            onTabSelect: C,
                            selectedTab: f
                        })
                    })
            ]
        })
    });
};
