"use strict";
n.r(e), n("47120"), n("653041");
var r, i = n("442837"),
  o = n("570140");

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
  l = new Set,
  E = new Set,
  T = 0,
  d = !1,
  c = !1;

function f() {
  let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
  if (!t && Date.now() < T) return;
  s.itemImpressions.length > 1e3 && (s.itemImpressions = []);
  let e = 0,
    n = Date.now() - 2592e5;
  for (let t = 0; t < s.itemImpressions.length; t++) {
    let [r, i] = s.itemImpressions[t];
    if (i < n) e = t + 1;
    else break
  }
  e > 0 && (s.itemImpressions = s.itemImpressions.slice(e));
  let r = c ? 1e3 : 576e5,
    i = new Set,
    o = new Set,
    u = Date.now() - r,
    a = null;
  for (let [t, e] of s.itemImpressions) e < u ? i.add(t) : null == a && (a = e + r), o.add(t);
  l = i, E = o, T = null != a ? a : 1 / 0, d = !0
}
class _ extends(r = i.default.PersistedStore) {
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
    return f(), l
  }
  getDebugFastImpressionCappingEnabled() {
    return c
  }
  reset() {
    s = a()
  }
}
u(_, "displayName", "ContentInventoryPersistedStore"), u(_, "persistKey", "ContentInventoryPersistedStore"), e.default = new _(o.default, {
  CONTENT_INVENTORY_TRACK_ITEM_IMPRESSIONS: function(t) {
    let {
      itemIds: e
    } = t;
    !d && f();
    let n = Date.now(),
      r = !1;
    for (let t of e) !E.has(t) && (s.itemImpressions.push([t, n]), r = !0);
    return f(r), r
  },
  CONTENT_INVENTORY_DEBUG_CLEAR_IMPRESSIONS: function() {
    s.itemImpressions = [], f(!0)
  },
  CONTENT_INVENTORY_DEBUG_LOG_IMPRESSIONS: function() {
    return console.log("Item impressions:", s.itemImpressions), !1
  },
  CONTENT_INVENTORY_DEBUG_TOGGLE_FAST_IMPRESSION_CAPPING: function() {
    c = !c
  }
})