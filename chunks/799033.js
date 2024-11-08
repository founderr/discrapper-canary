r.d(t, {
    L7: function () {
        return S;
    },
    k3: function () {
        return h;
    }
});
var n = r(157079),
    a = r(501684),
    _ = r(868497),
    o = r(696486),
    i = r(73453),
    E = r(793373),
    c = r(152228),
    s = r(988097),
    l = r(789112),
    u = r(263449),
    I = r(305625),
    R = r(64685),
    A = r(873567),
    N = r(101284),
    T = r(886115),
    d = r(370541),
    f = r(285883),
    L = r(163162);
let O = new WeakMap(),
    p = new Map(),
    h = {
        traceFetch: !0,
        traceXHR: !0,
        enableHTTPTimings: !0
    };
function S(e, t) {
    let {
            traceFetch: r,
            traceXHR: a,
            shouldCreateSpanForRequest: N,
            enableHTTPTimings: S,
            tracePropagationTargets: C
        } = {
            traceFetch: h.traceFetch,
            traceXHR: h.traceXHR,
            ...t
        },
        P = 'function' == typeof N ? N : (e) => !0,
        U = (e) =>
            (function (e, t) {
                let r = L.m9.location && L.m9.location.href;
                if (r) {
                    let n, a;
                    try {
                        (n = new URL(e, r)), (a = new URL(r).origin);
                    } catch (e) {
                        return !1;
                    }
                    let _ = n.origin === a;
                    return t ? (0, T.U0)(n.toString(), t) || (_ && (0, T.U0)(n.pathname, t)) : _;
                }
                {
                    let r = !!e.match(/^\/(?!\/)/);
                    return t ? (0, T.U0)(e, t) : r;
                }
            })(e, C),
        M = {};
    r &&
        (e.addEventProcessor(
            (e) => (
                'transaction' === e.type &&
                    e.spans &&
                    e.spans.forEach((e) => {
                        if ('http.client' === e.op) {
                            let t = p.get(e.span_id);
                            t && ((e.timestamp = t / 1000), p.delete(e.span_id));
                        }
                    }),
                e
            )
        ),
        (0, R.cf)((e) => {
            if (e.response) {
                let t = O.get(e.response);
                t && e.endTimestamp && p.set(t, e.endTimestamp);
            }
        }),
        (0, R.Uf)((e) => {
            let t = (0, _.m)(e, P, U, M);
            if ((e.response && e.fetchData.__span && O.set(e.response, e.fetchData.__span), t)) {
                let r = g(e.fetchData.url),
                    n = r ? (0, A.en)(r).host : void 0;
                t.setAttributes({
                    'http.url': r,
                    'server.address': n
                });
            }
            S && t && D(t);
        })),
        a &&
            (0, n.UK)((e) => {
                let t = (function (e, t, r, a) {
                    let _ = e.xhr,
                        R = _ && _[n.xU];
                    if (!_ || _.__sentry_own_request__ || !R) return;
                    let N = (0, i.z)() && t(R.url);
                    if (e.endTimestamp && N) {
                        let e = _.__sentry_xhr_span_id__;
                        if (!e) return;
                        let t = a[e];
                        t && void 0 !== R.status_code && ((0, E.Q0)(t, R.status_code), t.end(), delete a[e]);
                        return;
                    }
                    let T = g(R.url),
                        L = T ? (0, A.en)(T).host : void 0,
                        O = !!(0, o.HN)(),
                        p =
                            N && O
                                ? (0, c.qp)({
                                      name: `${R.method} ${R.url}`,
                                      attributes: {
                                          type: 'xhr',
                                          'http.method': R.method,
                                          'http.url': T,
                                          url: R.url,
                                          'server.address': L,
                                          [s.S3]: 'auto.http.browser',
                                          [s.$J]: 'http.client'
                                      }
                                  })
                                : new l.b();
                    (_.__sentry_xhr_span_id__ = p.spanContext().spanId), (a[_.__sentry_xhr_span_id__] = p);
                    let h = (0, u.s3)();
                    return (
                        _.setRequestHeader &&
                            r(R.url) &&
                            h &&
                            (function (e, t, r) {
                                let n = (0, u.nZ)(),
                                    {
                                        traceId: a,
                                        spanId: _,
                                        sampled: E,
                                        dsc: c
                                    } = {
                                        ...(0, u.aF)().getPropagationContext(),
                                        ...n.getPropagationContext()
                                    },
                                    s = r && (0, i.z)() ? (0, o.Hb)(r) : (0, d.$p)(a, _, E);
                                (function (e, t, r) {
                                    try {
                                        e.setRequestHeader('sentry-trace', t), r && e.setRequestHeader(f.bU, r);
                                    } catch (e) {}
                                })(e, s, (0, f.IQ)(c || (r ? (0, I.jC)(r) : (0, I._l)(a, t))));
                            })(_, h, (0, i.z)() && O ? p : void 0),
                        p
                    );
                })(e, P, U, M);
                S && t && D(t);
            });
}
function D(e) {
    let { url: t } = (0, o.XU)(e).data || {};
    if (!t || 'string' != typeof t) return;
    let r = (0, a._j)('resource', ({ entries: n }) => {
        n.forEach((n) => {
            var a;
            if ('resource' === (a = n).entryType && 'initiatorType' in a && 'string' == typeof a.nextHopProtocol && ('fetch' === a.initiatorType || 'xmlhttprequest' === a.initiatorType) && n.name.endsWith(t))
                (function (e) {
                    let { name: t, version: r } = (function (e) {
                            let t = 'unknown',
                                r = 'unknown',
                                n = '';
                            for (let a of e) {
                                if ('/' === a) {
                                    [t, r] = e.split('/');
                                    break;
                                }
                                if (!isNaN(Number(a))) {
                                    (t = 'h' === n ? 'http' : n), (r = e.split(n)[1]);
                                    break;
                                }
                                n += a;
                            }
                            return (
                                n === e && (t = n),
                                {
                                    name: t,
                                    version: r
                                }
                            );
                        })(e.nextHopProtocol),
                        n = [];
                    return (n.push(['network.protocol.version', r], ['network.protocol.name', t]), N.Z1) ? [...n, ['http.request.redirect_start', C(e.redirectStart)], ['http.request.fetch_start', C(e.fetchStart)], ['http.request.domain_lookup_start', C(e.domainLookupStart)], ['http.request.domain_lookup_end', C(e.domainLookupEnd)], ['http.request.connect_start', C(e.connectStart)], ['http.request.secure_connection_start', C(e.secureConnectionStart)], ['http.request.connection_end', C(e.connectEnd)], ['http.request.request_start', C(e.requestStart)], ['http.request.response_start', C(e.responseStart)], ['http.request.response_end', C(e.responseEnd)]] : n;
                })(n).forEach((t) => e.setAttribute(...t)),
                    setTimeout(r);
        });
    });
}
function C(e = 0) {
    return ((N.Z1 || performance.timeOrigin) + e) / 1000;
}
function g(e) {
    try {
        return new URL(e, L.m9.location.origin).href;
    } catch (e) {
        return;
    }
}
