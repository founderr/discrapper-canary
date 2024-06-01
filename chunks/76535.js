"use strict";
n.r(t), n.d(t, {
  useMonetizationSettings: function() {
    return a
  },
  usePriceTiers: function() {
    return u
  }
});
var i = n("470079"),
  r = n("442837"),
  s = n("584825"),
  l = n("17079"),
  o = n("281320");

function u(e, t) {
  let n = (0, r.useStateFromStores)([o.default], () => o.default.getPriceTiersForGuildAndType(e, t)),
    s = (0, r.useStateFromStores)([o.default], () => o.default.getPriceTiersFetchStateForGuildAndType(e, t));
  return i.useEffect(() => {
    s === o.FetchState.NOT_FETCHED && (0, l.fetchPriceTiers)(e, t)
  }, [e, s, t]), {
    loading: s === o.FetchState.FETCHING,
    priceTiers: n
  }
}

function a(e) {
  let {
    fetchSubscriptionsSettings: t,
    loading: n,
    error: r
  } = (0, s.useFetchSubscriptionsSettings)();
  i.useEffect(() => {
    t(e)
  }, [t, e]);
  let l = (0, s.useSubscriptionsSettings)(e);
  return {
    loaded: null != l && !n,
    subscriptionsSettings: l,
    loading: n,
    error: r
  }
}