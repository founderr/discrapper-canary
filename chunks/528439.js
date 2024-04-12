"use strict";
l.r(t), l.d(t, {
  NONE_ITEM: function() {
    return h
  },
  SHOP_ITEM: function() {
    return E
  },
  Section: function() {
    return s
  }
}), l("47120"), l("724458"), l("653041");
var s, a, n = l("470079"),
  r = l("392711"),
  i = l("399606"),
  u = l("597688"),
  o = l("1870"),
  c = l("884697"),
  d = l("594174"),
  f = l("74538"),
  m = l("689938");
(a = s || (s = {})).PURCHASE = "purchase", a.PREMIUM_PURCHASE = "premium_purchase", a.PREVIEW = "preview";
let h = {
    id: "None"
  },
  E = {
    id: "Shop"
  };
t.default = () => {
  let e = (0, i.useStateFromStores)([d.default], () => d.default.getCurrentUser()),
    t = f.default.canUseCollectibles(e),
    l = (0, i.useStateFromStores)([o.default], () => o.default.purchases),
    [s, a] = (0, i.useStateFromStoresArray)([u.default], () => [u.default.categories, u.default.products]);
  return (0, n.useMemo)(() => {
    let e = (0, r.uniqBy)([...(0, c.getProfileEffectsFromPurchases)(l), ...(0, c.getProfileEffectsFromCategories)(s)], "id").reduce((e, s) => {
      let n = l.get(s.skuId);
      return (0, c.isPremiumCollectiblesPurchase)(n) ? (e.premium_purchase.push(s), e) : null != n ? (e.purchase.push(s), e) : !t && (0, c.isPremiumCollectiblesProduct)(a.get(s.skuId)) ? (e.premium_purchase.push(s), e) : (e.preview.push(s), e)
    }, {
      purchase: [],
      premium_purchase: [],
      preview: []
    });
    return [{
      section: "purchase",
      items: [h, E, ...e.purchase],
      height: 12,
      header: m.default.Messages.CHANGE_DECORATION_MODAL_PURCHASE_HEADER
    }, {
      section: "premium_purchase",
      items: e.premium_purchase,
      height: 12,
      header: m.default.Messages.CHANGE_DECORATION_MODAL_PREMIUM_STARTER_HEADER
    }, {
      section: "preview",
      items: e.preview,
      height: 12,
      header: m.default.Messages.PROFILE_EFFECT_MODAL_SHOP_PREVIEW_HEADER
    }].filter(e => {
      let {
        items: t
      } = e;
      return t.length > 0
    })
  }, [s, a, l, t])
}