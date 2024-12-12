function r(e) {
    var n = -1,
        r = Array(e.size);
    return (
        e.forEach(function (e) {
            r[++n] = e;
        }),
        r
    );
}
n.Z = r;
