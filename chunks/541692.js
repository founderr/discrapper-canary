"use strict";
let a;
n.r(t);
var s, i = n("442837"),
  l = n("570140"),
  r = n("133080");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let u = (0, r.getDefaultCountryCode)();

function d(e) {
  var t;
  let {
    countryCode: n
  } = e;
  null != n && (u = null !== (t = (0, r.getCountryCodeByAlpha2)(n)) && void 0 !== t ? t : (0, r.getDefaultCountryCode)())
}
class c extends(s = i.default.DeviceSettingsStore) {
  initialize(e) {
    null != e && (a = e.selectedCountryCode)
  }
  getUserAgnosticState() {
    return {
      selectedCountryCode: a
    }
  }
  getCountryCode() {
    return null != a ? a : u
  }
}
o(c, "displayName", "PhoneStore"), o(c, "persistKey", "PhoneStore"), t.default = new c(l.default, {
  PHONE_SET_COUNTRY_CODE: function(e) {
    let {
      countryCode: t
    } = e;
    a = t
  },
  CONNECTION_OPEN: d,
  SET_LOCATION_METADATA: d
})