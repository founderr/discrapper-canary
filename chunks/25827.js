r.d(n, {
    C: function () {
        return p;
    },
    Z: function () {
        return h;
    }
});
var i = r(200651),
    a = r(192379),
    s = r(120356),
    o = r.n(s),
    l = r(75735),
    u = r(40851),
    c = r(861254),
    d = r(67844),
    f = r(871499),
    _ = r(541234);
function h(e) {
    let n = (0, d.X)(e),
        { enabled: r, cameraUnavailable: s, onChange: o, onCameraUnavailable: c, hasPermission: f, children: _, channelLimitReached: h = !1, join: p } = e,
        m = (0, u.bp)(),
        g = s ? () => c() : () => o(!e.enabled, m),
        { Component: E, play: v, events: I } = (0, l.o)(p || r ? 'disable' : 'enable');
    return (
        a.useEffect(() => () => v(), [r, v]),
        (0, i.jsx)(i.Fragment, {
            children: _({
                onClick: g,
                isActive: r,
                disabled: !r && (!f || h),
                iconComponent: E,
                iconColor: 'currentColor',
                label: n,
                unavailable: s,
                onMouseEnter: p ? void 0 : I.onMouseEnter,
                onMouseLeave: p ? void 0 : I.onMouseLeave
            })
        })
    );
}
function p(e) {
    let { enabled: n, join: r, channel: a, onChange: s, onCameraUnavailable: l, cameraUnavailable: u, hasPermission: d, className: p, channelLimitReached: m, channelLimit: g, centerButton: E = !1, onPopoutClick: v, ...I } = e,
        T = E ? f.d : f.Z,
        { mode: b } = (0, c.ZP)({ location: 'VideoButton' });
    return (0, i.jsx)(h, {
        enabled: n,
        join: r,
        channel: a,
        onChange: s,
        onCameraUnavailable: l,
        cameraUnavailable: u,
        hasPermission: d,
        channelLimitReached: m,
        channelLimit: g,
        children: (e) => {
            let { unavailable: n, onMouseEnter: a, onMouseLeave: s, isActive: l, ...u } = e;
            return (0, i.jsx)(T, {
                ...u,
                ...I,
                color: b === c.BK.GroupedButtonsRedMic && l ? 'green' : I.color,
                ignoreColorForCaret: b === c.BK.GroupedButtonsRedMic && !r,
                isActive: l,
                onMouseEnter: (e) => {
                    var n;
                    null === (n = I.onMouseEnter) || void 0 === n || n.call(I, e), null == a || a();
                },
                onMouseLeave: (e) => {
                    var n;
                    null === (n = I.onMouseLeave) || void 0 === n || n.call(I, e), null == s || s();
                },
                className: o()(p, { [_.fauxDisabled]: n }),
                onPopoutClick: v,
                fullRegionButton: r
            });
        }
    });
}
