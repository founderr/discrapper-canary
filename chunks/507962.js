n.d(t, {
    Z: function () {
        return l;
    }
});
var i = n(200651);
n(192379);
var a = n(739566),
    s = n(834129),
    r = n(689938);
function l(e) {
    let t,
        { message: l, usernameHook: o, otherUser: c, otherUsernameHook: u, compact: d, channel: _ } = e,
        E = (0, a.ZP)(l),
        I = E.nick,
        m = o(E),
        f = (0, a.Sw)(c, _);
    if (null != f && null != u) {
        let e = u(f);
        t = r.Z.Messages.SYSTEM_MESSAGE_RECIPIENT_REMOVE_HOOK.format({
            username: I,
            usernameHook: m,
            otherUsername: f.nick,
            otherUsernameHook: e
        });
    } else
        t = r.Z.Messages.SYSTEM_MESSAGE_RECIPIENT_REMOVE_SELF_HOOK.format({
            username: I,
            usernameHook: m
        });
    return (0, i.jsx)(s.Z, {
        icon: n(474019),
        timestamp: l.timestamp,
        compact: d,
        children: t
    });
}
