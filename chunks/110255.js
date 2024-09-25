n.d(t, {
    Z: function () {
        return E;
    }
});
var r = n(735250);
n(470079);
var i = n(442837),
    a = n(481060),
    o = n(776568),
    s = n(218035),
    l = n(775666),
    u = n(858822),
    c = n(423589),
    d = n(131704),
    _ = n(430824);
function E(e) {
    let { channel: t, closePopout: n, onSelect: E, navId: f, label: h, location: p, includeGuildMute: m } = e,
        I = (0, s.c)(t),
        T = (0, l.EQ)(t),
        g = (0, i.e7)([_.Z], () => _.Z.getGuild(t.guild_id)),
        S = (0, u.Z)(g),
        A = (0, c.Mn)('ChannelNotificationSettingsPopoutMenu') && d.$N.has(t.type);
    return (0, r.jsxs)(a.Menu, {
        navId: f,
        onClose: n,
        'aria-label': h,
        onSelect: E,
        children: [(0, r.jsx)(a.MenuGroup, { children: (0, o.ZP)(t, p) }), m ? (0, r.jsx)(a.MenuGroup, { children: S }) : null, A ? T : (0, r.jsx)(a.MenuGroup, { children: I })]
    });
}
