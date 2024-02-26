"use strict";
n.r(t), n.d(t, {
  isOnboardingDismissed: function() {
    return i
  }
});
var l = n("866227"),
  a = n.n(l),
  s = n("299039");
let i = e => {
  let t = s.default.extractTimestamp(e),
    n = a().isBefore(a(t).add(a.duration(15, "days")));
  return !n
}