"use strict";
n("424973"), n("808653"), n("781738");
var r = n("280973"),
  a = Object.prototype.hasOwnProperty,
  i = Array.isArray,
  o = function() {
    for (var e = [], t = 0; t < 256; ++t) e.push("%" + ((t < 16 ? "0" : "") + t.toString(16)).toUpperCase());
    return e
  }(),
  s = function(e) {
    for (; e.length > 1;) {
      var t = e.pop(),
        n = t.obj[t.prop];
      if (i(n)) {
        for (var r = [], a = 0; a < n.length; ++a) void 0 !== n[a] && r.push(n[a]);
        t.obj[t.prop] = r
      }
    }
  },
  c = function(e, t) {
    for (var n = t && t.plainObjects ? Object.create(null) : {}, r = 0; r < e.length; ++r) void 0 !== e[r] && (n[r] = e[r]);
    return n
  };
e.exports = {
  arrayToObject: c,
  assign: function(e, t) {
    return Object.keys(t).reduce(function(e, n) {
      return e[n] = t[n], e
    }, e)
  },
  combine: function(e, t) {
    return [].concat(e, t)
  },
  compact: function(e) {
    for (var t = [{
        obj: {
          o: e
        },
        prop: "o"
      }], n = [], r = 0; r < t.length; ++r) {
      for (var a = t[r], i = a.obj[a.prop], o = Object.keys(i), c = 0; c < o.length; ++c) {
        var l = o[c],
          u = i[l];
        "object" == typeof u && null !== u && -1 === n.indexOf(u) && (t.push({
          obj: i,
          prop: l
        }), n.push(u))
      }
    }
    return s(t), e
  },
  decode: function(e, t, n) {
    var r = e.replace(/\+/g, " ");
    if ("iso-8859-1" === n) return r.replace(/%[0-9a-f]{2}/gi, unescape);
    try {
      return decodeURIComponent(r)
    } catch (e) {
      return r
    }
  },
  encode: function(e, t, n, a, i) {
    if (0 === e.length) return e;
    var s = e;
    if ("symbol" == typeof e ? s = Symbol.prototype.toString.call(e) : "string" != typeof e && (s = String(e)), "iso-8859-1" === n) return escape(s).replace(/%u[0-9a-f]{4}/gi, function(e) {
      return "%26%23" + parseInt(e.slice(2), 16) + "%3B"
    });
    for (var c = "", l = 0; l < s.length; ++l) {
      var u = s.charCodeAt(l);
      if (45 === u || 46 === u || 95 === u || 126 === u || u >= 48 && u <= 57 || u >= 65 && u <= 90 || u >= 97 && u <= 122 || i === r.RFC1738 && (40 === u || 41 === u)) {
        c += s.charAt(l);
        continue
      }
      if (u < 128) {
        c += o[u];
        continue
      }
      if (u < 2048) {
        c += o[192 | u >> 6] + o[128 | 63 & u];
        continue
      }
      if (u < 55296 || u >= 57344) {
        c += o[224 | u >> 12] + o[128 | u >> 6 & 63] + o[128 | 63 & u];
        continue
      }
      l += 1, c += o[240 | (u = 65536 + ((1023 & u) << 10 | 1023 & s.charCodeAt(l))) >> 18] + o[128 | u >> 12 & 63] + o[128 | u >> 6 & 63] + o[128 | 63 & u]
    }
    return c
  },
  isBuffer: function(e) {
    return !!e && "object" == typeof e && !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e))
  },
  isRegExp: function(e) {
    return "[object RegExp]" === Object.prototype.toString.call(e)
  },
  maybeMap: function(e, t) {
    if (i(e)) {
      for (var n = [], r = 0; r < e.length; r += 1) n.push(t(e[r]));
      return n
    }
    return t(e)
  },
  merge: function e(t, n, r) {
    if (!n) return t;
    if ("object" != typeof n) {
      if (i(t)) t.push(n);
      else {
        if (!t || "object" != typeof t) return [t, n];
        (r && (r.plainObjects || r.allowPrototypes) || !a.call(Object.prototype, n)) && (t[n] = !0)
      }
      return t
    }
    if (!t || "object" != typeof t) return [t].concat(n);
    var o = t;
    return (i(t) && !i(n) && (o = c(t, r)), i(t) && i(n)) ? (n.forEach(function(n, i) {
      if (a.call(t, i)) {
        var o = t[i];
        o && "object" == typeof o && n && "object" == typeof n ? t[i] = e(o, n, r) : t.push(n)
      } else t[i] = n
    }), t) : Object.keys(n).reduce(function(t, i) {
      var o = n[i];
      return a.call(t, i) ? t[i] = e(t[i], o, r) : t[i] = o, t
    }, o)
  }
}