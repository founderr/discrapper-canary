var r = n(570596),
    i = n(548828),
    a = n(28886),
    o = n(858698),
    s = n(749915),
    l = TypeError;
e.exports = function (e, t) {
    var n = arguments.length < 2 ? s(e) : t;
    if (i(n)) return a(r(n, e));
    throw new l(o(e) + ' is not iterable');
};
