"use strict";
n.r(t), n.d(t, {
  NON_SUBSCRIBER_SENTINEL: function() {
    return _
  },
  maybeFetchPremiumLikelihood: function() {
    return h
  },
  useMaybeFetchPremiumLikelihood: function() {
    return p
  }
});
var i = n("884691"),
  r = n("65597"),
  l = n("872717"),
  o = n("913144"),
  s = n("775433"),
  a = n("697218"),
  u = n("10514"),
  c = n("764364"),
  d = n("676572"),
  f = n("646718"),
  E = n("49111");
let _ = "nonSubscriber";
async function I() {
  try {
    o.default.dispatch({
      type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH"
    });
    let {
      body: e
    } = await l.default.get({
      url: E.Endpoints.USER_PREMIUM_LIKELIHOOD
    });
    o.default.dispatch({
      type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS",
      premiumLikelihood: function(e) {
        return {
          [_]: e.non_subscriber,
          [f.PremiumSubscriptionSKUs.TIER_0]: e[f.PremiumSubscriptionSKUs.TIER_0],
          [f.PremiumSubscriptionSKUs.TIER_2]: e[f.PremiumSubscriptionSKUs.TIER_2]
        }
      }(e)
    })
  } catch (e) {
    404 === e.status ? o.default.dispatch({
      type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS"
    }) : o.default.dispatch({
      type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_ERROR"
    })
  }
}

function h(e) {
  let {
    enabled: t,
    useExpectedValue: n
  } = e.getCurrentConfig({
    location: "443cca_1"
  }, {
    autoTrackExposure: !1
  }), i = d.default.shouldFetchPremiumLikelihood(), r = a.default.getCurrentUser();
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
  }), l = (0, r.default)([d.default], () => d.default.shouldFetchPremiumLikelihood()), o = (0, r.default)([a.default], () => a.default.getCurrentUser());
  i.useEffect(() => {
    S(o, l, t, n)
  }, [o, l, t, n])
}

function S(e, t, n, i) {
  null != e && !(0, c.isPremium)(e) && n && (t && I(), i && (!u.default.isLoadedForSKU(f.PremiumSubscriptionSKUs.TIER_0) && !u.default.isFetchingForSKU(f.PremiumSubscriptionSKUs.TIER_0) && (0, s.fetchSubscriptionPlansForSKU)(f.PremiumSubscriptionSKUs.TIER_0), !u.default.isLoadedForSKU(f.PremiumSubscriptionSKUs.TIER_2) && !u.default.isFetchingForSKU(f.PremiumSubscriptionSKUs.TIER_2) && (0, s.fetchSubscriptionPlansForSKU)(f.PremiumSubscriptionSKUs.TIER_2)))
}