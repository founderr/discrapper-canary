var e = n(525305),
  o = n(354848),
  i = n(332916),
  u = n(641236)("toStringTag"),
  f = Object,
  a = "Arguments" === i(function() {
    return arguments
  }()),
  c = function(t, r) {
    try {
      return t[r]
    } catch (t) {}
  };
t.exports = e ? i : function(t) {
  var r, n, e;
  return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof(n = c(r = f(t), u)) ? n : a ? i(r) : "Object" === (e = i(r)) && o(r.callee) ? "Arguments" : e
}