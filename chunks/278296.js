var i = r("60266"),
  o = r("581628"),
  u = r("698273"),
  e = r("725502");
t.exports = function(t, n) {
  return function(r, s) {
    var a = e(r) ? i : o,
      h = n ? n() : {};
    return a(r, t, u(s, 2), h)
  }
}