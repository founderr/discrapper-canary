"use strict";
l.r(t), l.d(t, {
  default: function() {
    return a
  }
});
var i = l("399606"),
  n = l("592125");

function a(e) {
  var t;
  let l = (0, i.useStateFromStores)([n.default], () => n.default.getChannel(e));
  return null !== (t = null == l ? void 0 : l.isPrivate()) && void 0 !== t && t
}