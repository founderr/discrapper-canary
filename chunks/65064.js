var a = r(135839),
    n = r(117973),
    _ = r(780712),
    o = r(400353),
    E = r(653180),
    i = r(657398),
    c = r(19235),
    s = '[object Map]',
    l = '[object Promise]',
    I = '[object Set]',
    u = '[object WeakMap]',
    R = '[object DataView]',
    A = c(a),
    T = c(n),
    N = c(_),
    d = c(o),
    f = c(E),
    O = i;
((a && O(new a(new ArrayBuffer(1))) != R) || (n && O(new n()) != s) || (_ && O(_.resolve()) != l) || (o && O(new o()) != I) || (E && O(new E()) != u)) &&
    (O = function (e) {
        var t = i(e),
            r = '[object Object]' == t ? e.constructor : void 0,
            a = r ? c(r) : '';
        if (a)
            switch (a) {
                case A:
                    return R;
                case T:
                    return s;
                case N:
                    return l;
                case d:
                    return I;
                case f:
                    return u;
            }
        return t;
    }),
    (e.exports = O);
