var i = n(448730),
  s = n(386015),
  l = n(232396),
  o = n(263604);
e.exports = function(e) {
  return function(t) {
    var n = s(t = o(t)) ? l(t) : void 0,
      a = n ? n[0] : t.charAt(0),
      r = n ? i(n, 1).join("") : t.slice(1);
    return a[e]() + r
  }
}