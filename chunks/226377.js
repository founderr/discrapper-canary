r.d(t, {
    q: function () {
        return A;
    }
});
var n = r(899517),
    a = r(622916),
    _ = r(101284),
    o = r(263449),
    i = r(255768),
    E = r(696486),
    c = r(152228),
    s = r(366569),
    l = r(147498);
function u(e, t) {
    let r = (0, n.Y)('globalMetricsAggregators', () => new WeakMap()),
        a = r.get(e);
    if (a) return a;
    let _ = new t(e);
    return e.on('flush', () => _.flush()), e.on('close', () => _.close()), r.set(e, _), _;
}
function I(e, t, r, n, _ = {}) {
    let c = _.client || (0, o.s3)();
    if (!c) return;
    let s = (0, E.HN)(),
        l = s ? (0, E.Gx)(s) : void 0,
        I = l && (0, E.XU)(l).description,
        { unit: R, tags: A, timestamp: N } = _,
        { release: T, environment: d } = c.getOptions(),
        f = {};
    T && (f.release = T),
        d && (f.environment = d),
        I && (f.transaction = I),
        i.X && a.kg.log(`Adding value of ${n} to ${t} metric ${r}`),
        u(c, e).add(
            t,
            r,
            n,
            R,
            {
                ...f,
                ...A
            },
            N
        );
}
function R(e, t, r, n) {
    I(e, l.g_, t, N(r), n);
}
let A = {
    increment: function (e, t, r = 1, n) {
        I(e, l.JM, t, N(r), n);
    },
    distribution: R,
    set: function (e, t, r, n) {
        I(e, l.is, t, r, n);
    },
    gauge: function (e, t, r, n) {
        I(e, l.uG, t, N(r), n);
    },
    timing: function (e, t, r, n = 'second', a) {
        if ('function' == typeof r) {
            let n = (0, _.ph)();
            return (0, c.V0)(
                {
                    op: 'metrics.timing',
                    name: t,
                    startTime: n,
                    onlyIfParent: !0
                },
                (o) =>
                    (0, s.i)(
                        () => r(),
                        () => {},
                        () => {
                            let r = (0, _.ph)();
                            R(e, t, r - n, {
                                ...a,
                                unit: 'second'
                            }),
                                o.end(r);
                        }
                    )
            );
        }
        R(e, t, r, {
            ...a,
            unit: n
        });
    },
    getMetricsAggregatorForClient: u
};
function N(e) {
    return 'string' == typeof e ? parseInt(e) : e;
}
