var i,
    r,
    l,
    a,
    o = n(442837),
    s = n(570140);
let c = {};
class d extends (a = o.ZP.Store) {
    getSkuIdForChannel(e) {
        return c[e];
    }
}
(l = 'ChannelSKUStore'),
    (r = 'displayName') in (i = d)
        ? Object.defineProperty(i, r, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[r] = l),
    (t.Z = new d(s.Z, {
        CONNECTION_OPEN: function () {
            c = {};
        },
        STORE_LISTING_FETCH_SUCCESS: function (e) {
            let { channelId: t, storeListing: n } = e;
            null != t && (c[t] = n.sku.id);
        }
    }));
