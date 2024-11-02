n.d(e, {
    M: function () {
        return c;
    }
});
var o,
    a,
    r,
    i,
    c,
    l,
    u = n(442837),
    s = n(570140),
    E = n(592125),
    d = n(757266),
    f = n(375954);
((o = c || (c = {})).NOT_FETCHED = 'NOT_FETCHED'), (o.FETCHING = 'FETCHING'), (o.FETCHED = 'FETCHED');
let C = null,
    _ = 'NOT_FETCHED';
class N extends (l = u.ZP.Store) {
    initialize() {
        this.waitFor(E.Z, d.Z, f.Z);
    }
    getApps() {
        return C;
    }
    getFetchState() {
        return _;
    }
}
(i = 'AuthorizedAppsStore'),
    (r = 'displayName') in (a = N)
        ? Object.defineProperty(a, r, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (a[r] = i),
    (e.Z = new N(s.Z, {
        USER_AUTHORIZED_APPS_REQUEST: function () {
            _ = 'FETCHING';
        },
        USER_AUTHORIZED_APPS_UPDATE: function (t) {
            (_ = 'FETCHED'), (C = t.apps);
        }
    }));
