var n = t(484155),
  a = t(599773),
  r = t(730179),
  i = Math.min;
e.exports = function(e, s) {
  if ((e = r(e)) < 1 || e > 9007199254740991) return [];
  var t = 4294967295,
    l = i(e, 4294967295);
  s = a(s), e -= 4294967295;
  for (var o = n(l, s); ++t < e;) s(t);
  return o
}