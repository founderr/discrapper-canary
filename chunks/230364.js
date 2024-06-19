var e = r(581031),
  o = r(936940),
  i = r(354848),
  u = r(740362),
  c = r(325008),
  f = r(539459).CONFIGURABLE,
  a = r(943329),
  p = r(644659),
  s = p.enforce,
  l = p.get,
  v = String,
  y = Object.defineProperty,
  b = e("".slice),
  h = e("".replace),
  g = e([].join),
  x = c && !o(function() {
    return 8 !== y(function() {}, "length", {
      value: 8
    }).length
  }),
  m = String(String).split("String"),
  d = t.exports = function(t, n, r) {
    "Symbol(" === b(v(n), 0, 7) && (n = "[" + h(v(n), /^Symbol\(([^)]*)\)/, "$1") + "]"), r && r.getter && (n = "get " + n), r && r.setter && (n = "set " + n), (!u(t, "name") || f && t.name !== n) && (c ? y(t, "name", {
      value: n,
      configurable: !0
    }) : t.name = n), x && r && u(r, "arity") && t.length !== r.arity && y(t, "length", {
      value: r.arity
    });
    try {
      r && u(r, "constructor") && r.constructor ? c && y(t, "prototype", {
        writable: !1
      }) : t.prototype && (t.prototype = void 0)
    } catch (t) {}
    var e = s(t);
    return !u(e, "source") && (e.source = g(m, "string" == typeof n ? n : "")), t
  };
Function.prototype.toString = d(function() {
  return i(this) && l(this).source || a(this)
}, "toString")