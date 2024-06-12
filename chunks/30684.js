"use strict";
n.r(t);
var s, a, l, i, r = n("442837"),
  o = n("570140"),
  u = n("853872");
let d = !1;
class c extends(i = r.default.Store) {
  isEligibleForNagbar() {
    var e;
    let t = null !== (e = u.default.paymentSources) && void 0 !== e ? e : {};
    return d && 0 !== Object.keys(t).length
  }
}
l = "CheckoutRecoveryStore", (a = "displayName") in(s = c) ? Object.defineProperty(s, a, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[a] = l, t.default = new c(o.default, {
  CHECKOUT_RECOVERY_STATUS_FETCH: function(e) {
    d = e.isEligibleForNagbar
  },
  PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: function() {
    d = !1
  }
})