var r = n(926515),
    i = n(526988),
    a = n(24033),
    o = n(938507),
    s = n(11697),
    l = TypeError;
e.exports = function (e, t) {
    var n = arguments.length < 2 ? s(e) : t;
    if (i(n)) return a(r(n, e));
    throw l(o(e) + ' is not iterable');
};
