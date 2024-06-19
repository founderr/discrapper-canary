var i, s, l, a, r = n(442837),
  o = n(570140);
let c = {};
class u extends(a = r.ZP.Store) {
  getSkuIdForChannel(e) {
    return c[e]
  }
}
l = "ChannelSKUStore", (s = "displayName") in(i = u) ? Object.defineProperty(i, s, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[s] = l, t.Z = new u(o.Z, {
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