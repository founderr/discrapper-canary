"use strict";
n.r(t), n.d(t, {
  BrowserCheckoutState: function() {
    return a
  }
});
var r, u, i, l, a, o, s = n("442837"),
  E = n("570140");
(r = a || (a = {}))[r.UNKNOWN = 0] = "UNKNOWN", r[r.PENDING = 1] = "PENDING", r[r.DONE = 2] = "DONE";
let S = 0,
  _ = null;
class d extends(o = s.default.Store) {
  get browserCheckoutState() {
    return S
  }
  get loadId() {
    return _
  }
}
l = "BrowserCheckoutStateStore", (i = "displayName") in(u = d) ? Object.defineProperty(u, i, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : u[i] = l, t.default = new d(E.default, {
  USER_PAYMENT_BROWSER_CHECKOUT_STARTED: function(e) {
    S = 1, _ = e.loadId
  },
  USER_PAYMENT_BROWSER_CHECKOUT_DONE: function(e) {
    _ === e.loadId && (S = 2)
  }
})