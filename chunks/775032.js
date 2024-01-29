"use strict";
a.r(t), a.d(t, {
  default: function() {
    return n
  }
});
var s = a("446674"),
  i = a("697218");

function n() {
  let e = (0, s.useStateFromStores)([i.default], () => {
    var e;
    return null === (e = i.default.getCurrentUser()) || void 0 === e ? void 0 : e.nsfwAllowed
  });
  return e
}