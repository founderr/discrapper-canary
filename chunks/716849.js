"use strict";
n.r(t), n.d(t, {
  NON_SUBSCRIBER_SENTINEL: function() {
    return E
  },
  maybeFetchPremiumLikelihood: function() {
    return I
  },
  useMaybeFetchPremiumLikelihood: function() {
    return h
  }
});
var r = n("884691"),
  s = n("65597"),
  i = n("872717"),
  a = n("913144"),
  l = n("775433"),
  o = n("697218"),
  u = n("10514"),
  c = n("764364"),
  d = n("676572"),
  _ = n("646718"),
  f = n("49111");
let E = "nonSubscriber";
async function C() {
  try {
    a.default.dispatch({
      type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH"
    });
    let {
      body: e
    } = await i.default.get({
      url: f.Endpoints.USER_PREMIUM_LIKELIHOOD
    });
    a.default.dispatch({
      type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS",
      premiumLikelihood: function(e) {
        return {
          [E]: e.non_subscriber,
          [_.PremiumSubscriptionSKUs.TIER_0]: e[_.PremiumSubscriptionSKUs.TIER_0],
          [_.PremiumSubscriptionSKUs.TIER_2]: e[_.PremiumSubscriptionSKUs.TIER_2]
        }
      }(e)
    })
  } catch (e) {
    404 === e.status ? a.default.dispatch({
      type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS"
    }) : a.default.dispatch({
      type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_ERROR"
    })
  }
}

function I(e) {
  let {
    enabled: t,
    useExpectedValue: n
  } = e.getCurrentConfig({
    location: "443cca_1"
  }, {
    autoTrackExposure: !1
  }), r = d.default.shouldFetchPremiumLikelihood(), s = o.default.getCurrentUser();
  p(s, r, t, n)
}

function h(e) {
  let {
    enabled: t,
    useExpectedValue: n
  } = e.useExperiment({
    location: "443cca_2"
  }, {
    autoTrackExposure: !1
  }), i = (0, s.default)([d.default], () => d.default.shouldFetchPremiumLikelihood()), a = (0, s.default)([o.default], () => o.default.getCurrentUser());
  r.useEffect(() => {
    p(a, i, t, n)
  }, [a, i, t, n])
}

function p(e, t, n, r) {
  null != e && !(0, c.isPremium)(e) && n && (t && C(), r && (!u.default.isLoadedForSKU(_.PremiumSubscriptionSKUs.TIER_0) && !u.default.isFetchingForSKU(_.PremiumSubscriptionSKUs.TIER_0) && (0, l.fetchSubscriptionPlansForSKU)(_.PremiumSubscriptionSKUs.TIER_0), !u.default.isLoadedForSKU(_.PremiumSubscriptionSKUs.TIER_2) && !u.default.isFetchingForSKU(_.PremiumSubscriptionSKUs.TIER_2) && (0, l.fetchSubscriptionPlansForSKU)(_.PremiumSubscriptionSKUs.TIER_2)))
}