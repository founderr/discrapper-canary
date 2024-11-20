n.d(t, {
    C: function () {
        return _;
    },
    Z: function () {
        return f;
    }
});
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(75735),
    l = n(40851),
    u = n(67844),
    c = n(871499),
    d = n(491957);
function f(e) {
    let t = (0, u.X)(e),
        { enabled: n, cameraUnavailable: a, onChange: s, onCameraUnavailable: c, hasPermission: d, children: f, channelLimitReached: _ = !1, join: p } = e,
        h = (0, l.bp)(),
        m = a ? () => c() : () => s(!e.enabled, h),
        { Component: g, play: E, events: v } = (0, o.o)(p || n ? 'disable' : 'enable');
    return (
        i.useEffect(() => () => E(), [n, E]),
        (0, r.jsx)(r.Fragment, {
            children: f({
                onClick: m,
                active: n,
                disabled: !n && (!d || _),
                iconComponent: g,
                label: t,
                unavailable: a,
                onMouseEnter: p ? void 0 : v.onMouseEnter,
                onMouseLeave: p ? void 0 : v.onMouseLeave
            })
        })
    );
}
function _(e) {
    let { enabled: t, join: n, channel: i, onChange: a, onCameraUnavailable: o, cameraUnavailable: l, hasPermission: u, className: _, channelLimitReached: p, channelLimit: h, centerButton: m = !1, onPopoutClick: g, ...E } = e,
        v = m ? c.d : c.Z;
    return (0, r.jsx)(f, {
        enabled: t,
        join: n,
        channel: i,
        onChange: a,
        onCameraUnavailable: o,
        cameraUnavailable: l,
        hasPermission: u,
        channelLimitReached: p,
        channelLimit: h,
        children: (e) => {
            let { unavailable: n, onMouseEnter: i, onMouseLeave: a, ...o } = e;
            return (0, r.jsx)(v, {
                ...o,
                ...E,
                onMouseEnter: (e) => {
                    var t;
                    null === (t = E.onMouseEnter) || void 0 === t || t.call(E, e), null == i || i();
                },
                onMouseLeave: (e) => {
                    var t;
                    null === (t = E.onMouseLeave) || void 0 === t || t.call(E, e), null == a || a();
                },
                isActive: t,
                className: s()(_, { [d.fauxDisabled]: n }),
                onPopoutClick: g
            });
        }
    });
}
