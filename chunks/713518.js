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
  r = n("627445"),
  l = n.n(r),
  s = n("913144"),
  a = n("775433"),
  o = n("308592"),
  u = n("10514"),
  c = n("719923"),
  d = n("49111"),
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
  let i, r = [],
    s = [],
    a = {
      purchaseType: n ? d.PriceSetAssignmentPurchaseTypes.GIFT : d.PriceSetAssignmentPurchaseTypes.DEFAULT
    };
  return l(i = "string" == typeof e ? u.default.get(e) : e, "subscription plan not loaded"), null != t && u.default.hasPaymentSourceForSKUId(t, i.skuId) && (a.paymentSourceId = t), (r = (s = (0, c.experimentalGetPrices)(i.id, a)).map(e => e.currency)).length < 1 && (r = [d.CurrencyCodes.USD]), r
}

function _(e, t, n) {
  let i = u.default.get(e);
  l(null != i, "plan is undefined");
  let r = h(i, n, !1);
  return r.includes(t)
}

function C(e, t, n, r, l) {
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
  }), c = (0, o.useSubscriptionPlansLoaded)(l);
  i.useEffect(() => {
    let e = async () => {
      await E(n, l);
      let e = [];
      null != t && null != u.default.get(t) && (e = h(t, n, r)), e.length > 0 ? a({
        paymentSourceId: n,
        currency: e[0],
        loaded: !0
      }) : a({
        paymentSourceId: n,
        loaded: !1
      })
    };
    e()
  }, [n, JSON.stringify(l), t, r, c]);
  let d = s.paymentSourceId !== n || null == t || !c || !0 !== s.loaded;
  return {
    hasFetchedSubscriptionPlans: c,
    priceOptions: s,
    setCurrency: e => {
      a({
        currency: e
      })
    },
    currencyLoading: d
  }
}