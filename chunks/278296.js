var i = n("60266"),
  o = n("581628"),
  r = n("698273"),
  E = n("725502");
e.exports = function(e, t) {
  return function(n, s) {
    var l = E(n) ? i : o,
      c = t ? t() : {};
    return l(n, e, r(s, 2), c)
  }
}