"use strict";
n.r(t), n.d(t, {
  fetchSubscriptionPlansOnNewPaymentSource: function() {
    return h
  },
  getCurrencies: function() {
    return p
  },
  planHasCurrency: function() {
    return C
  },
  useCurrencyWithPaymentSourceChange: function() {
    return E
  }
}), n("222007");
var u = n("884691"),
  r = n("627445"),
  i = n.n(r),
  a = n("913144"),
  l = n("775433"),
  s = n("308592"),
  o = n("10514"),
  c = n("719923"),
  d = n("49111"),
  f = n("646718");

function h(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [...f.ACTIVE_PREMIUM_SKUS];
  return null == e || o.default.hasPaymentSourceForSKUIds(e, t) ? Promise.resolve() : new Promise(e => {
    a.default.wait(async () => {
      await (0, l.fetchSubscriptionPlansBySKUs)(t), e()
    })
  })
}

function p(e, t, n) {
  let u, r = [],
    a = [],
    l = {
      purchaseType: n ? d.PriceSetAssignmentPurchaseTypes.GIFT : d.PriceSetAssignmentPurchaseTypes.DEFAULT
    };
  return i(u = "string" == typeof e ? o.default.get(e) : e, "subscription plan not loaded"), null != t && o.default.hasPaymentSourceForSKUId(t, u.skuId) && (l.paymentSourceId = t), (r = (a = (0, c.experimentalGetPrices)(u.id, l)).map(e => e.currency)).length < 1 && (r = [d.CurrencyCodes.USD]), r
}

function C(e, t, n) {
  let u = o.default.get(e);
  i(null != u, "plan is undefined");
  let r = p(u, n, !1);
  return r.includes(t)
}

function E(e, t, n, r, i) {
  let [a, l] = u.useReducer((e, t) => ({
    ...e,
    ...t
  }), null != n ? {
    paymentSourceId: n,
    currency: e,
    loaded: !1
  } : {
    currency: e,
    loaded: !1
  }), c = (0, s.useSubscriptionPlansLoaded)(i);
  u.useEffect(() => {
    let e = async () => {
      await h(n, i);
      let e = [];
      null != t && null != o.default.get(t) && (e = p(t, n, r)), e.length > 0 ? l({
        paymentSourceId: n,
        currency: e[0],
        loaded: !0
      }) : l({
        paymentSourceId: n,
        loaded: !1
      })
    };
    e()
  }, [n, JSON.stringify(i), t, r, c]);
  let d = a.paymentSourceId !== n || null == t || !c || !0 !== a.loaded;
  return {
    hasFetchedSubscriptionPlans: c,
    priceOptions: a,
    setCurrency: e => {
      l({
        currency: e
      })
    },
    currencyLoading: d
  }
}