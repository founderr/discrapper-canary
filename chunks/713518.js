"use strict";
n.r(t), n.d(t, {
  fetchSubscriptionPlansOnNewPaymentSource: function() {
    return E
  },
  getCurrencies: function() {
    return h
  },
  planHasCurrency: function() {
    return _
  },
  useCurrencyWithPaymentSourceChange: function() {
    return C
  }
}), n("222007");
var i = n("884691"),
  l = n("627445"),
  r = n.n(l),
  s = n("913144"),
  a = n("775433"),
  o = n("308592"),
  u = n("10514"),
  d = n("719923"),
  c = n("49111"),
  f = n("646718");

function E(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [...f.ACTIVE_PREMIUM_SKUS];
  return null == e || u.default.hasPaymentSourceForSKUIds(e, t) ? Promise.resolve() : new Promise(e => {
    s.default.wait(async () => {
      await (0, a.fetchSubscriptionPlansBySKUs)(t), e()
    })
  })
}

function h(e, t, n) {
  let i, l = [],
    s = [],
    a = {
      purchaseType: n ? c.PriceSetAssignmentPurchaseTypes.GIFT : c.PriceSetAssignmentPurchaseTypes.DEFAULT
    };
  return r(i = "string" == typeof e ? u.default.get(e) : e, "subscription plan not loaded"), null != t && u.default.hasPaymentSourceForSKUId(t, i.skuId) && (a.paymentSourceId = t), (l = (s = (0, d.experimentalGetPrices)(i.id, a)).map(e => e.currency)).length < 1 && (l = [c.CurrencyCodes.USD]), l
}

function _(e, t, n) {
  let i = u.default.get(e);
  r(null != i, "plan is undefined");
  let l = h(i, n, !1);
  return l.includes(t)
}

function C(e, t, n, l, r) {
  let [s, a] = i.useReducer((e, t) => ({
    ...e,
    ...t
  }), null != n ? {
    paymentSourceId: n,
    currency: e,
    loaded: !1
  } : {
    currency: e,
    loaded: !1
  }), d = (0, o.useSubscriptionPlansLoaded)(r);
  i.useEffect(() => {
    let e = async () => {
      await E(n, r);
      let e = [];
      null != t && null != u.default.get(t) && (e = h(t, n, l)), e.length > 0 ? a({
        paymentSourceId: n,
        currency: e[0],
        loaded: !0
      }) : a({
        paymentSourceId: n,
        loaded: !1
      })
    };
    e()
  }, [n, JSON.stringify(r), t, l, d]);
  let c = s.paymentSourceId !== n || null == t || !d || !0 !== s.loaded;
  return {
    hasFetchedSubscriptionPlans: d,
    priceOptions: s,
    setCurrency: e => {
      a({
        currency: e
      })
    },
    currencyLoading: c
  }
}