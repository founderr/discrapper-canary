n(653041), n(47120);
var i = n(200651),
    r = n(192379),
    l = n(442837),
    o = n(481060),
    a = n(237997),
    s = n(388627),
    u = n(561064),
    c = n(380736),
    d = n(693091),
    h = n(371467),
    f = n(981631),
    p = n(408052);
let m = [];
function E(e) {
    return e.notification.id;
}
function v(e, t, n, r) {
    let { index: l, notification: o, locked: a } = t;
    return (0, i.jsx)(
        c.Z,
        {
            index: l,
            notification: o,
            locked: a,
            transitionState: n,
            cleanUp: r
        },
        e
    );
}
function g(e) {
    return (0, i.jsx)('div', {
        className: p.container,
        children: e
    });
}
let _ = (e) => r.useState(() => new d.AS(e))[0];
t.Z = r.memo(function (e) {
    let { locked: t } = e,
        n = (0, l.e7)(
            [a.Z, h.Z],
            () => {
                if (a.Z.getNotificationPositionMode() === f._vf.DISABLED) return m;
                let e = [],
                    n = 0;
                for (let i of h.Z.getNotifications()) {
                    if (n > 4) break;
                    (!t || i.status !== f._1z.TIMED_OUT) &&
                        (e.push({
                            index: n,
                            locked: t,
                            notification: i
                        }),
                        n++);
                }
                return e;
            },
            [t],
            s.E6
        ),
        c = _(t);
    return (
        r.useLayoutEffect(() => c.updateState(n, t)),
        r.useLayoutEffect(() => (c.initialize((0, u.i)()), () => c.cleanUp()), [c]),
        (0, i.jsx)(d.S4.Provider, {
            value: c,
            children: (0, i.jsx)(o.TransitionGroup, {
                items: n,
                renderItem: v,
                getItemKey: E,
                wrapChildren: g
            })
        })
    );
});
