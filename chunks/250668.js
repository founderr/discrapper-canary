var r = n(147018),
    i = n(161581),
    a = n(926515),
    s = n(325008),
    o = n(22092),
    l = n(192291),
    u = n(476579),
    c = n(603528),
    d = n(879),
    _ = n(251069),
    E = n(907533),
    f = n(552028),
    h = n(646328),
    p = n(18316),
    I = n(712560),
    m = n(966606),
    T = n(740362),
    g = n(974971),
    S = n(622281),
    A = n(323979),
    N = n(803938),
    O = n(838957),
    R = n(276321),
    v = n(537443).f,
    C = n(12367),
    y = n(335225).forEach,
    L = n(930990),
    D = n(4340),
    b = n(97131),
    M = n(347722),
    P = n(644659),
    U = n(95948),
    w = P.get,
    x = P.set,
    G = P.enforce,
    k = b.f,
    B = M.f,
    F = i.RangeError,
    V = u.ArrayBuffer,
    H = V.prototype,
    Z = u.DataView,
    Y = l.NATIVE_ARRAY_BUFFER_VIEWS,
    j = l.TYPED_ARRAY_TAG,
    W = l.TypedArray,
    K = l.TypedArrayPrototype,
    z = l.aTypedArrayConstructor,
    q = l.isTypedArray,
    Q = 'BYTES_PER_ELEMENT',
    X = 'Wrong length',
    $ = function (e, t) {
        z(e);
        for (var n = 0, r = t.length, i = new e(r); r > n; ) i[n] = t[n++];
        return i;
    },
    J = function (e, t) {
        D(e, t, {
            configurable: !0,
            get: function () {
                return w(this)[t];
            }
        });
    },
    ee = function (e) {
        var t;
        return O(H, e) || 'ArrayBuffer' === (t = g(e)) || 'SharedArrayBuffer' === t;
    },
    et = function (e, t) {
        return q(e) && !A(t) && t in e && E(+t) && t >= 0;
    },
    en = function (e, t) {
        return et(e, (t = m(t))) ? d(2, e[t]) : B(e, t);
    },
    er = function (e, t, n) {
        return et(e, (t = m(t))) && S(n) && T(n, 'value') && !T(n, 'get') && !T(n, 'set') && !n.configurable && (!T(n, 'writable') || n.writable) && (!T(n, 'enumerable') || n.enumerable) ? ((e[t] = n.value), e) : k(e, t, n);
    };
s
    ? (!Y && ((M.f = en), (b.f = er), J(K, 'buffer'), J(K, 'byteOffset'), J(K, 'byteLength'), J(K, 'length')),
      r(
          {
              target: 'Object',
              stat: !0,
              forced: !Y
          },
          {
              getOwnPropertyDescriptor: en,
              defineProperty: er
          }
      ),
      (e.exports = function (e, t, n) {
          var s = e.match(/\d+/)[0] / 8,
              l = e + (n ? 'Clamped' : '') + 'Array',
              u = 'get' + e,
              d = 'set' + e,
              E = i[l],
              m = E,
              T = m && m.prototype,
              g = {},
              A = function (e, t) {
                  var n = w(e);
                  return n.view[u](t * s + n.byteOffset, !0);
              },
              O = function (e, t, r) {
                  var i = w(e);
                  i.view[d](t * s + i.byteOffset, n ? I(r) : r, !0);
              },
              D = function (e, t) {
                  k(e, t, {
                      get: function () {
                          return A(this, t);
                      },
                      set: function (e) {
                          return O(this, t, e);
                      },
                      enumerable: !0
                  });
              };
          Y
              ? o &&
                ((m = t(function (e, t, n, r) {
                    return c(e, T), U(S(t) ? (ee(t) ? (void 0 !== r ? new E(t, p(n, s), r) : void 0 !== n ? new E(t, p(n, s)) : new E(t)) : q(t) ? $(m, t) : a(C, m, t)) : new E(h(t)), e, m);
                })),
                R && R(m, W),
                y(v(E), function (e) {
                    !(e in m) && _(m, e, E[e]);
                }),
                (m.prototype = T))
              : ((m = t(function (e, t, n, r) {
                    c(e, T);
                    var i,
                        o,
                        l,
                        u = 0,
                        d = 0;
                    if (S(t)) {
                        if (ee(t)) {
                            (i = t), (d = p(n, s));
                            var _ = t.byteLength;
                            if (void 0 === r) {
                                if (_ % s || (o = _ - d) < 0) throw F(X);
                            } else if ((o = f(r) * s) + d > _) throw F(X);
                            l = o / s;
                        } else if (q(t)) return $(m, t);
                        else return a(C, m, t);
                    } else i = new V((o = (l = h(t)) * s));
                    for (
                        x(e, {
                            buffer: i,
                            byteOffset: d,
                            byteLength: o,
                            length: l,
                            view: new Z(i)
                        });
                        u < l;

                    )
                        D(e, u++);
                })),
                R && R(m, W),
                (T = m.prototype = N(K))),
              T.constructor !== m && _(T, 'constructor', m),
              (G(T).TypedArrayConstructor = m),
              j && _(T, j, l);
          var b = m !== E;
          (g[l] = m),
              r(
                  {
                      global: !0,
                      constructor: !0,
                      forced: b,
                      sham: !Y
                  },
                  g
              ),
              !(Q in m) && _(m, Q, s),
              !(Q in T) && _(T, Q, s),
              L(l);
      }))
    : (e.exports = function () {});
