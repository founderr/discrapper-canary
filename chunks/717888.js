var n = s(484155),
  r = s(599773),
  a = s(730179),
  i = Math.min;
e.exports = function(e, t) {
  if ((e = a(e)) < 1 || e > 9007199254740991) return [];
  var s = 4294967295,
    l = i(e, 4294967295);
  t = r(t), e -= 4294967295;
  for (var o = n(l, t); ++s < e;) t(s);
  return o
}