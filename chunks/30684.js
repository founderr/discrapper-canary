var i, a, s, l, r = n(442837),
  o = n(570140),
  c = n(853872);
let d = !1;
class u extends(l = r.ZP.Store) {
  isEligibleForNagbar() {
    var e;
    let t = null !== (e = c.Z.paymentSources) && void 0 !== e ? e : {};
    return d && 0 !== Object.keys(t).length
  }
}
s = "CheckoutRecoveryStore", (a = "displayName") in(i = u) ? Object.defineProperty(i, a, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[a] = s, t.Z = new u(o.Z, {
  CHECKOUT_RECOVERY_STATUS_FETCH: function(e) {
    d = e.isEligibleForNagbar
  },
  PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: function() {
    d = !1
  }
})