"use strict";
n.r(t), n.d(t, {
  useIsInPremiumOfferExperience: function() {
    return _
  },
  useHasDiscountApplied: function() {
    return E
  },
  useFetchChurnUserDiscountOffer: function() {
    return C
  },
  useShouldFetchChurnOffer: function() {
    return I
  }
}), n("222007");
var r = n("884691"),
  i = n("866227"),
  l = n.n(i),
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
    r = E();
  return null != e || t || null != n || r
}
let E = () => {
    var e;
    let t = (0, a.useStateFromStores)([o.default], () => o.default.getPremiumTypeSubscription()),
      n = null == t ? void 0 : null === (e = t.metadata) || void 0 === e ? void 0 : e.active_discount_expires_at;
    return null != n && l(Date.now()) <= l(n)
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
  }, C = e => {
    let [t, n] = r.useState(!1), [i, l] = r.useState(!1), [a, s] = r.useState(null);
    if (e) return {
      churnUserDiscountOffer: a,
      isFetchingChurnDiscountOffer: i
    };
    let o = () => {
      n(!0), l(!1)
    };
    return !i && !t && (l(!0), T().then(e => {
      s(e), o()
    }).catch(e => {
      o()
    })), {
      churnUserDiscountOffer: a,
      isFetchingChurnDiscountOffer: i
    }
  }, I = () => {
    let {
      enabled: e
    } = c.default.useExperiment({
      location: "useShouldFetchChurnOffer"
    }, {
      autoTrackExposure: !1
    }), t = (0, a.useStateFromStores)([o.default], () => o.default.getPremiumTypeSubscription()), n = E(), r = null !== t && t.hasPremiumNitroMonthly, i = null != t && null != t.trialId;
    return e && r && !i && !n
  }