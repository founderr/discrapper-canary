var a = l("484155"),
  s = l("599773"),
  r = l("730179"),
  n = Math.min;
e.exports = function(e, t) {
  if ((e = r(e)) < 1 || e > 9007199254740991) return [];
  var l = 4294967295,
    i = n(e, 4294967295);
  t = s(t), e -= 4294967295;
  for (var o = a(i, t); ++l < e;) t(l);
  return o
}