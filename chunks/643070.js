"use strict";
r.r(t), r.d(t, {
  Section: function() {
    return a
  },
  NONE_ITEM: function() {
    return m
  },
  SHOP_ITEM: function() {
    return p
  },
  default: function() {
    return S
  }
}), r("222007"), r("808653"), r("424973");
var a, n, u = r("884691"),
  i = r("917351"),
  l = r("65597"),
  s = r("853987"),
  o = r("775416"),
  c = r("491232"),
  d = r("697218"),
  f = r("719923"),
  E = r("782340");
(n = a || (a = {})).PURCHASE = "purchase", n.PREMIUM_PURCHASE = "premium_purchase", n.PREVIEW = "preview", n.PREMIUM_PREVIEW = "premium_preview";
let m = {
    id: "None"
  },
  p = {
    id: "Shop"
  };
var S = () => {
  let e = (0, l.default)([d.default], () => d.default.getCurrentUser()),
    t = f.default.canUseCollectibles(e),
    r = (0, l.default)([o.default], () => o.default.purchases),
    [a, n] = (0, l.useStateFromStoresArray)([s.default], () => [s.default.categories, s.default.products]);
  return (0, u.useMemo)(() => {
    let e = (0, i.uniqBy)([...(0, c.getAvatarDecorationsFromPurchases)(r), ...(0, c.getAvatarDecorationsFromCategories)(a)], "id"),
      u = e.reduce((e, a) => {
        let u = r.get(a.skuId),
          i = (0, c.isPremiumCollectiblesPurchase)(u);
        if (i && 0 === e.premium_purchase.length && (e.premium_purchase = e.premium_preview, e.premium_preview = []), i) return e.premium_purchase.push(a), e;
        if (null != u) return e.purchase.push(a), e;
        if (!t && (0, c.isPremiumCollectiblesProduct)(n.get(a.skuId))) {
          let t = e.premium_purchase.length > 0 ? e.premium_purchase : e.premium_preview;
          return t.push(a), e
        }
        return e.preview.push(a), e
      }, {
        purchase: [],
        premium_purchase: [],
        preview: [],
        premium_preview: []
      });
    return [{
      section: "purchase",
      items: [m, p, ...u.purchase],
      height: 12,
      header: E.default.Messages.CHANGE_DECORATION_MODAL_PURCHASE_HEADER
    }, {
      section: u.premium_purchase.length > 0 ? "premium_purchase" : "premium_preview",
      items: u.premium_purchase.length > 0 ? u.premium_purchase : u.premium_preview,
      height: 12,
      header: E.default.Messages.CHANGE_DECORATION_MODAL_PREMIUM_STARTER_HEADER
    }, {
      section: "preview",
      items: u.preview,
      height: 12,
      header: E.default.Messages.PROFILE_EFFECT_MODAL_SHOP_PREVIEW_HEADER
    }].filter(e => {
      let {
        items: t
      } = e;
      return t.length > 0
    })
  }, [a, n, r, t])
}