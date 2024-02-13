var a = n("890022"),
  l = n("566040"),
  r = n("846165"),
  i = Math.ceil,
  u = Math.max;
e.exports = function(e, t, n) {
  t = (n ? l(e, t, n) : void 0 === t) ? 1 : u(r(t), 0);
  var s = null == e ? 0 : e.length;
  if (!s || t < 1) return [];
  for (var o = 0, d = 0, c = Array(i(s / t)); o < s;) c[d++] = a(e, o, o += t);
  return c
}