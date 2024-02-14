"use strict";
var n = e("868822"),
  i = e("418855"),
  o = e("47361");
t.exports = function(t, r, e) {
  var u, a;
  i(t);
  try {
    if (!(u = o(t, "return"))) {
      if ("throw" === r) throw e;
      return e
    }
    u = n(u, t)
  } catch (t) {
    a = !0, u = t
  }
  if ("throw" === r) throw e;
  if (a) throw u;
  return i(u), e
}