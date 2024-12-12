function r(e) {
    var n = -1,
        r = Array(e.size);
    return (
        e.forEach(function (e, i) {
            r[++n] = [i, e];
        }),
        r
    );
}
n.Z = r;
