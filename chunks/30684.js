"use strict";
n.r(t);
var s, a = n("442837"),
  l = n("570140"),
  i = n("853872");

function r(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let o = {
    isEligibleForNagbar: !1
  },
  u = o;
class d extends(s = a.default.PersistedStore) {
  initialize() {
    u = o
  }
  getState() {
    return u
  }
  isEligibleForNagbar() {
    return u.isEligibleForNagbar
  }
}
r(d, "displayName", "CheckoutRecoveryStore"), r(d, "persistKey", "CheckoutRecoveryStore"), t.default = new d(l.default, {
  CHECKOUT_RECOVERY_STATUS_FETCH: function(e) {
    let {
      isEligibleForNagbar: t
    } = e;
    u.isEligibleForNagbar = t
  },
  BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS: function() {
    var e;
    let t = null !== (e = i.default.paymentSources) && void 0 !== e ? e : {};
    u.isEligibleForNagbar = u.isEligibleForNagbar && 0 !== Object.keys(t).length
  }
})