n.d(t, {
    IE: function () {
        return u;
    },
    Og: function () {
        return d;
    },
    sm: function () {
        return c;
    }
});
var i = n(963202),
    r = n(703656),
    a = n(823379),
    l = n(49898),
    s = n(981631),
    o = n(388032);
function c(e) {
    switch (e) {
        case l.F$.SERVERS:
            return o.intl.string(o.t['+Anbp6']);
        case l.F$.APPS:
            return o.intl.string(o.t.bGwCoa);
        case l.F$.QUESTS:
            return o.intl.string(o.t.EcaD4e);
        default:
            (0, a.vE)(e);
    }
}
function d() {
    (0, i.rx)('discovery_history_util') && (0, r.uL)(s.Z5c.GLOBAL_DISCOVERY_SERVERS);
}
function u(e, t) {
    switch (e) {
        case '/discovery/quests':
            return l.F$.QUESTS;
        case '/discovery/applications':
            return t ? l.F$.APPS : l.D7;
        case '/discovery/servers':
            return l.F$.SERVERS;
        default:
            return l.D7;
    }
}
