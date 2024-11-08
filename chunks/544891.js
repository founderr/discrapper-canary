n.d(t, {
    J9: function () {
        return l.J;
    },
    Jt: function () {
        return O;
    },
    K0: function () {
        return A;
    },
    f$: function () {
        return o.f$;
    },
    lg: function () {
        return C;
    },
    sX: function () {
        return o.Hx;
    },
    tn: function () {
        return y;
    },
    yZ: function () {
        return u.H;
    }
}),
    n(47120),
    n(653041);
var r = n(203651),
    i = n.n(r),
    a = n(261470);
n(17089);
var s = n(259443),
    o = n(343817),
    l = n(357280);
n(380094);
var u = n(817109),
    c = n(413135).Buffer;
let d = new s.Yd('HTTPUtils'),
    f = new Set([502, 504, 507, 598, 599, 522, 523, 524]);
function _(e, t, n, r, s) {
    var u, d, h, p, g;
    let E = i()[e](t.url);
    if ((null != t.onRequestCreated && t.onRequestCreated(E), null != t.query)) {
        let e = t.query;
        if ('object' == typeof e) {
            let t = { ...e };
            Object.keys(t).map((e) => {
                null == t[e] && delete t[e];
            }),
                (e = t);
        }
        E.query(e);
    }
    if (
        (t.body && E.send(t.body),
        null != t.headers && E.set(t.headers),
        null != t.reason && E.set('X-Audit-Log-Reason', encodeURIComponent(t.reason)),
        null === (u = t.attachments) ||
            void 0 === u ||
            u.forEach((e) => {
                E.attach(e.name, e.file, e.filename);
            }),
        null === (d = t.fields) ||
            void 0 === d ||
            d.forEach((e) => {
                E.field(e.name, e.value);
            }),
        null != t.context)
    ) {
        let e = (function (e) {
            try {
                return c.from(JSON.stringify(e)).toString('base64');
            } catch (e) {
                return null;
            }
        })(t.context);
        null != e && E.set('X-Context-Properties', e);
    }
    null != t.retried && 0 !== t.retried && E.set('X-Failed-Requests', ''.concat(t.retried)),
        null != t.timeout && 0 !== t.timeout && E.timeout(t.timeout),
        t.binary && E.responseType('blob'),
        null != t.onRequestProgress &&
            E.on('progress', (e) => {
                var n;
                null === (n = t.onRequestProgress) || void 0 === n || n.call(t, e);
            });
    let v = () => {
        (t.backoff = null != t.backoff ? t.backoff : new a.Z()), (t.retried = (null != t.retried ? t.retried : 0) + 1), t.backoff.fail(() => R(t.url).then(() => _(e, t, n, r, s)));
    };
    null == N || null === (h = N.prepareRequest) || void 0 === h || h.call(N, E),
        E.ok((e) => null != e.status),
        E.then(
            (i) => {
                var a, u, c;
                if (null != t.retries && t.retries-- > 0 && f.has(i.status)) return v();
                let d = {
                    ok: i.ok,
                    headers: i.headers,
                    body: i.body,
                    text: i.text,
                    status: i.status
                };
                m(t, d);
                let h = !1,
                    p = (i, a) => {
                        let o = {
                            ...t,
                            headers: {
                                ...t.headers,
                                ...i
                            },
                            interceptResponse: a
                        };
                        (h = !0), _(e, o, n, r, s);
                    },
                    g = (e) => {
                        !h &&
                            (r(e),
                            null == s ||
                                s({
                                    ok: !1,
                                    hasErr: !0,
                                    err: e
                                }));
                    };
                if ((null == t ? void 0 : null === (a = t.interceptResponse) || void 0 === a ? void 0 : a.call(t, i, p, g)) !== !0 && (null == N ? void 0 : null === (u = N.interceptResponse) || void 0 === u ? void 0 : u.call(N, i, p, g)) !== !0) {
                    if (i.ok) n(d);
                    else {
                        if (t.oldFormErrors && (null == d ? void 0 : null === (c = d.body) || void 0 === c ? void 0 : c.code) === o.f$) {
                            let { errors: e } = d.body;
                            null != e && (d.body = (0, l.J)(e));
                        }
                        r(d);
                    }
                    null != s &&
                        s({
                            hasErr: !1,
                            ...d
                        });
                }
            },
            (e) => {
                null != t.retries && t.retries-- > 0 && 'ABORTED' !== e.code
                    ? v()
                    : (m(t),
                      r(e),
                      null != s &&
                          s({
                              ok: !1,
                              hasErr: !0,
                              err: e
                          }));
            }
        ),
        (null === (p = t.signal) || void 0 === p ? void 0 : p.aborted) ? E.abort() : null === (g = t.signal) || void 0 === g || g.addEventListener('abort', () => E.abort(), { once: !0 });
}
let h = new Map();
function p(e) {
    let t = h.get(e);
    if (null == t) {
        d.verbose('rateLimitExpirationHandler: rate limit for', e, 'expired, but record was already removed');
        return;
    }
    let n = t.queue.shift();
    if (null == n) {
        d.verbose('rateLimitExpirationHandler: removing key for', e), h.delete(e);
        return;
    }
    d.verbose('rateLimitExpirationHandler: moving to next record for ', e), n();
}
function m(e, t) {
    let n = h.get(e.url);
    if (null != t && 429 === t.status) {
        var r, i, a;
        let s = (null === (r = t.body) || void 0 === r ? void 0 : r.retry_after) || 5,
            o = Date.now() + 1000 * s;
        if (null != n) {
            if (n.retryAfterTimestamp < o) d.verbose('cleanupRequestEntry: extending rate limit for ', e.url), clearTimeout(n.timeoutId);
            else {
                d.verbose('cleanupRequestEntry: already has rate limit for ', e.url);
                return;
            }
        }
        d.verbose('cleanupRequestEntry: rate limit for '.concat(e.url, ' retry after ').concat(s, ' seconds'));
        let l = setTimeout(() => p(e.url), 1000 * s);
        h.set(e.url, {
            queue: null !== (a = null == n ? void 0 : n.queue) && void 0 !== a ? a : [],
            retryAfterTimestamp: o,
            latestErrorMessage: String(null === (i = t.body) || void 0 === i ? void 0 : i.message),
            timeoutId: l
        });
    } else null != n && n.retryAfterTimestamp < Date.now() && (d.verbose('cleanupRequestEntry: rate limit for ', e.url, 'expired'), p(e.url));
}
let g = (e, t) => {
    let n = Math.round((t.retryAfterTimestamp - Date.now()) / 1000);
    return e({
        status: 429,
        body: {
            message: t.latestErrorMessage,
            retry_after: n
        }
    });
};
function E(e, t, n) {
    return new Promise((r, i) => {
        'string' == typeof t && (t = { url: t });
        let a = h.get(t.url);
        if (null != a && t.failImmediatelyWhenRateLimited) return g(i, a);
        null != a ? (d.verbose('makeRequest: queueing request for ', t.url), a.queue.push(_.bind(null, e, t, r, i, n))) : _(e, t, r, i, n);
    });
}
let v = E.bind(null, 'get'),
    I = E.bind(null, 'post'),
    S = E.bind(null, 'put'),
    b = E.bind(null, 'patch'),
    T = E.bind(null, 'del'),
    y = {
        get: v,
        post: I,
        put: S,
        patch: b,
        del: T
    };
if (n.g.isServerRendering) {
    let e = (e, t) =>
        Promise.resolve({
            ok: !0,
            status: 200,
            headers: {},
            body: null,
            text: ''
        });
    (v = e), (I = e), (S = e), (b = e), (T = e);
}
function A() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    return 'https:' + window.GLOBAL_ENV.API_ENDPOINT + (e ? '/v'.concat(window.GLOBAL_ENV.API_VERSION) : '');
}
let N = null;
function C(e) {
    N = e;
}
let R = () => Promise.resolve();
function O(e) {
    R = e;
}
