r.d(t, {
    l: function () {
        return R;
    }
});
var n = r(157079),
    a = r(151122),
    _ = r(233517),
    o = r(263449),
    E = r(946471),
    i = r(622916),
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
                            [E, i] = a;
                        if (!!n)
                            !(function (e, t, r, n) {
                                if (T(e, r.status, r.url)) {
                                    let e, a, o, E;
                                    let i = (function (e, t) {
                                        return (!t && e instanceof Request) || (e instanceof Request && e.bodyUsed) ? e : new Request(e, t);
                                    })(t, n);
                                    L() && (([e, o] = N('Cookie', i)), ([a, E] = N('Set-Cookie', r)));
                                    let c = d({
                                        url: i.url,
                                        method: i.method,
                                        status: r.status,
                                        requestHeaders: e,
                                        responseHeaders: a,
                                        requestCookies: o,
                                        responseCookies: E
                                    });
                                    (0, _.eN)(c);
                                }
                            })(t, E, n, i);
                    });
            })(e, t),
                (function (e, t) {
                    if ('XMLHttpRequest' in l.n)
                        (0, n.UK)((r) => {
                            if ((0, o.s3)() !== e) return;
                            let a = r.xhr,
                                E = a[n.xU];
                            if (!E) return;
                            let { method: c, request_headers: s } = E;
                            try {
                                !(function (e, t, r, n) {
                                    if (T(e, t.status, t.responseURL)) {
                                        let e, a, o;
                                        if (L()) {
                                            try {
                                                let e = t.getResponseHeader('Set-Cookie') || t.getResponseHeader('set-cookie') || void 0;
                                                e && (a = A(e));
                                            } catch (e) {
                                                I.X && i.kg.log('Could not extract cookies from response headers');
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
                                                I.X && i.kg.log('Could not extract headers from response');
                                            }
                                            e = n;
                                        }
                                        let E = d({
                                            url: t.responseURL,
                                            method: r,
                                            status: t.status,
                                            requestHeaders: e,
                                            responseHeaders: o,
                                            responseCookies: a
                                        });
                                        (0, _.eN)(E);
                                    }
                                })(t, a, c, s);
                            } catch (e) {
                                I.X && i.kg.warn('Error while extracting response event form XHR response', e);
                            }
                        });
                })(e, t);
        }
    };
});
function N(e, t) {
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
        t && (r = A(t));
    } catch (t) {
        I.X && i.kg.log(`Could not extract cookies from header ${e}`);
    }
    return [n, r];
}
function A(e) {
    return e.split('; ').reduce((e, t) => {
        let [r, n] = t.split('=');
        return r && n && (e[r] = n), e;
    }, {});
}
function T(e, t, r) {
    var n, a, _, i;
    return (n = e.failedRequestStatusCodes), (a = t), n.some((e) => ('number' == typeof e ? e === a : a >= e[0] && a <= e[1])) && ((_ = e.failedRequestTargets), (i = r), _.some((e) => ('string' == typeof e ? i.includes(e) : e.test(i)))) && !(0, E.W)(r, (0, o.s3)());
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
