n.d(t, {
    M: function () {
        return o;
    }
});
var i,
    r,
    l,
    a,
    o,
    s,
    c = n(442837),
    u = n(570140),
    d = n(592125),
    m = n(757266),
    h = n(375954);
((i = o || (o = {})).NOT_FETCHED = 'NOT_FETCHED'), (i.FETCHING = 'FETCHING'), (i.FETCHED = 'FETCHED');
let f = null,
    p = 'NOT_FETCHED';
class g extends (s = c.ZP.Store) {
    initialize() {
        this.waitFor(d.Z, m.Z, h.Z);
    }
    getApps() {
        return f;
    }
    getFetchState() {
        return p;
    }
}
(a = 'AuthorizedAppsStore'),
    (l = 'displayName') in (r = g)
        ? Object.defineProperty(r, l, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (r[l] = a),
    (t.Z = new g(u.Z, {
        USER_AUTHORIZED_APPS_REQUEST: function () {
            p = 'FETCHING';
        },
        USER_AUTHORIZED_APPS_UPDATE: function (e) {
            (p = 'FETCHED'), (f = e.apps);
        }
    }));
