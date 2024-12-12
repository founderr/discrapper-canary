r.d(t, {
    JY: function () {
        return a;
    },
    Q: function () {
        return n;
    },
    WG: function () {
        return _;
    }
});
function a(e, t = Date.now()) {
    let r = parseInt(`${e}`, 10);
    if (!isNaN(r)) return 1000 * r;
    let a = Date.parse(`${e}`);
    return isNaN(a) ? 60000 : a - t;
}
function n(e, t, r = Date.now()) {
    var a;
    return ((a = e)[t] || a.all || 0) > r;
}
function _(e, { statusCode: t, headers: r }, n = Date.now()) {
    let _ = { ...e },
        o = r && r['x-sentry-rate-limits'],
        E = r && r['retry-after'];
    if (o)
        for (let e of o.trim().split(',')) {
            let [t, r, , , a] = e.split(':', 5),
                o = parseInt(t, 10),
                E = (isNaN(o) ? 60 : o) * 1000;
            if (r) for (let e of r.split(';')) 'metric_bucket' === e ? (!a || a.split(';').includes('custom')) && (_[e] = n + E) : (_[e] = n + E);
            else _.all = n + E;
        }
    else E ? (_.all = n + a(E, n)) : 429 === t && (_.all = n + 60000);
    return _;
}
