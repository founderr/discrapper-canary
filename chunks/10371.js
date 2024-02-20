var r, a;
e = n.nmd(e), n("854508"), n("70102"), n("424973"), n("808653"), n("222007"), r = this, a = function() {
  "use strict";
  for (var e = function(e, t, n) {
      return void 0 === t && (t = 0), void 0 === n && (n = 1), e < t ? t : e > n ? n : e
    }, t = {}, n = 0, r = ["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp", "Undefined", "Null"]; n < r.length; n += 1) {
    var a = r[n];
    t["[object " + a + "]"] = a.toLowerCase()
  }
  var o = function(e) {
      return t[Object.prototype.toString.call(e)] || "object"
    },
    i = Math.PI,
    u = {
      clip_rgb: function(t) {
        t._clipped = !1, t._unclipped = t.slice(0);
        for (var n = 0; n <= 3; n++) n < 3 ? ((t[n] < 0 || t[n] > 255) && (t._clipped = !0), t[n] = e(t[n], 0, 255)) : 3 === n && (t[n] = e(t[n], 0, 1));
        return t
      },
      limit: e,
      type: o,
      unpack: function(e, t) {
        return (void 0 === t && (t = null), e.length >= 3) ? Array.prototype.slice.call(e) : "object" == o(e[0]) && t ? t.split("").filter(function(t) {
          return void 0 !== e[0][t]
        }).map(function(t) {
          return e[0][t]
        }) : e[0]
      },
      last: function(e) {
        if (e.length < 2) return null;
        var t = e.length - 1;
        return "string" == o(e[t]) ? e[t].toLowerCase() : null
      },
      TWOPI: 2 * i,
      PITHIRD: i / 3,
      DEG2RAD: i / 180,
      RAD2DEG: 180 / i
    },
    s = {
      format: {},
      autodetect: []
    },
    l = u.last,
    c = u.clip_rgb,
    f = u.type,
    d = function() {
      for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
      if ("object" === f(e[0]) && e[0].constructor && e[0].constructor === this.constructor) return e[0];
      var n = l(e),
        r = !1;
      if (!n) {
        r = !0, !s.sorted && (s.autodetect = s.autodetect.sort(function(e, t) {
          return t.p - e.p
        }), s.sorted = !0);
        for (var a = 0, o = s.autodetect; a < o.length; a += 1) {
          var i = o[a];
          if (n = i.test.apply(i, e)) break
        }
      }
      if (s.format[n]) {
        var u = s.format[n].apply(null, r ? e : e.slice(0, -1));
        this._rgb = c(u)
      } else throw Error("unknown format: " + e);
      3 === this._rgb.length && this._rgb.push(1)
    };
  d.prototype.toString = function() {
    return "function" == f(this.hex) ? this.hex() : "[" + this._rgb.join(",") + "]"
  };
  var p = function() {
    for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
    return new(Function.prototype.bind.apply(p.Color, [null].concat(e)))
  };
  p.Color = d, p.version = "2.4.2";
  var h = u.unpack,
    m = Math.max,
    _ = u.unpack,
    y = u.unpack,
    g = u.type,
    v = function() {
      for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
      var n = h(e, "rgb"),
        r = n[0],
        a = n[1],
        o = n[2],
        i = 1 - m(r /= 255, m(a /= 255, o /= 255)),
        u = i < 1 ? 1 / (1 - i) : 0;
      return [(1 - r - i) * u, (1 - a - i) * u, (1 - o - i) * u, i]
    };
  d.prototype.cmyk = function() {
    return v(this._rgb)
  }, p.cmyk = function() {
    for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
    return new(Function.prototype.bind.apply(d, [null].concat(e, ["cmyk"])))
  }, s.format.cmyk = function() {
    for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
    var n = (e = _(e, "cmyk"))[0],
      r = e[1],
      a = e[2],
      o = e[3],
      i = e.length > 4 ? e[4] : 1;
    return 1 === o ? [0, 0, 0, i] : [n >= 1 ? 0 : 255 * (1 - n) * (1 - o), r >= 1 ? 0 : 255 * (1 - r) * (1 - o), a >= 1 ? 0 : 255 * (1 - a) * (1 - o), i]
  }, s.autodetect.push({
    p: 2,
    test: function() {
      for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
      if ("array" === g(e = y(e, "cmyk")) && 4 === e.length) return "cmyk"
    }
  });
  var b = u.unpack,
    M = u.last,
    w = function(e) {
      return Math.round(100 * e) / 100
    },
    k = u.unpack,
    L = function() {
      for (var e, t, n = [], r = arguments.length; r--;) n[r] = arguments[r];
      var a = (n = k(n, "rgba"))[0],
        o = n[1],
        i = n[2],
        u = Math.min(a /= 255, o /= 255, i /= 255),
        s = Math.max(a, o, i),
        l = (s + u) / 2;
      return (s === u ? (e = 0, t = Number.NaN) : e = l < .5 ? (s - u) / (s + u) : (s - u) / (2 - s - u), a == s ? t = (o - i) / (s - u) : o == s ? t = 2 + (i - a) / (s - u) : i == s && (t = 4 + (a - o) / (s - u)), (t *= 60) < 0 && (t += 360), n.length > 3 && void 0 !== n[3]) ? [t, e, l, n[3]] : [t, e, l]
    },
    D = u.unpack,
    S = u.last,
    T = function() {
      for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
      var n = b(e, "hsla"),
        r = M(e) || "lsa";
      return n[0] = w(n[0] || 0), n[1] = w(100 * n[1]) + "%", n[2] = w(100 * n[2]) + "%", "hsla" === r || n.length > 3 && n[3] < 1 ? (n[3] = n.length > 3 ? n[3] : 1, r = "hsla") : n.length = 3, r + "(" + n.join(",") + ")"
    },
    Y = Math.round,
    x = u.unpack,
    E = Math.round,
    O = function() {
      for (var e, t, n, r, a = [], o = arguments.length; o--;) a[o] = arguments[o];
      var i = (a = x(a, "hsl"))[0],
        u = a[1],
        s = a[2];
      if (0 === u) t = n = r = 255 * s;
      else {
        var l = [0, 0, 0],
          c = [0, 0, 0],
          f = s < .5 ? s * (1 + u) : s + u - s * u,
          d = 2 * s - f,
          p = i / 360;
        l[0] = p + 1 / 3, l[1] = p, l[2] = p - 1 / 3;
        for (var h = 0; h < 3; h++) l[h] < 0 && (l[h] += 1), l[h] > 1 && (l[h] -= 1), 6 * l[h] < 1 ? c[h] = d + (f - d) * 6 * l[h] : 2 * l[h] < 1 ? c[h] = f : 3 * l[h] < 2 ? c[h] = d + (f - d) * (2 / 3 - l[h]) * 6 : c[h] = d;
        t = (e = [E(255 * c[0]), E(255 * c[1]), E(255 * c[2])])[0], n = e[1], r = e[2]
      }
      return a.length > 3 ? [t, n, r, a[3]] : [t, n, r, 1]
    },
    P = /^rgb\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*\)$/,
    j = /^rgba\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*,\s*([01]|[01]?\.\d+)\)$/,
    C = /^rgb\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,
    H = /^rgba\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,
    N = /^hsl\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,
    F = /^hsla\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,
    I = Math.round,
    A = function(e) {
      if (e = e.toLowerCase().trim(), s.format.named) try {
        return s.format.named(e)
      } catch (e) {}
      if (t = e.match(P)) {
        for (var t, n = t.slice(1, 4), r = 0; r < 3; r++) n[r] = +n[r];
        return n[3] = 1, n
      }
      if (t = e.match(j)) {
        for (var a = t.slice(1, 5), o = 0; o < 4; o++) a[o] = +a[o];
        return a
      }
      if (t = e.match(C)) {
        for (var i = t.slice(1, 4), u = 0; u < 3; u++) i[u] = I(2.55 * i[u]);
        return i[3] = 1, i
      }
      if (t = e.match(H)) {
        for (var l = t.slice(1, 5), c = 0; c < 3; c++) l[c] = I(2.55 * l[c]);
        return l[3] = +l[3], l
      }
      if (t = e.match(N)) {
        var f = t.slice(1, 4);
        f[1] *= .01, f[2] *= .01;
        var d = O(f);
        return d[3] = 1, d
      }
      if (t = e.match(F)) {
        var p = t.slice(1, 4);
        p[1] *= .01, p[2] *= .01;
        var h = O(p);
        return h[3] = +t[4], h
      }
    };
  A.test = function(e) {
    return P.test(e) || j.test(e) || C.test(e) || H.test(e) || N.test(e) || F.test(e)
  };
  var R = u.type,
    W = function() {
      for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
      var n = D(e, "rgba"),
        r = S(e) || "rgb";
      return "hsl" == r.substr(0, 3) ? T(L(n), r) : (n[0] = Y(n[0]), n[1] = Y(n[1]), n[2] = Y(n[2]), ("rgba" === r || n.length > 3 && n[3] < 1) && (n[3] = n.length > 3 ? n[3] : 1, r = "rgba"), r + "(" + n.slice(0, "rgb" === r ? 3 : 4).join(",") + ")")
    };
  d.prototype.css = function(e) {
    return W(this._rgb, e)
  }, p.css = function() {
    for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
    return new(Function.prototype.bind.apply(d, [null].concat(e, ["css"])))
  }, s.format.css = A, s.autodetect.push({
    p: 5,
    test: function(e) {
      for (var t = [], n = arguments.length - 1; n-- > 0;) t[n] = arguments[n + 1];
      if (!t.length && "string" === R(e) && A.test(e)) return "css"
    }
  });
  var z = u.unpack;
  s.format.gl = function() {
    for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
    var n = z(e, "rgba");
    return n[0] *= 255, n[1] *= 255, n[2] *= 255, n
  }, p.gl = function() {
    for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
    return new(Function.prototype.bind.apply(d, [null].concat(e, ["gl"])))
  }, d.prototype.gl = function() {
    var e = this._rgb;
    return [e[0] / 255, e[1] / 255, e[2] / 255, e[3]]
  };
  var U = u.unpack,
    B = u.unpack,
    K = Math.floor,
    q = u.unpack,
    J = u.type,
    V = function() {
      for (var e, t = [], n = arguments.length; n--;) t[n] = arguments[n];
      var r = U(t, "rgb"),
        a = r[0],
        o = r[1],
        i = r[2],
        u = Math.min(a, o, i),
        s = Math.max(a, o, i),
        l = s - u;
      return 0 === l ? e = Number.NaN : (a === s && (e = (o - i) / l), o === s && (e = 2 + (i - a) / l), i === s && (e = 4 + (a - o) / l), (e *= 60) < 0 && (e += 360)), [e, 100 * l / 255, u / (255 - l) * 100]
    };
  d.prototype.hcg = function() {
    return V(this._rgb)
  }, p.hcg = function() {
    for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
    return new(Function.prototype.bind.apply(d, [null].concat(e, ["hcg"])))
  }, s.format.hcg = function() {
    for (var e, t, n, r, a, o, i, u, s, l = [], c = arguments.length; c--;) l[c] = arguments[c];
    var f = (l = B(l, "hcg"))[0],
      d = l[1],
      p = l[2];
    p *= 255;
    var h = 255 * d;
    if (0 === d) i = u = s = p;
    else {
      360 === f && (f = 0), f > 360 && (f -= 360), f < 0 && (f += 360);
      var m = K(f /= 60),
        _ = f - m,
        y = p * (1 - d),
        g = y + h * (1 - _),
        v = y + h * _,
        b = y + h;
      switch (m) {
        case 0:
          i = (e = [b, v, y])[0], u = e[1], s = e[2];
          break;
        case 1:
          i = (t = [g, b, y])[0], u = t[1], s = t[2];
          break;
        case 2:
          i = (n = [y, b, v])[0], u = n[1], s = n[2];
          break;
        case 3:
          i = (r = [y, g, b])[0], u = r[1], s = r[2];
          break;
        case 4:
          i = (a = [v, y, b])[0], u = a[1], s = a[2];
          break;
        case 5:
          i = (o = [b, y, g])[0], u = o[1], s = o[2]
      }
    }
    return [i, u, s, l.length > 3 ? l[3] : 1]
  }, s.autodetect.push({
    p: 1,
    test: function() {
      for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
      if ("array" === J(e = q(e, "hcg")) && 3 === e.length) return "hcg"
    }
  });
  var G = u.unpack,
    $ = u.last,
    Q = Math.round,
    Z = function() {
      for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
      var n = G(e, "rgba"),
        r = n[0],
        a = n[1],
        o = n[2],
        i = n[3],
        u = $(e) || "auto";
      void 0 === i && (i = 1), "auto" === u && (u = i < 1 ? "rgba" : "rgb"), r = Q(r), a = Q(a);
      var s = "000000" + (r << 16 | a << 8 | (o = Q(o))).toString(16);
      s = s.substr(s.length - 6);
      var l = "0" + Q(255 * i).toString(16);
      switch (l = l.substr(l.length - 2), u.toLowerCase()) {
        case "rgba":
          return "#" + s + l;
        case "argb":
          return "#" + l + s;
        default:
          return "#" + s
      }
    },
    X = /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,
    ee = /^#?([A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/,
    et = function(e) {
      if (e.match(X)) {
        (4 === e.length || 7 === e.length) && (e = e.substr(1)), 3 === e.length && (e = (e = e.split(""))[0] + e[0] + e[1] + e[1] + e[2] + e[2]);
        var t = parseInt(e, 16);
        return [t >> 16, t >> 8 & 255, 255 & t, 1]
      }
      if (e.match(ee)) {
        (5 === e.length || 9 === e.length) && (e = e.substr(1)), 4 === e.length && (e = (e = e.split(""))[0] + e[0] + e[1] + e[1] + e[2] + e[2] + e[3] + e[3]);
        var n = parseInt(e, 16);
        return [n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, Math.round((255 & n) / 255 * 100) / 100]
      }
      throw Error("unknown hex color: " + e)
    },
    en = u.type;
  d.prototype.hex = function(e) {
    return Z(this._rgb, e)
  }, p.hex = function() {
    for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
    return new(Function.prototype.bind.apply(d, [null].concat(e, ["hex"])))
  }, s.format.hex = et, s.autodetect.push({
    p: 4,
    test: function(e) {
      for (var t = [], n = arguments.length - 1; n-- > 0;) t[n] = arguments[n + 1];
      if (!t.length && "string" === en(e) && [3, 4, 5, 6, 7, 8, 9].indexOf(e.length) >= 0) return "hex"
    }
  });
  var er = u.unpack,
    ea = u.TWOPI,
    eo = Math.min,
    ei = Math.sqrt,
    eu = Math.acos,
    es = u.unpack,
    el = u.limit,
    ec = u.TWOPI,
    ef = u.PITHIRD,
    ed = Math.cos,
    ep = u.unpack,
    eh = u.type,
    em = function() {
      for (var e, t = [], n = arguments.length; n--;) t[n] = arguments[n];
      var r = er(t, "rgb"),
        a = r[0],
        o = r[1],
        i = r[2],
        u = eo(a /= 255, o /= 255, i /= 255),
        s = (a + o + i) / 3,
        l = s > 0 ? 1 - u / s : 0;
      return 0 === l ? e = NaN : (e = eu(e = (a - o + (a - i)) / 2 / ei((a - o) * (a - o) + (a - i) * (o - i))), i > o && (e = ea - e), e /= ea), [360 * e, l, s]
    };
  d.prototype.hsi = function() {
    return em(this._rgb)
  }, p.hsi = function() {
    for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
    return new(Function.prototype.bind.apply(d, [null].concat(e, ["hsi"])))
  }, s.format.hsi = function() {
    for (var e, t, n, r = [], a = arguments.length; a--;) r[a] = arguments[a];
    var o = (r = es(r, "hsi"))[0],
      i = r[1],
      u = r[2];
    return isNaN(o) && (o = 0), isNaN(i) && (i = 0), o > 360 && (o -= 360), o < 0 && (o += 360), (o /= 360) < 1 / 3 ? t = 1 - ((n = (1 - i) / 3) + (e = (1 + i * ed(ec * o) / ed(ef - ec * o)) / 3)) : o < 2 / 3 ? (o -= 1 / 3, n = 1 - ((e = (1 - i) / 3) + (t = (1 + i * ed(ec * o) / ed(ef - ec * o)) / 3))) : (o -= 2 / 3, e = 1 - ((t = (1 - i) / 3) + (n = (1 + i * ed(ec * o) / ed(ef - ec * o)) / 3))), e = el(u * e * 3), t = el(u * t * 3), [255 * e, 255 * t, 255 * (n = el(u * n * 3)), r.length > 3 ? r[3] : 1]
  }, s.autodetect.push({
    p: 2,
    test: function() {
      for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
      if ("array" === eh(e = ep(e, "hsi")) && 3 === e.length) return "hsi"
    }
  });
  var e_ = u.unpack,
    ey = u.type;
  d.prototype.hsl = function() {
    return L(this._rgb)
  }, p.hsl = function() {
    for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
    return new(Function.prototype.bind.apply(d, [null].concat(e, ["hsl"])))
  }, s.format.hsl = O, s.autodetect.push({
    p: 2,
    test: function() {
      for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
      if ("array" === ey(e = e_(e, "hsl")) && 3 === e.length) return "hsl"
    }
  });
  var eg = u.unpack,
    ev = Math.min,
    eb = Math.max,
    eM = u.unpack,
    ew = Math.floor,
    ek = u.unpack,
    eL = u.type,
    eD = function() {
      for (var e, t, n = [], r = arguments.length; r--;) n[r] = arguments[r];
      var a = (n = eg(n, "rgb"))[0],
        o = n[1],
        i = n[2],
        u = ev(a, o, i),
        s = eb(a, o, i),
        l = s - u;
      return 0 === s ? (e = Number.NaN, t = 0) : (t = l / s, a === s && (e = (o - i) / l), o === s && (e = 2 + (i - a) / l), i === s && (e = 4 + (a - o) / l), (e *= 60) < 0 && (e += 360)), [e, t, s / 255]
    };
  d.prototype.hsv = function() {
    return eD(this._rgb)
  }, p.hsv = function() {
    for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
    return new(Function.prototype.bind.apply(d, [null].concat(e, ["hsv"])))
  }, s.format.hsv = function() {
    for (var e, t, n, r, a, o, i, u, s, l = [], c = arguments.length; c--;) l[c] = arguments[c];
    var f = (l = eM(l, "hsv"))[0],
      d = l[1],
      p = l[2];
    if (p *= 255, 0 === d) i = u = s = p;
    else {
      360 === f && (f = 0), f > 360 && (f -= 360), f < 0 && (f += 360);
      var h = ew(f /= 60),
        m = f - h,
        _ = p * (1 - d),
        y = p * (1 - d * m),
        g = p * (1 - d * (1 - m));
      switch (h) {
        case 0:
          i = (e = [p, g, _])[0], u = e[1], s = e[2];
          break;
        case 1:
          i = (t = [y, p, _])[0], u = t[1], s = t[2];
          break;
        case 2:
          i = (n = [_, p, g])[0], u = n[1], s = n[2];
          break;
        case 3:
          i = (r = [_, y, p])[0], u = r[1], s = r[2];
          break;
        case 4:
          i = (a = [g, _, p])[0], u = a[1], s = a[2];
          break;
        case 5:
          i = (o = [p, _, y])[0], u = o[1], s = o[2]
      }
    }
    return [i, u, s, l.length > 3 ? l[3] : 1]
  }, s.autodetect.push({
    p: 2,
    test: function() {
      for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
      if ("array" === eL(e = ek(e, "hsv")) && 3 === e.length) return "hsv"
    }
  });
  var eS = {
      Kn: 18,
      Xn: .95047,
      Yn: 1,
      Zn: 1.08883,
      t0: .137931034,
      t1: .206896552,
      t2: .12841855,
      t3: .008856452
    },
    eT = u.unpack,
    eY = Math.pow,
    ex = function(e) {
      return (e /= 255) <= .04045 ? e / 12.92 : eY((e + .055) / 1.055, 2.4)
    },
    eE = function(e) {
      return e > eS.t3 ? eY(e, 1 / 3) : e / eS.t2 + eS.t0
    },
    eO = function(e, t, n) {
      return e = ex(e), t = ex(t), [eE((.4124564 * e + .3575761 * t + .1804375 * (n = ex(n))) / eS.Xn), eE((.2126729 * e + .7151522 * t + .072175 * n) / eS.Yn), eE((.0193339 * e + .119192 * t + .9503041 * n) / eS.Zn)]
    },
    eP = function() {
      for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
      var n = eT(e, "rgb"),
        r = eO(n[0], n[1], n[2]),
        a = r[0],
        o = r[1],
        i = r[2],
        u = 116 * o - 16;
      return [u < 0 ? 0 : u, 500 * (a - o), 200 * (o - i)]
    },
    ej = u.unpack,
    eC = Math.pow,
    eH = function(e) {
      return 255 * (e <= .00304 ? 12.92 * e : 1.055 * eC(e, 1 / 2.4) - .055)
    },
    eN = function(e) {
      return e > eS.t1 ? e * e * e : eS.t2 * (e - eS.t0)
    },
    eF = function() {
      for (var e, t, n, r, a, o = [], i = arguments.length; i--;) o[i] = arguments[i];
      var u = (o = ej(o, "lab"))[0],
        s = o[1],
        l = o[2];
      return t = (u + 16) / 116, e = isNaN(s) ? t : t + s / 500, n = isNaN(l) ? t : t - l / 200, t = eS.Yn * eN(t), e = eS.Xn * eN(e), r = eH(3.2404542 * e - 1.5371385 * t - .4985314 * (n = eS.Zn * eN(n))), a = eH(-.969266 * e + 1.8760108 * t + .041556 * n), [r, a, eH(.0556434 * e - .2040259 * t + 1.0572252 * n), o.length > 3 ? o[3] : 1]
    },
    eI = u.unpack,
    eA = u.type;
  d.prototype.lab = function() {
    return eP(this._rgb)
  }, p.lab = function() {
    for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
    return new(Function.prototype.bind.apply(d, [null].concat(e, ["lab"])))
  }, s.format.lab = eF, s.autodetect.push({
    p: 2,
    test: function() {
      for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
      if ("array" === eA(e = eI(e, "lab")) && 3 === e.length) return "lab"
    }
  });
  var eR = u.unpack,
    eW = u.RAD2DEG,
    ez = Math.sqrt,
    eU = Math.atan2,
    eB = Math.round,
    eK = function() {
      for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
      var n = eR(e, "lab"),
        r = n[0],
        a = n[1],
        o = n[2],
        i = ez(a * a + o * o),
        u = (eU(o, a) * eW + 360) % 360;
      return 0 === eB(1e4 * i) && (u = Number.NaN), [r, i, u]
    },
    eq = u.unpack,
    eJ = u.unpack,
    eV = u.DEG2RAD,
    eG = Math.sin,
    e$ = Math.cos,
    eQ = function() {
      for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
      var n = eJ(e, "lch"),
        r = n[0],
        a = n[1],
        o = n[2];
      return isNaN(o) && (o = 0), [r, e$(o *= eV) * a, eG(o) * a]
    },
    eZ = u.unpack,
    eX = function() {
      for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
      var n = eQ((e = eZ(e, "lch"))[0], e[1], e[2]),
        r = eF(n[0], n[1], n[2]);
      return [r[0], r[1], r[2], e.length > 3 ? e[3] : 1]
    },
    e0 = u.unpack,
    e1 = u.unpack,
    e2 = u.type,
    e4 = function() {
      for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
      var n = eq(e, "rgb"),
        r = eP(n[0], n[1], n[2]);
      return eK(r[0], r[1], r[2])
    };
  d.prototype.lch = function() {
    return e4(this._rgb)
  }, d.prototype.hcl = function() {
    return e4(this._rgb).reverse()
  }, p.lch = function() {
    for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
    return new(Function.prototype.bind.apply(d, [null].concat(e, ["lch"])))
  }, p.hcl = function() {
    for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
    return new(Function.prototype.bind.apply(d, [null].concat(e, ["hcl"])))
  }, s.format.lch = eX, s.format.hcl = function() {
    for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
    var n = e0(e, "hcl").reverse();
    return eX.apply(void 0, n)
  }, ["lch", "hcl"].forEach(function(e) {
    return s.autodetect.push({
      p: 2,
      test: function() {
        for (var t = [], n = arguments.length; n--;) t[n] = arguments[n];
        if ("array" === e2(t = e1(t, e)) && 3 === t.length) return e
      }
    })
  });
  var e3 = {
      aliceblue: "#f0f8ff",
      antiquewhite: "#faebd7",
      aqua: "#00ffff",
      aquamarine: "#7fffd4",
      azure: "#f0ffff",
      beige: "#f5f5dc",
      bisque: "#ffe4c4",
      black: "#000000",
      blanchedalmond: "#ffebcd",
      blue: "#0000ff",
      blueviolet: "#8a2be2",
      brown: "#a52a2a",
      burlywood: "#deb887",
      cadetblue: "#5f9ea0",
      chartreuse: "#7fff00",
      chocolate: "#d2691e",
      coral: "#ff7f50",
      cornflower: "#6495ed",
      cornflowerblue: "#6495ed",
      cornsilk: "#fff8dc",
      crimson: "#dc143c",
      cyan: "#00ffff",
      darkblue: "#00008b",
      darkcyan: "#008b8b",
      darkgoldenrod: "#b8860b",
      darkgray: "#a9a9a9",
      darkgreen: "#006400",
      darkgrey: "#a9a9a9",
      darkkhaki: "#bdb76b",
      darkmagenta: "#8b008b",
      darkolivegreen: "#556b2f",
      darkorange: "#ff8c00",
      darkorchid: "#9932cc",
      darkred: "#8b0000",
      darksalmon: "#e9967a",
      darkseagreen: "#8fbc8f",
      darkslateblue: "#483d8b",
      darkslategray: "#2f4f4f",
      darkslategrey: "#2f4f4f",
      darkturquoise: "#00ced1",
      darkviolet: "#9400d3",
      deeppink: "#ff1493",
      deepskyblue: "#00bfff",
      dimgray: "#696969",
      dimgrey: "#696969",
      dodgerblue: "#1e90ff",
      firebrick: "#b22222",
      floralwhite: "#fffaf0",
      forestgreen: "#228b22",
      fuchsia: "#ff00ff",
      gainsboro: "#dcdcdc",
      ghostwhite: "#f8f8ff",
      gold: "#ffd700",
      goldenrod: "#daa520",
      gray: "#808080",
      green: "#008000",
      greenyellow: "#adff2f",
      grey: "#808080",
      honeydew: "#f0fff0",
      hotpink: "#ff69b4",
      indianred: "#cd5c5c",
      indigo: "#4b0082",
      ivory: "#fffff0",
      khaki: "#f0e68c",
      laserlemon: "#ffff54",
      lavender: "#e6e6fa",
      lavenderblush: "#fff0f5",
      lawngreen: "#7cfc00",
      lemonchiffon: "#fffacd",
      lightblue: "#add8e6",
      lightcoral: "#f08080",
      lightcyan: "#e0ffff",
      lightgoldenrod: "#fafad2",
      lightgoldenrodyellow: "#fafad2",
      lightgray: "#d3d3d3",
      lightgreen: "#90ee90",
      lightgrey: "#d3d3d3",
      lightpink: "#ffb6c1",
      lightsalmon: "#ffa07a",
      lightseagreen: "#20b2aa",
      lightskyblue: "#87cefa",
      lightslategray: "#778899",
      lightslategrey: "#778899",
      lightsteelblue: "#b0c4de",
      lightyellow: "#ffffe0",
      lime: "#00ff00",
      limegreen: "#32cd32",
      linen: "#faf0e6",
      magenta: "#ff00ff",
      maroon: "#800000",
      maroon2: "#7f0000",
      maroon3: "#b03060",
      mediumaquamarine: "#66cdaa",
      mediumblue: "#0000cd",
      mediumorchid: "#ba55d3",
      mediumpurple: "#9370db",
      mediumseagreen: "#3cb371",
      mediumslateblue: "#7b68ee",
      mediumspringgreen: "#00fa9a",
      mediumturquoise: "#48d1cc",
      mediumvioletred: "#c71585",
      midnightblue: "#191970",
      mintcream: "#f5fffa",
      mistyrose: "#ffe4e1",
      moccasin: "#ffe4b5",
      navajowhite: "#ffdead",
      navy: "#000080",
      oldlace: "#fdf5e6",
      olive: "#808000",
      olivedrab: "#6b8e23",
      orange: "#ffa500",
      orangered: "#ff4500",
      orchid: "#da70d6",
      palegoldenrod: "#eee8aa",
      palegreen: "#98fb98",
      paleturquoise: "#afeeee",
      palevioletred: "#db7093",
      papayawhip: "#ffefd5",
      peachpuff: "#ffdab9",
      peru: "#cd853f",
      pink: "#ffc0cb",
      plum: "#dda0dd",
      powderblue: "#b0e0e6",
      purple: "#800080",
      purple2: "#7f007f",
      purple3: "#a020f0",
      rebeccapurple: "#663399",
      red: "#ff0000",
      rosybrown: "#bc8f8f",
      royalblue: "#4169e1",
      saddlebrown: "#8b4513",
      salmon: "#fa8072",
      sandybrown: "#f4a460",
      seagreen: "#2e8b57",
      seashell: "#fff5ee",
      sienna: "#a0522d",
      silver: "#c0c0c0",
      skyblue: "#87ceeb",
      slateblue: "#6a5acd",
      slategray: "#708090",
      slategrey: "#708090",
      snow: "#fffafa",
      springgreen: "#00ff7f",
      steelblue: "#4682b4",
      tan: "#d2b48c",
      teal: "#008080",
      thistle: "#d8bfd8",
      tomato: "#ff6347",
      turquoise: "#40e0d0",
      violet: "#ee82ee",
      wheat: "#f5deb3",
      white: "#ffffff",
      whitesmoke: "#f5f5f5",
      yellow: "#ffff00",
      yellowgreen: "#9acd32"
    },
    e6 = u.type;
  d.prototype.name = function() {
    for (var e = Z(this._rgb, "rgb"), t = 0, n = Object.keys(e3); t < n.length; t += 1) {
      var r = n[t];
      if (e3[r] === e) return r.toLowerCase()
    }
    return e
  }, s.format.named = function(e) {
    if (e3[e = e.toLowerCase()]) return et(e3[e]);
    throw Error("unknown color name: " + e)
  }, s.autodetect.push({
    p: 5,
    test: function(e) {
      for (var t = [], n = arguments.length - 1; n-- > 0;) t[n] = arguments[n + 1];
      if (!t.length && "string" === e6(e) && e3[e.toLowerCase()]) return "named"
    }
  });
  var e7 = u.unpack,
    e8 = u.type,
    e5 = u.type,
    e9 = function() {
      for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
      var n = e7(e, "rgb");
      return (n[0] << 16) + (n[1] << 8) + n[2]
    };
  d.prototype.num = function() {
    return e9(this._rgb)
  }, p.num = function() {
    for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
    return new(Function.prototype.bind.apply(d, [null].concat(e, ["num"])))
  }, s.format.num = function(e) {
    if ("number" == e8(e) && e >= 0 && e <= 16777215) return [e >> 16, e >> 8 & 255, 255 & e, 1];
    throw Error("unknown num color: " + e)
  }, s.autodetect.push({
    p: 5,
    test: function() {
      for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
      if (1 === e.length && "number" === e5(e[0]) && e[0] >= 0 && e[0] <= 16777215) return "num"
    }
  });
  var te = u.unpack,
    tt = u.type,
    tn = Math.round;
  d.prototype.rgb = function(e) {
    return (void 0 === e && (e = !0), !1 === e) ? this._rgb.slice(0, 3) : this._rgb.slice(0, 3).map(tn)
  }, d.prototype.rgba = function(e) {
    return void 0 === e && (e = !0), this._rgb.slice(0, 4).map(function(t, n) {
      return n < 3 ? !1 === e ? t : tn(t) : t
    })
  }, p.rgb = function() {
    for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
    return new(Function.prototype.bind.apply(d, [null].concat(e, ["rgb"])))
  }, s.format.rgb = function() {
    for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
    var n = te(e, "rgba");
    return void 0 === n[3] && (n[3] = 1), n
  }, s.autodetect.push({
    p: 3,
    test: function() {
      for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
      if ("array" === tt(e = te(e, "rgba")) && (3 === e.length || 4 === e.length && "number" == tt(e[3]) && e[3] >= 0 && e[3] <= 1)) return "rgb"
    }
  });
  var tr = Math.log,
    ta = function(e) {
      var t, n, r, a = e / 100;
      return a < 66 ? (t = 255, n = a < 6 ? 0 : -155.25485562709179 - .44596950469579133 * (n = a - 2) + 104.49216199393888 * tr(n), r = a < 20 ? 0 : -254.76935184120902 + .8274096064007395 * (r = a - 10) + 115.67994401066147 * tr(r)) : (t = 351.97690566805693 + .114206453784165 * (t = a - 55) - 40.25366309332127 * tr(t), n = 325.4494125711974 + .07943456536662342 * (n = a - 50) - 28.0852963507957 * tr(n), r = 255), [t, n, r, 1]
    },
    to = u.unpack,
    ti = Math.round,
    tu = function() {
      for (var e, t = [], n = arguments.length; n--;) t[n] = arguments[n];
      for (var r = to(t, "rgb"), a = r[0], o = r[2], i = 1e3, u = 4e4; u - i > .4;) {
        var s = ta(e = (u + i) * .5);
        s[2] / s[0] >= o / a ? u = e : i = e
      }
      return ti(e)
    };
  d.prototype.temp = d.prototype.kelvin = d.prototype.temperature = function() {
    return tu(this._rgb)
  }, p.temp = p.kelvin = p.temperature = function() {
    for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
    return new(Function.prototype.bind.apply(d, [null].concat(e, ["temp"])))
  }, s.format.temp = s.format.kelvin = s.format.temperature = ta;
  var ts = u.unpack,
    tl = Math.cbrt,
    tc = Math.pow,
    tf = Math.sign,
    td = function() {
      for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
      var n = ts(e, "rgb"),
        r = n[0],
        a = n[1],
        o = n[2],
        i = [tp(r / 255), tp(a / 255), tp(o / 255)],
        u = i[0],
        s = i[1],
        l = i[2],
        c = tl(.4122214708 * u + .5363325363 * s + .0514459929 * l),
        f = tl(.2119034982 * u + .6806995451 * s + .1073969566 * l),
        d = tl(.0883024619 * u + .2817188376 * s + .6299787005 * l);
      return [.2104542553 * c + .793617785 * f - .0040720468 * d, 1.9779984951 * c - 2.428592205 * f + .4505937099 * d, .0259040371 * c + .7827717662 * f - .808675766 * d]
    };

  function tp(e) {
    var t = Math.abs(e);
    return t < .04045 ? e / 12.92 : (tf(e) || 1) * tc((t + .055) / 1.055, 2.4)
  }
  var th = u.unpack,
    tm = Math.pow,
    t_ = Math.sign,
    ty = function() {
      for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
      var n = (e = th(e, "lab"))[0],
        r = e[1],
        a = e[2],
        o = tm(n + .3963377774 * r + .2158037573 * a, 3),
        i = tm(n - .1055613458 * r - .0638541728 * a, 3),
        u = tm(n - .0894841775 * r - 1.291485548 * a, 3);
      return [255 * tg(4.0767416621 * o - 3.3077115913 * i + .2309699292 * u), 255 * tg(-1.2684380046 * o + 2.6097574011 * i - .3413193965 * u), 255 * tg(-.0041960863 * o - .7034186147 * i + 1.707614701 * u), e.length > 3 ? e[3] : 1]
    };

  function tg(e) {
    var t = Math.abs(e);
    return t > .0031308 ? (t_(e) || 1) * (1.055 * tm(t, 1 / 2.4) - .055) : 12.92 * e
  }
  var tv = u.unpack,
    tb = u.type;
  d.prototype.oklab = function() {
    return td(this._rgb)
  }, p.oklab = function() {
    for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
    return new(Function.prototype.bind.apply(d, [null].concat(e, ["oklab"])))
  }, s.format.oklab = ty, s.autodetect.push({
    p: 3,
    test: function() {
      for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
      if ("array" === tb(e = tv(e, "oklab")) && 3 === e.length) return "oklab"
    }
  });
  var tM = u.unpack,
    tw = u.unpack,
    tk = u.unpack,
    tL = u.type,
    tD = function() {
      for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
      var n = tM(e, "rgb"),
        r = td(n[0], n[1], n[2]);
      return eK(r[0], r[1], r[2])
    };
  d.prototype.oklch = function() {
    return tD(this._rgb)
  }, p.oklch = function() {
    for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
    return new(Function.prototype.bind.apply(d, [null].concat(e, ["oklch"])))
  }, s.format.oklch = function() {
    for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
    var n = eQ((e = tw(e, "lch"))[0], e[1], e[2]),
      r = ty(n[0], n[1], n[2]);
    return [r[0], r[1], r[2], e.length > 3 ? e[3] : 1]
  }, s.autodetect.push({
    p: 3,
    test: function() {
      for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
      if ("array" === tL(e = tk(e, "oklch")) && 3 === e.length) return "oklch"
    }
  });
  var tS = u.type;
  d.prototype.alpha = function(e, t) {
    if (void 0 === t && (t = !1), void 0 !== e && "number" === tS(e)) return t ? (this._rgb[3] = e, this) : new d([this._rgb[0], this._rgb[1], this._rgb[2], e], "rgb");
    return this._rgb[3]
  };
  d.prototype.clipped = function() {
    return this._rgb._clipped || !1
  };
  d.prototype.darken = function(e) {
    void 0 === e && (e = 1);
    var t = this.lab();
    return t[0] -= eS.Kn * e, new d(t, "lab").alpha(this.alpha(), !0)
  }, d.prototype.brighten = function(e) {
    return void 0 === e && (e = 1), this.darken(-e)
  }, d.prototype.darker = d.prototype.darken, d.prototype.brighter = d.prototype.brighten;
  d.prototype.get = function(e) {
    var t = e.split("."),
      n = t[0],
      r = t[1],
      a = this[n]();
    if (!r) return a;
    var o = n.indexOf(r) - ("ok" === n.substr(0, 2) ? 2 : 0);
    if (o > -1) return a[o];
    throw Error("unknown channel " + r + " in mode " + n)
  };
  var tT = u.type,
    tY = Math.pow;
  d.prototype.luminance = function(e) {
    if (void 0 !== e && "number" === tT(e)) {
      if (0 === e) return new d([0, 0, 0, this._rgb[3]], "rgb");
      if (1 === e) return new d([255, 255, 255, this._rgb[3]], "rgb");
      var t = this.luminance(),
        n = 20,
        r = function(t, a) {
          var o = t.interpolate(a, .5, "rgb"),
            i = o.luminance();
          return !(1e-7 > Math.abs(e - i)) && n-- ? i > e ? r(t, o) : r(o, a) : o
        },
        a = (t > e ? r(new d([0, 0, 0]), this) : r(this, new d([255, 255, 255]))).rgb();
      return new d(a.concat([this._rgb[3]]))
    }
    return tx.apply(void 0, this._rgb.slice(0, 3))
  };
  var tx = function(e, t, n) {
      return e = tE(e), t = tE(t), .2126 * e + .7152 * t + .0722 * (n = tE(n))
    },
    tE = function(e) {
      return (e /= 255) <= .03928 ? e / 12.92 : tY((e + .055) / 1.055, 2.4)
    },
    tO = {},
    tP = u.type,
    tj = function(e, t, n) {
      void 0 === n && (n = .5);
      for (var r = [], a = arguments.length - 3; a-- > 0;) r[a] = arguments[a + 3];
      var o = r[0] || "lrgb";
      if (!tO[o] && !r.length && (o = Object.keys(tO)[0]), !tO[o]) throw Error("interpolation mode " + o + " is not defined");
      return "object" !== tP(e) && (e = new d(e)), "object" !== tP(t) && (t = new d(t)), tO[o](e, t, n).alpha(e.alpha() + n * (t.alpha() - e.alpha()))
    };
  d.prototype.mix = d.prototype.interpolate = function(e, t) {
    void 0 === t && (t = .5);
    for (var n = [], r = arguments.length - 2; r-- > 0;) n[r] = arguments[r + 2];
    return tj.apply(void 0, [this, e, t].concat(n))
  };
  d.prototype.premultiply = function(e) {
    void 0 === e && (e = !1);
    var t = this._rgb,
      n = t[3];
    return e ? (this._rgb = [t[0] * n, t[1] * n, t[2] * n, n], this) : new d([t[0] * n, t[1] * n, t[2] * n, n], "rgb")
  };
  d.prototype.saturate = function(e) {
    void 0 === e && (e = 1);
    var t = this.lch();
    return t[1] += eS.Kn * e, t[1] < 0 && (t[1] = 0), new d(t, "lch").alpha(this.alpha(), !0)
  }, d.prototype.desaturate = function(e) {
    return void 0 === e && (e = 1), this.saturate(-e)
  };
  var tC = u.type;
  d.prototype.set = function(e, t, n) {
    void 0 === n && (n = !1);
    var r = e.split("."),
      a = r[0],
      o = r[1],
      i = this[a]();
    if (!o) return i;
    var u = a.indexOf(o) - ("ok" === a.substr(0, 2) ? 2 : 0);
    if (u > -1) {
      if ("string" == tC(t)) switch (t.charAt(0)) {
          case "+":
          case "-":
            i[u] += +t;
            break;
          case "*":
            i[u] *= +t.substr(1);
            break;
          case "/":
            i[u] /= +t.substr(1);
            break;
          default:
            i[u] = +t
        } else if ("number" === tC(t)) i[u] = t;
        else throw Error("unsupported value for Color.set");
      var s = new d(i, a);
      return n ? (this._rgb = s._rgb, this) : s
    }
    throw Error("unknown channel " + o + " in mode " + a)
  };
  tO.rgb = function(e, t, n) {
    var r = e._rgb,
      a = t._rgb;
    return new d(r[0] + n * (a[0] - r[0]), r[1] + n * (a[1] - r[1]), r[2] + n * (a[2] - r[2]), "rgb")
  };
  var tH = Math.sqrt,
    tN = Math.pow;
  tO.lrgb = function(e, t, n) {
    var r = e._rgb,
      a = r[0],
      o = r[1],
      i = r[2],
      u = t._rgb,
      s = u[0],
      l = u[1],
      c = u[2];
    return new d(tH(tN(a, 2) * (1 - n) + tN(s, 2) * n), tH(tN(o, 2) * (1 - n) + tN(l, 2) * n), tH(tN(i, 2) * (1 - n) + tN(c, 2) * n), "rgb")
  };
  tO.lab = function(e, t, n) {
    var r = e.lab(),
      a = t.lab();
    return new d(r[0] + n * (a[0] - r[0]), r[1] + n * (a[1] - r[1]), r[2] + n * (a[2] - r[2]), "lab")
  };
  var tF = function(e, t, n, r) {
      var a, o, i, u, s, l, c, f, p, h, m, _, y, g;
      return "hsl" === r ? (i = e.hsl(), u = t.hsl()) : "hsv" === r ? (i = e.hsv(), u = t.hsv()) : "hcg" === r ? (i = e.hcg(), u = t.hcg()) : "hsi" === r ? (i = e.hsi(), u = t.hsi()) : "lch" === r || "hcl" === r ? (r = "hcl", i = e.hcl(), u = t.hcl()) : "oklch" === r && (i = e.oklch().reverse(), u = t.oklch().reverse()), ("h" === r.substr(0, 1) || "oklch" === r) && (s = (a = i)[0], c = a[1], p = a[2], l = (o = u)[0], f = o[1], h = o[2]), isNaN(s) || isNaN(l) ? isNaN(s) ? isNaN(l) ? _ = Number.NaN : (_ = l, (1 == p || 0 == p) && "hsv" != r && (m = f)) : (_ = s, (1 == h || 0 == h) && "hsv" != r && (m = c)) : (g = l > s && l - s > 180 ? l - (s + 360) : l < s && s - l > 180 ? l + 360 - s : l - s, _ = s + n * g), void 0 === m && (m = c + n * (f - c)), y = p + n * (h - p), "oklch" === r ? new d([y, m, _], r) : new d([_, m, y], r)
    },
    tI = function(e, t, n) {
      return tF(e, t, n, "lch")
    };
  tO.lch = tI, tO.hcl = tI;
  tO.num = function(e, t, n) {
    var r = e.num();
    return new d(r + n * (t.num() - r), "num")
  };
  tO.hcg = function(e, t, n) {
    return tF(e, t, n, "hcg")
  };
  tO.hsi = function(e, t, n) {
    return tF(e, t, n, "hsi")
  };
  tO.hsl = function(e, t, n) {
    return tF(e, t, n, "hsl")
  };
  tO.hsv = function(e, t, n) {
    return tF(e, t, n, "hsv")
  };
  tO.oklab = function(e, t, n) {
    var r = e.oklab(),
      a = t.oklab();
    return new d(r[0] + n * (a[0] - r[0]), r[1] + n * (a[1] - r[1]), r[2] + n * (a[2] - r[2]), "oklab")
  };
  tO.oklch = function(e, t, n) {
    return tF(e, t, n, "oklch")
  };
  var tA = u.clip_rgb,
    tR = Math.pow,
    tW = Math.sqrt,
    tz = Math.PI,
    tU = Math.cos,
    tB = Math.sin,
    tK = Math.atan2,
    tq = function(e, t) {
      for (var n = e.length, r = [0, 0, 0, 0], a = 0; a < e.length; a++) {
        var o = e[a],
          i = t[a] / n,
          u = o._rgb;
        r[0] += tR(u[0], 2) * i, r[1] += tR(u[1], 2) * i, r[2] += tR(u[2], 2) * i, r[3] += u[3] * i
      }
      return r[0] = tW(r[0]), r[1] = tW(r[1]), r[2] = tW(r[2]), r[3] > .9999999 && (r[3] = 1), new d(tA(r))
    },
    tJ = u.type,
    tV = Math.pow,
    tG = function(e) {
      var t = "rgb",
        n = p("#ccc"),
        r = 0,
        a = [0, 1],
        o = [],
        i = [0, 0],
        u = !1,
        s = [],
        l = !1,
        c = 0,
        f = 1,
        d = !1,
        h = {},
        m = !0,
        _ = 1,
        y = function(e) {
          if (e = e || ["#fff", "#000"], "string" === tJ(e) && p.brewer && p.brewer[e.toLowerCase()] && (e = p.brewer[e.toLowerCase()]), "array" === tJ(e)) {
            1 === e.length && (e = [e[0], e[0]]), e = e.slice(0);
            for (var t = 0; t < e.length; t++) e[t] = p(e[t]);
            o.length = 0;
            for (var n = 0; n < e.length; n++) o.push(n / (e.length - 1))
          }
          return w(), s = e
        },
        g = function(e) {
          if (null != u) {
            for (var t = u.length - 1, n = 0; n < t && e >= u[n];) n++;
            return n - 1
          }
          return 0
        },
        v = function(e) {
          return e
        },
        b = function(e) {
          return e
        },
        M = function(e, r) {
          if (null == r && (r = !1), isNaN(e) || null === e) return n;
          if (r) l = e;
          else if (u && u.length > 2) {
            var a, l;
            l = g(e) / (u.length - 2)
          } else l = f !== c ? (e - c) / (f - c) : 1;
          l = b(l), !r && (l = v(l)), 1 !== _ && (l = tV(l, _));
          var d = Math.floor(1e4 * (l = Math.min(1, Math.max(0, l = i[0] + l * (1 - i[0] - i[1])))));
          if (m && h[d]) a = h[d];
          else {
            if ("array" === tJ(s))
              for (var y = 0; y < o.length; y++) {
                var M = o[y];
                if (l <= M || l >= M && y === o.length - 1) {
                  a = s[y];
                  break
                }
                if (l > M && l < o[y + 1]) {
                  l = (l - M) / (o[y + 1] - M), a = p.interpolate(s[y], s[y + 1], l, t);
                  break
                }
              } else "function" === tJ(s) && (a = s(l));
            m && (h[d] = a)
          }
          return a
        },
        w = function() {
          return h = {}
        };
      y(e);
      var k = function(e) {
        var t = p(M(e));
        return l && t[l] ? t[l]() : t
      };
      return k.classes = function(e) {
        if (null != e) {
          if ("array" === tJ(e)) u = e, a = [e[0], e[e.length - 1]];
          else {
            var t = p.analyze(a);
            u = 0 === e ? [t.min, t.max] : p.limits(t, "e", e)
          }
          return k
        }
        return u
      }, k.domain = function(e) {
        if (!arguments.length) return a;
        c = e[0], f = e[e.length - 1], o = [];
        var t = s.length;
        if (e.length === t && c !== f)
          for (var n = 0, r = Array.from(e); n < r.length; n += 1) {
            var i = r[n];
            o.push((i - c) / (f - c))
          } else {
            for (var u = 0; u < t; u++) o.push(u / (t - 1));
            if (e.length > 2) {
              var l = e.map(function(t, n) {
                  return n / (e.length - 1)
                }),
                d = e.map(function(e) {
                  return (e - c) / (f - c)
                });
              !d.every(function(e, t) {
                return l[t] === e
              }) && (b = function(e) {
                if (e <= 0 || e >= 1) return e;
                for (var t = 0; e >= d[t + 1];) t++;
                var n = (e - d[t]) / (d[t + 1] - d[t]);
                return l[t] + n * (l[t + 1] - l[t])
              })
            }
          }
        return a = [c, f], k
      }, k.mode = function(e) {
        return arguments.length ? (t = e, w(), k) : t
      }, k.range = function(e, t) {
        return y(e), k
      }, k.out = function(e) {
        return l = e, k
      }, k.spread = function(e) {
        return arguments.length ? (r = e, k) : r
      }, k.correctLightness = function(e) {
        return null == e && (e = !0), d = e, w(), v = d ? function(e) {
          for (var t = M(0, !0).lab()[0], n = M(1, !0).lab()[0], r = t > n, a = M(e, !0).lab()[0], o = t + (n - t) * e, i = a - o, u = 0, s = 1, l = 20; Math.abs(i) > .01 && l-- > 0;) r && (i *= -1), i < 0 ? (u = e, e += (s - e) * .5) : (s = e, e += (u - e) * .5), i = (a = M(e, !0).lab()[0]) - o;
          return e
        } : function(e) {
          return e
        }, k
      }, k.padding = function(e) {
        return null != e ? ("number" === tJ(e) && (e = [e, e]), i = e, k) : i
      }, k.colors = function(t, n) {
        arguments.length < 2 && (n = "hex");
        var r = [];
        if (0 == arguments.length) r = s.slice(0);
        else if (1 === t) r = [k(.5)];
        else if (t > 1) {
          var o = a[0],
            i = a[1] - o;
          r = (function(e, t, n) {
            for (var r = [], a = e < t, o = n ? a ? t + 1 : t - 1 : t, i = e; a ? i < o : i > o; a ? i++ : i--) r.push(i);
            return r
          })(0, t, !1).map(function(e) {
            return k(o + e / (t - 1) * i)
          })
        } else {
          e = [];
          var l = [];
          if (u && u.length > 2)
            for (var c = 1, f = u.length, d = 1 <= f; d ? c < f : c > f; d ? c++ : c--) l.push((u[c - 1] + u[c]) * .5);
          else l = a;
          r = l.map(function(e) {
            return k(e)
          })
        }
        return p[n] && (r = r.map(function(e) {
          return e[n]()
        })), r
      }, k.cache = function(e) {
        return null != e ? (m = e, k) : m
      }, k.gamma = function(e) {
        return null != e ? (_ = e, k) : _
      }, k.nodata = function(e) {
        return null != e ? (n = p(e), k) : n
      }, k
    },
    t$ = function(e) {
      for (var t = [1, 1], n = 1; n < e; n++) {
        for (var r = [1], a = 1; a <= t.length; a++) r[a] = (t[a] || 0) + t[a - 1];
        t = r
      }
      return t
    },
    tQ = function(e) {
      var t, n, r, a, o, i, u, s, l, c, f;
      if (2 === (e = e.map(function(e) {
          return new d(e)
        })).length) o = (t = e.map(function(e) {
        return e.lab()
      }))[0], i = t[1], a = function(e) {
        return new d([0, 1, 2].map(function(t) {
          return o[t] + e * (i[t] - o[t])
        }), "lab")
      };
      else if (3 === e.length) o = (n = e.map(function(e) {
        return e.lab()
      }))[0], i = n[1], u = n[2], a = function(e) {
        return new d([0, 1, 2].map(function(t) {
          return (1 - e) * (1 - e) * o[t] + 2 * (1 - e) * e * i[t] + e * e * u[t]
        }), "lab")
      };
      else if (4 === e.length) o = (r = e.map(function(e) {
        return e.lab()
      }))[0], i = r[1], u = r[2], s = r[3], a = function(e) {
        return new d([0, 1, 2].map(function(t) {
          return (1 - e) * (1 - e) * (1 - e) * o[t] + 3 * (1 - e) * (1 - e) * e * i[t] + 3 * (1 - e) * e * e * u[t] + e * e * e * s[t]
        }), "lab")
      };
      else if (e.length >= 5) l = e.map(function(e) {
        return e.lab()
      }), c = t$(f = e.length - 1), a = function(e) {
        var t = 1 - e;
        return new d([0, 1, 2].map(function(n) {
          return l.reduce(function(r, a, o) {
            return r + c[o] * Math.pow(t, f - o) * Math.pow(e, o) * a[n]
          }, 0)
        }), "lab")
      };
      else throw RangeError("No point in running bezier with only one color.");
      return a
    },
    tZ = function(e, t, n) {
      if (!tZ[n]) throw Error("unknown blend mode " + n);
      return tZ[n](e, t)
    },
    tX = function(e) {
      return function(t, n) {
        var r = p(n).rgb(),
          a = p(t).rgb();
        return p.rgb(e(r, a))
      }
    },
    t0 = function(e) {
      return function(t, n) {
        var r = [];
        return r[0] = e(t[0], n[0]), r[1] = e(t[1], n[1]), r[2] = e(t[2], n[2]), r
      }
    };
  tZ.normal = tX(t0(function(e) {
    return e
  })), tZ.multiply = tX(t0(function(e, t) {
    return e * t / 255
  })), tZ.screen = tX(t0(function(e, t) {
    return 255 * (1 - (1 - e / 255) * (1 - t / 255))
  })), tZ.overlay = tX(t0(function(e, t) {
    return t < 128 ? 2 * e * t / 255 : 255 * (1 - 2 * (1 - e / 255) * (1 - t / 255))
  })), tZ.darken = tX(t0(function(e, t) {
    return e > t ? t : e
  })), tZ.lighten = tX(t0(function(e, t) {
    return e > t ? e : t
  })), tZ.dodge = tX(t0(function(e, t) {
    return 255 === e ? 255 : (e = 255 * (t / 255) / (1 - e / 255)) > 255 ? 255 : e
  })), tZ.burn = tX(t0(function(e, t) {
    return 255 * (1 - (1 - t / 255) / (e / 255))
  }));
  for (var t1 = u.type, t2 = u.clip_rgb, t4 = u.TWOPI, t3 = Math.pow, t6 = Math.sin, t7 = Math.cos, t8 = Math.floor, t5 = Math.random, t9 = Math.log, ne = Math.pow, nt = Math.floor, nn = Math.abs, nr = function(e, t) {
      void 0 === t && (t = null);
      var n = {
        min: Number.MAX_VALUE,
        max: -1 * Number.MAX_VALUE,
        sum: 0,
        values: [],
        count: 0
      };
      return "object" === o(e) && (e = Object.values(e)), e.forEach(function(e) {
        t && "object" === o(e) && (e = e[t]), null != e && !isNaN(e) && (n.values.push(e), n.sum += e, e < n.min && (n.min = e), e > n.max && (n.max = e), n.count += 1)
      }), n.domain = [n.min, n.max], n.limits = function(e, t) {
        return na(n, e, t)
      }, n
    }, na = function(e, t, n) {
      void 0 === t && (t = "equal"), void 0 === n && (n = 7), "array" == o(e) && (e = nr(e));
      var r = e.min,
        a = e.max,
        i = e.values.sort(function(e, t) {
          return e - t
        });
      if (1 === n) return [r, a];
      var u = [];
      if ("c" === t.substr(0, 1) && (u.push(r), u.push(a)), "e" === t.substr(0, 1)) {
        u.push(r);
        for (var s = 1; s < n; s++) u.push(r + s / n * (a - r));
        u.push(a)
      } else if ("l" === t.substr(0, 1)) {
        if (r <= 0) throw Error("Logarithmic scales are only possible for values > 0");
        var l = Math.LOG10E * t9(r),
          c = Math.LOG10E * t9(a);
        u.push(r);
        for (var f = 1; f < n; f++) u.push(ne(10, l + f / n * (c - l)));
        u.push(a)
      } else if ("q" === t.substr(0, 1)) {
        u.push(r);
        for (var d = 1; d < n; d++) {
          var p = (i.length - 1) * d / n,
            h = nt(p);
          if (h === p) u.push(i[h]);
          else {
            var m = p - h;
            u.push(i[h] * (1 - m) + i[h + 1] * m)
          }
        }
        u.push(a)
      } else if ("k" === t.substr(0, 1)) {
        var _, y = i.length,
          g = Array(y),
          v = Array(n),
          b = !0,
          M = 0,
          w = null;
        (w = []).push(r);
        for (var k = 1; k < n; k++) w.push(r + k / n * (a - r));
        for (w.push(a); b;) {
          for (var L = 0; L < n; L++) v[L] = 0;
          for (var D = 0; D < y; D++) {
            for (var S = i[D], T = Number.MAX_VALUE, Y = void 0, x = 0; x < n; x++) {
              var E = nn(w[x] - S);
              E < T && (T = E, Y = x), v[Y]++, g[D] = Y
            }
          }
          for (var O = Array(n), P = 0; P < n; P++) O[P] = null;
          for (var j = 0; j < y; j++) null === O[_ = g[j]] ? O[_] = i[j] : O[_] += i[j];
          for (var C = 0; C < n; C++) O[C] *= 1 / v[C];
          b = !1;
          for (var H = 0; H < n; H++)
            if (O[H] !== w[H]) {
              b = !0;
              break
            } w = O, ++M > 200 && (b = !1)
        }
        for (var N = {}, F = 0; F < n; F++) N[F] = [];
        for (var I = 0; I < y; I++) N[_ = g[I]].push(i[I]);
        for (var A = [], R = 0; R < n; R++) A.push(N[R][0]), A.push(N[R][N[R].length - 1]);
        A = A.sort(function(e, t) {
          return e - t
        }), u.push(A[0]);
        for (var W = 1; W < A.length; W += 2) {
          var z = A[W];
          !isNaN(z) && -1 === u.indexOf(z) && u.push(z)
        }
      }
      return u
    }, no = {
      analyze: nr,
      limits: na
    }, ni = Math.sqrt, nu = Math.pow, ns = Math.min, nl = Math.max, nc = Math.atan2, nf = Math.abs, nd = Math.cos, np = Math.sin, nh = Math.exp, nm = Math.PI, n_ = {
      OrRd: ["#fff7ec", "#fee8c8", "#fdd49e", "#fdbb84", "#fc8d59", "#ef6548", "#d7301f", "#b30000", "#7f0000"],
      PuBu: ["#fff7fb", "#ece7f2", "#d0d1e6", "#a6bddb", "#74a9cf", "#3690c0", "#0570b0", "#045a8d", "#023858"],
      BuPu: ["#f7fcfd", "#e0ecf4", "#bfd3e6", "#9ebcda", "#8c96c6", "#8c6bb1", "#88419d", "#810f7c", "#4d004b"],
      Oranges: ["#fff5eb", "#fee6ce", "#fdd0a2", "#fdae6b", "#fd8d3c", "#f16913", "#d94801", "#a63603", "#7f2704"],
      BuGn: ["#f7fcfd", "#e5f5f9", "#ccece6", "#99d8c9", "#66c2a4", "#41ae76", "#238b45", "#006d2c", "#00441b"],
      YlOrBr: ["#ffffe5", "#fff7bc", "#fee391", "#fec44f", "#fe9929", "#ec7014", "#cc4c02", "#993404", "#662506"],
      YlGn: ["#ffffe5", "#f7fcb9", "#d9f0a3", "#addd8e", "#78c679", "#41ab5d", "#238443", "#006837", "#004529"],
      Reds: ["#fff5f0", "#fee0d2", "#fcbba1", "#fc9272", "#fb6a4a", "#ef3b2c", "#cb181d", "#a50f15", "#67000d"],
      RdPu: ["#fff7f3", "#fde0dd", "#fcc5c0", "#fa9fb5", "#f768a1", "#dd3497", "#ae017e", "#7a0177", "#49006a"],
      Greens: ["#f7fcf5", "#e5f5e0", "#c7e9c0", "#a1d99b", "#74c476", "#41ab5d", "#238b45", "#006d2c", "#00441b"],
      YlGnBu: ["#ffffd9", "#edf8b1", "#c7e9b4", "#7fcdbb", "#41b6c4", "#1d91c0", "#225ea8", "#253494", "#081d58"],
      Purples: ["#fcfbfd", "#efedf5", "#dadaeb", "#bcbddc", "#9e9ac8", "#807dba", "#6a51a3", "#54278f", "#3f007d"],
      GnBu: ["#f7fcf0", "#e0f3db", "#ccebc5", "#a8ddb5", "#7bccc4", "#4eb3d3", "#2b8cbe", "#0868ac", "#084081"],
      Greys: ["#ffffff", "#f0f0f0", "#d9d9d9", "#bdbdbd", "#969696", "#737373", "#525252", "#252525", "#000000"],
      YlOrRd: ["#ffffcc", "#ffeda0", "#fed976", "#feb24c", "#fd8d3c", "#fc4e2a", "#e31a1c", "#bd0026", "#800026"],
      PuRd: ["#f7f4f9", "#e7e1ef", "#d4b9da", "#c994c7", "#df65b0", "#e7298a", "#ce1256", "#980043", "#67001f"],
      Blues: ["#f7fbff", "#deebf7", "#c6dbef", "#9ecae1", "#6baed6", "#4292c6", "#2171b5", "#08519c", "#08306b"],
      PuBuGn: ["#fff7fb", "#ece2f0", "#d0d1e6", "#a6bddb", "#67a9cf", "#3690c0", "#02818a", "#016c59", "#014636"],
      Viridis: ["#440154", "#482777", "#3f4a8a", "#31678e", "#26838f", "#1f9d8a", "#6cce5a", "#b6de2b", "#fee825"],
      Spectral: ["#9e0142", "#d53e4f", "#f46d43", "#fdae61", "#fee08b", "#ffffbf", "#e6f598", "#abdda4", "#66c2a5", "#3288bd", "#5e4fa2"],
      RdYlGn: ["#a50026", "#d73027", "#f46d43", "#fdae61", "#fee08b", "#ffffbf", "#d9ef8b", "#a6d96a", "#66bd63", "#1a9850", "#006837"],
      RdBu: ["#67001f", "#b2182b", "#d6604d", "#f4a582", "#fddbc7", "#f7f7f7", "#d1e5f0", "#92c5de", "#4393c3", "#2166ac", "#053061"],
      PiYG: ["#8e0152", "#c51b7d", "#de77ae", "#f1b6da", "#fde0ef", "#f7f7f7", "#e6f5d0", "#b8e186", "#7fbc41", "#4d9221", "#276419"],
      PRGn: ["#40004b", "#762a83", "#9970ab", "#c2a5cf", "#e7d4e8", "#f7f7f7", "#d9f0d3", "#a6dba0", "#5aae61", "#1b7837", "#00441b"],
      RdYlBu: ["#a50026", "#d73027", "#f46d43", "#fdae61", "#fee090", "#ffffbf", "#e0f3f8", "#abd9e9", "#74add1", "#4575b4", "#313695"],
      BrBG: ["#543005", "#8c510a", "#bf812d", "#dfc27d", "#f6e8c3", "#f5f5f5", "#c7eae5", "#80cdc1", "#35978f", "#01665e", "#003c30"],
      RdGy: ["#67001f", "#b2182b", "#d6604d", "#f4a582", "#fddbc7", "#ffffff", "#e0e0e0", "#bababa", "#878787", "#4d4d4d", "#1a1a1a"],
      PuOr: ["#7f3b08", "#b35806", "#e08214", "#fdb863", "#fee0b6", "#f7f7f7", "#d8daeb", "#b2abd2", "#8073ac", "#542788", "#2d004b"],
      Set2: ["#66c2a5", "#fc8d62", "#8da0cb", "#e78ac3", "#a6d854", "#ffd92f", "#e5c494", "#b3b3b3"],
      Accent: ["#7fc97f", "#beaed4", "#fdc086", "#ffff99", "#386cb0", "#f0027f", "#bf5b17", "#666666"],
      Set1: ["#e41a1c", "#377eb8", "#4daf4a", "#984ea3", "#ff7f00", "#ffff33", "#a65628", "#f781bf", "#999999"],
      Set3: ["#8dd3c7", "#ffffb3", "#bebada", "#fb8072", "#80b1d3", "#fdb462", "#b3de69", "#fccde5", "#d9d9d9", "#bc80bd", "#ccebc5", "#ffed6f"],
      Dark2: ["#1b9e77", "#d95f02", "#7570b3", "#e7298a", "#66a61e", "#e6ab02", "#a6761d", "#666666"],
      Paired: ["#a6cee3", "#1f78b4", "#b2df8a", "#33a02c", "#fb9a99", "#e31a1c", "#fdbf6f", "#ff7f00", "#cab2d6", "#6a3d9a", "#ffff99", "#b15928"],
      Pastel2: ["#b3e2cd", "#fdcdac", "#cbd5e8", "#f4cae4", "#e6f5c9", "#fff2ae", "#f1e2cc", "#cccccc"],
      Pastel1: ["#fbb4ae", "#b3cde3", "#ccebc5", "#decbe4", "#fed9a6", "#ffffcc", "#e5d8bd", "#fddaec", "#f2f2f2"]
    }, ny = 0, ng = Object.keys(n_); ny < ng.length; ny += 1) {
    var nv = ng[ny];
    n_[nv.toLowerCase()] = n_[nv]
  }
  return p.average = function(e, t, n) {
    void 0 === t && (t = "lrgb"), void 0 === n && (n = null);
    var r = e.length;
    !n && (n = Array.from(Array(r)).map(function() {
      return 1
    }));
    var a = r / n.reduce(function(e, t) {
      return e + t
    });
    if (n.forEach(function(e, t) {
        n[t] *= a
      }), e = e.map(function(e) {
        return new d(e)
      }), "lrgb" === t) return tq(e, n);
    for (var o = e.shift(), i = o.get(t), u = [], s = 0, l = 0, c = 0; c < i.length; c++)
      if (i[c] = (i[c] || 0) * n[0], u.push(isNaN(i[c]) ? 0 : n[0]), "h" === t.charAt(c) && !isNaN(i[c])) {
        var f = i[c] / 180 * tz;
        s += tU(f) * n[0], l += tB(f) * n[0]
      } var p = o.alpha() * n[0];
    e.forEach(function(e, r) {
      var a = e.get(t);
      p += e.alpha() * n[r + 1];
      for (var o = 0; o < i.length; o++)
        if (!isNaN(a[o])) {
          if (u[o] += n[r + 1], "h" === t.charAt(o)) {
            var c = a[o] / 180 * tz;
            s += tU(c) * n[r + 1], l += tB(c) * n[r + 1]
          } else i[o] += a[o] * n[r + 1]
        }
    });
    for (var h = 0; h < i.length; h++)
      if ("h" === t.charAt(h)) {
        for (var m = tK(l / u[h], s / u[h]) / tz * 180; m < 0;) m += 360;
        for (; m >= 360;) m -= 360;
        i[h] = m
      } else i[h] = i[h] / u[h];
    return p /= r, new d(i, t).alpha(p > .99999 ? 1 : p, !0)
  }, p.bezier = function(e) {
    var t = tQ(e);
    return t.scale = function() {
      return tG(t)
    }, t
  }, p.blend = tZ, p.cubehelix = function(e, t, n, r, a) {
    void 0 === e && (e = 300), void 0 === t && (t = -1.5), void 0 === n && (n = 1), void 0 === r && (r = 1), void 0 === a && (a = [0, 1]);
    var o, i = 0;
    "array" === t1(a) ? o = a[1] - a[0] : (o = 0, a = [a, a]);
    var u = function(u) {
      var s = t4 * ((e + 120) / 360 + t * u),
        l = t3(a[0] + o * u, r),
        c = (0 !== i ? n[0] + u * i : n) * l * (1 - l) / 2,
        f = t7(s),
        d = t6(s);
      return p(t2([255 * (l + c * (-.14861 * f + 1.78277 * d)), 255 * (l + c * (-.29227 * f - .90649 * d)), 255 * (l + c * (1.97294 * f)), 1]))
    };
    return u.start = function(t) {
      return null == t ? e : (e = t, u)
    }, u.rotations = function(e) {
      return null == e ? t : (t = e, u)
    }, u.gamma = function(e) {
      return null == e ? r : (r = e, u)
    }, u.hue = function(e) {
      return null == e ? n : ("array" === t1(n = e) ? 0 == (i = n[1] - n[0]) && (n = n[1]) : i = 0, u)
    }, u.lightness = function(e) {
      return null == e ? a : ("array" === t1(e) ? (a = e, o = e[1] - e[0]) : (a = [e, e], o = 0), u)
    }, u.scale = function() {
      return p.scale(u)
    }, u.hue(n), u
  }, p.mix = p.interpolate = tj, p.random = function() {
    for (var e = "#", t = 0; t < 6; t++) e += "0123456789abcdef".charAt(t8(16 * t5()));
    return new d(e, "hex")
  }, p.scale = tG, p.analyze = no.analyze, p.contrast = function(e, t) {
    e = new d(e), t = new d(t);
    var n = e.luminance(),
      r = t.luminance();
    return n > r ? (n + .05) / (r + .05) : (r + .05) / (n + .05)
  }, p.deltaE = function(e, t, n, r, a) {
    void 0 === n && (n = 1), void 0 === r && (r = 1), void 0 === a && (a = 1);
    var o = function(e) {
        return 360 * e / (2 * nm)
      },
      i = function(e) {
        return 2 * nm * e / 360
      };
    e = new d(e), t = new d(t);
    var u = Array.from(e.lab()),
      s = u[0],
      l = u[1],
      c = u[2],
      f = Array.from(t.lab()),
      p = f[0],
      h = f[1],
      m = f[2],
      _ = (s + p) / 2,
      y = (ni(nu(l, 2) + nu(c, 2)) + ni(nu(h, 2) + nu(m, 2))) / 2,
      g = .5 * (1 - ni(nu(y, 7) / (nu(y, 7) + nu(25, 7)))),
      v = l * (1 + g),
      b = h * (1 + g),
      M = ni(nu(v, 2) + nu(c, 2)),
      w = ni(nu(b, 2) + nu(m, 2)),
      k = (M + w) / 2,
      L = o(nc(c, v)),
      D = o(nc(m, b)),
      S = L >= 0 ? L : L + 360,
      T = D >= 0 ? D : D + 360,
      Y = nf(S - T) > 180 ? (S + T + 360) / 2 : (S + T) / 2,
      x = 1 - .17 * nd(i(Y - 30)) + .24 * nd(i(2 * Y)) + .32 * nd(i(3 * Y + 6)) - .2 * nd(i(4 * Y - 63)),
      E = T - S;
    E = 180 >= nf(E) ? E : T <= S ? E + 360 : E - 360, E = 2 * ni(M * w) * np(i(E) / 2);
    var O = w - M,
      P = 1 + .015 * nu(_ - 50, 2) / ni(20 + nu(_ - 50, 2)),
      j = 1 + .045 * k,
      C = 1 + .015 * k * x,
      H = 30 * nh(-nu((Y - 275) / 25, 2)),
      N = -(2 * ni(nu(k, 7) / (nu(k, 7) + nu(25, 7)))) * np(2 * i(H));
    return nl(0, ns(100, ni(nu((p - s) / (n * P), 2) + nu(O / (r * j), 2) + nu(E / (a * C), 2) + N * (O / (r * j)) * (E / (a * C)))))
  }, p.distance = function(e, t, n) {
    void 0 === n && (n = "lab"), e = new d(e), t = new d(t);
    var r = e.get(n),
      a = t.get(n),
      o = 0;
    for (var i in r) {
      var u = (r[i] || 0) - (a[i] || 0);
      o += u * u
    }
    return Math.sqrt(o)
  }, p.limits = no.limits, p.valid = function() {
    for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
    try {
      return new(Function.prototype.bind.apply(d, [null].concat(e))), !0
    } catch (e) {
      return !1
    }
  }, p.scales = {
    cool: function() {
      return tG([p.hsl(180, 1, .9), p.hsl(250, .7, .4)])
    },
    hot: function() {
      return tG(["#000", "#f00", "#ff0", "#fff"]).mode("rgb")
    }
  }, p.colors = e3, p.brewer = n_, p
}, "object" == typeof t && void 0 !== e ? e.exports = a() : "function" == typeof define && define.amd ? define(a) : (r = "undefined" != typeof globalThis ? globalThis : r || self).chroma = a()