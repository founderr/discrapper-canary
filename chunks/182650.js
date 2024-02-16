"use strict";
n.r(t), n.d(t, {
  useIsInPremiumOfferExperience: function() {
    return _
  },
  useHasDiscountApplied: function() {
    return E
  },
  useFetchChurnUserDiscountOffer: function() {
    return I
  },
  useShouldFetchChurnOffer: function() {
    return C
  }
}), n("222007");
var i = n("884691"),
  r = n("866227"),
  l = n.n(r),
  a = n("446674"),
  s = n("872717"),
  o = n("521012"),
  u = n("324878"),
  c = n("77860"),
  d = n("154889"),
  f = n("917247"),
  m = n("49111");

function _() {
  let e = (0, f.usePremiumTrialOffer)(),
    t = (0, u.useHasActiveTrial)(),
    n = (0, d.usePremiumDiscountOffer)(),
    i = E();
  return null != e || t || null != n || i
}
let E = () => {
    var e, t;
    let n = (0, a.useStateFromStores)([o.default], () => o.default.getPremiumTypeSubscription()),
      i = null == n ? void 0 : null === (e = n.metadata) || void 0 === e ? void 0 : e.nitro_likelihood_discount_expires_at,
      r = null == n ? void 0 : null === (t = n.metadata) || void 0 === t ? void 0 : t.nitro_reactivation_discount_expires_at,
      s = null != i ? i : r;
    return null != s && l(Date.now()) <= l(s)
  },
  T = async () => {
    let e = null;
    try {
      var t;
      let n = await s.default.post({
        url: m.Endpoints.CHURN_USER_OFFER
      });
      e = null !== (t = n.body.offer) && void 0 !== t ? t : null
    } catch (e) {}
    return e
  }, I = e => {
    let [t, n] = i.useState(!1), [r, l] = i.useState(!1), [a, s] = i.useState(null);
    if (e) return {
      churnUserDiscountOffer: a,
      isFetchingChurnDiscountOffer: r
    };
    let o = () => {
      n(!0), l(!1)
    };
    return !r && !t && (l(!0), T().then(e => {
      s(e), o()
    }).catch(e => {
      o()
    })), {
      churnUserDiscountOffer: a,
      isFetchingChurnDiscountOffer: r
    }
  }, C = () => {
    let {
      enabled: e
    } = c.default.useExperiment({
      location: "useShouldFetchChurnOffer"
    }, {
      autoTrackExposure: !1
    }), t = (0, a.useStateFromStores)([o.default], () => o.default.getPremiumTypeSubscription()), n = E(), i = null !== t && t.hasPremiumNitroMonthly, r = null != t && null != t.trialId;
    return e && i && !r && !n
  }