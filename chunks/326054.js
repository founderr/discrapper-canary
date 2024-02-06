"use strict";
r.r(t), r.d(t, {
  Section: function() {
    return n
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
}), r("222007"), r("808653"), r("424973");
var n, l, i = r("884691"),
  s = r("917351"),
  a = r("65597"),
  u = r("853987"),
  o = r("775416"),
  c = r("491232"),
  d = r("697218"),
  f = r("719923"),
  C = r("782340");
(l = n || (n = {})).PURCHASE = "purchase", l.PREMIUM_PURCHASE = "premium_purchase", l.PREVIEW = "preview";
let E = {
    id: "None"
  },
  h = {
    id: "Shop"
  };
var p = () => {
  let e = (0, a.default)([d.default], () => d.default.getCurrentUser()),
    t = f.default.canUseCollectibles(e),
    r = (0, a.default)([o.default], () => o.default.purchases),
    [n, l] = (0, a.useStateFromStoresArray)([u.default], () => [u.default.categories, u.default.products]);
  return (0, i.useMemo)(() => {
    let e = (0, s.uniqBy)([...(0, c.getProfileEffectsFromPurchases)(r), ...(0, c.getProfileEffectsFromCategories)(n)], "id"),
      i = e.reduce((e, n) => {
        let i = r.get(n.skuId),
          s = (0, c.isPremiumCollectiblesPurchase)(i);
        if (s) return e.premium_purchase.push(n), e;
        if (null != i) return e.purchase.push(n), e;
        if (!t && (0, c.isPremiumCollectiblesProduct)(l.get(n.skuId))) {
          let t = e.premium_purchase;
          return t.push(n), e
        }
        return e.preview.push(n), e
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
  }, [n, l, r, t])
}