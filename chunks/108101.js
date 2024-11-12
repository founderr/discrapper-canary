var r = n(687249),
    i = n(48889),
    a = n(11537),
    s = n(806867),
    o = n(542334),
    l = n(829815),
    u = n(566131),
    c = n(773151),
    d = n(893741),
    f = n(821164),
    _ = n(993106),
    p = n(53919),
    h = n(247323),
    m = n(609511),
    g = n(292548),
    E = n(290677),
    v = n(551023),
    I = n(118788),
    b = n(661233),
    S = n(357361),
    T = n(438330),
    y = '[object Arguments]',
    A = '[object Function]',
    N = '[object Object]',
    C = {};
(C[y] = C['[object Array]'] = C['[object ArrayBuffer]'] = C['[object DataView]'] = C['[object Boolean]'] = C['[object Date]'] = C['[object Float32Array]'] = C['[object Float64Array]'] = C['[object Int8Array]'] = C['[object Int16Array]'] = C['[object Int32Array]'] = C['[object Map]'] = C['[object Number]'] = C[N] = C['[object RegExp]'] = C['[object Set]'] = C['[object String]'] = C['[object Symbol]'] = C['[object Uint8Array]'] = C['[object Uint8ClampedArray]'] = C['[object Uint16Array]'] = C['[object Uint32Array]'] = !0), (C['[object Error]'] = C[A] = C['[object WeakMap]'] = !1);
e.exports = function e(t, n, R, O, D, L) {
    var x,
        w = 1 & n,
        M = 2 & n,
        P = 4 & n;
    if ((R && (x = D ? R(t, O, D, L) : R(t)), void 0 !== x)) return x;
    if (!b(t)) return t;
    var k = E(t);
    if (k) {
        if (((x = h(t)), !w)) return u(t, x);
    } else {
        var U = p(t),
            B = U == A || '[object GeneratorFunction]' == U;
        if (v(t)) return l(t, w);
        if (U == N || U == y || (B && !D)) {
            if (((x = M || B ? {} : g(t)), !w)) return M ? d(t, o(x, t)) : c(t, s(x, t));
        } else {
            if (!C[U]) return D ? t : {};
            x = m(t, U, w);
        }
    }
    L || (L = new r());
    var G = L.get(t);
    if (G) return G;
    L.set(t, x),
        S(t)
            ? t.forEach(function (r) {
                  x.add(e(r, n, R, r, t, L));
              })
            : I(t) &&
              t.forEach(function (r, i) {
                  x.set(i, e(r, n, R, i, t, L));
              });
    var Z = P ? (M ? _ : f) : M ? keysIn : T,
        F = k ? void 0 : Z(t);
    return (
        i(F || t, function (r, i) {
            F && (r = t[(i = r)]), a(x, i, e(r, n, R, i, t, L));
        }),
        x
    );
};
