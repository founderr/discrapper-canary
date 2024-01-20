"use strict";
n.r(t), n.d(t, {
  fetchSubscriptionPlansOnNewPaymentSource: function() {
    return E
  },
  getCurrencies: function() {
    return _
  },
  planHasCurrency: function() {
    return S
  },
  useCurrencyWithPaymentSourceChange: function() {
    return T
  }
}), n("222007");
var i = n("884691"),
  r = n("627445"),
  u = n.n(r),
  o = n("913144"),
  l = n("775433"),
  a = n("308592"),
  s = n("10514"),
  c = n("719923"),
  d = n("49111"),
  f = n("646718");

function E(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [...f.ACTIVE_PREMIUM_SKUS];
  return null == e || s.default.hasPaymentSourceForSKUIds(e, t) ? Promise.resolve() : new Promise(e => {
    o.default.wait(async () => {
      await (0, l.fetchSubscriptionPlansBySKUs)(t), e()
    })
  })
}

function _(e, t, n) {
  let i, r = [],
    o = [],
    l = {
      purchaseType: n ? d.PriceSetAssignmentPurchaseTypes.GIFT : d.PriceSetAssignmentPurchaseTypes.DEFAULT
    };
  return u(i = "string" == typeof e ? s.default.get(e) : e, "subscription plan not loaded"), null != t && s.default.hasPaymentSourceForSKUId(t, i.skuId) && (l.paymentSourceId = t), (r = (o = (0, c.experimentalGetPrices)(i.id, l)).map(e => e.currency)).length < 1 && (r = [d.CurrencyCodes.USD]), r
}

function S(e, t, n) {
  let i = s.default.get(e);
  u(null != i, "plan is undefined");
  let r = _(i, n, !1);
  return r.includes(t)
}

function T(e, t, n, r, u) {
  let [o, l] = i.useReducer((e, t) => ({
    ...e,
    ...t
  }), null != n ? {
    paymentSourceId: n,
    currency: e,
    loaded: !1
  } : {
    currency: e,
    loaded: !1
  }), c = (0, a.useSubscriptionPlansLoaded)(u);
  i.useEffect(() => {
    let e = async () => {
      await E(n, u);
      let e = [];
      null != t && null != s.default.get(t) && (e = _(t, n, r)), e.length > 0 ? l({
        paymentSourceId: n,
        currency: e[0],
        loaded: !0
      }) : l({
        paymentSourceId: n,
        loaded: !1
      })
    };
    e()
  }, [n, JSON.stringify(u), t, r, c]);
  let d = o.paymentSourceId !== n || null == t || !c || !0 !== o.loaded;
  return {
    hasFetchedSubscriptionPlans: c,
    priceOptions: o,
    setCurrency: e => {
      l({
        currency: e
      })
    },
    currencyLoading: d
  }
}