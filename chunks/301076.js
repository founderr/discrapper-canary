n.d(t, {
    Z: function () {
        return o;
    }
});
var i = n(200651);
n(192379);
var l = n(592471),
    r = n(749280),
    a = n(424602),
    s = n(871499);
function o(e) {
    let t,
        n,
        o,
        c,
        { isActivityActive: d, onMouseEnter: u, onMouseLeave: h, onClick: p, ...m } = e,
        { enabled: f } = a.nS.useExperiment({ location: 'ActivityButton' }, { autoTrackExposure: !0 }),
        { Component: g, events: C, play: x } = (0, l.s)(),
        { Component: v, events: _, play: I } = (0, r.w)();
    return (
        f ? ((n = v), (o = _), (c = I)) : ((n = g), (o = C), (c = x)),
        (0, i.jsx)(s.d, {
            isActive: d,
            color: t,
            iconComponent: n,
            onMouseEnter: (e) => {
                null == u || u(e), o.onMouseEnter();
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
