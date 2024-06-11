"use strict";
n.r(t), n.d(t, {
  default: function() {
    return s
  }
});
var a = n("399606"),
  l = n("592125");

function s(e) {
  var t;
  let n = (0, a.useStateFromStores)([l.default], () => l.default.getChannel(e));
  return null !== (t = null == n ? void 0 : n.isPrivate()) && void 0 !== t && t
}