n.d(t, {
    Z: function () {
        return p;
    }
});
var i = n(200651);
n(192379);
var s = n(442837),
    a = n(481060),
    l = n(358221),
    r = n(441061),
    o = n(431368),
    c = n(167675),
    u = n(418469),
    d = n(673539),
    h = n(354459),
    m = n(689938);
function p(e) {
    let { channelId: t, onClose: n, appContext: p, exitFullScreen: _, onSelect: f } = e,
        E = (0, s.e7)([l.Z], () => l.Z.getSelectedParticipant(t)),
        g = (null == E ? void 0 : E.type) === h.fO.STREAM ? E.stream : null,
        C = (0, r.Z)(t),
        I = (0, c.Z)(),
        T = (0, o.Z)(t),
        x = (0, d.Z)(t);
    return (0, i.jsxs)(a.Menu, {
        navId: 'channel-call-overflow-popout',
        onClose: n,
        'aria-label': m.Z.Messages.CHANNEL_CALL_OVERFLOW_MENU_LABEL,
        onSelect: f,
        children: [C, I, T, x, (0, u.Z)(g, p, _)]
    });
}
