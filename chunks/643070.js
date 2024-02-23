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
    return E
  }
}), r("222007"), r("808653"), r("424973");
var a, n, u = r("884691"),
  s = r("65597"),
  i = r("853987"),
  l = r("775416"),
  o = r("491232"),
  c = r("697218"),
  d = r("719923"),
  f = r("782340");
(n = a || (a = {})).PURCHASE = "purchase", n.PREMIUM_PURCHASE = "premium_purchase", n.PREVIEW = "preview", n.PREMIUM_PREVIEW = "premium_preview";
let m = {
    id: "None"
  },
  p = {
    id: "Shop"
  };
var E = () => {
  let e = (0, s.default)([c.default], () => c.default.getCurrentUser()),
    t = d.default.canUseCollectibles(e),
    r = (0, s.default)([l.default], () => l.default.purchases),
    [a, n] = (0, s.useStateFromStoresArray)([i.default], () => [i.default.categories, i.default.products]);
  return (0, u.useMemo)(() => {
    let e = (0, o.getAvatarDecorations)(r, a),
      u = e.reduce((e, a) => {
        let u = r.get(a.skuId),
          s = (0, o.isPremiumCollectiblesPurchase)(u);
        if (s && 0 === e.premium_purchase.length && (e.premium_purchase = e.premium_preview, e.premium_preview = []), s) return e.premium_purchase.push(a), e;
        if (null != u) return e.purchase.push(a), e;
        if (!t && (0, o.isPremiumCollectiblesProduct)(n.get(a.skuId))) {
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
      header: f.default.Messages.CHANGE_DECORATION_MODAL_PURCHASE_HEADER
    }, {
      section: u.premium_purchase.length > 0 ? "premium_purchase" : "premium_preview",
      items: u.premium_purchase.length > 0 ? u.premium_purchase : u.premium_preview,
      height: 12,
      header: f.default.Messages.CHANGE_DECORATION_MODAL_PREMIUM_STARTER_HEADER
    }, {
      section: "preview",
      items: u.preview,
      height: 12,
      header: f.default.Messages.PROFILE_EFFECT_MODAL_SHOP_PREVIEW_HEADER
    }].filter(e => {
      let {
        items: t
      } = e;
      return t.length > 0
    })
  }, [a, n, r, t])
}