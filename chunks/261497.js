var r = n("306551"),
  o = n("952133"),
  l = n("543066"),
  i = 0 / 0,
  a = /^[-+]0x[0-9a-f]+$/i,
  s = /^0b[01]+$/i,
  u = /^0o[0-7]+$/i,
  c = parseInt;
e.exports = function(e) {
  if ("number" == typeof e) return e;
  if (l(e)) return i;
  if (o(e)) {
    var t = "function" == typeof e.valueOf ? e.valueOf() : e;
    e = o(t) ? t + "" : t
  }
  if ("string" != typeof e) return 0 === e ? e : +e;
  e = r(e);
  var n = s.test(e);
  return n || u.test(e) ? c(e.slice(2), n ? 2 : 8) : a.test(e) ? i : +e
}