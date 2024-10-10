r.d(t, {
    Pd: function () {
        return i;
    }
});
var n = r(622916),
    a = r(617726),
    _ = r(14588),
    o = r(255768);
function i(e) {
    function t(...e) {
        o.X && n.kg.info('[Offline]:', ...e);
    }
    return (r) => {
        let n;
        let o = e(r);
        if (!r.createStore) throw Error('No `createStore` function was provided');
        let i = r.createStore(r),
            E = 5000;
        function c(e) {
            n && clearTimeout(n),
                'number' !=
                    typeof (n = setTimeout(async () => {
                        n = void 0;
                        let e = await i.shift();
                        e &&
                            (t('Attempting to send previously queued event'),
                            (e[0].sent_at = new Date().toISOString()),
                            I(e, !0).catch((e) => {
                                t('Failed to retry sending', e);
                            }));
                    }, e)) &&
                    n.unref &&
                    n.unref();
        }
        function s() {
            if (!n) c(E), (E = Math.min(2 * E, 3600000));
        }
        async function I(e, n = !1) {
            if (!n && (0, a.R)(e, ['replay_event', 'replay_recording'])) return await i.push(e), c(100), {};
            try {
                let t = await o.send(e),
                    r = 100;
                if (t) {
                    if (t.headers && t.headers['retry-after']) r = (0, _.JY)(t.headers['retry-after']);
                    else if (t.headers && t.headers['x-sentry-rate-limits']) r = 60000;
                    else if ((t.statusCode || 0) >= 400) return t;
                }
                return c(r), (E = 5000), t;
            } catch (_) {
                var I, u, l;
                if (await ((I = e), (u = _), (l = E), !(0, a.R)(I, ['client_report']) && (!r.shouldStore || r.shouldStore(I, u, l)))) return n ? await i.unshift(e) : await i.push(e), s(), t('Error sending. Event queued.', _), {};
                throw _;
            }
        }
        return (
            r.flushAtStartup && s(),
            {
                send: I,
                flush: (e) => o.flush(e)
            }
        );
    };
}
