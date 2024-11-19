n(653041), n(47120);
var i = n(200651),
    l = n(192379),
    r = n(442837),
    o = n(481060),
    a = n(237997),
    s = n(388627),
    u = n(561064),
    c = n(380736),
    d = n(693091),
    h = n(371467),
    f = n(981631),
    p = n(802015);
let m = [];
function v(e) {
    return e.notification.id;
}
function g(e, t, n, l) {
    let { index: r, notification: o, locked: a } = t;
    return (0, i.jsx)(
        c.Z,
        {
            index: r,
            notification: o,
            locked: a,
            transitionState: n,
            cleanUp: l
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
let _ = (e) => l.useState(() => new d.AS(e))[0];
t.Z = l.memo(function (e) {
    let { locked: t } = e,
        n = (0, r.e7)(
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
        l.useLayoutEffect(() => c.updateState(n, t)),
        l.useLayoutEffect(() => (c.initialize((0, u.i)()), () => c.cleanUp()), [c]),
        (0, i.jsx)(d.S4.Provider, {
            value: c,
            children: (0, i.jsx)(o.TransitionGroup, {
                items: n,
                renderItem: g,
                getItemKey: v,
                wrapChildren: E
            })
        })
    );
});
