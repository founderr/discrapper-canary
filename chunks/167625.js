"use strict";
n("781738"), n("424973"), n("70102");
var r = n("380756"),
  a = Object.prototype.hasOwnProperty,
  o = Array.isArray,
  i = {
    allowDots: !1,
    allowPrototypes: !1,
    allowSparse: !1,
    arrayLimit: 20,
    charset: "utf-8",
    charsetSentinel: !1,
    comma: !1,
    decoder: r.decode,
    delimiter: "&",
    depth: 5,
    ignoreQueryPrefix: !1,
    interpretNumericEntities: !1,
    parameterLimit: 1e3,
    parseArrays: !0,
    plainObjects: !1,
    strictNullHandling: !1
  },
  s = function(e, t) {
    return e && "string" == typeof e && t.comma && e.indexOf(",") > -1 ? e.split(",") : e
  },
  c = function(e, t) {
    var n = {
        __proto__: null
      },
      c = t.ignoreQueryPrefix ? e.replace(/^\?/, "") : e,
      l = t.parameterLimit === 1 / 0 ? void 0 : t.parameterLimit,
      u = c.split(t.delimiter, l),
      d = -1,
      p = t.charset;
    if (t.charsetSentinel)
      for (f = 0; f < u.length; ++f) 0 === u[f].indexOf("utf8=") && ("utf8=%E2%9C%93" === u[f] ? p = "utf-8" : "utf8=%26%2310003%3B" === u[f] && (p = "iso-8859-1"), d = f, f = u.length);
    for (f = 0; f < u.length; ++f)
      if (f !== d) {
        var f, h, m, v = u[f],
          g = v.indexOf("]="),
          y = -1 === g ? v.indexOf("=") : g + 1;
        if (-1 === y ? (h = t.decoder(v, i.decoder, p, "key"), m = t.strictNullHandling ? null : "") : (h = t.decoder(v.slice(0, y), i.decoder, p, "key"), m = r.maybeMap(s(v.slice(y + 1), t), function(e) {
            return t.decoder(e, i.decoder, p, "value")
          })), m && t.interpretNumericEntities && "iso-8859-1" === p) m = m.replace(/&#(\d+);/g, function(e, t) {
          return String.fromCharCode(parseInt(t, 10))
        });
        v.indexOf("[]=") > -1 && (m = o(m) ? [m] : m), a.call(n, h) ? n[h] = r.combine(n[h], m) : n[h] = m
      } return n
  },
  l = function(e, t, n, r) {
    for (var a = r ? t : s(t, n), o = e.length - 1; o >= 0; --o) {
      var i, c = e[o];
      if ("[]" === c && n.parseArrays) i = [].concat(a);
      else {
        i = n.plainObjects ? Object.create(null) : {};
        var l = "[" === c.charAt(0) && "]" === c.charAt(c.length - 1) ? c.slice(1, -1) : c,
          u = parseInt(l, 10);
        n.parseArrays || "" !== l ? !isNaN(u) && c !== l && String(u) === l && u >= 0 && n.parseArrays && u <= n.arrayLimit ? (i = [])[u] = a : "__proto__" !== l && (i[l] = a) : i = {
          0: a
        }
      }
      a = i
    }
    return a
  },
  u = function(e, t, n, r) {
    if (e) {
      var o = n.allowDots ? e.replace(/\.([^.[]+)/g, "[$1]") : e,
        i = /(\[[^[\]]*])/g,
        s = n.depth > 0 && /(\[[^[\]]*])/.exec(o),
        c = s ? o.slice(0, s.index) : o,
        u = [];
      if (c) {
        if (!n.plainObjects && a.call(Object.prototype, c) && !n.allowPrototypes) return;
        u.push(c)
      }
      for (var d = 0; n.depth > 0 && null !== (s = i.exec(o)) && d < n.depth;) {
        if (d += 1, !n.plainObjects && a.call(Object.prototype, s[1].slice(1, -1)) && !n.allowPrototypes) return;
        u.push(s[1])
      }
      return s && u.push("[" + o.slice(s.index) + "]"), l(u, t, n, r)
    }
  },
  d = function(e) {
    if (!e) return i;
    if (null !== e.decoder && void 0 !== e.decoder && "function" != typeof e.decoder) throw TypeError("Decoder has to be a function.");
    if (void 0 !== e.charset && "utf-8" !== e.charset && "iso-8859-1" !== e.charset) throw TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
    var t = void 0 === e.charset ? i.charset : e.charset;
    return {
      allowDots: void 0 === e.allowDots ? i.allowDots : !!e.allowDots,
      allowPrototypes: "boolean" == typeof e.allowPrototypes ? e.allowPrototypes : i.allowPrototypes,
      allowSparse: "boolean" == typeof e.allowSparse ? e.allowSparse : i.allowSparse,
      arrayLimit: "number" == typeof e.arrayLimit ? e.arrayLimit : i.arrayLimit,
      charset: t,
      charsetSentinel: "boolean" == typeof e.charsetSentinel ? e.charsetSentinel : i.charsetSentinel,
      comma: "boolean" == typeof e.comma ? e.comma : i.comma,
      decoder: "function" == typeof e.decoder ? e.decoder : i.decoder,
      delimiter: "string" == typeof e.delimiter || r.isRegExp(e.delimiter) ? e.delimiter : i.delimiter,
      depth: "number" == typeof e.depth || !1 === e.depth ? +e.depth : i.depth,
      ignoreQueryPrefix: !0 === e.ignoreQueryPrefix,
      interpretNumericEntities: "boolean" == typeof e.interpretNumericEntities ? e.interpretNumericEntities : i.interpretNumericEntities,
      parameterLimit: "number" == typeof e.parameterLimit ? e.parameterLimit : i.parameterLimit,
      parseArrays: !1 !== e.parseArrays,
      plainObjects: "boolean" == typeof e.plainObjects ? e.plainObjects : i.plainObjects,
      strictNullHandling: "boolean" == typeof e.strictNullHandling ? e.strictNullHandling : i.strictNullHandling
    }
  };
e.exports = function(e, t) {
  var n = d(t);
  if ("" === e || null == e) return n.plainObjects ? Object.create(null) : {};
  for (var a = "string" == typeof e ? c(e, n) : e, o = n.plainObjects ? Object.create(null) : {}, i = Object.keys(a), s = 0; s < i.length; ++s) {
    var l = i[s],
      p = u(l, a[l], n, "string" == typeof e);
    o = r.merge(o, p, n)
  }
  return !0 === n.allowSparse ? o : r.compact(o)
}