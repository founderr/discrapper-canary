var s, i, l, a, r = n(442837),
  o = n(570140);
let c = {};
class u extends(a = r.ZP.Store) {
  getSkuIdForChannel(e) {
    return c[e]
  }
}
l = "ChannelSKUStore", (i = "displayName") in(s = u) ? Object.defineProperty(s, i, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[i] = l, t.Z = new u(o.Z, {
  CONNECTION_OPEN: function() {
    c = {}
  },
  STORE_LISTING_FETCH_SUCCESS: function(e) {
    let {
      channelId: t,
      storeListing: n
    } = e;
    null != t && (c[t] = n.sku.id)
  }
})