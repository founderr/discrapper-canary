n.d(t, {
    Z: function () {
        return u;
    }
});
var i = n(200651),
    l = n(192379),
    r = n(691324),
    a = n(652844),
    s = n(628581),
    o = n(44315),
    c = n(411840),
    d = n(871499);
function u(e) {
    let { selfMute: t, serverMute: n, suppress: u, centerButton: h = !1, awaitingRemote: p, onMouseEnter: m, onMouseLeave: f, ...g } = e,
        { mode: C } = (0, c.Z)({ location: 'MicButton' }),
        x = t || n || u,
        v = h ? d.d : d.Z,
        _ = (0, s.Z)(t, n, u, p, C === c.B.GroupedButtonsRedMic),
        { Component: I, play: E, events: b } = (0, a.O)(x ? 'unmute' : 'mute');
    l.useEffect(() => () => E(), [E, x]);
    let Z = C === c.B.GroupedButtonsRedMic && x ? (0, o.Lq)(r.I.RED_400) : void 0,
        N = C !== c.B.GroupedButtonsRedMic;
    return (0, i.jsx)(v, {
        isActive: !!N && !x,
        iconComponent: I,
        iconColor: Z,
        label: _,
        onMouseEnter: (e) => {
            null == m || m(e), b.onMouseEnter();
        },
        onMouseLeave: (e) => {
            null == f || f(e), b.onMouseLeave();
        },
        ...g
    });
}
