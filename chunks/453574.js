r.d(t, {
    l: function () {
        return R;
    }
});
var n = r(157079),
    a = r(151122),
    _ = r(233517),
    o = r(263449),
    i = r(946471),
    E = r(622916),
    c = r(694043),
    s = r(64685),
    l = r(899517),
    u = r(394798),
    I = r(454463);
let R = (0, a._I)((e = {}) => {
    let t = {
        failedRequestStatusCodes: [[500, 599]],
        failedRequestTargets: [/.*/],
        ...e
    };
    return {
        name: 'HttpClient',
        setup(e) {
            (function (e, t) {
                if (!!(0, c.t$)())
                    (0, s.Uf)((r) => {
                        if ((0, o.s3)() !== e) return;
                        let { response: n, args: a } = r,
                            [i, E] = a;
                        if (!!n)
                            !(function (e, t, r, n) {
                                if (T(e, r.status, r.url)) {
                                    let e, a, o, i;
                                    let E = (function (e, t) {
                                        return (!t && e instanceof Request) || (e instanceof Request && e.bodyUsed) ? e : new Request(e, t);
                                    })(t, n);
                                    L() && (([e, o] = A('Cookie', E)), ([a, i] = A('Set-Cookie', r)));
                                    let c = d({
                                        url: E.url,
                                        method: E.method,
                                        status: r.status,
                                        requestHeaders: e,
                                        responseHeaders: a,
                                        requestCookies: o,
                                        responseCookies: i
                                    });
                                    (0, _.eN)(c);
                                }
                            })(t, i, n, E);
                    });
            })(e, t),
                (function (e, t) {
                    if ('XMLHttpRequest' in l.n)
                        (0, n.UK)((r) => {
                            if ((0, o.s3)() !== e) return;
                            let a = r.xhr,
                                i = a[n.xU];
                            if (!i) return;
                            let { method: c, request_headers: s } = i;
                            try {
                                !(function (e, t, r, n) {
                                    if (T(e, t.status, t.responseURL)) {
                                        let e, a, o;
                                        if (L()) {
                                            try {
                                                let e = t.getResponseHeader('Set-Cookie') || t.getResponseHeader('set-cookie') || void 0;
                                                e && (a = N(e));
                                            } catch (e) {
                                                I.X && E.kg.log('Could not extract cookies from response headers');
                                            }
                                            try {
                                                o = (function (e) {
                                                    let t = e.getAllResponseHeaders();
                                                    return t
                                                        ? t.split('\r\n').reduce((e, t) => {
                                                              let [r, n] = t.split(': ');
                                                              return r && n && (e[r] = n), e;
                                                          }, {})
                                                        : {};
                                                })(t);
                                            } catch (e) {
                                                I.X && E.kg.log('Could not extract headers from response');
                                            }
                                            e = n;
                                        }
                                        let i = d({
                                            url: t.responseURL,
                                            method: r,
                                            status: t.status,
                                            requestHeaders: e,
                                            responseHeaders: o,
                                            responseCookies: a
                                        });
                                        (0, _.eN)(i);
                                    }
                                })(t, a, c, s);
                            } catch (e) {
                                I.X && E.kg.warn('Error while extracting response event form XHR response', e);
                            }
                        });
                })(e, t);
        }
    };
});
function A(e, t) {
    let r;
    let n = (function (e) {
        let t = {};
        return (
            e.forEach((e, r) => {
                t[r] = e;
            }),
            t
        );
    })(t.headers);
    try {
        let t = n[e] || n[e.toLowerCase()] || void 0;
        t && (r = N(t));
    } catch (t) {
        I.X && E.kg.log(`Could not extract cookies from header ${e}`);
    }
    return [n, r];
}
function N(e) {
    return e.split('; ').reduce((e, t) => {
        let [r, n] = t.split('=');
        return r && n && (e[r] = n), e;
    }, {});
}
function T(e, t, r) {
    var n, a, _, E;
    return (n = e.failedRequestStatusCodes), (a = t), n.some((e) => ('number' == typeof e ? e === a : a >= e[0] && a <= e[1])) && ((_ = e.failedRequestTargets), (E = r), _.some((e) => ('string' == typeof e ? E.includes(e) : e.test(E)))) && !(0, i.W)(r, (0, o.s3)());
}
function d(e) {
    let t = `HTTP Client Error with status code: ${e.status}`,
        r = {
            message: t,
            exception: {
                values: [
                    {
                        type: 'Error',
                        value: t
                    }
                ]
            },
            request: {
                url: e.url,
                method: e.method,
                headers: e.requestHeaders,
                cookies: e.requestCookies
            },
            contexts: {
                response: {
                    status_code: e.status,
                    headers: e.responseHeaders,
                    cookies: e.responseCookies,
                    body_size: (function (e) {
                        if (e) {
                            let t = e['Content-Length'] || e['content-length'];
                            if (t) return parseInt(t, 10);
                        }
                    })(e.responseHeaders)
                }
            }
        };
    return (
        (0, u.EG)(r, {
            type: 'http.client',
            handled: !1
        }),
        r
    );
}
function L() {
    let e = (0, o.s3)();
    return !!e && !!e.getOptions().sendDefaultPii;
}
