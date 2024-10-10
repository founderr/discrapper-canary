r.d(t, {
    q: function () {
        return s;
    }
});
var n = r(672410),
    a = r(617726),
    _ = r(14588),
    o = r(928541),
    i = r(622916),
    E = r(116698),
    c = r(255768);
function s(e, t, r = (0, n.x)(e.bufferSize || 64)) {
    let s = {};
    return {
        send: function (n) {
            let u = [];
            if (
                ((0, a.gv)(n, (t, r) => {
                    let n = (0, a.mL)(r);
                    if ((0, _.Q)(s, n)) {
                        let a = I(t, r);
                        e.recordDroppedEvent('ratelimit_backoff', n, a);
                    } else u.push(t);
                }),
                0 === u.length)
            )
                return (0, o.WD)({});
            let l = (0, a.Jd)(n[0], u),
                R = (t) => {
                    (0, a.gv)(l, (r, n) => {
                        let _ = I(r, n);
                        e.recordDroppedEvent(t, (0, a.mL)(n), _);
                    });
                };
            return r
                .add(() =>
                    t({ body: (0, a.V$)(l) }).then(
                        (e) => (void 0 !== e.statusCode && (e.statusCode < 200 || e.statusCode >= 300) && c.X && i.kg.warn(`Sentry responded with status code ${e.statusCode} to sent event.`), (s = (0, _.WG)(s, e)), e),
                        (e) => {
                            throw (R('network_error'), e);
                        }
                    )
                )
                .then(
                    (e) => e,
                    (e) => {
                        if (e instanceof E.b) return c.X && i.kg.error('Skipped sending event because buffer is full.'), R('queue_overflow'), (0, o.WD)({});
                        throw e;
                    }
                );
        },
        flush: (e) => r.drain(e)
    };
}
function I(e, t) {
    if ('event' === t || 'transaction' === t) return Array.isArray(e) ? e[1] : void 0;
}
