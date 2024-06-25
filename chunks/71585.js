t(47120), t(653041);
var a, n = t(442837),
  i = t(570140);

function l(e, r, t) {
  return r in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e
}
let o = () => ({
    itemImpressions: []
  }),
  c = o(),
  s = new Set,
  d = new Set,
  u = 0,
  h = !1,
  m = !1;

function g() {
  let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
  if (!e && Date.now() < u) return;
  c.itemImpressions.length > 1e3 && (c.itemImpressions = []);
  let r = 0,
    t = Date.now() - 2592e5;
  for (let e = 0; e < c.itemImpressions.length; e++) {
    let [a, n] = c.itemImpressions[e];
    if (n < t) r = e + 1;
    else break
  }
  r > 0 && (c.itemImpressions = c.itemImpressions.slice(r));
  let a = m ? 1e3 : 576e5,
    n = new Set,
    i = new Set,
    l = Date.now() - a,
    o = null;
  for (let [e, r] of c.itemImpressions) r < l ? n.add(e) : null == o && (o = r + a), i.add(e);
  s = n, d = i, u = null != o ? o : 1 / 0, h = !0
}
class p extends(a = n.ZP.PersistedStore) {
  initialize(e) {
    c = {
      ...c,
      ...null != e ? e : {}
    }
  }
  getState() {
    return c
  }
  getImpressionCappedItemIds() {
    return g(), s
  }
  getDebugFastImpressionCappingEnabled() {
    return m
  }
  reset() {
    c = o()
  }
}
l(p, "displayName", "ContentInventoryPersistedStore"), l(p, "persistKey", "ContentInventoryPersistedStore"), r.Z = new p(i.Z, {
  CONTENT_INVENTORY_TRACK_ITEM_IMPRESSIONS: function(e) {
    let {
      itemIds: r
    } = e;
    !h && g();
    let t = Date.now(),
      a = !1;
    for (let e of r) !d.has(e) && (c.itemImpressions.push([e, t]), a = !0);
    return g(a), a
  },
  CONTENT_INVENTORY_DEBUG_CLEAR_IMPRESSIONS: function() {
    c.itemImpressions = [], g(!0)
  },
  CONTENT_INVENTORY_DEBUG_LOG_IMPRESSIONS: function() {
    return console.log("Item impressions:", c.itemImpressions), !1
  },
  CONTENT_INVENTORY_DEBUG_TOGGLE_FAST_IMPRESSION_CAPPING: function() {
    m = !m
  }
})