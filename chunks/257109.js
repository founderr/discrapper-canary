var r = n(467360),
    i = n(483266),
    a = n(862195),
    o = n(24002),
    s = n(178683),
    l = n(176338),
    u = n(526389),
    c = '[object Map]',
    d = '[object Object]',
    _ = '[object Promise]',
    E = '[object Set]',
    f = '[object WeakMap]',
    h = '[object DataView]',
    p = (0, u.Z)(r.Z),
    m = (0, u.Z)(i.Z),
    I = (0, u.Z)(a.Z),
    T = (0, u.Z)(o.Z),
    g = (0, u.Z)(s.Z),
    S = l.Z;
((r.Z && S(new r.Z(new ArrayBuffer(1))) != h) || (i.Z && S(new i.Z()) != c) || (a.Z && S(a.Z.resolve()) != _) || (o.Z && S(new o.Z()) != E) || (s.Z && S(new s.Z()) != f)) &&
    (S = function (e) {
        var t = (0, l.Z)(e),
            n = t == d ? e.constructor : void 0,
            r = n ? (0, u.Z)(n) : '';
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
    (t.Z = S);
