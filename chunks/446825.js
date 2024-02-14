"use strict";
e("311790"), e("477657"), e("811875"), e("90301"), e("652153"), e("28797"), e("817884"), e("597349"), e("667536"), e("690341"), e("70102"), e("781738"), e("274635"), e("424973");
var n = e("24815"),
  i = e("161318"),
  o = "function" == typeof Symbol && "function" == typeof Symbol.for ? Symbol.for("nodejs.util.inspect.custom") : null;
r.Buffer = a, r.SlowBuffer = function(t) {
  return +t != t && (t = 0), a.alloc(+t)
}, r.INSPECT_MAX_BYTES = 50;
r.kMaxLength = 2147483647, a.TYPED_ARRAY_SUPPORT = function() {
  try {
    var t = new Uint8Array(1),
      r = {
        foo: function() {
          return 42
        }
      };
    return Object.setPrototypeOf(r, Uint8Array.prototype), Object.setPrototypeOf(t, r), 42 === t.foo()
  } catch (t) {
    return !1
  }
}(), !a.TYPED_ARRAY_SUPPORT && "undefined" != typeof console && "function" == typeof console.error && console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");

function u(t) {
  if (t > 2147483647) throw RangeError('The value "' + t + '" is invalid for option "size"');
  var r = new Uint8Array(t);
  return Object.setPrototypeOf(r, a.prototype), r
}

function a(t, r, e) {
  if ("number" == typeof t) {
    if ("string" == typeof r) throw TypeError('The "string" argument must be of type string. Received type number');
    return c(t)
  }
  return f(t, r, e)
}

function f(t, r, e) {
  if ("string" == typeof t) return function(t, r) {
    if (("string" != typeof r || "" === r) && (r = "utf8"), !a.isEncoding(r)) throw TypeError("Unknown encoding: " + r);
    var e = 0 | v(t, r),
      n = u(e),
      i = n.write(t, r);
    return i !== e && (n = n.slice(0, i)), n
  }(t, r);
  if (ArrayBuffer.isView(t)) return l(t);
  if (null == t) throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t);
  if (M(t, ArrayBuffer) || t && M(t.buffer, ArrayBuffer) || "undefined" != typeof SharedArrayBuffer && (M(t, SharedArrayBuffer) || t && M(t.buffer, SharedArrayBuffer))) return h(t, r, e);
  if ("number" == typeof t) throw TypeError('The "value" argument must not be of type number. Received type number');
  var n = t.valueOf && t.valueOf();
  if (null != n && n !== t) return a.from(n, r, e);
  var i = function(t) {
    if (a.isBuffer(t)) {
      var r = 0 | p(t.length),
        e = u(r);
      return 0 === e.length ? e : (t.copy(e, 0, 0, r), e)
    }
    if (void 0 !== t.length) return "number" != typeof t.length || L(t.length) ? u(0) : l(t);
    if ("Buffer" === t.type && Array.isArray(t.data)) return l(t.data)
  }(t);
  if (i) return i;
  if ("undefined" != typeof Symbol && null != Symbol.toPrimitive && "function" == typeof t[Symbol.toPrimitive]) return a.from(t[Symbol.toPrimitive]("string"), r, e);
  throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t)
}

function s(t) {
  if ("number" != typeof t) throw TypeError('"size" argument must be of type number');
  if (t < 0) throw RangeError('The value "' + t + '" is invalid for option "size"')
}
Object.defineProperty(a.prototype, "parent", {
  enumerable: !0,
  get: function() {
    if (a.isBuffer(this)) return this.buffer
  }
}), Object.defineProperty(a.prototype, "offset", {
  enumerable: !0,
  get: function() {
    if (a.isBuffer(this)) return this.byteOffset
  }
}), a.poolSize = 8192, a.from = function(t, r, e) {
  return f(t, r, e)
}, Object.setPrototypeOf(a.prototype, Uint8Array.prototype), Object.setPrototypeOf(a, Uint8Array);

