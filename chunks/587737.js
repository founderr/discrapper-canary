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
    let { message: t, channel: s, targetUser: l, actorUsernameHook: u, targetUsernameHook: c, compact: d } = e,
        _ = (0, i.ZP)(t),
        E = (0, i.Sw)(l, s),
        f = u(_),
        h = c(null != E ? E : void 0),
        p = o.Z.Messages.SYSTEM_MESSAGE_THREAD_MEMBER_ADD.format({
            actorName: _.nick,
            actorHook: f,
            targetName: null == E ? void 0 : E.nick,
            targetHook: h
        });
    return (0, r.jsx)(a.Z, {
        icon: n(570111),
        timestamp: t.timestamp,
        compact: d,
        children: p
    });
}
