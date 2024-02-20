n("222007"), n("781738"), n("426094"), n("70102"), n("424973");
var r = "function" == typeof Map && Map.prototype,
  a = Object.getOwnPropertyDescriptor && r ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null,
  o = r && a && "function" == typeof a.get ? a.get : null,
  i = r && Map.prototype.forEach,
  s = "function" == typeof Set && Set.prototype,
  c = Object.getOwnPropertyDescriptor && s ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null,
  l = s && c && "function" == typeof c.get ? c.get : null,
  u = s && Set.prototype.forEach,
  d = "function" == typeof WeakMap && WeakMap.prototype ? WeakMap.prototype.has : null,
  p = "function" == typeof WeakSet && WeakSet.prototype ? WeakSet.prototype.has : null,
  f = "function" == typeof WeakRef && WeakRef.prototype ? WeakRef.prototype.deref : null,
  h = Boolean.prototype.valueOf,
  m = Object.prototype.toString,
  v = Function.prototype.toString,
  g = String.prototype.match,
  y = String.prototype.slice,
  b = String.prototype.replace,
  x = String.prototype.toUpperCase,
  S = String.prototype.toLowerCase,
  w = RegExp.prototype.test,
  D = Array.prototype.concat,
  C = Array.prototype.join,
  k = Array.prototype.slice,
  P = Math.floor,
  E = "function" == typeof BigInt ? BigInt.prototype.valueOf : null,
  T = Object.getOwnPropertySymbols,
  M = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? Symbol.prototype.toString : null,
  R = "function" == typeof Symbol && "object" == typeof Symbol.iterator,
  O = "function" == typeof Symbol && Symbol.toStringTag && (typeof Symbol.toStringTag === R ? "object" : "symbol") ? Symbol.toStringTag : null,
  I = Object.prototype.propertyIsEnumerable,
  A = ("function" == typeof Reflect ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(e) {
    return e.__proto__
  } : null);

function L(e, t) {
  if (e === 1 / 0 || e === -1 / 0 || e != e || e && e > -1e3 && e < 1e3 || w.call(/e/, t)) return t;
  var n = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
  if ("number" == typeof e) {
    var r = e < 0 ? -P(-e) : P(e);
    if (r !== e) {
      var a = String(r),
        o = y.call(t, a.length + 1);
      return b.call(a, n, "$&_") + "." + b.call(b.call(o, /([0-9]{3})/g, "$&_"), /_$/, "")
    }
  }
  return b.call(t, n, "$&_")
}
var N = n("246129"),
  j = N.custom,
  F = z(j) ? j : null;

