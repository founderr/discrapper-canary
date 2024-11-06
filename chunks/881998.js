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
    x = t(375954);
((r = a || (a = {})).NOT_FETCHED = 'NOT_FETCHED'), (r.FETCHING = 'FETCHING'), (r.FETCHED = 'FETCHED');
let h = null,
    p = 'NOT_FETCHED';
class f extends (o = c.ZP.Store) {
    initialize() {
        this.waitFor(d.Z, m.Z, x.Z);
    }
    getApps() {
        return h;
    }
    getFetchState() {
        return p;
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
            p = 'FETCHING';
        },
        USER_AUTHORIZED_APPS_UPDATE: function (e) {
            (p = 'FETCHED'), (h = e.apps);
        }
    }));
