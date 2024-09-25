n.d(t, {
    Z: function () {
        return s;
    }
});
var r = n(735250);
n(470079);
var i = n(352736),
    a = n(739566),
    o = n(834129);
function s(e) {
    let { message: t, usernameHook: s, compact: l, guildId: u } = e,
        c = (0, a.ZP)(t),
        d = s(c),
        _ = i.Z.getWelcomeMessageKind(u),
        E = i.Z.getSystemMessageUserJoin(t.id, _).format({
            username: c.nick,
            usernameHook: d
        });
    return (0, r.jsx)(o.Z, {
        icon: n(570111),
        timestamp: t.timestamp,
        compact: l,
        children: E
    });
}
