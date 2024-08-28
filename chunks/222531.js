var n = r(581031),
    a = r(740362),
    o = r(299623),
    i = r(953326).indexOf,
    _ = r(624906),
    E = n([].push);
e.exports = function (e, t) {
    var r,
        n = o(e),
        s = 0,
        c = [];
    for (r in n) !a(_, r) && a(n, r) && E(c, r);
    for (; t.length > s; ) a(n, (r = t[s++])) && (~i(c, r) || E(c, r));
    return c;
};
