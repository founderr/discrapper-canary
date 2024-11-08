n.d(t, {
    Z: function () {
        return m;
    }
});
var i = n(200651);
n(192379);
var l = n(442837),
    a = n(481060),
    r = n(358221),
    s = n(441061),
    o = n(431368),
    c = n(167675),
    d = n(418469),
    u = n(673539),
    h = n(354459),
    p = n(388032);
function m(e) {
    let { channelId: t, onClose: n, appContext: m, exitFullScreen: f, onSelect: g } = e,
        C = (0, l.e7)([r.Z], () => r.Z.getSelectedParticipant(t)),
        x = (null == C ? void 0 : C.type) === h.fO.STREAM ? C.stream : null,
        v = (0, s.Z)(t),
        _ = (0, c.Z)(),
        I = (0, o.Z)(t),
        E = (0, u.Z)(t);
    return (0, i.jsxs)(a.Menu, {
        navId: 'channel-call-overflow-popout',
        onClose: n,
        'aria-label': p.intl.string(p.t.pkYeAw),
        onSelect: g,
        children: [v, _, I, E, (0, d.Z)(x, m, f)]
    });
}
