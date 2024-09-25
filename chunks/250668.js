var r = n(147018),
    i = n(161581),
    a = n(926515),
    o = n(325008),
    s = n(22092),
    l = n(192291),
    u = n(476579),
    c = n(603528),
    d = n(879),
    _ = n(251069),
    E = n(907533),
    f = n(552028),
    h = n(646328),
    p = n(18316),
    m = n(712560),
    I = n(966606),
    T = n(740362),
    g = n(974971),
    S = n(622281),
    A = n(323979),
    v = n(803938),
    N = n(838957),
    O = n(276321),
    R = n(537443).f,
    C = n(12367),
    y = n(335225).forEach,
    b = n(930990),
    L = n(4340),
    D = n(97131),
    M = n(347722),
    P = n(644659),
    U = n(95948),
    w = P.get,
    x = P.set,
    G = P.enforce,
    k = D.f,
    B = M.f,
    F = i.RangeError,
    Z = u.ArrayBuffer,
    V = Z.prototype,
    H = u.DataView,
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
        L(e, t, {
            configurable: !0,
            get: function () {
                return w(this)[t];
            }
        });
    },
    ee = function (e) {
        var t;
        return N(V, e) || 'ArrayBuffer' === (t = g(e)) || 'SharedArrayBuffer' === t;
    },
    et = function (e, t) {
        return q(e) && !A(t) && t in e && E(+t) && t >= 0;
    },
    en = function (e, t) {
        return et(e, (t = I(t))) ? d(2, e[t]) : B(e, t);
    },
    er = function (e, t, n) {
        return et(e, (t = I(t))) && S(n) && T(n, 'value') && !T(n, 'get') && !T(n, 'set') && !n.configurable && (!T(n, 'writable') || n.writable) && (!T(n, 'enumerable') || n.enumerable) ? ((e[t] = n.value), e) : k(e, t, n);
    };
o
    ? (!Y && ((M.f = en), (D.f = er), J(K, 'buffer'), J(K, 'byteOffset'), J(K, 'byteLength'), J(K, 'length')),
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
          var o = e.match(/\d+/)[0] / 8,
              l = e + (n ? 'Clamped' : '') + 'Array',
              u = 'get' + e,
              d = 'set' + e,
              E = i[l],
              I = E,
              T = I && I.prototype,
              g = {},
              A = function (e, t) {
                  var n = w(e);
                  return n.view[u](t * o + n.byteOffset, !0);
              },
              N = function (e, t, r) {
                  var i = w(e);
                  i.view[d](t * o + i.byteOffset, n ? m(r) : r, !0);
              },
              L = function (e, t) {
                  k(e, t, {
                      get: function () {
                          return A(this, t);
                      },
                      set: function (e) {
                          return N(this, t, e);
                      },
                      enumerable: !0
                  });
              };
          Y
              ? s &&
                ((I = t(function (e, t, n, r) {
                    return (
                        c(e, T),
                        U(
                            (function () {
                                return S(t) ? (ee(t) ? (void 0 !== r ? new E(t, p(n, o), r) : void 0 !== n ? new E(t, p(n, o)) : new E(t)) : q(t) ? $(I, t) : a(C, I, t)) : new E(h(t));
                            })(),
                            e,
                            I
                        )
                    );
                })),
                O && O(I, W),
                y(R(E), function (e) {
                    !(e in I) && _(I, e, E[e]);
                }),
                (I.prototype = T))
              : ((I = t(function (e, t, n, r) {
                    c(e, T);
                    var i,
                        s,
                        l,
                        u = 0,
                        d = 0;
                    if (S(t)) {
                        if (ee(t)) {
                            (i = t), (d = p(n, o));
                            var _ = t.byteLength;
                            if (void 0 === r) {
                                if (_ % o || (s = _ - d) < 0) throw F(X);
                            } else if ((s = f(r) * o) + d > _) throw F(X);
                            l = s / o;
                        } else if (q(t)) return $(I, t);
                        else return a(C, I, t);
                    } else i = new Z((s = (l = h(t)) * o));
                    for (
                        x(e, {
                            buffer: i,
                            byteOffset: d,
                            byteLength: s,
                            length: l,
                            view: new H(i)
                        });
                        u < l;

                    )
                        L(e, u++);
                })),
                O && O(I, W),
                (T = I.prototype = v(K))),
              T.constructor !== I && _(T, 'constructor', I),
              (G(T).TypedArrayConstructor = I),
              j && _(T, j, l);
          var D = I !== E;
          (g[l] = I),
              r(
                  {
                      global: !0,
                      constructor: !0,
                      forced: D,
                      sham: !Y
                  },
                  g
              ),
              !(Q in I) && _(I, Q, o),
              !(Q in T) && _(T, Q, o),
              b(l);
      }))
    : (e.exports = function () {});
