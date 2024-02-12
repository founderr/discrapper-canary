if (n("808653"), n("424973"), !l) var l = {
  map: function(e, t) {
    var n = {};
    return t ? e.map(function(e, l) {
      return n.index = l, t.call(n, e)
    }) : e.slice()
  },
  naturalOrder: function(e, t) {
    return e < t ? -1 : e > t ? 1 : 0
  },
  sum: function(e, t) {
    var n = {};
    return e.reduce(t ? function(e, l, i) {
      return n.index = i, e + t.call(n, l)
    } : function(e, t) {
      return e + t
    }, 0)
  },
  max: function(e, t) {
    return Math.max.apply(null, t ? l.map(e, t) : e)
  }
};
var i = function() {
  var e = 3;

  function t(e, t, n) {
    return (e << 10) + (t << 5) + n
  }

  function n(e) {
    var t = [],
      n = !1;

    function l() {
      t.sort(e), n = !0
    }
    return {
      push: function(e) {
        t.push(e), n = !1
      },
      peek: function(e) {
        return !n && l(), void 0 === e && (e = t.length - 1), t[e]
      },
      pop: function() {
        return !n && l(), t.pop()
      },
      size: function() {
        return t.length
      },
      map: function(e) {
        return t.map(e)
      },
      debug: function() {
        return !n && l(), t
      }
    }
  }

  function i(e, t, n, l, i, a, s) {
    this.r1 = e, this.r2 = t, this.g1 = n, this.g2 = l, this.b1 = i, this.b2 = a, this.histo = s
  }

  function a() {
    this.vboxes = new n(function(e, t) {
      return l.naturalOrder(e.vbox.count() * e.vbox.volume(), t.vbox.count() * t.vbox.volume())
    })
  }
  return i.prototype = {
    volume: function(e) {
      return (!this._volume || e) && (this._volume = (this.r2 - this.r1 + 1) * (this.g2 - this.g1 + 1) * (this.b2 - this.b1 + 1)), this._volume
    },
    count: function(e) {
      var n = this.histo;
      if (!this._count_set || e) {
        var l, i, a, s = 0;
        for (l = this.r1; l <= this.r2; l++)
          for (i = this.g1; i <= this.g2; i++)
            for (a = this.b1; a <= this.b2; a++) s += n[t(l, i, a)] || 0;
        this._count = s, this._count_set = !0
      }
      return this._count
    },
    copy: function() {
      return new i(this.r1, this.r2, this.g1, this.g2, this.b1, this.b2, this.histo)
    },
    avg: function(e) {
      var n = this.histo;
      if (!this._avg || e) {
        var l, i, a, s, r = 0,
          u = 8,
          o = 0,
          d = 0,
          c = 0;
        for (i = this.r1; i <= this.r2; i++)
          for (a = this.g1; a <= this.g2; a++)
            for (s = this.b1; s <= this.b2; s++) r += l = n[t(i, a, s)] || 0, o += l * (i + .5) * u, d += l * (a + .5) * u, c += l * (s + .5) * u;
        r ? this._avg = [~~(o / r), ~~(d / r), ~~(c / r)] : this._avg = [~~(u * (this.r1 + this.r2 + 1) / 2), ~~(u * (this.g1 + this.g2 + 1) / 2), ~~(u * (this.b1 + this.b2 + 1) / 2)]
      }
      return this._avg
    },
    contains: function(t) {
      var n = t[0] >> e;
      return gval = t[1] >> e, bval = t[2] >> e, n >= this.r1 && n <= this.r2 && gval >= this.g1 && gval <= this.g2 && bval >= this.b1 && bval <= this.b2
    }
  }, a.prototype = {
    push: function(e) {
      this.vboxes.push({
        vbox: e,
        color: e.avg()
      })
    },
    palette: function() {
      return this.vboxes.map(function(e) {
        return e.color
      })
    },
    size: function() {
      return this.vboxes.size()
    },
    map: function(e) {
      for (var t = this.vboxes, n = 0; n < t.size(); n++)
        if (t.peek(n).vbox.contains(e)) return t.peek(n).color;
      return this.nearest(e)
    },
    nearest: function(e) {
      for (var t, n, l, i = this.vboxes, a = 0; a < i.size(); a++)((n = Math.sqrt(Math.pow(e[0] - i.peek(a).color[0], 2) + Math.pow(e[1] - i.peek(a).color[1], 2) + Math.pow(e[2] - i.peek(a).color[2], 2))) < t || void 0 === t) && (t = n, l = i.peek(a).color);
      return l
    },
    forcebw: function() {
      var e = this.vboxes;
      e.sort(function(e, t) {
        return l.naturalOrder(l.sum(e.color), l.sum(t.color))
      });
      var t = e[0].color;
      t[0] < 5 && t[1] < 5 && t[2] < 5 && (e[0].color = [0, 0, 0]);
      var n = e.length - 1,
        i = e[n].color;
      i[0] > 251 && i[1] > 251 && i[2] > 251 && (e[n].color = [255, 255, 255])
    }
  }, {
    quantize: function(s, r) {
      if (!s.length || r < 2 || r > 256) return !1;
      var u, o, d, c, f, h, I, g, E, _, p, v, m, T, S, N, C = (u = s, f = Array(32768), u.forEach(function(n) {
          d = n[0] >> e, c = n[1] >> e, f[o = t(d, c, n[2] >> e)] = (f[o] || 0) + 1
        }), f),
        A = 0;
      C.forEach(function() {
        A++
      });
      var x = (h = s, I = C, p = 1e6, v = 0, m = 1e6, T = 0, S = 1e6, N = 0, h.forEach(function(t) {
          g = t[0] >> e, E = t[1] >> e, _ = t[2] >> e, g < p ? p = g : g > v && (v = g), E < m ? m = E : E > T && (T = E), _ < S ? S = _ : _ > N && (N = _)
        }), new i(p, v, m, T, S, N, I)),
        M = new n(function(e, t) {
          return l.naturalOrder(e.count(), t.count())
        });

      function y(e, n) {
        for (var i, a = 1, s = 0; s < 1e3;) {
          if (!(i = e.pop()).count()) {
            e.push(i), s++;
            continue
          }
          var r = function(e, n) {
              if (n.count()) {
                var i = n.r2 - n.r1 + 1,
                  a = n.g2 - n.g1 + 1,
                  s = n.b2 - n.b1 + 1,
                  r = l.max([i, a, s]);
                if (1 == n.count()) return [n.copy()];
                var u, o, d, c, f, h = 0,
                  I = [],
                  g = [];
                if (r == i)
                  for (u = n.r1; u <= n.r2; u++) {
                    for (c = 0, o = n.g1; o <= n.g2; o++)
                      for (d = n.b1; d <= n.b2; d++) c += e[f = t(u, o, d)] || 0;
                    h += c, I[u] = h
                  } else if (r == a)
                    for (u = n.g1; u <= n.g2; u++) {
                      for (c = 0, o = n.r1; o <= n.r2; o++)
                        for (d = n.b1; d <= n.b2; d++) c += e[f = t(o, u, d)] || 0;
                      h += c, I[u] = h
                    } else
                      for (u = n.b1; u <= n.b2; u++) {
                        for (c = 0, o = n.r1; o <= n.r2; o++)
                          for (d = n.g1; d <= n.g2; d++) c += e[f = t(o, d, u)] || 0;
                        h += c, I[u] = h
                      }
                return I.forEach(function(e, t) {
                  g[t] = h - e
                }), E(r == i ? "r" : r == a ? "g" : "b")
              }

              function E(e) {
                var t, l, i, a, s, r = e + "1",
                  o = e + "2",
                  d = 0;
                for (u = n[r]; u <= n[o]; u++)
                  if (I[u] > h / 2) {
                    for (i = n.copy(), a = n.copy(), t = u - n[r], s = t <= (l = n[o] - u) ? Math.min(n[o] - 1, ~~(u + l / 2)) : Math.max(n[r], ~~(u - 1 - t / 2)); !I[s];) s++;
                    for (d = g[s]; !d && I[s - 1];) d = g[--s];
                    return i[o] = s, a[r] = i[o] + 1, [i, a]
                  }
              }
            }(C, i),
            u = r[0],
            o = r[1];
          if (!u) return;
          if (e.push(u), o && (e.push(o), a++), a >= n || s++ > 1e3) return
        }
      }
      M.push(x), y(M, .75 * r);
      for (var R = new n(function(e, t) {
          return l.naturalOrder(e.count() * e.volume(), t.count() * t.volume())
        }); M.size();) R.push(M.pop());
      y(R, r - R.size());
      for (var w = new a; R.size();) w.push(R.pop());
      return w
    }
  }
}();
e.exports = i.quantize