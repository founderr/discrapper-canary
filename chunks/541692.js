let l;
var i,
    r = n(442837),
    a = n(570140),
    u = n(133080);
function o(t, e, n) {
    return (
        e in t
            ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (t[e] = n),
        t
    );
}
let s = (0, u.K4)();
function c(t) {
    var e;
    let { countryCode: n } = t;
    if (null != n) s = null !== (e = (0, u.Zz)(n)) && void 0 !== e ? e : (0, u.K4)();
}
class d extends (i = r.ZP.DeviceSettingsStore) {
    initialize(t) {
        if (null != t) l = t.selectedCountryCode;
    }
    getUserAgnosticState() {
        return { selectedCountryCode: l };
    }
    getCountryCode() {
        return null != l ? l : s;
    }
}
o(d, 'displayName', 'PhoneStore'),
    o(d, 'persistKey', 'PhoneStore'),
    (e.Z = new d(a.Z, {
        PHONE_SET_COUNTRY_CODE: function (t) {
            let { countryCode: e } = t;
            l = e;
        },
        CONNECTION_OPEN: c,
        SET_LOCATION_METADATA: c
    }));