function c(t) {
  return s(t), u(t < 0 ? 0 : 0 | p(t))
}
a.alloc = function(t, r, e) {
  var n, i, o;
  return n = t, i = r, o = e, (s(n), n <= 0) ? u(n) : void 0 !== i ? "string" == typeof o ? u(n).fill(i, o) : u(n).fill(i) : u(n)
}, a.allocUnsafe = function(t) {
  return c(t)
}, a.allocUnsafeSlow = function(t) {
  return c(t)
};

function l(t) {
  for (var r = t.length < 0 ? 0 : 0 | p(t.length), e = u(r), n = 0; n < r; n += 1) e[n] = 255 & t[n];
  return e
}

function h(t, r, e) {
  var n;
  if (r < 0 || t.byteLength < r) throw RangeError('"offset" is outside of buffer bounds');
  if (t.byteLength < r + (e || 0)) throw RangeError('"length" is outside of buffer bounds');
  return Object.setPrototypeOf(n = void 0 === r && void 0 === e ? new Uint8Array(t) : void 0 === e ? new Uint8Array(t, r) : new Uint8Array(t, r, e), a.prototype), n
}

function p(t) {
  if (t >= 2147483647) throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + "7fffffff bytes");
  return 0 | t
}

function v(t, r) {
  if (a.isBuffer(t)) return t.length;
  if (ArrayBuffer.isView(t) || M(t, ArrayBuffer)) return t.byteLength;
  if ("string" != typeof t) throw TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof t);
  var e = t.length,
    n = arguments.length > 2 && !0 === arguments[2];
  if (!n && 0 === e) return 0;
  for (var i = !1;;) switch (r) {
    case "ascii":
    case "latin1":
    case "binary":
      return e;
    case "utf8":
    case "utf-8":
      return S(t).length;
    case "ucs2":
    case "ucs-2":
    case "utf16le":
    case "utf-16le":
      return 2 * e;
    case "hex":
      return e >>> 1;
    case "base64":
      return T(t).length;
    default:
      if (i) return n ? -1 : S(t).length;
      r = ("" + r).toLowerCase(), i = !0
  }
}

function d(t, r, e) {
  var i = !1;
  if ((void 0 === r || r < 0) && (r = 0), r > this.length) return "";
  if ((void 0 === e || e > this.length) && (e = this.length), e <= 0 || (e >>>= 0) <= (r >>>= 0)) return "";
  for (!t && (t = "utf8");;) switch (t) {
    case "hex":
      return function(t, r, e) {
        var n = t.length;
        (!r || r < 0) && (r = 0), (!e || e < 0 || e > n) && (e = n);
        for (var i = "", o = r; o < e; ++o) i += j[t[o]];
        return i
      }(this, r, e);
    case "utf8":
    case "utf-8":
      return _(this, r, e);
    case "ascii":
      return function(t, r, e) {
        var n = "";
        e = Math.min(t.length, e);
        for (var i = r; i < e; ++i) n += String.fromCharCode(127 & t[i]);
        return n
      }(this, r, e);
    case "latin1":
    case "binary":
      return function(t, r, e) {
        var n = "";
        e = Math.min(t.length, e);
        for (var i = r; i < e; ++i) n += String.fromCharCode(t[i]);
        return n
      }(this, r, e);
    case "base64":
      return function(t, r, e) {
        return 0 === r && e === t.length ? n.fromByteArray(t) : n.fromByteArray(t.slice(r, e))
      }(this, r, e);
    case "ucs2":
    case "ucs-2":
    case "utf16le":
    case "utf-16le":
      return function(t, r, e) {
        for (var n = t.slice(r, e), i = "", o = 0; o < n.length; o += 2) i += String.fromCharCode(n[o] + 256 * n[o + 1]);
        return i
      }(this, r, e);
    default:
      if (i) throw TypeError("Unknown encoding: " + t);
      t = (t + "").toLowerCase(), i = !0
  }
}

function g(t, r, e) {
  var n = t[r];
  t[r] = t[e], t[e] = n
}

