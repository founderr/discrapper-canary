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
    let { message: t, channel: o, targetUser: s, actorUsernameHook: c, targetUsernameHook: u, compact: d } = e,
        m = (0, r.ZP)(t),
        f = (0, r.Sw)(s, o),
        h = c(m),
        p = u(null != f ? f : void 0),
        g = a.intl.format(a.t.tusv2t, {
            actorName: m.nick,
            actorHook: h,
            targetName: null == f ? void 0 : f.nick,
            targetHook: p
        });
    return (0, i.jsx)(l.Z, {
        icon: n(570111),
        timestamp: t.timestamp,
        compact: d,
        children: g
    });
}
