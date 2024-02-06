"use strict";
r.r(t), r.d(t, {
  default: function() {
    return n
  }
}), r("808653"), r("794252"), r("424973");
var n, l = r("506838"),
  i = r("265586"),
  s = r("797647"),
  a = r("730297"),
  u = r("792382"),
  o = r("806410"),
  c = r("49111");
n = class e extends u.default {
  static fromServer(t) {
    var r;
    let {
      type: n,
      premium_type: u,
      category_sku_id: d,
      prices: f,
      ...C
    } = t;
    return new e({
      ...super.fromServer(C),
      type: n,
      premiumType: u === c.PREMIUM_TYPE_NONE ? null : u,
      categorySkuId: d,
      prices: null == (r = f) ? {} : Object.keys(r).reduce((e, t) => {
        if (null == r) return e;
        let n = r[t];
        return e[t] = {
          countryPrices: {
            countryCode: n.country_prices.country_code,
            prices: n.country_prices.prices.map(e => (0, s.getPriceFromServer)(e, !0))
          },
          paymentSourcePrices: {}
        }, e
      }, {}),
      items: C.items.reduce((e, t) => (0, l.match)(t).with({
        type: i.CollectiblesItemType.AVATAR_DECORATION
      }, t => (e.push(a.default.fromServer(t)), e)).with({
        type: i.CollectiblesItemType.PROFILE_EFFECT
      }, t => (e.push(o.default.fromServer(t)), e)).otherwise(() => e), [])
    })
  }
  constructor(e) {
    super(e), this.summary = e.summary, this.type = e.type, this.premiumType = e.premiumType, this.items = e.items, this.categorySkuId = e.categorySkuId, this.prices = e.prices
  }
}