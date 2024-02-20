"use strict";
n("424973"), n("70102");
var r = n("890741"),
  a = n("380756"),
  i = n("280973"),
  o = Object.prototype.hasOwnProperty,
  s = {
    brackets: function(e) {
      return e + "[]"
    },
    comma: "comma",
    indices: function(e, t) {
      return e + "[" + t + "]"
    },
    repeat: function(e) {
      return e
    }
  },
  c = Array.isArray,
  l = Array.prototype.push,
  u = function(e, t) {
    l.apply(e, c(t) ? t : [t])
  },
  d = Date.prototype.toISOString,
  p = i.default,
  f = {
    addQueryPrefix: !1,
    allowDots: !1,
    charset: "utf-8",
    charsetSentinel: !1,
    delimiter: "&",
    encode: !0,
    encoder: a.encode,
    encodeValuesOnly: !1,
    format: p,
    formatter: i.formatters[p],
    indices: !1,
    serializeDate: function(e) {
      return d.call(e)
    },
    skipNulls: !1,
    strictNullHandling: !1
  },
  m = {},
  h = function e(t, n, i, o, s, l, d, p, h, v, g, y, b, x, S, w) {
    for (var D, C, k = t, P = w, E = 0, T = !1; void 0 !== (P = P.get(m)) && !T;) {
      var M = P.get(t);
      if (E += 1, void 0 !== M) {
        if (M === E) throw RangeError("Cyclic object value");
        T = !0
      }
      void 0 === P.get(m) && (E = 0)
    }
    if ("function" == typeof p ? k = p(n, k) : k instanceof Date ? k = g(k) : "comma" === i && c(k) && (k = a.maybeMap(k, function(e) {
        return e instanceof Date ? g(e) : e
      })), null === k) {
      if (s) return d && !x ? d(n, f.encoder, S, "key", y) : n;
      k = ""
    }
    if ("string" == typeof(D = k) || "number" == typeof D || "boolean" == typeof D || "symbol" == typeof D || "bigint" == typeof D || a.isBuffer(k)) return d ? [b(x ? n : d(n, f.encoder, S, "key", y)) + "=" + b(d(k, f.encoder, S, "value", y))] : [b(n) + "=" + b(String(k))];
    var R = [];
    if (void 0 === k) return R;
    if ("comma" === i && c(k)) x && d && (k = a.maybeMap(k, d)), C = [{
      value: k.length > 0 ? k.join(",") || null : void 0
    }];
    else if (c(p)) C = p;
    else {
      var I = Object.keys(k);
      C = h ? I.sort(h) : I
    }
    for (var O = o && c(k) && 1 === k.length ? n + "[]" : n, A = 0; A < C.length; ++A) {
      var L = C[A],
        N = "object" == typeof L && void 0 !== L.value ? L.value : k[L];
      if (!l || null !== N) {
        var F = c(k) ? "function" == typeof i ? i(O, L) : O : O + (v ? "." + L : "[" + L + "]");
        w.set(t, E);
        var j = r();
        j.set(m, w), u(R, e(N, F, i, o, s, l, "comma" === i && x && c(k) ? null : d, p, h, v, g, y, b, x, S, j))
      }
    }
    return R
  },
  v = function(e) {
    if (!e) return f;
    if (null !== e.encoder && void 0 !== e.encoder && "function" != typeof e.encoder) throw TypeError("Encoder has to be a function.");
    var t = e.charset || f.charset;
    if (void 0 !== e.charset && "utf-8" !== e.charset && "iso-8859-1" !== e.charset) throw TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
    var n = i.default;
    if (void 0 !== e.format) {
      if (!o.call(i.formatters, e.format)) throw TypeError("Unknown format option provided.");
      n = e.format
    }
    var r = i.formatters[n],
      a = f.filter;
    return ("function" == typeof e.filter || c(e.filter)) && (a = e.filter), {
      addQueryPrefix: "boolean" == typeof e.addQueryPrefix ? e.addQueryPrefix : f.addQueryPrefix,
      allowDots: void 0 === e.allowDots ? f.allowDots : !!e.allowDots,
      charset: t,
      charsetSentinel: "boolean" == typeof e.charsetSentinel ? e.charsetSentinel : f.charsetSentinel,
      delimiter: void 0 === e.delimiter ? f.delimiter : e.delimiter,
      encode: "boolean" == typeof e.encode ? e.encode : f.encode,
      encoder: "function" == typeof e.encoder ? e.encoder : f.encoder,
      encodeValuesOnly: "boolean" == typeof e.encodeValuesOnly ? e.encodeValuesOnly : f.encodeValuesOnly,
      filter: a,
      format: n,
      formatter: r,
      serializeDate: "function" == typeof e.serializeDate ? e.serializeDate : f.serializeDate,
      skipNulls: "boolean" == typeof e.skipNulls ? e.skipNulls : f.skipNulls,
      sort: "function" == typeof e.sort ? e.sort : null,
      strictNullHandling: "boolean" == typeof e.strictNullHandling ? e.strictNullHandling : f.strictNullHandling
    }
  };
e.exports = function(e, t) {
  var n, a, i, o = e,
    l = v(t);
  "function" == typeof l.filter ? o = (a = l.filter)("", o) : c(l.filter) && (n = a = l.filter);
  var d = [];
  if ("object" != typeof o || null === o) return "";
  i = t && t.arrayFormat in s ? t.arrayFormat : t && "indices" in t ? t.indices ? "indices" : "repeat" : "indices";
  var p = s[i];
  if (t && "commaRoundTrip" in t && "boolean" != typeof t.commaRoundTrip) throw TypeError("`commaRoundTrip` must be a boolean, or absent");
  var f = "comma" === p && t && t.commaRoundTrip;
  !n && (n = Object.keys(o)), l.sort && n.sort(l.sort);
  for (var m = r(), g = 0; g < n.length; ++g) {
    var y = n[g];
    (!l.skipNulls || null !== o[y]) && u(d, h(o[y], y, p, f, l.strictNullHandling, l.skipNulls, l.encode ? l.encoder : null, l.filter, l.sort, l.allowDots, l.serializeDate, l.format, l.formatter, l.encodeValuesOnly, l.charset, m))
  }
  var b = d.join(l.delimiter),
    x = !0 === l.addQueryPrefix ? "?" : "";
  return l.charsetSentinel && ("iso-8859-1" === l.charset ? x += "utf8=%26%2310003%3B&" : x += "utf8=%E2%9C%93&"), b.length > 0 ? x + b : ""
}