"use strict";
n.r(t), n.d(t, {
  fetchSubscriptionPlansOnNewPaymentSource: function() {
    return E
  },
  getCurrencies: function() {
    return _
  },
  planHasCurrency: function() {
    return T
  },
  useCurrencyWithPaymentSourceChange: function() {
    return S
  }
}), n("222007");
var u = n("884691"),
  r = n("627445"),
  a = n.n(r),
  i = n("913144"),
  o = n("775433"),
  l = n("308592"),
  s = n("10514"),
  c = n("719923"),
  d = n("49111"),
  f = n("646718");

function E(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [...f.ACTIVE_PREMIUM_SKUS];
  return null == e || s.default.hasPaymentSourceForSKUIds(e, t) ? Promise.resolve() : new Promise(e => {
    i.default.wait(async () => {
      await (0, o.fetchSubscriptionPlansBySKUs)(t), e()
    })
  })
}

function _(e, t, n) {
  let u, r = [],
    i = [],
    o = {
      purchaseType: n ? d.PriceSetAssignmentPurchaseTypes.GIFT : d.PriceSetAssignmentPurchaseTypes.DEFAULT
    };
  return a(u = "string" == typeof e ? s.default.get(e) : e, "subscription plan not loaded"), null != t && s.default.hasPaymentSourceForSKUId(t, u.skuId) && (o.paymentSourceId = t), (r = (i = (0, c.experimentalGetPrices)(u.id, o)).map(e => e.currency)).length < 1 && (r = [d.CurrencyCodes.USD]), r
}

function T(e, t, n) {
  let u = s.default.get(e);
  a(null != u, "plan is undefined");
  let r = _(u, n, !1);
  return r.includes(t)
}

function S(e, t, n, r, a) {
  let [i, o] = u.useReducer((e, t) => ({
    ...e,
    ...t
  }), null != n ? {
    paymentSourceId: n,
    currency: e,
    loaded: !1
  } : {
    currency: e,
    loaded: !1
  }), c = (0, l.useSubscriptionPlansLoaded)(a);
  u.useEffect(() => {
    let e = async () => {
      await E(n, a);
      let e = [];
      null != t && null != s.default.get(t) && (e = _(t, n, r)), e.length > 0 ? o({
        paymentSourceId: n,
        currency: e[0],
        loaded: !0
      }) : o({
        paymentSourceId: n,
        loaded: !1
      })
    };
    e()
  }, [n, JSON.stringify(a), t, r, c]);
  let d = i.paymentSourceId !== n || null == t || !c || !0 !== i.loaded;
  return {
    hasFetchedSubscriptionPlans: c,
    priceOptions: i,
    setCurrency: e => {
      o({
        currency: e
      })
    },
    currencyLoading: d
  }
}