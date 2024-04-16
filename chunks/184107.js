"use strict";
a.r(t);
var n, s, l, i, r = a("442837"),
  o = a("570140");
let u = {};
class d extends(i = r.default.Store) {
  getSkuIdForChannel(e) {
    return u[e]
  }
}
l = "ChannelSKUStore", (s = "displayName") in(n = d) ? Object.defineProperty(n, s, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : n[s] = l, t.default = new d(o.default, {
  CONNECTION_OPEN: function() {
    u = {}
  },
  STORE_LISTING_FETCH_SUCCESS: function(e) {
    let {
      channelId: t,
      storeListing: a
    } = e;
    null != t && (u[t] = a.sku.id)
  }
})