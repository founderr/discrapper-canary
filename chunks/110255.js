n.d(t, {
    Z: function () {
        return h;
    }
});
var i = n(200651);
n(192379);
var r = n(442837),
    l = n(481060),
    a = n(776568),
    o = n(218035),
    s = n(775666),
    c = n(858822),
    u = n(423589),
    d = n(131704),
    m = n(430824);
function h(e) {
    let { channel: t, closePopout: n, onSelect: h, navId: f, label: p, location: g, includeGuildMute: _ } = e,
        C = (0, o.c)(t),
        E = (0, s.EQ)(t),
        I = (0, r.e7)([m.Z], () => m.Z.getGuild(t.guild_id)),
        x = (0, c.Z)(I),
        v = (0, u.Mn)('ChannelNotificationSettingsPopoutMenu') && d.$N.has(t.type);
    return (0, i.jsxs)(l.Menu, {
        navId: f,
        onClose: n,
        'aria-label': p,
        onSelect: h,
        children: [(0, i.jsx)(l.MenuGroup, { children: (0, a.ZP)(t, g) }), _ ? (0, i.jsx)(l.MenuGroup, { children: x }) : null, v ? E : (0, i.jsx)(l.MenuGroup, { children: C })]
    });
}
