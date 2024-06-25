var r = n(484155),
  a = n(599773),
  i = n(730179),
  o = Math.min;
e.exports = function(e, t) {
  if ((e = i(e)) < 1 || e > 9007199254740991) return [];
  var n = 4294967295,
    s = o(e, 4294967295);
  t = a(t), e -= 4294967295;
  for (var c = r(s, t); ++n < e;) t(n);
  return c
}