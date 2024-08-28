var r = n(926515),
    i = n(526988),
    a = n(24033),
    s = n(938507),
    o = n(11697),
    l = TypeError;
e.exports = function (e, t) {
    var n = arguments.length < 2 ? o(e) : t;
    if (i(n)) return a(r(n, e));
    throw l(s(e) + ' is not iterable');
};
