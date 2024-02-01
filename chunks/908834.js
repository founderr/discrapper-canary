"use strict";
n.r(t), n.d(t, {
  MonotonicInterpolant: function() {
    return o
  }
}), n("70102"), n("424973");

function r(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
  }
}

function i(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
var o = function() {
  var e, t, n;

  function o(e, t) {
    ! function(e, t) {
      if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
    }(this, o), i(this, "xs", void 0), i(this, "ys", void 0), i(this, "c1s", void 0), i(this, "c2s", void 0), i(this, "c3s", void 0);
    for (var n, r, s, a = e.length, c = [], u = 0; u < a; u++) c.push(u);
    c.sort(function(t, n) {
      return e[t] < e[n] ? -1 : 1
    });
    for (var l = [], d = [], f = [], p = 0; p < a - 1; p++) n = e[p + 1] - e[p], r = t[p + 1] - t[p], d.push(n), l.push(r), f.push(r / n);
    for (var h = [f[0]], v = 0; v < d.length - 1; v++) {
      var g = f[v],
        b = f[v + 1];
      if (g * b <= 0) h.push(0);
      else {
        n = d[v];
        var m = d[v + 1],
          y = n + m;
        h.push(3 * y / ((y + m) / g + (y + n) / b))
      }
    }
    h.push(f[f.length - 1]);
    for (var x = [], w = [], S = 0; S < h.length - 1; S++) {
      s = f[S];
      var k = h[S],
        E = 1 / d[S],
        _ = k + h[S + 1] - s - s;
      x.push((s - k - _) * E), w.push(_ * E * E)
    }
    this.xs = e, this.ys = t, this.c1s = h, this.c2s = x, this.c3s = w
  }
  return e = o, t = [{
    key: "interpolate",
    value: function(e) {
      var t, n = this.xs,
        r = this.ys,
        i = this.c1s,
        o = this.c2s,
        s = this.c3s,
        a = n.length - 1;
      if (e === n[a]) return r[a];
      for (var c = 0, u = s.length - 1; c <= u;) {
        var l = n[t = Math.floor(.5 * (c + u))];
        if (l < e) c = t + 1;
        else {
          if (!(l > e)) return r[t];
          u = t - 1
        }
      }
      var d = e - n[a = Math.max(0, u)],
        f = d * d;
      return r[a] + i[a] * d + o[a] * f + s[a] * d * f
    }
  }], r(e.prototype, t), n && r(e, n), o
}()