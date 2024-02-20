"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
}), n("222007");
var r = n("884691"),
  u = n("65597"),
  a = n("875212"),
  i = n("21526"),
  l = n("853987"),
  s = n("775416");

function o() {
  var e;
  let t = "useFetchCollectiblesCategoriesAndPurchases";
  (0, a.useTriggerDebuggingAA)({
    location: t + " auto on",
    autoTrackExposure: !0
  }), (0, a.useTriggerDebuggingAA)({
    location: t + " auto off",
    autoTrackExposure: !1
  });
  let {
    isFetching: n,
    categories: o,
    error: c
  } = function() {
    let e = "useMaybeFetchCollectiblesCategories";
    (0, a.useTriggerDebuggingAA)({
      location: e + " auto on",
      autoTrackExposure: !0
    }), (0, a.useTriggerDebuggingAA)({
      location: e + " auto off",
      autoTrackExposure: !1
    });
    let [t, n, s, o] = (0, u.useStateFromStoresArray)([l.default], () => {
      var e;
      return [l.default.isFetching, l.default.error, null !== (e = l.default.lastFetched) && void 0 !== e ? e : 0, l.default.categories]
    });
    return (0, r.useEffect)(() => {
      !(t || n || Date.now() - s < 6e5) && (0, i.fetchCollectiblesCategories)()
    }, [t, s, n]), {
      isFetching: t,
      categories: o,
      error: n
    }
  }(), {
    isClaiming: f,
    fetchError: d,
    claimError: h,
    isFetching: C,
    purchases: p
  } = function() {
    let e = "useFetchPurchases";
    (0, a.useTriggerDebuggingAA)({
      location: e + " auto on",
      autoTrackExposure: !0
    }), (0, a.useTriggerDebuggingAA)({
      location: e + " auto off",
      autoTrackExposure: !1
    });
    let [t, n, l, o, c] = (0, u.useStateFromStoresArray)([s.default], () => [s.default.isFetching, s.default.isClaiming, s.default.fetchError, s.default.claimError, s.default.purchases]);
    return (0, r.useEffect)(() => {
      (0, i.fetchCollectiblesPurchases)()
    }, []), {
      isClaiming: n,
      fetchError: l,
      claimError: o,
      isFetching: t,
      purchases: c
    }
  }(), E = null !== (e = null != c ? c : d) && void 0 !== e ? e : h;
  return {
    isFetching: n || C,
    isFetchingCategories: n,
    isFetchingPurchases: C,
    isClaiming: f,
    categories: o,
    purchases: p,
    error: E
  }
}