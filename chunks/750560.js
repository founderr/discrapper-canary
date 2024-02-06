"use strict";
n.r(t), n.d(t, {
  useSubscribeGuildMembers: function() {
    return l
  }
}), n("37983");
var i = n("884691"),
  r = n("917351"),
  o = n.n(r);
n("233736");
var s = n("666020");

function l(e) {
  i.useEffect(() => (o.forEach(e, (e, t) => (0, s.subscribeMembers)(t, e)), () => {
    o.forEach(e, (e, t) => (0, s.unsubscribeMembers)(t, e))
  }), [e])
}