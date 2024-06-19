t(47120), t(653041);
var i, l = t(442837),
  s = t(570140);

function r(e, n, t) {
  return n in e ? Object.defineProperty(e, n, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[n] = t, e
}
let a = () => ({
    itemImpressions: []
  }),
  o = a(),
  u = new Set,
  c = new Set,
  d = 0,
  _ = !1,
  I = !1;

function E() {
  let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
  if (!e && Date.now() < d) return;
  o.itemImpressions.length > 1e3 && (o.itemImpressions = []);
  let n = 0,
    t = Date.now() - 2592e5;
  for (let e = 0; e < o.itemImpressions.length; e++) {
    let [i, l] = o.itemImpressions[e];
    if (l < t) n = e + 1;
    else break
  }
  n > 0 && (o.itemImpressions = o.itemImpressions.slice(n));
  let i = I ? 1e3 : 576e5,
    l = new Set,
    s = new Set,
    r = Date.now() - i,
    a = null;
  for (let [e, n] of o.itemImpressions) n < r ? l.add(e) : null == a && (a = n + i), s.add(e);
  u = l, c = s, d = null != a ? a : 1 / 0, _ = !0
}
class C extends(i = l.ZP.PersistedStore) {
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
    return E(), u
  }
  getDebugFastImpressionCappingEnabled() {
    return I
  }
  reset() {
    o = a()
  }
}
r(C, "displayName", "ContentInventoryPersistedStore"), r(C, "persistKey", "ContentInventoryPersistedStore"), n.Z = new C(s.Z, {
  CONTENT_INVENTORY_TRACK_ITEM_IMPRESSIONS: function(e) {
    let {
      itemIds: n
    } = e;
    !_ && E();
    let t = Date.now(),
      i = !1;
    for (let e of n) !c.has(e) && (o.itemImpressions.push([e, t]), i = !0);
    return E(i), i
  },
  CONTENT_INVENTORY_DEBUG_CLEAR_IMPRESSIONS: function() {
    o.itemImpressions = [], E(!0)
  },
  CONTENT_INVENTORY_DEBUG_LOG_IMPRESSIONS: function() {
    return console.log("Item impressions:", o.itemImpressions), !1
  },
  CONTENT_INVENTORY_DEBUG_TOGGLE_FAST_IMPRESSION_CAPPING: function() {
    I = !I
  }
})