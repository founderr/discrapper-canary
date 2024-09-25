var r = n(47120);
var i = n(259443),
    a = n(569611);
let o = Date.now(),
    s = o,
    l = '\nfont-weight: bold;\ncolor: purple;\n';
(0, i._)(function (e, t, n) {
    for (var r = arguments.length, i = Array(r > 3 ? r - 3 : 0), u = 3; u < r; u++) i[u - 3] = arguments[u];
    let c = Date.now(),
        d = ((c - o) / 1000).toFixed(3),
        _ = ((c - s) / 1000).toFixed(3),
        E = 'Σ:'.concat(d, 's, Δ:').concat(_, 's');
    (s = c),
        a.Hj(
            {
                name: e,
                timing: E
            },
            n,
            ...i
        ),
        'file-only' !== t && console[t]('%c['.concat(e, ']'), l, n, ...i);
}),
    (t.Z = i.Y);
