e(411104);
var i,
    o,
    r,
    l,
    d = e(442837),
    s = e(570140);
let u = null;
class a extends (i = d.ZP.Store) {
    getCurrentPath() {
        return null != u ? u.pathname : null;
    }
    getCurrentRoute() {
        return (function (n) {
            let t = null != n && null != n.search ? n.search : '';
            return null != n ? ''.concat(n.pathname).concat(t) : null;
        })(u);
    }
    reset() {
        throw Error('Should not reset the store this way outside of a test environment');
    }
}
(l = 'ApplicationStoreLocationStore'),
    (r = 'displayName') in (o = a)
        ? Object.defineProperty(o, r, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (o[r] = l),
    (t.Z = new a(s.Z, {
        APPLICATION_STORE_LOCATION_CHANGE: function (n) {
            let { location: t } = n;
            u = { ...t };
        },
        APPLICATION_STORE_RESET_NAVIGATION: function () {
            u = null;
        }
    }));
