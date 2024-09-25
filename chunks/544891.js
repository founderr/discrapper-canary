n.d(t, {
    J9: function () {
        return d.J;
    },
    Jt: function () {
        return M;
    },
    K0: function () {
        return y;
    },
    f$: function () {
        return c.f$;
    },
    lg: function () {
        return L;
    },
    sX: function () {
        return c.Hx;
    },
    tn: function () {
        return C;
    },
    yZ: function () {
        return _.H;
    }
});
var r = n(47120);
var i = n(653041);
var a = n(203651),
    o = n.n(a),
    s = n(261470),
    l = n(17089),
    u = n(259443),
    c = n(343817),
    d = n(357280);
n(380094);
var _ = n(817109),
    E = n(413135).Buffer;
let f = new u.Y('HTTPUtils'),
    h = new Set([502, 504, 507, 598, 599, 522, 523, 524]);
function p(e, t, n, r, i) {
    var a, l, u, _, E;
    let f = o()[e](t.url);
    if ((null != t.onRequestCreated && t.onRequestCreated(f), null != t.query)) {
        let e = t.query;
        if ('object' == typeof e) {
            let t = { ...e };
            Object.keys(t).map((e) => {
                null == t[e] && delete t[e];
            }),
                (e = t);
        }
        f.query(e);
    }
    if (
        (t.body && f.send(t.body),
        null != t.headers && f.set(t.headers),
        null != t.reason && f.set('X-Audit-Log-Reason', encodeURIComponent(t.reason)),
        null === (a = t.attachments) ||
            void 0 === a ||
            a.forEach((e) => {
                f.attach(e.name, e.file, e.filename);
            }),
        null === (l = t.fields) ||
            void 0 === l ||
            l.forEach((e) => {
                f.field(e.name, e.value);
            }),
        null != t.context)
    ) {
        let e = P(t.context);
        null != e && f.set('X-Context-Properties', e);
    }
    null != t.retried && 0 !== t.retried && f.set('X-Failed-Requests', ''.concat(t.retried)),
        null != t.timeout && 0 !== t.timeout && f.timeout(t.timeout),
        t.binary && f.responseType('blob'),
        null != t.onRequestProgress &&
            f.on('progress', (e) => {
                var n;
                null === (n = t.onRequestProgress) || void 0 === n || n.call(t, e);
            });
    let m = () => {
        (t.backoff = null != t.backoff ? t.backoff : new s.Z()), (t.retried = (null != t.retried ? t.retried : 0) + 1), t.backoff.fail(() => D(t.url).then(() => p(e, t, n, r, i)));
    };
    null == b || null === (u = b.prepareRequest) || void 0 === u || u.call(b, f),
        f.ok((e) => null != e.status),
        f.then(
            (a) => {
                var o, s, l;
                if (null != t.retries && t.retries-- > 0 && h.has(a.status)) return m();
                let u = {
                    ok: a.ok,
                    headers: a.headers,
                    body: a.body,
                    text: a.text,
                    status: a.status
                };
                T(t, u);
                let _ = !1,
                    E = (a, o) => {
                        let s = {
                            ...t,
                            headers: {
                                ...t.headers,
                                ...a
                            },
                            interceptResponse: o
                        };
                        (_ = !0), p(e, s, n, r, i);
                    },
                    f = (e) => {
                        !_ &&
                            (r(e),
                            null == i ||
                                i({
                                    ok: !1,
                                    hasErr: !0,
                                    err: e
                                }));
                    };
                if ((null == t ? void 0 : null === (o = t.interceptResponse) || void 0 === o ? void 0 : o.call(t, a, E, f)) !== !0 && (null == b ? void 0 : null === (s = b.interceptResponse) || void 0 === s ? void 0 : s.call(b, a, E, f)) !== !0) {
                    if (a.ok) n(u);
                    else {
                        if (t.oldFormErrors && (null == u ? void 0 : null === (l = u.body) || void 0 === l ? void 0 : l.code) === c.f$) {
                            let { errors: e } = u.body;
                            null != e && (u.body = (0, d.J)(e));
                        }
                        r(u);
                    }
                    null != i &&
                        i({
                            hasErr: !1,
                            ...u
                        });
                }
            },
            (e) => {
                null != t.retries && t.retries-- > 0 && 'ABORTED' !== e.code
                    ? m()
                    : (T(t),
                      r(e),
                      null != i &&
                          i({
                              ok: !1,
                              hasErr: !0,
                              err: e
                          }));
            }
        ),
        (null === (_ = t.signal) || void 0 === _ ? void 0 : _.aborted) ? f.abort() : null === (E = t.signal) || void 0 === E || E.addEventListener('abort', () => f.abort(), { once: !0 });
}
let m = new Map();
function I(e) {
    let t = m.get(e);
    if (null == t) {
        f.verbose('rateLimitExpirationHandler: rate limit for', e, 'expired, but record was already removed');
        return;
    }
    let n = t.queue.shift();
    if (null == n) {
        f.verbose('rateLimitExpirationHandler: removing key for', e), m.delete(e);
        return;
    }
    f.verbose('rateLimitExpirationHandler: moving to next record for ', e), n();
}
function T(e, t) {
    let n = m.get(e.url);
    if (null != t && 429 === t.status) {
        var r, i, a;
        let o = (null === (r = t.body) || void 0 === r ? void 0 : r.retry_after) || 5,
            s = Date.now() + 1000 * o;
        if (null != n) {
            if (n.retryAfterTimestamp < s) f.verbose('cleanupRequestEntry: extending rate limit for ', e.url), clearTimeout(n.timeoutId);
            else {
                f.verbose('cleanupRequestEntry: already has rate limit for ', e.url);
                return;
            }
        }
        f.verbose('cleanupRequestEntry: rate limit for '.concat(e.url, ' retry after ').concat(o, ' seconds'));
        let l = setTimeout(() => I(e.url), 1000 * o);
        m.set(e.url, {
            queue: null !== (a = null == n ? void 0 : n.queue) && void 0 !== a ? a : [],
            retryAfterTimestamp: s,
            latestErrorMessage: String(null === (i = t.body) || void 0 === i ? void 0 : i.message),
            timeoutId: l
        });
    } else null != n && n.retryAfterTimestamp < Date.now() && (f.verbose('cleanupRequestEntry: rate limit for ', e.url, 'expired'), I(e.url));
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
function S(e, t, n) {
    return new Promise((r, i) => {
        'string' == typeof t && (t = { url: t });
        let a = m.get(t.url);
        if (null != a && t.failImmediatelyWhenRateLimited) return g(i, a);
        null != a ? (f.verbose('makeRequest: queueing request for ', t.url), a.queue.push(p.bind(null, e, t, r, i, n))) : p(e, t, r, i, n);
    });
}
let A = S.bind(null, 'get'),
    v = S.bind(null, 'post'),
    N = S.bind(null, 'put'),
    O = S.bind(null, 'patch'),
    R = S.bind(null, 'del'),
    C = {
        get: A,
        post: v,
        put: N,
        patch: O,
        del: R
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
    (A = e), (v = e), (N = e), (O = e), (R = e);
}
function y() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    return 'https:' + window.GLOBAL_ENV.API_ENDPOINT + (e ? '/v'.concat(window.GLOBAL_ENV.API_VERSION) : '');
}
let b = null;
function L(e) {
    b = e;
}
let D = () => Promise.resolve();
function M(e) {
    D = e;
}
function P(e) {
    try {
        return E.from(JSON.stringify(e)).toString('base64');
    } catch (e) {
        return null;
    }
}
