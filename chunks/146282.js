let r;
n(47120), n(724458);
var i,
    a,
    s,
    o,
    l = n(442837),
    u = n(570140),
    c = n(180335);
let d = new Map(),
    f = new Map(),
    _ = new Map(),
    h = !1;
function p(e) {
    e(d), (d = new Map(d));
}
class m extends (i = l.ZP.Store) {
    getFeeds() {
        return d;
    }
    getFeed(e) {
        return d.get(e);
    }
    getFeedState(e) {
        return f.get(e);
    }
    getLastFeedFetchDate(e) {
        return _.get(e);
    }
    getFilters() {
        return r;
    }
    getFeedRequestId(e) {
        var t;
        return null === (t = this.getFeed(e)) || void 0 === t ? void 0 : t.request_id;
    }
    getDebugImpressionCappingDisabled() {
        return h;
    }
    getMatchingInboxEntry(e) {
        let { activity: t, userId: n, feedId: r } = e,
            i = this.getFeed(r);
        if (null == i || null == t) return;
        let a = i.entries.reduce((e, t) => (t.content.author_id === n ? [...e, t.content] : [...e]), []);
        return (0, c.vu)(a, t);
    }
}
(o = 'ContentInventoryStore'),
    (s = 'displayName') in (a = m)
        ? Object.defineProperty(a, s, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (a[s] = o),
    (t.Z = new m(u.Z, {
        CONNECTION_OPEN: function () {
            d = new Map();
        },
        CONTENT_INVENTORY_SET_FEED: function (e) {
            let { feedId: t, feed: n } = e;
            p((e) => e.set(t, n)), _.set(t, new Date());
        },
        CONTENT_INVENTORY_SET_FEED_STATE: function (e) {
            let { feedId: t, state: n } = e;
            f.set(t, n);
        },
        CONTENT_INVENTORY_SET_FILTERS: function (e) {
            let { filters: t } = e;
            r = t;
        },
        CONTENT_INVENTORY_CLEAR_FEED: function (e) {
            let { feedId: t } = e;
            if (!d.has(t)) return !1;
            p((e) => e.delete(t));
        },
        CONTENT_INVENTORY_DEBUG_TOGGLE_IMPRESSION_CAPPING: function () {
            h = !h;
        }
    }));
