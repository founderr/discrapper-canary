r.d(n, {
    M: function () {
        return i;
    }
});
var i,
    a,
    s = r(442837),
    o = r(570140),
    l = r(592125),
    u = r(757266),
    c = r(375954);
function d(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
!(function (e) {
    (e.NOT_FETCHED = 'NOT_FETCHED'), (e.FETCHING = 'FETCHING'), (e.FETCHED = 'FETCHED');
})(i || (i = {}));
let f = null,
    _ = 'NOT_FETCHED';
function h() {
    _ = 'FETCHING';
}
function p(e) {
    (_ = 'FETCHED'), (f = e.apps);
}
class m extends (a = s.ZP.Store) {
    initialize() {
        this.waitFor(l.Z, u.Z, c.Z);
    }
    getApps() {
        return f;
    }
    getFetchState() {
        return _;
    }
}
d(m, 'displayName', 'AuthorizedAppsStore'),
    (n.Z = new m(o.Z, {
        USER_AUTHORIZED_APPS_REQUEST: h,
        USER_AUTHORIZED_APPS_UPDATE: p
    }));
