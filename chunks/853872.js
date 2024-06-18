"use strict";
n(47120);
var i, r, s, o, a = n(442837),
  l = n(570140),
  u = n(46141);
let _ = {},
  c = null,
  d = !1;

function E(e) {
  let {
    paymentSource: t
  } = e;
  _ = {
    ..._,
    [t.id]: t
  }, (t.isDefault || 1 === Object.keys(_).length) && (c = t.id)
}
class I extends(i = a.ZP.Store) {
  get paymentSources() {
    return _
  }
  get paymentSourceIds() {
    return Object.keys(_)
  }
  get defaultPaymentSourceId() {
    return c
  }
  get defaultPaymentSource() {
    return null != c ? _[c] : null
  }
  get hasFetchedPaymentSources() {
    return d
  }
  getDefaultBillingCountryCode() {
    let e = this.defaultPaymentSource;
    return null == e ? null : e.paymentMethodCountry
  }
  getPaymentSource(e) {
    return _[e]
  }
}
o = "PaymentSourceStore", (s = "displayName") in(r = I) ? Object.defineProperty(r, s, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[s] = o, t.Z = new I(l.Z, {
  BILLING_PAYMENT_SOURCE_CREATE_SUCCESS: E,
  BILLING_PAYMENT_SOURCE_UPDATE_SUCCESS: E,
  BILLING_PAYMENT_SOURCES_FETCH_SUCCESS: function(e) {
    let {
      paymentSources: t
    } = e;
    for (let e of (_ = {}, c = null, t)) _[e.id] = u.ZP.createFromServer(e), e.default && (c = e.id);
    null == c && t.length > 0 && (c = t[0].id), d = !0
  },
  BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS: function(e) {
    let {
      id: t
    } = e;
    if (_ = {
        ..._
      }, delete _[t], c === t) {
      let e = Object.keys(_);
      c = 0 === e.length ? null : e[0]
    }
  },
  LOGOUT: function() {
    _ = {}, c = null, d = !1
  }
})