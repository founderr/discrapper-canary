var a = s("484155"),
  l = s("599773"),
  r = s("730179"),
  n = Math.min;
e.exports = function(e, t) {
  if ((e = r(e)) < 1 || e > 9007199254740991) return [];
  var s = 4294967295,
    i = n(e, 4294967295);
  t = l(t), e -= 4294967295;
  for (var o = a(i, t); ++s < e;) t(s);
  return o
}