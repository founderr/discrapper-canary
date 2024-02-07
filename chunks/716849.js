"use strict";
n.r(t), n.d(t, {
  NON_SUBSCRIBER_SENTINEL: function() {
    return h
  },
  maybeFetchPremiumLikelihood: function() {
    return C
  },
  useMaybeFetchPremiumLikelihood: function() {
    return p
  }
});
var i = n("884691"),
  r = n("65597"),
  l = n("872717"),
  s = n("913144"),
  a = n("775433"),
  o = n("697218"),
  u = n("10514"),
  d = n("764364"),
  c = n("676572"),
  f = n("646718"),
  E = n("49111");
let h = "nonSubscriber";
async function _() {
  try {
    s.default.dispatch({
      type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH"
    });
    let {
      body: e
    } = await l.default.get({
      url: E.Endpoints.USER_PREMIUM_LIKELIHOOD
    });
    s.default.dispatch({
      type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS",
      premiumLikelihood: function(e) {
        return {
          [h]: e.non_subscriber,
          [f.PremiumSubscriptionSKUs.TIER_0]: e[f.PremiumSubscriptionSKUs.TIER_0],
          [f.PremiumSubscriptionSKUs.TIER_2]: e[f.PremiumSubscriptionSKUs.TIER_2]
        }
      }(e)
    })
  } catch (e) {
    404 === e.status ? s.default.dispatch({
      type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS"
    }) : s.default.dispatch({
      type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_ERROR"
    })
  }
}

function C(e) {
  let {
    enabled: t,
    useExpectedValue: n
  } = e.getCurrentConfig({
    location: "443cca_1"
  }, {
    autoTrackExposure: !1
  }), i = c.default.shouldFetchPremiumLikelihood(), r = o.default.getCurrentUser();
  S(r, i, t, n)
}

function p(e) {
  let {
    enabled: t,
    useExpectedValue: n
  } = e.useExperiment({
    location: "443cca_2"
  }, {
    autoTrackExposure: !1
  }), l = (0, r.default)([c.default], () => c.default.shouldFetchPremiumLikelihood()), s = (0, r.default)([o.default], () => o.default.getCurrentUser());
  i.useEffect(() => {
    S(s, l, t, n)
  }, [s, l, t, n])
}

function S(e, t, n, i) {
  null != e && !(0, d.isPremium)(e) && n && (t && _(), i && (!u.default.isLoadedForSKU(f.PremiumSubscriptionSKUs.TIER_0) && !u.default.isFetchingForSKU(f.PremiumSubscriptionSKUs.TIER_0) && (0, a.fetchSubscriptionPlansForSKU)(f.PremiumSubscriptionSKUs.TIER_0), !u.default.isLoadedForSKU(f.PremiumSubscriptionSKUs.TIER_2) && !u.default.isFetchingForSKU(f.PremiumSubscriptionSKUs.TIER_2) && (0, a.fetchSubscriptionPlansForSKU)(f.PremiumSubscriptionSKUs.TIER_2)))
}