n(653041), n(47120);
var i = n(200651),
    o = n(192379),
    l = n(442837),
    r = n(481060),
    s = n(237997),
    a = n(388627),
    u = n(561064),
    c = n(380736),
    d = n(693091),
    h = n(371467),
    f = n(981631),
    p = n(109020);
let m = [];
function v(e) {
    return e.notification.id;
}
function g(e, t, n, o) {
    let { index: l, notification: r, locked: s } = t;
    return (0, i.jsx)(
        c.Z,
        {
            index: l,
            notification: r,
            locked: s,
            transitionState: n,
            cleanUp: o
        },
        e
    );
}
function E(e) {
    return (0, i.jsx)('div', {
        className: p.container,
        children: e
    });
}
let x = (e) => o.useState(() => new d.AS(e))[0];
t.Z = o.memo(function (e) {
    let { locked: t } = e,
        n = (0, l.e7)(
            [s.Z, h.Z],
            () => {
                if (s.Z.getNotificationPositionMode() === f._vf.DISABLED) return m;
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
            a.E6
        ),
        c = x(t);
    return (
        o.useLayoutEffect(() => c.updateState(n, t)),
        o.useLayoutEffect(() => (c.initialize((0, u.i)()), () => c.cleanUp()), [c]),
        (0, i.jsx)(d.S4.Provider, {
            value: c,
            children: (0, i.jsx)(r.TransitionGroup, {
                items: n,
                renderItem: g,
                getItemKey: v,
                wrapChildren: E
            })
        })
    );
});
