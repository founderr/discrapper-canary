"use strict";
n.r(e), n.d(e, {
  useSubscribeGuildMembers: function() {
    return d
  }
}), n("37983");
var i = n("884691"),
  u = n("917351"),
  a = n.n(u);
n("233736");
var r = n("666020");

function d(t) {
  i.useEffect(() => (a.forEach(t, (t, e) => (0, r.subscribeMembers)(e, t)), () => {
    a.forEach(t, (t, e) => (0, r.unsubscribeMembers)(e, t))
  }), [t])
}