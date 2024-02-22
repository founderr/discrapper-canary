"use strict";
r.r(t), r.d(t, {
  isPremiumCollectiblesProduct: function() {
    return c
  },
  isPremiumCollectiblesPurchase: function() {
    return d
  },
  getFormattedPriceForCollectiblesProduct: function() {
    return f
  },
  extractPriceByPurchaseTypes: function() {
    return E
  },
  isFreeCollectiblesProduct: function() {
    return m
  },
  getProductsFromCategories: function() {
    return p
  },
  getAvatarDecorationsFromPurchases: function() {
    return h
  },
  getAvatarDecorationsFromCategories: function() {
    return I
  },
  getCollectiblesAssetURL: function() {
    return _
  },
  getProfileEffectsFromPurchases: function() {
    return g
  },
  getProfileEffectsFromCategories: function() {
    return T
  },
  groupProfileEffects: function() {
    return v
  },
  isCollectiblesGiftCode: function() {
    return A
  },
  getLogoSize: function() {
    return P
  }
}), r("222007");
var a = r("917351"),
  n = r("265586"),
  u = r("407063"),
  i = r("153160"),
  l = r("730297"),
  s = r("806410"),
  o = r("49111");
let c = e => (null == e ? void 0 : e.premiumType) != null,
  d = e => (null == e ? void 0 : e.purchaseType) === o.EntitlementTypes.PREMIUM_PURCHASE,
  f = (e, t) => {
    let r = E(e, t ? o.PriceSetAssignmentPurchaseTypes.PREMIUM_TIER_2 : o.PriceSetAssignmentPurchaseTypes.DEFAULT);
    return null == r ? "" : (0, i.formatPrice)(null == r ? void 0 : r.amount, null == r ? void 0 : r.currency)
  },
  E = (e, t) => {
    var r, a, n;
    let u = null !== (n = e.prices[t]) && void 0 !== n ? n : null;
    return null == u ? null : null === (a = u.countryPrices) || void 0 === a ? void 0 : null === (r = a.prices) || void 0 === r ? void 0 : r[0]
  },
  m = e => {
    var t;
    return (null === (t = E(e, o.PriceSetAssignmentPurchaseTypes.DEFAULT)) || void 0 === t ? void 0 : t.amount) === 0
  },
  p = e => {
    let t = (0, a.flatMap)([...e.values()], "products");
    return (0, a.uniqBy)(t, "storeListingId")
  },
  S = (e, t) => {
    if (t === n.CollectiblesItemType.AVATAR_DECORATION) {
      let t = (0, a.flatMap)([...e.values()], "items").filter(l.isAvatarDecorationRecord);
      return (0, a.uniqBy)(t, "id")
    }
    if (t === n.CollectiblesItemType.PROFILE_EFFECT) {
      let t = (0, a.flatMap)([...e.values()], "items").filter(s.isProfileEffectRecord);
      return (0, a.uniqBy)(t, "id")
    }
  },
  C = (e, t) => {
    let r = p(e);
    if (t === n.CollectiblesItemType.AVATAR_DECORATION) {
      let e = (0, a.flatMap)(r, "items").filter(l.isAvatarDecorationRecord);
      return (0, a.uniqBy)(e, "id")
    }
    if (t === n.CollectiblesItemType.PROFILE_EFFECT) {
      let e = (0, a.flatMap)(r, "items").filter(s.isProfileEffectRecord);
      return (0, a.uniqBy)(e, "id")
    }
  },
  h = e => S(e, n.CollectiblesItemType.AVATAR_DECORATION),
  I = e => C(e, n.CollectiblesItemType.AVATAR_DECORATION),
  _ = (e, t) => {
    var r;
    let {
      CDN_HOST: a,
      API_ENDPOINT: n
    } = window.GLOBAL_ENV, i = (0, u.getBestMediaProxySize)(t.size * (0, u.getDevicePixelRatio)()), l = null !== (r = null == t ? void 0 : t.format) && void 0 !== r ? r : "png";
    if (null != a) return "".concat(location.protocol, "//").concat(a, "/app-assets/").concat(o.COLLECTIBLES_APPLICATION_ID, "/").concat(e, ".").concat(l, "?size=").concat(i);
    let s = o.Endpoints.APPLICATION_ASSET(o.COLLECTIBLES_APPLICATION_ID, e, l);
    return "".concat(location.protocol).concat(n).concat(s, "?size=").concat(i)
  },
  g = e => S(e, n.CollectiblesItemType.PROFILE_EFFECT),
  T = e => C(e, n.CollectiblesItemType.PROFILE_EFFECT),
  v = (e, t) => {
    let r = g(t),
      a = T(e).filter(e => {
        let {
          id: t
        } = e;
        return !r.some(e => e.id === t)
      });
    return {
      purchased: r,
      shopPreviews: a
    }
  },
  A = e => e.applicationId === o.COLLECTIBLES_APPLICATION_ID,
  P = e => 3.8 * e