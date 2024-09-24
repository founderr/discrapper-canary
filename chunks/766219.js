n.d(t, {
    O: function () {
        return u;
    },
    s: function () {
        return d;
    }
});
var i = n(963202),
    a = n(703656),
    s = n(823379),
    r = n(831565),
    l = n(49898),
    o = n(981631),
    c = n(689938);
function d(e) {
    switch (e) {
        case l.F$.SERVERS:
            return c.Z.Messages.GLOBAL_DISCOVERY_SERVERS_TITLE;
        case l.F$.QUESTS:
            return c.Z.Messages.GLOBAL_DISCOVERY_QUESTS_TITLE;
        default:
            (0, s.vE)(e);
    }
}
function u() {
    let e = (0, r.a)({ location: 'discovery_history_util' }),
        t = (0, i.rx)('discovery_history_util');
    e && t && (0, a.uL)(o.Z5c.GLOBAL_DISCOVERY_SERVERS);
}
