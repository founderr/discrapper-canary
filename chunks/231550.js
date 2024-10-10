r.d(t, {
    Y: function () {
        return T;
    }
});
var n = r(395848),
    a = r(140955),
    _ = r(596308),
    o = r(622574),
    i = r(433691),
    E = r(412828),
    c = r(662355);
let s = [200, 500],
    I = () => (0, E.U)() - 0,
    u = [],
    l = {},
    R = (e) => {
        let t = u[u.length - 1],
            r = l[e.interactionId];
        if (r || u.length < 10 || (t && e.duration > t.latency)) {
            if (r) r.entries.push(e), (r.latency = Math.max(r.latency, e.duration));
            else {
                let t = {
                    id: e.interactionId,
                    latency: e.duration,
                    entries: [e]
                };
                (l[t.id] = t), u.push(t);
            }
            u.sort((e, t) => t.latency - e.latency),
                u.splice(10).forEach((e) => {
                    delete l[e.id];
                });
        }
    },
    A = () => {
        let e = Math.min(u.length - 1, Math.floor(I() / 50));
        return u[e];
    },
    T = (e, t = {}) => {
        (0, c.A)(() => {
            let r;
            (0, E.Y)();
            let c = (0, _.I)('INP'),
                l = (e) => {
                    e.forEach((e) => {
                        e.interactionId && R(e), 'first-input' === e.entryType && !u.some((t) => t.entries.some((t) => e.duration === t.duration && e.startTime === t.startTime)) && R(e);
                    });
                    let t = A();
                    t && t.latency !== c.value && ((c.value = t.latency), (c.entries = t.entries), r());
                },
                T = (0, o.N)('event', l, { durationThreshold: null != t.durationThreshold ? t.durationThreshold : 40 });
            (r = (0, a._)(e, c, s, t.reportAllChanges)),
                T &&
                    ('PerformanceEventTiming' in n.m &&
                        'interactionId' in PerformanceEventTiming.prototype &&
                        T.observe({
                            type: 'first-input',
                            buffered: !0
                        }),
                    (0, i.u)(() => {
                        l(T.takeRecords()), c.value < 0 && I() > 0 && ((c.value = 0), (c.entries = [])), r(!0);
                    }));
        });
    };
