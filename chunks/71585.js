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
  E = a(),
  s = new Set,
  l = new Set,
  T = 0,
  d = !1,
  c = !1;

function f() {
  let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
  if (!t && Date.now() < T) return;
  E.itemImpressions.length > 1e3 && (E.itemImpressions = []);
  let e = 0,
    n = Date.now() - 2592e5;
  for (let t = 0; t < E.itemImpressions.length; t++) {
    let [r, i] = E.itemImpressions[t];
    if (i < n) e = t + 1;
    else break
  }
  e > 0 && (E.itemImpressions = E.itemImpressions.slice(e));
  let r = c ? 1e3 : 576e5,
    i = new Set,
    o = new Set,
    u = Date.now() - r,
    a = null;
  for (let [t, e] of E.itemImpressions) e < u ? i.add(t) : null == a && (a = e + r), o.add(t);
  s = i, l = o, T = null != a ? a : 1 / 0, d = !0
}
class _ extends(r = i.default.PersistedStore) {
  initialize(t) {
    E = {
      ...E,
      ...null != t ? t : {}
    }
  }
  getState() {
    return E
  }
  getImpressionCappedItemIds() {
    return f(), s
  }
  getDebugFastImpressionCappingEnabled() {
    return c
  }
  reset() {
    E = a()
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
    for (let t of e) !l.has(t) && (E.itemImpressions.push([t, n]), r = !0);
    return f(r), r
  },
  CONTENT_INVENTORY_DEBUG_CLEAR_IMPRESSIONS: function() {
    E.itemImpressions = [], f(!0)
  },
  CONTENT_INVENTORY_DEBUG_LOG_IMPRESSIONS: function() {
    return console.log("Item impressions:", E.itemImpressions), !1
  },
  CONTENT_INVENTORY_DEBUG_TOGGLE_FAST_IMPRESSION_CAPPING: function() {
    c = !c
  }
})