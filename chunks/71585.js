"use strict";
s.r(t), s("47120"), s("653041");
var n, i = s("442837"),
  l = s("570140");

function a(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}
let r = () => ({
    itemImpressions: []
  }),
  u = r(),
  o = new Set,
  d = new Set,
  c = 0,
  f = !1,
  _ = !1;

function I() {
  let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
  if (!e && Date.now() < c) return;
  u.itemImpressions.length > 1e3 && (u.itemImpressions = []);
  let t = 0,
    s = Date.now() - 2592e5;
  for (let e = 0; e < u.itemImpressions.length; e++) {
    let [n, i] = u.itemImpressions[e];
    if (i < s) t = e + 1;
    else break
  }
  t > 0 && (u.itemImpressions = u.itemImpressions.slice(t));
  let n = _ ? 1e3 : 576e5,
    i = new Set,
    l = new Set,
    a = Date.now() - n,
    r = null;
  for (let [e, t] of u.itemImpressions) t < a ? i.add(e) : null == r && (r = t + n), l.add(e);
  o = i, d = l, c = null != r ? r : 1 / 0, f = !0
}
class C extends(n = i.default.PersistedStore) {
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
    return I(), o
  }
  getDebugFastImpressionCappingEnabled() {
    return _
  }
  reset() {
    u = r()
  }
}
a(C, "displayName", "ContentInventoryPersistedStore"), a(C, "persistKey", "ContentInventoryPersistedStore"), t.default = new C(l.default, {
  CONTENT_INVENTORY_TRACK_ITEM_IMPRESSIONS: function(e) {
    let {
      itemIds: t
    } = e;
    !f && I();
    let s = Date.now(),
      n = !1;
    for (let e of t) !d.has(e) && (u.itemImpressions.push([e, s]), n = !0);
    return I(n), n
  },
  CONTENT_INVENTORY_DEBUG_CLEAR_IMPRESSIONS: function() {
    u.itemImpressions = [], I(!0)
  },
  CONTENT_INVENTORY_DEBUG_LOG_IMPRESSIONS: function() {
    return console.log("Item impressions:", u.itemImpressions), !1
  },
  CONTENT_INVENTORY_DEBUG_TOGGLE_FAST_IMPRESSION_CAPPING: function() {
    _ = !_
  }
})