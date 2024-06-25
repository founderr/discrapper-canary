function n(e) {
  let t;
  let s = !1;
  return function() {
    for (var n = arguments.length, a = Array(n), i = 0; i < n; i++) a[i] = arguments[i];
    return !s && (s = !0, t = e(...a)), t
  }
}
s.d(t, {
  h: function() {
    return n
  }
}), s(47120)