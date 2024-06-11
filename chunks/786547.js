"use strict";
n.r(t);
var r = n("924102"),
  i = n("675717");
t.default = function(e, t, n) {
  var a = !0,
    o = !0;
  if ("function" != typeof e) throw TypeError("Expected a function");
  return (0, i.default)(n) && (a = "leading" in n ? !!n.leading : a, o = "trailing" in n ? !!n.trailing : o), (0, r.default)(e, t, {
    leading: a,
    maxWait: t,
    trailing: o
  })
}