"use strict";
a.r(t);
var n, s, r, l, o = a("442837"),
  i = a("570140");
let u = null,
  c = null;
class d extends(l = o.default.Store) {
  get client() {
    return u
  }
  get cashAppPayComponent() {
    return c
  }
}
r = "AdyenStore", (s = "displayName") in(n = d) ? Object.defineProperty(n, s, {
  value: r,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : n[s] = r;
let p = new d(i.default, {
  ADYEN_CREATE_CLIENT_SUCCESS: function(e) {
    let {
      client: t
    } = e;
    u = t
  },
  ADYEN_TEARDOWN_CLIENT: function() {
    u = null
  },
  ADYEN_CREATE_CASH_APP_PAY_COMPONENT_SUCCESS: function(e) {
    let {
      component: t
    } = e;
    c = t
  }
});
t.default = p