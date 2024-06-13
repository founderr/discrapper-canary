"use strict";
n.r(t), n.d(t, {
  fetchFreshStorefrontData: function() {
    return c
  },
  useRefreshedStorefrontProducts: function() {
    return d
  }
}), n("47120");
var i = n("470079"),
  l = n("442837"),
  a = n("241159"),
  r = n("496929"),
  s = n("558381"),
  o = n("270144"),
  u = n("238");

function d(e, t) {
  i.useEffect(() => {
    c(e)
  }, [e]);
  let {
    subscriptionGroupListing: n
  } = (0, o.useActiveSubscriptionListingForApplication)(e, t), a = null == n ? void 0 : n.subscription_listings;
  return (0, l.useStateFromStoresObject)([u.default], () => {
    var t;
    let {
      subscriptions: n,
      otps: i
    } = u.default.getStoreLayout(e), l = new Set(n.map(e => e.id));
    return {
      subs: null !== (t = null == a ? void 0 : a.filter(e => l.has(e.id))) && void 0 !== t ? t : [],
      otps: i
    }
  }, [e, a])
}

function c(e) {
  (0, a.fetchStoreDirectoryLayout)(e), (0, s.fetchAllStoreListingsForApplication)(e), (0, r.fetchUserEntitlementsForApplication)(e, !1)
}