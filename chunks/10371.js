var n, i;
t = e.nmd(t), e("854508"), e("70102"), e("424973"), e("808653"), e("222007"), n = this, i = function() {
  "use strict";
  for (var t = function(t, r, e) {
      return void 0 === r && (r = 0), void 0 === e && (e = 1), t < r ? r : t > e ? e : t
    }, r = {}, e = 0, n = ["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp", "Undefined", "Null"]; e < n.length; e += 1) {
    var i = n[e];
    r["[object " + i + "]"] = i.toLowerCase()
  }
  var o = function(t) {
      return r[Object.prototype.toString.call(t)] || "object"
    },
    u = Math.PI,
    a = {
      clip_rgb: function(r) {
        r._clipped = !1, r._unclipped = r.slice(0);
        for (var e = 0; e <= 3; e++) e < 3 ? ((r[e] < 0 || r[e] > 255) && (r._clipped = !0), r[e] = t(r[e], 0, 255)) : 3 === e && (r[e] = t(r[e], 0, 1));
        return r
      },
      limit: t,
      type: o,
      unpack: function(t, r) {
        return (void 0 === r && (r = null), t.length >= 3) ? Array.prototype.slice.call(t) : "object" == o(t[0]) && r ? r.split("").filter(function(r) {
          return void 0 !== t[0][r]
        }).map(function(r) {
          return t[0][r]
        }) : t[0]
      },
      last: function(t) {
        if (t.length < 2) return null;
        var r = t.length - 1;
        return "string" == o(t[r]) ? t[r].toLowerCase() : null
      },
      TWOPI: 2 * u,
      PITHIRD: u / 3,
      DEG2RAD: u / 180,
      RAD2DEG: 180 / u
    },
    f = {
      format: {},
      autodetect: []
    },
    s = a.last,
    c = a.clip_rgb,
    l = a.type,
    h = function() {
      for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
      if ("object" === l(t[0]) && t[0].constructor && t[0].constructor === this.constructor) return t[0];
      var e = s(t),
        n = !1;
      if (!e) {
        n = !0, !f.sorted && (f.autodetect = f.autodetect.sort(function(t, r) {
          return r.p - t.p
        }), f.sorted = !0);
        for (var i = 0, o = f.autodetect; i < o.length; i += 1) {
          var u = o[i];
          if (e = u.test.apply(u, t)) break
        }
      }
      if (f.format[e]) {
        var a = f.format[e].apply(null, n ? t : t.slice(0, -1));
        this._rgb = c(a)
      } else throw Error("unknown format: " + t);
      3 === this._rgb.length && this._rgb.push(1)
    };
  h.prototype.toString = function() {
    return "function" == l(this.hex) ? this.hex() : "[" + this._rgb.join(",") + "]"
  };
  var p = function() {
    for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
    return new(Function.prototype.bind.apply(p.Color, [null].concat(t)))
  };
  p.Color = h, p.version = "2.4.2";
  var v = a.unpack,
    d = Math.max,
    g = a.unpack,
    y = a.unpack,
    b = a.type,
    m = function() {
      for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
      var e = v(t, "rgb"),
        n = e[0],
        i = e[1],
        o = e[2],
        u = 1 - d(n /= 255, d(i /= 255, o /= 255)),
        a = u < 1 ? 1 / (1 - u) : 0;
      return [(1 - n - u) * a, (1 - i - u) * a, (1 - o - u) * a, u]
    };
  h.prototype.cmyk = function() {
    return m(this._rgb)
  }, p.cmyk = function() {
    for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
    return new(Function.prototype.bind.apply(h, [null].concat(t, ["cmyk"])))
  }, f.format.cmyk = function() {
    for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
    var e = (t = g(t, "cmyk"))[0],
      n = t[1],
      i = t[2],
      o = t[3],
      u = t.length > 4 ? t[4] : 1;
    return 1 === o ? [0, 0, 0, u] : [e >= 1 ? 0 : 255 * (1 - e) * (1 - o), n >= 1 ? 0 : 255 * (1 - n) * (1 - o), i >= 1 ? 0 : 255 * (1 - i) * (1 - o), u]
  }, f.autodetect.push({
    p: 2,
    test: function() {
      for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
      if ("array" === b(t = y(t, "cmyk")) && 4 === t.length) return "cmyk"
    }
  });
  var _ = a.unpack,
    w = a.last,
    E = function(t) {
      return Math.round(100 * t) / 100
    },
    k = a.unpack,
    A = function() {
      for (var t, r, e = [], n = arguments.length; n--;) e[n] = arguments[n];
      var i = (e = k(e, "rgba"))[0],
        o = e[1],
        u = e[2],
        a = Math.min(i /= 255, o /= 255, u /= 255),
        f = Math.max(i, o, u),
        s = (f + a) / 2;
      return (f === a ? (t = 0, r = Number.NaN) : t = s < .5 ? (f - a) / (f + a) : (f - a) / (2 - f - a), i == f ? r = (o - u) / (f - a) : o == f ? r = 2 + (u - i) / (f - a) : u == f && (r = 4 + (i - o) / (f - a)), (r *= 60) < 0 && (r += 360), e.length > 3 && void 0 !== e[3]) ? [r, t, s, e[3]] : [r, t, s]
    },
    x = a.unpack,
    R = a.last,
    S = function() {
      for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
      var e = _(t, "hsla"),
        n = w(t) || "lsa";
      return e[0] = E(e[0] || 0), e[1] = E(100 * e[1]) + "%", e[2] = E(100 * e[2]) + "%", "hsla" === n || e.length > 3 && e[3] < 1 ? (e[3] = e.length > 3 ? e[3] : 1, n = "hsla") : e.length = 3, n + "(" + e.join(",") + ")"
    },
    O = Math.round,
    T = a.unpack,
    I = Math.round,
    M = function() {
      for (var t, r, e, n, i = [], o = arguments.length; o--;) i[o] = arguments[o];
      var u = (i = T(i, "hsl"))[0],
        a = i[1],
        f = i[2];
      if (0 === a) r = e = n = 255 * f;
      else {
        var s = [0, 0, 0],
          c = [0, 0, 0],
          l = f < .5 ? f * (1 + a) : f + a - f * a,
          h = 2 * f - l,
          p = u / 360;
        s[0] = p + 1 / 3, s[1] = p, s[2] = p - 1 / 3;
        for (var v = 0; v < 3; v++) s[v] < 0 && (s[v] += 1), s[v] > 1 && (s[v] -= 1), 6 * s[v] < 1 ? c[v] = h + (l - h) * 6 * s[v] : 2 * s[v] < 1 ? c[v] = l : 3 * s[v] < 2 ? c[v] = h + (l - h) * (2 / 3 - s[v]) * 6 : c[v] = h;
        r = (t = [I(255 * c[0]), I(255 * c[1]), I(255 * c[2])])[0], e = t[1], n = t[2]
      }
      return i.length > 3 ? [r, e, n, i[3]] : [r, e, n, 1]
    },
    L = /^rgb\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*\)$/,
    j = /^rgba\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*,\s*([01]|[01]?\.\d+)\)$/,
    P = /^rgb\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,
    U = /^rgba\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,
    N = /^hsl\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,
    B = /^hsla\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,
    C = Math.round,
    q = function(t) {
      if (t = t.toLowerCase().trim(), f.format.named) try {
        return f.format.named(t)
      } catch (t) {}
      if (r = t.match(L)) {
        for (var r, e = r.slice(1, 4), n = 0; n < 3; n++) e[n] = +e[n];
        return e[3] = 1, e
      }
      if (r = t.match(j)) {
        for (var i = r.slice(1, 5), o = 0; o < 4; o++) i[o] = +i[o];
        return i
      }
      if (r = t.match(P)) {
        for (var u = r.slice(1, 4), a = 0; a < 3; a++) u[a] = C(2.55 * u[a]);
        return u[3] = 1, u
      }
      if (r = t.match(U)) {
        for (var s = r.slice(1, 5), c = 0; c < 3; c++) s[c] = C(2.55 * s[c]);
        return s[3] = +s[3], s
      }
      if (r = t.match(N)) {
        var l = r.slice(1, 4);
        l[1] *= .01, l[2] *= .01;
        var h = M(l);
        return h[3] = 1, h
      }
      if (r = t.match(B)) {
        var p = r.slice(1, 4);
        p[1] *= .01, p[2] *= .01;
        var v = M(p);
        return v[3] = +r[4], v
      }
    };
  q.test = function(t) {
    return L.test(t) || j.test(t) || P.test(t) || U.test(t) || N.test(t) || B.test(t)
  };
  var D = a.type,
    z = function() {
      for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
      var e = x(t, "rgba"),
        n = R(t) || "rgb";
      return "hsl" == n.substr(0, 3) ? S(A(e), n) : (e[0] = O(e[0]), e[1] = O(e[1]), e[2] = O(e[2]), ("rgba" === n || e.length > 3 && e[3] < 1) && (e[3] = e.length > 3 ? e[3] : 1, n = "rgba"), n + "(" + e.slice(0, "rgb" === n ? 3 : 4).join(",") + ")")
    };
  h.prototype.css = function(t) {
    return z(this._rgb, t)
  }, p.css = function() {
    for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
    return new(Function.prototype.bind.apply(h, [null].concat(t, ["css"])))
  }, f.format.css = q, f.autodetect.push({
    p: 5,
    test: function(t) {
      for (var r = [], e = arguments.length - 1; e-- > 0;) r[e] = arguments[e + 1];
      if (!r.length && "string" === D(t) && q.test(t)) return "css"
    }
  });
  var F = a.unpack;
  f.format.gl = function() {
    for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
    var e = F(t, "rgba");
    return e[0] *= 255, e[1] *= 255, e[2] *= 255, e
  }, p.gl = function() {
    for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
    return new(Function.prototype.bind.apply(h, [null].concat(t, ["gl"])))
  }, h.prototype.gl = function() {
    var t = this._rgb;
    return [t[0] / 255, t[1] / 255, t[2] / 255, t[3]]
  };
  var H = a.unpack,
    W = a.unpack,
    $ = Math.floor,
    Z = a.unpack,
    G = a.type,
    J = function() {
      for (var t, r = [], e = arguments.length; e--;) r[e] = arguments[e];
      var n = H(r, "rgb"),
        i = n[0],
        o = n[1],
        u = n[2],
        a = Math.min(i, o, u),
        f = Math.max(i, o, u),
        s = f - a;
      return 0 === s ? t = Number.NaN : (i === f && (t = (o - u) / s), o === f && (t = 2 + (u - i) / s), u === f && (t = 4 + (i - o) / s), (t *= 60) < 0 && (t += 360)), [t, 100 * s / 255, a / (255 - s) * 100]
    };
  h.prototype.hcg = function() {
    return J(this._rgb)
  }, p.hcg = function() {
    for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
    return new(Function.prototype.bind.apply(h, [null].concat(t, ["hcg"])))
  }, f.format.hcg = function() {
    for (var t, r, e, n, i, o, u, a, f, s = [], c = arguments.length; c--;) s[c] = arguments[c];
    var l = (s = W(s, "hcg"))[0],
      h = s[1],
      p = s[2];
    p *= 255;
    var v = 255 * h;
    if (0 === h) u = a = f = p;
    else {
      360 === l && (l = 0), l > 360 && (l -= 360), l < 0 && (l += 360);
      var d = $(l /= 60),
        g = l - d,
        y = p * (1 - h),
        b = y + v * (1 - g),
        m = y + v * g,
        _ = y + v;
      switch (d) {
        case 0:
          u = (t = [_, m, y])[0], a = t[1], f = t[2];
          break;
        case 1:
          u = (r = [b, _, y])[0], a = r[1], f = r[2];
          break;
        case 2:
          u = (e = [y, _, m])[0], a = e[1], f = e[2];
          break;
        case 3:
          u = (n = [y, b, _])[0], a = n[1], f = n[2];
          break;
        case 4:
          u = (i = [m, y, _])[0], a = i[1], f = i[2];
          break;
        case 5:
          u = (o = [_, y, b])[0], a = o[1], f = o[2]
      }
    }
    return [u, a, f, s.length > 3 ? s[3] : 1]
  }, f.autodetect.push({
    p: 1,
    test: function() {
      for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
      if ("array" === G(t = Z(t, "hcg")) && 3 === t.length) return "hcg"
    }
  });
  var X = a.unpack,
    Y = a.last,
    V = Math.round,
    K = function() {
      for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
      var e = X(t, "rgba"),
        n = e[0],
        i = e[1],
        o = e[2],
        u = e[3],
        a = Y(t) || "auto";
      void 0 === u && (u = 1), "auto" === a && (a = u < 1 ? "rgba" : "rgb"), n = V(n), i = V(i);
      var f = "000000" + (n << 16 | i << 8 | (o = V(o))).toString(16);
      f = f.substr(f.length - 6);
      var s = "0" + V(255 * u).toString(16);
      switch (s = s.substr(s.length - 2), a.toLowerCase()) {
        case "rgba":
          return "#" + f + s;
        case "argb":
          return "#" + s + f;
        default:
          return "#" + f
      }
    },
    Q = /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,
    tt = /^#?([A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/,
    tr = function(t) {
      if (t.match(Q)) {
        (4 === t.length || 7 === t.length) && (t = t.substr(1)), 3 === t.length && (t = (t = t.split(""))[0] + t[0] + t[1] + t[1] + t[2] + t[2]);
        var r = parseInt(t, 16);
        return [r >> 16, r >> 8 & 255, 255 & r, 1]
      }
      if (t.match(tt)) {
        (5 === t.length || 9 === t.length) && (t = t.substr(1)), 4 === t.length && (t = (t = t.split(""))[0] + t[0] + t[1] + t[1] + t[2] + t[2] + t[3] + t[3]);
        var e = parseInt(t, 16);
        return [e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, Math.round((255 & e) / 255 * 100) / 100]
      }
      throw Error("unknown hex color: " + t)
    },
    te = a.type;
  h.prototype.hex = function(t) {
    return K(this._rgb, t)
  }, p.hex = function() {
    for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
    return new(Function.prototype.bind.apply(h, [null].concat(t, ["hex"])))
  }, f.format.hex = tr, f.autodetect.push({
    p: 4,
    test: function(t) {
      for (var r = [], e = arguments.length - 1; e-- > 0;) r[e] = arguments[e + 1];
      if (!r.length && "string" === te(t) && [3, 4, 5, 6, 7, 8, 9].indexOf(t.length) >= 0) return "hex"
    }
  });
  var tn = a.unpack,
    ti = a.TWOPI,
    to = Math.min,
    tu = Math.sqrt,
    ta = Math.acos,
    tf = a.unpack,
    ts = a.limit,
    tc = a.TWOPI,
    tl = a.PITHIRD,
    th = Math.cos,
    tp = a.unpack,
    tv = a.type,
    td = function() {
      for (var t, r = [], e = arguments.length; e--;) r[e] = arguments[e];
      var n = tn(r, "rgb"),
        i = n[0],
        o = n[1],
        u = n[2],
        a = to(i /= 255, o /= 255, u /= 255),
        f = (i + o + u) / 3,
        s = f > 0 ? 1 - a / f : 0;
      return 0 === s ? t = NaN : (t = ta(t = (i - o + (i - u)) / 2 / tu((i - o) * (i - o) + (i - u) * (o - u))), u > o && (t = ti - t), t /= ti), [360 * t, s, f]
    };
  h.prototype.hsi = function() {
    return td(this._rgb)
  }, p.hsi = function() {
    for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
    return new(Function.prototype.bind.apply(h, [null].concat(t, ["hsi"])))
  }, f.format.hsi = function() {
    for (var t, r, e, n = [], i = arguments.length; i--;) n[i] = arguments[i];
    var o = (n = tf(n, "hsi"))[0],
      u = n[1],
      a = n[2];
    return isNaN(o) && (o = 0), isNaN(u) && (u = 0), o > 360 && (o -= 360), o < 0 && (o += 360), (o /= 360) < 1 / 3 ? r = 1 - ((e = (1 - u) / 3) + (t = (1 + u * th(tc * o) / th(tl - tc * o)) / 3)) : o < 2 / 3 ? (o -= 1 / 3, e = 1 - ((t = (1 - u) / 3) + (r = (1 + u * th(tc * o) / th(tl - tc * o)) / 3))) : (o -= 2 / 3, t = 1 - ((r = (1 - u) / 3) + (e = (1 + u * th(tc * o) / th(tl - tc * o)) / 3))), t = ts(a * t * 3), r = ts(a * r * 3), [255 * t, 255 * r, 255 * (e = ts(a * e * 3)), n.length > 3 ? n[3] : 1]
  }, f.autodetect.push({
    p: 2,
    test: function() {
      for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
      if ("array" === tv(t = tp(t, "hsi")) && 3 === t.length) return "hsi"
    }
  });
  var tg = a.unpack,
    ty = a.type;
  h.prototype.hsl = function() {
    return A(this._rgb)
  }, p.hsl = function() {
    for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
    return new(Function.prototype.bind.apply(h, [null].concat(t, ["hsl"])))
  }, f.format.hsl = M, f.autodetect.push({
    p: 2,
    test: function() {
      for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
      if ("array" === ty(t = tg(t, "hsl")) && 3 === t.length) return "hsl"
    }
  });
  var tb = a.unpack,
    tm = Math.min,
    t_ = Math.max,
    tw = a.unpack,
    tE = Math.floor,
    tk = a.unpack,
    tA = a.type,
    tx = function() {
      for (var t, r, e = [], n = arguments.length; n--;) e[n] = arguments[n];
      var i = (e = tb(e, "rgb"))[0],
        o = e[1],
        u = e[2],
        a = tm(i, o, u),
        f = t_(i, o, u),
        s = f - a;
      return 0 === f ? (t = Number.NaN, r = 0) : (r = s / f, i === f && (t = (o - u) / s), o === f && (t = 2 + (u - i) / s), u === f && (t = 4 + (i - o) / s), (t *= 60) < 0 && (t += 360)), [t, r, f / 255]
    };
  h.prototype.hsv = function() {
    return tx(this._rgb)
  }, p.hsv = function() {
    for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
    return new(Function.prototype.bind.apply(h, [null].concat(t, ["hsv"])))
  }, f.format.hsv = function() {
    for (var t, r, e, n, i, o, u, a, f, s = [], c = arguments.length; c--;) s[c] = arguments[c];
    var l = (s = tw(s, "hsv"))[0],
      h = s[1],
      p = s[2];
    if (p *= 255, 0 === h) u = a = f = p;
    else {
      360 === l && (l = 0), l > 360 && (l -= 360), l < 0 && (l += 360);
      var v = tE(l /= 60),
        d = l - v,
        g = p * (1 - h),
        y = p * (1 - h * d),
        b = p * (1 - h * (1 - d));
      switch (v) {
        case 0:
          u = (t = [p, b, g])[0], a = t[1], f = t[2];
          break;
        case 1:
          u = (r = [y, p, g])[0], a = r[1], f = r[2];
          break;
        case 2:
          u = (e = [g, p, b])[0], a = e[1], f = e[2];
          break;
        case 3:
          u = (n = [g, y, p])[0], a = n[1], f = n[2];
          break;
        case 4:
          u = (i = [b, g, p])[0], a = i[1], f = i[2];
          break;
        case 5:
          u = (o = [p, g, y])[0], a = o[1], f = o[2]
      }
    }
    return [u, a, f, s.length > 3 ? s[3] : 1]
  }, f.autodetect.push({
    p: 2,
    test: function() {
      for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
      if ("array" === tA(t = tk(t, "hsv")) && 3 === t.length) return "hsv"
    }
  });
  var tR = {
      Kn: 18,
      Xn: .95047,
      Yn: 1,
      Zn: 1.08883,
      t0: .137931034,
      t1: .206896552,
      t2: .12841855,
      t3: .008856452
    },
    tS = a.unpack,
    tO = Math.pow,
    tT = function(t) {
      return (t /= 255) <= .04045 ? t / 12.92 : tO((t + .055) / 1.055, 2.4)
    },
    tI = function(t) {
      return t > tR.t3 ? tO(t, 1 / 3) : t / tR.t2 + tR.t0
    },
    tM = function(t, r, e) {
      return t = tT(t), r = tT(r), [tI((.4124564 * t + .3575761 * r + .1804375 * (e = tT(e))) / tR.Xn), tI((.2126729 * t + .7151522 * r + .072175 * e) / tR.Yn), tI((.0193339 * t + .119192 * r + .9503041 * e) / tR.Zn)]
    },
    tL = function() {
      for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
      var e = tS(t, "rgb"),
        n = tM(e[0], e[1], e[2]),
        i = n[0],
        o = n[1],
        u = n[2],
        a = 116 * o - 16;
      return [a < 0 ? 0 : a, 500 * (i - o), 200 * (o - u)]
    },
    tj = a.unpack,
    tP = Math.pow,
    tU = function(t) {
      return 255 * (t <= .00304 ? 12.92 * t : 1.055 * tP(t, 1 / 2.4) - .055)
    },
    tN = function(t) {
      return t > tR.t1 ? t * t * t : tR.t2 * (t - tR.t0)
    },
    tB = function() {
      for (var t, r, e, n, i, o = [], u = arguments.length; u--;) o[u] = arguments[u];
      var a = (o = tj(o, "lab"))[0],
        f = o[1],
        s = o[2];
      return r = (a + 16) / 116, t = isNaN(f) ? r : r + f / 500, e = isNaN(s) ? r : r - s / 200, r = tR.Yn * tN(r), t = tR.Xn * tN(t), n = tU(3.2404542 * t - 1.5371385 * r - .4985314 * (e = tR.Zn * tN(e))), i = tU(-.969266 * t + 1.8760108 * r + .041556 * e), [n, i, tU(.0556434 * t - .2040259 * r + 1.0572252 * e), o.length > 3 ? o[3] : 1]
    },
    tC = a.unpack,
    tq = a.type;
  h.prototype.lab = function() {
    return tL(this._rgb)
  }, p.lab = function() {
    for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
    return new(Function.prototype.bind.apply(h, [null].concat(t, ["lab"])))
  }, f.format.lab = tB, f.autodetect.push({
    p: 2,
    test: function() {
      for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
      if ("array" === tq(t = tC(t, "lab")) && 3 === t.length) return "lab"
    }
  });
  var tD = a.unpack,
    tz = a.RAD2DEG,
    tF = Math.sqrt,
    tH = Math.atan2,
    tW = Math.round,
    t$ = function() {
      for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
      var e = tD(t, "lab"),
        n = e[0],
        i = e[1],
        o = e[2],
        u = tF(i * i + o * o),
        a = (tH(o, i) * tz + 360) % 360;
      return 0 === tW(1e4 * u) && (a = Number.NaN), [n, u, a]
    },
    tZ = a.unpack,
    tG = a.unpack,
    tJ = a.DEG2RAD,
    tX = Math.sin,
    tY = Math.cos,
    tV = function() {
      for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
      var e = tG(t, "lch"),
        n = e[0],
        i = e[1],
        o = e[2];
      return isNaN(o) && (o = 0), [n, tY(o *= tJ) * i, tX(o) * i]
    },
    tK = a.unpack,
    tQ = function() {
      for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
      var e = tV((t = tK(t, "lch"))[0], t[1], t[2]),
        n = tB(e[0], e[1], e[2]);
      return [n[0], n[1], n[2], t.length > 3 ? t[3] : 1]
    },
    t0 = a.unpack,
    t1 = a.unpack,
    t2 = a.type,
    t5 = function() {
      for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
      var e = tZ(t, "rgb"),
        n = tL(e[0], e[1], e[2]);
      return t$(n[0], n[1], n[2])
    };
  h.prototype.lch = function() {
    return t5(this._rgb)
  }, h.prototype.hcl = function() {
    return t5(this._rgb).reverse()
  }, p.lch = function() {
    for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
    return new(Function.prototype.bind.apply(h, [null].concat(t, ["lch"])))
  }, p.hcl = function() {
    for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
    return new(Function.prototype.bind.apply(h, [null].concat(t, ["hcl"])))
  }, f.format.lch = tQ, f.format.hcl = function() {
    for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
    var e = t0(t, "hcl").reverse();
    return tQ.apply(void 0, e)
  }, ["lch", "hcl"].forEach(function(t) {
    return f.autodetect.push({
      p: 2,
      test: function() {
        for (var r = [], e = arguments.length; e--;) r[e] = arguments[e];
        if ("array" === t2(r = t1(r, t)) && 3 === r.length) return t
      }
    })
  });
  var t3 = {
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
    t6 = a.type;
  h.prototype.name = function() {
    for (var t = K(this._rgb, "rgb"), r = 0, e = Object.keys(t3); r < e.length; r += 1) {
      var n = e[r];
      if (t3[n] === t) return n.toLowerCase()
    }
    return t
  }, f.format.named = function(t) {
    if (t3[t = t.toLowerCase()]) return tr(t3[t]);
    throw Error("unknown color name: " + t)
  }, f.autodetect.push({
    p: 5,
    test: function(t) {
      for (var r = [], e = arguments.length - 1; e-- > 0;) r[e] = arguments[e + 1];
      if (!r.length && "string" === t6(t) && t3[t.toLowerCase()]) return "named"
    }
  });
  var t4 = a.unpack,
    t8 = a.type,
    t7 = a.type,
    t9 = function() {
      for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
      var e = t4(t, "rgb");
      return (e[0] << 16) + (e[1] << 8) + e[2]
    };
  h.prototype.num = function() {
    return t9(this._rgb)
  }, p.num = function() {
    for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
    return new(Function.prototype.bind.apply(h, [null].concat(t, ["num"])))
  }, f.format.num = function(t) {
    if ("number" == t8(t) && t >= 0 && t <= 16777215) return [t >> 16, t >> 8 & 255, 255 & t, 1];
    throw Error("unknown num color: " + t)
  }, f.autodetect.push({
    p: 5,
    test: function() {
      for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
      if (1 === t.length && "number" === t7(t[0]) && t[0] >= 0 && t[0] <= 16777215) return "num"
    }
  });
  var rt = a.unpack,
    rr = a.type,
    re = Math.round;
  h.prototype.rgb = function(t) {
    return (void 0 === t && (t = !0), !1 === t) ? this._rgb.slice(0, 3) : this._rgb.slice(0, 3).map(re)
  }, h.prototype.rgba = function(t) {
    return void 0 === t && (t = !0), this._rgb.slice(0, 4).map(function(r, e) {
      return e < 3 ? !1 === t ? r : re(r) : r
    })
  }, p.rgb = function() {
    for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
    return new(Function.prototype.bind.apply(h, [null].concat(t, ["rgb"])))
  }, f.format.rgb = function() {
    for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
    var e = rt(t, "rgba");
    return void 0 === e[3] && (e[3] = 1), e
  }, f.autodetect.push({
    p: 3,
    test: function() {
      for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
      if ("array" === rr(t = rt(t, "rgba")) && (3 === t.length || 4 === t.length && "number" == rr(t[3]) && t[3] >= 0 && t[3] <= 1)) return "rgb"
    }
  });
  var rn = Math.log,
    ri = function(t) {
      var r, e, n, i = t / 100;
      return i < 66 ? (r = 255, e = i < 6 ? 0 : -155.25485562709179 - .44596950469579133 * (e = i - 2) + 104.49216199393888 * rn(e), n = i < 20 ? 0 : -254.76935184120902 + .8274096064007395 * (n = i - 10) + 115.67994401066147 * rn(n)) : (r = 351.97690566805693 + .114206453784165 * (r = i - 55) - 40.25366309332127 * rn(r), e = 325.4494125711974 + .07943456536662342 * (e = i - 50) - 28.0852963507957 * rn(e), n = 255), [r, e, n, 1]
    },
    ro = a.unpack,
    ru = Math.round,
    ra = function() {
      for (var t, r = [], e = arguments.length; e--;) r[e] = arguments[e];
      for (var n = ro(r, "rgb"), i = n[0], o = n[2], u = 1e3, a = 4e4; a - u > .4;) {
        var f = ri(t = (a + u) * .5);
        f[2] / f[0] >= o / i ? a = t : u = t
      }
      return ru(t)
    };
  h.prototype.temp = h.prototype.kelvin = h.prototype.temperature = function() {
    return ra(this._rgb)
  }, p.temp = p.kelvin = p.temperature = function() {
    for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
    return new(Function.prototype.bind.apply(h, [null].concat(t, ["temp"])))
  }, f.format.temp = f.format.kelvin = f.format.temperature = ri;
  var rf = a.unpack,
    rs = Math.cbrt,
    rc = Math.pow,
    rl = Math.sign,
    rh = function() {
      for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
      var e = rf(t, "rgb"),
        n = e[0],
        i = e[1],
        o = e[2],
        u = [rp(n / 255), rp(i / 255), rp(o / 255)],
        a = u[0],
        f = u[1],
        s = u[2],
        c = rs(.4122214708 * a + .5363325363 * f + .0514459929 * s),
        l = rs(.2119034982 * a + .6806995451 * f + .1073969566 * s),
        h = rs(.0883024619 * a + .2817188376 * f + .6299787005 * s);
      return [.2104542553 * c + .793617785 * l - .0040720468 * h, 1.9779984951 * c - 2.428592205 * l + .4505937099 * h, .0259040371 * c + .7827717662 * l - .808675766 * h]
    };

  function rp(t) {
    var r = Math.abs(t);
    return r < .04045 ? t / 12.92 : (rl(t) || 1) * rc((r + .055) / 1.055, 2.4)
  }
  var rv = a.unpack,
    rd = Math.pow,
    rg = Math.sign,
    ry = function() {
      for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
      var e = (t = rv(t, "lab"))[0],
        n = t[1],
        i = t[2],
        o = rd(e + .3963377774 * n + .2158037573 * i, 3),
        u = rd(e - .1055613458 * n - .0638541728 * i, 3),
        a = rd(e - .0894841775 * n - 1.291485548 * i, 3);
      return [255 * rb(4.0767416621 * o - 3.3077115913 * u + .2309699292 * a), 255 * rb(-1.2684380046 * o + 2.6097574011 * u - .3413193965 * a), 255 * rb(-.0041960863 * o - .7034186147 * u + 1.707614701 * a), t.length > 3 ? t[3] : 1]
    };

  function rb(t) {
    var r = Math.abs(t);
    return r > .0031308 ? (rg(t) || 1) * (1.055 * rd(r, 1 / 2.4) - .055) : 12.92 * t
  }
  var rm = a.unpack,
    r_ = a.type;
  h.prototype.oklab = function() {
    return rh(this._rgb)
  }, p.oklab = function() {
    for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
    return new(Function.prototype.bind.apply(h, [null].concat(t, ["oklab"])))
  }, f.format.oklab = ry, f.autodetect.push({
    p: 3,
    test: function() {
      for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
      if ("array" === r_(t = rm(t, "oklab")) && 3 === t.length) return "oklab"
    }
  });
  var rw = a.unpack,
    rE = a.unpack,
    rk = a.unpack,
    rA = a.type,
    rx = function() {
      for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
      var e = rw(t, "rgb"),
        n = rh(e[0], e[1], e[2]);
      return t$(n[0], n[1], n[2])
    };
  h.prototype.oklch = function() {
    return rx(this._rgb)
  }, p.oklch = function() {
    for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
    return new(Function.prototype.bind.apply(h, [null].concat(t, ["oklch"])))
  }, f.format.oklch = function() {
    for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
    var e = tV((t = rE(t, "lch"))[0], t[1], t[2]),
      n = ry(e[0], e[1], e[2]);
    return [n[0], n[1], n[2], t.length > 3 ? t[3] : 1]
  }, f.autodetect.push({
    p: 3,
    test: function() {
      for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
      if ("array" === rA(t = rk(t, "oklch")) && 3 === t.length) return "oklch"
    }
  });
  var rR = a.type;
  h.prototype.alpha = function(t, r) {
    if (void 0 === r && (r = !1), void 0 !== t && "number" === rR(t)) return r ? (this._rgb[3] = t, this) : new h([this._rgb[0], this._rgb[1], this._rgb[2], t], "rgb");
    return this._rgb[3]
  };
  h.prototype.clipped = function() {
    return this._rgb._clipped || !1
  };
  h.prototype.darken = function(t) {
    void 0 === t && (t = 1);
    var r = this.lab();
    return r[0] -= tR.Kn * t, new h(r, "lab").alpha(this.alpha(), !0)
  }, h.prototype.brighten = function(t) {
    return void 0 === t && (t = 1), this.darken(-t)
  }, h.prototype.darker = h.prototype.darken, h.prototype.brighter = h.prototype.brighten;
  h.prototype.get = function(t) {
    var r = t.split("."),
      e = r[0],
      n = r[1],
      i = this[e]();
    if (!n) return i;
    var o = e.indexOf(n) - ("ok" === e.substr(0, 2) ? 2 : 0);
    if (o > -1) return i[o];
    throw Error("unknown channel " + n + " in mode " + e)
  };
  var rS = a.type,
    rO = Math.pow;
  h.prototype.luminance = function(t) {
    if (void 0 !== t && "number" === rS(t)) {
      if (0 === t) return new h([0, 0, 0, this._rgb[3]], "rgb");
      if (1 === t) return new h([255, 255, 255, this._rgb[3]], "rgb");
      var r = this.luminance(),
        e = 20,
        n = function(r, i) {
          var o = r.interpolate(i, .5, "rgb"),
            u = o.luminance();
          return !(1e-7 > Math.abs(t - u)) && e-- ? u > t ? n(r, o) : n(o, i) : o
        },
        i = (r > t ? n(new h([0, 0, 0]), this) : n(this, new h([255, 255, 255]))).rgb();
      return new h(i.concat([this._rgb[3]]))
    }
    return rT.apply(void 0, this._rgb.slice(0, 3))
  };
  var rT = function(t, r, e) {
      return t = rI(t), r = rI(r), .2126 * t + .7152 * r + .0722 * (e = rI(e))
    },
    rI = function(t) {
      return (t /= 255) <= .03928 ? t / 12.92 : rO((t + .055) / 1.055, 2.4)
    },
    rM = {},
    rL = a.type,
    rj = function(t, r, e) {
      void 0 === e && (e = .5);
      for (var n = [], i = arguments.length - 3; i-- > 0;) n[i] = arguments[i + 3];
      var o = n[0] || "lrgb";
      if (!rM[o] && !n.length && (o = Object.keys(rM)[0]), !rM[o]) throw Error("interpolation mode " + o + " is not defined");
      return "object" !== rL(t) && (t = new h(t)), "object" !== rL(r) && (r = new h(r)), rM[o](t, r, e).alpha(t.alpha() + e * (r.alpha() - t.alpha()))
    };
  h.prototype.mix = h.prototype.interpolate = function(t, r) {
    void 0 === r && (r = .5);
    for (var e = [], n = arguments.length - 2; n-- > 0;) e[n] = arguments[n + 2];
    return rj.apply(void 0, [this, t, r].concat(e))
  };
  h.prototype.premultiply = function(t) {
    void 0 === t && (t = !1);
    var r = this._rgb,
      e = r[3];
    return t ? (this._rgb = [r[0] * e, r[1] * e, r[2] * e, e], this) : new h([r[0] * e, r[1] * e, r[2] * e, e], "rgb")
  };
  h.prototype.saturate = function(t) {
    void 0 === t && (t = 1);
    var r = this.lch();
    return r[1] += tR.Kn * t, r[1] < 0 && (r[1] = 0), new h(r, "lch").alpha(this.alpha(), !0)
  }, h.prototype.desaturate = function(t) {
    return void 0 === t && (t = 1), this.saturate(-t)
  };
  var rP = a.type;
  h.prototype.set = function(t, r, e) {
    void 0 === e && (e = !1);
    var n = t.split("."),
      i = n[0],
      o = n[1],
      u = this[i]();
    if (!o) return u;
    var a = i.indexOf(o) - ("ok" === i.substr(0, 2) ? 2 : 0);
    if (a > -1) {
      if ("string" == rP(r)) switch (r.charAt(0)) {
          case "+":
          case "-":
            u[a] += +r;
            break;
          case "*":
            u[a] *= +r.substr(1);
            break;
          case "/":
            u[a] /= +r.substr(1);
            break;
          default:
            u[a] = +r
        } else if ("number" === rP(r)) u[a] = r;
        else throw Error("unsupported value for Color.set");
      var f = new h(u, i);
      return e ? (this._rgb = f._rgb, this) : f
    }
    throw Error("unknown channel " + o + " in mode " + i)
  };
  rM.rgb = function(t, r, e) {
    var n = t._rgb,
      i = r._rgb;
    return new h(n[0] + e * (i[0] - n[0]), n[1] + e * (i[1] - n[1]), n[2] + e * (i[2] - n[2]), "rgb")
  };
  var rU = Math.sqrt,
    rN = Math.pow;
  rM.lrgb = function(t, r, e) {
    var n = t._rgb,
      i = n[0],
      o = n[1],
      u = n[2],
      a = r._rgb,
      f = a[0],
      s = a[1],
      c = a[2];
    return new h(rU(rN(i, 2) * (1 - e) + rN(f, 2) * e), rU(rN(o, 2) * (1 - e) + rN(s, 2) * e), rU(rN(u, 2) * (1 - e) + rN(c, 2) * e), "rgb")
  };
  rM.lab = function(t, r, e) {
    var n = t.lab(),
      i = r.lab();
    return new h(n[0] + e * (i[0] - n[0]), n[1] + e * (i[1] - n[1]), n[2] + e * (i[2] - n[2]), "lab")
  };
  var rB = function(t, r, e, n) {
      var i, o, u, a, f, s, c, l, p, v, d, g, y, b;
      return "hsl" === n ? (u = t.hsl(), a = r.hsl()) : "hsv" === n ? (u = t.hsv(), a = r.hsv()) : "hcg" === n ? (u = t.hcg(), a = r.hcg()) : "hsi" === n ? (u = t.hsi(), a = r.hsi()) : "lch" === n || "hcl" === n ? (n = "hcl", u = t.hcl(), a = r.hcl()) : "oklch" === n && (u = t.oklch().reverse(), a = r.oklch().reverse()), ("h" === n.substr(0, 1) || "oklch" === n) && (f = (i = u)[0], c = i[1], p = i[2], s = (o = a)[0], l = o[1], v = o[2]), isNaN(f) || isNaN(s) ? isNaN(f) ? isNaN(s) ? g = Number.NaN : (g = s, (1 == p || 0 == p) && "hsv" != n && (d = l)) : (g = f, (1 == v || 0 == v) && "hsv" != n && (d = c)) : (b = s > f && s - f > 180 ? s - (f + 360) : s < f && f - s > 180 ? s + 360 - f : s - f, g = f + e * b), void 0 === d && (d = c + e * (l - c)), y = p + e * (v - p), "oklch" === n ? new h([y, d, g], n) : new h([g, d, y], n)
    },
    rC = function(t, r, e) {
      return rB(t, r, e, "lch")
    };
  rM.lch = rC, rM.hcl = rC;
  rM.num = function(t, r, e) {
    var n = t.num();
    return new h(n + e * (r.num() - n), "num")
  };
  rM.hcg = function(t, r, e) {
    return rB(t, r, e, "hcg")
  };
  rM.hsi = function(t, r, e) {
    return rB(t, r, e, "hsi")
  };
  rM.hsl = function(t, r, e) {
    return rB(t, r, e, "hsl")
  };
  rM.hsv = function(t, r, e) {
    return rB(t, r, e, "hsv")
  };
  rM.oklab = function(t, r, e) {
    var n = t.oklab(),
      i = r.oklab();
    return new h(n[0] + e * (i[0] - n[0]), n[1] + e * (i[1] - n[1]), n[2] + e * (i[2] - n[2]), "oklab")
  };
  rM.oklch = function(t, r, e) {
    return rB(t, r, e, "oklch")
  };
  var rq = a.clip_rgb,
    rD = Math.pow,
    rz = Math.sqrt,
    rF = Math.PI,
    rH = Math.cos,
    rW = Math.sin,
    r$ = Math.atan2,
    rZ = function(t, r) {
      for (var e = t.length, n = [0, 0, 0, 0], i = 0; i < t.length; i++) {
        var o = t[i],
          u = r[i] / e,
          a = o._rgb;
        n[0] += rD(a[0], 2) * u, n[1] += rD(a[1], 2) * u, n[2] += rD(a[2], 2) * u, n[3] += a[3] * u
      }
      return n[0] = rz(n[0]), n[1] = rz(n[1]), n[2] = rz(n[2]), n[3] > .9999999 && (n[3] = 1), new h(rq(n))
    },
    rG = a.type,
    rJ = Math.pow,
    rX = function(t) {
      var r = "rgb",
        e = p("#ccc"),
        n = 0,
        i = [0, 1],
        o = [],
        u = [0, 0],
        a = !1,
        f = [],
        s = !1,
        c = 0,
        l = 1,
        h = !1,
        v = {},
        d = !0,
        g = 1,
        y = function(t) {
          if (t = t || ["#fff", "#000"], "string" === rG(t) && p.brewer && p.brewer[t.toLowerCase()] && (t = p.brewer[t.toLowerCase()]), "array" === rG(t)) {
            1 === t.length && (t = [t[0], t[0]]), t = t.slice(0);
            for (var r = 0; r < t.length; r++) t[r] = p(t[r]);
            o.length = 0;
            for (var e = 0; e < t.length; e++) o.push(e / (t.length - 1))
          }
          return E(), f = t
        },
        b = function(t) {
          if (null != a) {
            for (var r = a.length - 1, e = 0; e < r && t >= a[e];) e++;
            return e - 1
          }
          return 0
        },
        m = function(t) {
          return t
        },
        _ = function(t) {
          return t
        },
        w = function(t, n) {
          if (null == n && (n = !1), isNaN(t) || null === t) return e;
          if (n) s = t;
          else if (a && a.length > 2) {
            var i, s;
            s = b(t) / (a.length - 2)
          } else s = l !== c ? (t - c) / (l - c) : 1;
          s = _(s), !n && (s = m(s)), 1 !== g && (s = rJ(s, g));
          var h = Math.floor(1e4 * (s = Math.min(1, Math.max(0, s = u[0] + s * (1 - u[0] - u[1])))));
          if (d && v[h]) i = v[h];
          else {
            if ("array" === rG(f))
              for (var y = 0; y < o.length; y++) {
                var w = o[y];
                if (s <= w || s >= w && y === o.length - 1) {
                  i = f[y];
                  break
                }
                if (s > w && s < o[y + 1]) {
                  s = (s - w) / (o[y + 1] - w), i = p.interpolate(f[y], f[y + 1], s, r);
                  break
                }
              } else "function" === rG(f) && (i = f(s));
            d && (v[h] = i)
          }
          return i
        },
        E = function() {
          return v = {}
        };
      y(t);
      var k = function(t) {
        var r = p(w(t));
        return s && r[s] ? r[s]() : r
      };
      return k.classes = function(t) {
        if (null != t) {
          if ("array" === rG(t)) a = t, i = [t[0], t[t.length - 1]];
          else {
            var r = p.analyze(i);
            a = 0 === t ? [r.min, r.max] : p.limits(r, "e", t)
          }
          return k
        }
        return a
      }, k.domain = function(t) {
        if (!arguments.length) return i;
        c = t[0], l = t[t.length - 1], o = [];
        var r = f.length;
        if (t.length === r && c !== l)
          for (var e = 0, n = Array.from(t); e < n.length; e += 1) {
            var u = n[e];
            o.push((u - c) / (l - c))
          } else {
            for (var a = 0; a < r; a++) o.push(a / (r - 1));
            if (t.length > 2) {
              var s = t.map(function(r, e) {
                  return e / (t.length - 1)
                }),
                h = t.map(function(t) {
                  return (t - c) / (l - c)
                });
              !h.every(function(t, r) {
                return s[r] === t
              }) && (_ = function(t) {
                if (t <= 0 || t >= 1) return t;
                for (var r = 0; t >= h[r + 1];) r++;
                var e = (t - h[r]) / (h[r + 1] - h[r]);
                return s[r] + e * (s[r + 1] - s[r])
              })
            }
          }
        return i = [c, l], k
      }, k.mode = function(t) {
        return arguments.length ? (r = t, E(), k) : r
      }, k.range = function(t, r) {
        return y(t), k
      }, k.out = function(t) {
        return s = t, k
      }, k.spread = function(t) {
        return arguments.length ? (n = t, k) : n
      }, k.correctLightness = function(t) {
        return null == t && (t = !0), h = t, E(), m = h ? function(t) {
          for (var r = w(0, !0).lab()[0], e = w(1, !0).lab()[0], n = r > e, i = w(t, !0).lab()[0], o = r + (e - r) * t, u = i - o, a = 0, f = 1, s = 20; Math.abs(u) > .01 && s-- > 0;) n && (u *= -1), u < 0 ? (a = t, t += (f - t) * .5) : (f = t, t += (a - t) * .5), u = (i = w(t, !0).lab()[0]) - o;
          return t
        } : function(t) {
          return t
        }, k
      }, k.padding = function(t) {
        return null != t ? ("number" === rG(t) && (t = [t, t]), u = t, k) : u
      }, k.colors = function(r, e) {
        arguments.length < 2 && (e = "hex");
        var n = [];
        if (0 == arguments.length) n = f.slice(0);
        else if (1 === r) n = [k(.5)];
        else if (r > 1) {
          var o = i[0],
            u = i[1] - o;
          n = (function(t, r, e) {
            for (var n = [], i = t < r, o = e ? i ? r + 1 : r - 1 : r, u = t; i ? u < o : u > o; i ? u++ : u--) n.push(u);
            return n
          })(0, r, !1).map(function(t) {
            return k(o + t / (r - 1) * u)
          })
        } else {
          t = [];
          var s = [];
          if (a && a.length > 2)
            for (var c = 1, l = a.length, h = 1 <= l; h ? c < l : c > l; h ? c++ : c--) s.push((a[c - 1] + a[c]) * .5);
          else s = i;
          n = s.map(function(t) {
            return k(t)
          })
        }
        return p[e] && (n = n.map(function(t) {
          return t[e]()
        })), n
      }, k.cache = function(t) {
        return null != t ? (d = t, k) : d
      }, k.gamma = function(t) {
        return null != t ? (g = t, k) : g
      }, k.nodata = function(t) {
        return null != t ? (e = p(t), k) : e
      }, k
    },
    rY = function(t) {
      for (var r = [1, 1], e = 1; e < t; e++) {
        for (var n = [1], i = 1; i <= r.length; i++) n[i] = (r[i] || 0) + r[i - 1];
        r = n
      }
      return r
    },
    rV = function(t) {
      var r, e, n, i, o, u, a, f, s, c, l;
      if (2 === (t = t.map(function(t) {
          return new h(t)
        })).length) o = (r = t.map(function(t) {
        return t.lab()
      }))[0], u = r[1], i = function(t) {
        return new h([0, 1, 2].map(function(r) {
          return o[r] + t * (u[r] - o[r])
        }), "lab")
      };
      else if (3 === t.length) o = (e = t.map(function(t) {
        return t.lab()
      }))[0], u = e[1], a = e[2], i = function(t) {
        return new h([0, 1, 2].map(function(r) {
          return (1 - t) * (1 - t) * o[r] + 2 * (1 - t) * t * u[r] + t * t * a[r]
        }), "lab")
      };
      else if (4 === t.length) o = (n = t.map(function(t) {
        return t.lab()
      }))[0], u = n[1], a = n[2], f = n[3], i = function(t) {
        return new h([0, 1, 2].map(function(r) {
          return (1 - t) * (1 - t) * (1 - t) * o[r] + 3 * (1 - t) * (1 - t) * t * u[r] + 3 * (1 - t) * t * t * a[r] + t * t * t * f[r]
        }), "lab")
      };
      else if (t.length >= 5) s = t.map(function(t) {
        return t.lab()
      }), c = rY(l = t.length - 1), i = function(t) {
        var r = 1 - t;
        return new h([0, 1, 2].map(function(e) {
          return s.reduce(function(n, i, o) {
            return n + c[o] * Math.pow(r, l - o) * Math.pow(t, o) * i[e]
          }, 0)
        }), "lab")
      };
      else throw RangeError("No point in running bezier with only one color.");
      return i
    },
    rK = function(t, r, e) {
      if (!rK[e]) throw Error("unknown blend mode " + e);
      return rK[e](t, r)
    },
    rQ = function(t) {
      return function(r, e) {
        var n = p(e).rgb(),
          i = p(r).rgb();
        return p.rgb(t(n, i))
      }
    },
    r0 = function(t) {
      return function(r, e) {
        var n = [];
        return n[0] = t(r[0], e[0]), n[1] = t(r[1], e[1]), n[2] = t(r[2], e[2]), n
      }
    };
  rK.normal = rQ(r0(function(t) {
    return t
  })), rK.multiply = rQ(r0(function(t, r) {
    return t * r / 255
  })), rK.screen = rQ(r0(function(t, r) {
    return 255 * (1 - (1 - t / 255) * (1 - r / 255))
  })), rK.overlay = rQ(r0(function(t, r) {
    return r < 128 ? 2 * t * r / 255 : 255 * (1 - 2 * (1 - t / 255) * (1 - r / 255))
  })), rK.darken = rQ(r0(function(t, r) {
    return t > r ? r : t
  })), rK.lighten = rQ(r0(function(t, r) {
    return t > r ? t : r
  })), rK.dodge = rQ(r0(function(t, r) {
    return 255 === t ? 255 : (t = 255 * (r / 255) / (1 - t / 255)) > 255 ? 255 : t
  })), rK.burn = rQ(r0(function(t, r) {
    return 255 * (1 - (1 - r / 255) / (t / 255))
  }));
  for (var r1 = a.type, r2 = a.clip_rgb, r5 = a.TWOPI, r3 = Math.pow, r6 = Math.sin, r4 = Math.cos, r8 = Math.floor, r7 = Math.random, r9 = Math.log, et = Math.pow, er = Math.floor, ee = Math.abs, en = function(t, r) {
      void 0 === r && (r = null);
      var e = {
        min: Number.MAX_VALUE,
        max: -1 * Number.MAX_VALUE,
        sum: 0,
        values: [],
        count: 0
      };
      return "object" === o(t) && (t = Object.values(t)), t.forEach(function(t) {
        r && "object" === o(t) && (t = t[r]), null != t && !isNaN(t) && (e.values.push(t), e.sum += t, t < e.min && (e.min = t), t > e.max && (e.max = t), e.count += 1)
      }), e.domain = [e.min, e.max], e.limits = function(t, r) {
        return ei(e, t, r)
      }, e
    }, ei = function(t, r, e) {
      void 0 === r && (r = "equal"), void 0 === e && (e = 7), "array" == o(t) && (t = en(t));
      var n = t.min,
        i = t.max,
        u = t.values.sort(function(t, r) {
          return t - r
        });
      if (1 === e) return [n, i];
      var a = [];
      if ("c" === r.substr(0, 1) && (a.push(n), a.push(i)), "e" === r.substr(0, 1)) {
        a.push(n);
        for (var f = 1; f < e; f++) a.push(n + f / e * (i - n));
        a.push(i)
      } else if ("l" === r.substr(0, 1)) {
        if (n <= 0) throw Error("Logarithmic scales are only possible for values > 0");
        var s = Math.LOG10E * r9(n),
          c = Math.LOG10E * r9(i);
        a.push(n);
        for (var l = 1; l < e; l++) a.push(et(10, s + l / e * (c - s)));
        a.push(i)
      } else if ("q" === r.substr(0, 1)) {
        a.push(n);
        for (var h = 1; h < e; h++) {
          var p = (u.length - 1) * h / e,
            v = er(p);
          if (v === p) a.push(u[v]);
          else {
            var d = p - v;
            a.push(u[v] * (1 - d) + u[v + 1] * d)
          }
        }
        a.push(i)
      } else if ("k" === r.substr(0, 1)) {
        var g, y = u.length,
          b = Array(y),
          m = Array(e),
          _ = !0,
          w = 0,
          E = null;
        (E = []).push(n);
        for (var k = 1; k < e; k++) E.push(n + k / e * (i - n));
        for (E.push(i); _;) {
          for (var A = 0; A < e; A++) m[A] = 0;
          for (var x = 0; x < y; x++) {
            for (var R = u[x], S = Number.MAX_VALUE, O = void 0, T = 0; T < e; T++) {
              var I = ee(E[T] - R);
              I < S && (S = I, O = T), m[O]++, b[x] = O
            }
          }
          for (var M = Array(e), L = 0; L < e; L++) M[L] = null;
          for (var j = 0; j < y; j++) null === M[g = b[j]] ? M[g] = u[j] : M[g] += u[j];
          for (var P = 0; P < e; P++) M[P] *= 1 / m[P];
          _ = !1;
          for (var U = 0; U < e; U++)
            if (M[U] !== E[U]) {
              _ = !0;
              break
            } E = M, ++w > 200 && (_ = !1)
        }
        for (var N = {}, B = 0; B < e; B++) N[B] = [];
        for (var C = 0; C < y; C++) N[g = b[C]].push(u[C]);
        for (var q = [], D = 0; D < e; D++) q.push(N[D][0]), q.push(N[D][N[D].length - 1]);
        q = q.sort(function(t, r) {
          return t - r
        }), a.push(q[0]);
        for (var z = 1; z < q.length; z += 2) {
          var F = q[z];
          !isNaN(F) && -1 === a.indexOf(F) && a.push(F)
        }
      }
      return a
    }, eo = {
      analyze: en,
      limits: ei
    }, eu = Math.sqrt, ea = Math.pow, ef = Math.min, es = Math.max, ec = Math.atan2, el = Math.abs, eh = Math.cos, ep = Math.sin, ev = Math.exp, ed = Math.PI, eg = {
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
    }, ey = 0, eb = Object.keys(eg); ey < eb.length; ey += 1) {
    var em = eb[ey];
    eg[em.toLowerCase()] = eg[em]
  }
  return p.average = function(t, r, e) {
    void 0 === r && (r = "lrgb"), void 0 === e && (e = null);
    var n = t.length;
    !e && (e = Array.from(Array(n)).map(function() {
      return 1
    }));
    var i = n / e.reduce(function(t, r) {
      return t + r
    });
    if (e.forEach(function(t, r) {
        e[r] *= i
      }), t = t.map(function(t) {
        return new h(t)
      }), "lrgb" === r) return rZ(t, e);
    for (var o = t.shift(), u = o.get(r), a = [], f = 0, s = 0, c = 0; c < u.length; c++)
      if (u[c] = (u[c] || 0) * e[0], a.push(isNaN(u[c]) ? 0 : e[0]), "h" === r.charAt(c) && !isNaN(u[c])) {
        var l = u[c] / 180 * rF;
        f += rH(l) * e[0], s += rW(l) * e[0]
      } var p = o.alpha() * e[0];
    t.forEach(function(t, n) {
      var i = t.get(r);
      p += t.alpha() * e[n + 1];
      for (var o = 0; o < u.length; o++)
        if (!isNaN(i[o])) {
          if (a[o] += e[n + 1], "h" === r.charAt(o)) {
            var c = i[o] / 180 * rF;
            f += rH(c) * e[n + 1], s += rW(c) * e[n + 1]
          } else u[o] += i[o] * e[n + 1]
        }
    });
    for (var v = 0; v < u.length; v++)
      if ("h" === r.charAt(v)) {
        for (var d = r$(s / a[v], f / a[v]) / rF * 180; d < 0;) d += 360;
        for (; d >= 360;) d -= 360;
        u[v] = d
      } else u[v] = u[v] / a[v];
    return p /= n, new h(u, r).alpha(p > .99999 ? 1 : p, !0)
  }, p.bezier = function(t) {
    var r = rV(t);
    return r.scale = function() {
      return rX(r)
    }, r
  }, p.blend = rK, p.cubehelix = function(t, r, e, n, i) {
    void 0 === t && (t = 300), void 0 === r && (r = -1.5), void 0 === e && (e = 1), void 0 === n && (n = 1), void 0 === i && (i = [0, 1]);
    var o, u = 0;
    "array" === r1(i) ? o = i[1] - i[0] : (o = 0, i = [i, i]);
    var a = function(a) {
      var f = r5 * ((t + 120) / 360 + r * a),
        s = r3(i[0] + o * a, n),
        c = (0 !== u ? e[0] + a * u : e) * s * (1 - s) / 2,
        l = r4(f),
        h = r6(f);
      return p(r2([255 * (s + c * (-.14861 * l + 1.78277 * h)), 255 * (s + c * (-.29227 * l - .90649 * h)), 255 * (s + c * (1.97294 * l)), 1]))
    };
    return a.start = function(r) {
      return null == r ? t : (t = r, a)
    }, a.rotations = function(t) {
      return null == t ? r : (r = t, a)
    }, a.gamma = function(t) {
      return null == t ? n : (n = t, a)
    }, a.hue = function(t) {
      return null == t ? e : ("array" === r1(e = t) ? 0 == (u = e[1] - e[0]) && (e = e[1]) : u = 0, a)
    }, a.lightness = function(t) {
      return null == t ? i : ("array" === r1(t) ? (i = t, o = t[1] - t[0]) : (i = [t, t], o = 0), a)
    }, a.scale = function() {
      return p.scale(a)
    }, a.hue(e), a
  }, p.mix = p.interpolate = rj, p.random = function() {
    for (var t = "#", r = 0; r < 6; r++) t += "0123456789abcdef".charAt(r8(16 * r7()));
    return new h(t, "hex")
  }, p.scale = rX, p.analyze = eo.analyze, p.contrast = function(t, r) {
    t = new h(t), r = new h(r);
    var e = t.luminance(),
      n = r.luminance();
    return e > n ? (e + .05) / (n + .05) : (n + .05) / (e + .05)
  }, p.deltaE = function(t, r, e, n, i) {
    void 0 === e && (e = 1), void 0 === n && (n = 1), void 0 === i && (i = 1);
    var o = function(t) {
        return 360 * t / (2 * ed)
      },
      u = function(t) {
        return 2 * ed * t / 360
      };
    t = new h(t), r = new h(r);
    var a = Array.from(t.lab()),
      f = a[0],
      s = a[1],
      c = a[2],
      l = Array.from(r.lab()),
      p = l[0],
      v = l[1],
      d = l[2],
      g = (f + p) / 2,
      y = (eu(ea(s, 2) + ea(c, 2)) + eu(ea(v, 2) + ea(d, 2))) / 2,
      b = .5 * (1 - eu(ea(y, 7) / (ea(y, 7) + ea(25, 7)))),
      m = s * (1 + b),
      _ = v * (1 + b),
      w = eu(ea(m, 2) + ea(c, 2)),
      E = eu(ea(_, 2) + ea(d, 2)),
      k = (w + E) / 2,
      A = o(ec(c, m)),
      x = o(ec(d, _)),
      R = A >= 0 ? A : A + 360,
      S = x >= 0 ? x : x + 360,
      O = el(R - S) > 180 ? (R + S + 360) / 2 : (R + S) / 2,
      T = 1 - .17 * eh(u(O - 30)) + .24 * eh(u(2 * O)) + .32 * eh(u(3 * O + 6)) - .2 * eh(u(4 * O - 63)),
      I = S - R;
    I = 180 >= el(I) ? I : S <= R ? I + 360 : I - 360, I = 2 * eu(w * E) * ep(u(I) / 2);
    var M = E - w,
      L = 1 + .015 * ea(g - 50, 2) / eu(20 + ea(g - 50, 2)),
      j = 1 + .045 * k,
      P = 1 + .015 * k * T,
      U = 30 * ev(-ea((O - 275) / 25, 2)),
      N = -(2 * eu(ea(k, 7) / (ea(k, 7) + ea(25, 7)))) * ep(2 * u(U));
    return es(0, ef(100, eu(ea((p - f) / (e * L), 2) + ea(M / (n * j), 2) + ea(I / (i * P), 2) + N * (M / (n * j)) * (I / (i * P)))))
  }, p.distance = function(t, r, e) {
    void 0 === e && (e = "lab"), t = new h(t), r = new h(r);
    var n = t.get(e),
      i = r.get(e),
      o = 0;
    for (var u in n) {
      var a = (n[u] || 0) - (i[u] || 0);
      o += a * a
    }
    return Math.sqrt(o)
  }, p.limits = eo.limits, p.valid = function() {
    for (var t = [], r = arguments.length; r--;) t[r] = arguments[r];
    try {
      return new(Function.prototype.bind.apply(h, [null].concat(t))), !0
    } catch (t) {
      return !1
    }
  }, p.scales = {
    cool: function() {
      return rX([p.hsl(180, 1, .9), p.hsl(250, .7, .4)])
    },
    hot: function() {
      return rX(["#000", "#f00", "#ff0", "#fff"]).mode("rgb")
    }
  }, p.colors = t3, p.brewer = eg, p
}, "object" == typeof r && void 0 !== t ? t.exports = i() : "function" == typeof define && define.amd ? define(i) : (n = "undefined" != typeof globalThis ? globalThis : n || self).chroma = i()