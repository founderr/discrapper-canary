n.d(t, {
    Z: function () {
        return p;
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
    u = n(418469),
    d = n(673539),
    h = n(354459),
    m = n(388032);
function p(e) {
    let { channelId: t, onClose: n, appContext: p, exitFullScreen: f, onSelect: g } = e,
        C = (0, l.e7)([a.Z], () => a.Z.getSelectedParticipant(t)),
        x = (null == C ? void 0 : C.type) === h.fO.STREAM ? C.stream : null,
        v = (0, s.Z)(t),
        _ = (0, c.Z)(),
        I = (0, o.Z)(t),
        E = (0, d.Z)(t);
    return (0, i.jsxs)(r.Menu, {
        navId: 'channel-call-overflow-popout',
        onClose: n,
        'aria-label': m.intl.string(m.t.pkYeAw),
        onSelect: g,
        children: [v, _, I, E, (0, u.Z)(x, p, f)]
    });
}
