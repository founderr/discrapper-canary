var r = n(620014),
    i = n(580755),
    a = n(805100),
    s = n(224760),
    o = n(915212),
    l = n(228057),
    u = n(161984),
    c = n(388456),
    d = n(325512),
    f = n(990393),
    _ = n(890179),
    p = n(65064),
    h = n(207635),
    m = n(354199),
    g = n(671660),
    E = n(402428),
    v = n(207757),
    I = n(397985),
    T = n(706627),
    b = n(822480),
    S = n(58834),
    y = n(453342),
    A = '[object Arguments]',
    N = '[object Function]',
    C = '[object Object]',
    R = {};
(R[A] = R['[object Array]'] = R['[object ArrayBuffer]'] = R['[object DataView]'] = R['[object Boolean]'] = R['[object Date]'] = R['[object Float32Array]'] = R['[object Float64Array]'] = R['[object Int8Array]'] = R['[object Int16Array]'] = R['[object Int32Array]'] = R['[object Map]'] = R['[object Number]'] = R[C] = R['[object RegExp]'] = R['[object Set]'] = R['[object String]'] = R['[object Symbol]'] = R['[object Uint8Array]'] = R['[object Uint8ClampedArray]'] = R['[object Uint16Array]'] = R['[object Uint32Array]'] = !0), (R['[object Error]'] = R[N] = R['[object WeakMap]'] = !1);
e.exports = function e(t, n, O, D, L, x) {
    var w,
        P = 1 & n,
        M = 2 & n,
        k = 4 & n;
    if ((O && (w = L ? O(t, D, L, x) : O(t)), void 0 !== w)) return w;
    if (!T(t)) return t;
    var U = E(t);
    if (U) {
        if (((w = h(t)), !P)) return u(t, w);
    } else {
        var B = p(t),
            G = B == N || '[object GeneratorFunction]' == B;
        if (v(t)) return l(t, P);
        if (B == C || B == A || (G && !L)) {
            if (((w = M || G ? {} : g(t)), !P)) return M ? d(t, o(w, t)) : c(t, s(w, t));
        } else {
            if (!R[B]) return L ? t : {};
            w = m(t, B, P);
        }
    }
    x || (x = new r());
    var Z = x.get(t);
    if (Z) return Z;
    x.set(t, w),
        b(t)
            ? t.forEach(function (r) {
                  w.add(e(r, n, O, r, t, x));
              })
            : I(t) &&
              t.forEach(function (r, i) {
                  w.set(i, e(r, n, O, i, t, x));
              });
    var F = k ? (M ? _ : f) : M ? y : S,
        V = U ? void 0 : F(t);
    return (
        i(V || t, function (r, i) {
            V && (r = t[(i = r)]), a(w, i, e(r, n, O, i, t, x));
        }),
        w
    );
};
