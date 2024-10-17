n.d(t, {
    Z: function () {
        return E;
    }
});
var i = n(735250);
n(470079);
var a = n(442837),
    s = n(481060),
    r = n(776568),
    l = n(218035),
    o = n(775666),
    c = n(858822),
    u = n(423589),
    d = n(131704),
    _ = n(430824);
function E(e) {
    let { channel: t, closePopout: n, onSelect: E, navId: I, label: m, location: T, includeGuildMute: f } = e,
        h = (0, l.c)(t),
        N = (0, o.EQ)(t),
        p = (0, a.e7)([_.Z], () => _.Z.getGuild(t.guild_id)),
        C = (0, c.Z)(p),
        g = (0, u.Mn)('ChannelNotificationSettingsPopoutMenu') && d.$N.has(t.type);
    return (0, i.jsxs)(s.Menu, {
        navId: I,
        onClose: n,
        'aria-label': m,
        onSelect: E,
        children: [(0, i.jsx)(s.MenuGroup, { children: (0, r.ZP)(t, T) }), f ? (0, i.jsx)(s.MenuGroup, { children: C }) : null, g ? N : (0, i.jsx)(s.MenuGroup, { children: h })]
    });
}
