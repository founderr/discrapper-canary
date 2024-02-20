"use strict";
var r = n("868822"),
  a = n("418855"),
  o = n("47361");
e.exports = function(e, t, n) {
  var i, u;
  a(e);
  try {
    if (!(i = o(e, "return"))) {
      if ("throw" === t) throw n;
      return n
    }
    i = r(i, e)
  } catch (e) {
    u = !0, i = e
  }
  if ("throw" === t) throw n;
  if (u) throw i;
  return a(i), n
}