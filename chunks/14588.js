r.d(t, {
    JY: function () {
        return n;
    },
    Q: function () {
        return a;
    },
    WG: function () {
        return _;
    }
});
function n(e, t = Date.now()) {
    let r = parseInt(`${e}`, 10);
    if (!isNaN(r)) return 1000 * r;
    let n = Date.parse(`${e}`);
    return isNaN(n) ? 60000 : n - t;
}
function a(e, t, r = Date.now()) {
    var n;
    return ((n = e)[t] || n.all || 0) > r;
}
function _(e, { statusCode: t, headers: r }, a = Date.now()) {
    let _ = { ...e },
        o = r && r['x-sentry-rate-limits'],
        E = r && r['retry-after'];
    if (o)
        for (let e of o.trim().split(',')) {
            let [t, r, , , n] = e.split(':', 5),
                o = parseInt(t, 10),
                E = (isNaN(o) ? 60 : o) * 1000;
            if (r) for (let e of r.split(';')) 'metric_bucket' === e ? (!n || n.split(';').includes('custom')) && (_[e] = a + E) : (_[e] = a + E);
            else _.all = a + E;
        }
    else E ? (_.all = a + n(E, a)) : 429 === t && (_.all = a + 60000);
    return _;
}
