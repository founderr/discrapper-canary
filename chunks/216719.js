"use strict";
let r;
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var l = n("446674"),
  i = n("913144");
let s = [],
  a = s,
  o = null,
  u = e => {
    a = s, o = null
  };
class c extends l.default.Store {
  get analyticsLocations() {
    return a
  }
  get analyticsSource() {
    return o
  }
  get initialProductSkuId() {
    return r
  }
  getAnalytics() {
    return {
      analyticsLocations: a,
      analyticsSource: o
    }
  }
}
c.displayName = "CollectiblesShopStore";
var d = new c(i.default, {
  COLLECTIBLES_SHOP_OPEN: e => {
    var t, n;
    a = null !== (t = e.analyticsLocations) && void 0 !== t ? t : s, o = null !== (n = e.analyticsSource) && void 0 !== n ? n : null, r = e.initialProductSkuId
  },
  COLLECTIBLES_SHOP_CLOSE: u,
  COLLECTIBLES_PRODUCT_DETAILS_OPEN: e => {
    e.item.skuId === r && (r = void 0)
  },
  LOGOUT: u
})