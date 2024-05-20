"use strict";
n.r(t), n.d(t, {
  default: function() {
    return s
  }
});
var i = n("311850");

function r(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class s {
  static fromServer(e) {
    let {
      prices: t,
      type: n,
      premium_type: r,
      name: a,
      sku_id: o,
      summary: l
    } = e;
    return new s({
      prices: (0, i.getPricesFromServer)(t),
      type: n,
      premiumType: r,
      name: a,
      skuId: o,
      summary: l
    })
  }
  constructor(e) {
    r(this, "prices", void 0), r(this, "type", void 0), r(this, "premiumType", void 0), r(this, "name", void 0), r(this, "skuId", void 0), r(this, "summary", void 0), this.prices = e.prices, this.type = e.type, this.premiumType = e.premiumType, this.name = e.name, this.skuId = e.skuId, this.summary = e.summary
  }
}