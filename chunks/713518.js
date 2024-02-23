"use strict";
r.r(t), r.d(t, {
  fetchSubscriptionPlansOnNewPaymentSource: function() {
    return m
  },
  getCurrencies: function() {
    return p
  },
  planHasCurrency: function() {
    return E
  },
  useCurrencyWithPaymentSourceChange: function() {
    return S
  }
}), r("222007");
var a = r("884691"),
  n = r("627445"),
  u = r.n(n),
  s = r("913144"),
  i = r("775433"),
  l = r("308592"),
  o = r("10514"),
  c = r("719923"),
  d = r("49111"),
  f = r("646718");

function m(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [...f.ACTIVE_PREMIUM_SKUS];
  return null == e || o.default.hasPaymentSourceForSKUIds(e, t) ? Promise.resolve() : new Promise(e => {
    s.default.wait(async () => {
      await (0, i.fetchSubscriptionPlansBySKUs)(t), e()
    })
  })
}

function p(e, t, r) {
  let a, n = [],
    s = [],
    i = {
      purchaseType: r ? d.PriceSetAssignmentPurchaseTypes.GIFT : d.PriceSetAssignmentPurchaseTypes.DEFAULT
    };
  return u(a = "string" == typeof e ? o.default.get(e) : e, "subscription plan not loaded"), null != t && o.default.hasPaymentSourceForSKUId(t, a.skuId) && (i.paymentSourceId = t), (n = (s = (0, c.experimentalGetPrices)(a.id, i)).map(e => e.currency)).length < 1 && (n = [d.CurrencyCodes.USD]), n
}

function E(e, t, r) {
  let a = o.default.get(e);
  u(null != a, "plan is undefined");
  let n = p(a, r, !1);
  return n.includes(t)
}

function S(e, t, r, n, u) {
  let [s, i] = a.useReducer((e, t) => ({
    ...e,
    ...t
  }), null != r ? {
    paymentSourceId: r,
    currency: e,
    loaded: !1
  } : {
    currency: e,
    loaded: !1
  }), c = (0, l.useSubscriptionPlansLoaded)(u);
  a.useEffect(() => {
    let e = async () => {
      await m(r, u);
      let e = [];
      null != t && null != o.default.get(t) && (e = p(t, r, n)), e.length > 0 ? i({
        paymentSourceId: r,
        currency: e[0],
        loaded: !0
      }) : i({
        paymentSourceId: r,
        loaded: !1
      })
    };
    e()
  }, [r, JSON.stringify(u), t, n, c]);
  let d = s.paymentSourceId !== r || null == t || !c || !0 !== s.loaded;
  return {
    hasFetchedSubscriptionPlans: c,
    priceOptions: s,
    setCurrency: e => {
      i({
        currency: e
      })
    },
    currencyLoading: d
  }
}