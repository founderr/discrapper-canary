"use strict";
let i;
n.r(t), n("47120");
var r, a, s, o, l = n("442837"),
  u = n("570140");
let d = new Map,
  _ = !1;

function c(e) {
  e(d), d = new Map(d)
}
class E extends(r = l.default.Store) {
  getFeeds() {
    return d
  }
  getFeed(e) {
    return d.get(e)
  }
  getFilters() {
    return i
  }
  getFeedRequestId(e) {
    var t;
    return null === (t = this.getFeed(e)) || void 0 === t ? void 0 : t.request_id
  }
  get hidden() {
    return _
  }
}
o = "ContentInventoryStore", (s = "displayName") in(a = E) ? Object.defineProperty(a, s, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : a[s] = o, t.default = new E(u.default, {
  CONNECTION_OPEN: function() {
    d = new Map, _ = !1
  },
  CONTENT_INVENTORY_SET_FEED: function(e) {
    let {
      feedId: t,
      feed: n
    } = e;
    c(e => e.set(t, n))
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
    if (!d.has(t)) return !1;
    c(e => e.delete(t))
  },
  CONTENT_INVENTORY_TOGGLE_FEED_HIDDEN: function() {
    _ = !_
  }
})