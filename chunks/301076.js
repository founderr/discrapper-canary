n.d(t, {
    Z: function () {
        return o;
    }
});
var i = n(735250);
n(470079);
var s = n(592471),
    a = n(749280),
    l = n(424602),
    r = n(871499);
function o(e) {
    let t,
        n,
        o,
        c,
        { isActivityActive: u, onMouseEnter: d, onMouseLeave: h, onClick: p, ...m } = e,
        { enabled: _ } = l.nS.useExperiment({ location: 'ActivityButton' }, { autoTrackExposure: !0 }),
        { Component: f, events: E, play: g } = (0, s.s)(),
        { Component: C, events: I, play: T } = (0, a.w)();
    return (
        _ ? ((n = C), (o = I), (c = T)) : ((n = f), (o = E), (c = g)),
        (0, i.jsx)(r.d, {
            isActive: u,
            color: t,
            iconComponent: n,
            onMouseEnter: (e) => {
                null == d || d(e), o.onMouseEnter();
            },
            onMouseLeave: (e) => {
                null == h || h(e), o.onMouseLeave();
            },
            onClick: (e) => {
                null == p || p(e), c();
            },
            ...m
        })
    );
}
