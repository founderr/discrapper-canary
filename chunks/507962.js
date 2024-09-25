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
    let t,
        { message: s, usernameHook: l, otherUser: u, otherUsernameHook: c, compact: d, channel: _ } = e,
        E = (0, i.ZP)(s),
        f = E.nick,
        h = l(E),
        p = (0, i.Sw)(u, _);
    if (null != p && null != c) {
        let e = c(p);
        t = o.Z.Messages.SYSTEM_MESSAGE_RECIPIENT_REMOVE_HOOK.format({
            username: f,
            usernameHook: h,
            otherUsername: p.nick,
            otherUsernameHook: e
        });
    } else
        t = o.Z.Messages.SYSTEM_MESSAGE_RECIPIENT_REMOVE_SELF_HOOK.format({
            username: f,
            usernameHook: h
        });
    return (0, r.jsx)(a.Z, {
        icon: n(474019),
        timestamp: s.timestamp,
        compact: d,
        children: t
    });
}
