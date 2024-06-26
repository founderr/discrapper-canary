var r = n(484155),
  i = n(599773),
  a = n(730179),
  o = Math.min;
e.exports = function(e, t) {
  if ((e = a(e)) < 1 || e > 9007199254740991) return [];
  var n = 4294967295,
    s = o(e, 4294967295);
  t = i(t), e -= 4294967295;
  for (var c = r(s, t); ++n < e;) t(n);
  return c
}