function K(e, t, n) {
  var r = "double" === (n.quoteStyle || t) ? '"' : "'";
  return r + e + r
}
e.exports = function e(t, r, a, s) {
  var c = r || {};
  if (U(c, "quoteStyle") && "single" !== c.quoteStyle && "double" !== c.quoteStyle) throw TypeError('option "quoteStyle" must be "single" or "double"');
  if (U(c, "maxStringLength") && ("number" == typeof c.maxStringLength ? c.maxStringLength < 0 && c.maxStringLength !== 1 / 0 : null !== c.maxStringLength)) throw TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
  var m = !U(c, "customInspect") || c.customInspect;
  if ("boolean" != typeof m && "symbol" !== m) throw TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
  if (U(c, "indent") && null !== c.indent && "	" !== c.indent && !(parseInt(c.indent, 10) === c.indent && c.indent > 0)) throw TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
  if (U(c, "numericSeparator") && "boolean" != typeof c.numericSeparator) throw TypeError('option "numericSeparator", if provided, must be `true` or `false`');
  var x = c.numericSeparator;
  if (void 0 === t) return "undefined";
  if (null === t) return "null";
  if ("boolean" == typeof t) return t ? "true" : "false";
  if ("string" == typeof t) return function e(t, n) {
    if (t.length > n.maxStringLength) {
      var r = t.length - n.maxStringLength;
      return e(y.call(t, 0, n.maxStringLength), n) + ("... " + r + " more character") + (r > 1 ? "s" : "")
    }
    return K(b.call(b.call(t, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, W), "single", n)
  }(t, c);
  if ("number" == typeof t) {
    if (0 === t) return 1 / 0 / t > 0 ? "0" : "-0";
    var w = String(t);
    return x ? L(t, w) : w
  }
  if ("bigint" == typeof t) {
    var P = String(t) + "n";
    return x ? L(t, P) : P
  }
  var T = void 0 === c.depth ? 5 : c.depth;
  if (void 0 === a && (a = 0), a >= T && T > 0 && "object" == typeof t) return _(t) ? "[Array]" : "[Object]";
  var j = function(e, t) {
    var n;
    if ("	" === e.indent) n = "	";
    else {
      if ("number" != typeof e.indent || !(e.indent > 0)) return null;
      n = C.call(Array(e.indent + 1), " ")
    }
    return {
      base: n,
      prev: C.call(Array(t + 1), n)
    }
  }(c, a);
  if (void 0 === s) s = [];
  else if (G(s, t) >= 0) return "[Circular]";

  function B(t, n, r) {
    if (n && (s = k.call(s)).push(n), r) {
      var o = {
        depth: c.depth
      };
      return U(c, "quoteStyle") && (o.quoteStyle = c.quoteStyle), e(t, o, a + 1, s)
    }
    return e(t, c, a + 1, s)
  }
  if ("function" == typeof t && !V(t)) {
    var $ = function(e) {
        if (e.name) return e.name;
        var t = g.call(v.call(e), /^function\s*([\w$]+)/);
        return t ? t[1] : null
      }(t),
      Q = J(t, B);
    return "[Function" + ($ ? ": " + $ : " (anonymous)") + "]" + (Q.length > 0 ? " { " + C.call(Q, ", ") + " }" : "")
  }
  if (z(t)) {
    var ee = R ? b.call(String(t), /^(Symbol\(.*\))_[^)]*$/, "$1") : M.call(t);
    return "object" != typeof t || R ? ee : q(ee)
  }
  if (function(e) {
      return !!e && "object" == typeof e && (!!("undefined" != typeof HTMLElement && e instanceof HTMLElement) || "string" == typeof e.nodeName && "function" == typeof e.getAttribute)
    }(t)) {
    for (var et = "<" + S.call(String(t.nodeName)), en = t.attributes || [], er = 0; er < en.length; er++) et += " " + en[er].name + "=" + K(function(e) {
      return b.call(String(e), /"/g, "&quot;")
    }(en[er].value), "double", c);
    return et += ">", t.childNodes && t.childNodes.length && (et += "..."), et += "</" + S.call(String(t.nodeName)) + ">"
  }
  if (_(t)) {
    if (0 === t.length) return "[]";
    var ea = J(t, B);
    return j && ! function(e) {
      for (var t = 0; t < e.length; t++)
        if (G(e[t], "\n") >= 0) return !1;
      return !0
    }(ea) ? "[" + X(ea, j) + "]" : "[ " + C.call(ea, ", ") + " ]"
  }
  if (function(e) {
      return "[object Error]" === H(e) && (!O || !("object" == typeof e && O in e))
    }(t)) {
    var eo = J(t, B);
    return "cause" in Error.prototype || !("cause" in t) || I.call(t, "cause") ? 0 === eo.length ? "[" + String(t) + "]" : "{ [" + String(t) + "] " + C.call(eo, ", ") + " }" : "{ [" + String(t) + "] " + C.call(D.call("[cause]: " + B(t.cause), eo), ", ") + " }"
  }
  if ("object" == typeof t && m) {
    if (F && "function" == typeof t[F] && N) return N(t, {
      depth: T - a
    });
    if ("symbol" !== m && "function" == typeof t.inspect) return t.inspect()
  }
  if (function(e) {
      if (!o || !e || "object" != typeof e) return !1;
      try {
        o.call(e);
        try {
          l.call(e)
        } catch (e) {
          return !0
        }
        return e instanceof Map
      } catch (e) {}
      return !1
    }(t)) {
    var ei = [];
    return i && i.call(t, function(e, n) {
      ei.push(B(n, t, !0) + " => " + B(e, t))
    }), Y("Map", o.call(t), ei, j)
  }
  if (function(e) {
      if (!l || !e || "object" != typeof e) return !1;
      try {
        l.call(e);
        try {
          o.call(e)
        } catch (e) {
          return !0
        }
        return e instanceof Set
      } catch (e) {}
      return !1
    }(t)) {
    var es = [];
    return u && u.call(t, function(e) {
      es.push(B(e, t))
    }), Y("Set", l.call(t), es, j)
  }
  if (function(e) {
      if (!d || !e || "object" != typeof e) return !1;
      try {
        d.call(e, d);
        try {
          p.call(e, p)
        } catch (e) {
          return !0
        }
        return e instanceof WeakMap
      } catch (e) {}
      return !1
    }(t)) return Z("WeakMap");
  if (function(e) {
      if (!p || !e || "object" != typeof e) return !1;
      try {
        p.call(e, p);
        try {
          d.call(e, d)
        } catch (e) {
          return !0
        }
        return e instanceof WeakSet
      } catch (e) {}
      return !1
    }(t)) return Z("WeakSet");
  if (function(e) {
      if (!f || !e || "object" != typeof e) return !1;
      try {
        return f.call(e), !0
      } catch (e) {}
      return !1
    }(t)) return Z("WeakRef");
  if (function(e) {
      return "[object Number]" === H(e) && (!O || !("object" == typeof e && O in e))
    }(t)) return q(B(Number(t)));
  if (function(e) {
      if (!e || "object" != typeof e || !E) return !1;
      try {
        return E.call(e), !0
      } catch (e) {}
      return !1
    }(t)) return q(B(E.call(t)));
  if (function(e) {
      return "[object Boolean]" === H(e) && (!O || !("object" == typeof e && O in e))
    }(t)) return q(h.call(t));
  if (function(e) {
      return "[object String]" === H(e) && (!O || !("object" == typeof e && O in e))
    }(t)) return q(B(String(t)));
  if ("undefined" != typeof window && t === window) return "{ [object Window] }";
  if (t === n.g) return "{ [object globalThis] }";
  if (! function(e) {
      return "[object Date]" === H(e) && (!O || !("object" == typeof e && O in e))
    }(t) && !V(t)) {
    var ec = J(t, B),
      el = A ? A(t) === Object.prototype : t instanceof Object || t.constructor === Object,
      eu = t instanceof Object ? "" : "null prototype",
      ed = !el && O && Object(t) === t && O in t ? y.call(H(t), 8, -1) : eu ? "Object" : "",
      ep = (el || "function" != typeof t.constructor ? "" : t.constructor.name ? t.constructor.name + " " : "") + (ed || eu ? "[" + C.call(D.call([], ed || [], eu || []), ": ") + "] " : "");
    return 0 === ec.length ? ep + "{}" : j ? ep + "{" + X(ec, j) + "}" : ep + "{ " + C.call(ec, ", ") + " }"
  }
  return String(t)
};

function _(e) {
  return "[object Array]" === H(e) && (!O || !("object" == typeof e && O in e))
}

function V(e) {
  return "[object RegExp]" === H(e) && (!O || !("object" == typeof e && O in e))
}

function z(e) {
  if (R) return e && "object" == typeof e && e instanceof Symbol;
  if ("symbol" == typeof e) return !0;
  if (!e || "object" != typeof e || !M) return !1;
  try {
    return M.call(e), !0
  } catch (e) {}
  return !1
}
var B = Object.prototype.hasOwnProperty || function(e) {
  return e in this
};

function U(e, t) {
  return B.call(e, t)
}

function H(e) {
  return m.call(e)
}

function G(e, t) {
  if (e.indexOf) return e.indexOf(t);
  for (var n = 0, r = e.length; n < r; n++)
    if (e[n] === t) return n;
  return -1
}

function W(e) {
  var t = e.charCodeAt(0),
    n = {
      8: "b",
      9: "t",
      10: "n",
      12: "f",
      13: "r"
    } [t];
  return n ? "\\" + n : "\\x" + (t < 16 ? "0" : "") + x.call(t.toString(16))
}

function q(e) {
  return "Object(" + e + ")"
}

function Z(e) {
  return e + " { ? }"
}

function Y(e, t, n, r) {
  return e + " (" + t + ") {" + (r ? X(n, r) : C.call(n, ", ")) + "}"
}

function X(e, t) {
  if (0 === e.length) return "";
  var n = "\n" + t.prev + t.base;
  return n + C.call(e, "," + n) + "\n" + t.prev
}

function J(e, t) {
  var n, r = _(e),
    a = [];
  if (r) {
    a.length = e.length;
    for (var o = 0; o < e.length; o++) a[o] = U(e, o) ? t(e[o], e) : ""
  }
  var i = "function" == typeof T ? T(e) : [];
  if (R) {
    n = {};
    for (var s = 0; s < i.length; s++) n["$" + i[s]] = i[s]
  }
  for (var c in e) {
    if (!!U(e, c)) {
      if (!r || String(Number(c)) !== c || !(c < e.length)) {
        if (R && n["$" + c] instanceof Symbol) continue;
        else w.call(/[^\w$]/, c) ? a.push(t(c, e) + ": " + t(e[c], e)) : a.push(c + ": " + t(e[c], e))
      }
    }
  }
  if ("function" == typeof T)
    for (var l = 0; l < i.length; l++) I.call(e, i[l]) && a.push("[" + t(i[l]) + "]: " + t(e[i[l]], e));
  return a
}