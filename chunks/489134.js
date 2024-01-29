"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var r, l = n("407788");
r = class e extends l.default {
  static fromServer(t) {
    let {
      purchased_at: n,
      purchase_type: r,
      ...l
    } = t;
    return new e({
      ...super.fromServer(l),
      purchaseType: r,
      purchasedAt: null != n ? new Date(n) : n
    })
  }
  constructor(e) {
    super(e), this.purchasedAt = e.purchasedAt, this.purchaseType = e.purchaseType
  }
}