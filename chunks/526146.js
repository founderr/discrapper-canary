"use strict";
n.r(t), n.d(t, {
  useNotificationCenterItemAcked: function() {
    return i
  }
});
var a = n("442837"),
  l = n("774807"),
  s = n("178480");
let i = (e, t) => {
  let n = (0, a.useStateFromStores)([l.default], () => l.default.isLocalItemAcked(e));
  return !e.forceUnacked && (n || (0, s.isRemoteAcked)(e, t))
}