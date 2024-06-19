function r(t) {
  return t && t.Math == Math ? t : void 0
}
n.d(e, {
  Rf: function() {
    return a
  },
  YO: function() {
    return s
  },
  n2: function() {
    return i
  }
});
let i = "object" == typeof globalThis && r(globalThis) || "object" == typeof window && r(window) || "object" == typeof self && r(self) || "object" == typeof n.g && r(n.g) || function() {
  return this
}() || {};

function a() {
  return i
}

function s(t, e, n) {
  let r = n || i,
    a = r.__SENTRY__ = r.__SENTRY__ || {};
  return a[t] || (a[t] = e())
}