var n = r(135839),
    a = r(117973),
    _ = r(780712),
    o = r(400353),
    i = r(653180),
    E = r(657398),
    c = r(19235),
    s = '[object Map]',
    l = '[object Promise]',
    u = '[object Set]',
    I = '[object WeakMap]',
    R = '[object DataView]',
    A = c(n),
    N = c(a),
    T = c(_),
    d = c(o),
    f = c(i),
    L = E;
((n && L(new n(new ArrayBuffer(1))) != R) || (a && L(new a()) != s) || (_ && L(_.resolve()) != l) || (o && L(new o()) != u) || (i && L(new i()) != I)) &&
    (L = function (e) {
        var t = E(e),
            r = '[object Object]' == t ? e.constructor : void 0,
            n = r ? c(r) : '';
        if (n)
            switch (n) {
                case A:
                    return R;
                case N:
                    return s;
                case T:
                    return l;
                case d:
                    return u;
                case f:
                    return I;
            }
        return t;
    }),
    (e.exports = L);
