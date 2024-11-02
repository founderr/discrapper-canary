var r = n(762378),
    i = n(481062),
    a = n(34775),
    s = n(79568),
    o = n(221286),
    l = n(903425),
    u = n(785775),
    c = '[object Map]',
    d = '[object Promise]',
    f = '[object Set]',
    _ = '[object WeakMap]',
    h = '[object DataView]',
    p = u(r),
    m = u(i),
    g = u(a),
    E = u(s),
    v = u(o),
    I = l;
((r && I(new r(new ArrayBuffer(1))) != h) || (i && I(new i()) != c) || (a && I(a.resolve()) != d) || (s && I(new s()) != f) || (o && I(new o()) != _)) &&
    (I = function (e) {
        var t = l(e),
            n = '[object Object]' == t ? e.constructor : void 0,
            r = n ? u(n) : '';
        if (r)
            switch (r) {
                case p:
                    return h;
                case m:
                    return c;
                case g:
                    return d;
                case E:
                    return f;
                case v:
                    return _;
            }
        return t;
    }),
    (e.exports = I);
