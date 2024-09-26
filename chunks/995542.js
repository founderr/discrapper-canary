var r = n(56135),
    i = n(888968),
    a = n(649786),
    o = n(718332),
    s = n(320114),
    l = n(82075),
    u = 1,
    c = 2,
    d = '[object Boolean]',
    _ = '[object Date]',
    E = '[object Error]',
    f = '[object Map]',
    h = '[object Number]',
    p = '[object RegExp]',
    m = '[object Set]',
    I = '[object String]',
    T = '[object Symbol]',
    g = '[object ArrayBuffer]',
    S = '[object DataView]',
    A = r ? r.prototype : void 0,
    v = A ? A.valueOf : void 0;
function N(e, t, n, r, A, N, O) {
    switch (n) {
        case S:
            if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) break;
            (e = e.buffer), (t = t.buffer);
        case g:
            if (e.byteLength != t.byteLength || !N(new i(e), new i(t))) break;
            return !0;
        case d:
        case _:
        case h:
            return a(+e, +t);
        case E:
            return e.name == t.name && e.message == t.message;
        case p:
        case I:
            return e == t + '';
        case f:
            var R = s;
        case m:
            var C = r & u;
            if ((R || (R = l), e.size != t.size && !C)) break;
            var y = O.get(e);
            if (y) return y == t;
            (r |= c), O.set(e, t);
            var L = o(R(e), R(t), r, A, N, O);
            return O.delete(e), L;
        case T:
            if (v) return v.call(e) == v.call(t);
    }
    return !1;
}
e.exports = N;
