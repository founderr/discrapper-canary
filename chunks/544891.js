r.d(n, {
    J9: function () {
        return h.J;
    },
    Jt: function () {
        return U;
    },
    K0: function () {
        return w;
    },
    Pd: function () {
        return I;
    },
    f$: function () {
        return _.f$;
    },
    lg: function () {
        return M;
    },
    sX: function () {
        return _.Hx;
    },
    tn: function () {
        return x;
    },
    yZ: function () {
        return p.H;
    }
});
var i = r(47120);
var a = r(757143);
var s = r(411104);
var o = r(653041);
var l = r(203651),
    u = r.n(l),
    c = r(261470),
    d = r(17089),
    f = r(259443),
    _ = r(343817),
    h = r(357280);
r(380094);
var p = r(817109),
    m = r(413135).Buffer;
function g(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let E = new f.Yd('HTTPUtils'),
    v = new Set([502, 504, 507, 598, 599, 522, 523, 524]);
class I extends Error {
    constructor({ method: e, url: n, ok: r, status: i, body: a, text: s, headers: o }, ...l) {
        let u = n.replace(/\d+/g, 'xxx');
        super(''.concat(e.toUpperCase(), ' ').concat(u, ' [').concat(i, ']'), ...l), g(this, 'method', void 0), g(this, 'url', void 0), g(this, 'ok', void 0), g(this, 'status', void 0), g(this, 'body', void 0), g(this, 'text', void 0), g(this, 'headers', void 0), (this.name = 'HTTPResponseError'), (this.method = e), (this.url = n), (this.ok = r), (this.status = i), (this.body = a), (this.text = s), (this.headers = o);
    }
}
function T(e, n, r, i, a) {
    var s, o, l, d, f;
    let p = u()[e](n.url);
    if ((null != n.onRequestCreated && n.onRequestCreated(p), null != n.query)) {
        let e = n.query;
        if ('object' == typeof e) {
            let n = { ...e };
            Object.keys(n).map((e) => {
                null == n[e] && delete n[e];
            }),
                (e = n);
        }
        p.query(e);
    }
    if (
        (n.body && p.send(n.body),
        null != n.headers && p.set(n.headers),
        null != n.reason && p.set('X-Audit-Log-Reason', encodeURIComponent(n.reason)),
        null === (s = n.attachments) ||
            void 0 === s ||
            s.forEach((e) => {
                p.attach(e.name, e.file, e.filename);
            }),
        null === (o = n.fields) ||
            void 0 === o ||
            o.forEach((e) => {
                p.field(e.name, e.value);
            }),
        null != n.context)
    ) {
        let e = B(n.context);
        null != e && p.set('X-Context-Properties', e);
    }
    null != n.retried && 0 !== n.retried && p.set('X-Failed-Requests', ''.concat(n.retried)),
        null != n.timeout && 0 !== n.timeout && p.timeout(n.timeout),
        n.binary && p.responseType('blob'),
        null != n.onRequestProgress &&
            p.on('progress', (e) => {
                var r;
                null === (r = n.onRequestProgress) || void 0 === r || r.call(n, e);
            });
    let m = () => {
        (n.backoff = null != n.backoff ? n.backoff : new c.Z()), (n.retried = (null != n.retried ? n.retried : 0) + 1), n.backoff.fail(() => k(n.url).then(() => T(e, n, r, i, a)));
    };
    null == P || null === (l = P.prepareRequest) || void 0 === l || l.call(P, p),
        p.ok((e) => null != e.status),
        p.then(
            (s) => {
                var o, l, u;
                if (null != n.retries && n.retries-- > 0 && v.has(s.status)) return m();
                let c = {
                    ok: s.ok,
                    headers: s.headers,
                    body: s.body,
                    text: s.text,
                    status: s.status
                };
                S(n, c);
                let d = !1,
                    f = (s, o) => {
                        let l = {
                            ...n,
                            headers: {
                                ...n.headers,
                                ...s
                            },
                            interceptResponse: o
                        };
                        (d = !0), T(e, l, r, i, a);
                    },
                    p = (e) => {
                        !d &&
                            (i(e),
                            null == a ||
                                a({
                                    ok: !1,
                                    hasErr: !0,
                                    err: e
                                }));
                    };
                if ((null == n ? void 0 : null === (o = n.interceptResponse) || void 0 === o ? void 0 : o.call(n, s, f, p)) !== !0 && (null == P ? void 0 : null === (l = P.interceptResponse) || void 0 === l ? void 0 : l.call(P, s, f, p)) !== !0) {
                    if (s.ok) r(c);
                    else {
                        if (n.oldFormErrors && (null == c ? void 0 : null === (u = c.body) || void 0 === u ? void 0 : u.code) === _.f$) {
                            let { errors: e } = c.body;
                            null != e && (c.body = (0, h.J)(e));
                        }
                        n.rejectWithError
                            ? i(
                                  new I({
                                      method: e,
                                      url: n.url,
                                      ok: c.ok,
                                      status: c.status,
                                      body: c.body,
                                      text: c.text,
                                      headers: c.headers
                                  })
                              )
                            : i(c);
                    }
                    null != a &&
                        a({
                            hasErr: !1,
                            ...c
                        });
                }
            },
            (e) => {
                null != n.retries && n.retries-- > 0 && 'ABORTED' !== e.code
                    ? m()
                    : (S(n),
                      i(e),
                      null != a &&
                          a({
                              ok: !1,
                              hasErr: !0,
                              err: e
                          }));
            }
        ),
        (null === (d = n.signal) || void 0 === d ? void 0 : d.aborted) ? p.abort() : null === (f = n.signal) || void 0 === f || f.addEventListener('abort', () => p.abort(), { once: !0 });
}
let b = new Map();
function y(e) {
    let n = b.get(e);
    if (null == n) {
        E.verbose('rateLimitExpirationHandler: rate limit for', e, 'expired, but record was already removed');
        return;
    }
    let r = n.queue.shift();
    if (null == r) {
        E.verbose('rateLimitExpirationHandler: removing key for', e), b.delete(e);
        return;
    }
    E.verbose('rateLimitExpirationHandler: moving to next record for ', e), r();
}
function S(e, n) {
    let r = b.get(e.url);
    if (null != n && 429 === n.status) {
        var i, a, s;
        let o = (null === (i = n.body) || void 0 === i ? void 0 : i.retry_after) || 5,
            l = Date.now() + 1000 * o;
        if (null != r) {
            if (r.retryAfterTimestamp < l) E.verbose('cleanupRequestEntry: extending rate limit for ', e.url), clearTimeout(r.timeoutId);
            else {
                E.verbose('cleanupRequestEntry: already has rate limit for ', e.url);
                return;
            }
        }
        E.verbose('cleanupRequestEntry: rate limit for '.concat(e.url, ' retry after ').concat(o, ' seconds'));
        let u = setTimeout(() => y(e.url), 1000 * o);
        b.set(e.url, {
            queue: null !== (s = null == r ? void 0 : r.queue) && void 0 !== s ? s : [],
            retryAfterTimestamp: l,
            latestErrorMessage: String(null === (a = n.body) || void 0 === a ? void 0 : a.message),
            timeoutId: u
        });
    } else null != r && r.retryAfterTimestamp < Date.now() && (E.verbose('cleanupRequestEntry: rate limit for ', e.url, 'expired'), y(e.url));
}
let A = (e, n) => {
    let r = Math.round((n.retryAfterTimestamp - Date.now()) / 1000);
    return e({
        status: 429,
        body: {
            message: n.latestErrorMessage,
            retry_after: r
        }
    });
};
function N(e, n, r) {
    return new Promise((i, a) => {
        'string' == typeof n &&
            (n = {
                url: n,
                rejectWithError: !1
            });
        let s = b.get(n.url);
        if (null != s && n.failImmediatelyWhenRateLimited) return A(a, s);
        null != s ? (E.verbose('makeRequest: queueing request for ', n.url), s.queue.push(T.bind(null, e, n, i, a, r))) : T(e, n, i, a, r);
    });
}
let C = N.bind(null, 'get'),
    R = N.bind(null, 'post'),
    O = N.bind(null, 'put'),
    D = N.bind(null, 'patch'),
    L = N.bind(null, 'del'),
    x = {
        get: C,
        post: R,
        put: O,
        patch: D,
        del: L
    };
if (r.g.isServerRendering) {
    let e = (e, n) =>
        Promise.resolve({
            ok: !0,
            status: 200,
            headers: {},
            body: null,
            text: ''
        });
    (C = e), (R = e), (O = e), (D = e), (L = e);
}
function w() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    return 'https:' + window.GLOBAL_ENV.API_ENDPOINT + (e ? '/v'.concat(window.GLOBAL_ENV.API_VERSION) : '');
}
let P = null;
function M(e) {
    P = e;
}
let k = () => Promise.resolve();
function U(e) {
    k = e;
}
function B(e) {
    try {
        return m.from(JSON.stringify(e)).toString('base64');
    } catch (e) {
        return null;
    }
}
