"use strict";
E.r(_), E.d(_, {
  default: function() {
    return i
  }
}), E("222007");
var t = E("446674"),
  o = E("913144");
let n = new Map;
class r extends t.default.Store {
  getFeed(e) {
    return n.get(e)
  }
}
r.displayName = "ContentInventoryStore";
var i = new r(o.default, {
  CONNECTION_OPEN: function() {
    n.clear()
  },
  CONTENT_INVENTORY_SET_FEED: function(e) {
    let {
      feedId: _,
      feed: E
    } = e;
    n.set(_, E)
  }
})