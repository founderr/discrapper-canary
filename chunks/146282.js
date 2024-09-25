let r;
var i,
    a = n(47120);
var o = n(724458);
var s = n(442837),
    l = n(570140),
    u = n(180335);
function c(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let d = new Map(),
    _ = new Map(),
    E = new Map(),
    f = !1;
function h(e) {
    e(d), (d = new Map(d));
}
function p(e) {
    let { feedId: t, feed: n } = e;
    h((e) => e.set(t, n)), E.set(t, new Date());
}
function m(e) {
    let { feedId: t, state: n } = e;
    _.set(t, n);
}
function I() {
    d = new Map();
}
function T(e) {
    let { feedId: t } = e;
    if (!d.has(t)) return !1;
    h((e) => e.delete(t));
}
function g(e) {
    let { filters: t } = e;
    r = t;
}
function S() {
    f = !f;
}
class A extends (i = s.ZP.Store) {
    getFeeds() {
        return d;
    }
    getFeed(e) {
        return d.get(e);
    }
    getFeedState(e) {
        return _.get(e);
    }
    getLastFeedFetchDate(e) {
        return E.get(e);
    }
    getFilters() {
        return r;
    }
    getFeedRequestId(e) {
        var t;
        return null === (t = this.getFeed(e)) || void 0 === t ? void 0 : t.request_id;
    }
    getDebugImpressionCappingDisabled() {
        return f;
    }
    getMatchingInboxEntry(e) {
        let { activity: t, userId: n, feedId: r } = e,
            i = this.getFeed(r);
        if (null == i || null == t) return;
        let a = i.entries.reduce((e, t) => (t.content.author_id === n ? [...e, t.content] : [...e]), []);
        return (0, u.vu)(a, t);
    }
}
c(A, 'displayName', 'ContentInventoryStore'),
    (t.Z = new A(l.Z, {
        CONNECTION_OPEN: I,
        CONTENT_INVENTORY_SET_FEED: p,
        CONTENT_INVENTORY_SET_FEED_STATE: m,
        CONTENT_INVENTORY_SET_FILTERS: g,
        CONTENT_INVENTORY_CLEAR_FEED: T,
        CONTENT_INVENTORY_DEBUG_TOGGLE_IMPRESSION_CAPPING: S
    }));
