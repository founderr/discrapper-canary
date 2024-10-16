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
    m = n(689938),
    I = n(850258);
((a = i || (i = {})).ABOUT = 'about'), (a.STORE = 'store');
t.Z = function (e) {
    let { applicationId: t, onScroll: n } = e,
        i = (0, l.e7)([c.Z], () => c.Z.getApplication(t));
    r.useEffect(() => {
        null != t && null == i && o.i6(t);
    }, [t, i]);
    let a = null != i ? h.Z.createFromServer(i) : null,
        p = null == a ? void 0 : a.isMonetized,
        [g, T] = r.useState('about'),
        S = r.useMemo(
            () => [
                {
                    id: 'about',
                    label: m.Z.Messages.APP_DIRECTORY_ABOUT
                },
                {
                    id: 'store',
                    label: m.Z.Messages.APP_DIRECTORY_STORE
                }
            ],
            []
        );
    return (0, s.jsx)(d.Z, {
        loading: null == a,
        children: (0, s.jsx)(E.Z, {
            onScroll: n,
            children: (0, s.jsx)(u.Z, {
                children:
                    p &&
                    (0, s.jsx)('div', {
                        className: I.contentTabs,
                        children: (0, s.jsx)(_.Z, {
                            tabs: S,
                            onTabSelect: T,
                            selectedTab: g
                        })
                    })
            })
        })
    });
};
