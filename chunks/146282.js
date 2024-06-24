"use strict";
let i;
n(47120);
var r, s, o, a, l = n(442837),
  u = n(570140);
let _ = new Map,
  c = new Map,
  d = new Map,
  E = !1,
  I = !1;

function T(e) {
  e(_), _ = new Map(_)
}
class h extends(r = l.ZP.Store) {
  getFeeds() {
    return _
  }
  getFeed(e) {
    return _.get(e)
  }
  getFeedState(e) {
    return c.get(e)
  }
  getLastFeedFetchDate(e) {
    return d.get(e)
  }
  getFilters() {
    return i
  }
  getFeedRequestId(e) {
    var t;
    return null === (t = this.getFeed(e)) || void 0 === t ? void 0 : t.request_id
  }
  getDebugImpressionCappingDisabled() {
    return I
  }
  get hidden() {
    return E
  }
}
a = "ContentInventoryStore", (o = "displayName") in(s = h) ? Object.defineProperty(s, o, {
  value: a,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[o] = a, t.Z = new h(u.Z, {
  CONNECTION_OPEN: function() {
    _ = new Map, E = !1
  },
  CONTENT_INVENTORY_SET_FEED: function(e) {
    let {
      feedId: t,
      feed: n
    } = e;
    T(e => e.set(t, n)), d.set(t, new Date)
  },
  CONTENT_INVENTORY_SET_FEED_STATE: function(e) {
    let {
      feedId: t,
      state: n
    } = e;
    c.set(t, n)
  },
  CONTENT_INVENTORY_SET_FILTERS: function(e) {
    let {
      filters: t
    } = e;
    i = t
  },
  CONTENT_INVENTORY_CLEAR_FEED: function(e) {
    let {
      feedId: t
    } = e;
    if (!_.has(t)) return !1;
    T(e => e.delete(t))
  },
  CONTENT_INVENTORY_TOGGLE_FEED_HIDDEN: function() {
    E = !E
  },
  CONTENT_INVENTORY_DEBUG_TOGGLE_IMPRESSION_CAPPING: function() {
    I = !I
  }
})