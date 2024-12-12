r.d(t, {
    q: function () {
        return A;
    }
});
var a = r(899517),
    n = r(622916),
    _ = r(101284),
    o = r(263449),
    E = r(255768),
    i = r(696486),
    c = r(152228),
    s = r(366569),
    l = r(147498);
function I(e, t) {
    let r = (0, a.Y)('globalMetricsAggregators', () => new WeakMap()),
        n = r.get(e);
    if (n) return n;
    let _ = new t(e);
    return e.on('flush', () => _.flush()), e.on('close', () => _.close()), r.set(e, _), _;
}
function u(e, t, r, a, _ = {}) {
    let c = _.client || (0, o.s3)();
    if (!c) return;
    let s = (0, i.HN)(),
        l = s ? (0, i.Gx)(s) : void 0,
        u = l && (0, i.XU)(l).description,
        { unit: R, tags: A, timestamp: T } = _,
        { release: N, environment: d } = c.getOptions(),
        f = {};
    N && (f.release = N),
        d && (f.environment = d),
        u && (f.transaction = u),
        E.X && n.kg.log(`Adding value of ${a} to ${t} metric ${r}`),
        I(c, e).add(
            t,
            r,
            a,
            R,
            {
                ...f,
                ...A
            },
            T
        );
}
function R(e, t, r, a) {
    u(e, l.g_, t, T(r), a);
}
let A = {
    increment: function (e, t, r = 1, a) {
        u(e, l.JM, t, T(r), a);
    },
    distribution: R,
    set: function (e, t, r, a) {
        u(e, l.is, t, r, a);
    },
    gauge: function (e, t, r, a) {
        u(e, l.uG, t, T(r), a);
    },
    timing: function (e, t, r, a = 'second', n) {
        if ('function' == typeof r) {
            let a = (0, _.ph)();
            return (0, c.V0)(
                {
                    op: 'metrics.timing',
                    name: t,
                    startTime: a,
                    onlyIfParent: !0
                },
                (o) =>
                    (0, s.i)(
                        () => r(),
                        () => {},
                        () => {
                            let r = (0, _.ph)();
                            R(e, t, r - a, {
                                ...n,
                                unit: 'second'
                            }),
                                o.end(r);
                        }
                    )
            );
        }
        R(e, t, r, {
            ...n,
            unit: a
        });
    },
    getMetricsAggregatorForClient: I
};
function T(e) {
    return 'string' == typeof e ? parseInt(e) : e;
}
