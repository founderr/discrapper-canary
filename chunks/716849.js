"use strict";
r.r(t), r.d(t, {
  NON_SUBSCRIBER_SENTINEL: function() {
    return m
  },
  maybeFetchPremiumLikelihood: function() {
    return S
  },
  useMaybeFetchPremiumLikelihood: function() {
    return C
  }
});
var a = r("884691"),
  n = r("65597"),
  u = r("872717"),
  i = r("913144"),
  l = r("775433"),
  s = r("697218"),
  o = r("10514"),
  c = r("764364"),
  d = r("676572"),
  f = r("646718"),
  E = r("49111");
let m = "nonSubscriber";
async function p() {
  try {
    i.default.dispatch({
      type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH"
    });
    let {
      body: e
    } = await u.default.get({
      url: E.Endpoints.USER_PREMIUM_LIKELIHOOD
    });
    i.default.dispatch({
      type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS",
      premiumLikelihood: function(e) {
        return {
          [m]: e.non_subscriber,
          [f.PremiumSubscriptionSKUs.TIER_0]: e[f.PremiumSubscriptionSKUs.TIER_0],
          [f.PremiumSubscriptionSKUs.TIER_2]: e[f.PremiumSubscriptionSKUs.TIER_2]
        }
      }(e)
    })
  } catch (e) {
    404 === e.status ? i.default.dispatch({
      type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS"
    }) : i.default.dispatch({
      type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_ERROR"
    })
  }
}

function S(e) {
  let {
    enabled: t,
    useExpectedValue: r
  } = e.getCurrentConfig({
    location: "443cca_1"
  }, {
    autoTrackExposure: !1
  }), a = d.default.shouldFetchPremiumLikelihood(), n = s.default.getCurrentUser();
  h(n, a, t, r)
}

function C(e) {
  let {
    enabled: t,
    useExpectedValue: r
  } = e.useExperiment({
    location: "443cca_2"
  }, {
    autoTrackExposure: !1
  }), u = (0, n.default)([d.default], () => d.default.shouldFetchPremiumLikelihood()), i = (0, n.default)([s.default], () => s.default.getCurrentUser());
  a.useEffect(() => {
    h(i, u, t, r)
  }, [i, u, t, r])
}

function h(e, t, r, a) {
  null != e && !(0, c.isPremium)(e) && r && (t && p(), a && (!o.default.isLoadedForSKU(f.PremiumSubscriptionSKUs.TIER_0) && !o.default.isFetchingForSKU(f.PremiumSubscriptionSKUs.TIER_0) && (0, l.fetchSubscriptionPlansForSKU)(f.PremiumSubscriptionSKUs.TIER_0), !o.default.isLoadedForSKU(f.PremiumSubscriptionSKUs.TIER_2) && !o.default.isFetchingForSKU(f.PremiumSubscriptionSKUs.TIER_2) && (0, l.fetchSubscriptionPlansForSKU)(f.PremiumSubscriptionSKUs.TIER_2)))
}