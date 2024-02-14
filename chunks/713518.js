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
var n = r("884691"),
  a = r("627445"),
  u = r.n(a),
  i = r("913144"),
  s = r("775433"),
  l = r("308592"),
  o = r("10514"),
  c = r("719923"),
  d = r("49111"),
  f = r("646718");

function m(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [...f.ACTIVE_PREMIUM_SKUS];
  return null == e || o.default.hasPaymentSourceForSKUIds(e, t) ? Promise.resolve() : new Promise(e => {
    i.default.wait(async () => {
      await (0, s.fetchSubscriptionPlansBySKUs)(t), e()
    })
  })
}

function p(e, t, r) {
  let n, a = [],
    i = [],
    s = {
      purchaseType: r ? d.PriceSetAssignmentPurchaseTypes.GIFT : d.PriceSetAssignmentPurchaseTypes.DEFAULT
    };
  return u(n = "string" == typeof e ? o.default.get(e) : e, "subscription plan not loaded"), null != t && o.default.hasPaymentSourceForSKUId(t, n.skuId) && (s.paymentSourceId = t), (a = (i = (0, c.experimentalGetPrices)(n.id, s)).map(e => e.currency)).length < 1 && (a = [d.CurrencyCodes.USD]), a
}

function E(e, t, r) {
  let n = o.default.get(e);
  u(null != n, "plan is undefined");
  let a = p(n, r, !1);
  return a.includes(t)
}

function S(e, t, r, a, u) {
  let [i, s] = n.useReducer((e, t) => ({
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
  n.useEffect(() => {
    let e = async () => {
      await m(r, u);
      let e = [];
      null != t && null != o.default.get(t) && (e = p(t, r, a)), e.length > 0 ? s({
        paymentSourceId: r,
        currency: e[0],
        loaded: !0
      }) : s({
        paymentSourceId: r,
        loaded: !1
      })
    };
    e()
  }, [r, JSON.stringify(u), t, a, c]);
  let d = i.paymentSourceId !== r || null == t || !c || !0 !== i.loaded;
  return {
    hasFetchedSubscriptionPlans: c,
    priceOptions: i,
    setCurrency: e => {
      s({
        currency: e
      })
    },
    currencyLoading: d
  }
}