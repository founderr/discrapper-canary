"use strict";
let u;
r.r(t), r.d(t, {
  default: function() {
    return d
  }
});
var l = r("446674"),
  n = r("913144");
let s = [],
  i = s,
  o = null,
  a = e => {
    i = s, o = null
  };
class c extends l.default.Store {
  get analyticsLocations() {
    return i
  }
  get analyticsSource() {
    return o
  }
  get initialProductSkuId() {
    return u
  }
  getAnalytics() {
    return {
      analyticsLocations: i,
      analyticsSource: o
    }
  }
}
c.displayName = "CollectiblesShopStore";
var d = new c(n.default, {
  COLLECTIBLES_SHOP_OPEN: e => {
    var t, r;
    i = null !== (t = e.analyticsLocations) && void 0 !== t ? t : s, o = null !== (r = e.analyticsSource) && void 0 !== r ? r : null, u = e.initialProductSkuId
  },
  COLLECTIBLES_SHOP_CLOSE: a,
  COLLECTIBLES_PRODUCT_DETAILS_OPEN: e => {
    e.item.skuId === u && (u = void 0)
  },
  LOGOUT: a
})