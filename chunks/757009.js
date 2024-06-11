var i = n("785902"),
  E = n("800128"),
  I = n("256098"),
  S = n("290677");
e.exports = function(e, t) {
  return function(n, r) {
    var _ = S(n) ? i : E,
      s = t ? t() : {};
    return _(n, e, I(r, 2), s)
  }
}