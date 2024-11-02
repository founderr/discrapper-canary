n.d(t, {
    Z: function () {
        return o;
    }
});
var i = n(200651);
n(192379);
var r = n(739566),
    l = n(834129),
    a = n(388032);
function o(e) {
    let t,
        { message: o, usernameHook: s, otherUser: c, otherUsernameHook: u, compact: d, channel: m } = e,
        f = (0, r.ZP)(o),
        h = f.nick,
        p = s(f),
        g = (0, r.Sw)(c, m);
    if (null != g && null != u) {
        let e = u(g);
        t = a.intl.format(a.t.L2FyVl, {
            username: h,
            usernameHook: p,
            otherUsername: g.nick,
            otherUsernameHook: e
        });
    } else
        t = a.intl.format(a.t['5v2xa2'], {
            username: h,
            usernameHook: p
        });
    return (0, i.jsx)(l.Z, {
        icon: n(474019),
        timestamp: o.timestamp,
        compact: d,
        children: t
    });
}
