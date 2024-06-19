n.d(e, {
  Cy: function() {
    return m
  },
  HD: function() {
    return u
  },
  J8: function() {
    return p
  },
  Kj: function() {
    return f
  },
  PO: function() {
    return d
  },
  TX: function() {
    return o
  },
  V9: function() {
    return y
  },
  VW: function() {
    return s
  },
  VZ: function() {
    return i
  },
  cO: function() {
    return h
  },
  fm: function() {
    return l
  },
  i2: function() {
    return g
  },
  kK: function() {
    return _
  },
  pt: function() {
    return c
  }
});
let r = Object.prototype.toString;

function i(t) {
  switch (r.call(t)) {
    case "[object Error]":
    case "[object Exception]":
    case "[object DOMException]":
      return !0;
    default:
      return y(t, Error)
  }
}

function a(t, e) {
  return r.call(t) === `[object ${e}]`
}

function s(t) {
  return a(t, "ErrorEvent")
}

function o(t) {
  return a(t, "DOMError")
}

function l(t) {
  return a(t, "DOMException")
}

function u(t) {
  return a(t, "String")
}

function c(t) {
  return null === t || "object" != typeof t && "function" != typeof t
}

function d(t) {
  return a(t, "Object")
}

function h(t) {
  return "undefined" != typeof Event && y(t, Event)
}

function _(t) {
  return "undefined" != typeof Element && y(t, Element)
}

function f(t) {
  return a(t, "RegExp")
}

function p(t) {
  return !!(t && t.then && "function" == typeof t.then)
}

function m(t) {
  return d(t) && "nativeEvent" in t && "preventDefault" in t && "stopPropagation" in t
}

function g(t) {
  return "number" == typeof t && t != t
}

function y(t, e) {
  try {
    return t instanceof e
  } catch (t) {
    return !1
  }
}