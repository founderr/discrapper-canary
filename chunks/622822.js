"use strict";
a.r(t), a.d(t, {
  userNeedsAgeGate: function() {
    return i
  }
});
var n = a("594174"),
  s = a("709054");
let l = new Date("06/16/2020");

function i() {
  let e = n.default.getCurrentUser();
  return null != e && s.default.extractTimestamp(e.id) > l.getTime() && !e.isClaimed() && null == e.nsfwAllowed
}