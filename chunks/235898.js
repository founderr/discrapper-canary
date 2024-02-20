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

function d(e) {
  var t;
  let s = "useFetchCollectiblesCategoriesAndPurchases";
  (0, l.useTriggerDebuggingAA)({
    location: s + " auto on",
    autoTrackExposure: !0
  }), (0, l.useTriggerDebuggingAA)({
    location: s + " auto off",
    autoTrackExposure: !1
  });
  let {
    isFetching: d,
    categories: u,
    error: c
  } = function(e) {
    let t = "useMaybeFetchCollectiblesCategories";
    (0, l.useTriggerDebuggingAA)({
      location: t + " auto on",
      autoTrackExposure: !0
    }), (0, l.useTriggerDebuggingAA)({
      location: t + " auto off",
      autoTrackExposure: !1
    });
    let [s, o, d, u] = (0, n.useStateFromStoresArray)([r.default], () => {
      var e;
      return [r.default.isFetching, r.default.error, null !== (e = r.default.lastFetched) && void 0 !== e ? e : 0, r.default.categories]
    });
    return (0, a.useEffect)(() => {
      !(s || o || Date.now() - d < 6e5) && (0, i.fetchCollectiblesCategories)(e)
    }, [s, d, o, e]), {
      isFetching: s,
      categories: u,
      error: o
    }
  }(e), {
    isClaiming: S,
    fetchError: E,
    claimError: T,
    isFetching: f,
    purchases: m
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
  }(), _ = null !== (t = null != c ? c : E) && void 0 !== t ? t : T;
  return {
    isFetching: d || f,
    isFetchingCategories: d,
    isFetchingPurchases: f,
    isClaiming: S,
    categories: u,
    purchases: m,
    error: _
  }
}