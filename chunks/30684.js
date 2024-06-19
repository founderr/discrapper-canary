var s, i, l, a, r = n(442837),
  o = n(570140),
  c = n(853872);
let u = !1;
class d extends(a = r.ZP.Store) {
  isEligibleForNagbar() {
    var e;
    let t = null !== (e = c.Z.paymentSources) && void 0 !== e ? e : {};
    return u && 0 !== Object.keys(t).length
  }
}
l = "CheckoutRecoveryStore", (i = "displayName") in(s = d) ? Object.defineProperty(s, i, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[i] = l, t.Z = new d(o.Z, {
  CHECKOUT_RECOVERY_STATUS_FETCH: function(e) {
    u = e.isEligibleForNagbar
  },
  PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: function() {
    u = !1
  }
})