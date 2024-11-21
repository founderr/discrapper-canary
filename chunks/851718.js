n.d(t, {
    Z: function () {
        return m;
    }
}),
    n(47120);
var i = n(200651),
    s = n(192379),
    r = n(823379),
    l = n(106976),
    a = n(270144),
    o = n(130991),
    c = n(630656),
    d = n(10970),
    u = n(388032);
function m(e) {
    let { subscriptions: t, updateHeader: n } = e,
        [m, h] = s.useState({ route: c.j.HOME }),
        { route: g } = m,
        p = () => {
            h({ route: c.j.HOME });
        },
        x = (e) => {
            h({
                route: c.j.SWITCH_APP_PLANS,
                ...e
            }),
                n(u.intl.string(u.t.VFqtkJ), p);
        },
        [S, T] = s.useState({});
    s.useEffect(() => {
        for (let n of t) {
            var e;
            let t = null === (e = n.items[0]) || void 0 === e ? void 0 : e.planId;
            null != t &&
                (T((e) => ({
                    ...e,
                    [n.id]: o.G.LOADING
                })),
                (0, l.vY)(t)
                    .then(() => {
                        T((e) => ({
                            ...e,
                            [n.id]: o.G.DONE
                        }));
                    })
                    .catch(() => {
                        T((e) => ({
                            ...e,
                            [n.id]: o.G.ERROR
                        }));
                    }));
        }
    }, [t]);
    let { loadState: C } = (0, a.qz)(),
        E = C !== a.jd.LOADED;
    switch (g) {
        case c.j.HOME:
            return (0, i.jsx)(i.Fragment, {
                children: t.map((e) => {
                    var t;
                    return (0, i.jsx)(
                        o.Z,
                        {
                            subscription: e,
                            navigateToSwitchPlan: x,
                            loadingState: E ? o.G.LOADING : null !== (t = S[e.id]) && void 0 !== t ? t : o.G.LOADING
                        },
                        e.id
                    );
                })
            });
        case c.j.SWITCH_APP_PLANS:
            let { route: _, ...I } = m;
            return (0, i.jsx)(d.Z, {
                ...I,
                navigateToHome: p
            });
        default:
            (0, r.vE)(g);
    }
}
