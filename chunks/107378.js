var n = r(92801),
    a = r(58834);
e.exports = function (e) {
    for (var t = a(e), r = t.length; r--; ) {
        var _ = t[r],
            o = e[_];
        t[r] = [_, o, n(o)];
    }
    return t;
};
