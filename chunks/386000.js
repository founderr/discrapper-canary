n.d(t, {
    Z: function () {
        return u;
    }
});
var i = n(200651),
    l = n(192379),
    r = n(692547),
    s = n(652844),
    a = n(628581),
    o = n(743078),
    c = n(871499);
function u(e) {
    let { selfMute: t, serverMute: n, suppress: u, centerButton: d = !1, awaitingRemote: h, onMouseEnter: m, onMouseLeave: p, ...f } = e,
        { mode: g } = (0, o.Z)({ location: 'MicButton' }),
        C = t || n || u,
        x = d ? c.d : c.Z,
        v = (0, a.Z)(t, n, u, h),
        { Component: _, play: I, events: E } = (0, s.O)(C ? 'unmute' : 'mute');
    return (
        l.useEffect(() => () => I(), [I, C]),
        (0, i.jsx)(x, {
            isActive: 'mic-push-to-enable' === g ? !C : C,
            iconComponent: _,
            iconColor: C && 'mic-push-to-disable-red' === g ? r.Z.unsafe_rawColors.RED_400.css : void 0,
            label: v,
            onMouseEnter: (e) => {
                null == m || m(e), E.onMouseEnter();
            },
            onMouseLeave: (e) => {
                null == p || p(e), E.onMouseLeave();
            },
            ...f
        })
    );
}
