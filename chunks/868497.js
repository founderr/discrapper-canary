r.d(t, {
    m: function () {
        return A;
    }
});
var n = r(873567),
    a = r(370541),
    _ = r(285883),
    o = r(573736),
    i = r(263449),
    E = r(988097),
    c = r(73453),
    s = r(696486),
    I = r(789112),
    u = r(793373),
    l = r(152228),
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
                    (0, u.Q0)(e, t.response.status);
                    let r = t.response && t.response.headers && t.response.headers.get('content-length');
                    if (r) {
                        let t = parseInt(r);
                        t > 0 && e.setAttribute('http.response_content_length', t);
                    }
                } else
                    t.error &&
                        e.setStatus({
                            code: u.jt,
                            message: 'internal_error'
                        });
                e.end();
            })(r, e),
            delete A[t]);
        return;
    }
    let d = (0, i.nZ)(),
        O = (0, i.s3)(),
        { method: p, url: f } = e.fetchData,
        L = (function (e) {
            try {
                return new URL(e).href;
            } catch (e) {
                return;
            }
        })(f),
        S = L ? (0, n.en)(L).host : void 0,
        D = !!(0, s.HN)(),
        h =
            N && D
                ? (0, l.qp)({
                      name: `${p} ${f}`,
                      attributes: {
                          url: f,
                          type: 'fetch',
                          'http.method': p,
                          'http.url': L,
                          'server.address': S,
                          [E.S3]: T,
                          [E.$J]: 'http.client'
                      }
                  })
                : new I.b();
    if (((e.fetchData.__span = h.spanContext().spanId), (A[h.spanContext().spanId] = h), r(e.fetchData.url) && O)) {
        let t = e.args[0];
        e.args[1] = e.args[1] || {};
        let r = e.args[1];
        r.headers = (function (e, t, r, n, E) {
            let {
                    traceId: c,
                    spanId: I,
                    sampled: u,
                    dsc: l
                } = {
                    ...(0, i.aF)().getPropagationContext(),
                    ...r.getPropagationContext()
                },
                A = E ? (0, s.Hb)(E) : (0, a.$p)(c, I, u),
                T = (0, _.IQ)(l || (E ? (0, R.jC)(E) : (0, R._l)(c, t))),
                N = n.headers || ('undefined' != typeof Request && (0, o.V9)(e, Request) ? e.headers : void 0);
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
        })(t, O, d, r, (0, c.z)() && D ? h : void 0);
    }
    return h;
}
