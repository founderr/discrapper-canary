var r,
    i,
    a,
    s = n(212036),
    o = n(325008),
    l = n(161581),
    u = n(354848),
    c = n(622281),
    d = n(740362),
    _ = n(974971),
    E = n(938507),
    f = n(251069),
    h = n(859209),
    p = n(4340),
    I = n(838957),
    m = n(144748),
    T = n(276321),
    S = n(641236),
    g = n(457507),
    A = n(644659),
    N = A.enforce,
    O = A.get,
    R = l.Int8Array,
    v = R && R.prototype,
    C = l.Uint8ClampedArray,
    L = C && C.prototype,
    D = R && m(R),
    y = v && m(v),
    b = Object.prototype,
    M = l.TypeError,
    P = S('toStringTag'),
    U = g('TYPED_ARRAY_TAG'),
    w = 'TypedArrayConstructor',
    x = s && !!T && 'Opera' !== _(l.opera),
    G = !1,
    k = {
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
    B = {
        BigInt64Array: 8,
        BigUint64Array: 8
    },
    F = function (e) {
        var t = m(e);
        if (c(t)) {
            var n = O(t);
            return n && d(n, w) ? n[w] : F(t);
        }
    },
    V = function (e) {
        if (!c(e)) return !1;
        var t = _(e);
        return d(k, t) || d(B, t);
    };
for (r in k) (a = (i = l[r]) && i.prototype) ? (N(a)[w] = i) : (x = !1);
for (r in B) (a = (i = l[r]) && i.prototype) && (N(a)[w] = i);
if (
    (!x || !u(D) || D === Function.prototype) &&
    ((D = function () {
        throw M('Incorrect invocation');
    }),
    x)
)
    for (r in k) l[r] && T(l[r], D);
if ((!x || !y || y === b) && ((y = D.prototype), x)) for (r in k) l[r] && T(l[r].prototype, y);
if ((x && m(L) !== y && T(L, y), o && !d(y, P)))
    for (r in ((G = !0),
    p(y, P, {
        configurable: !0,
        get: function () {
            return c(this) ? this[U] : void 0;
        }
    }),
    k))
        l[r] && f(l[r], U, r);
e.exports = {
    NATIVE_ARRAY_BUFFER_VIEWS: x,
    TYPED_ARRAY_TAG: G && U,
    aTypedArray: function (e) {
        if (V(e)) return e;
        throw M('Target is not a typed array');
    },
    aTypedArrayConstructor: function (e) {
        if (u(e) && (!T || I(D, e))) return e;
        throw M(E(e) + ' is not a typed array constructor');
    },
    exportTypedArrayMethod: function (e, t, n, r) {
        if (o) {
            if (n)
                for (var i in k) {
                    var a = l[i];
                    if (a && d(a.prototype, e))
                        try {
                            delete a.prototype[e];
                        } catch (n) {
                            try {
                                a.prototype[e] = t;
                            } catch (e) {}
                        }
                }
            (!y[e] || n) && h(y, e, n ? t : (x && v[e]) || t, r);
        }
    },
    exportTypedArrayStaticMethod: function (e, t, n) {
        var r, i;
        if (o) {
            if (T) {
                if (n) {
                    for (r in k)
                        if ((i = l[r]) && d(i, e))
                            try {
                                delete i[e];
                            } catch (e) {}
                }
                if (D[e] && !n) return;
                try {
                    return h(D, e, n ? t : (x && D[e]) || t);
                } catch (e) {}
            }
            for (r in k) (i = l[r]) && (!i[e] || n) && h(i, e, t);
        }
    },
    getTypedArrayConstructor: F,
    isView: function (e) {
        if (!c(e)) return !1;
        var t = _(e);
        return 'DataView' === t || d(k, t) || d(B, t);
    },
    isTypedArray: V,
    TypedArray: D,
    TypedArrayPrototype: y
};
