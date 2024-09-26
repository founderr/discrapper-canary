var r = n(161581),
    i = n(581031),
    a = n(325008),
    o = n(212036),
    s = n(539459),
    l = n(251069),
    u = n(4340),
    c = n(90338),
    d = n(936940),
    _ = n(603528),
    E = n(959318),
    f = n(552028),
    h = n(646328),
    p = n(339399),
    m = n(144748),
    I = n(276321),
    T = n(537443).f,
    g = n(692994),
    S = n(175440),
    A = n(865312),
    v = n(644659),
    N = s.PROPER,
    O = s.CONFIGURABLE,
    R = 'ArrayBuffer',
    C = 'DataView',
    y = 'prototype',
    L = 'Wrong length',
    b = 'Wrong index',
    D = v.getterFor(R),
    M = v.getterFor(C),
    P = v.set,
    U = r[R],
    w = U,
    x = w && w[y],
    G = r[C],
    k = G && G[y],
    B = Object.prototype,
    F = r.Array,
    Z = r.RangeError,
    V = i(g),
    H = i([].reverse),
    Y = p.pack,
    j = p.unpack,
    W = function (e) {
        return [255 & e];
    },
    K = function (e) {
        return [255 & e, (e >> 8) & 255];
    },
    z = function (e) {
        return [255 & e, (e >> 8) & 255, (e >> 16) & 255, (e >> 24) & 255];
    },
    q = function (e) {
        return (e[3] << 24) | (e[2] << 16) | (e[1] << 8) | e[0];
    },
    Q = function (e) {
        return Y(e, 23, 4);
    },
    X = function (e) {
        return Y(e, 52, 8);
    },
    $ = function (e, t, n) {
        u(e[y], t, {
            configurable: !0,
            get: function () {
                return n(this)[t];
            }
        });
    },
    J = function (e, t, n, r) {
        var i = M(e),
            a = h(n),
            o = !!r;
        if (a + t > i.byteLength) throw Z(b);
        var s = i.bytes,
            l = a + i.byteOffset,
            u = S(s, l, l + t);
        return o ? u : H(u);
    },
    ee = function (e, t, n, r, i, a) {
        var o = M(e),
            s = h(n),
            l = r(+i),
            u = !!a;
        if (s + t > o.byteLength) throw Z(b);
        for (var c = o.bytes, d = s + o.byteOffset, _ = 0; _ < t; _++) c[d + _] = l[u ? _ : t - _ - 1];
    };
if (o) {
    var et = N && U.name !== R;
    if (
        !d(function () {
            U(1);
        }) ||
        !d(function () {
            new U(-1);
        }) ||
        d(function () {
            return new U(), new U(1.5), new U(NaN), 1 !== U.length || (et && !O);
        })
    ) {
        (w = function (e) {
            return _(this, x), new U(h(e));
        })[y] = x;
        for (var en, er = T(U), ei = 0; er.length > ei; ) !((en = er[ei++]) in w) && l(w, en, U[en]);
        x.constructor = w;
    } else et && O && l(U, 'name', R);
    I && m(k) !== B && I(k, B);
    var ea = new G(new w(2)),
        eo = i(k.setInt8);
    ea.setInt8(0, 2147483648),
        ea.setInt8(1, 2147483649),
        (ea.getInt8(0) || !ea.getInt8(1)) &&
            c(
                k,
                {
                    setInt8: function (e, t) {
                        eo(this, e, (t << 24) >> 24);
                    },
                    setUint8: function (e, t) {
                        eo(this, e, (t << 24) >> 24);
                    }
                },
                { unsafe: !0 }
            );
} else
    (x = (w = function (e) {
        _(this, x);
        var t = h(e);
        P(this, {
            type: R,
            bytes: V(F(t), 0),
            byteLength: t
        }),
            !a && ((this.byteLength = t), (this.detached = !1));
    })[y]),
        (k = (G = function (e, t, n) {
            _(this, k), _(e, x);
            var r = D(e),
                i = r.byteLength,
                o = E(t);
            if (o < 0 || o > i) throw Z('Wrong offset');
            if (((n = void 0 === n ? i - o : f(n)), o + n > i)) throw Z(L);
            P(this, {
                type: C,
                buffer: e,
                byteLength: n,
                byteOffset: o,
                bytes: r.bytes
            }),
                !a && ((this.buffer = e), (this.byteLength = n), (this.byteOffset = o));
        })[y]),
        a && ($(w, 'byteLength', D), $(G, 'buffer', M), $(G, 'byteLength', M), $(G, 'byteOffset', M)),
        c(k, {
            getInt8: function (e) {
                return (J(this, 1, e)[0] << 24) >> 24;
            },
            getUint8: function (e) {
                return J(this, 1, e)[0];
            },
            getInt16: function (e) {
                var t = J(this, 2, e, arguments.length > 1 && arguments[1]);
                return (((t[1] << 8) | t[0]) << 16) >> 16;
            },
            getUint16: function (e) {
                var t = J(this, 2, e, arguments.length > 1 && arguments[1]);
                return (t[1] << 8) | t[0];
            },
            getInt32: function (e) {
                return q(J(this, 4, e, arguments.length > 1 && arguments[1]));
            },
            getUint32: function (e) {
                return q(J(this, 4, e, arguments.length > 1 && arguments[1])) >>> 0;
            },
            getFloat32: function (e) {
                return j(J(this, 4, e, arguments.length > 1 && arguments[1]), 23);
            },
            getFloat64: function (e) {
                return j(J(this, 8, e, arguments.length > 1 && arguments[1]), 52);
            },
            setInt8: function (e, t) {
                ee(this, 1, e, W, t);
            },
            setUint8: function (e, t) {
                ee(this, 1, e, W, t);
            },
            setInt16: function (e, t) {
                ee(this, 2, e, K, t, arguments.length > 2 && arguments[2]);
            },
            setUint16: function (e, t) {
                ee(this, 2, e, K, t, arguments.length > 2 && arguments[2]);
            },
            setInt32: function (e, t) {
                ee(this, 4, e, z, t, arguments.length > 2 && arguments[2]);
            },
            setUint32: function (e, t) {
                ee(this, 4, e, z, t, arguments.length > 2 && arguments[2]);
            },
            setFloat32: function (e, t) {
                ee(this, 4, e, Q, t, arguments.length > 2 && arguments[2]);
            },
            setFloat64: function (e, t) {
                ee(this, 8, e, X, t, arguments.length > 2 && arguments[2]);
            }
        });
A(w, R),
    A(G, C),
    (e.exports = {
        ArrayBuffer: w,
        DataView: G
    });
