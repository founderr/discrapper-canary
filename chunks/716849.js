"use strict";
n.r(t), n.d(t, {
  NON_SUBSCRIBER_SENTINEL: function() {
    return _
  },
  maybeFetchPremiumLikelihood: function() {
    return I
  },
  useMaybeFetchPremiumLikelihood: function() {
    return R
  }
});
var r = n("884691"),
  i = n("65597"),
  u = n("872717"),
  o = n("913144"),
  s = n("775433"),
  a = n("697218"),
  l = n("10514"),
  c = n("764364"),
  d = n("676572"),
  E = n("646718"),
  f = n("49111");
let _ = "nonSubscriber";
async function h() {
  try {
    o.default.dispatch({
      type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH"
    });
    let {
      body: e
    } = await u.default.get({
      url: f.Endpoints.USER_PREMIUM_LIKELIHOOD
    });
    o.default.dispatch({
      type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS",
      premiumLikelihood: function(e) {
        return {
          [_]: e.non_subscriber,
          [E.PremiumSubscriptionSKUs.TIER_0]: e[E.PremiumSubscriptionSKUs.TIER_0],
          [E.PremiumSubscriptionSKUs.TIER_2]: e[E.PremiumSubscriptionSKUs.TIER_2]
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

function I(e) {
  let {
    enabled: t,
    useExpectedValue: n
  } = e.getCurrentConfig({
    location: "443cca_1"
  }, {
    autoTrackExposure: !1
  }), r = d.default.shouldFetchPremiumLikelihood(), i = a.default.getCurrentUser();
  A(i, r, t, n)
}

function R(e) {
  let {
    enabled: t,
    useExpectedValue: n
  } = e.useExperiment({
    location: "443cca_2"
  }, {
    autoTrackExposure: !1
  }), u = (0, i.default)([d.default], () => d.default.shouldFetchPremiumLikelihood()), o = (0, i.default)([a.default], () => a.default.getCurrentUser());
  r.useEffect(() => {
    A(o, u, t, n)
  }, [o, u, t, n])
}

function A(e, t, n, r) {
  null != e && !(0, c.isPremium)(e) && n && (t && h(), r && (!l.default.isLoadedForSKU(E.PremiumSubscriptionSKUs.TIER_0) && !l.default.isFetchingForSKU(E.PremiumSubscriptionSKUs.TIER_0) && (0, s.fetchSubscriptionPlansForSKU)(E.PremiumSubscriptionSKUs.TIER_0), !l.default.isLoadedForSKU(E.PremiumSubscriptionSKUs.TIER_2) && !l.default.isFetchingForSKU(E.PremiumSubscriptionSKUs.TIER_2) && (0, s.fetchSubscriptionPlansForSKU)(E.PremiumSubscriptionSKUs.TIER_2)))
}