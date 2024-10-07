n.d(t, {
    Z: function () {
        return E;
    }
});
var i = n(735250);
n(470079);
var a = n(442837),
    s = n(481060),
    l = n(776568),
    r = n(218035),
    o = n(775666),
    c = n(858822),
    d = n(423589),
    u = n(131704),
    _ = n(430824);
function E(e) {
    let { channel: t, closePopout: n, onSelect: E, navId: I, label: m, location: T, includeGuildMute: N } = e,
        h = (0, r.c)(t),
        C = (0, o.EQ)(t),
        p = (0, a.e7)([_.Z], () => _.Z.getGuild(t.guild_id)),
        f = (0, c.Z)(p),
        A = (0, d.Mn)('ChannelNotificationSettingsPopoutMenu') && u.$N.has(t.type);
    return (0, i.jsxs)(s.Menu, {
        navId: I,
        onClose: n,
        'aria-label': m,
        onSelect: E,
        children: [(0, i.jsx)(s.MenuGroup, { children: (0, l.ZP)(t, T) }), N ? (0, i.jsx)(s.MenuGroup, { children: f }) : null, A ? C : (0, i.jsx)(s.MenuGroup, { children: h })]
    });
}
