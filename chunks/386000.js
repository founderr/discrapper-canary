n.d(t, {
    Z: function () {
        return u;
    }
});
var i = n(200651),
    s = n(192379),
    a = n(692547),
    l = n(652844),
    r = n(628581),
    o = n(743078),
    c = n(871499);
function u(e) {
    let { selfMute: t, serverMute: n, suppress: u, centerButton: d = !1, awaitingRemote: h, onMouseEnter: m, onMouseLeave: p, ..._ } = e,
        { mode: f } = (0, o.Z)({ location: 'MicButton' }),
        E = t || n || u,
        g = d ? c.d : c.Z,
        C = (0, r.Z)(t, n, u, h),
        { Component: I, play: T, events: x } = (0, l.O)(E ? 'unmute' : 'mute');
    return (
        s.useEffect(() => () => T(), [T, E]),
        (0, i.jsx)(g, {
            isActive: 'mic-push-to-enable' === f ? !E : E,
            iconComponent: I,
            iconColor: E && 'mic-push-to-disable-red' === f ? a.Z.unsafe_rawColors.RED_400.css : void 0,
            label: C,
            onMouseEnter: (e) => {
                null == m || m(e), x.onMouseEnter();
            },
            onMouseLeave: (e) => {
                null == p || p(e), x.onMouseLeave();
            },
            ..._
        })
    );
}
