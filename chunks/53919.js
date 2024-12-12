var i = r(762378),
    a = r(481062),
    s = r(34775),
    o = r(79568),
    l = r(221286),
    u = r(903425),
    c = r(785775),
    d = '[object Map]',
    f = '[object Object]',
    _ = '[object Promise]',
    h = '[object Set]',
    p = '[object WeakMap]',
    m = '[object DataView]',
    g = c(i),
    E = c(a),
    v = c(s),
    I = c(o),
    T = c(l),
    b = u;
((i && b(new i(new ArrayBuffer(1))) != m) || (a && b(new a()) != d) || (s && b(s.resolve()) != _) || (o && b(new o()) != h) || (l && b(new l()) != p)) &&
    (b = function (e) {
        var n = u(e),
            r = n == f ? e.constructor : void 0,
            i = r ? c(r) : '';
        if (i)
            switch (i) {
                case g:
                    return m;
                case E:
                    return d;
                case v:
                    return _;
                case I:
                    return h;
                case T:
                    return p;
            }
        return n;
    }),
    (e.exports = b);
