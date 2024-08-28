var n = r(926515),
    a = r(622281),
    o = r(323979),
    i = r(995739),
    _ = r(337856),
    E = r(641236),
    s = TypeError,
    c = E('toPrimitive');
e.exports = function (e, t) {
    if (!a(e) || o(e)) return e;
    var r,
        E = i(e, c);
    if (E) {
        if ((void 0 === t && (t = 'default'), !a((r = n(E, e, t))) || o(r))) return r;
        throw s("Can't convert object to primitive value");
    }
    return void 0 === t && (t = 'number'), _(e, t);
};
