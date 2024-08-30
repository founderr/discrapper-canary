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
    g = n(641236),
    S = n(457507),
    A = n(644659),
    N = A.enforce,
    O = A.get,
    R = l.Int8Array,
    v = R && R.prototype,
    C = l.Uint8ClampedArray,
    y = C && C.prototype,
    L = R && m(R),
    D = v && m(v),
    b = Object.prototype,
    M = l.TypeError,
    P = g('toStringTag'),
    U = S('TYPED_ARRAY_TAG'),
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
    (!x || !u(L) || L === Function.prototype) &&
    ((L = function () {
        throw M('Incorrect invocation');
    }),
    x)
)
    for (r in k) l[r] && T(l[r], L);
if ((!x || !D || D === b) && ((D = L.prototype), x)) for (r in k) l[r] && T(l[r].prototype, D);
if ((x && m(y) !== D && T(y, D), o && !d(D, P)))
    for (r in ((G = !0),
    p(D, P, {
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
        if (u(e) && (!T || I(L, e))) return e;
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
            (!D[e] || n) && h(D, e, n ? t : (x && v[e]) || t, r);
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
                if (L[e] && !n) return;
                try {
                    return h(L, e, n ? t : (x && L[e]) || t);
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
    TypedArray: L,
    TypedArrayPrototype: D
};
