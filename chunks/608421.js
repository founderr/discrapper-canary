"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
}), n("222007");
var i = n("913144"),
  a = n("689988"),
  l = n("101125");
class s extends a.default {
  constructor(...e) {
    super(...e), this.stores = new Map().set(l.default, r)
  }
}

function r() {
  i.default.dispatch({
    type: "SELF_PRESENCE_STORE_UPDATE",
    status: l.default.getStatus(),
    activities: l.default.getActivities()
  })
}
var o = new s