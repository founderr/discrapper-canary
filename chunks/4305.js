n.d(t, {
    Z: function () {
        return r;
    }
});
var i = n(735250);
n(470079);
var a = n(352736),
    s = n(739566),
    l = n(834129);
function r(e) {
    let { message: t, usernameHook: r, compact: o, guildId: c } = e,
        d = (0, s.ZP)(t),
        u = r(d),
        _ = a.Z.getWelcomeMessageKind(c),
        E = a.Z.getSystemMessageUserJoin(t.id, _).format({
            username: d.nick,
            usernameHook: u
        });
    return (0, i.jsx)(l.Z, {
        icon: n(570111),
        timestamp: t.timestamp,
        compact: o,
        children: E
    });
}
