"use strict";
n.r(t), n.d(t, {
  isFavoriteSearchEnabled: function() {
    return l
  }
});
var a = n("594174");

function l() {
  var e, t;
  return null !== (t = null === (e = a.default.getCurrentUser()) || void 0 === e ? void 0 : e.isStaff()) && void 0 !== t && t
}