if (r("808653"), r("424973"), !i) var i = {
  map: function(t, n) {
    var r = {};
    return n ? t.map(function(t, i) {
      return r.index = i, n.call(r, t)
    }) : t.slice()
  },
  naturalOrder: function(t, n) {
    return t < n ? -1 : t > n ? 1 : 0
  },
  sum: function(t, n) {
    var r = {};
    return t.reduce(n ? function(t, i, o) {
      return r.index = o, t + n.call(r, i)
    } : function(t, n) {
      return t + n
    }, 0)
  },
  max: function(t, n) {
    return Math.max.apply(null, n ? i.map(t, n) : t)
  }
};
var o = function() {
  var t = 3;

  function n(t, n, r) {
    return (t << 10) + (n << 5) + r
  }

  function r(t) {
    var n = [],
      r = !1;

    function i() {
      n.sort(t), r = !0
    }
    return {
      push: function(t) {
        n.push(t), r = !1
      },
      peek: function(t) {
        return !r && i(), void 0 === t && (t = n.length - 1), n[t]
      },
      pop: function() {
        return !r && i(), n.pop()
      },
      size: function() {
        return n.length
      },
      map: function(t) {
        return n.map(t)
      },
      debug: function() {
        return !r && i(), n
      }
    }
  }

  function o(t, n, r, i, o, u, e) {
    this.r1 = t, this.r2 = n, this.g1 = r, this.g2 = i, this.b1 = o, this.b2 = u, this.histo = e
  }

  function u() {
    this.vboxes = new r(function(t, n) {
      return i.naturalOrder(t.vbox.count() * t.vbox.volume(), n.vbox.count() * n.vbox.volume())
    })
  }
  return o.prototype = {
    volume: function(t) {
      return (!this._volume || t) && (this._volume = (this.r2 - this.r1 + 1) * (this.g2 - this.g1 + 1) * (this.b2 - this.b1 + 1)), this._volume
    },
    count: function(t) {
      var r = this.histo;
      if (!this._count_set || t) {
        var i, o, u, e = 0;
        for (i = this.r1; i <= this.r2; i++)
          for (o = this.g1; o <= this.g2; o++)
            for (u = this.b1; u <= this.b2; u++) e += r[n(i, o, u)] || 0;
        this._count = e, this._count_set = !0
      }
      return this._count
    },
    copy: function() {
      return new o(this.r1, this.r2, this.g1, this.g2, this.b1, this.b2, this.histo)
    },
    avg: function(t) {
      var r = this.histo;
      if (!this._avg || t) {
        var i, o, u, e, s = 0,
          a = 8,
          h = 0,
          f = 0,
          c = 0;
        for (o = this.r1; o <= this.r2; o++)
          for (u = this.g1; u <= this.g2; u++)
            for (e = this.b1; e <= this.b2; e++) s += i = r[n(o, u, e)] || 0, h += i * (o + .5) * a, f += i * (u + .5) * a, c += i * (e + .5) * a;
        s ? this._avg = [~~(h / s), ~~(f / s), ~~(c / s)] : this._avg = [~~(a * (this.r1 + this.r2 + 1) / 2), ~~(a * (this.g1 + this.g2 + 1) / 2), ~~(a * (this.b1 + this.b2 + 1) / 2)]
      }
      return this._avg
    },
    contains: function(n) {
      var r = n[0] >> t;
      return gval = n[1] >> t, bval = n[2] >> t, r >= this.r1 && r <= this.r2 && gval >= this.g1 && gval <= this.g2 && bval >= this.b1 && bval <= this.b2
    }
  }, u.prototype = {
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
      for (var n = this.vboxes, r = 0; r < n.size(); r++)
        if (n.peek(r).vbox.contains(t)) return n.peek(r).color;
      return this.nearest(t)
    },
    nearest: function(t) {
      for (var n, r, i, o = this.vboxes, u = 0; u < o.size(); u++)((r = Math.sqrt(Math.pow(t[0] - o.peek(u).color[0], 2) + Math.pow(t[1] - o.peek(u).color[1], 2) + Math.pow(t[2] - o.peek(u).color[2], 2))) < n || void 0 === n) && (n = r, i = o.peek(u).color);
      return i
    },
    forcebw: function() {
      var t = this.vboxes;
      t.sort(function(t, n) {
        return i.naturalOrder(i.sum(t.color), i.sum(n.color))
      });
      var n = t[0].color;
      n[0] < 5 && n[1] < 5 && n[2] < 5 && (t[0].color = [0, 0, 0]);
      var r = t.length - 1,
        o = t[r].color;
      o[0] > 251 && o[1] > 251 && o[2] > 251 && (t[r].color = [255, 255, 255])
    }
  }, {
    quantize: function(e, s) {
      if (!e.length || s < 2 || s > 256) return !1;
      var a, h, f, c, l, v, p, g, b, x, d, m, z, k, _, w, y = (a = e, l = Array(32768), a.forEach(function(r) {
          f = r[0] >> t, c = r[1] >> t, l[h = n(f, c, r[2] >> t)] = (l[h] || 0) + 1
        }), l),
        E = 0;
      y.forEach(function() {
        E++
      });
      var M = (v = e, p = y, d = 1e6, m = 0, z = 1e6, k = 0, _ = 1e6, w = 0, v.forEach(function(n) {
          g = n[0] >> t, b = n[1] >> t, x = n[2] >> t, g < d ? d = g : g > m && (m = g), b < z ? z = b : b > k && (k = b), x < _ ? _ = x : x > w && (w = x)
        }), new o(d, m, z, k, _, w, p)),
        C = new r(function(t, n) {
          return i.naturalOrder(t.count(), n.count())
        });

      function O(t, r) {
        for (var o, u = 1, e = 0; e < 1e3;) {
          if (!(o = t.pop()).count()) {
            t.push(o), e++;
            continue
          }
          var s = function(t, r) {
              if (r.count()) {
                var o = r.r2 - r.r1 + 1,
                  u = r.g2 - r.g1 + 1,
                  e = r.b2 - r.b1 + 1,
                  s = i.max([o, u, e]);
                if (1 == r.count()) return [r.copy()];
                var a, h, f, c, l, v = 0,
                  p = [],
                  g = [];
                if (s == o)
                  for (a = r.r1; a <= r.r2; a++) {
                    for (c = 0, h = r.g1; h <= r.g2; h++)
                      for (f = r.b1; f <= r.b2; f++) c += t[l = n(a, h, f)] || 0;
                    v += c, p[a] = v
                  } else if (s == u)
                    for (a = r.g1; a <= r.g2; a++) {
                      for (c = 0, h = r.r1; h <= r.r2; h++)
                        for (f = r.b1; f <= r.b2; f++) c += t[l = n(h, a, f)] || 0;
                      v += c, p[a] = v
                    } else
                      for (a = r.b1; a <= r.b2; a++) {
                        for (c = 0, h = r.r1; h <= r.r2; h++)
                          for (f = r.g1; f <= r.g2; f++) c += t[l = n(h, f, a)] || 0;
                        v += c, p[a] = v
                      }
                return p.forEach(function(t, n) {
                  g[n] = v - t
                }), b(s == o ? "r" : s == u ? "g" : "b")
              }

              function b(t) {
                var n, i, o, u, e, s = t + "1",
                  h = t + "2",
                  f = 0;
                for (a = r[s]; a <= r[h]; a++)
                  if (p[a] > v / 2) {
                    for (o = r.copy(), u = r.copy(), n = a - r[s], e = n <= (i = r[h] - a) ? Math.min(r[h] - 1, ~~(a + i / 2)) : Math.max(r[s], ~~(a - 1 - n / 2)); !p[e];) e++;
                    for (f = g[e]; !f && p[e - 1];) f = g[--e];
                    return o[h] = e, u[s] = o[h] + 1, [o, u]
                  }
              }
            }(y, o),
            a = s[0],
            h = s[1];
          if (!a) return;
          if (t.push(a), h && (t.push(h), u++), u >= r || e++ > 1e3) return
        }
      }
      C.push(M), O(C, .75 * s);
      for (var q = new r(function(t, n) {
          return i.naturalOrder(t.count() * t.volume(), n.count() * n.volume())
        }); C.size();) q.push(C.pop());
      O(q, s - q.size());
      for (var A = new u; q.size();) A.push(q.pop());
      return A
    }
  }
}();
t.exports = o.quantize