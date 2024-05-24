"use strict";
n.r(t), n.d(t, {
  extractPriceByPurchaseTypes: function() {
    return T
  },
  getAvatarDecorations: function() {
    return O
  },
  getCollectiblesAssetURL: function() {
    return C
  },
  getDaysRemaining: function() {
    return M
  },
  getFormattedPriceForCollectiblesProduct: function() {
    return E
  },
  getLogoSize: function() {
    return D
  },
  getProductDiscount: function() {
    return f
  },
  getProductsFromCategories: function() {
    return h
  },
  getProfileEffectsFromCategories: function() {
    return g
  },
  getProfileEffectsFromPurchases: function() {
    return R
  },
  groupProfileEffects: function() {
    return L
  },
  isBundleProduct: function() {
    return P
  },
  isCollectiblesGiftCode: function() {
    return v
  },
  isFreeCollectiblesProduct: function() {
    return S
  },
  isPremiumCollectiblesProduct: function() {
    return _
  },
  isPremiumCollectiblesPurchase: function() {
    return c
  },
  isProductNew: function() {
    return y
  }
}), n("724458"), n("47120");
var i = n("392711"),
  r = n("979554"),
  s = n("134432"),
  a = n("937615"),
  o = n("922347"),
  l = n("212161"),
  u = n("215023"),
  d = n("981631");
let _ = e => (null == e ? void 0 : e.premiumType) != null,
  c = e => (null == e ? void 0 : e.purchaseType) === d.EntitlementTypes.PREMIUM_PURCHASE,
  E = (e, t, n) => {
    let i;
    let r = T(e, i = n ? t ? d.PriceSetAssignmentPurchaseTypes.MOBILE_PREMIUM_TIER_2 : d.PriceSetAssignmentPurchaseTypes.MOBILE : t ? d.PriceSetAssignmentPurchaseTypes.PREMIUM_TIER_2 : d.PriceSetAssignmentPurchaseTypes.DEFAULT);
    return null == r ? "" : (0, a.formatPrice)(null == r ? void 0 : r.amount, null == r ? void 0 : r.currency)
  },
  I = e => {
    let t = e.bundledProducts;
    return null == t ? 0 : t.reduce((e, t) => {
      var n;
      let i = T(t, d.PriceSetAssignmentPurchaseTypes.DEFAULT);
      return e + (null !== (n = null == i ? void 0 : i.amount) && void 0 !== n ? n : 0)
    }, 0)
  },
  T = (e, t) => {
    var n, i, r;
    let s = null !== (r = e.prices[t]) && void 0 !== r ? r : null;
    return null == s ? null : null === (i = s.countryPrices) || void 0 === i ? void 0 : null === (n = i.prices) || void 0 === n ? void 0 : n[0]
  },
  f = (e, t) => {
    let n = I(e);
    if (n <= 0) return;
    let i = T(e, t ? d.PriceSetAssignmentPurchaseTypes.PREMIUM_TIER_2 : d.PriceSetAssignmentPurchaseTypes.DEFAULT);
    if (null != i) return Math.round((n - i.amount) / n * 100)
  },
  S = e => {
    var t;
    return (null === (t = T(e, d.PriceSetAssignmentPurchaseTypes.DEFAULT)) || void 0 === t ? void 0 : t.amount) === 0
  },
  h = e => {
    let t = (0, i.flatMap)([...e.values()], "products");
    return (0, i.uniqBy)(t, "storeListingId")
  },
  A = (e, t) => {
    if (t === r.CollectiblesItemType.AVATAR_DECORATION) {
      let t = (0, i.flatMap)([...e.values()], "items").filter(o.isAvatarDecorationRecord);
      return (0, i.uniqBy)(t, "id")
    }
    if (t === r.CollectiblesItemType.PROFILE_EFFECT) {
      let t = (0, i.flatMap)([...e.values()], "items").filter(l.isProfileEffectRecord);
      return (0, i.uniqBy)(t, "id")
    }
  },
  m = (e, t) => {
    let n = h(e);
    if (t === r.CollectiblesItemType.AVATAR_DECORATION) {
      let e = (0, i.flatMap)(n, "items").filter(o.isAvatarDecorationRecord);
      return (0, i.uniqBy)(e, "id")
    }
    if (t === r.CollectiblesItemType.PROFILE_EFFECT) {
      let e = (0, i.flatMap)(n, "items").filter(l.isProfileEffectRecord);
      return (0, i.uniqBy)(e, "id")
    }
  },
  N = e => A(e, r.CollectiblesItemType.AVATAR_DECORATION),
  p = e => m(e, r.CollectiblesItemType.AVATAR_DECORATION),
  O = (e, t) => (0, i.uniqBy)([...N(e), ...p(t)], "id"),
  C = (e, t) => {
    var n;
    let {
      CDN_HOST: i,
      API_ENDPOINT: r
    } = window.GLOBAL_ENV, a = (0, s.getBestMediaProxySize)(t.size * (0, s.getDevicePixelRatio)()), o = null !== (n = null == t ? void 0 : t.format) && void 0 !== n ? n : "png";
    if (null != i) return "".concat(location.protocol, "//").concat(i, "/app-assets/").concat(d.COLLECTIBLES_APPLICATION_ID, "/").concat(e, ".").concat(o, "?size=").concat(a);
    let l = d.Endpoints.APPLICATION_ASSET(d.COLLECTIBLES_APPLICATION_ID, e, o);
    return "".concat(location.protocol).concat(r).concat(l, "?size=").concat(a)
  },
  R = e => A(e, r.CollectiblesItemType.PROFILE_EFFECT),
  g = e => m(e, r.CollectiblesItemType.PROFILE_EFFECT),
  L = (e, t) => {
    let n = R(t),
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
  v = e => e.applicationId === d.COLLECTIBLES_APPLICATION_ID,
  D = e => 3.8 * e,
  M = e => {
    let t = new Date,
      n = Date.UTC(t.getFullYear(), t.getMonth(), t.getDate());
    return Math.floor((Date.UTC(e.getFullYear(), e.getMonth(), e.getDate()) - n) / 864e5)
  },
  y = e => {
    let t = u.SHOP_CARD_PER_PRODUCT_NEW_BADGE_EXPIRY_SETTINGS[e];
    return null != t && new Date().getTime() < t
  },
  P = e => (null == e ? void 0 : e.type) === r.CollectiblesItemType.BUNDLE