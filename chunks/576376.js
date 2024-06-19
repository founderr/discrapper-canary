function s(e) {
  let t;
  let n = !1;
  return function() {
    for (var s = arguments.length, a = Array(s), i = 0; i < s; i++) a[i] = arguments[i];
    return !n && (n = !0, t = e(...a)), t
  }
}
n.d(t, {
  h: function() {
    return s
  }
}), n(47120)