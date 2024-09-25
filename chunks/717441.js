var r = n(49693),
    i = n(959318),
    a = RangeError;
e.exports = function (e, t, n, o) {
    var s = r(e),
        l = i(n),
        u = l < 0 ? s + l : l;
    if (u >= s || u < 0) throw a('Incorrect index');
    for (var c = new t(s), d = 0; d < s; d++) c[d] = d === u ? o : e[d];
    return c;
};
