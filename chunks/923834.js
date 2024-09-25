t(411104);
var i,
    o,
    l,
    E,
    r = t(442837),
    a = t(570140);
let u = null;
class d extends (i = r.ZP.Store) {
    getCurrentPath() {
        return null != u ? u.pathname : null;
    }
    getCurrentRoute() {
        return (function (e) {
            let n = null != e && null != e.search ? e.search : '';
            return null != e ? ''.concat(e.pathname).concat(n) : null;
        })(u);
    }
    reset() {
        throw Error('Should not reset the store this way outside of a test environment');
    }
}
(E = 'ApplicationStoreLocationStore'),
    (l = 'displayName') in (o = d)
        ? Object.defineProperty(o, l, {
              value: E,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (o[l] = E),
    (n.Z = new d(a.Z, {
        APPLICATION_STORE_LOCATION_CHANGE: function (e) {
            let { location: n } = e;
            u = { ...n };
        },
        APPLICATION_STORE_RESET_NAVIGATION: function () {
            u = null;
        }
    }));
