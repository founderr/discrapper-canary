"use strict";
var r = n("418855"),
  a = n("161323");
e.exports = function(e, t, n, o) {
  try {
    return o ? t(r(n)[0], n[1]) : t(n)
  } catch (t) {
    a(e, "throw", t)
  }
}