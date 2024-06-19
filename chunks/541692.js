let i;
var s, l = n(442837),
  a = n(570140),
  r = n(133080);

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let c = (0, r.K4)();

function u(e) {
  var t;
  let {
    countryCode: n
  } = e;
  if (null != n) c = null !== (t = (0, r.Zz)(n)) && void 0 !== t ? t : (0, r.K4)()
}
class d extends(s = l.ZP.DeviceSettingsStore) {
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
o(d, "displayName", "PhoneStore"), o(d, "persistKey", "PhoneStore"), t.Z = new d(a.Z, {
  PHONE_SET_COUNTRY_CODE: function(e) {
    let {
      countryCode: t
    } = e;
    i = t
  },
  CONNECTION_OPEN: u,
  SET_LOCATION_METADATA: u
})