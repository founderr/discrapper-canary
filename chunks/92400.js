e("424973"), e("274635"), t.exports = f, f.default = f, f.stable = l, f.stableStringify = l;
var n = "[...]",
  i = "[Circular]",
  o = [],
  u = [];

function a() {
  return {
    depthLimit: Number.MAX_SAFE_INTEGER,
    edgesLimit: Number.MAX_SAFE_INTEGER
  }
}

function f(t, r, e, f) {
  void 0 === f && (f = a()),
    function t(r, e, o, u, a, f, c) {
      if (f += 1, "object" == typeof r && null !== r) {
        for (l = 0; l < u.length; l++)
          if (u[l] === r) {
            s(i, r, e, a);
            return
          } if (void 0 !== c.depthLimit && f > c.depthLimit || void 0 !== c.edgesLimit && o + 1 > c.edgesLimit) {
          s(n, r, e, a);
          return
        }
        if (u.push(r), Array.isArray(r))
          for (l = 0; l < r.length; l++) t(r[l], l, l, u, r, f, c);
        else {
          var l, h = Object.keys(r);
          for (l = 0; l < h.length; l++) {
            var p = h[l];
            t(r[p], p, l, u, r, f, c)
          }
        }
        u.pop()
      }
    }(t, "", 0, [], void 0, 0, f);
  try {
    c = 0 === u.length ? JSON.stringify(t, r, e) : JSON.stringify(t, h(r), e)
  } catch (t) {
    return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]")
  } finally {
    for (; 0 !== o.length;) {
      var c, l = o.pop();
      4 === l.length ? Object.defineProperty(l[0], l[1], l[3]) : l[0][l[1]] = l[2]
    }
  }
  return c
}

function s(t, r, e, n) {
  var i = Object.getOwnPropertyDescriptor(n, e);
  void 0 !== i.get ? i.configurable ? (Object.defineProperty(n, e, {
    value: t
  }), o.push([n, e, r, i])) : u.push([r, e, t]) : (n[e] = t, o.push([n, e, r]))
}

function c(t, r) {
  return t < r ? -1 : t > r ? 1 : 0
}

function l(t, r, e, f) {
  void 0 === f && (f = a());
  var l, p = function t(r, e, u, a, f, l, h) {
    if (l += 1, "object" == typeof r && null !== r) {
      for (p = 0; p < a.length; p++)
        if (a[p] === r) {
          s(i, r, e, f);
          return
        } try {
        if ("function" == typeof r.toJSON) return
      } catch (t) {
        return
      }
      if (void 0 !== h.depthLimit && l > h.depthLimit || void 0 !== h.edgesLimit && u + 1 > h.edgesLimit) {
        s(n, r, e, f);
        return
      }
      if (a.push(r), Array.isArray(r))
        for (p = 0; p < r.length; p++) t(r[p], p, p, a, r, l, h);
      else {
        var p, v = {},
          d = Object.keys(r).sort(c);
        for (p = 0; p < d.length; p++) {
          var g = d[p];
          t(r[g], g, p, a, r, l, h), v[g] = r[g]
        }
        if (void 0 === f) return v;
        o.push([f, e, r]), f[e] = v
      }
      a.pop()
    }
  }(t, "", 0, [], void 0, 0, f) || t;
  try {
    l = 0 === u.length ? JSON.stringify(p, r, e) : JSON.stringify(p, h(r), e)
  } catch (t) {
    return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]")
  } finally {
    for (; 0 !== o.length;) {
      var v = o.pop();
      4 === v.length ? Object.defineProperty(v[0], v[1], v[3]) : v[0][v[1]] = v[2]
    }
  }
  return l
}

function h(t) {
  return t = void 0 !== t ? t : function(t, r) {
      return r
    },
    function(r, e) {
      if (u.length > 0)
        for (var n = 0; n < u.length; n++) {
          var i = u[n];
          if (i[1] === r && i[0] === e) {
            e = i[2], u.splice(n, 1);
            break
          }
        }
      return t.call(this, r, e)
    }
}