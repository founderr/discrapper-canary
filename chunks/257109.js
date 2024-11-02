var r = n(467360),
    i = n(483266),
    a = n(862195),
    s = n(24002),
    o = n(178683),
    l = n(176338),
    u = n(526389),
    c = '[object Map]',
    d = '[object Promise]',
    f = '[object Set]',
    _ = '[object WeakMap]',
    h = '[object DataView]',
    p = (0, u.Z)(r.Z),
    m = (0, u.Z)(i.Z),
    g = (0, u.Z)(a.Z),
    E = (0, u.Z)(s.Z),
    v = (0, u.Z)(o.Z),
    I = l.Z;
((r.Z && I(new r.Z(new ArrayBuffer(1))) != h) || (i.Z && I(new i.Z()) != c) || (a.Z && I(a.Z.resolve()) != d) || (s.Z && I(new s.Z()) != f) || (o.Z && I(new o.Z()) != _)) &&
    (I = function (e) {
        var t = (0, l.Z)(e),
            n = '[object Object]' == t ? e.constructor : void 0,
            r = n ? (0, u.Z)(n) : '';
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
    (t.Z = I);
