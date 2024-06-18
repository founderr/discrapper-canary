"use strict";
let i, r;
n(47120);
var s, o, a, l, u = n(442837),
  _ = n(570140);
let c = new Map,
  d = new Map,
  E = !1,
  I = !1;

function T(e) {
  e(c), c = new Map(c)
}
class h extends(s = u.ZP.Store) {
  getFeeds() {
    return c
  }
  getFeed(e) {
    return c.get(e)
  }
  getFeedState(e) {
    return d.get(e)
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
l = "ContentInventoryStore", (a = "displayName") in(o = h) ? Object.defineProperty(o, a, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : o[a] = l, t.Z = new h(_.Z, {
  CONNECTION_OPEN: function() {
    c = new Map, E = !1
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
    d.set(t, n)
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
    if (!c.has(t)) return !1;
    T(e => e.delete(t))
  },
  CONTENT_INVENTORY_TOGGLE_FEED_HIDDEN: function() {
    E = !E
  },
  CONTENT_INVENTORY_DEBUG_TOGGLE_IMPRESSION_CAPPING: function() {
    I = !I
  }
})