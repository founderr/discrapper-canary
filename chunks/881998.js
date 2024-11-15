n.d(t, {
    M: function () {
        return o;
    }
});
var r,
    i,
    a,
    s,
    o,
    l,
    u = n(442837),
    c = n(570140),
    d = n(592125),
    f = n(757266),
    _ = n(375954);
((r = o || (o = {})).NOT_FETCHED = 'NOT_FETCHED'), (r.FETCHING = 'FETCHING'), (r.FETCHED = 'FETCHED');
let p = null,
    h = 'NOT_FETCHED';
class m extends (l = u.ZP.Store) {
    initialize() {
        this.waitFor(d.Z, f.Z, _.Z);
    }
    getApps() {
        return p;
    }
    getFetchState() {
        return h;
    }
}
(s = 'AuthorizedAppsStore'),
    (a = 'displayName') in (i = m)
        ? Object.defineProperty(i, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[a] = s),
    (t.Z = new m(c.Z, {
        USER_AUTHORIZED_APPS_REQUEST: function () {
            h = 'FETCHING';
        },
        USER_AUTHORIZED_APPS_UPDATE: function (e) {
            (h = 'FETCHED'), (p = e.apps);
        }
    }));
