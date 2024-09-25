var r = n(570596),
    i = n(548828),
    a = n(735471),
    o = n(28886),
    s = TypeError;
e.exports = function (e, t) {
    var n,
        l = o(this),
        u = i(l.get),
        c = i(l.has),
        d = i(l.set),
        _ = arguments.length > 2 ? arguments[2] : void 0;
    if (!a(t) && !a(_)) throw new s('At least one callback required');
    return r(c, l, e) ? ((n = r(u, l, e)), a(t) && r(d, l, e, (n = t(n)))) : a(_) && r(d, l, e, (n = _())), n;
};
