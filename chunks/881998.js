n.d(t, {
    M: function () {
        return l;
    }
});
var i,
    a,
    s,
    r,
    l,
    o,
    c = n(442837),
    u = n(570140),
    d = n(592125),
    _ = n(757266),
    E = n(375954);
((i = l || (l = {})).NOT_FETCHED = 'NOT_FETCHED'), (i.FETCHING = 'FETCHING'), (i.FETCHED = 'FETCHED');
let I = null,
    m = 'NOT_FETCHED';
class T extends (o = c.ZP.Store) {
    initialize() {
        this.waitFor(d.Z, _.Z, E.Z);
    }
    getApps() {
        return I;
    }
    getFetchState() {
        return m;
    }
}
(r = 'AuthorizedAppsStore'),
    (s = 'displayName') in (a = T)
        ? Object.defineProperty(a, s, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (a[s] = r),
    (t.Z = new T(u.Z, {
        USER_AUTHORIZED_APPS_REQUEST: function () {
            m = 'FETCHING';
        },
        USER_AUTHORIZED_APPS_UPDATE: function (e) {
            (m = 'FETCHED'), (I = e.apps);
        }
    }));
