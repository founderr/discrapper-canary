n.d(t, {
    Z: function () {
        return c;
    }
});
var i = n(200651);
n(192379);
var l = n(592471),
    r = n(749280),
    a = n(424602),
    s = n(861254),
    o = n(871499);
function c(e) {
    let t,
        n,
        c,
        d,
        { isActivityActive: u, onMouseEnter: h, onMouseLeave: p, onClick: m, ...f } = e,
        { mode: g } = (0, s.ZP)({ location: 'VideoButton' });
    g === s.BK.GroupedButtonsRedMic && u && (t = 'green');
    let { enabled: C } = a.nS.useExperiment({ location: 'ActivityButton' }, { autoTrackExposure: !0 }),
        { Component: x, events: v, play: _ } = (0, l.s)(),
        { Component: I, events: E, play: b } = (0, r.w)();
    return (
        C ? ((n = I), (c = E), (d = b)) : ((n = x), (c = v), (d = _)),
        (0, i.jsx)(o.d, {
            isActive: u,
            color: t,
            iconComponent: n,
            onMouseEnter: (e) => {
                null == h || h(e), c.onMouseEnter();
            },
            onMouseLeave: (e) => {
                null == p || p(e), c.onMouseLeave();
            },
            onClick: (e) => {
                null == m || m(e), d();
            },
            ...f
        })
    );
}
