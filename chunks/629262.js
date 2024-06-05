"use strict";
i.r(s), i.d(s, {
  default: function() {
    return E
  }
});
var n = i("442837"),
  t = i("592125");

function E(e) {
  return (0, n.useStateFromStoresArray)([t.default], () => e.filter(e => t.default.hasChannel(e.ref_id)), [e])
}