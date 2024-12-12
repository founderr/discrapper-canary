r.d(t, {
    m: function () {
        return A;
    }
});
var a = r(873567),
    n = r(370541),
    _ = r(285883),
    o = r(573736),
    E = r(263449),
    i = r(988097),
    c = r(73453),
    s = r(696486),
    l = r(789112),
    I = r(793373),
    u = r(152228),
    R = r(305625);
function A(e, t, r, A, T = 'auto.http.browser') {
    if (!e.fetchData) return;
    let N = (0, c.z)() && t(e.fetchData.url);
    if (e.endTimestamp && N) {
        let t = e.fetchData.__span;
        if (!t) return;
        let r = A[t];
        r &&
            ((function (e, t) {
                if (t.response) {
                    (0, I.Q0)(e, t.response.status);
                    let r = t.response && t.response.headers && t.response.headers.get('content-length');
                    if (r) {
                        let t = parseInt(r);
                        t > 0 && e.setAttribute('http.response_content_length', t);
                    }
                } else
                    t.error &&
                        e.setStatus({
                            code: I.jt,
                            message: 'internal_error'
                        });
                e.end();
            })(r, e),
            delete A[t]);
        return;
    }
    let d = (0, E.nZ)(),
        f = (0, E.s3)(),
        { method: O, url: L } = e.fetchData,
        p = (function (e) {
            try {
                return new URL(e).href;
            } catch (e) {
                return;
            }
        })(L),
        h = p ? (0, a.en)(p).host : void 0,
        D = !!(0, s.HN)(),
        S =
            N && D
                ? (0, u.qp)({
                      name: `${O} ${L}`,
                      attributes: {
                          url: L,
                          type: 'fetch',
                          'http.method': O,
                          'http.url': p,
                          'server.address': h,
                          [i.S3]: T,
                          [i.$J]: 'http.client'
                      }
                  })
                : new l.b();
    if (((e.fetchData.__span = S.spanContext().spanId), (A[S.spanContext().spanId] = S), r(e.fetchData.url) && f)) {
        let t = e.args[0];
        e.args[1] = e.args[1] || {};
        let r = e.args[1];
        r.headers = (function (e, t, r, a, i) {
            let {
                    traceId: c,
                    spanId: l,
                    sampled: I,
                    dsc: u
                } = {
                    ...(0, E.aF)().getPropagationContext(),
                    ...r.getPropagationContext()
                },
                A = i ? (0, s.Hb)(i) : (0, n.$p)(c, l, I),
                T = (0, _.IQ)(u || (i ? (0, R.jC)(i) : (0, R._l)(c, t))),
                N = a.headers || ('undefined' != typeof Request && (0, o.V9)(e, Request) ? e.headers : void 0);
            if (!N)
                return {
                    'sentry-trace': A,
                    baggage: T
                };
            if ('undefined' != typeof Headers && (0, o.V9)(N, Headers)) {
                let e = new Headers(N);
                return e.append('sentry-trace', A), T && e.append(_.bU, T), e;
            }
            if (Array.isArray(N)) {
                let e = [...N, ['sentry-trace', A]];
                return T && e.push([_.bU, T]), e;
            } else {
                let e = 'baggage' in N ? N.baggage : void 0,
                    t = [];
                return (
                    Array.isArray(e) ? t.push(...e) : e && t.push(e),
                    T && t.push(T),
                    {
                        ...N,
                        'sentry-trace': A,
                        baggage: t.length > 0 ? t.join(',') : void 0
                    }
                );
            }
        })(t, f, d, r, (0, c.z)() && D ? S : void 0);
    }
    return S;
}
