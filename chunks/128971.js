var i = n("448730"),
  a = n("386015"),
  l = n("232396"),
  s = n("263604");
e.exports = function(e) {
  return function(t) {
    var n = a(t = s(t)) ? l(t) : void 0,
      o = n ? n[0] : t.charAt(0),
      r = n ? i(n, 1).join("") : t.slice(1);
    return o[e]() + r
  }
}