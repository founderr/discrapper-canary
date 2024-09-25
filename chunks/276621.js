var r = n(436091);
function i(e, t) {
    return function (n, i) {
        if (null == n) return n;
        if (!r(n)) return e(n, i);
        for (var a = n.length, o = t ? a : -1, s = Object(n); (t ? o-- : ++o < a) && !1 !== i(s[o], o, s); );
        return n;
    };
}
e.exports = i;
