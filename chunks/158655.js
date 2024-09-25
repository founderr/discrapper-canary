var r = n(584428),
    i = n(438330);
function a(e) {
    for (var t = i(e), n = t.length; n--; ) {
        var a = t[n],
            o = e[a];
        t[n] = [a, o, r(o)];
    }
    return t;
}
e.exports = a;
