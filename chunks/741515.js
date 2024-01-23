"use strict";
n.r(t), n.d(t, {
  usePriceTiers: function() {
    return o
  },
  useMonetizationSettings: function() {
    return a
  }
});
var i = n("884691"),
  r = n("446674"),
  l = n("837008"),
  u = n("763913"),
  s = n("670535");

function o(e, t) {
  let n = (0, r.useStateFromStores)([s.default], () => s.default.getPriceTiersForGuildAndType(e, t)),
    l = (0, r.useStateFromStores)([s.default], () => s.default.getPriceTiersFetchStateForGuildAndType(e, t));
  return i.useEffect(() => {
    l === s.FetchState.NOT_FETCHED && (0, u.fetchPriceTiers)(e, t)
  }, [e, l, t]), {
    loading: l === s.FetchState.FETCHING,
    priceTiers: n
  }
}

function a(e) {
  let {
    fetchSubscriptionsSettings: t,
    loading: n,
    error: r
  } = (0, l.useFetchSubscriptionsSettings)();
  i.useEffect(() => {
    t(e)
  }, [t, e]);
  let u = (0, l.useSubscriptionsSettings)(e);
  return {
    loaded: null != u && !n,
    subscriptionsSettings: u,
    loading: n,
    error: r
  }
}