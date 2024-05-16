"use strict";
n.r(t), n.d(t, {
  default: function() {
    return l
  }
}), n("47120");
var r = n("442837"),
  u = n("176919"),
  i = n("975060"),
  a = n("505649");

function l() {
  let e = (0, r.useStateFromStores)([i.default], () => i.default.error),
    [t, n] = (0, r.useStateFromStoresArray)([a.default], () => [a.default.error, a.default.isAwaitingAuthentication]);
  return {
    paymentError: null != t ? t : e,
    paymentAuthenticationState: n ? u.PaymentAuthenticationState.PENDING : null != t ? u.PaymentAuthenticationState.ERROR : u.PaymentAuthenticationState.NONE
  }
}