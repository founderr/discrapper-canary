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
        [m, g] = s.useState({ route: c.j.HOME }),
        { route: h } = m,
        p = () => {
            g({ route: c.j.HOME });
        },
        x = (e) => {
            g({
                route: c.j.SWITCH_APP_PLANS,
                ...e
            }),
                n(u.intl.string(u.t.VFqtkJ), p);
        },
        [T, S] = s.useState({});
    s.useEffect(() => {
        for (let n of t) {
            var e;
            let t = null === (e = n.items[0]) || void 0 === e ? void 0 : e.planId;
            null != t &&
                (S((e) => ({
                    ...e,
                    [n.id]: o.G.LOADING
                })),
                (0, l.vY)(t)
                    .then(() => {
                        S((e) => ({
                            ...e,
                            [n.id]: o.G.DONE
                        }));
                    })
                    .catch(() => {
                        S((e) => ({
                            ...e,
                            [n.id]: o.G.ERROR
                        }));
                    }));
        }
    }, [t]);
    let { loadState: _ } = (0, a.qz)(),
        E = _ !== a.jd.LOADED;
    switch (h) {
        case c.j.HOME:
            return (0, i.jsx)(i.Fragment, {
                children: t.map((e) => {
                    var t;
                    return (0, i.jsx)(
                        o.Z,
                        {
                            subscription: e,
                            navigateToSwitchPlan: x,
                            loadingState: E ? o.G.LOADING : null !== (t = T[e.id]) && void 0 !== t ? t : o.G.LOADING
                        },
                        e.id
                    );
                })
            });
        case c.j.SWITCH_APP_PLANS:
            let { route: C, ...f } = m;
            return (0, i.jsx)(d.Z, {
                ...f,
                navigateToHome: p
            });
        default:
            (0, r.vE)(h);
    }
}
