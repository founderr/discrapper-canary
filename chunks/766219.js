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
    l = n(823379),
    a = n(49898),
    s = n(981631),
    o = n(388032);
function c(e) {
    switch (e) {
        case a.F$.SERVERS:
            return o.intl.string(o.t['+Anbp6']);
        case a.F$.APPS:
            return o.intl.string(o.t.bGwCoa);
        case a.F$.QUESTS:
            return o.intl.string(o.t.EcaD4e);
        default:
            (0, l.vE)(e);
    }
}
function d() {
    (0, i.rx)('discovery_history_util') && (0, r.uL)(s.Z5c.GLOBAL_DISCOVERY_SERVERS);
}
function u(e, t) {
    switch (e) {
        case '/discovery/quests':
            return a.F$.QUESTS;
        case '/discovery/applications':
            return t ? a.F$.APPS : a.D7;
        case '/discovery/servers':
            return a.F$.SERVERS;
        default:
            return a.D7;
    }
}
