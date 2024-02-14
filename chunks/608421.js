"use strict";
E.r(_), E.d(_, {
  default: function() {
    return r
  }
}), E("222007");
var t = E("913144"),
  o = E("689988"),
  n = E("101125");
class a extends o.default {
  constructor(...e) {
    super(...e), this.stores = new Map().set(n.default, i)
  }
}

function i() {
  t.default.dispatch({
    type: "SELF_PRESENCE_STORE_UPDATE",
    status: n.default.getStatus(),
    activities: n.default.getActivities()
  })
}
var r = new a