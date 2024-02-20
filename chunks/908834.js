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

function a(e, t, n) {
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
    }(this, o), a(this, "xs", void 0), a(this, "ys", void 0), a(this, "c1s", void 0), a(this, "c2s", void 0), a(this, "c3s", void 0);
    for (var n, r, i, s = e.length, c = [], l = 0; l < s; l++) c.push(l);
    c.sort(function(t, n) {
      return e[t] < e[n] ? -1 : 1
    });
    for (var u = [], d = [], p = [], f = 0; f < s - 1; f++) n = e[f + 1] - e[f], r = t[f + 1] - t[f], d.push(n), u.push(r), p.push(r / n);
    for (var h = [p[0]], m = 0; m < d.length - 1; m++) {
      var v = p[m],
        g = p[m + 1];
      if (v * g <= 0) h.push(0);
      else {
        n = d[m];
        var y = d[m + 1],
          b = n + y;
        h.push(3 * b / ((b + y) / v + (b + n) / g))
      }
    }
    h.push(p[p.length - 1]);
    for (var x = [], S = [], w = 0; w < h.length - 1; w++) {
      i = p[w];
      var D = h[w],
        C = 1 / d[w],
        k = D + h[w + 1] - i - i;
      x.push((i - D - k) * C), S.push(k * C * C)
    }
    this.xs = e, this.ys = t, this.c1s = h, this.c2s = x, this.c3s = S
  }
  return e = o, t = [{
    key: "interpolate",
    value: function(e) {
      var t, n = this.xs,
        r = this.ys,
        a = this.c1s,
        o = this.c2s,
        i = this.c3s,
        s = n.length - 1;
      if (e === n[s]) return r[s];
      for (var c = 0, l = i.length - 1; c <= l;) {
        var u = n[t = Math.floor(.5 * (c + l))];
        if (u < e) c = t + 1;
        else {
          if (!(u > e)) return r[t];
          l = t - 1
        }
      }
      var d = e - n[s = Math.max(0, l)],
        p = d * d;
      return r[s] + a[s] * d + o[s] * p + i[s] * d * p
    }
  }], r(e.prototype, t), n && r(e, n), o
}()