var r = n(620014),
    i = n(580755),
    a = n(805100),
    o = n(224760),
    s = n(915212),
    l = n(228057),
    u = n(161984),
    c = n(388456),
    d = n(325512),
    _ = n(990393),
    E = n(890179),
    f = n(65064),
    h = n(207635),
    p = n(354199),
    m = n(671660),
    I = n(402428),
    T = n(207757),
    g = n(397985),
    S = n(706627),
    A = n(822480),
    v = n(58834),
    N = n(453342),
    O = 1,
    R = 2,
    C = 4,
    y = '[object Arguments]',
    b = '[object Array]',
    L = '[object Boolean]',
    D = '[object Date]',
    M = '[object Error]',
    P = '[object Function]',
    U = '[object GeneratorFunction]',
    w = '[object Map]',
    x = '[object Number]',
    G = '[object Object]',
    k = '[object RegExp]',
    B = '[object Set]',
    F = '[object String]',
    Z = '[object Symbol]',
    V = '[object WeakMap]',
    H = '[object ArrayBuffer]',
    Y = '[object DataView]',
    j = '[object Float32Array]',
    W = '[object Float64Array]',
    K = '[object Int8Array]',
    z = '[object Int16Array]',
    q = '[object Int32Array]',
    Q = '[object Uint8Array]',
    X = '[object Uint8ClampedArray]',
    $ = '[object Uint16Array]',
    J = '[object Uint32Array]',
    ee = {};
function et(e, t, n, b, L, D) {
    var M,
        w = t & O,
        x = t & R,
        k = t & C;
    if ((n && (M = L ? n(e, b, L, D) : n(e)), void 0 !== M)) return M;
    if (!S(e)) return e;
    var B = I(e);
    if (B) {
        if (((M = h(e)), !w)) return u(e, M);
    } else {
        var F = f(e),
            Z = F == P || F == U;
        if (T(e)) return l(e, w);
        if (F == G || F == y || (Z && !L)) {
            if (((M = x || Z ? {} : m(e)), !w)) return x ? d(e, s(M, e)) : c(e, o(M, e));
        } else {
            if (!ee[F]) return L ? e : {};
            M = p(e, F, w);
        }
    }
    D || (D = new r());
    var V = D.get(e);
    if (V) return V;
    D.set(e, M),
        A(e)
            ? e.forEach(function (r) {
                  M.add(et(r, t, n, r, e, D));
              })
            : g(e) &&
              e.forEach(function (r, i) {
                  M.set(i, et(r, t, n, i, e, D));
              });
    var H = k ? (x ? E : _) : x ? N : v,
        Y = B ? void 0 : H(e);
    return (
        i(Y || e, function (r, i) {
            Y && (r = e[(i = r)]), a(M, i, et(r, t, n, i, e, D));
        }),
        M
    );
}
(ee[y] = ee[b] = ee[H] = ee[Y] = ee[L] = ee[D] = ee[j] = ee[W] = ee[K] = ee[z] = ee[q] = ee[w] = ee[x] = ee[G] = ee[k] = ee[B] = ee[F] = ee[Z] = ee[Q] = ee[X] = ee[$] = ee[J] = !0), (ee[M] = ee[P] = ee[V] = !1), (e.exports = et);
