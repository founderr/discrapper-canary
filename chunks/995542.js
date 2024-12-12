var i = r(56135),
    a = r(888968),
    s = r(649786),
    o = r(718332),
    l = r(320114),
    u = r(82075),
    c = 1,
    d = 2,
    f = '[object Boolean]',
    _ = '[object Date]',
    h = '[object Error]',
    p = '[object Map]',
    m = '[object Number]',
    g = '[object RegExp]',
    E = '[object Set]',
    v = '[object String]',
    I = '[object Symbol]',
    T = '[object ArrayBuffer]',
    b = '[object DataView]',
    y = i ? i.prototype : void 0,
    S = y ? y.valueOf : void 0;
function A(e, n, r, i, y, A, N) {
    switch (r) {
        case b:
            if (e.byteLength != n.byteLength || e.byteOffset != n.byteOffset) break;
            (e = e.buffer), (n = n.buffer);
        case T:
            if (e.byteLength != n.byteLength || !A(new a(e), new a(n))) break;
            return !0;
        case f:
        case _:
        case m:
            return s(+e, +n);
        case h:
            return e.name == n.name && e.message == n.message;
        case g:
        case v:
            return e == n + '';
        case p:
            var C = l;
        case E:
            var R = i & c;
            if ((C || (C = u), e.size != n.size && !R)) break;
            var O = N.get(e);
            if (O) return O == n;
            (i |= d), N.set(e, n);
            var D = o(C(e), C(n), i, y, A, N);
            return N.delete(e), D;
        case I:
            if (S) return S.call(e) == S.call(n);
    }
    return !1;
}
e.exports = A;
