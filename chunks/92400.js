n("424973"), n("274635"), e.exports = s, s.default = s, s.stable = f, s.stableStringify = f;
var r = "[...]",
  a = "[Circular]",
  o = [],
  i = [];

function u() {
  return {
    depthLimit: Number.MAX_SAFE_INTEGER,
    edgesLimit: Number.MAX_SAFE_INTEGER
  }
}

function s(e, t, n, s) {
  void 0 === s && (s = u()),
    function e(t, n, o, i, u, s, c) {
      if (s += 1, "object" == typeof t && null !== t) {
        for (f = 0; f < i.length; f++)
          if (i[f] === t) {
            l(a, t, n, u);
            return
          } if (void 0 !== c.depthLimit && s > c.depthLimit || void 0 !== c.edgesLimit && o + 1 > c.edgesLimit) {
          l(r, t, n, u);
          return
        }
        if (i.push(t), Array.isArray(t))
          for (f = 0; f < t.length; f++) e(t[f], f, f, i, t, s, c);
        else {
          var f, d = Object.keys(t);
          for (f = 0; f < d.length; f++) {
            var p = d[f];
            e(t[p], p, f, i, t, s, c)
          }
        }
        i.pop()
      }
    }(e, "", 0, [], void 0, 0, s);
  try {
    c = 0 === i.length ? JSON.stringify(e, t, n) : JSON.stringify(e, d(t), n)
  } catch (e) {
    return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]")
  } finally {
    for (; 0 !== o.length;) {
      var c, f = o.pop();
      4 === f.length ? Object.defineProperty(f[0], f[1], f[3]) : f[0][f[1]] = f[2]
    }
  }
  return c
}

function l(e, t, n, r) {
  var a = Object.getOwnPropertyDescriptor(r, n);
  void 0 !== a.get ? a.configurable ? (Object.defineProperty(r, n, {
    value: e
  }), o.push([r, n, t, a])) : i.push([t, n, e]) : (r[n] = e, o.push([r, n, t]))
}

function c(e, t) {
  return e < t ? -1 : e > t ? 1 : 0
}

function f(e, t, n, s) {
  void 0 === s && (s = u());
  var f, p = function e(t, n, i, u, s, f, d) {
    if (f += 1, "object" == typeof t && null !== t) {
      for (p = 0; p < u.length; p++)
        if (u[p] === t) {
          l(a, t, n, s);
          return
        } try {
        if ("function" == typeof t.toJSON) return
      } catch (e) {
        return
      }
      if (void 0 !== d.depthLimit && f > d.depthLimit || void 0 !== d.edgesLimit && i + 1 > d.edgesLimit) {
        l(r, t, n, s);
        return
      }
      if (u.push(t), Array.isArray(t))
        for (p = 0; p < t.length; p++) e(t[p], p, p, u, t, f, d);
      else {
        var p, h = {},
          m = Object.keys(t).sort(c);
        for (p = 0; p < m.length; p++) {
          var _ = m[p];
          e(t[_], _, p, u, t, f, d), h[_] = t[_]
        }
        if (void 0 === s) return h;
        o.push([s, n, t]), s[n] = h
      }
      u.pop()
    }
  }(e, "", 0, [], void 0, 0, s) || e;
  try {
    f = 0 === i.length ? JSON.stringify(p, t, n) : JSON.stringify(p, d(t), n)
  } catch (e) {
    return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]")
  } finally {
    for (; 0 !== o.length;) {
      var h = o.pop();
      4 === h.length ? Object.defineProperty(h[0], h[1], h[3]) : h[0][h[1]] = h[2]
    }
  }
  return f
}

function d(e) {
  return e = void 0 !== e ? e : function(e, t) {
      return t
    },
    function(t, n) {
      if (i.length > 0)
        for (var r = 0; r < i.length; r++) {
          var a = i[r];
          if (a[1] === t && a[0] === n) {
            n = a[2], i.splice(r, 1);
            break
          }
        }
      return e.call(this, t, n)
    }
}