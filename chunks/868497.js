r.d(t, {
    m: function () {
        return N;
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
    l = r(789112),
    u = r(793373),
    I = r(152228),
    R = r(305625);
function N(e, t, r, N, A = 'auto.http.browser') {
    if (!e.fetchData) return;
    let T = (0, c.z)() && t(e.fetchData.url);
    if (e.endTimestamp && T) {
        let t = e.fetchData.__span;
        if (!t) return;
        let r = N[t];
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
            delete N[t]);
        return;
    }
    let d = (0, i.nZ)(),
        L = (0, i.s3)(),
        { method: f, url: O } = e.fetchData,
        p = (function (e) {
            try {
                return new URL(e).href;
            } catch (e) {
                return;
            }
        })(O),
        h = p ? (0, n.en)(p).host : void 0,
        S = !!(0, s.HN)(),
        D =
            T && S
                ? (0, I.qp)({
                      name: `${f} ${O}`,
                      attributes: {
                          url: O,
                          type: 'fetch',
                          'http.method': f,
                          'http.url': p,
                          'server.address': h,
                          [E.S3]: A,
                          [E.$J]: 'http.client'
                      }
                  })
                : new l.b();
    if (((e.fetchData.__span = D.spanContext().spanId), (N[D.spanContext().spanId] = D), r(e.fetchData.url) && L)) {
        let t = e.args[0];
        e.args[1] = e.args[1] || {};
        let r = e.args[1];
        r.headers = (function (e, t, r, n, E) {
            let {
                    traceId: c,
                    spanId: l,
                    sampled: u,
                    dsc: I
                } = {
                    ...(0, i.aF)().getPropagationContext(),
                    ...r.getPropagationContext()
                },
                N = E ? (0, s.Hb)(E) : (0, a.$p)(c, l, u),
                A = (0, _.IQ)(I || (E ? (0, R.jC)(E) : (0, R._l)(c, t))),
                T = n.headers || ('undefined' != typeof Request && (0, o.V9)(e, Request) ? e.headers : void 0);
            if (!T)
                return {
                    'sentry-trace': N,
                    baggage: A
                };
            if ('undefined' != typeof Headers && (0, o.V9)(T, Headers)) {
                let e = new Headers(T);
                return e.append('sentry-trace', N), A && e.append(_.bU, A), e;
            }
            if (Array.isArray(T)) {
                let e = [...T, ['sentry-trace', N]];
                return A && e.push([_.bU, A]), e;
            } else {
                let e = 'baggage' in T ? T.baggage : void 0,
                    t = [];
                return (
                    Array.isArray(e) ? t.push(...e) : e && t.push(e),
                    A && t.push(A),
                    {
                        ...T,
                        'sentry-trace': N,
                        baggage: t.length > 0 ? t.join(',') : void 0
                    }
                );
            }
        })(t, L, d, r, (0, c.z)() && S ? D : void 0);
    }
    return D;
}
