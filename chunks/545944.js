var r = n(570596),
    i = n(982665),
    a = n(538769),
    o = n(621528),
    s = n(605722),
    l = n(360518),
    u = TypeError,
    c = l('toPrimitive');
e.exports = function (e, t) {
    if (!i(e) || a(e)) return e;
    var n,
        l = o(e, c);
    if (l) {
        if ((void 0 === t && (t = 'default'), !i((n = r(l, e, t))) || a(n))) return n;
        throw new u("Can't convert object to primitive value");
    }
    return void 0 === t && (t = 'number'), s(e, t);
};
