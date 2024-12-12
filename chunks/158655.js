var i = r(584428),
    a = r(438330);
function s(e) {
    for (var n = a(e), r = n.length; r--; ) {
        var s = n[r],
            o = e[s];
        n[r] = [s, o, i(o)];
    }
    return n;
}
e.exports = s;
