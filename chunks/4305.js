n.d(t, {
    Z: function () {
        return s;
    }
});
var i = n(200651);
n(192379);
var r = n(352736),
    l = n(739566),
    a = n(834129),
    o = n(388032);
function s(e) {
    let { message: t, usernameHook: s, compact: c, guildId: u } = e,
        d = (0, l.ZP)(t),
        m = s(d),
        f = r.Z.getWelcomeMessageKind(u),
        h = r.Z.getSystemMessageUserJoin(t.id, f),
        p = o.intl.format(h, {
            username: d.nick,
            usernameHook: m
        });
    return (0, i.jsx)(a.Z, {
        icon: n(570111),
        timestamp: t.timestamp,
        compact: c,
        children: p
    });
}
