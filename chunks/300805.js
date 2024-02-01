"use strict";
n("424973"), n("70102");
var r = n("890741"),
  i = n("380756"),
  o = n("280973"),
  s = Object.prototype.hasOwnProperty,
  a = {
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
  u = Array.prototype.push,
  l = function(e, t) {
    u.apply(e, c(t) ? t : [t])
  },
  d = Date.prototype.toISOString,
  f = o.default,
  p = {
    addQueryPrefix: !1,
    allowDots: !1,
    charset: "utf-8",
    charsetSentinel: !1,
    delimiter: "&",
    encode: !0,
    encoder: i.encode,
    encodeValuesOnly: !1,
    format: f,
    formatter: o.formatters[f],
    indices: !1,
    serializeDate: function(e) {
      return d.call(e)
    },
    skipNulls: !1,
    strictNullHandling: !1
  },
  h = {},
  v = function e(t, n, o, s, a, u, d, f, v, g, b, m, y, x, w, S) {
    for (var k, E, _ = t, M = S, D = 0, C = !1; void 0 !== (M = M.get(h)) && !C;) {
      var P = M.get(t);
      if (D += 1, void 0 !== P) {
        if (P === D) throw RangeError("Cyclic object value");
        C = !0
      }
      void 0 === M.get(h) && (D = 0)
    }
    if ("function" == typeof f ? _ = f(n, _) : _ instanceof Date ? _ = b(_) : "comma" === o && c(_) && (_ = i.maybeMap(_, function(e) {
        return e instanceof Date ? b(e) : e
      })), null === _) {
      if (a) return d && !x ? d(n, p.encoder, w, "key", m) : n;
      _ = ""
    }
    if ("string" == typeof(k = _) || "number" == typeof k || "boolean" == typeof k || "symbol" == typeof k || "bigint" == typeof k || i.isBuffer(_)) return d ? [y(x ? n : d(n, p.encoder, w, "key", m)) + "=" + y(d(_, p.encoder, w, "value", m))] : [y(n) + "=" + y(String(_))];
    var T = [];
    if (void 0 === _) return T;
    if ("comma" === o && c(_)) x && d && (_ = i.maybeMap(_, d)), E = [{
      value: _.length > 0 ? _.join(",") || null : void 0
    }];
    else if (c(f)) E = f;
    else {
      var A = Object.keys(_);
      E = v ? A.sort(v) : A
    }
    for (var R = s && c(_) && 1 === _.length ? n + "[]" : n, I = 0; I < E.length; ++I) {
      var O = E[I],
        j = "object" == typeof O && void 0 !== O.value ? O.value : _[O];
      if (!u || null !== j) {
        var L = c(_) ? "function" == typeof o ? o(R, O) : R : R + (g ? "." + O : "[" + O + "]");
        S.set(t, D);
        var N = r();
        N.set(h, S), l(T, e(j, L, o, s, a, u, "comma" === o && x && c(_) ? null : d, f, v, g, b, m, y, x, w, N))
      }
    }
    return T
  },
  g = function(e) {
    if (!e) return p;
    if (null !== e.encoder && void 0 !== e.encoder && "function" != typeof e.encoder) throw TypeError("Encoder has to be a function.");
    var t = e.charset || p.charset;
    if (void 0 !== e.charset && "utf-8" !== e.charset && "iso-8859-1" !== e.charset) throw TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
    var n = o.default;
    if (void 0 !== e.format) {
      if (!s.call(o.formatters, e.format)) throw TypeError("Unknown format option provided.");
      n = e.format
    }
    var r = o.formatters[n],
      i = p.filter;
    return ("function" == typeof e.filter || c(e.filter)) && (i = e.filter), {
      addQueryPrefix: "boolean" == typeof e.addQueryPrefix ? e.addQueryPrefix : p.addQueryPrefix,
      allowDots: void 0 === e.allowDots ? p.allowDots : !!e.allowDots,
      charset: t,
      charsetSentinel: "boolean" == typeof e.charsetSentinel ? e.charsetSentinel : p.charsetSentinel,
      delimiter: void 0 === e.delimiter ? p.delimiter : e.delimiter,
      encode: "boolean" == typeof e.encode ? e.encode : p.encode,
      encoder: "function" == typeof e.encoder ? e.encoder : p.encoder,
      encodeValuesOnly: "boolean" == typeof e.encodeValuesOnly ? e.encodeValuesOnly : p.encodeValuesOnly,
      filter: i,
      format: n,
      formatter: r,
      serializeDate: "function" == typeof e.serializeDate ? e.serializeDate : p.serializeDate,
      skipNulls: "boolean" == typeof e.skipNulls ? e.skipNulls : p.skipNulls,
      sort: "function" == typeof e.sort ? e.sort : null,
      strictNullHandling: "boolean" == typeof e.strictNullHandling ? e.strictNullHandling : p.strictNullHandling
    }
  };
e.exports = function(e, t) {
  var n, i, o, s = e,
    u = g(t);
  "function" == typeof u.filter ? s = (i = u.filter)("", s) : c(u.filter) && (n = i = u.filter);
  var d = [];
  if ("object" != typeof s || null === s) return "";
  o = t && t.arrayFormat in a ? t.arrayFormat : t && "indices" in t ? t.indices ? "indices" : "repeat" : "indices";
  var f = a[o];
  if (t && "commaRoundTrip" in t && "boolean" != typeof t.commaRoundTrip) throw TypeError("`commaRoundTrip` must be a boolean, or absent");
  var p = "comma" === f && t && t.commaRoundTrip;
  !n && (n = Object.keys(s)), u.sort && n.sort(u.sort);
  for (var h = r(), b = 0; b < n.length; ++b) {
    var m = n[b];
    (!u.skipNulls || null !== s[m]) && l(d, v(s[m], m, f, p, u.strictNullHandling, u.skipNulls, u.encode ? u.encoder : null, u.filter, u.sort, u.allowDots, u.serializeDate, u.format, u.formatter, u.encodeValuesOnly, u.charset, h))
  }
  var y = d.join(u.delimiter),
    x = !0 === u.addQueryPrefix ? "?" : "";
  return u.charsetSentinel && ("iso-8859-1" === u.charset ? x += "utf8=%26%2310003%3B&" : x += "utf8=%E2%9C%93&"), y.length > 0 ? x + y : ""
}