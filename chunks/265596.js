"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
}), n("222007");
var i = n("446674"),
  a = n("913144");
let l = new Map;
class s extends i.default.Store {
  getFeed(e) {
    return l.get(e)
  }
}
s.displayName = "ContentInventoryStore";
var r = new s(a.default, {
  CONNECTION_OPEN: function() {
    l.clear()
  },
  CONTENT_INVENTORY_SET_FEED: function(e) {
    let {
      feedId: t,
      feed: n
    } = e;
    l.set(t, n)
  }
})