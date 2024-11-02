var i,
    r = n(442837),
    l = n(570140);
function a(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let s = {};
class o extends (i = r.ZP.DeviceSettingsStore) {
    initialize(e) {
        s = null != e ? e : {};
    }
    filterNSFW() {
        return !0 !== s.showNSFW;
    }
    negativeContentOnly() {
        return !0 === s.negativeContentOnly;
    }
    getState() {
        return s;
    }
    getUserAgnosticState() {
        return s;
    }
}
a(o, 'displayName', 'GravityFiltersStore'),
    a(o, 'persistKey', 'GravityFiltersStore'),
    (t.Z = new o(l.Z, {
        SET_GRAVITY_FILTERS: function (e) {
            s = e.filters;
        }
    }));
