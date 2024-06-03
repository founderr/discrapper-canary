"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  },
  useFetchPurchases: function() {
    return T
  },
  useMaybeFetchCollectiblesCategories: function() {
    return I
  }
}), n("47120");
var i = n("470079"),
  r = n("498607"),
  s = n.n(r),
  a = n("399606"),
  o = n("634894"),
  l = n("828695"),
  u = n("335131"),
  d = n("597688"),
  _ = n("337679"),
  c = n("1870"),
  E = n("617452");

function I(e) {
  let t = "useMaybeFetchCollectiblesCategories";
  (0, o.useTriggerDebuggingAA)({
    location: t + " auto on",
    autoTrackExposure: !0
  }), (0, o.useTriggerDebuggingAA)({
    location: t + " auto off",
    autoTrackExposure: !1
  });
  let n = (0, a.useStateFromStores)([l.default], () => l.default.hasLoadedExperiments),
    r = (0, E.useShopBundleEnabled)("useMaybeFetchCollectiblesCategories"),
    [_, c, I, T, f] = (0, a.useStateFromStoresArray)([d.default], () => {
      var e;
      return [d.default.isFetchingCategories, d.default.lastFetchOptions, d.default.error, null !== (e = d.default.lastSuccessFetched) && void 0 !== e ? e : 0, d.default.categories]
    });
  return (0, i.useEffect)(() => {
    let t = {
        ...e,
        includeBundles: r
      },
      i = null === c || !s()(c, t);
    if (!!n && !_) !(!i && Date.now() - T < 6e5) && (0, u.fetchCollectiblesCategories)(t)
  }, [n, _, c, T, e, r]), {
    isFetching: _,
    categories: f,
    error: I
  }
}

function T() {
  let e = "useFetchPurchases";
  (0, o.useTriggerDebuggingAA)({
    location: e + " auto on",
    autoTrackExposure: !0
  }), (0, o.useTriggerDebuggingAA)({
    location: e + " auto off",
    autoTrackExposure: !1
  });
  let [t, n, r, s, l] = (0, a.useStateFromStoresArray)([c.default], () => [c.default.isFetching, c.default.isClaiming, c.default.fetchError, c.default.claimError, c.default.purchases]), {
    shouldFakePurchaseSuccessFlowLocally: d
  } = (0, _.default)({
    location: "useFetchPurchases"
  });
  return (0, i.useEffect)(() => {
    (!d || !(l.size > 0)) && (0, u.fetchCollectiblesPurchases)()
  }, [d]), {
    isClaiming: n,
    fetchError: r,
    claimError: s,
    isFetching: t,
    purchases: l
  }
}

function f(e) {
  var t;
  let n = "useFetchCollectiblesCategoriesAndPurchases";
  (0, o.useTriggerDebuggingAA)({
    location: n + " auto on",
    autoTrackExposure: !0
  }), (0, o.useTriggerDebuggingAA)({
    location: n + " auto off",
    autoTrackExposure: !1
  });
  let {
    isFetching: i,
    categories: r,
    error: s
  } = I(e), {
    isClaiming: a,
    fetchError: l,
    claimError: u,
    isFetching: d,
    purchases: _
  } = T();
  return {
    isFetching: i || d,
    isFetchingCategories: i,
    isFetchingPurchases: d,
    isClaiming: a,
    categories: r,
    purchases: _,
    error: null !== (t = null != s ? s : l) && void 0 !== t ? t : u
  }
}