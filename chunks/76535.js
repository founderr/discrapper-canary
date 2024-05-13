"use strict";
n.r(t), n.d(t, {
  useMonetizationSettings: function() {
    return a
  },
  usePriceTiers: function() {
    return o
  }
});
var r = n("470079"),
  i = n("442837"),
  s = n("584825"),
  l = n("17079"),
  u = n("281320");

function o(e, t) {
  let n = (0, i.useStateFromStores)([u.default], () => u.default.getPriceTiersForGuildAndType(e, t)),
    s = (0, i.useStateFromStores)([u.default], () => u.default.getPriceTiersFetchStateForGuildAndType(e, t));
  return r.useEffect(() => {
    s === u.FetchState.NOT_FETCHED && (0, l.fetchPriceTiers)(e, t)
  }, [e, s, t]), {
    loading: s === u.FetchState.FETCHING,
    priceTiers: n
  }
}

function a(e) {
  let {
    fetchSubscriptionsSettings: t,
    loading: n,
    error: i
  } = (0, s.useFetchSubscriptionsSettings)();
  r.useEffect(() => {
    t(e)
  }, [t, e]);
  let l = (0, s.useSubscriptionsSettings)(e);
  return {
    loaded: null != l && !n,
    subscriptionsSettings: l,
    loading: n,
    error: i
  }
}