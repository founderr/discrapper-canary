var n = r(135839),
    a = r(117973),
    _ = r(780712),
    o = r(400353),
    E = r(653180),
    i = r(657398),
    c = r(19235),
    s = '[object Map]',
    l = '[object Promise]',
    u = '[object Set]',
    I = '[object WeakMap]',
    R = '[object DataView]',
    N = c(n),
    A = c(a),
    T = c(_),
    d = c(o),
    L = c(E),
    f = i;
((n && f(new n(new ArrayBuffer(1))) != R) || (a && f(new a()) != s) || (_ && f(_.resolve()) != l) || (o && f(new o()) != u) || (E && f(new E()) != I)) &&
    (f = function (e) {
        var t = i(e),
            r = '[object Object]' == t ? e.constructor : void 0,
            n = r ? c(r) : '';
        if (n)
            switch (n) {
                case N:
                    return R;
                case A:
                    return s;
                case T:
                    return l;
                case d:
                    return u;
                case L:
                    return I;
            }
        return t;
    }),
    (e.exports = f);
