n.d(e, {
    M: function () {
        return i;
    }
});
var a,
    o,
    r,
    c,
    i,
    u,
    l = n(442837),
    s = n(570140),
    E = n(592125),
    d = n(757266),
    C = n(375954);
((a = i || (i = {})).NOT_FETCHED = 'NOT_FETCHED'), (a.FETCHING = 'FETCHING'), (a.FETCHED = 'FETCHED');
let T = null,
    _ = 'NOT_FETCHED';
class f extends (u = l.ZP.Store) {
    initialize() {
        this.waitFor(E.Z, d.Z, C.Z);
    }
    getApps() {
        return T;
    }
    getFetchState() {
        return _;
    }
}
(c = 'AuthorizedAppsStore'),
    (r = 'displayName') in (o = f)
        ? Object.defineProperty(o, r, {
              value: c,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (o[r] = c),
    (e.Z = new f(s.Z, {
        USER_AUTHORIZED_APPS_REQUEST: function () {
            _ = 'FETCHING';
        },
        USER_AUTHORIZED_APPS_UPDATE: function (t) {
            (_ = 'FETCHED'), (T = t.apps);
        }
    }));