function y(t, r, e, n, i) {
  if (0 === t.length) return -1;
  if ("string" == typeof e ? (n = e, e = 0) : e > 2147483647 ? e = 2147483647 : e < -2147483648 && (e = -2147483648), function(t) {
      return t != t
    }(e = +e) && (e = i ? 0 : t.length - 1), e < 0 && (e = t.length + e), e >= t.length) {
    if (i) return -1;
    e = t.length - 1
  } else if (e < 0) {
    if (!i) return -1;
    e = 0
  }
  if ("string" == typeof r && (r = a.from(r, n)), a.isBuffer(r)) return 0 === r.length ? -1 : b(t, r, e, n, i);
  if ("number" == typeof r) {
    if (r &= 255, "function" == typeof Uint8Array.prototype.indexOf) return i ? Uint8Array.prototype.indexOf.call(t, r, e) : Uint8Array.prototype.lastIndexOf.call(t, r, e);
    return b(t, [r], e, n, i)
  }
  throw TypeError("val must be string, number or Buffer")
}

function b(t, r, e, n, i) {
  var o, u = 1,
    a = t.length,
    f = r.length;
  if (void 0 !== n && ("ucs2" === (n = String(n).toLowerCase()) || "ucs-2" === n || "utf16le" === n || "utf-16le" === n)) {
    if (t.length < 2 || r.length < 2) return -1;
    u = 2, a /= 2, f /= 2, e /= 2
  }

  function s(t, r) {
    return 1 === u ? t[r] : t.readUInt16BE(r * u)
  }
  if (i) {
    var c = -1;
    for (o = e; o < a; o++)
      if (s(t, o) === s(r, -1 === c ? 0 : o - c)) {
        if (-1 === c && (c = o), o - c + 1 === f) return c * u
      } else - 1 !== c && (o -= o - c), c = -1
  } else
    for (e + f > a && (e = a - f), o = e; o >= 0; o--) {
      for (var l = !0, h = 0; h < f; h++)
        if (s(t, o + h) !== s(r, h)) {
          l = !1;
          break
        } if (l) return o
    }
  return -1
}
a.isBuffer = function(t) {
  return null != t && !0 === t._isBuffer && t !== a.prototype
}, a.compare = function(t, r) {
  if (M(t, Uint8Array) && (t = a.from(t, t.offset, t.byteLength)), M(r, Uint8Array) && (r = a.from(r, r.offset, r.byteLength)), !a.isBuffer(t) || !a.isBuffer(r)) throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
  if (t === r) return 0;
  for (var e = t.length, n = r.length, i = 0, o = Math.min(e, n); i < o; ++i)
    if (t[i] !== r[i]) {
      e = t[i], n = r[i];
      break
    } return e < n ? -1 : n < e ? 1 : 0
}, a.isEncoding = function(t) {
  switch (String(t).toLowerCase()) {
    case "hex":
    case "utf8":
    case "utf-8":
    case "ascii":
    case "latin1":
    case "binary":
    case "base64":
    case "ucs2":
    case "ucs-2":
    case "utf16le":
    case "utf-16le":
      return !0;
    default:
      return !1
  }
}, a.concat = function(t, r) {
  if (!Array.isArray(t)) throw TypeError('"list" argument must be an Array of Buffers');
  if (0 === t.length) return a.alloc(0);
  if (void 0 === r)
    for (e = 0, r = 0; e < t.length; ++e) r += t[e].length;
  var e, n = a.allocUnsafe(r),
    i = 0;
  for (e = 0; e < t.length; ++e) {
    var o = t[e];
    if (M(o, Uint8Array) && (o = a.from(o)), !a.isBuffer(o)) throw TypeError('"list" argument must be an Array of Buffers');
    o.copy(n, i), i += o.length
  }
  return n
}, a.byteLength = v, a.prototype._isBuffer = !0, a.prototype.swap16 = function() {
  var t = this.length;
  if (t % 2 != 0) throw RangeError("Buffer size must be a multiple of 16-bits");
  for (var r = 0; r < t; r += 2) g(this, r, r + 1);
  return this
}, a.prototype.swap32 = function() {
  var t = this.length;
  if (t % 4 != 0) throw RangeError("Buffer size must be a multiple of 32-bits");
  for (var r = 0; r < t; r += 4) g(this, r, r + 3), g(this, r + 1, r + 2);
  return this
}, a.prototype.swap64 = function() {
  var t = this.length;
  if (t % 8 != 0) throw RangeError("Buffer size must be a multiple of 64-bits");
  for (var r = 0; r < t; r += 8) g(this, r, r + 7), g(this, r + 1, r + 6), g(this, r + 2, r + 5), g(this, r + 3, r + 4);
  return this
}, a.prototype.toString = function() {
  var t = this.length;
  return 0 === t ? "" : 0 == arguments.length ? _(this, 0, t) : d.apply(this, arguments)
}, a.prototype.toLocaleString = a.prototype.toString, a.prototype.equals = function(t) {
  if (!a.isBuffer(t)) throw TypeError("Argument must be a Buffer");
  return this === t || 0 === a.compare(this, t)
}, a.prototype.inspect = function() {
  var t = "",
    e = r.INSPECT_MAX_BYTES;
  return t = this.toString("hex", 0, e).replace(/(.{2})/g, "$1 ").trim(), this.length > e && (t += " ... "), "<Buffer " + t + ">"
}, o && (a.prototype[o] = a.prototype.inspect), a.prototype.compare = function(t, r, e, n, i) {
  if (M(t, Uint8Array) && (t = a.from(t, t.offset, t.byteLength)), !a.isBuffer(t)) throw TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof t);
  if (void 0 === r && (r = 0), void 0 === e && (e = t ? t.length : 0), void 0 === n && (n = 0), void 0 === i && (i = this.length), r < 0 || e > t.length || n < 0 || i > this.length) throw RangeError("out of range index");
  if (n >= i && r >= e) return 0;
  if (n >= i) return -1;
  if (r >= e) return 1;
  if (r >>>= 0, e >>>= 0, n >>>= 0, i >>>= 0, this === t) return 0;
  for (var o = i - n, u = e - r, f = Math.min(o, u), s = this.slice(n, i), c = t.slice(r, e), l = 0; l < f; ++l)
    if (s[l] !== c[l]) {
      o = s[l], u = c[l];
      break
    } return o < u ? -1 : u < o ? 1 : 0
}, a.prototype.includes = function(t, r, e) {
  return -1 !== this.indexOf(t, r, e)
}, a.prototype.indexOf = function(t, r, e) {
  return y(this, t, r, e, !0)
}, a.prototype.lastIndexOf = function(t, r, e) {
  return y(this, t, r, e, !1)
};

