"use strict";
n.r(t), n("47120"), n("653041");
var s, a, i, l = n("442837"),
  r = n("570140");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}(i = s || (s = {})).DIRECT_MESSAGE = "direct_message", i.CHANNEL = "channel";
let o = () => ({
    replyMode: "direct_message",
    itemImpressions: []
  }),
  d = o(),
  c = new Set,
  E = new Set,
  f = 0,
  _ = !1,
  T = !1;

function I() {
  let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
  if (!e && Date.now() < f) return;
  d.itemImpressions.length > 1e3 && (d.itemImpressions = []);
  let t = 0,
    n = Date.now() - 2592e5;
  for (let e = 0; e < d.itemImpressions.length; e++) {
    let [s, a] = d.itemImpressions[e];
    if (a < n) t = e + 1;
    else break
  }
  t > 0 && (d.itemImpressions = d.itemImpressions.slice(t));
  let s = T ? 1e3 : 576e5,
    a = new Set,
    i = new Set,
    l = Date.now() - s,
    r = null;
  for (let [e, t] of d.itemImpressions) t < l ? a.add(e) : null == r && (r = t + s), i.add(e);
  c = a, E = i, f = null != r ? r : 1 / 0, _ = !0
}
class S extends(a = l.default.PersistedStore) {
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
    return I(), c
  }
  getDebugFastImpressionCappingEnabled() {
    return T
  }
  reset() {
    d = o()
  }
}
u(S, "displayName", "ContentInventoryPersistedStore"), u(S, "persistKey", "ContentInventoryPersistedStore"), t.default = new S(r.default, {
  CONTENT_INVENTORY_TOGGLE_REPLY_MODE: () => {
    "direct_message" === d.replyMode ? d.replyMode = "channel" : d.replyMode = "direct_message"
  },
  CONTENT_INVENTORY_TRACK_ITEM_IMPRESSIONS: function(e) {
    let {
      itemIds: t
    } = e;
    !_ && I();
    let n = Date.now(),
      s = !1;
    for (let e of t) !E.has(e) && (d.itemImpressions.push([e, n]), s = !0);
    return I(s), s
  },
  CONTENT_INVENTORY_DEBUG_CLEAR_IMPRESSIONS: function() {
    d.itemImpressions = [], I(!0)
  },
  CONTENT_INVENTORY_DEBUG_LOG_IMPRESSIONS: function() {
    return console.log("Item impressions:", d.itemImpressions), !1
  },
  CONTENT_INVENTORY_DEBUG_TOGGLE_FAST_IMPRESSION_CAPPING: function() {
    T = !T
  }
})