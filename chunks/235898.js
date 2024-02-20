"use strict";
s.r(t), s.d(t, {
  default: function() {
    return d
  }
}), s("222007");
var a = s("884691"),
  n = s("65597"),
  l = s("875212"),
  i = s("21526"),
  r = s("853987"),
  o = s("775416");

function d() {
  var e;
  let t = "useFetchCollectiblesCategoriesAndPurchases";
  (0, l.useTriggerDebuggingAA)({
    location: t + " auto on",
    autoTrackExposure: !0
  }), (0, l.useTriggerDebuggingAA)({
    location: t + " auto off",
    autoTrackExposure: !1
  });
  let {
    isFetching: s,
    categories: d,
    error: u
  } = function() {
    let e = "useMaybeFetchCollectiblesCategories";
    (0, l.useTriggerDebuggingAA)({
      location: e + " auto on",
      autoTrackExposure: !0
    }), (0, l.useTriggerDebuggingAA)({
      location: e + " auto off",
      autoTrackExposure: !1
    });
    let [t, s, o, d] = (0, n.useStateFromStoresArray)([r.default], () => {
      var e;
      return [r.default.isFetching, r.default.error, null !== (e = r.default.lastFetched) && void 0 !== e ? e : 0, r.default.categories]
    });
    return (0, a.useEffect)(() => {
      !(t || s || Date.now() - o < 6e5) && (0, i.fetchCollectiblesCategories)()
    }, [t, o, s]), {
      isFetching: t,
      categories: d,
      error: s
    }
  }(), {
    isClaiming: c,
    fetchError: S,
    claimError: E,
    isFetching: T,
    purchases: f
  } = function() {
    let e = "useFetchPurchases";
    (0, l.useTriggerDebuggingAA)({
      location: e + " auto on",
      autoTrackExposure: !0
    }), (0, l.useTriggerDebuggingAA)({
      location: e + " auto off",
      autoTrackExposure: !1
    });
    let [t, s, r, d, u] = (0, n.useStateFromStoresArray)([o.default], () => [o.default.isFetching, o.default.isClaiming, o.default.fetchError, o.default.claimError, o.default.purchases]);
    return (0, a.useEffect)(() => {
      (0, i.fetchCollectiblesPurchases)()
    }, []), {
      isClaiming: s,
      fetchError: r,
      claimError: d,
      isFetching: t,
      purchases: u
    }
  }(), m = null !== (e = null != u ? u : S) && void 0 !== e ? e : E;
  return {
    isFetching: s || T,
    isFetchingCategories: s,
    isFetchingPurchases: T,
    isClaiming: c,
    categories: d,
    purchases: f,
    error: m
  }
}