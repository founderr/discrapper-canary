var e = r(740362),
  o = r(666061),
  i = r(347722),
  u = r(97131);
t.exports = function(t, n, r) {
  for (var c = o(n), f = u.f, a = i.f, p = 0; p < c.length; p++) {
    var s = c[p];
    !e(t, s) && !(r && e(r, s)) && f(t, s, a(n, s))
  }
}