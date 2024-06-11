"use strict";
n.r(t);
var r = n("844511"),
  i = n("364555");
t.default = function(e, t, n, a) {
  var o = !n;
  n || (n = {});
  for (var s = -1, u = t.length; ++s < u;) {
    var c = t[s],
      l = a ? a(n[c], e[c], c, n, e) : void 0;
    void 0 === l && (l = e[c]), o ? (0, i.default)(n, c, l) : (0, r.default)(n, c, l)
  }
  return n
}