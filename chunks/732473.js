"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
});
var r = n("386242"),
  a = n("559610"),
  o = n("567703");

function i(e, t) {
  (0, a.default)(2, arguments);
  var n = (0, o.default)(t);
  n % 7 == 0 && (n -= 7);
  var i = (0, r.default)(e),
    u = i.getUTCDay(),
    s = n % 7,
    l = ((s + 7) % 7 < 1 ? 7 : 0) + n - u;
  return i.setUTCDate(i.getUTCDate() + l), i
}