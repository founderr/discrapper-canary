var r = n(687249),
    i = n(48889),
    a = n(11537),
    o = n(806867),
    s = n(542334),
    l = n(829815),
    u = n(566131),
    c = n(773151),
    d = n(893741),
    _ = n(821164),
    E = n(993106),
    f = n(53919),
    h = n(247323),
    p = n(609511),
    m = n(292548),
    I = n(290677),
    T = n(551023),
    g = n(118788),
    S = n(661233),
    A = n(357361),
    v = n(438330),
    N = 1,
    O = 2,
    R = 4,
    C = '[object Arguments]',
    y = '[object Array]',
    b = '[object Boolean]',
    L = '[object Date]',
    D = '[object Error]',
    M = '[object Function]',
    P = '[object GeneratorFunction]',
    U = '[object Map]',
    w = '[object Number]',
    x = '[object Object]',
    G = '[object RegExp]',
    k = '[object Set]',
    B = '[object String]',
    F = '[object Symbol]',
    Z = '[object WeakMap]',
    V = '[object ArrayBuffer]',
    H = '[object DataView]',
    Y = '[object Float32Array]',
    j = '[object Float64Array]',
    W = '[object Int8Array]',
    K = '[object Int16Array]',
    z = '[object Int32Array]',
    q = '[object Uint8Array]',
    Q = '[object Uint8ClampedArray]',
    X = '[object Uint16Array]',
    $ = '[object Uint32Array]',
    J = {};
function ee(e, t, n, y, b, L) {
    var D,
        U = t & N,
        w = t & O,
        G = t & R;
    if ((n && (D = b ? n(e, y, b, L) : n(e)), void 0 !== D)) return D;
    if (!S(e)) return e;
    var k = I(e);
    if (k) {
        if (((D = h(e)), !U)) return u(e, D);
    } else {
        var B = f(e),
            F = B == M || B == P;
        if (T(e)) return l(e, U);
        if (B == x || B == C || (F && !b)) {
            if (((D = w || F ? {} : m(e)), !U)) return w ? d(e, s(D, e)) : c(e, o(D, e));
        } else {
            if (!J[B]) return b ? e : {};
            D = p(e, B, U);
        }
    }
    L || (L = new r());
    var Z = L.get(e);
    if (Z) return Z;
    L.set(e, D),
        A(e)
            ? e.forEach(function (r) {
                  D.add(ee(r, t, n, r, e, L));
              })
            : g(e) &&
              e.forEach(function (r, i) {
                  D.set(i, ee(r, t, n, i, e, L));
              });
    var V = G ? (w ? E : _) : w ? keysIn : v,
        H = k ? void 0 : V(e);
    return (
        i(H || e, function (r, i) {
            H && (r = e[(i = r)]), a(D, i, ee(r, t, n, i, e, L));
        }),
        D
    );
}
(J[C] = J[y] = J[V] = J[H] = J[b] = J[L] = J[Y] = J[j] = J[W] = J[K] = J[z] = J[U] = J[w] = J[x] = J[G] = J[k] = J[B] = J[F] = J[q] = J[Q] = J[X] = J[$] = !0), (J[D] = J[M] = J[Z] = !1), (e.exports = ee);
