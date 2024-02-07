e = r.nmd(e);
var n = r("690516"),
  u = "object" == typeof t && t && !t.nodeType && t,
  o = u && "object" == typeof e && e && !e.nodeType && e,
  a = o && o.exports === u ? n.Buffer : void 0,
  i = a ? a.allocUnsafe : void 0;
e.exports = function(e, t) {
  if (t) return e.slice();
  var r = e.length,
    n = i ? i(r) : new e.constructor(r);
  return e.copy(n), n
}