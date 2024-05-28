"use strict";
let i, r;
n.r(t), n("47120");
var s, a, o, l, u = n("442837"),
  d = n("570140");
let _ = new Map,
  c = new Map,
  E = !1,
  I = !1;

function T(e) {
  e(_), _ = new Map(_)
}
class f extends(s = u.default.Store) {
  getFeeds() {
    return _
  }
  getFeed(e) {
    return _.get(e)
  }
  getFeedState(e) {
    return c.get(e)
  }
  getLastFeedFetchDate() {
    return i
  }
  getFilters() {
    return r
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
l = "ContentInventoryStore", (o = "displayName") in(a = f) ? Object.defineProperty(a, o, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : a[o] = l, t.default = new f(d.default, {
  CONNECTION_OPEN: function() {
    _ = new Map, E = !1
  },
  CONTENT_INVENTORY_SET_FEED: function(e) {
    let {
      feedId: t,
      feed: n
    } = e;
    T(e => e.set(t, n)), i = new Date
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
    r = t
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