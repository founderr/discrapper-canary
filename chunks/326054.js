"use strict";
n.r(t), n.d(t, {
  Section: function() {
    return s
  },
  NONE_ITEM: function() {
    return C
  },
  SHOP_ITEM: function() {
    return v
  },
  default: function() {
    return p
  }
}), n("222007"), n("808653"), n("424973");
var s, l, i = n("884691"),
  r = n("917351"),
  o = n("65597"),
  a = n("853987"),
  u = n("775416"),
  c = n("491232"),
  d = n("697218"),
  f = n("719923"),
  h = n("782340");
(l = s || (s = {})).PURCHASE = "purchase", l.PREMIUM_PURCHASE = "premium_purchase", l.PREVIEW = "preview";
let C = {
    id: "None"
  },
  v = {
    id: "Shop"
  };
var p = () => {
  let e = (0, o.default)([d.default], () => d.default.getCurrentUser()),
    t = f.default.canUseCollectibles(e),
    n = (0, o.default)([u.default], () => u.default.purchases),
    [s, l] = (0, o.useStateFromStoresArray)([a.default], () => [a.default.categories, a.default.products]);
  return (0, i.useMemo)(() => {
    let e = (0, r.uniqBy)([...(0, c.getProfileEffectsFromPurchases)(n), ...(0, c.getProfileEffectsFromCategories)(s)], "id"),
      i = e.reduce((e, s) => {
        let i = n.get(s.skuId),
          r = (0, c.isPremiumCollectiblesPurchase)(i);
        if (r) return e.premium_purchase.push(s), e;
        if (null != i) return e.purchase.push(s), e;
        if (!t && (0, c.isPremiumCollectiblesProduct)(l.get(s.skuId))) {
          let t = e.premium_purchase;
          return t.push(s), e
        }
        return e.preview.push(s), e
      }, {
        purchase: [],
        premium_purchase: [],
        preview: []
      });
    return [{
      section: "purchase",
      items: [C, v, ...i.purchase],
      height: 12,
      header: h.default.Messages.CHANGE_DECORATION_MODAL_PURCHASE_HEADER
    }, {
      section: "premium_purchase",
      items: i.premium_purchase,
      height: 12,
      header: h.default.Messages.CHANGE_DECORATION_MODAL_PREMIUM_STARTER_HEADER
    }, {
      section: "preview",
      items: i.preview,
      height: 12,
      header: h.default.Messages.PROFILE_EFFECT_MODAL_SHOP_PREVIEW_HEADER
    }].filter(e => {
      let {
        items: t
      } = e;
      return t.length > 0
    })
  }, [s, l, n, t])
}