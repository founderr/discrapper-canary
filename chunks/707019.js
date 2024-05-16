var n = r("801282"),
  i = r("900013"),
  a = r("730179"),
  s = Math.ceil,
  o = Math.max;
t.exports = function(t, e, r) {
  e = (r ? i(t, e, r) : void 0 === e) ? 1 : o(a(e), 0);
  var u = null == t ? 0 : t.length;
  if (!u || e < 1) return [];
  for (var c = 0, h = 0, l = Array(s(u / e)); c < u;) l[h++] = n(t, c, c += e);
  return l
}