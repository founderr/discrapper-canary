n.d(t, {
    Z: function () {
        return l;
    }
});
var i = n(735250);
n(470079);
var s = n(352736),
    a = n(739566),
    r = n(834129);
function l(e) {
    let { message: t, usernameHook: l, compact: o, guildId: c } = e,
        u = (0, a.ZP)(t),
        d = l(u),
        _ = s.Z.getWelcomeMessageKind(c),
        E = s.Z.getSystemMessageUserJoin(t.id, _).format({
            username: u.nick,
            usernameHook: d
        });
    return (0, i.jsx)(r.Z, {
        icon: n(570111),
        timestamp: t.timestamp,
        compact: o,
        children: E
    });
}
