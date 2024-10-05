var r = n(620014),
    i = n(580755),
    a = n(805100),
    s = n(224760),
    o = n(915212),
    l = n(228057),
    u = n(161984),
    c = n(388456),
    d = n(325512),
    _ = n(990393),
    E = n(890179),
    f = n(65064),
    h = n(207635),
    p = n(354199),
    I = n(671660),
    m = n(402428),
    T = n(207757),
    S = n(397985),
    g = n(706627),
    A = n(822480),
    N = n(58834),
    O = n(453342),
    R = '[object Arguments]',
    v = '[object Function]',
    C = '[object Object]',
    L = {};
(L[R] = L['[object Array]'] = L['[object ArrayBuffer]'] = L['[object DataView]'] = L['[object Boolean]'] = L['[object Date]'] = L['[object Float32Array]'] = L['[object Float64Array]'] = L['[object Int8Array]'] = L['[object Int16Array]'] = L['[object Int32Array]'] = L['[object Map]'] = L['[object Number]'] = L[C] = L['[object RegExp]'] = L['[object Set]'] = L['[object String]'] = L['[object Symbol]'] = L['[object Uint8Array]'] = L['[object Uint8ClampedArray]'] = L['[object Uint16Array]'] = L['[object Uint32Array]'] = !0), (L['[object Error]'] = L[v] = L['[object WeakMap]'] = !1);
e.exports = function e(t, n, D, y, b, M) {
    var P,
        U = 1 & n,
        w = 2 & n,
        x = 4 & n;
    if ((D && (P = b ? D(t, y, b, M) : D(t)), void 0 !== P)) return P;
    if (!g(t)) return t;
    var G = m(t);
    if (G) {
        if (((P = h(t)), !U)) return u(t, P);
    } else {
        var k = f(t),
            B = k == v || '[object GeneratorFunction]' == k;
        if (T(t)) return l(t, U);
        if (k == C || k == R || (B && !b)) {
            if (((P = w || B ? {} : I(t)), !U)) return w ? d(t, o(P, t)) : c(t, s(P, t));
        } else {
            if (!L[k]) return b ? t : {};
            P = p(t, k, U);
        }
    }
    M || (M = new r());
    var F = M.get(t);
    if (F) return F;
    M.set(t, P),
        A(t)
            ? t.forEach(function (r) {
                  P.add(e(r, n, D, r, t, M));
              })
            : S(t) &&
              t.forEach(function (r, i) {
                  P.set(i, e(r, n, D, i, t, M));
              });
    var V = x ? (w ? E : _) : w ? O : N,
        H = G ? void 0 : V(t);
    return (
        i(H || t, function (r, i) {
            H && (r = t[(i = r)]), a(P, i, e(r, n, D, i, t, M));
        }),
        P
    );
};
