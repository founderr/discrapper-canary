var s = a("484155"),
  l = a("599773"),
  r = a("730179"),
  n = Math.min;
e.exports = function(e, t) {
  if ((e = r(e)) < 1 || e > 9007199254740991) return [];
  var a = 4294967295,
    i = n(e, 4294967295);
  t = l(t), e -= 4294967295;
  for (var o = s(i, t); ++a < e;) t(a);
  return o
}