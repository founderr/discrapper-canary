var r = n(28886),
    i = n(736849);
e.exports = function (e, t, n, a) {
    try {
        return a ? t(r(n)[0], n[1]) : t(n);
    } catch (t) {
        i(e, 'throw', t);
    }
};
