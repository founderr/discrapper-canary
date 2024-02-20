"use strict";
n.r(t), n.d(t, {
  initialize: function() {
    return s
  }
}), n("222007"), n("70102"), n("424973");
var i = n("913144");
let a = {},
  l = !1;

function s(e) {
  for (let t in e) {
    let n = e[t];
    (function(e, t) {
      var n;
      t.actions
    })(t, n),
    function(e) {
      var t;
      let n = null !== (t = e.actions) && void 0 !== t ? t : [];
      for (let t of ((e.hasStoreChangeListeners || e.loadAfterConnectionOpen) && (!n.includes("POST_CONNECTION_OPEN") && (n = [...n, "POST_CONNECTION_OPEN"]), !n.includes("OVERLAY_INITIALIZE") && (n = [...n, "OVERLAY_INITIALIZE"])), e.loadRightBeforeConnectionOpen && (!n.includes("CONNECTION_OPEN") && (n = [...n, "CONNECTION_OPEN"]), !n.includes("OVERLAY_INITIALIZE") && (n = [...n, "OVERLAY_INITIALIZE"])), n)) !(t in a) && (a[t] = []), a[t].push(e)
    }(n)
  }
  i.default.addInterceptor(r)
}

function r(e) {
  if (("CONNECTION_OPEN" === e.type || "OVERLAY_INITIALIZE" === e.type) && (l = !0), e.type in a) {
    let t = [];
    for (let n of a[e.type]) !l && n.neverLoadBeforeConnectionOpen ? t.push(n) : n.inlineRequire().initialize();
    t.length > 0 ? a[e.type] = t : delete a[e.type]
  }
  return !1
}