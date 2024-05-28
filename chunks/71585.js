"use strict";
n.r(t), n("47120"), n("653041");
var r, o, i, a = n("442837"),
  u = n("570140");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}(i = r || (r = {})).DIRECT_MESSAGE = "direct_message", i.CHANNEL = "channel";
let E = () => ({
    replyMode: "direct_message",
    itemImpressions: []
  }),
  T = E(),
  l = new Set,
  d = new Set,
  _ = 0,
  c = !1,
  L = !1;

function f() {
  let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
  if (!e && Date.now() < _) return;
  T.itemImpressions.length > 1e3 && (T.itemImpressions = []);
  let t = 0,
    n = Date.now() - 2592e5;
  for (let e = 0; e < T.itemImpressions.length; e++) {
    let [r, o] = T.itemImpressions[e];
    if (o < n) t = e + 1;
    else break
  }
  t > 0 && (T.itemImpressions = T.itemImpressions.slice(t));
  let r = L ? 1e3 : 576e5,
    o = new Set,
    i = new Set,
    a = Date.now() - r,
    u = null;
  for (let [e, t] of T.itemImpressions) t < a ? o.add(e) : null == u && (u = t + r), i.add(e);
  l = o, d = i, _ = null != u ? u : 1 / 0, c = !0
}
class C extends(o = a.default.PersistedStore) {
  initialize(e) {
    T = {
      ...T,
      ...null != e ? e : {}
    }
  }
  getState() {
    return T
  }
  isChannelReplyMode() {
    return "channel" === T.replyMode
  }
  getImpressionCappedItemIds() {
    return f(), l
  }
  getDebugFastImpressionCappingEnabled() {
    return L
  }
  reset() {
    T = E()
  }
}
s(C, "displayName", "ContentInventoryPersistedStore"), s(C, "persistKey", "ContentInventoryPersistedStore"), t.default = new C(u.default, {
  CONTENT_INVENTORY_TOGGLE_REPLY_MODE: () => {
    "direct_message" === T.replyMode ? T.replyMode = "channel" : T.replyMode = "direct_message"
  },
  CONTENT_INVENTORY_TRACK_ITEM_IMPRESSIONS: function(e) {
    let {
      itemIds: t
    } = e;
    !c && f();
    let n = Date.now(),
      r = !1;
    for (let e of t) !d.has(e) && (T.itemImpressions.push([e, n]), r = !0);
    return f(r), r
  },
  CONTENT_INVENTORY_DEBUG_CLEAR_IMPRESSIONS: function() {
    T.itemImpressions = [], f(!0)
  },
  CONTENT_INVENTORY_DEBUG_LOG_IMPRESSIONS: function() {
    return console.log("Item impressions:", T.itemImpressions), !1
  },
  CONTENT_INVENTORY_DEBUG_TOGGLE_FAST_IMPRESSION_CAPPING: function() {
    L = !L
  }
})