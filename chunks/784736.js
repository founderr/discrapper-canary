"use strict";
n.r(t), n.d(t, {
  default: function() {
    return s
  }
});
var r = n("446674"),
  a = n("913144");
let l = {};
class i extends r.default.Store {
  getEULA(e) {
    return l[e]
  }
}
i.displayName = "EULAStore";
var s = new i(a.default, {
  EULA_FETCH_SUCCESS: function(e) {
    let {
      eula: t
    } = e;
    l[t.id] = t
  }
})