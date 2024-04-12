"use strict";
n.r(t), n.d(t, {
  useMonetizationSettings: function() {
    return a
  },
  usePriceTiers: function() {
    return o
  }
});
var i = n("470079"),
  r = n("442837"),
  l = n("584825"),
  s = n("17079"),
  u = n("281320");

function o(e, t) {
  let n = (0, r.useStateFromStores)([u.default], () => u.default.getPriceTiersForGuildAndType(e, t)),
    l = (0, r.useStateFromStores)([u.default], () => u.default.getPriceTiersFetchStateForGuildAndType(e, t));
  return i.useEffect(() => {
    l === u.FetchState.NOT_FETCHED && (0, s.fetchPriceTiers)(e, t)
  }, [e, l, t]), {
    loading: l === u.FetchState.FETCHING,
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
  let s = (0, l.useSubscriptionsSettings)(e);
  return {
    loaded: null != s && !n,
    subscriptionsSettings: s,
    loading: n,
    error: r
  }
}