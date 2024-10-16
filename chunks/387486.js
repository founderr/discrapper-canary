r.d(t, {
    f: function () {
        return o;
    }
});
var n = r(650093),
    a = r(867921),
    _ = r(928541);
function o(e, t = (0, n.L2)('fetch')) {
    let r = 0,
        o = 0;
    return (0, a.q)(e, function (a) {
        let E = a.body.length;
        (r += E), o++;
        let i = {
            body: a.body,
            method: 'POST',
            referrerPolicy: 'origin',
            headers: e.headers,
            keepalive: r <= 60000 && o < 15,
            ...e.fetchOptions
        };
        if (!t) return (0, n._6)('fetch'), (0, _.$2)('No fetch implementation available');
        try {
            return t(e.url, i).then(
                (e) => (
                    (r -= E),
                    o--,
                    {
                        statusCode: e.status,
                        headers: {
                            'x-sentry-rate-limits': e.headers.get('X-Sentry-Rate-Limits'),
                            'retry-after': e.headers.get('Retry-After')
                        }
                    }
                )
            );
        } catch (e) {
            return (0, n._6)('fetch'), (r -= E), o--, (0, _.$2)(e);
        }
    });
}
