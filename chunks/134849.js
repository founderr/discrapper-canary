n(653041), n(47120);
var i = n(200651),
    l = n(192379),
    o = n(442837),
    r = n(481060),
    s = n(237997),
    a = n(388627),
    u = n(561064),
    d = n(380736),
    c = n(693091),
    h = n(371467),
    f = n(981631),
    p = n(408052);
let m = [];
function g(e) {
    return e.notification.id;
}
function v(e, t, n, l) {
    let { index: o, notification: r, locked: s } = t;
    return (0, i.jsx)(
        d.Z,
        {
            index: o,
            notification: r,
            locked: s,
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
let Z = (e) => l.useState(() => new c.AS(e))[0];
t.Z = l.memo(function (e) {
    let { locked: t } = e,
        n = (0, o.e7)(
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
        d = Z(t);
    return (
        l.useLayoutEffect(() => d.updateState(n, t)),
        l.useLayoutEffect(() => (d.initialize((0, u.i)()), () => d.cleanUp()), [d]),
        (0, i.jsx)(c.S4.Provider, {
            value: d,
            children: (0, i.jsx)(r.TransitionGroup, {
                items: n,
                renderItem: v,
                getItemKey: g,
                wrapChildren: E
            })
        })
    );
});
