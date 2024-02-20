"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
}), n("222007");
var i = n("689988"),
  a = n("697218"),
  l = n("719923"),
  s = n("538620"),
  r = n("646718");
class o extends i.default {
  onPostConnectionOpen() {
    this.maybeFetchActiveOutboundPromotions()
  }
  maybeFetchActiveOutboundPromotions() {
    let e = a.default.getCurrentUser();
    null != e && l.default.isPremiumExactly(e, r.PremiumTypes.TIER_2) && (0, s.fetchActiveOutboundPromotions)()
  }
  constructor(...e) {
    super(...e), this.actions = {
      POST_CONNECTION_OPEN: this.onPostConnectionOpen.bind(this)
    }
  }
}
var u = new o