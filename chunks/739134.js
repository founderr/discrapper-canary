var r = n(223428),
    i = n(706178),
    a = n(108381),
    s = n(855467),
    o = n(972566),
    l = n(814033),
    u = n(895598),
    c = n(530917),
    d = n(957578).Buffer;
e.exports = function (e, t, n) {
    f = e.padding ? e.padding : n ? 1 : 4;
    var f,
        _,
        p = r(e);
    if (4 === f)
        _ = (function (e, t) {
            var n = e.modulus.byteLength(),
                r = t.length,
                u = a('sha1').update(d.alloc(0)).digest(),
                c = u.length,
                f = 2 * c;
            if (r > n - f - 2) throw Error('message too long');
            var _ = d.alloc(n - r - f - 2),
                p = n - c - 1,
                h = i(c),
                m = o(d.concat([u, _, d.alloc(1, 1), t], p), s(h, p)),
                g = o(h, s(m, c));
            return new l(d.concat([d.alloc(1), g, m], n));
        })(p, t);
    else if (1 === f)
        _ = (function (e, t, n) {
            var r,
                a = t.length,
                s = e.modulus.byteLength();
            if (a > s - 11) throw Error('message too long');
            return (
                (r = n
                    ? d.alloc(s - a - 3, 255)
                    : (function (e) {
                          for (var t, n = d.allocUnsafe(e), r = 0, a = i(2 * e), s = 0; r < e; ) s === a.length && ((a = i(2 * e)), (s = 0)), (t = a[s++]) && (n[r++] = t);
                          return n;
                      })(s - a - 3)),
                new l(d.concat([d.from([0, n ? 1 : 2]), r, d.alloc(1), t], s))
            );
        })(p, t, n);
    else if (3 === f) {
        if ((_ = new l(t)).cmp(p.modulus) >= 0) throw Error('data too long for modulus');
    } else throw Error('unknown padding');
    return n ? c(_, p) : u(_, p);
};
