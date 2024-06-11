"use strict";
n.r(t), n("47120"), n("653041");
var i, a = n("442837"),
  s = n("570140");

function r(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let l = () => ({
    itemImpressions: []
  }),
  u = l(),
  o = new Set,
  d = new Set,
  c = 0,
  f = !1,
  E = !1;

function _() {
  let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
  if (!e && Date.now() < c) return;
  u.itemImpressions.length > 1e3 && (u.itemImpressions = []);
  let t = 0,
    n = Date.now() - 2592e5;
  for (let e = 0; e < u.itemImpressions.length; e++) {
    let [i, a] = u.itemImpressions[e];
    if (a < n) t = e + 1;
    else break
  }
  t > 0 && (u.itemImpressions = u.itemImpressions.slice(t));
  let i = E ? 1e3 : 576e5,
    a = new Set,
    s = new Set,
    r = Date.now() - i,
    l = null;
  for (let [e, t] of u.itemImpressions) t < r ? a.add(e) : null == l && (l = t + i), s.add(e);
  o = a, d = s, c = null != l ? l : 1 / 0, f = !0
}
class T extends(i = a.default.PersistedStore) {
  initialize(e) {
    u = {
      ...u,
      ...null != e ? e : {}
    }
  }
  getState() {
    return u
  }
  getImpressionCappedItemIds() {
    return _(), o
  }
  getDebugFastImpressionCappingEnabled() {
    return E
  }
  reset() {
    u = l()
  }
}
r(T, "displayName", "ContentInventoryPersistedStore"), r(T, "persistKey", "ContentInventoryPersistedStore"), t.default = new T(s.default, {
  CONTENT_INVENTORY_TRACK_ITEM_IMPRESSIONS: function(e) {
    let {
      itemIds: t
    } = e;
    !f && _();
    let n = Date.now(),
      i = !1;
    for (let e of t) !d.has(e) && (u.itemImpressions.push([e, n]), i = !0);
    return _(i), i
  },
  CONTENT_INVENTORY_DEBUG_CLEAR_IMPRESSIONS: function() {
    u.itemImpressions = [], _(!0)
  },
  CONTENT_INVENTORY_DEBUG_LOG_IMPRESSIONS: function() {
    return console.log("Item impressions:", u.itemImpressions), !1
  },
  CONTENT_INVENTORY_DEBUG_TOGGLE_FAST_IMPRESSION_CAPPING: function() {
    E = !E
  }
})