var r,
    i,
    a = n(442837),
    o = n(570140),
    s = n(592125),
    l = n(757266),
    u = n(375954);
function c(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
!(function (e) {
    (e.NOT_FETCHED = 'NOT_FETCHED'), (e.FETCHING = 'FETCHING'), (e.FETCHED = 'FETCHED');
})(r || (r = {}));
let d = null,
    _ = 'NOT_FETCHED';
function E() {
    _ = 'FETCHING';
}
function f(e) {
    (_ = 'FETCHED'), (d = e.apps);
}
class h extends (i = a.ZP.Store) {
    initialize() {
        this.waitFor(s.Z, l.Z, u.Z);
    }
    getApps() {
        return d;
    }
    getFetchState() {
        return _;
    }
}
c(h, 'displayName', 'AuthorizedAppsStore'),
    (t.Z = new h(o.Z, {
        USER_AUTHORIZED_APPS_REQUEST: E,
        USER_AUTHORIZED_APPS_UPDATE: f
    }));
