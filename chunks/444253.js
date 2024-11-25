n.d(t, {
    Z: function () {
        return f;
    }
});
var i = n(200651);
n(192379);
var l = n(442837),
    r = n(481060),
    a = n(358221),
    s = n(441061),
    o = n(431368),
    c = n(167675),
    d = n(811423),
    u = n(418469),
    h = n(673539),
    p = n(354459),
    m = n(388032);
function f(e) {
    let { channelId: t, onClose: n, appContext: f, exitFullScreen: g, onSelect: C } = e,
        x = (0, l.e7)([a.Z], () => a.Z.getSelectedParticipant(t)),
        _ = (null == x ? void 0 : x.type) === p.fO.STREAM ? x.stream : null,
        v = (0, s.Z)(t),
        I = (0, c.Z)(),
        E = (0, o.Z)(t),
        b = (0, h.Z)(t),
        N = (0, d.Z)(x);
    return (0, i.jsxs)(r.Menu, {
        navId: 'channel-call-overflow-popout',
        onClose: n,
        'aria-label': m.intl.string(m.t.pkYeAw),
        onSelect: C,
        children: [v, I, E, b, (0, u.Z)(_, f, g), N]
    });
}
