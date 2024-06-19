n.d(t, {
  l: function() {
    return a
  }
}), n(724458);
var l = n(468194);

function a(e, t) {
  for (var n = arguments.length, a = Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++) a[i - 2] = arguments[i];
  let r = a.reduce((e, t) => e + (0, l.De)(t), ""),
    s = e["".concat(t).concat(r)];
  return null == s ? "" : s
}