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
    let { message: t, usernameHook: s, compact: l } = e,
        u = (0, i.ZP)(t),
        c = s(u);
    return (0, r.jsx)(a.Z, {
        icon: n(819373),
        timestamp: t.timestamp,
        compact: l,
        children: o.Z.Messages.SYSTEM_MESSAGE_CHANNEL_ICON_CHANGE_HOOK.format({
            username: u.nick,
            usernameHook: c
        })
    });
}
