var i = r(548015),
    a = r(74748),
    s = r(572657),
    o = r(318670),
    l = r(252798),
    u = r(396379),
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
    y = i.Z ? i.Z.prototype : void 0,
    S = y ? y.valueOf : void 0;
function A(e, n, r, i, y, A, N) {
    switch (r) {
        case b:
            if (e.byteLength != n.byteLength || e.byteOffset != n.byteOffset) break;
            (e = e.buffer), (n = n.buffer);
        case T:
            if (e.byteLength != n.byteLength || !A(new a.Z(e), new a.Z(n))) break;
            return !0;
        case f:
        case _:
        case m:
            return (0, s.Z)(+e, +n);
        case h:
            return e.name == n.name && e.message == n.message;
        case g:
        case v:
            return e == n + '';
        case p:
            var C = l.Z;
        case E:
            var R = i & c;
            if ((C || (C = u.Z), e.size != n.size && !R)) break;
            var O = N.get(e);
            if (O) return O == n;
            (i |= d), N.set(e, n);
            var D = (0, o.Z)(C(e), C(n), i, y, A, N);
            return N.delete(e), D;
        case I:
            if (S) return S.call(e) == S.call(n);
    }
    return !1;
}
n.Z = A;
