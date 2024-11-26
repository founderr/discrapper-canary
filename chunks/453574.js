r.d(t, {
    l: function () {
        return R;
    }
});
var a = r(157079),
    n = r(151122),
    _ = r(233517),
    o = r(263449),
    E = r(946471),
    i = r(622916),
    c = r(694043),
    s = r(64685),
    l = r(899517),
    I = r(394798),
    u = r(454463);
let R = (0, n._I)((e = {}) => {
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
                        let { response: a, args: n } = r,
                            [E, i] = n;
                        if (!!a)
                            !(function (e, t, r, a) {
                                if (N(e, r.status, r.url)) {
                                    let e, n, o, E;
                                    let i = (function (e, t) {
                                        return (!t && e instanceof Request) || (e instanceof Request && e.bodyUsed) ? e : new Request(e, t);
                                    })(t, a);
                                    f() && (([e, o] = A('Cookie', i)), ([n, E] = A('Set-Cookie', r)));
                                    let c = d({
                                        url: i.url,
                                        method: i.method,
                                        status: r.status,
                                        requestHeaders: e,
                                        responseHeaders: n,
                                        requestCookies: o,
                                        responseCookies: E
                                    });
                                    (0, _.eN)(c);
                                }
                            })(t, E, a, i);
                    });
            })(e, t),
                (function (e, t) {
                    if ('XMLHttpRequest' in l.n)
                        (0, a.UK)((r) => {
                            if ((0, o.s3)() !== e) return;
                            let n = r.xhr,
                                E = n[a.xU];
                            if (!E) return;
                            let { method: c, request_headers: s } = E;
                            try {
                                !(function (e, t, r, a) {
                                    if (N(e, t.status, t.responseURL)) {
                                        let e, n, o;
                                        if (f()) {
                                            try {
                                                let e = t.getResponseHeader('Set-Cookie') || t.getResponseHeader('set-cookie') || void 0;
                                                e && (n = T(e));
                                            } catch (e) {
                                                u.X && i.kg.log('Could not extract cookies from response headers');
                                            }
                                            try {
                                                o = (function (e) {
                                                    let t = e.getAllResponseHeaders();
                                                    return t
                                                        ? t.split('\r\n').reduce((e, t) => {
                                                              let [r, a] = t.split(': ');
                                                              return r && a && (e[r] = a), e;
                                                          }, {})
                                                        : {};
                                                })(t);
                                            } catch (e) {
                                                u.X && i.kg.log('Could not extract headers from response');
                                            }
                                            e = a;
                                        }
                                        let E = d({
                                            url: t.responseURL,
                                            method: r,
                                            status: t.status,
                                            requestHeaders: e,
                                            responseHeaders: o,
                                            responseCookies: n
                                        });
                                        (0, _.eN)(E);
                                    }
                                })(t, n, c, s);
                            } catch (e) {
                                u.X && i.kg.warn('Error while extracting response event form XHR response', e);
                            }
                        });
                })(e, t);
        }
    };
});
function A(e, t) {
    let r;
    let a = (function (e) {
        let t = {};
        return (
            e.forEach((e, r) => {
                t[r] = e;
            }),
            t
        );
    })(t.headers);
    try {
        let t = a[e] || a[e.toLowerCase()] || void 0;
        t && (r = T(t));
    } catch (t) {
        u.X && i.kg.log(`Could not extract cookies from header ${e}`);
    }
    return [a, r];
}
function T(e) {
    return e.split('; ').reduce((e, t) => {
        let [r, a] = t.split('=');
        return r && a && (e[r] = a), e;
    }, {});
}
function N(e, t, r) {
    var a, n, _, i;
    return (a = e.failedRequestStatusCodes), (n = t), a.some((e) => ('number' == typeof e ? e === n : n >= e[0] && n <= e[1])) && ((_ = e.failedRequestTargets), (i = r), _.some((e) => ('string' == typeof e ? i.includes(e) : e.test(i)))) && !(0, E.W)(r, (0, o.s3)());
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
        (0, I.EG)(r, {
            type: 'http.client',
            handled: !1
        }),
        r
    );
}
function f() {
    let e = (0, o.s3)();
    return !!e && !!e.getOptions().sendDefaultPii;
}
