let i;
var s, a = n(442837),
  r = n(570140),
  l = n(133080);

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let c = (0, l.K4)();

function d(e) {
  var t;
  let {
    countryCode: n
  } = e;
  if (null != n) c = null !== (t = (0, l.Zz)(n)) && void 0 !== t ? t : (0, l.K4)()
}
class u extends(s = a.ZP.DeviceSettingsStore) {
  initialize(e) {
    if (null != e) i = e.selectedCountryCode
  }
  getUserAgnosticState() {
    return {
      selectedCountryCode: i
    }
  }
  getCountryCode() {
    return null != i ? i : c
  }
}
o(u, "displayName", "PhoneStore"), o(u, "persistKey", "PhoneStore"), t.Z = new u(r.Z, {
  PHONE_SET_COUNTRY_CODE: function(e) {
    let {
      countryCode: t
    } = e;
    i = t
  },
  CONNECTION_OPEN: d,
  SET_LOCATION_METADATA: d
})