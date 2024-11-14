t.d(n, {
    M: function () {
        return a;
    }
});
var r,
    i,
    l,
    s,
    a,
    o,
    c = t(442837),
    u = t(570140),
    d = t(592125),
    m = t(757266),
    p = t(375954);
((r = a || (a = {})).NOT_FETCHED = 'NOT_FETCHED'), (r.FETCHING = 'FETCHING'), (r.FETCHED = 'FETCHED');
let x = null,
    h = 'NOT_FETCHED';
class f extends (o = c.ZP.Store) {
    initialize() {
        this.waitFor(d.Z, m.Z, p.Z);
    }
    getApps() {
        return x;
    }
    getFetchState() {
        return h;
    }
}
(s = 'AuthorizedAppsStore'),
    (l = 'displayName') in (i = f)
        ? Object.defineProperty(i, l, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[l] = s),
    (n.Z = new f(u.Z, {
        USER_AUTHORIZED_APPS_REQUEST: function () {
            h = 'FETCHING';
        },
        USER_AUTHORIZED_APPS_UPDATE: function (e) {
            (h = 'FETCHED'), (x = e.apps);
        }
    }));
