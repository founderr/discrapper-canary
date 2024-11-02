e(411104);
var i,
    l,
    o,
    r,
    u = e(442837),
    a = e(570140);
let d = null;
class E extends (i = u.ZP.Store) {
    getCurrentPath() {
        return null != d ? d.pathname : null;
    }
    getCurrentRoute() {
        return (function (n) {
            let t = null != n && null != n.search ? n.search : '';
            return null != n ? ''.concat(n.pathname).concat(t) : null;
        })(d);
    }
    reset() {
        throw Error('Should not reset the store this way outside of a test environment');
    }
}
(r = 'ApplicationStoreLocationStore'),
    (o = 'displayName') in (l = E)
        ? Object.defineProperty(l, o, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (l[o] = r),
    (t.Z = new E(a.Z, {
        APPLICATION_STORE_LOCATION_CHANGE: function (n) {
            let { location: t } = n;
            d = { ...t };
        },
        APPLICATION_STORE_RESET_NAVIGATION: function () {
            d = null;
        }
    }));
