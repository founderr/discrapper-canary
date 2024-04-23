"use strict";
n.r(t), n.d(t, {
  useNotificationCenterItemAcked: function() {
    return i
  }
});
var s = n("442837"),
  l = n("774807"),
  a = n("178480");
let i = (e, t) => {
  let n = (0, s.useStateFromStores)([l.default], () => l.default.isLocalItemAcked(e));
  return !e.forceUnacked && (n || (0, a.isRemoteAcked)(e, t))
}