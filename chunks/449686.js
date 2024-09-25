function t(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && (i[n] = e[n]);
    return i;
}
(e.exports = t), (e.exports.__esModule = !0), (e.exports.default = e.exports);
