n.d(t, {
    I: function () {
        return s;
    },
    s: function () {
        return a;
    }
});
var i = n(823379),
    r = n(49898),
    l = n(388032);
function a(e) {
    switch (e) {
        case r.F$.SERVERS:
            return l.intl.string(l.t['+Anbp6']);
        case r.F$.APPS:
            return l.intl.string(l.t.bGwCoa);
        case r.F$.QUESTS:
            return l.intl.string(l.t.EcaD4e);
        default:
            (0, i.vE)(e);
    }
}
function s(e) {
    if (e.startsWith('/discovery/applications')) return r.F$.APPS;
    switch (e) {
        case '/discovery/quests':
            return r.F$.QUESTS;
        case '/discovery/servers':
            return r.F$.SERVERS;
        default:
            return r.D7;
    }
}
