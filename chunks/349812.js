r.d(t, {
    Pd: function () {
        return E;
    }
});
var a = r(622916),
    n = r(617726),
    _ = r(14588),
    o = r(255768);
function E(e) {
    function t(...e) {
        o.X && a.kg.info('[Offline]:', ...e);
    }
    return (r) => {
        let a;
        let o = e(r);
        if (!r.createStore) throw Error('No `createStore` function was provided');
        let E = r.createStore(r),
            i = 5000;
        function c(e) {
            a && clearTimeout(a),
                'number' !=
                    typeof (a = setTimeout(async () => {
                        a = void 0;
                        let e = await E.shift();
                        e &&
                            (t('Attempting to send previously queued event'),
                            (e[0].sent_at = new Date().toISOString()),
                            l(e, !0).catch((e) => {
                                t('Failed to retry sending', e);
                            }));
                    }, e)) &&
                    a.unref &&
                    a.unref();
        }
        function s() {
            if (!a) c(i), (i = Math.min(2 * i, 3600000));
        }
        async function l(e, a = !1) {
            if (!a && (0, n.R)(e, ['replay_event', 'replay_recording'])) return await E.push(e), c(100), {};
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
                var l, I, u;
                if (await ((l = e), (I = _), (u = i), !(0, n.R)(l, ['client_report']) && (!r.shouldStore || r.shouldStore(l, I, u)))) return a ? await E.unshift(e) : await E.push(e), s(), t('Error sending. Event queued.', _), {};
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
