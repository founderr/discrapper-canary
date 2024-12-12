r.d(t, {
    L7: function () {
        return D;
    },
    k3: function () {
        return h;
    }
});
var a = r(157079),
    n = r(501684),
    _ = r(868497),
    o = r(696486),
    E = r(73453),
    i = r(793373),
    c = r(152228),
    s = r(988097),
    l = r(789112),
    I = r(263449),
    u = r(305625),
    R = r(64685),
    A = r(873567),
    T = r(101284),
    N = r(886115),
    d = r(370541),
    f = r(285883),
    O = r(163162);
let L = new WeakMap(),
    p = new Map(),
    h = {
        traceFetch: !0,
        traceXHR: !0,
        enableHTTPTimings: !0
    };
function D(e, t) {
    let {
            traceFetch: r,
            traceXHR: n,
            shouldCreateSpanForRequest: T,
            enableHTTPTimings: D,
            tracePropagationTargets: C
        } = {
            traceFetch: h.traceFetch,
            traceXHR: h.traceXHR,
            ...t
        },
        g = 'function' == typeof T ? T : (e) => !0,
        U = (e) =>
            (function (e, t) {
                let r = O.m9.location && O.m9.location.href;
                if (r) {
                    let a, n;
                    try {
                        (a = new URL(e, r)), (n = new URL(r).origin);
                    } catch (e) {
                        return !1;
                    }
                    let _ = a.origin === n;
                    return t ? (0, N.U0)(a.toString(), t) || (_ && (0, N.U0)(a.pathname, t)) : _;
                }
                {
                    let r = !!e.match(/^\/(?!\/)/);
                    return t ? (0, N.U0)(e, t) : r;
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
                let t = L.get(e.response);
                t && e.endTimestamp && p.set(t, e.endTimestamp);
            }
        }),
        (0, R.Uf)((e) => {
            let t = (0, _.m)(e, g, U, M);
            if ((e.response && e.fetchData.__span && L.set(e.response, e.fetchData.__span), t)) {
                let r = P(e.fetchData.url),
                    a = r ? (0, A.en)(r).host : void 0;
                t.setAttributes({
                    'http.url': r,
                    'server.address': a
                });
            }
            D && t && S(t);
        })),
        n &&
            (0, a.UK)((e) => {
                let t = (function (e, t, r, n) {
                    let _ = e.xhr,
                        R = _ && _[a.xU];
                    if (!_ || _.__sentry_own_request__ || !R) return;
                    let T = (0, E.z)() && t(R.url);
                    if (e.endTimestamp && T) {
                        let e = _.__sentry_xhr_span_id__;
                        if (!e) return;
                        let t = n[e];
                        t && void 0 !== R.status_code && ((0, i.Q0)(t, R.status_code), t.end(), delete n[e]);
                        return;
                    }
                    let N = P(R.url),
                        O = N ? (0, A.en)(N).host : void 0,
                        L = !!(0, o.HN)(),
                        p =
                            T && L
                                ? (0, c.qp)({
                                      name: `${R.method} ${R.url}`,
                                      attributes: {
                                          type: 'xhr',
                                          'http.method': R.method,
                                          'http.url': N,
                                          url: R.url,
                                          'server.address': O,
                                          [s.S3]: 'auto.http.browser',
                                          [s.$J]: 'http.client'
                                      }
                                  })
                                : new l.b();
                    (_.__sentry_xhr_span_id__ = p.spanContext().spanId), (n[_.__sentry_xhr_span_id__] = p);
                    let h = (0, I.s3)();
                    return (
                        _.setRequestHeader &&
                            r(R.url) &&
                            h &&
                            (function (e, t, r) {
                                let a = (0, I.nZ)(),
                                    {
                                        traceId: n,
                                        spanId: _,
                                        sampled: i,
                                        dsc: c
                                    } = {
                                        ...(0, I.aF)().getPropagationContext(),
                                        ...a.getPropagationContext()
                                    },
                                    s = r && (0, E.z)() ? (0, o.Hb)(r) : (0, d.$p)(n, _, i);
                                (function (e, t, r) {
                                    try {
                                        e.setRequestHeader('sentry-trace', t), r && e.setRequestHeader(f.bU, r);
                                    } catch (e) {}
                                })(e, s, (0, f.IQ)(c || (r ? (0, u.jC)(r) : (0, u._l)(n, t))));
                            })(_, h, (0, E.z)() && L ? p : void 0),
                        p
                    );
                })(e, g, U, M);
                D && t && S(t);
            });
}
function S(e) {
    let { url: t } = (0, o.XU)(e).data || {};
    if (!t || 'string' != typeof t) return;
    let r = (0, n._j)('resource', ({ entries: a }) => {
        a.forEach((a) => {
            var n;
            if ('resource' === (n = a).entryType && 'initiatorType' in n && 'string' == typeof n.nextHopProtocol && ('fetch' === n.initiatorType || 'xmlhttprequest' === n.initiatorType) && a.name.endsWith(t))
                (function (e) {
                    let { name: t, version: r } = (function (e) {
                            let t = 'unknown',
                                r = 'unknown',
                                a = '';
                            for (let n of e) {
                                if ('/' === n) {
                                    [t, r] = e.split('/');
                                    break;
                                }
                                if (!isNaN(Number(n))) {
                                    (t = 'h' === a ? 'http' : a), (r = e.split(a)[1]);
                                    break;
                                }
                                a += n;
                            }
                            return (
                                a === e && (t = a),
                                {
                                    name: t,
                                    version: r
                                }
                            );
                        })(e.nextHopProtocol),
                        a = [];
                    return (a.push(['network.protocol.version', r], ['network.protocol.name', t]), T.Z1) ? [...a, ['http.request.redirect_start', C(e.redirectStart)], ['http.request.fetch_start', C(e.fetchStart)], ['http.request.domain_lookup_start', C(e.domainLookupStart)], ['http.request.domain_lookup_end', C(e.domainLookupEnd)], ['http.request.connect_start', C(e.connectStart)], ['http.request.secure_connection_start', C(e.secureConnectionStart)], ['http.request.connection_end', C(e.connectEnd)], ['http.request.request_start', C(e.requestStart)], ['http.request.response_start', C(e.responseStart)], ['http.request.response_end', C(e.responseEnd)]] : a;
                })(a).forEach((t) => e.setAttribute(...t)),
                    setTimeout(r);
        });
    });
}
function C(e = 0) {
    return ((T.Z1 || performance.timeOrigin) + e) / 1000;
}
function P(e) {
    try {
        return new URL(e, O.m9.location.origin).href;
    } catch (e) {
        return;
    }
}
