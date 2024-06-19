var e = r(161581),
  o = r(972277),
  i = r(740362),
  u = r(457507),
  c = r(400957),
  f = r(769992),
  a = e.Symbol,
  p = o("wks"),
  s = f ? a.for || a : a && a.withoutSetter || u;
t.exports = function(t) {
  return !i(p, t) && (p[t] = c && i(a, t) ? a[t] : s("Symbol." + t)), p[t]
}