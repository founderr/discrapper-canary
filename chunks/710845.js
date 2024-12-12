var i = r(47120);
var a = r(259443),
    s = r(569611);
let o = Date.now(),
    l = o,
    u = '\nfont-weight: bold;\ncolor: purple;\n';
(0, a._n)(function (e, n, r) {
    for (var i = arguments.length, a = Array(i > 3 ? i - 3 : 0), c = 3; c < i; c++) a[c - 3] = arguments[c];
    let d = Date.now(),
        f = ((d - o) / 1000).toFixed(3),
        _ = ((d - l) / 1000).toFixed(3),
        h = 'Σ:'.concat(f, 's, Δ:').concat(_, 's');
    (l = d),
        s.Hj(
            {
                name: e,
                timing: h
            },
            r,
            ...a
        ),
        'file-only' !== n && console[n]('%c['.concat(e, ']'), u, r, ...a);
}),
    (n.Z = a.Yd);
