"use strict";
var r = n("911718"),
  a = n("314970"),
  i = n("825089"),
  o = r("%TypeError%"),
  s = r("%WeakMap%", !0),
  c = r("%Map%", !0),
  l = a("WeakMap.prototype.get", !0),
  u = a("WeakMap.prototype.set", !0),
  d = a("WeakMap.prototype.has", !0),
  p = a("Map.prototype.get", !0),
  f = a("Map.prototype.set", !0),
  m = a("Map.prototype.has", !0),
  h = function(e, t) {
    for (var n, r = e; null !== (n = r.next); r = n)
      if (n.key === t) return r.next = n.next, n.next = e.next, e.next = n, n
  },
  v = function(e, t) {
    var n = h(e, t);
    return n && n.value
  },
  g = function(e, t, n) {
    var r = h(e, t);
    r ? r.value = n : e.next = {
      key: t,
      next: e.next,
      value: n
    }
  };
e.exports = function() {
  var e, t, n, r = {
    assert: function(e) {
      if (!r.has(e)) throw new o("Side channel does not contain " + i(e))
    },
    get: function(r) {
      if (s && r && ("object" == typeof r || "function" == typeof r)) {
        if (e) return l(e, r)
      } else if (c) {
        if (t) return p(t, r)
      } else if (n) return v(n, r)
    },
    has: function(r) {
      if (s && r && ("object" == typeof r || "function" == typeof r)) {
        if (e) return d(e, r)
      } else if (c) {
        if (t) return m(t, r)
      } else if (n) return !!h(n, r);
      return !1
    },
    set: function(r, a) {
      s && r && ("object" == typeof r || "function" == typeof r) ? (!e && (e = new s), u(e, r, a)) : c ? (!t && (t = new c), f(t, r, a)) : (!n && (n = {
        key: {},
        next: null
      }), g(n, r, a))
    }
  };
  return r
}