r.d(t, {
    Pd: function () {
        return E;
    }
});
var n = r(622916),
    a = r(617726),
    _ = r(14588),
    o = r(255768);
function E(e) {
    function t(...e) {
        o.X && n.kg.info('[Offline]:', ...e);
    }
    return (r) => {
        let n;
        let o = e(r);
        if (!r.createStore) throw Error('No `createStore` function was provided');
        let E = r.createStore(r),
            i = 5000;
        function c(e) {
            n && clearTimeout(n),
                'number' !=
                    typeof (n = setTimeout(async () => {
                        n = void 0;
                        let e = await E.shift();
                        e &&
                            (t('Attempting to send previously queued event'),
                            (e[0].sent_at = new Date().toISOString()),
                            l(e, !0).catch((e) => {
                                t('Failed to retry sending', e);
                            }));
                    }, e)) &&
                    n.unref &&
                    n.unref();
        }
        function s() {
            if (!n) c(i), (i = Math.min(2 * i, 3600000));
        }
        async function l(e, n = !1) {
            if (!n && (0, a.R)(e, ['replay_event', 'replay_recording'])) return await E.push(e), c(100), {};
            try {
                let t = await o.send(e),
                    r = 100;
                if (t) {
                    if (t.headers && t.headers['retry-after']) r = (0, _.JY)(t.headers['retry-after']);
                    else if (t.headers && t.headers['x-sentry-rate-limits']) r = 60000;
                    else if ((t.statusCode || 0) >= 400) return t;
                }
                return c(r), (i = 5000), t;
            } catch (_) {
                var l, u, I;
                if (await ((l = e), (u = _), (I = i), !(0, a.R)(l, ['client_report']) && (!r.shouldStore || r.shouldStore(l, u, I)))) return n ? await E.unshift(e) : await E.push(e), s(), t('Error sending. Event queued.', _), {};
                throw _;
            }
        }
        return (
            r.flushAtStartup && s(),
            {
                send: l,
                flush: (e) => o.flush(e)
            }
        );
    };
}
