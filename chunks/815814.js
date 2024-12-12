var i = r(640767),
    a = r(393020),
    s = r(493883),
    o = r(755228),
    l = r(383718),
    u = r(713720),
    c = r(1213),
    d = r(124084),
    f = r(581527),
    _ = r(192853),
    h = r(163494),
    p = Object('a'),
    m = 'a' !== p[0] || !(0 in p),
    g = _('String.prototype.split');
e.exports = function (e) {
    var n,
        r = d(this),
        _ = c((m && h(r) ? g(r, '') : r).length);
    if (!u(e)) throw TypeError('Array.prototype.map callback must be a function');
    arguments.length > 1 && (n = arguments[1]);
    for (var p = i(r, _), E = 0; E < _; ) {
        var v = f(E);
        if (l(r, v)) {
            var I = a(e, n, [o(r, v), E, r]);
            s(p, v, I);
        }
        E += 1;
    }
    return p;
};
