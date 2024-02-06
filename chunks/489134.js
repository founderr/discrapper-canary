"use strict";
r.r(t), r.d(t, {
  default: function() {
    return n
  }
});
var n, l = r("407788");
n = class e extends l.default {
  static fromServer(t) {
    let {
      purchased_at: r,
      purchase_type: n,
      ...l
    } = t;
    return new e({
      ...super.fromServer(l),
      purchaseType: n,
      purchasedAt: null != r ? new Date(r) : r
    })
  }
  constructor(e) {
    super(e), this.purchasedAt = e.purchasedAt, this.purchaseType = e.purchaseType
  }
}