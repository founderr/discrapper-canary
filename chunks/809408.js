var n = r("146007"),
  u = r("334782"),
  o = r("253792"),
  a = r("366726"),
  i = r("855023"),
  s = r("552500"),
  l = r("561449"),
  c = r("619754"),
  f = r("310524"),
  d = r("904526"),
  D = r("552647"),
  h = r("540956"),
  v = r("925400"),
  p = r("493118"),
  C = r("789078"),
  g = r("725502"),
  B = r("591350"),
  E = r("751279"),
  m = r("285162"),
  A = r("154948"),
  F = r("466731"),
  b = "[object Arguments]",
  y = "[object Function]",
  w = "[object Object]",
  x = {};
x[b] = x["[object Array]"] = x["[object ArrayBuffer]"] = x["[object DataView]"] = x["[object Boolean]"] = x["[object Date]"] = x["[object Float32Array]"] = x["[object Float64Array]"] = x["[object Int8Array]"] = x["[object Int16Array]"] = x["[object Int32Array]"] = x["[object Map]"] = x["[object Number]"] = x[w] = x["[object RegExp]"] = x["[object Set]"] = x["[object String]"] = x["[object Symbol]"] = x["[object Uint8Array]"] = x["[object Uint8ClampedArray]"] = x["[object Uint16Array]"] = x["[object Uint32Array]"] = !0, x["[object Error]"] = x[y] = x["[object WeakMap]"] = !1;
e.exports = function e(t, r, O, k, P, j) {
  var S, T = 1 & r,
    R = 2 & r,
    N = 4 & r;
  if (O && (S = P ? O(t, k, P, j) : O(t)), void 0 !== S) return S;
  if (!m(t)) return t;
  var M = g(t);
  if (M) {
    if (S = v(t), !T) return l(t, S)
  } else {
    var z = h(t),
      W = z == y || "[object GeneratorFunction]" == z;
    if (B(t)) return s(t, T);
    if (z == w || z == b || W && !P) {
      if (S = R || W ? {} : C(t), !T) return R ? f(t, i(S, t)) : c(t, a(S, t))
    } else {
      if (!x[z]) return P ? t : {};
      S = p(t, z, T)
    }
  }
  j || (j = new n);
  var _ = j.get(t);
  if (_) return _;
  j.set(t, S), A(t) ? t.forEach(function(n) {
    S.add(e(n, r, O, n, t, j))
  }) : E(t) && t.forEach(function(n, u) {
    S.set(u, e(n, r, O, u, t, j))
  });
  var I = N ? R ? D : d : R ? keysIn : F,
    L = M ? void 0 : I(t);
  return u(L || t, function(n, u) {
    L && (n = t[u = n]), o(S, u, e(n, r, O, u, t, j))
  }), S
}