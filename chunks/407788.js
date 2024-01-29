"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
}), n("808653"), n("794252"), n("424973");
var r, l = n("506838"),
  i = n("265586"),
  s = n("797647"),
  a = n("730297"),
  o = n("792382"),
  u = n("806410"),
  c = n("49111");
r = class e extends o.default {
  static fromServer(t) {
    var n;
    let {
      type: r,
      premium_type: o,
      category_sku_id: d,
      prices: f,
      ...C
    } = t;
    return new e({
      ...super.fromServer(C),
      type: r,
      premiumType: o === c.PREMIUM_TYPE_NONE ? null : o,
      categorySkuId: d,
      prices: null == (n = f) ? {} : Object.keys(n).reduce((e, t) => {
        if (null == n) return e;
        let r = n[t];
        return e[t] = {
          countryPrices: {
            countryCode: r.country_prices.country_code,
            prices: r.country_prices.prices.map(e => (0, s.getPriceFromServer)(e, !0))
          },
          paymentSourcePrices: {}
        }, e
      }, {}),
      items: C.items.reduce((e, t) => (0, l.match)(t).with({
        type: i.CollectiblesItemType.AVATAR_DECORATION
      }, t => (e.push(a.default.fromServer(t)), e)).with({
        type: i.CollectiblesItemType.PROFILE_EFFECT
      }, t => (e.push(u.default.fromServer(t)), e)).otherwise(() => e), [])
    })
  }
  constructor(e) {
    super(e), this.summary = e.summary, this.type = e.type, this.premiumType = e.premiumType, this.items = e.items, this.categorySkuId = e.categorySkuId, this.prices = e.prices
  }
}