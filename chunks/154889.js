"use strict";
n.r(t), n.d(t, {
  discountOfferHasTier: function() {
    return d
  },
  usePremiumDiscountOffer: function() {
    return m
  }
}), n("222007");
var i = n("884691"),
  r = n("446674"),
  l = n("862337"),
  a = n("697218"),
  s = n("340412"),
  o = n("719923"),
  u = n("646718");

function c(e) {
  return null != e && null != e.expires_at && Date.now() > Date.parse(e.expires_at)
}

function d(e, t) {
  var n;
  if (null == e) return !1;
  let i = new Set(null === (n = e.discount) || void 0 === n ? void 0 : n.plan_ids.map(e => u.SubscriptionPlanInfo[e].skuId));
  return i.has(t)
}

function f(e) {
  let t = (0, r.useStateFromStores)([s.default], () => s.default.getUserDiscountOffer(e)),
    [n, u] = i.useState(c(t)),
    d = (0, r.useStateFromStores)([a.default], () => (0, o.isPremium)(a.default.getCurrentUser()));
  return i.useEffect(() => {
    if (null == t || null == t.expires_at) return;
    let e = new l.Timeout,
      i = () => {
        let r = null != t.expires_at ? Date.parse(t.expires_at) - Date.now() : 0;
        null == e || e.start(r, () => {
          !n && c(t) ? u(!0) : i()
        })
      };
    return i(), () => e.stop()
  }, [n, t]), n || d ? null : t
}

function m() {
  let e = f(u.PREMIUM_TIER_2_LIKELIHOOD_DISCOUNT_ID),
    t = f(u.PREMIUM_TIER_2_REACTIVATION_DISCOUNT_ID);
  return null != e ? e : t
}