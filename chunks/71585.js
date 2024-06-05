"use strict";
n.r(e), n("47120"), n("653041");
var r, o = n("442837"),
  i = n("570140");

function u(t, e, n) {
  return e in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = n, t
}
let a = () => ({
    itemImpressions: []
  }),
  s = a(),
  T = new Set,
  E = new Set,
  l = 0,
  d = !1,
  _ = !1;

function L() {
  let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
  if (!t && Date.now() < l) return;
  s.itemImpressions.length > 1e3 && (s.itemImpressions = []);
  let e = 0,
    n = Date.now() - 2592e5;
  for (let t = 0; t < s.itemImpressions.length; t++) {
    let [r, o] = s.itemImpressions[t];
    if (o < n) e = t + 1;
    else break
  }
  e > 0 && (s.itemImpressions = s.itemImpressions.slice(e));
  let r = _ ? 1e3 : 576e5,
    o = new Set,
    i = new Set,
    u = Date.now() - r,
    a = null;
  for (let [t, e] of s.itemImpressions) e < u ? o.add(t) : null == a && (a = e + r), i.add(t);
  T = o, E = i, l = null != a ? a : 1 / 0, d = !0
}
class c extends(r = o.default.PersistedStore) {
  initialize(t) {
    s = {
      ...s,
      ...null != t ? t : {}
    }
  }
  getState() {
    return s
  }
  getImpressionCappedItemIds() {
    return L(), T
  }
  getDebugFastImpressionCappingEnabled() {
    return _
  }
  reset() {
    s = a()
  }
}
u(c, "displayName", "ContentInventoryPersistedStore"), u(c, "persistKey", "ContentInventoryPersistedStore"), e.default = new c(i.default, {
  CONTENT_INVENTORY_TRACK_ITEM_IMPRESSIONS: function(t) {
    let {
      itemIds: e
    } = t;
    !d && L();
    let n = Date.now(),
      r = !1;
    for (let t of e) !E.has(t) && (s.itemImpressions.push([t, n]), r = !0);
    return L(r), r
  },
  CONTENT_INVENTORY_DEBUG_CLEAR_IMPRESSIONS: function() {
    s.itemImpressions = [], L(!0)
  },
  CONTENT_INVENTORY_DEBUG_LOG_IMPRESSIONS: function() {
    return console.log("Item impressions:", s.itemImpressions), !1
  },
  CONTENT_INVENTORY_DEBUG_TOGGLE_FAST_IMPRESSION_CAPPING: function() {
    _ = !_
  }
})