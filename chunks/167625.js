"use strict";
n("781738"), n("424973"), n("70102");
var r = n("380756"),
  a = Object.prototype.hasOwnProperty,
  i = Array.isArray,
  o = {
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
        var f, m, h, v = u[f],
          g = v.indexOf("]="),
          y = -1 === g ? v.indexOf("=") : g + 1;
        if (-1 === y ? (m = t.decoder(v, o.decoder, p, "key"), h = t.strictNullHandling ? null : "") : (m = t.decoder(v.slice(0, y), o.decoder, p, "key"), h = r.maybeMap(s(v.slice(y + 1), t), function(e) {
            return t.decoder(e, o.decoder, p, "value")
          })), h && t.interpretNumericEntities && "iso-8859-1" === p) h = h.replace(/&#(\d+);/g, function(e, t) {
          return String.fromCharCode(parseInt(t, 10))
        });
        v.indexOf("[]=") > -1 && (h = i(h) ? [h] : h), a.call(n, m) ? n[m] = r.combine(n[m], h) : n[m] = h
      } return n
  },
  l = function(e, t, n, r) {
    for (var a = r ? t : s(t, n), i = e.length - 1; i >= 0; --i) {
      var o, c = e[i];
      if ("[]" === c && n.parseArrays) o = [].concat(a);
      else {
        o = n.plainObjects ? Object.create(null) : {};
        var l = "[" === c.charAt(0) && "]" === c.charAt(c.length - 1) ? c.slice(1, -1) : c,
          u = parseInt(l, 10);
        n.parseArrays || "" !== l ? !isNaN(u) && c !== l && String(u) === l && u >= 0 && n.parseArrays && u <= n.arrayLimit ? (o = [])[u] = a : "__proto__" !== l && (o[l] = a) : o = {
          0: a
        }
      }
      a = o
    }
    return a
  },
  u = function(e, t, n, r) {
    if (e) {
      var i = n.allowDots ? e.replace(/\.([^.[]+)/g, "[$1]") : e,
        o = /(\[[^[\]]*])/g,
        s = n.depth > 0 && /(\[[^[\]]*])/.exec(i),
        c = s ? i.slice(0, s.index) : i,
        u = [];
      if (c) {
        if (!n.plainObjects && a.call(Object.prototype, c) && !n.allowPrototypes) return;
        u.push(c)
      }
      for (var d = 0; n.depth > 0 && null !== (s = o.exec(i)) && d < n.depth;) {
        if (d += 1, !n.plainObjects && a.call(Object.prototype, s[1].slice(1, -1)) && !n.allowPrototypes) return;
        u.push(s[1])
      }
      return s && u.push("[" + i.slice(s.index) + "]"), l(u, t, n, r)
    }
  },
  d = function(e) {
    if (!e) return o;
    if (null !== e.decoder && void 0 !== e.decoder && "function" != typeof e.decoder) throw TypeError("Decoder has to be a function.");
    if (void 0 !== e.charset && "utf-8" !== e.charset && "iso-8859-1" !== e.charset) throw TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
    var t = void 0 === e.charset ? o.charset : e.charset;
    return {
      allowDots: void 0 === e.allowDots ? o.allowDots : !!e.allowDots,
      allowPrototypes: "boolean" == typeof e.allowPrototypes ? e.allowPrototypes : o.allowPrototypes,
      allowSparse: "boolean" == typeof e.allowSparse ? e.allowSparse : o.allowSparse,
      arrayLimit: "number" == typeof e.arrayLimit ? e.arrayLimit : o.arrayLimit,
      charset: t,
      charsetSentinel: "boolean" == typeof e.charsetSentinel ? e.charsetSentinel : o.charsetSentinel,
      comma: "boolean" == typeof e.comma ? e.comma : o.comma,
      decoder: "function" == typeof e.decoder ? e.decoder : o.decoder,
      delimiter: "string" == typeof e.delimiter || r.isRegExp(e.delimiter) ? e.delimiter : o.delimiter,
      depth: "number" == typeof e.depth || !1 === e.depth ? +e.depth : o.depth,
      ignoreQueryPrefix: !0 === e.ignoreQueryPrefix,
      interpretNumericEntities: "boolean" == typeof e.interpretNumericEntities ? e.interpretNumericEntities : o.interpretNumericEntities,
      parameterLimit: "number" == typeof e.parameterLimit ? e.parameterLimit : o.parameterLimit,
      parseArrays: !1 !== e.parseArrays,
      plainObjects: "boolean" == typeof e.plainObjects ? e.plainObjects : o.plainObjects,
      strictNullHandling: "boolean" == typeof e.strictNullHandling ? e.strictNullHandling : o.strictNullHandling
    }
  };
e.exports = function(e, t) {
  var n = d(t);
  if ("" === e || null == e) return n.plainObjects ? Object.create(null) : {};
  for (var a = "string" == typeof e ? c(e, n) : e, i = n.plainObjects ? Object.create(null) : {}, o = Object.keys(a), s = 0; s < o.length; ++s) {
    var l = o[s],
      p = u(l, a[l], n, "string" == typeof e);
    i = r.merge(i, p, n)
  }
  return !0 === n.allowSparse ? i : r.compact(i)
}