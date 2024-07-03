n.d(t, {
    Z: function () {
        return r;
    }
});
var i = n(735250);
n(470079);
var a = n(702346), s = n(352736), l = n(739566);
function r(e) {
    let {
            message: t,
            usernameHook: r,
            compact: o,
            guildId: c
        } = e, d = (0, l.ZP)(t), u = r(d), _ = s.Z.getWelcomeMessageKind(c), E = s.Z.getSystemMessageUserJoin(t.id, _).format({
            username: d.nick,
            usernameHook: u
        });
    return (0, i.jsx)(a.Z, {
        icon: n(570111),
        timestamp: t.timestamp,
        compact: o,
        children: E
    });
}