function m(t, r, e, n) {
  return I(O(r), t, e, n)
}
a.prototype.write = function(t, r, e, n) {
  if (void 0 === r) n = "utf8", e = this.length, r = 0;
  else if (void 0 === e && "string" == typeof r) n = r, e = this.length, r = 0;
  else if (isFinite(r)) r >>>= 0, isFinite(e) ? (e >>>= 0, void 0 === n && (n = "utf8")) : (n = e, e = void 0);
  else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
  var i, o, u, a, f, s, c, l, h, p, v, d, g, y, b, m, _ = this.length - r;
  if ((void 0 === e || e > _) && (e = _), t.length > 0 && (e < 0 || r < 0) || r > this.length) throw RangeError("Attempt to write outside buffer bounds");
  !n && (n = "utf8");
  for (var w = !1;;) switch (n) {
    case "hex":
      return function(t, r, e, n) {
        e = Number(e) || 0;
        var i = t.length - e;
        n ? (n = Number(n)) > i && (n = i) : n = i;
        var o = r.length;
        n > o / 2 && (n = o / 2);
        for (var u = 0; u < n; ++u) {
          var a = parseInt(r.substr(2 * u, 2), 16);
          if (function(t) {
              return t != t
            }(a)) break;
          t[e + u] = a
        }
        return u
      }(this, t, r, e);
    case "utf8":
    case "utf-8":
      ;
      return i = this, o = t, u = r, a = e, I(S(o, i.length - u), i, u, a);
    case "ascii":
      ;
      return f = this, s = t, c = r, l = e, I(O(s), f, c, l);
    case "latin1":
    case "binary":
      return function(t, r, e, n) {
        var i, o, u, a;
        return i = t, o = r, u = e, a = n, I(O(o), i, u, a)
      }(this, t, r, e);
    case "base64":
      ;
      return h = this, p = t, v = r, d = e, I(T(p), h, v, d);
    case "ucs2":
    case "ucs-2":
    case "utf16le":
    case "utf-16le":
      ;
      return g = this, y = t, b = r, m = e, I(function(t, r) {
        for (var e, n, i, o = [], u = 0; u < t.length && !((r -= 2) < 0); ++u) n = (e = t.charCodeAt(u)) >> 8, i = e % 256, o.push(i), o.push(n);
        return o
      }(y, g.length - b), g, b, m);
    default:
      if (w) throw TypeError("Unknown encoding: " + n);
      n = ("" + n).toLowerCase(), w = !0
  }
}, a.prototype.toJSON = function() {
  return {
    type: "Buffer",
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
};

function _(t, r, e) {
  e = Math.min(t.length, e);
  for (var n = [], i = r; i < e;) {
    var o, u, a, f, s = t[i],
      c = null,
      l = s > 239 ? 4 : s > 223 ? 3 : s > 191 ? 2 : 1;
    if (i + l <= e) switch (l) {
      case 1:
        s < 128 && (c = s);
        break;
      case 2:
        (192 & (o = t[i + 1])) == 128 && (f = (31 & s) << 6 | 63 & o) > 127 && (c = f);
        break;
      case 3:
        o = t[i + 1], u = t[i + 2], (192 & o) == 128 && (192 & u) == 128 && (f = (15 & s) << 12 | (63 & o) << 6 | 63 & u) > 2047 && (f < 55296 || f > 57343) && (c = f);
        break;
      case 4:
        o = t[i + 1], u = t[i + 2], a = t[i + 3], (192 & o) == 128 && (192 & u) == 128 && (192 & a) == 128 && (f = (15 & s) << 18 | (63 & o) << 12 | (63 & u) << 6 | 63 & a) > 65535 && f < 1114112 && (c = f)
    }
    null === c ? (c = 65533, l = 1) : c > 65535 && (c -= 65536, n.push(c >>> 10 & 1023 | 55296), c = 56320 | 1023 & c), n.push(c), i += l
  }
  return function(t) {
    var r = t.length;
    if (r <= 4096) return String.fromCharCode.apply(String, t);
    for (var e = "", n = 0; n < r;) e += String.fromCharCode.apply(String, t.slice(n, n += 4096));
    return e
  }(n)
}

function w(t, r, e) {
  if (t % 1 != 0 || t < 0) throw RangeError("offset is not uint");
  if (t + r > e) throw RangeError("Trying to access beyond buffer length")
}

function E(t, r, e, n, i, o) {
  if (!a.isBuffer(t)) throw TypeError('"buffer" argument must be a Buffer instance');
  if (r > i || r < o) throw RangeError('"value" argument is out of bounds');
  if (e + n > t.length) throw RangeError("Index out of range")
}

function k(t, r, e, n, i, o) {
  if (e + n > t.length || e < 0) throw RangeError("Index out of range")
}

function A(t, r, e, n, o) {
  return r = +r, e >>>= 0, !o && k(t, r, e, 4, 34028234663852886e22, -34028234663852886e22), i.write(t, r, e, n, 23, 4), e + 4
}

function x(t, r, e, n, o) {
  return r = +r, e >>>= 0, !o && k(t, r, e, 8, 17976931348623157e292, -17976931348623157e292), i.write(t, r, e, n, 52, 8), e + 8
}
a.prototype.slice = function(t, r) {
  var e = this.length;
  t = ~~t, r = void 0 === r ? e : ~~r, t < 0 ? (t += e) < 0 && (t = 0) : t > e && (t = e), r < 0 ? (r += e) < 0 && (r = 0) : r > e && (r = e), r < t && (r = t);
  var n = this.subarray(t, r);
  return Object.setPrototypeOf(n, a.prototype), n
}, a.prototype.readUIntLE = function(t, r, e) {
  t >>>= 0, r >>>= 0, !e && w(t, r, this.length);
  for (var n = this[t], i = 1, o = 0; ++o < r && (i *= 256);) n += this[t + o] * i;
  return n
}, a.prototype.readUIntBE = function(t, r, e) {
  t >>>= 0, r >>>= 0, !e && w(t, r, this.length);
  for (var n = this[t + --r], i = 1; r > 0 && (i *= 256);) n += this[t + --r] * i;
  return n
}, a.prototype.readUInt8 = function(t, r) {
  return t >>>= 0, !r && w(t, 1, this.length), this[t]
}, a.prototype.readUInt16LE = function(t, r) {
  return t >>>= 0, !r && w(t, 2, this.length), this[t] | this[t + 1] << 8
}, a.prototype.readUInt16BE = function(t, r) {
  return t >>>= 0, !r && w(t, 2, this.length), this[t] << 8 | this[t + 1]
}, a.prototype.readUInt32LE = function(t, r) {
  return t >>>= 0, !r && w(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3]
}, a.prototype.readUInt32BE = function(t, r) {
  return t >>>= 0, !r && w(t, 4, this.length), 16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3])
}, a.prototype.readIntLE = function(t, r, e) {
  t >>>= 0, r >>>= 0, !e && w(t, r, this.length);
  for (var n = this[t], i = 1, o = 0; ++o < r && (i *= 256);) n += this[t + o] * i;
  return n >= (i *= 128) && (n -= Math.pow(2, 8 * r)), n
}, a.prototype.readIntBE = function(t, r, e) {
  t >>>= 0, r >>>= 0, !e && w(t, r, this.length);
  for (var n = r, i = 1, o = this[t + --n]; n > 0 && (i *= 256);) o += this[t + --n] * i;
  return o >= (i *= 128) && (o -= Math.pow(2, 8 * r)), o
}, a.prototype.readInt8 = function(t, r) {
  return (t >>>= 0, !r && w(t, 1, this.length), 128 & this[t]) ? -((255 - this[t] + 1) * 1) : this[t]
}, a.prototype.readInt16LE = function(t, r) {
  t >>>= 0, !r && w(t, 2, this.length);
  var e = this[t] | this[t + 1] << 8;
  return 32768 & e ? 4294901760 | e : e
}, a.prototype.readInt16BE = function(t, r) {
  t >>>= 0, !r && w(t, 2, this.length);
  var e = this[t + 1] | this[t] << 8;
  return 32768 & e ? 4294901760 | e : e
}, a.prototype.readInt32LE = function(t, r) {
  return t >>>= 0, !r && w(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24
}, a.prototype.readInt32BE = function(t, r) {
  return t >>>= 0, !r && w(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]
}, a.prototype.readFloatLE = function(t, r) {
  return t >>>= 0, !r && w(t, 4, this.length), i.read(this, t, !0, 23, 4)
}, a.prototype.readFloatBE = function(t, r) {
  return t >>>= 0, !r && w(t, 4, this.length), i.read(this, t, !1, 23, 4)
}, a.prototype.readDoubleLE = function(t, r) {
  return t >>>= 0, !r && w(t, 8, this.length), i.read(this, t, !0, 52, 8)
}, a.prototype.readDoubleBE = function(t, r) {
  return t >>>= 0, !r && w(t, 8, this.length), i.read(this, t, !1, 52, 8)
}, a.prototype.writeUIntLE = function(t, r, e, n) {
  if (t = +t, r >>>= 0, e >>>= 0, !n) {
    var i = Math.pow(2, 8 * e) - 1;
    E(this, t, r, e, i, 0)
  }
  var o = 1,
    u = 0;
  for (this[r] = 255 & t; ++u < e && (o *= 256);) this[r + u] = t / o & 255;
  return r + e
}, a.prototype.writeUIntBE = function(t, r, e, n) {
  if (t = +t, r >>>= 0, e >>>= 0, !n) {
    var i = Math.pow(2, 8 * e) - 1;
    E(this, t, r, e, i, 0)
  }
  var o = e - 1,
    u = 1;
  for (this[r + o] = 255 & t; --o >= 0 && (u *= 256);) this[r + o] = t / u & 255;
  return r + e
}, a.prototype.writeUInt8 = function(t, r, e) {
  return t = +t, r >>>= 0, !e && E(this, t, r, 1, 255, 0), this[r] = 255 & t, r + 1
}, a.prototype.writeUInt16LE = function(t, r, e) {
  return t = +t, r >>>= 0, !e && E(this, t, r, 2, 65535, 0), this[r] = 255 & t, this[r + 1] = t >>> 8, r + 2
}, a.prototype.writeUInt16BE = function(t, r, e) {
  return t = +t, r >>>= 0, !e && E(this, t, r, 2, 65535, 0), this[r] = t >>> 8, this[r + 1] = 255 & t, r + 2
}, a.prototype.writeUInt32LE = function(t, r, e) {
  return t = +t, r >>>= 0, !e && E(this, t, r, 4, 4294967295, 0), this[r + 3] = t >>> 24, this[r + 2] = t >>> 16, this[r + 1] = t >>> 8, this[r] = 255 & t, r + 4
}, a.prototype.writeUInt32BE = function(t, r, e) {
  return t = +t, r >>>= 0, !e && E(this, t, r, 4, 4294967295, 0), this[r] = t >>> 24, this[r + 1] = t >>> 16, this[r + 2] = t >>> 8, this[r + 3] = 255 & t, r + 4
}, a.prototype.writeIntLE = function(t, r, e, n) {
  if (t = +t, r >>>= 0, !n) {
    var i = Math.pow(2, 8 * e - 1);
    E(this, t, r, e, i - 1, -i)
  }
  var o = 0,
    u = 1,
    a = 0;
  for (this[r] = 255 & t; ++o < e && (u *= 256);) t < 0 && 0 === a && 0 !== this[r + o - 1] && (a = 1), this[r + o] = (t / u >> 0) - a & 255;
  return r + e
}, a.prototype.writeIntBE = function(t, r, e, n) {
  if (t = +t, r >>>= 0, !n) {
    var i = Math.pow(2, 8 * e - 1);
    E(this, t, r, e, i - 1, -i)
  }
  var o = e - 1,
    u = 1,
    a = 0;
  for (this[r + o] = 255 & t; --o >= 0 && (u *= 256);) t < 0 && 0 === a && 0 !== this[r + o + 1] && (a = 1), this[r + o] = (t / u >> 0) - a & 255;
  return r + e
}, a.prototype.writeInt8 = function(t, r, e) {
  return t = +t, r >>>= 0, !e && E(this, t, r, 1, 127, -128), t < 0 && (t = 255 + t + 1), this[r] = 255 & t, r + 1
}, a.prototype.writeInt16LE = function(t, r, e) {
  return t = +t, r >>>= 0, !e && E(this, t, r, 2, 32767, -32768), this[r] = 255 & t, this[r + 1] = t >>> 8, r + 2
}, a.prototype.writeInt16BE = function(t, r, e) {
  return t = +t, r >>>= 0, !e && E(this, t, r, 2, 32767, -32768), this[r] = t >>> 8, this[r + 1] = 255 & t, r + 2
}, a.prototype.writeInt32LE = function(t, r, e) {
  return t = +t, r >>>= 0, !e && E(this, t, r, 4, 2147483647, -2147483648), this[r] = 255 & t, this[r + 1] = t >>> 8, this[r + 2] = t >>> 16, this[r + 3] = t >>> 24, r + 4
}, a.prototype.writeInt32BE = function(t, r, e) {
  return t = +t, r >>>= 0, !e && E(this, t, r, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), this[r] = t >>> 24, this[r + 1] = t >>> 16, this[r + 2] = t >>> 8, this[r + 3] = 255 & t, r + 4
}, a.prototype.writeFloatLE = function(t, r, e) {
  return A(this, t, r, !0, e)
}, a.prototype.writeFloatBE = function(t, r, e) {
  return A(this, t, r, !1, e)
}, a.prototype.writeDoubleLE = function(t, r, e) {
  return x(this, t, r, !0, e)
}, a.prototype.writeDoubleBE = function(t, r, e) {
  return x(this, t, r, !1, e)
}, a.prototype.copy = function(t, r, e, n) {
  if (!a.isBuffer(t)) throw TypeError("argument should be a Buffer");
  if (!e && (e = 0), !n && 0 !== n && (n = this.length), r >= t.length && (r = t.length), !r && (r = 0), n > 0 && n < e && (n = e), n === e || 0 === t.length || 0 === this.length) return 0;
  if (r < 0) throw RangeError("targetStart out of bounds");
  if (e < 0 || e >= this.length) throw RangeError("Index out of range");
  if (n < 0) throw RangeError("sourceEnd out of bounds");
  n > this.length && (n = this.length), t.length - r < n - e && (n = t.length - r + e);
  var i = n - e;
  if (this === t && "function" == typeof Uint8Array.prototype.copyWithin) this.copyWithin(r, e, n);
  else if (this === t && e < r && r < n)
    for (var o = i - 1; o >= 0; --o) t[o + r] = this[o + e];
  else Uint8Array.prototype.set.call(t, this.subarray(e, n), r);
  return i
}, a.prototype.fill = function(t, r, e, n) {
  if ("string" == typeof t) {
    if ("string" == typeof r ? (n = r, r = 0, e = this.length) : "string" == typeof e && (n = e, e = this.length), void 0 !== n && "string" != typeof n) throw TypeError("encoding must be a string");
    if ("string" == typeof n && !a.isEncoding(n)) throw TypeError("Unknown encoding: " + n);
    if (1 === t.length) {
      var i, o = t.charCodeAt(0);
      ("utf8" === n && o < 128 || "latin1" === n) && (t = o)
    }
  } else "number" == typeof t ? t &= 255 : "boolean" == typeof t && (t = Number(t));
  if (r < 0 || this.length < r || this.length < e) throw RangeError("Out of range index");
  if (e <= r) return this;
  if (r >>>= 0, e = void 0 === e ? this.length : e >>> 0, !t && (t = 0), "number" == typeof t)
    for (i = r; i < e; ++i) this[i] = t;
  else {
    var u = a.isBuffer(t) ? t : a.from(t, n),
      f = u.length;
    if (0 === f) throw TypeError('The value "' + t + '" is invalid for argument "value"');
    for (i = 0; i < e - r; ++i) this[i + r] = u[i % f]
  }
  return this
};
var R = /[^+/0-9A-Za-z-_]/g;

function S(t, r) {
  r = r || 1 / 0;
  for (var e, n = t.length, i = null, o = [], u = 0; u < n; ++u) {
    if ((e = t.charCodeAt(u)) > 55295 && e < 57344) {
      if (!i) {
        if (e > 56319) {
          (r -= 3) > -1 && o.push(239, 191, 189);
          continue
        }
        if (u + 1 === n) {
          (r -= 3) > -1 && o.push(239, 191, 189);
          continue
        }
        i = e;
        continue
      }
      if (e < 56320) {
        (r -= 3) > -1 && o.push(239, 191, 189), i = e;
        continue
      }
      e = (i - 55296 << 10 | e - 56320) + 65536
    } else i && (r -= 3) > -1 && o.push(239, 191, 189);
    if (i = null, e < 128) {
      if ((r -= 1) < 0) break;
      o.push(e)
    } else if (e < 2048) {
      if ((r -= 2) < 0) break;
      o.push(e >> 6 | 192, 63 & e | 128)
    } else if (e < 65536) {
      if ((r -= 3) < 0) break;
      o.push(e >> 12 | 224, e >> 6 & 63 | 128, 63 & e | 128)
    } else if (e < 1114112) {
      if ((r -= 4) < 0) break;
      o.push(e >> 18 | 240, e >> 12 & 63 | 128, e >> 6 & 63 | 128, 63 & e | 128)
    } else throw Error("Invalid code point")
  }
  return o
}

function O(t) {
  for (var r = [], e = 0; e < t.length; ++e) r.push(255 & t.charCodeAt(e));
  return r
}

function T(t) {
  return n.toByteArray(function(t) {
    if ((t = (t = t.split("=")[0]).trim().replace(R, "")).length < 2) return "";
    for (; t.length % 4 != 0;) t += "=";
    return t
  }(t))
}

function I(t, r, e, n) {
  for (var i = 0; i < n && !(i + e >= r.length) && !(i >= t.length); ++i) r[i + e] = t[i];
  return i
}

function M(t, r) {
  return t instanceof r || null != t && null != t.constructor && null != t.constructor.name && t.constructor.name === r.name
}

function L(t) {
  return t != t
}
var j = function() {
  for (var t = "0123456789abcdef", r = Array(256), e = 0; e < 16; ++e) {
    for (var n = 16 * e, i = 0; i < 16; ++i) r[n + i] = t[e] + t[i]
  }
  return r
}()