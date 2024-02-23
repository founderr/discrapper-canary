"use strict";
n.r(t), n.d(t, {
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
    return _
  },
  getProductsFromCategories: function() {
    return h
  },
  getAvatarDecorationsFromPurchases: function() {
    return A
  },
  getAvatarDecorationsFromCategories: function() {
    return m
  },
  getCollectiblesAssetURL: function() {
    return C
  },
  getProfileEffectsFromPurchases: function() {
    return v
  },
  getProfileEffectsFromCategories: function() {
    return g
  },
  groupProfileEffects: function() {
    return I
  },
  isCollectiblesGiftCode: function() {
    return T
  },
  getLogoSize: function() {
    return N
  }
}), n("222007");
var i = n("917351"),
  a = n("265586"),
  r = n("407063"),
  l = n("153160"),
  s = n("730297"),
  o = n("806410"),
  u = n("49111");
let c = e => (null == e ? void 0 : e.premiumType) != null,
  d = e => (null == e ? void 0 : e.purchaseType) === u.EntitlementTypes.PREMIUM_PURCHASE,
  f = (e, t) => {
    let n = E(e, t ? u.PriceSetAssignmentPurchaseTypes.PREMIUM_TIER_2 : u.PriceSetAssignmentPurchaseTypes.DEFAULT);
    return null == n ? "" : (0, l.formatPrice)(null == n ? void 0 : n.amount, null == n ? void 0 : n.currency)
  },
  E = (e, t) => {
    var n, i, a;
    let r = null !== (a = e.prices[t]) && void 0 !== a ? a : null;
    return null == r ? null : null === (i = r.countryPrices) || void 0 === i ? void 0 : null === (n = i.prices) || void 0 === n ? void 0 : n[0]
  },
  _ = e => {
    var t;
    return (null === (t = E(e, u.PriceSetAssignmentPurchaseTypes.DEFAULT)) || void 0 === t ? void 0 : t.amount) === 0
  },
  h = e => {
    let t = (0, i.flatMap)([...e.values()], "products");
    return (0, i.uniqBy)(t, "storeListingId")
  },
  S = (e, t) => {
    if (t === a.CollectiblesItemType.AVATAR_DECORATION) {
      let t = (0, i.flatMap)([...e.values()], "items").filter(s.isAvatarDecorationRecord);
      return (0, i.uniqBy)(t, "id")
    }
    if (t === a.CollectiblesItemType.PROFILE_EFFECT) {
      let t = (0, i.flatMap)([...e.values()], "items").filter(o.isProfileEffectRecord);
      return (0, i.uniqBy)(t, "id")
    }
  },
  p = (e, t) => {
    let n = h(e);
    if (t === a.CollectiblesItemType.AVATAR_DECORATION) {
      let e = (0, i.flatMap)(n, "items").filter(s.isAvatarDecorationRecord);
      return (0, i.uniqBy)(e, "id")
    }
    if (t === a.CollectiblesItemType.PROFILE_EFFECT) {
      let e = (0, i.flatMap)(n, "items").filter(o.isProfileEffectRecord);
      return (0, i.uniqBy)(e, "id")
    }
  },
  A = e => S(e, a.CollectiblesItemType.AVATAR_DECORATION),
  m = e => p(e, a.CollectiblesItemType.AVATAR_DECORATION),
  C = (e, t) => {
    var n;
    let {
      CDN_HOST: i,
      API_ENDPOINT: a
    } = window.GLOBAL_ENV, l = (0, r.getBestMediaProxySize)(t.size * (0, r.getDevicePixelRatio)()), s = null !== (n = null == t ? void 0 : t.format) && void 0 !== n ? n : "png";
    if (null != i) return "".concat(location.protocol, "//").concat(i, "/app-assets/").concat(u.COLLECTIBLES_APPLICATION_ID, "/").concat(e, ".").concat(s, "?size=").concat(l);
    let o = u.Endpoints.APPLICATION_ASSET(u.COLLECTIBLES_APPLICATION_ID, e, s);
    return "".concat(location.protocol).concat(a).concat(o, "?size=").concat(l)
  },
  v = e => S(e, a.CollectiblesItemType.PROFILE_EFFECT),
  g = e => p(e, a.CollectiblesItemType.PROFILE_EFFECT),
  I = (e, t) => {
    let n = v(t),
      i = g(e).filter(e => {
        let {
          id: t
        } = e;
        return !n.some(e => e.id === t)
      });
    return {
      purchased: n,
      shopPreviews: i
    }
  },
  T = e => e.applicationId === u.COLLECTIBLES_APPLICATION_ID,
  N = e => 3.8 * e