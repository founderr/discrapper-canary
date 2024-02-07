r("424973");
var n = r("285162"),
  u = r("733228"),
  o = r("383633"),
  a = Object.prototype.hasOwnProperty;
e.exports = function(e) {
  if (!n(e)) return o(e);
  var t = u(e),
    r = [];
  for (var i in e) !("constructor" == i && (t || !a.call(e, i))) && r.push(i);
  return r
}