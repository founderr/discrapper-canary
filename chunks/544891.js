n.d(t, {
    J9: function () {
        return l.J;
    },
    Jt: function () {
        return L;
    },
    K0: function () {
        return C;
    },
    Pd: function () {
        return p;
    },
    f$: function () {
        return o.f$;
    },
    lg: function () {
        return O;
    },
    sX: function () {
        return o.Hx;
    },
    tn: function () {
        return N;
    },
    yZ: function () {
        return u.H;
    }
}),
    n(47120),
    n(757143),
    n(411104),
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
function d(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let f = new s.Yd('HTTPUtils'),
    _ = new Set([502, 504, 507, 598, 599, 522, 523, 524]);
class p extends Error {
    constructor({ method: e, url: t, ok: n, status: r, body: i, text: a, headers: s }, ...o) {
        let l = t.replace(/\d+/g, 'xxx');
        super(''.concat(e.toUpperCase(), ' ').concat(l, ' [').concat(r, ']'), ...o), d(this, 'method', void 0), d(this, 'url', void 0), d(this, 'ok', void 0), d(this, 'status', void 0), d(this, 'body', void 0), d(this, 'text', void 0), d(this, 'headers', void 0), (this.name = 'HTTPResponseError'), (this.method = e), (this.url = t), (this.ok = n), (this.status = r), (this.body = i), (this.text = a), (this.headers = s);
    }
}
function h(e, t, n, r, s) {
    var u, d, f, m, g;
    let v = i()[e](t.url);
    if ((null != t.onRequestCreated && t.onRequestCreated(v), null != t.query)) {
        let e = t.query;
        if ('object' == typeof e) {
            let t = { ...e };
            Object.keys(t).map((e) => {
                null == t[e] && delete t[e];
            }),
                (e = t);
        }
        v.query(e);
    }
    if (
        (t.body && v.send(t.body),
        null != t.headers && v.set(t.headers),
        null != t.reason && v.set('X-Audit-Log-Reason', encodeURIComponent(t.reason)),
        null === (u = t.attachments) ||
            void 0 === u ||
            u.forEach((e) => {
                v.attach(e.name, e.file, e.filename);
            }),
        null === (d = t.fields) ||
            void 0 === d ||
            d.forEach((e) => {
                v.field(e.name, e.value);
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
        null != e && v.set('X-Context-Properties', e);
    }
    null != t.retried && 0 !== t.retried && v.set('X-Failed-Requests', ''.concat(t.retried)),
        null != t.timeout && 0 !== t.timeout && v.timeout(t.timeout),
        t.binary && v.responseType('blob'),
        null != t.onRequestProgress &&
            v.on('progress', (e) => {
                var n;
                null === (n = t.onRequestProgress) || void 0 === n || n.call(t, e);
            });
    let I = () => {
        (t.backoff = null != t.backoff ? t.backoff : new a.Z()), (t.retried = (null != t.retried ? t.retried : 0) + 1), t.backoff.fail(() => D(t.url).then(() => h(e, t, n, r, s)));
    };
    null == R || null === (f = R.prepareRequest) || void 0 === f || f.call(R, v),
        v.ok((e) => null != e.status),
        v.then(
            (i) => {
                var a, u, c;
                if (null != t.retries && t.retries-- > 0 && _.has(i.status)) return I();
                let d = {
                    ok: i.ok,
                    headers: i.headers,
                    body: i.body,
                    text: i.text,
                    status: i.status
                };
                E(t, d);
                let f = !1,
                    m = (i, a) => {
                        let o = {
                            ...t,
                            headers: {
                                ...t.headers,
                                ...i
                            },
                            interceptResponse: a
                        };
                        (f = !0), h(e, o, n, r, s);
                    },
                    g = (e) => {
                        !f &&
                            (r(e),
                            null == s ||
                                s({
                                    ok: !1,
                                    hasErr: !0,
                                    err: e
                                }));
                    };
                if ((null == t ? void 0 : null === (a = t.interceptResponse) || void 0 === a ? void 0 : a.call(t, i, m, g)) !== !0 && (null == R ? void 0 : null === (u = R.interceptResponse) || void 0 === u ? void 0 : u.call(R, i, m, g)) !== !0) {
                    if (i.ok) n(d);
                    else {
                        if (t.oldFormErrors && (null == d ? void 0 : null === (c = d.body) || void 0 === c ? void 0 : c.code) === o.f$) {
                            let { errors: e } = d.body;
                            null != e && (d.body = (0, l.J)(e));
                        }
                        t.rejectWithError
                            ? r(
                                  new p({
                                      method: e,
                                      url: t.url,
                                      ok: d.ok,
                                      status: d.status,
                                      body: d.body,
                                      text: d.text,
                                      headers: d.headers
                                  })
                              )
                            : r(d);
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
                    ? I()
                    : (E(t),
                      r(e),
                      null != s &&
                          s({
                              ok: !1,
                              hasErr: !0,
                              err: e
                          }));
            }
        ),
        (null === (m = t.signal) || void 0 === m ? void 0 : m.aborted) ? v.abort() : null === (g = t.signal) || void 0 === g || g.addEventListener('abort', () => v.abort(), { once: !0 });
}
let m = new Map();
function g(e) {
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
function E(e, t) {
    let n = m.get(e.url);
    if (null != t && 429 === t.status) {
        var r, i, a;
        let s = (null === (r = t.body) || void 0 === r ? void 0 : r.retry_after) || 5,
            o = Date.now() + 1000 * s;
        if (null != n) {
            if (n.retryAfterTimestamp < o) f.verbose('cleanupRequestEntry: extending rate limit for ', e.url), clearTimeout(n.timeoutId);
            else {
                f.verbose('cleanupRequestEntry: already has rate limit for ', e.url);
                return;
            }
        }
        f.verbose('cleanupRequestEntry: rate limit for '.concat(e.url, ' retry after ').concat(s, ' seconds'));
        let l = setTimeout(() => g(e.url), 1000 * s);
        m.set(e.url, {
            queue: null !== (a = null == n ? void 0 : n.queue) && void 0 !== a ? a : [],
            retryAfterTimestamp: o,
            latestErrorMessage: String(null === (i = t.body) || void 0 === i ? void 0 : i.message),
            timeoutId: l
        });
    } else null != n && n.retryAfterTimestamp < Date.now() && (f.verbose('cleanupRequestEntry: rate limit for ', e.url, 'expired'), g(e.url));
}
let v = (e, t) => {
    let n = Math.round((t.retryAfterTimestamp - Date.now()) / 1000);
    return e({
        status: 429,
        body: {
            message: t.latestErrorMessage,
            retry_after: n
        }
    });
};
function I(e, t, n) {
    return new Promise((r, i) => {
        'string' == typeof t &&
            (t = {
                url: t,
                rejectWithError: !1
            });
        let a = m.get(t.url);
        if (null != a && t.failImmediatelyWhenRateLimited) return v(i, a);
        null != a ? (f.verbose('makeRequest: queueing request for ', t.url), a.queue.push(h.bind(null, e, t, r, i, n))) : h(e, t, r, i, n);
    });
}
let T = I.bind(null, 'get'),
    b = I.bind(null, 'post'),
    S = I.bind(null, 'put'),
    y = I.bind(null, 'patch'),
    A = I.bind(null, 'del'),
    N = {
        get: T,
        post: b,
        put: S,
        patch: y,
        del: A
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
    (T = e), (b = e), (S = e), (y = e), (A = e);
}
function C() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    return 'https:' + window.GLOBAL_ENV.API_ENDPOINT + (e ? '/v'.concat(window.GLOBAL_ENV.API_VERSION) : '');
}
let R = null;
function O(e) {
    R = e;
}
let D = () => Promise.resolve();
function L(e) {
    D = e;
}
