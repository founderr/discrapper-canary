t(411104);
var l,
    i,
    o,
    a,
    u = t(442837),
    r = t(570140);
let d = null;
class c extends (l = u.ZP.Store) {
    getCurrentPath() {
        return null != d ? d.pathname : null;
    }
    getCurrentRoute() {
        return (function (e) {
            let n = null != e && null != e.search ? e.search : '';
            return null != e ? ''.concat(e.pathname).concat(n) : null;
        })(d);
    }
    reset() {
        throw Error('Should not reset the store this way outside of a test environment');
    }
}
(a = 'ApplicationStoreLocationStore'),
    (o = 'displayName') in (i = c)
        ? Object.defineProperty(i, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[o] = a),
    (n.Z = new c(r.Z, {
        APPLICATION_STORE_LOCATION_CHANGE: function (e) {
            let { location: n } = e;
            d = { ...n };
        },
        APPLICATION_STORE_RESET_NAVIGATION: function () {
            d = null;
        }
    }));
