"use strict";
r.r(t), r("47120"), r("653041");
var a, i, l, n = r("442837"),
  o = r("570140");

function s(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e
}(l = a || (a = {})).DIRECT_MESSAGE = "direct_message", l.CHANNEL = "channel";
let c = () => ({
    replyMode: "direct_message",
    itemImpressions: []
  }),
  d = c(),
  u = new Set,
  h = new Set,
  m = 0,
  p = !1,
  g = !1;

function f() {
  let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
  if (!e && Date.now() < m) return;
  d.itemImpressions.length > 1e3 && (d.itemImpressions = []);
  let t = 0,
    r = Date.now() - 2592e5;
  for (let e = 0; e < d.itemImpressions.length; e++) {
    let [a, i] = d.itemImpressions[e];
    if (i < r) t = e + 1;
    else break
  }
  t > 0 && (d.itemImpressions = d.itemImpressions.slice(t));
  let a = g ? 1e3 : 216e5,
    i = new Set,
    l = new Set,
    n = Date.now() - a,
    o = null;
  for (let [e, t] of d.itemImpressions) t < n ? i.add(e) : null == o && (o = t + a), l.add(e);
  u = i, h = l, m = null != o ? o : 1 / 0, p = !0
}
class y extends(i = n.default.PersistedStore) {
  initialize(e) {
    d = {
      ...d,
      ...null != e ? e : {}
    }
  }
  getState() {
    return d
  }
  isChannelReplyMode() {
    return "channel" === d.replyMode
  }
  getImpressionCappedItemIds() {
    return f(), u
  }
  getDebugFastImpressionCappingEnabled() {
    return g
  }
  reset() {
    d = c()
  }
}
s(y, "displayName", "ContentInventoryPersistedStore"), s(y, "persistKey", "ContentInventoryPersistedStore"), t.default = new y(o.default, {
  CONTENT_INVENTORY_TOGGLE_REPLY_MODE: () => {
    "direct_message" === d.replyMode ? d.replyMode = "channel" : d.replyMode = "direct_message"
  },
  CONTENT_INVENTORY_TRACK_ITEM_IMPRESSIONS: function(e) {
    let {
      itemIds: t
    } = e;
    !p && f();
    let r = Date.now(),
      a = !1;
    for (let e of t) !h.has(e) && (d.itemImpressions.push([e, r]), a = !0);
    return f(a), a
  },
  CONTENT_INVENTORY_DEBUG_CLEAR_IMPRESSIONS: function() {
    d.itemImpressions = [], f(!0)
  },
  CONTENT_INVENTORY_DEBUG_LOG_IMPRESSIONS: function() {
    return console.log("Item impressions:", d.itemImpressions), !1
  },
  CONTENT_INVENTORY_DEBUG_TOGGLE_FAST_IMPRESSION_CAPPING: function() {
    g = !g
  }
})