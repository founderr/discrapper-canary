var i = r(957578).Buffer,
    a = r(292735);
function s(e, n, r, s) {
    if ((!i.isBuffer(e) && (e = i.from(e, 'binary')), n && (!i.isBuffer(n) && (n = i.from(n, 'binary')), 8 !== n.length))) throw RangeError('salt should be Buffer with 8 byte length');
    for (var o = r / 8, l = i.alloc(o), u = i.alloc(s || 0), c = i.alloc(0); o > 0 || s > 0; ) {
        var d = new a();
        d.update(c), d.update(e), n && d.update(n), (c = d.digest());
        var f = 0;
        if (o > 0) {
            var _ = l.length - o;
            (f = Math.min(o, c.length)), c.copy(l, _, 0, f), (o -= f);
        }
        if (f < c.length && s > 0) {
            var h = u.length - s,
                p = Math.min(s, c.length - f);
            c.copy(u, h, f, f + p), (s -= p);
        }
    }
    return (
        c.fill(0),
        {
            key: l,
            iv: u
        }
    );
}
e.exports = s;
