n.d(t, {
    Z: function () {
        return s;
    }
});
var r = n(735250);
n(470079);
var i = n(739566),
    a = n(834129),
    o = n(689938);
function s(e) {
    let { message: t, otherUsername: s, usernameHook: l, otherUsernameHook: u, compact: c } = e,
        { nick: d } = (0, i.ZP)(t),
        _ = l(),
        E = u(),
        f = o.Z.Messages.SYSTEM_MESSAGE_RECIPIENT_ADD_HOOK.format({
            username: d,
            usernameHook: _,
            otherUsername: s,
            otherUsernameHook: E
        });
    return (0, r.jsx)(a.Z, {
        icon: n(570111),
        timestamp: t.timestamp,
        compact: c,
        children: f
    });
}
