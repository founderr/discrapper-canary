var i = r(835449),
    a = r(571516);
function s(e) {
    return (0, i.Z)(function (n, r) {
        var i = -1,
            s = r.length,
            o = s > 1 ? r[s - 1] : void 0,
            l = s > 2 ? r[2] : void 0;
        for (o = e.length > 3 && 'function' == typeof o ? (s--, o) : void 0, l && (0, a.Z)(r[0], r[1], l) && ((o = s < 3 ? void 0 : o), (s = 1)), n = Object(n); ++i < s; ) {
            var u = r[i];
            u && e(n, u, i, o);
        }
        return n;
    });
}
n.Z = s;
