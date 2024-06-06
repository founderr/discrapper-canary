"use strict";
n.r(t), n.d(t, {
  default: function() {
    return I
  },
  useFetchPurchases: function() {
    return E
  },
  useMaybeFetchCollectiblesCategories: function() {
    return c
  }
}), n("47120");
var i = n("470079"),
  r = n("399606"),
  s = n("634894"),
  a = n("353926"),
  o = n("335131"),
  l = n("597688"),
  u = n("337679"),
  d = n("1870"),
  _ = n("617452");

function c(e) {
  let t = "useMaybeFetchCollectiblesCategories";
  (0, s.useTriggerDebuggingAA)({
    location: t + " auto on",
    autoTrackExposure: !0
  }), (0, s.useTriggerDebuggingAA)({
    location: t + " auto off",
    autoTrackExposure: !1
  });
  let n = (0, r.useStateFromStores)([a.default], () => a.default.hasLoadedExperiments),
    u = (0, _.useShopBundleEnabled)("useMaybeFetchCollectiblesCategories"),
    [d, c, E, I, T] = (0, r.useStateFromStoresArray)([l.default], () => {
      var e;
      return [l.default.isFetchingCategories, l.default.lastFetchOptions, l.default.error, null !== (e = l.default.lastSuccessfulFetch) && void 0 !== e ? e : 0, l.default.categories]
    });
  return (0, i.useEffect)(() => {
    if (!n || d || E) return;
    let t = {
        ...e,
        includeBundles: u
      },
      i = !(0, o.areRequestOptionsEqual)(c, t),
      r = Date.now() - I < 6e5;
    (i || !r) && (0, o.fetchCollectiblesCategories)(t)
  }, [n, d, c, I, e, E, u]), {
    isFetching: d,
    categories: T,
    error: E
  }
}

function E() {
  let e = "useFetchPurchases";
  (0, s.useTriggerDebuggingAA)({
    location: e + " auto on",
    autoTrackExposure: !0
  }), (0, s.useTriggerDebuggingAA)({
    location: e + " auto off",
    autoTrackExposure: !1
  });
  let [t, n, a, l, _] = (0, r.useStateFromStoresArray)([d.default], () => [d.default.isFetching, d.default.isClaiming, d.default.fetchError, d.default.claimError, d.default.purchases]), {
    shouldFakePurchaseSuccessFlowLocally: c
  } = (0, u.default)({
    location: "useFetchPurchases"
  });
  return (0, i.useEffect)(() => {
    (!c || !(_.size > 0)) && (0, o.fetchCollectiblesPurchases)()
  }, [c]), {
    isClaiming: n,
    fetchError: a,
    claimError: l,
    isFetching: t,
    purchases: _
  }
}

function I(e) {
  var t;
  let n = "useFetchCollectiblesCategoriesAndPurchases";
  (0, s.useTriggerDebuggingAA)({
    location: n + " auto on",
    autoTrackExposure: !0
  }), (0, s.useTriggerDebuggingAA)({
    location: n + " auto off",
    autoTrackExposure: !1
  });
  let {
    isFetching: i,
    categories: r,
    error: a
  } = c(e), {
    isClaiming: o,
    fetchError: l,
    claimError: u,
    isFetching: d,
    purchases: _
  } = E();
  return {
    isFetching: i || d,
    isFetchingCategories: i,
    isFetchingPurchases: d,
    isClaiming: o,
    categories: r,
    purchases: _,
    error: null !== (t = null != a ? a : l) && void 0 !== t ? t : u
  }
}