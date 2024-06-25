let s;
var r, i = n(442837),
  a = n(570140),
  o = n(133080);

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let c = (0, o.K4)();

function u(e) {
  var t;
  let {
    countryCode: n
  } = e;
  if (null != n) c = null !== (t = (0, o.Zz)(n)) && void 0 !== t ? t : (0, o.K4)()
}
class d extends(r = i.ZP.DeviceSettingsStore) {
  initialize(e) {
    if (null != e) s = e.selectedCountryCode
  }
  getUserAgnosticState() {
    return {
      selectedCountryCode: s
    }
  }
  getCountryCode() {
    return null != s ? s : c
  }
}
l(d, "displayName", "PhoneStore"), l(d, "persistKey", "PhoneStore"), t.Z = new d(a.Z, {
  PHONE_SET_COUNTRY_CODE: function(e) {
    let {
      countryCode: t
    } = e;
    s = t
  },
  CONNECTION_OPEN: u,
  SET_LOCATION_METADATA: u
})