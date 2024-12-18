n(653041), n(47120);
var i = n(200651),
    r = n(192379),
    l = n(442837),
    o = n(481060),
    a = n(237997),
    s = n(388627),
    c = n(561064),
    u = n(380736),
    d = n(693091),
    h = n(371467),
    f = n(981631),
    m = n(109020);
let v = [];
function p(e) {
    return e.notification.id;
}
function x(e, t, n, r) {
    let { index: l, notification: o, locked: a } = t;
    return (0, i.jsx)(
        u.Z,
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
        className: m.container,
        children: e
    });
}
let C = (e) => r.useState(() => new d.AS(e))[0];
t.Z = r.memo(function (e) {
    let { locked: t } = e,
        n = (0, l.e7)(
            [a.Z, h.Z],
            () => {
                if (a.Z.getNotificationPositionMode() === f._vf.DISABLED) return v;
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
        u = C(t);
    return (
        r.useLayoutEffect(() => u.updateState(n, t)),
        r.useLayoutEffect(() => (u.initialize((0, c.i)()), () => u.cleanUp()), [u]),
        (0, i.jsx)(d.S4.Provider, {
            value: u,
            children: (0, i.jsx)(o.TransitionGroup, {
                items: n,
                renderItem: x,
                getItemKey: p,
                wrapChildren: g
            })
        })
    );
});
