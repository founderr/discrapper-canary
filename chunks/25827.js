n.d(t, {
    C: function () {
        return p;
    },
    Z: function () {
        return _;
    }
});
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(75735),
    l = n(40851),
    u = n(67844),
    c = n(411840),
    d = n(871499),
    f = n(541234);
function _(e) {
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
                isActive: n,
                disabled: !n && (!d || _),
                iconComponent: g,
                iconColor: 'currentColor',
                label: t,
                unavailable: a,
                onMouseEnter: p ? void 0 : v.onMouseEnter,
                onMouseLeave: p ? void 0 : v.onMouseLeave
            })
        })
    );
}
function p(e) {
    let { enabled: t, join: n, channel: i, onChange: a, onCameraUnavailable: o, cameraUnavailable: l, hasPermission: u, className: p, channelLimitReached: h, channelLimit: m, centerButton: g = !1, onPopoutClick: E, ...v } = e,
        I = g ? d.d : d.Z,
        { mode: T } = (0, c.Z)({ location: 'VideoButton' });
    return (0, r.jsx)(_, {
        enabled: t,
        join: n,
        channel: i,
        onChange: a,
        onCameraUnavailable: o,
        cameraUnavailable: l,
        hasPermission: u,
        channelLimitReached: h,
        channelLimit: m,
        children: (e) => {
            let { unavailable: t, onMouseEnter: i, onMouseLeave: a, isActive: o, ...l } = e;
            return (0, r.jsx)(I, {
                ...l,
                ...v,
                color: T === c.B.GroupedButtonsRedMic && o ? 'green' : v.color,
                ignoreColorForCaret: T === c.B.GroupedButtonsRedMic && !n,
                isActive: o,
                onMouseEnter: (e) => {
                    var t;
                    null === (t = v.onMouseEnter) || void 0 === t || t.call(v, e), null == i || i();
                },
                onMouseLeave: (e) => {
                    var t;
                    null === (t = v.onMouseLeave) || void 0 === t || t.call(v, e), null == a || a();
                },
                className: s()(p, { [f.fauxDisabled]: t }),
                onPopoutClick: E,
                fullRegionButton: n
            });
        }
    });
}
