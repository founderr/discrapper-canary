var r = n(762378),
    i = n(481062),
    a = n(34775),
    o = n(79568),
    s = n(221286),
    l = n(903425),
    u = n(785775),
    c = '[object Map]',
    d = '[object Object]',
    _ = '[object Promise]',
    E = '[object Set]',
    f = '[object WeakMap]',
    h = '[object DataView]',
    p = u(r),
    m = u(i),
    I = u(a),
    T = u(o),
    g = u(s),
    S = l;
((r && S(new r(new ArrayBuffer(1))) != h) || (i && S(new i()) != c) || (a && S(a.resolve()) != _) || (o && S(new o()) != E) || (s && S(new s()) != f)) &&
    (S = function (e) {
        var t = l(e),
            n = t == d ? e.constructor : void 0,
            r = n ? u(n) : '';
        if (r)
            switch (r) {
                case p:
                    return h;
                case m:
                    return c;
                case I:
                    return _;
                case T:
                    return E;
                case g:
                    return f;
            }
        return t;
    }),
    (e.exports = S);
