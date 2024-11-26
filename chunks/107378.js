var a = r(92801),
    n = r(58834);
e.exports = function (e) {
    for (var t = n(e), r = t.length; r--; ) {
        var _ = t[r],
            o = e[_];
        t[r] = [_, o, a(o)];
    }
    return t;
};
