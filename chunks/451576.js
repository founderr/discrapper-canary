"use strict";
i.r(t), i.d(t, {
  default: function() {
    return a
  }
});
var l = i("399606"),
  n = i("592125");

function a(e) {
  var t;
  let i = (0, l.useStateFromStores)([n.default], () => n.default.getChannel(e));
  return null !== (t = null == i ? void 0 : i.isPrivate()) && void 0 !== t && t
}