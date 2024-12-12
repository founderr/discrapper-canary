var i = r(854441),
    a = r(917430);
function s(e) {
    for (var n = (0, a.Z)(e), r = n.length; r--; ) {
        var s = n[r],
            o = e[s];
        n[r] = [s, o, (0, i.Z)(o)];
    }
    return n;
}
n.Z = s;
