var r = n(161581),
    i = n(581031),
    a = n(325008),
    s = n(212036),
    o = n(539459),
    l = n(251069),
    u = n(4340),
    c = n(90338),
    d = n(936940),
    _ = n(603528),
    E = n(959318),
    f = n(552028),
    h = n(646328),
    p = n(339399),
    I = n(144748),
    m = n(276321),
    T = n(537443).f,
    S = n(692994),
    g = n(175440),
    A = n(865312),
    N = n(644659),
    O = o.PROPER,
    R = o.CONFIGURABLE,
    v = 'ArrayBuffer',
    C = 'DataView',
    L = 'prototype',
    D = 'Wrong index',
    y = N.getterFor(v),
    b = N.getterFor(C),
    M = N.set,
    P = r[v],
    U = P,
    w = U && U[L],
    x = r[C],
    G = x && x[L],
    k = Object.prototype,
    B = r.Array,
    F = r.RangeError,
    V = i(S),
    H = i([].reverse),
    Z = p.pack,
    Y = p.unpack,
    j = function (e) {
        return [255 & e];
    },
    W = function (e) {
        return [255 & e, (e >> 8) & 255];
    },
    K = function (e) {
        return [255 & e, (e >> 8) & 255, (e >> 16) & 255, (e >> 24) & 255];
    },
    z = function (e) {
        return (e[3] << 24) | (e[2] << 16) | (e[1] << 8) | e[0];
    },
    q = function (e) {
        return Z(e, 23, 4);
    },
    Q = function (e) {
        return Z(e, 52, 8);
    },
    X = function (e, t, n) {
        u(e[L], t, {
            configurable: !0,
            get: function () {
                return n(this)[t];
            }
        });
    },
    $ = function (e, t, n, r) {
        var i = b(e),
            a = h(n);
        if (a + t > i.byteLength) throw F(D);
        var s = i.bytes,
            o = a + i.byteOffset,
            l = g(s, o, o + t);
        return r ? l : H(l);
    },
    J = function (e, t, n, r, i, a) {
        var s = b(e),
            o = h(n),
            l = r(+i),
            u = !!a;
        if (o + t > s.byteLength) throw F(D);
        for (var c = s.bytes, d = o + s.byteOffset, _ = 0; _ < t; _++) c[d + _] = l[u ? _ : t - _ - 1];
    };
if (s) {
    var ee = O && P.name !== v;
    if (
        !d(function () {
            P(1);
        }) ||
        !d(function () {
            new P(-1);
        }) ||
        d(function () {
            return new P(), new P(1.5), new P(NaN), 1 !== P.length || (ee && !R);
        })
    ) {
        (U = function (e) {
            return _(this, w), new P(h(e));
        })[L] = w;
        for (var et, en = T(P), er = 0; en.length > er; ) !((et = en[er++]) in U) && l(U, et, P[et]);
        w.constructor = U;
    } else ee && R && l(P, 'name', v);
    m && I(G) !== k && m(G, k);
    var ei = new x(new U(2)),
        ea = i(G.setInt8);
    ei.setInt8(0, 2147483648),
        ei.setInt8(1, 2147483649),
        (ei.getInt8(0) || !ei.getInt8(1)) &&
            c(
                G,
                {
                    setInt8: function (e, t) {
                        ea(this, e, (t << 24) >> 24);
                    },
                    setUint8: function (e, t) {
                        ea(this, e, (t << 24) >> 24);
                    }
                },
                { unsafe: !0 }
            );
} else
    (w = (U = function (e) {
        _(this, w);
        var t = h(e);
        M(this, {
            type: v,
            bytes: V(B(t), 0),
            byteLength: t
        }),
            !a && ((this.byteLength = t), (this.detached = !1));
    })[L]),
        (G = (x = function (e, t, n) {
            _(this, G), _(e, w);
            var r = y(e),
                i = r.byteLength,
                s = E(t);
            if (s < 0 || s > i) throw F('Wrong offset');
            if (((n = void 0 === n ? i - s : f(n)), s + n > i)) throw F('Wrong length');
            M(this, {
                type: C,
                buffer: e,
                byteLength: n,
                byteOffset: s,
                bytes: r.bytes
            }),
                !a && ((this.buffer = e), (this.byteLength = n), (this.byteOffset = s));
        })[L]),
        a && (X(U, 'byteLength', y), X(x, 'buffer', b), X(x, 'byteLength', b), X(x, 'byteOffset', b)),
        c(G, {
            getInt8: function (e) {
                return ($(this, 1, e)[0] << 24) >> 24;
            },
            getUint8: function (e) {
                return $(this, 1, e)[0];
            },
            getInt16: function (e) {
                var t = $(this, 2, e, arguments.length > 1 && arguments[1]);
                return (((t[1] << 8) | t[0]) << 16) >> 16;
            },
            getUint16: function (e) {
                var t = $(this, 2, e, arguments.length > 1 && arguments[1]);
                return (t[1] << 8) | t[0];
            },
            getInt32: function (e) {
                return z($(this, 4, e, arguments.length > 1 && arguments[1]));
            },
            getUint32: function (e) {
                return z($(this, 4, e, arguments.length > 1 && arguments[1])) >>> 0;
            },
            getFloat32: function (e) {
                return Y($(this, 4, e, arguments.length > 1 && arguments[1]), 23);
            },
            getFloat64: function (e) {
                return Y($(this, 8, e, arguments.length > 1 && arguments[1]), 52);
            },
            setInt8: function (e, t) {
                J(this, 1, e, j, t);
            },
            setUint8: function (e, t) {
                J(this, 1, e, j, t);
            },
            setInt16: function (e, t) {
                J(this, 2, e, W, t, arguments.length > 2 && arguments[2]);
            },
            setUint16: function (e, t) {
                J(this, 2, e, W, t, arguments.length > 2 && arguments[2]);
            },
            setInt32: function (e, t) {
                J(this, 4, e, K, t, arguments.length > 2 && arguments[2]);
            },
            setUint32: function (e, t) {
                J(this, 4, e, K, t, arguments.length > 2 && arguments[2]);
            },
            setFloat32: function (e, t) {
                J(this, 4, e, q, t, arguments.length > 2 && arguments[2]);
            },
            setFloat64: function (e, t) {
                J(this, 8, e, Q, t, arguments.length > 2 && arguments[2]);
            }
        });
A(U, v),
    A(x, C),
    (e.exports = {
        ArrayBuffer: U,
        DataView: x
    });
