function n(e, n) {
    if (null == e) return {};
    var r,
        i,
        a = {},
        s = Object.keys(e);
    for (i = 0; i < s.length; i++) (r = s[i]), !(n.indexOf(r) >= 0) && (a[r] = e[r]);
    return a;
}
(e.exports = n), (e.exports.__esModule = !0), (e.exports.default = e.exports);
