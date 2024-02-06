"use strict";
n.r(t), n.d(t, {
  NON_SUBSCRIBER_SENTINEL: function() {
    return p
  },
  maybeFetchPremiumLikelihood: function() {
    return _
  },
  useMaybeFetchPremiumLikelihood: function() {
    return C
  }
});
var i = n("884691"),
  l = n("65597"),
  r = n("872717"),
  o = n("913144"),
  a = n("775433"),
  s = n("697218"),
  u = n("10514"),
  c = n("764364"),
  d = n("676572"),
  f = n("646718"),
  E = n("49111");
let p = "nonSubscriber";
async function h() {
  try {
    o.default.dispatch({
      type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH"
    });
    let {
      body: e
    } = await r.default.get({
      url: E.Endpoints.USER_PREMIUM_LIKELIHOOD
    });
    o.default.dispatch({
      type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS",
      premiumLikelihood: function(e) {
        return {
          [p]: e.non_subscriber,
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

function _(e) {
  let {
    enabled: t,
    useExpectedValue: n
  } = e.getCurrentConfig({
    location: "443cca_1"
  }, {
    autoTrackExposure: !1
  }), i = d.default.shouldFetchPremiumLikelihood(), l = s.default.getCurrentUser();
  S(l, i, t, n)
}

function C(e) {
  let {
    enabled: t,
    useExpectedValue: n
  } = e.useExperiment({
    location: "443cca_2"
  }, {
    autoTrackExposure: !1
  }), r = (0, l.default)([d.default], () => d.default.shouldFetchPremiumLikelihood()), o = (0, l.default)([s.default], () => s.default.getCurrentUser());
  i.useEffect(() => {
    S(o, r, t, n)
  }, [o, r, t, n])
}

function S(e, t, n, i) {
  null != e && !(0, c.isPremium)(e) && n && (t && h(), i && (!u.default.isLoadedForSKU(f.PremiumSubscriptionSKUs.TIER_0) && !u.default.isFetchingForSKU(f.PremiumSubscriptionSKUs.TIER_0) && (0, a.fetchSubscriptionPlansForSKU)(f.PremiumSubscriptionSKUs.TIER_0), !u.default.isLoadedForSKU(f.PremiumSubscriptionSKUs.TIER_2) && !u.default.isFetchingForSKU(f.PremiumSubscriptionSKUs.TIER_2) && (0, a.fetchSubscriptionPlansForSKU)(f.PremiumSubscriptionSKUs.TIER_2)))
}