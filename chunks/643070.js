"use strict";
r.r(t), r.d(t, {
  Section: function() {
    return n
  },
  NONE_ITEM: function() {
    return p
  },
  SHOP_ITEM: function() {
    return E
  },
  default: function() {
    return S
  }
}), r("222007"), r("808653"), r("424973");
var n, a, u = r("884691"),
  i = r("917351"),
  s = r("65597"),
  l = r("853987"),
  o = r("775416"),
  c = r("491232"),
  d = r("697218"),
  f = r("719923"),
  m = r("782340");
(a = n || (n = {})).PURCHASE = "purchase", a.PREMIUM_PURCHASE = "premium_purchase", a.PREVIEW = "preview", a.PREMIUM_PREVIEW = "premium_preview";
let p = {
    id: "None"
  },
  E = {
    id: "Shop"
  };
var S = () => {
  let e = (0, s.default)([d.default], () => d.default.getCurrentUser()),
    t = f.default.canUseCollectibles(e),
    r = (0, s.default)([o.default], () => o.default.purchases),
    [n, a] = (0, s.useStateFromStoresArray)([l.default], () => [l.default.categories, l.default.products]);
  return (0, u.useMemo)(() => {
    let e = (0, i.uniqBy)([...(0, c.getAvatarDecorationsFromPurchases)(r), ...(0, c.getAvatarDecorationsFromCategories)(n)], "id"),
      u = e.reduce((e, n) => {
        let u = r.get(n.skuId),
          i = (0, c.isPremiumCollectiblesPurchase)(u);
        if (i && 0 === e.premium_purchase.length && (e.premium_purchase = e.premium_preview, e.premium_preview = []), i) return e.premium_purchase.push(n), e;
        if (null != u) return e.purchase.push(n), e;
        if (!t && (0, c.isPremiumCollectiblesProduct)(a.get(n.skuId))) {
          let t = e.premium_purchase.length > 0 ? e.premium_purchase : e.premium_preview;
          return t.push(n), e
        }
        return e.preview.push(n), e
      }, {
        purchase: [],
        premium_purchase: [],
        preview: [],
        premium_preview: []
      });
    return [{
      section: "purchase",
      items: [p, E, ...u.purchase],
      height: 12,
      header: m.default.Messages.CHANGE_DECORATION_MODAL_PURCHASE_HEADER
    }, {
      section: u.premium_purchase.length > 0 ? "premium_purchase" : "premium_preview",
      items: u.premium_purchase.length > 0 ? u.premium_purchase : u.premium_preview,
      height: 12,
      header: m.default.Messages.CHANGE_DECORATION_MODAL_PREMIUM_STARTER_HEADER
    }, {
      section: "preview",
      items: u.preview,
      height: 12,
      header: m.default.Messages.PROFILE_EFFECT_MODAL_SHOP_PREVIEW_HEADER
    }].filter(e => {
      let {
        items: t
      } = e;
      return t.length > 0
    })
  }, [n, a, r, t])
}