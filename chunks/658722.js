function t(e, t) {
    var n = t.length,
        r = e.length;
    if (r > n) return !1;
    if (r === n) return e === t;
    t: for (var i = 0, a = 0; i < r; i++) {
        for (var o = e.charCodeAt(i); a < n; ) if (t.charCodeAt(a++) === o) continue t;
        return !1;
    }
    return !0;
}
e.exports = t;
