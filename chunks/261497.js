var r = e("306551"),
  u = e("952133"),
  o = e("543066"),
  i = 0 / 0,
  a = /^[-+]0x[0-9a-f]+$/i,
  f = /^0b[01]+$/i,
  c = /^0o[0-7]+$/i,
  s = parseInt;
t.exports = function(t) {
  if ("number" == typeof t) return t;
  if (o(t)) return i;
  if (u(t)) {
    var n = "function" == typeof t.valueOf ? t.valueOf() : t;
    t = u(n) ? n + "" : n
  }
  if ("string" != typeof t) return 0 === t ? t : +t;
  t = r(t);
  var e = f.test(t);
  return e || c.test(t) ? s(t.slice(2), e ? 2 : 8) : a.test(t) ? i : +t
}