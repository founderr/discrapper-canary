"use strict";
n.r(t), n("411104");
var i, l, o, a, u = n("442837"),
  s = n("570140");
let d = null;
class r extends(i = u.default.Store) {
  getCurrentPath() {
    return null != d ? d.pathname : null
  }
  getCurrentRoute() {
    return function(e) {
      let t = null != e && null != e.search ? e.search : "";
      return null != e ? "".concat(e.pathname).concat(t) : null
    }(d)
  }
  reset() {
    throw Error("Should not reset the store this way outside of a test environment")
  }
}
a = "ApplicationStoreLocationStore", (o = "displayName") in(l = r) ? Object.defineProperty(l, o, {
  value: a,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : l[o] = a, t.default = new r(s.default, {
  APPLICATION_STORE_LOCATION_CHANGE: function(e) {
    let {
      location: t
    } = e;
    d = {
      ...t
    }
  },
  APPLICATION_STORE_RESET_NAVIGATION: function() {
    d = null
  }
})