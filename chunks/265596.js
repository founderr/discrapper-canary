"use strict";
n.r(t), n("222007");
var a = n("446674"),
  s = n("913144");
let l = new Map;
class i extends a.default.Store {
  getFeed(e) {
    return l.get(e)
  }
}
i.displayName = "ContentInventoryStore", new i(s.default, {
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