var e, o, i, u = n(212036),
  f = n(325008),
  a = n(161581),
  c = n(354848),
  s = n(622281),
  y = n(740362),
  p = n(974971),
  h = n(938507),
  v = n(251069),
  l = n(859209),
  g = n(4340),
  d = n(838957),
  A = n(144748),
  w = n(276321),
  x = n(641236),
  b = n(457507),
  T = n(644659),
  E = T.enforce,
  I = T.get,
  m = a.Int8Array,
  R = m && m.prototype,
  O = a.Uint8ClampedArray,
  M = O && O.prototype,
  F = m && A(m),
  U = R && A(R),
  _ = Object.prototype,
  L = a.TypeError,
  B = x("toStringTag"),
  C = b("TYPED_ARRAY_TAG"),
  S = "TypedArrayConstructor",
  P = u && !!w && "Opera" !== p(a.opera),
  V = !1,
  j = {
    Int8Array: 1,
    Uint8Array: 1,
    Uint8ClampedArray: 1,
    Int16Array: 2,
    Uint16Array: 2,
    Int32Array: 4,
    Uint32Array: 4,
    Float32Array: 4,
    Float64Array: 8
  },
  N = {
    BigInt64Array: 8,
    BigUint64Array: 8
  },
  W = function(t) {
    var r = A(t);
    if (s(r)) {
      var n = I(r);
      return n && y(n, S) ? n[S] : W(r)
    }
  },
  D = function(t) {
    if (!s(t)) return !1;
    var r = p(t);
    return y(j, r) || y(N, r)
  };
for (e in j)(i = (o = a[e]) && o.prototype) ? E(i)[S] = o : P = !1;
for (e in N)(i = (o = a[e]) && o.prototype) && (E(i)[S] = o);
if ((!P || !c(F) || F === Function.prototype) && (F = function() {
    throw L("Incorrect invocation")
  }, P))
  for (e in j) a[e] && w(a[e], F);
if ((!P || !U || U === _) && (U = F.prototype, P))
  for (e in j) a[e] && w(a[e].prototype, U);
if (P && A(M) !== U && w(M, U), f && !y(U, B))
  for (e in V = !0, g(U, B, {
      configurable: !0,
      get: function() {
        return s(this) ? this[C] : void 0
      }
    }), j) a[e] && v(a[e], C, e);
t.exports = {
  NATIVE_ARRAY_BUFFER_VIEWS: P,
  TYPED_ARRAY_TAG: V && C,
  aTypedArray: function(t) {
    if (D(t)) return t;
    throw L("Target is not a typed array")
  },
  aTypedArrayConstructor: function(t) {
    if (c(t) && (!w || d(F, t))) return t;
    throw L(h(t) + " is not a typed array constructor")
  },
  exportTypedArrayMethod: function(t, r, n, e) {
    if (f) {
      if (n)
        for (var o in j) {
          var i = a[o];
          if (i && y(i.prototype, t)) try {
            delete i.prototype[t]
          } catch (n) {
            try {
              i.prototype[t] = r
            } catch (t) {}
          }
        }(!U[t] || n) && l(U, t, n ? r : P && R[t] || r, e)
    }
  },
  exportTypedArrayStaticMethod: function(t, r, n) {
    var e, o;
    if (f) {
      if (w) {
        if (n) {
          for (e in j)
            if ((o = a[e]) && y(o, t)) try {
              delete o[t]
            } catch (t) {}
        }
        if (F[t] && !n) return;
        try {
          return l(F, t, n ? r : P && F[t] || r)
        } catch (t) {}
      }
      for (e in j)(o = a[e]) && (!o[t] || n) && l(o, t, r)
    }
  },
  getTypedArrayConstructor: W,
  isView: function(t) {
    if (!s(t)) return !1;
    var r = p(t);
    return "DataView" === r || y(j, r) || y(N, r)
  },
  isTypedArray: D,
  TypedArray: F,
  TypedArrayPrototype: U
}