"use strict";
let n;
r.r(t), r.d(t, {
  default: function() {
    return d
  }
});
var l = r("446674"),
  i = r("913144");
let s = [],
  a = s,
  u = null,
  o = e => {
    a = s, u = null
  };
class c extends l.default.Store {
  get analyticsLocations() {
    return a
  }
  get analyticsSource() {
    return u
  }
  get initialProductSkuId() {
    return n
  }
  getAnalytics() {
    return {
      analyticsLocations: a,
      analyticsSource: u
    }
  }
}
c.displayName = "CollectiblesShopStore";
var d = new c(i.default, {
  COLLECTIBLES_SHOP_OPEN: e => {
    var t, r;
    a = null !== (t = e.analyticsLocations) && void 0 !== t ? t : s, u = null !== (r = e.analyticsSource) && void 0 !== r ? r : null, n = e.initialProductSkuId
  },
  COLLECTIBLES_SHOP_CLOSE: o,
  COLLECTIBLES_PRODUCT_DETAILS_OPEN: e => {
    e.item.skuId === n && (n = void 0)
  },
  LOGOUT: o
})