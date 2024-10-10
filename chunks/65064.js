var n = r(135839),
    a = r(117973),
    _ = r(780712),
    o = r(400353),
    i = r(653180),
    E = r(657398),
    c = r(19235),
    s = '[object Map]',
    I = '[object Promise]',
    u = '[object Set]',
    l = '[object WeakMap]',
    R = '[object DataView]',
    A = c(n),
    T = c(a),
    N = c(_),
    d = c(o),
    O = c(i),
    p = E;
((n && p(new n(new ArrayBuffer(1))) != R) || (a && p(new a()) != s) || (_ && p(_.resolve()) != I) || (o && p(new o()) != u) || (i && p(new i()) != l)) &&
    (p = function (e) {
        var t = E(e),
            r = '[object Object]' == t ? e.constructor : void 0,
            n = r ? c(r) : '';
        if (n)
            switch (n) {
                case A:
                    return R;
                case T:
                    return s;
                case N:
                    return I;
                case d:
                    return u;
                case O:
                    return l;
            }
        return t;
    }),
    (e.exports = p);
