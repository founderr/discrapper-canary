"use strict";
a.r(t), a.d(t, {
  default: function() {
    return n
  }
});
var l = a("703656"),
  s = a("981631");

function n() {
  let e = (0, l.getHistory)();
  e.length > 0 ? e.goBack() : (0, l.transitionTo)(s.Routes.ME)
}