var r = n(338752),
    i = n(342545),
    a = n(463374),
    o = RangeError;
e.exports = function (e) {
    var t = i(a(this)),
        n = '',
        s = r(e);
    if (s < 0 || s === 1 / 0) throw new o('Wrong number of repetitions');
    for (; s > 0; (s >>>= 1) && (t += t)) 1 & s && (n += t);
    return n;
};
