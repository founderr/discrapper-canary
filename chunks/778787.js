"use strict";
n.d(t, {
  Z: function() {
    return d
  }
}), n(724458), n(627341), n(653041);
var i = n(278074),
  r = n(979554),
  s = n(922347),
  o = n(587177),
  a = n(311850),
  l = n(803358),
  u = n(212161),
  _ = n(981631);

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class d extends l.Z {
  static fromServer(e) {
    let {
      type: t,
      premium_type: n,
      category_sku_id: l,
      prices: c,
      bundled_products: E,
      ...I
    } = e;
    return new d({
      ...super.fromServer(I),
      type: t,
      premiumType: n === _.WND ? null : n,
      categorySkuId: l,
      prices: (0, a.l)(c),
      items: I.items.reduce((e, t) => (0, i.EQ)(t).with({
        type: r.Z.AVATAR_DECORATION
      }, t => (e.push(s.Z.fromServer(t)), e)).with({
        type: r.Z.PROFILE_EFFECT
      }, t => (e.push(u.Z.fromServer(t)), e)).otherwise(() => e), []),
      bundledProducts: null == E ? void 0 : E.map(o.Z.fromServer),
      googleSkuIds: I.google_sku_ids
    })
  }
  constructor(e) {
    super(e), c(this, "prices", void 0), c(this, "type", void 0), c(this, "premiumType", void 0), c(this, "items", void 0), c(this, "categorySkuId", void 0), c(this, "bundledProducts", void 0), c(this, "googleSkuIds", void 0), this.summary = e.summary, this.type = e.type, this.premiumType = e.premiumType, this.items = e.items, this.categorySkuId = e.categorySkuId, this.prices = e.prices, this.bundledProducts = e.bundledProducts, this.googleSkuIds = e.googleSkuIds
  }
}