"use strict";
n.r(t), n.d(t, {
  BrowserCheckoutState: function() {
    return l
  }
});
var r, u, i, a, l, o, s = n("442837"),
  E = n("570140");
(r = l || (l = {}))[r.UNKNOWN = 0] = "UNKNOWN", r[r.PENDING = 1] = "PENDING", r[r.DONE = 2] = "DONE";
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
a = "BrowserCheckoutStateStore", (i = "displayName") in(u = d) ? Object.defineProperty(u, i, {
  value: a,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : u[i] = a, t.default = new d(E.default, {
  USER_PAYMENT_BROWSER_CHECKOUT_STARTED: function(e) {
    S = 1, _ = e.loadId
  },
  USER_PAYMENT_BROWSER_CHECKOUT_DONE: function(e) {
    _ === e.loadId && (S = 2)
  }
})