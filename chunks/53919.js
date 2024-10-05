var r = n(762378),
    i = n(481062),
    a = n(34775),
    s = n(79568),
    o = n(221286),
    l = n(903425),
    u = n(785775),
    c = '[object Map]',
    d = '[object Promise]',
    _ = '[object Set]',
    E = '[object WeakMap]',
    f = '[object DataView]',
    h = u(r),
    p = u(i),
    I = u(a),
    m = u(s),
    T = u(o),
    S = l;
((r && S(new r(new ArrayBuffer(1))) != f) || (i && S(new i()) != c) || (a && S(a.resolve()) != d) || (s && S(new s()) != _) || (o && S(new o()) != E)) &&
    (S = function (e) {
        var t = l(e),
            n = '[object Object]' == t ? e.constructor : void 0,
            r = n ? u(n) : '';
        if (r)
            switch (r) {
                case h:
                    return f;
                case p:
                    return c;
                case I:
                    return d;
                case m:
                    return _;
                case T:
                    return E;
            }
        return t;
    }),
    (e.exports = S);
