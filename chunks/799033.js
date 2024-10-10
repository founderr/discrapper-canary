r.d(t, {
    L7: function () {
        return D;
    },
    k3: function () {
        return S;
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
    I = r(789112),
    u = r(263449),
    l = r(305625),
    R = r(64685),
    A = r(873567),
    T = r(101284),
    N = r(886115),
    d = r(370541),
    O = r(285883),
    p = r(163162);
let f = new WeakMap(),
    L = new Map(),
    S = {
        traceFetch: !0,
        traceXHR: !0,
        enableHTTPTimings: !0
    };
function D(e, t) {
    let {
            traceFetch: r,
            traceXHR: a,
            shouldCreateSpanForRequest: T,
            enableHTTPTimings: D,
            tracePropagationTargets: C
        } = {
            traceFetch: S.traceFetch,
            traceXHR: S.traceXHR,
            ...t
        },
        M = 'function' == typeof T ? T : (e) => !0,
        P = (e) =>
            (function (e, t) {
                let r = p.m9.location && p.m9.location.href;
                if (r) {
                    let n, a;
                    try {
                        (n = new URL(e, r)), (a = new URL(r).origin);
                    } catch (e) {
                        return !1;
                    }
                    let _ = n.origin === a;
                    return t ? (0, N.U0)(n.toString(), t) || (_ && (0, N.U0)(n.pathname, t)) : _;
                }
                {
                    let r = !!e.match(/^\/(?!\/)/);
                    return t ? (0, N.U0)(e, t) : r;
                }
            })(e, C),
        U = {};
    r &&
        (e.addEventProcessor(
            (e) => (
                'transaction' === e.type &&
                    e.spans &&
                    e.spans.forEach((e) => {
                        if ('http.client' === e.op) {
                            let t = L.get(e.span_id);
                            t && ((e.timestamp = t / 1000), L.delete(e.span_id));
                        }
                    }),
                e
            )
        ),
        (0, R.cf)((e) => {
            if (e.response) {
                let t = f.get(e.response);
                t && e.endTimestamp && L.set(t, e.endTimestamp);
            }
        }),
        (0, R.Uf)((e) => {
            let t = (0, _.m)(e, M, P, U);
            if ((e.response && e.fetchData.__span && f.set(e.response, e.fetchData.__span), t)) {
                let r = g(e.fetchData.url),
                    n = r ? (0, A.en)(r).host : void 0;
                t.setAttributes({
                    'http.url': r,
                    'server.address': n
                });
            }
            D && t && h(t);
        })),
        a &&
            (0, n.UK)((e) => {
                let t = (function (e, t, r, a) {
                    let _ = e.xhr,
                        R = _ && _[n.xU];
                    if (!_ || _.__sentry_own_request__ || !R) return;
                    let T = (0, i.z)() && t(R.url);
                    if (e.endTimestamp && T) {
                        let e = _.__sentry_xhr_span_id__;
                        if (!e) return;
                        let t = a[e];
                        t && void 0 !== R.status_code && ((0, E.Q0)(t, R.status_code), t.end(), delete a[e]);
                        return;
                    }
                    let N = g(R.url),
                        p = N ? (0, A.en)(N).host : void 0,
                        f = !!(0, o.HN)(),
                        L =
                            T && f
                                ? (0, c.qp)({
                                      name: `${R.method} ${R.url}`,
                                      attributes: {
                                          type: 'xhr',
                                          'http.method': R.method,
                                          'http.url': N,
                                          url: R.url,
                                          'server.address': p,
                                          [s.S3]: 'auto.http.browser',
                                          [s.$J]: 'http.client'
                                      }
                                  })
                                : new I.b();
                    (_.__sentry_xhr_span_id__ = L.spanContext().spanId), (a[_.__sentry_xhr_span_id__] = L);
                    let S = (0, u.s3)();
                    return (
                        _.setRequestHeader &&
                            r(R.url) &&
                            S &&
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
                                        e.setRequestHeader('sentry-trace', t), r && e.setRequestHeader(O.bU, r);
                                    } catch (e) {}
                                })(e, s, (0, O.IQ)(c || (r ? (0, l.jC)(r) : (0, l._l)(a, t))));
                            })(_, S, (0, i.z)() && f ? L : void 0),
                        L
                    );
                })(e, M, P, U);
                D && t && h(t);
            });
}
function h(e) {
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
                    return (n.push(['network.protocol.version', r], ['network.protocol.name', t]), T.Z1) ? [...n, ['http.request.redirect_start', C(e.redirectStart)], ['http.request.fetch_start', C(e.fetchStart)], ['http.request.domain_lookup_start', C(e.domainLookupStart)], ['http.request.domain_lookup_end', C(e.domainLookupEnd)], ['http.request.connect_start', C(e.connectStart)], ['http.request.secure_connection_start', C(e.secureConnectionStart)], ['http.request.connection_end', C(e.connectEnd)], ['http.request.request_start', C(e.requestStart)], ['http.request.response_start', C(e.responseStart)], ['http.request.response_end', C(e.responseEnd)]] : n;
                })(n).forEach((t) => e.setAttribute(...t)),
                    setTimeout(r);
        });
    });
}
function C(e = 0) {
    return ((T.Z1 || performance.timeOrigin) + e) / 1000;
}
function g(e) {
    try {
        return new URL(e, p.m9.location.origin).href;
    } catch (e) {
        return;
    }
}
