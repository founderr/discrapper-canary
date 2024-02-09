"use strict";
E.r(t), E.d(t, {
  default: function() {
    return a
  }
});
var _ = E("446674"),
  s = E("42203");

function a(e) {
  let t = (0, _.useStateFromStoresArray)([s.default], () => e.filter(e => s.default.hasChannel(e.ref_id)), [e]);
  return t
}