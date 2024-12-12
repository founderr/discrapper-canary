var i = r(135839),
    a = r(117973),
    s = r(780712),
    o = r(400353),
    l = r(653180),
    u = r(657398),
    c = r(19235),
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
