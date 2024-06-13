"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  },
  useFetchPurchases: function() {
    return d
  }
}), n("47120");
var i = n("470079"),
  r = n("399606"),
  s = n("634894"),
  a = n("335131"),
  o = n("337679"),
  l = n("1870"),
  u = n("267097");

function d() {
  let e = "useFetchPurchases";
  (0, s.useTriggerDebuggingAA)({
    location: e + " auto on",
    autoTrackExposure: !0
  }), (0, s.useTriggerDebuggingAA)({
    location: e + " auto off",
    autoTrackExposure: !1
  });
  let [t, n, u, d, _] = (0, r.useStateFromStoresArray)([l.default], () => [l.default.isFetching, l.default.isClaiming, l.default.fetchError, l.default.claimError, l.default.purchases]), {
    shouldFakePurchaseSuccessFlowLocally: c
  } = (0, o.default)({
    location: "useFetchPurchases"
  });
  return (0, i.useEffect)(() => {
    (!c || !(_.size > 0)) && (0, a.fetchCollectiblesPurchases)()
  }, [c]), {
    isClaiming: n,
    fetchError: u,
    claimError: d,
    isFetching: t,
    purchases: _
  }
}

function _(e) {
  var t;
  let n = null == e ? void 0 : e.paymentGateway,
    i = "useFetchCollectiblesCategoriesAndPurchases";
  (0, s.useTriggerDebuggingAA)({
    location: i + " auto on",
    autoTrackExposure: !0
  }), (0, s.useTriggerDebuggingAA)({
    location: i + " auto off",
    autoTrackExposure: !1
  });
  let {
    isFetching: r,
    categories: a,
    error: o,
    refreshCategories: l
  } = (0, u.default)({
    paymentGateway: n
  }), {
    isClaiming: _,
    fetchError: c,
    claimError: E,
    isFetching: I,
    purchases: T
  } = d();
  return {
    isFetching: r || I,
    isFetchingCategories: r,
    isFetchingPurchases: I,
    isClaiming: _,
    categories: a,
    purchases: T,
    error: null !== (t = null != o ? o : c) && void 0 !== t ? t : E,
    refreshCategories: l
  }
}