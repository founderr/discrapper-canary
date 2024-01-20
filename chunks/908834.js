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
    for (var d = [], l = [], f = [], p = 0; p < a - 1; p++) n = e[p + 1] - e[p], r = t[p + 1] - t[p], l.push(n), d.push(r), f.push(r / n);
    for (var h = [f[0]], g = 0; g < l.length - 1; g++) {
      var b = f[g],
        v = f[g + 1];
      if (b * v <= 0) h.push(0);
      else {
        n = l[g];
        var m = l[g + 1],
          y = n + m;
        h.push(3 * y / ((y + m) / b + (y + n) / v))
      }
    }
    h.push(f[f.length - 1]);
    for (var x = [], w = [], S = 0; S < h.length - 1; S++) {
      s = f[S];
      var k = h[S],
        _ = 1 / l[S],
        E = k + h[S + 1] - s - s;
      x.push((s - k - E) * _), w.push(E * _ * _)
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
        var d = n[t = Math.floor(.5 * (c + u))];
        if (d < e) c = t + 1;
        else {
          if (!(d > e)) return r[t];
          u = t - 1
        }
      }
      var l = e - n[a = Math.max(0, u)],
        f = l * l;
      return r[a] + i[a] * l + o[a] * f + s[a] * l * f
    }
  }], r(e.prototype, t), n && r(e, n), o
}()