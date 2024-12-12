var i = r(467360),
    a = r(483266),
    s = r(862195),
    o = r(24002),
    l = r(178683),
    u = r(176338),
    c = r(526389),
    d = '[object Map]',
    f = '[object Object]',
    _ = '[object Promise]',
    h = '[object Set]',
    p = '[object WeakMap]',
    m = '[object DataView]',
    g = (0, c.Z)(i.Z),
    E = (0, c.Z)(a.Z),
    v = (0, c.Z)(s.Z),
    I = (0, c.Z)(o.Z),
    T = (0, c.Z)(l.Z),
    b = u.Z;
((i.Z && b(new i.Z(new ArrayBuffer(1))) != m) || (a.Z && b(new a.Z()) != d) || (s.Z && b(s.Z.resolve()) != _) || (o.Z && b(new o.Z()) != h) || (l.Z && b(new l.Z()) != p)) &&
    (b = function (e) {
        var n = (0, u.Z)(e),
            r = n == f ? e.constructor : void 0,
            i = r ? (0, c.Z)(r) : '';
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
    (n.Z = b);
