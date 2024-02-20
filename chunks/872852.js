"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
});
var r = n("386242"),
  a = n("559610"),
  o = n("130002");

function i(e) {
  (0, a.default)(1, arguments);
  var t = (0, r.default)(e),
    n = t.getUTCFullYear(),
    i = new Date(0);
  i.setUTCFullYear(n + 1, 0, 4), i.setUTCHours(0, 0, 0, 0);
  var u = (0, o.default)(i),
    s = new Date(0);
  s.setUTCFullYear(n, 0, 4), s.setUTCHours(0, 0, 0, 0);
  var l = (0, o.default)(s);
  return t.getTime() >= u.getTime() ? n + 1 : t.getTime() >= l.getTime() ? n : n - 1
}