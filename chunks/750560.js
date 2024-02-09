"use strict";
n.r(t), n.d(t, {
  useSubscribeGuildMembers: function() {
    return s
  }
}), n("37983");
var i = n("884691"),
  l = n("917351"),
  a = n.n(l);
n("233736");
var r = n("666020");

function s(e) {
  i.useEffect(() => (a.forEach(e, (e, t) => (0, r.subscribeMembers)(t, e)), () => {
    a.forEach(e, (e, t) => (0, r.unsubscribeMembers)(t, e))
  }), [e])
}