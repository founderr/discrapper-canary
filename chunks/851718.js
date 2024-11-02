n.d(t, {
    Z: function () {
        return d;
    }
}),
    n(47120);
var i = n(200651),
    s = n(192379),
    r = n(823379),
    l = n(130991),
    a = n(630656),
    o = n(10970),
    c = n(388032);
function d(e) {
    let { subscriptions: t, updateHeader: n } = e,
        [d, u] = s.useState({ route: a.j.HOME }),
        { route: m } = d,
        h = (e) => {
            u({
                route: a.j.SWITCH_APP_PLANS,
                ...e
            }),
                n(c.intl.string(c.t.VFqtkJ), () => {
                    u({ route: a.j.HOME });
                });
        };
    switch (m) {
        case a.j.HOME:
            return (0, i.jsx)(i.Fragment, {
                children: t.map((e) =>
                    (0, i.jsx)(
                        l.Z,
                        {
                            subscription: e,
                            navigateToSwitchPlan: h
                        },
                        e.id
                    )
                )
            });
        case a.j.SWITCH_APP_PLANS:
            let { route: g, ...p } = d;
            return (0, i.jsx)(o.Z, { ...p });
        default:
            (0, r.vE)(m);
    }
}
