var r,
    i,
    o,
    u,
    c = t(442837),
    a = t(570140),
    s = t(592125),
    l = t(757266),
    E = t(375954);
let _ = null;
class d extends (u = c.ZP.Store) {
    initialize() {
        this.waitFor(s.Z, l.Z, E.Z);
    }
    getApps() {
        return _;
    }
}
(o = 'AuthorizedAppsStore'),
    (i = 'displayName') in (r = d)
        ? Object.defineProperty(r, i, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (r[i] = o),
    (e.Z = new d(a.Z, {
        USER_AUTHORIZED_APPS_UPDATE: function (n) {
            _ = n.apps;
        }
    }));
