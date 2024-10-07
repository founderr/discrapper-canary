t.exports = function (t, n) {
    var r = n.length,
        e = t.length;
    if (e > r) return !1;
    if (e === r) return t === n;
    t: for (var i = 0, o = 0; i < e; i++) {
        for (var a = t.charCodeAt(i); o < r; ) if (n.charCodeAt(o++) === a) continue t;
        return !1;
    }
    return !0;
};
