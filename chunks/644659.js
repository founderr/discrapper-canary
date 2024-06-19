var e, o, i, u = r(197047),
  c = r(161581),
  f = r(622281),
  a = r(251069),
  p = r(740362),
  s = r(801127),
  l = r(883539),
  v = r(624906),
  y = "Object already initialized",
  b = c.TypeError,
  h = c.WeakMap;
if (u || s.state) {
  var g = s.state || (s.state = new h);
  g.get = g.get, g.has = g.has, g.set = g.set, e = function(t, n) {
    if (g.has(t)) throw b(y);
    return n.facade = t, g.set(t, n), n
  }, o = function(t) {
    return g.get(t) || {}
  }, i = function(t) {
    return g.has(t)
  }
} else {
  var x = l("state");
  v[x] = !0, e = function(t, n) {
    if (p(t, x)) throw b(y);
    return n.facade = t, a(t, x, n), n
  }, o = function(t) {
    return p(t, x) ? t[x] : {}
  }, i = function(t) {
    return p(t, x)
  }
}
t.exports = {
  set: e,
  get: o,
  has: i,
  enforce: function(t) {
    return i(t) ? o(t) : e(t, {})
  },
  getterFor: function(t) {
    return function(n) {
      var r;
      if (!f(n) || (r = o(n)).type !== t) throw b("Incompatible receiver, " + t + " required");
      return r
    }
  }
}