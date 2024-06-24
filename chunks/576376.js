function s(e) {
  let t;
  let n = !1;
  return function() {
    for (var s = arguments.length, i = Array(s), a = 0; a < s; a++) i[a] = arguments[a];
    return !n && (n = !0, t = e(...i)), t
  }
}
n.d(t, {
  h: function() {
    return s
  }
}), n(47120)