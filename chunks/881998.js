var r,
    o,
    a,
    c,
    i = n(442837),
    l = n(570140),
    u = n(592125),
    s = n(757266),
    E = n(375954);
let d = null;
class _ extends (c = i.ZP.Store) {
    initialize() {
        this.waitFor(u.Z, s.Z, E.Z);
    }
    getApps() {
        return d;
    }
}
(a = 'AuthorizedAppsStore'),
    (o = 'displayName') in (r = _)
        ? Object.defineProperty(r, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (r[o] = a),
    (t.Z = new _(l.Z, {
        USER_AUTHORIZED_APPS_UPDATE: function (e) {
            d = e.apps;
        }
    }));
