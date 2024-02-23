"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
});
var i, a = n("666038");
i = class e extends a.default {
  static fromServer(t) {
    let {
      sku_id: n,
      ...i
    } = t;
    return new e({
      ...i,
      skuId: n
    })
  }
  constructor(e) {
    super(), this.id = e.id, this.skuId = e.skuId
  }
}