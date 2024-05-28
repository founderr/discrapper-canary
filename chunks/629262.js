"use strict";
i.r(s), i.d(s, {
  default: function() {
    return E
  }
});
var t = i("442837"),
  n = i("592125");

function E(e) {
  return (0, t.useStateFromStoresArray)([n.default], () => e.filter(e => n.default.hasChannel(e.ref_id)), [e])
}