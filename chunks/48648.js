if (n("808653"), n("424973"), !i) var i = {
  map: function(t, e) {
    var n = {};
    return e ? t.map(function(t, i) {
      return n.index = i, e.call(n, t)
    }) : t.slice()
  },
  naturalOrder: function(t, e) {
    return t < e ? -1 : t > e ? 1 : 0
  },
  sum: function(t, e) {
    var n = {};
    return t.reduce(e ? function(t, i, r) {
      return n.index = r, t + e.call(n, i)
    } : function(t, e) {
      return t + e
    }, 0)
  },
  max: function(t, e) {
    return Math.max.apply(null, e ? i.map(t, e) : t)
  }
};
var r = function() {
  var t = 3;

  function e(t, e, n) {
    return (t << 10) + (e << 5) + n
  }

  function n(t) {
    var e = [],
      n = !1;

    function i() {
      e.sort(t), n = !0
    }
    return {
      push: function(t) {
        e.push(t), n = !1
      },
      peek: function(t) {
        return !n && i(), void 0 === t && (t = e.length - 1), e[t]
      },
      pop: function() {
        return !n && i(), e.pop()
      },
      size: function() {
        return e.length
      },
      map: function(t) {
        return e.map(t)
      },
      debug: function() {
        return !n && i(), e
      }
    }
  }

  function r(t, e, n, i, r, l, s) {
    this.r1 = t, this.r2 = e, this.g1 = n, this.g2 = i, this.b1 = r, this.b2 = l, this.histo = s
  }

  function l() {
    this.vboxes = new n(function(t, e) {
      return i.naturalOrder(t.vbox.count() * t.vbox.volume(), e.vbox.count() * e.vbox.volume())
    })
  }
  return r.prototype = {
    volume: function(t) {
      return (!this._volume || t) && (this._volume = (this.r2 - this.r1 + 1) * (this.g2 - this.g1 + 1) * (this.b2 - this.b1 + 1)), this._volume
    },
    count: function(t) {
      var n = this.histo;
      if (!this._count_set || t) {
        var i, r, l, s = 0;
        for (i = this.r1; i <= this.r2; i++)
          for (r = this.g1; r <= this.g2; r++)
            for (l = this.b1; l <= this.b2; l++) s += n[e(i, r, l)] || 0;
        this._count = s, this._count_set = !0
      }
      return this._count
    },
    copy: function() {
      return new r(this.r1, this.r2, this.g1, this.g2, this.b1, this.b2, this.histo)
    },
    avg: function(t) {
      var n = this.histo;
      if (!this._avg || t) {
        var i, r, l, s, a = 0,
          o = 8,
          u = 0,
          c = 0,
          d = 0;
        for (r = this.r1; r <= this.r2; r++)
          for (l = this.g1; l <= this.g2; l++)
            for (s = this.b1; s <= this.b2; s++) a += i = n[e(r, l, s)] || 0, u += i * (r + .5) * o, c += i * (l + .5) * o, d += i * (s + .5) * o;
        a ? this._avg = [~~(u / a), ~~(c / a), ~~(d / a)] : this._avg = [~~(o * (this.r1 + this.r2 + 1) / 2), ~~(o * (this.g1 + this.g2 + 1) / 2), ~~(o * (this.b1 + this.b2 + 1) / 2)]
      }
      return this._avg
    },
    contains: function(e) {
      var n = e[0] >> t;
      return gval = e[1] >> t, bval = e[2] >> t, n >= this.r1 && n <= this.r2 && gval >= this.g1 && gval <= this.g2 && bval >= this.b1 && bval <= this.b2
    }
  }, l.prototype = {
    push: function(t) {
      this.vboxes.push({
        vbox: t,
        color: t.avg()
      })
    },
    palette: function() {
      return this.vboxes.map(function(t) {
        return t.color
      })
    },
    size: function() {
      return this.vboxes.size()
    },
    map: function(t) {
      for (var e = this.vboxes, n = 0; n < e.size(); n++)
        if (e.peek(n).vbox.contains(t)) return e.peek(n).color;
      return this.nearest(t)
    },
    nearest: function(t) {
      for (var e, n, i, r = this.vboxes, l = 0; l < r.size(); l++)((n = Math.sqrt(Math.pow(t[0] - r.peek(l).color[0], 2) + Math.pow(t[1] - r.peek(l).color[1], 2) + Math.pow(t[2] - r.peek(l).color[2], 2))) < e || void 0 === e) && (e = n, i = r.peek(l).color);
      return i
    },
    forcebw: function() {
      var t = this.vboxes;
      t.sort(function(t, e) {
        return i.naturalOrder(i.sum(t.color), i.sum(e.color))
      });
      var e = t[0].color;
      e[0] < 5 && e[1] < 5 && e[2] < 5 && (t[0].color = [0, 0, 0]);
      var n = t.length - 1,
        r = t[n].color;
      r[0] > 251 && r[1] > 251 && r[2] > 251 && (t[n].color = [255, 255, 255])
    }
  }, {
    quantize: function(s, a) {
      if (!s.length || a < 2 || a > 256) return !1;
      var o, u, c, d, f, h, p, _, v, C, E, g, I, S, m, A, N = (o = s, f = Array(32768), o.forEach(function(n) {
          c = n[0] >> t, d = n[1] >> t, f[u = e(c, d, n[2] >> t)] = (f[u] || 0) + 1
        }), f),
        T = 0;
      N.forEach(function() {
        T++
      });
      var w = (h = s, p = N, E = 1e6, g = 0, I = 1e6, S = 0, m = 1e6, A = 0, h.forEach(function(e) {
          _ = e[0] >> t, v = e[1] >> t, C = e[2] >> t, _ < E ? E = _ : _ > g && (g = _), v < I ? I = v : v > S && (S = v), C < m ? m = C : C > A && (A = C)
        }), new r(E, g, I, S, m, A, p)),
        y = new n(function(t, e) {
          return i.naturalOrder(t.count(), e.count())
        });

      function L(t, n) {
        for (var r, l = 1, s = 0; s < 1e3;) {
          if (!(r = t.pop()).count()) {
            t.push(r), s++;
            continue
          }
          var a = function(t, n) {
              if (n.count()) {
                var r = n.r2 - n.r1 + 1,
                  l = n.g2 - n.g1 + 1,
                  s = n.b2 - n.b1 + 1,
                  a = i.max([r, l, s]);
                if (1 == n.count()) return [n.copy()];
                var o, u, c, d, f, h = 0,
                  p = [],
                  _ = [];
                if (a == r)
                  for (o = n.r1; o <= n.r2; o++) {
                    for (d = 0, u = n.g1; u <= n.g2; u++)
                      for (c = n.b1; c <= n.b2; c++) d += t[f = e(o, u, c)] || 0;
                    h += d, p[o] = h
                  } else if (a == l)
                    for (o = n.g1; o <= n.g2; o++) {
                      for (d = 0, u = n.r1; u <= n.r2; u++)
                        for (c = n.b1; c <= n.b2; c++) d += t[f = e(u, o, c)] || 0;
                      h += d, p[o] = h
                    } else
                      for (o = n.b1; o <= n.b2; o++) {
                        for (d = 0, u = n.r1; u <= n.r2; u++)
                          for (c = n.g1; c <= n.g2; c++) d += t[f = e(u, c, o)] || 0;
                        h += d, p[o] = h
                      }
                return p.forEach(function(t, e) {
                  _[e] = h - t
                }), v(a == r ? "r" : a == l ? "g" : "b")
              }

              function v(t) {
                var e, i, r, l, s, a = t + "1",
                  u = t + "2",
                  c = 0;
                for (o = n[a]; o <= n[u]; o++)
                  if (p[o] > h / 2) {
                    for (r = n.copy(), l = n.copy(), e = o - n[a], s = e <= (i = n[u] - o) ? Math.min(n[u] - 1, ~~(o + i / 2)) : Math.max(n[a], ~~(o - 1 - e / 2)); !p[s];) s++;
                    for (c = _[s]; !c && p[s - 1];) c = _[--s];
                    return r[u] = s, l[a] = r[u] + 1, [r, l]
                  }
              }
            }(N, r),
            o = a[0],
            u = a[1];
          if (!o) return;
          if (t.push(o), u && (t.push(u), l++), l >= n || s++ > 1e3) return
        }
      }
      y.push(w), L(y, .75 * a);
      for (var R = new n(function(t, e) {
          return i.naturalOrder(t.count() * t.volume(), e.count() * e.volume())
        }); y.size();) R.push(y.pop());
      L(R, a - R.size());
      for (var b = new l; R.size();) b.push(R.pop());
      return b
    }
  }
}();
t.exports = r.quantize