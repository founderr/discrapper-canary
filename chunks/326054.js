"use strict";
n.r(t), n.d(t, {
  Section: function() {
    return r
  },
  NONE_ITEM: function() {
    return E
  },
  SHOP_ITEM: function() {
    return h
  },
  default: function() {
    return p
  }
}), n("222007"), n("808653"), n("424973");
var r, l, i = n("884691"),
  s = n("917351"),
  a = n("65597"),
  o = n("853987"),
  u = n("775416"),
  c = n("491232"),
  d = n("697218"),
  f = n("719923"),
  C = n("782340");
(l = r || (r = {})).PURCHASE = "purchase", l.PREMIUM_PURCHASE = "premium_purchase", l.PREVIEW = "preview";
let E = {
    id: "None"
  },
  h = {
    id: "Shop"
  };
var p = () => {
  let e = (0, a.default)([d.default], () => d.default.getCurrentUser()),
    t = f.default.canUseCollectibles(e),
    n = (0, a.default)([u.default], () => u.default.purchases),
    [r, l] = (0, a.useStateFromStoresArray)([o.default], () => [o.default.categories, o.default.products]);
  return (0, i.useMemo)(() => {
    let e = (0, s.uniqBy)([...(0, c.getProfileEffectsFromPurchases)(n), ...(0, c.getProfileEffectsFromCategories)(r)], "id"),
      i = e.reduce((e, r) => {
        let i = n.get(r.skuId),
          s = (0, c.isPremiumCollectiblesPurchase)(i);
        if (s) return e.premium_purchase.push(r), e;
        if (null != i) return e.purchase.push(r), e;
        if (!t && (0, c.isPremiumCollectiblesProduct)(l.get(r.skuId))) {
          let t = e.premium_purchase;
          return t.push(r), e
        }
        return e.preview.push(r), e
      }, {
        purchase: [],
        premium_purchase: [],
        preview: []
      });
    return [{
      section: "purchase",
      items: [E, h, ...i.purchase],
      height: 12,
      header: C.default.Messages.CHANGE_DECORATION_MODAL_PURCHASE_HEADER
    }, {
      section: "premium_purchase",
      items: i.premium_purchase,
      height: 12,
      header: C.default.Messages.CHANGE_DECORATION_MODAL_PREMIUM_STARTER_HEADER
    }, {
      section: "preview",
      items: i.preview,
      height: 12,
      header: C.default.Messages.PROFILE_EFFECT_MODAL_SHOP_PREVIEW_HEADER
    }].filter(e => {
      let {
        items: t
      } = e;
      return t.length > 0
    })
  }, [r, l, n, t])
}