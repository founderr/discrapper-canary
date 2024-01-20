"use strict";
n.r(t), n.d(t, {
  NON_SUBSCRIBER_SENTINEL: function() {
    return E
  },
  maybeFetchPremiumLikelihood: function() {
    return p
  },
  useMaybeFetchPremiumLikelihood: function() {
    return I
  }
});
var i = n("884691"),
  l = n("65597"),
  r = n("872717"),
  a = n("913144"),
  s = n("775433"),
  o = n("697218"),
  u = n("10514"),
  d = n("764364"),
  c = n("676572"),
  f = n("646718"),
  h = n("49111");
let E = "nonSubscriber";
async function _() {
  try {
    a.default.dispatch({
      type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH"
    });
    let {
      body: e
    } = await r.default.get({
      url: h.Endpoints.USER_PREMIUM_LIKELIHOOD
    });
    a.default.dispatch({
      type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS",
      premiumLikelihood: function(e) {
        return {
          [E]: e.non_subscriber,
          [f.PremiumSubscriptionSKUs.TIER_0]: e[f.PremiumSubscriptionSKUs.TIER_0],
          [f.PremiumSubscriptionSKUs.TIER_2]: e[f.PremiumSubscriptionSKUs.TIER_2]
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

function p(e) {
  let {
    enabled: t,
    useExpectedValue: n
  } = e.getCurrentConfig({
    location: "443cca_1"
  }, {
    autoTrackExposure: !1
  }), i = c.default.shouldFetchPremiumLikelihood(), l = o.default.getCurrentUser();
  C(l, i, t, n)
}

function I(e) {
  let {
    enabled: t,
    useExpectedValue: n
  } = e.useExperiment({
    location: "443cca_2"
  }, {
    autoTrackExposure: !1
  }), r = (0, l.default)([c.default], () => c.default.shouldFetchPremiumLikelihood()), a = (0, l.default)([o.default], () => o.default.getCurrentUser());
  i.useEffect(() => {
    C(a, r, t, n)
  }, [a, r, t, n])
}

function C(e, t, n, i) {
  null != e && !(0, d.isPremium)(e) && n && (t && _(), i && (!u.default.isLoadedForSKU(f.PremiumSubscriptionSKUs.TIER_0) && !u.default.isFetchingForSKU(f.PremiumSubscriptionSKUs.TIER_0) && (0, s.fetchSubscriptionPlansForSKU)(f.PremiumSubscriptionSKUs.TIER_0), !u.default.isLoadedForSKU(f.PremiumSubscriptionSKUs.TIER_2) && !u.default.isFetchingForSKU(f.PremiumSubscriptionSKUs.TIER_2) && (0, s.fetchSubscriptionPlansForSKU)(f.PremiumSubscriptionSKUs.TIER_2)))
}