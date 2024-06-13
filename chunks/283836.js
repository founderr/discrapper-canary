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
  r = n("442837"),
  l = n("241159"),
  s = n("496929"),
  a = n("558381"),
  o = n("270144"),
  u = n("238");

function d(e, t) {
  i.useEffect(() => {
    c(e)
  }, [e]);
  let {
    subscriptionGroupListing: n
  } = (0, o.useActiveSubscriptionListingForApplication)(e, t), l = null == n ? void 0 : n.subscription_listings;
  return (0, r.useStateFromStoresObject)([u.default], () => {
    var t;
    let {
      subscriptions: i,
      otps: r
    } = u.default.getStoreLayout(e), s = new Set(i.map(e => e.id));
    return {
      subs: null !== (t = null == l ? void 0 : l.filter(e => s.has(e.id))) && void 0 !== t ? t : [],
      otps: r,
      subscriptionGroupListing: null != n ? n : void 0
    }
  }, [e, l, n])
}

function c(e) {
  (0, l.fetchStoreDirectoryLayout)(e), (0, a.fetchAllStoreListingsForApplication)(e), (0, s.fetchUserEntitlementsForApplication)(e, !1)
}