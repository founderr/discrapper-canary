function n(e) {
    return function (n, r, i) {
        for (var a = -1, s = Object(n), o = i(n), l = o.length; l--; ) {
            var u = o[e ? l : ++a];
            if (!1 === r(s[u], u, s)) break;
        }
        return n;
    };
}
e.exports = n;
