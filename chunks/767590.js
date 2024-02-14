var i = n("890022"),
  a = n("566040"),
  l = n("846165"),
  r = Math.ceil,
  u = Math.max;
e.exports = function(e, t, n) {
  t = (n ? a(e, t, n) : void 0 === t) ? 1 : u(l(t), 0);
  var s = null == e ? 0 : e.length;
  if (!s || t < 1) return [];
  for (var o = 0, d = 0, c = Array(r(s / t)); o < s;) c[d++] = i(e, o, o += t);
  return c
}