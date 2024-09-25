var r = n(96403),
    i = n(141603),
    a = n(729605),
    o = n(818140).indexOf,
    s = n(511364),
    l = r([].push);
e.exports = function (e, t) {
    var n,
        r = a(e),
        u = 0,
        c = [];
    for (n in r) !i(s, n) && i(r, n) && l(c, n);
    for (; t.length > u; ) i(r, (n = t[u++])) && (~o(c, n) || l(c, n));
    return c;
};
