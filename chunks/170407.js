"use strict";
r("426094");
var n, o, i = Function.prototype.toString,
  a = "object" == typeof Reflect && null !== Reflect && Reflect.apply;
if ("function" == typeof a && "function" == typeof Object.defineProperty) try {
  n = Object.defineProperty({}, "length", {
    get: function() {
      throw o
    }
  }), o = {}, a(function() {
    throw 42
  }, null, n)
} catch (t) {
  t !== o && (a = null)
} else a = null;
var u = /^\s*class\b/,
  l = function(t) {
    try {
      var e = i.call(t);
      return u.test(e)
    } catch (t) {
      return !1
    }
  },
  s = function(t) {
    try {
      if (l(t)) return !1;
      return i.call(t), !0
    } catch (t) {
      return !1
    }
  },
  c = Object.prototype.toString,
  p = "function" == typeof Symbol && !!Symbol.toStringTag,
  f = !(0 in [, ]),
  y = function() {
    return !1
  };
if ("object" == typeof document) {
  var h = document.all;
  c.call(h) === c.call(document.all) && (y = function(t) {
    if ((f || !t) && (void 0 === t || "object" == typeof t)) try {
      var e = c.call(t);
      return ("[object HTMLAllCollection]" === e || "[object HTML document.all class]" === e || "[object HTMLCollection]" === e || "[object Object]" === e) && null == t("")
    } catch (t) {}
    return !1
  })
}
t.exports = a ? function(t) {
  if (y(t)) return !0;
  if (!t || "function" != typeof t && "object" != typeof t) return !1;
  try {
    a(t, null, n)
  } catch (t) {
    if (t !== o) return !1
  }
  return !l(t) && s(t)
} : function(t) {
  if (y(t)) return !0;
  if (!t || "function" != typeof t && "object" != typeof t) return !1;
  if (p) return s(t);
  if (l(t)) return !1;
  var e = c.call(t);
  return !!("[object Function]" === e || "[object GeneratorFunction]" === e || /^\[object HTML/.test(e)) && s(t)
}