"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
}), n("222007");
var i = n("850068"),
  a = n("316718"),
  l = n("689988"),
  s = n("697218"),
  r = n("160299"),
  o = n("521012"),
  u = n("437712"),
  d = n("568734"),
  c = n("719923"),
  f = n("646718");
class E extends l.default {
  constructor(...e) {
    super(...e), this.actions = {
      POST_CONNECTION_OPEN: () => {
        this.maybeFetchSubscriptions(), this.maybeFetchCountryCode(), this.maybeFetchMostRecentSubscription()
      }
    }, this.maybeFetchSubscriptions = async () => {
      let e = s.default.getCurrentUser();
      if (c.default.isPremium(e)) {
        !o.default.hasFetchedSubscriptions() && await (0, i.fetchSubscriptions)();
        let e = o.default.getPremiumSubscription();
        (null == e ? void 0 : e.paymentSourceId) == null && !u.default.applicationIdsFetched.has(f.PREMIUM_SUBSCRIPTION_APPLICATION) && await (0, a.fetchUserEntitlementsForApplication)(f.PREMIUM_SUBSCRIPTION_APPLICATION)
      }
    }, this.maybeFetchMostRecentSubscription = () => {
      let e = s.default.getCurrentUser();
      null != e && !c.default.isPremium(e) && null != e.purchasedFlags && ((0, d.hasFlag)(e.purchasedFlags, f.PurchasedFlags.PREMIUM_TIER_1) || (0, d.hasFlag)(e.purchasedFlags, f.PurchasedFlags.PREMIUM_TIER_2)) && (0, i.fetchMostRecentSubscription)()
    }, this.maybeFetchCountryCode = async () => {
      let e = s.default.getCurrentUser();
      c.default.isPremium(e) && !r.default.ipCountryCodeLoaded && await this.fetchCountryCode()
    }, this.fetchCountryCode = async () => {
      await (0, i.fetchIpCountryCode)();
      let e = r.default.ipCountryCode;
      null != e && await (0, i.fetchPaymentSources)()
    }
  }
}
var h = new E