"use strict";
let n;
a.r(t);
var s, l = a("442837"),
  i = a("570140"),
  r = a("133080");

function o(e, t, a) {
  return t in e ? Object.defineProperty(e, t, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = a, e
}
let u = (0, r.getDefaultCountryCode)();

function d(e) {
  var t;
  let {
    countryCode: a
  } = e;
  null != a && (u = null !== (t = (0, r.getCountryCodeByAlpha2)(a)) && void 0 !== t ? t : (0, r.getDefaultCountryCode)())
}
class c extends(s = l.default.DeviceSettingsStore) {
  initialize(e) {
    null != e && (n = e.selectedCountryCode)
  }
  getUserAgnosticState() {
    return {
      selectedCountryCode: n
    }
  }
  getCountryCode() {
    return null != n ? n : u
  }
}
o(c, "displayName", "PhoneStore"), o(c, "persistKey", "PhoneStore"), t.default = new c(i.default, {
  PHONE_SET_COUNTRY_CODE: function(e) {
    let {
      countryCode: t
    } = e;
    n = t
  },
  CONNECTION_OPEN: d,
  SET_LOCATION_METADATA: d
})