"use strict";
n.r(t), n.d(t, {
  useSubscribeToGuildMemberUpdates: function() {
    return s
  }
});
var a = n("470079"),
  l = n("941028");

function s(e) {
  a.useEffect(() => (l.subscribeToMemberUpdates(e), () => {
    l.unsubscribeFromMemberUpdates(e)
  }), [e])
}