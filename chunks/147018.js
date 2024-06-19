var e = r(161581),
  o = r(347722).f,
  i = r(251069),
  u = r(859209),
  c = r(492424),
  f = r(381740),
  a = r(474180);
t.exports = function(t, n) {
  var r, p, s, l, v, y = t.target,
    b = t.global,
    h = t.stat;
  if (r = b ? e : h ? e[y] || c(y, {}) : (e[y] || {}).prototype)
    for (p in n) {
      if (l = n[p], s = t.dontCallGetSet ? (v = o(r, p)) && v.value : r[p], !a(b ? p : y + (h ? "." : "#") + p, t.forced) && void 0 !== s) {
        if (typeof l == typeof s) continue;
        f(l, s)
      }(t.sham || s && s.sham) && i(l, "sham", !0), u(r, p, l, t)
    }
}