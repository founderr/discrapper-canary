r.d(n, {
    Z: function () {
        return s;
    }
});
var i = r(512722),
    a = r.n(i);
function s(e, n) {
    if ((a()(e.length >= n, 'Waveform smaller than samples'), e.length === n)) return e;
    let r = e.length / n,
        i = [],
        s = 0;
    for (; i.length < n; ) {
        let n = Math.round((i.length + 1) * r),
            a = 0,
            o = 0;
        for (let r = s; r < n && r < e.length; r++) (a += e[r]), o++;
        (i[i.length] = a / o), (s = n);
    }
    return i;
}
