"use strict";
n.r(t);
var a, s, i, l, r = n("442837"),
  o = n("570140");
let u = {};
class d extends(l = r.default.Store) {
  getSkuIdForChannel(e) {
    return u[e]
  }
}
i = "ChannelSKUStore", (s = "displayName") in(a = d) ? Object.defineProperty(a, s, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : a[s] = i, t.default = new d(o.default, {
  CONNECTION_OPEN: function() {
    u = {}
  },
  STORE_LISTING_FETCH_SUCCESS: function(e) {
    let {
      channelId: t,
      storeListing: n
    } = e;
    null != t && (u[t] = n.sku.id)
  }
})