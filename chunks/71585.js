n(47120), n(653041);
var l, i = n(442837),
  s = n(570140);

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let r = () => ({
    itemImpressions: []
  }),
  o = r(),
  c = new Set,
  u = new Set,
  d = 0,
  h = !1,
  m = !1;

function p() {
  let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
  if (!e && Date.now() < d) return;
  o.itemImpressions.length > 1e3 && (o.itemImpressions = []);
  let t = 0,
    n = Date.now() - 2592e5;
  for (let e = 0; e < o.itemImpressions.length; e++) {
    let [l, i] = o.itemImpressions[e];
    if (i < n) t = e + 1;
    else break
  }
  t > 0 && (o.itemImpressions = o.itemImpressions.slice(t));
  let l = m ? 1e3 : 576e5,
    i = new Set,
    s = new Set,
    a = Date.now() - l,
    r = null;
  for (let [e, t] of o.itemImpressions) t < a ? i.add(e) : null == r && (r = t + l), s.add(e);
  c = i, u = s, d = null != r ? r : 1 / 0, h = !0
}
class E extends(l = i.ZP.PersistedStore) {
  initialize(e) {
    o = {
      ...o,
      ...null != e ? e : {}
    }
  }
  getState() {
    return o
  }
  getImpressionCappedItemIds() {
    return p(), c
  }
  getDebugFastImpressionCappingEnabled() {
    return m
  }
  reset() {
    o = r()
  }
}
a(E, "displayName", "ContentInventoryPersistedStore"), a(E, "persistKey", "ContentInventoryPersistedStore"), t.Z = new E(s.Z, {
  CONTENT_INVENTORY_TRACK_ITEM_IMPRESSIONS: function(e) {
    let {
      itemIds: t
    } = e;
    !h && p();
    let n = Date.now(),
      l = !1;
    for (let e of t) !u.has(e) && (o.itemImpressions.push([e, n]), l = !0);
    return p(l), l
  },
  CONTENT_INVENTORY_DEBUG_CLEAR_IMPRESSIONS: function() {
    o.itemImpressions = [], p(!0)
  },
  CONTENT_INVENTORY_DEBUG_LOG_IMPRESSIONS: function() {
    return console.log("Item impressions:", o.itemImpressions), !1
  },
  CONTENT_INVENTORY_DEBUG_TOGGLE_FAST_IMPRESSION_CAPPING: function() {
    m = !m
  }
})