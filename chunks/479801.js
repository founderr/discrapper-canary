"use strict";
n.r(t), n.d(t, {
  useMaybeFetchCollectiblesCategoriesShared: function() {
    return d
  }
}), n("47120");
var i = n("470079"),
  r = n("442837"),
  s = n("634894"),
  a = n("353926"),
  o = n("335131"),
  l = n("597688"),
  u = n("617452");

function d(e) {
  let t = "useMaybeFetchCollectiblesCategories";
  (0, s.useTriggerDebuggingAA)({
    location: t + " auto on",
    autoTrackExposure: !0
  }), (0, s.useTriggerDebuggingAA)({
    location: t + " auto off",
    autoTrackExposure: !1
  });
  let n = (0, r.useStateFromStores)([a.default], () => a.default.hasLoadedExperiments),
    d = (0, u.useShopBundleEnabled)("useMaybeFetchCollectiblesCategories"),
    [_, c, E, I, T] = (0, r.useStateFromStoresArray)([l.default], () => {
      var e;
      return [l.default.isFetchingCategories, l.default.lastFetchOptions, l.default.error, null !== (e = l.default.lastSuccessfulFetch) && void 0 !== e ? e : 0, l.default.categories]
    });
  return (0, i.useEffect)(() => {
    if (!n || _ || E) return;
    let t = {
        ...e,
        includeBundles: d
      },
      i = !(0, o.areRequestOptionsEqual)(c, t),
      r = Date.now() - I < 6e5;
    (i || !r) && (0, o.fetchCollectiblesCategories)(t)
  }, [n, _, c, I, e, E, d]), {
    isFetching: _,
    categories: T,
    error: E,
    refreshCategories: (0, i.useCallback)(() => {
      let t = {
        ...e,
        includeBundles: d
      };
      (0, o.fetchCollectiblesCategories)(t)
    }, [e, d])
  }
}