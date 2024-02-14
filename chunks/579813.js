"use strict";
var n = e("418855"),
  i = e("161323");
t.exports = function(t, r, e, o) {
  try {
    return o ? r(n(e)[0], e[1]) : r(e)
  } catch (r) {
    i(t, "throw", r)
  }
}