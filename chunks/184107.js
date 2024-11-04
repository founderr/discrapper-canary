var i,
    r,
    a,
    l,
    s = n(442837),
    o = n(570140);
let c = {};
class d extends (l = s.ZP.Store) {
    getSkuIdForChannel(e) {
        return c[e];
    }
}
(a = 'ChannelSKUStore'),
    (r = 'displayName') in (i = d)
        ? Object.defineProperty(i, r, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[r] = a),
    (t.Z = new d(o.Z, {
        CONNECTION_OPEN: function () {
            c = {};
        },
        STORE_LISTING_FETCH_SUCCESS: function (e) {
            let { channelId: t, storeListing: n } = e;
            null != t && (c[t] = n.sku.id);
        }
    }));
