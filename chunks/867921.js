r.d(t, {
    q: function () {
        return s;
    }
});
var a = r(598470),
    n = r(617726),
    _ = r(14588),
    o = r(928541),
    E = r(622916),
    i = r(116698),
    c = r(255768);
function s(e, t, r = (0, a.x)(e.bufferSize || 64)) {
    let s = {};
    return {
        send: function (a) {
            let I = [];
            if (
                ((0, n.gv)(a, (t, r) => {
                    let a = (0, n.mL)(r);
                    if ((0, _.Q)(s, a)) {
                        let n = l(t, r);
                        e.recordDroppedEvent('ratelimit_backoff', a, n);
                    } else I.push(t);
                }),
                0 === I.length)
            )
                return (0, o.WD)({});
            let u = (0, n.Jd)(a[0], I),
                R = (t) => {
                    (0, n.gv)(u, (r, a) => {
                        let _ = l(r, a);
                        e.recordDroppedEvent(t, (0, n.mL)(a), _);
                    });
                };
            return r
                .add(() =>
                    t({ body: (0, n.V$)(u) }).then(
                        (e) => (void 0 !== e.statusCode && (e.statusCode < 200 || e.statusCode >= 300) && c.X && E.kg.warn(`Sentry responded with status code ${e.statusCode} to sent event.`), (s = (0, _.WG)(s, e)), e),
                        (e) => {
                            throw (R('network_error'), e);
                        }
                    )
                )
                .then(
                    (e) => e,
                    (e) => {
                        if (e instanceof i.b) return c.X && E.kg.error('Skipped sending event because buffer is full.'), R('queue_overflow'), (0, o.WD)({});
                        throw e;
                    }
                );
        },
        flush: (e) => r.drain(e)
    };
}
function l(e, t) {
    if ('event' === t || 'transaction' === t) return Array.isArray(e) ? e[1] : void 0;
}
