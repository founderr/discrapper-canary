"use strict";
n.r(e), n.d(e, {
  useSubscribeGuildMembers: function() {
    return d
  }
}), n("37983");
var i = n("884691"),
  u = n("917351"),
  r = n.n(u);
n("233736");
var a = n("666020");

function d(t) {
  i.useEffect(() => (r.forEach(t, (t, e) => (0, a.subscribeMembers)(e, t)), () => {
    r.forEach(t, (t, e) => (0, a.unsubscribeMembers)(e, t))
  }), [t])
}