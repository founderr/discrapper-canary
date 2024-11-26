r.d(t, {
    f: function () {
        return f;
    }
});
var a = r(469359),
    n = r(157079),
    _ = r(393523),
    o = r(151122),
    E = r(263449),
    i = r(572299),
    c = r(910731),
    s = r(64685),
    l = r(394798),
    I = r(622916),
    u = r(467510),
    R = r(954211),
    A = r(886115),
    T = r(873567),
    N = r(454463),
    d = r(163162);
let f = (0, o._I)((e = {}) => {
    let t = {
        console: !0,
        dom: !0,
        fetch: !0,
        history: !0,
        sentry: !0,
        xhr: !0,
        ...e
    };
    return {
        name: 'Breadcrumbs',
        setup(e) {
            t.console &&
                (0, c.e)(
                    (function (e) {
                        return function (t) {
                            if ((0, E.s3)() !== e) return;
                            let r = {
                                category: 'console',
                                data: {
                                    arguments: t.args,
                                    logger: 'console'
                                },
                                level: (0, R.V)(t.level),
                                message: (0, A.nK)(t.args, ' ')
                            };
                            if ('assert' === t.level) {
                                if (!1 !== t.args[0]) return;
                                (r.message = `Assertion failed: ${(0, A.nK)(t.args.slice(1), ' ') || 'console.assert'}`), (r.data.arguments = t.args.slice(1));
                            }
                            (0, i.n)(r, {
                                input: t.args,
                                level: t.level
                            });
                        };
                    })(e)
                ),
                t.dom &&
                    (0, a.O)(
                        (function (e, t) {
                            return function (r) {
                                let a, n;
                                if ((0, E.s3)() !== e) return;
                                let _ = 'object' == typeof t ? t.serializeAttribute : void 0,
                                    o = 'object' == typeof t && 'number' == typeof t.maxStringLength ? t.maxStringLength : void 0;
                                o && o > 1024 && (N.X && I.kg.warn(`\`dom.maxStringLength\` cannot exceed 1024, but a value of ${o} was configured. Sentry will use 1024 instead.`), (o = 1024)), 'string' == typeof _ && (_ = [_]);
                                try {
                                    let e = r.event,
                                        t = (function (e) {
                                            return !!e && !!e.target;
                                        })(e)
                                            ? e.target
                                            : e;
                                    (a = (0, u.Rt)(t, {
                                        keyAttrs: _,
                                        maxStringLength: o
                                    })),
                                        (n = (0, u.iY)(t));
                                } catch (e) {
                                    a = '<unknown>';
                                }
                                if (0 === a.length) return;
                                let c = {
                                    category: `ui.${r.name}`,
                                    message: a
                                };
                                n && (c.data = { 'ui.component_name': n }),
                                    (0, i.n)(c, {
                                        event: r.event,
                                        name: r.name,
                                        global: r.global
                                    });
                            };
                        })(e, t.dom)
                    ),
                t.xhr &&
                    (0, n.UK)(
                        (function (e) {
                            return function (t) {
                                if ((0, E.s3)() !== e) return;
                                let { startTimestamp: r, endTimestamp: a } = t,
                                    _ = t.xhr[n.xU];
                                if (!r || !a || !_) return;
                                let { method: o, url: c, status_code: s, body: l } = _,
                                    I = {
                                        xhr: t.xhr,
                                        input: l,
                                        startTimestamp: r,
                                        endTimestamp: a
                                    };
                                (0, i.n)(
                                    {
                                        category: 'xhr',
                                        data: {
                                            method: o,
                                            url: c,
                                            status_code: s
                                        },
                                        type: 'http'
                                    },
                                    I
                                );
                            };
                        })(e)
                    ),
                t.fetch &&
                    (0, s.Uf)(
                        (function (e) {
                            return function (t) {
                                if ((0, E.s3)() !== e) return;
                                let { startTimestamp: r, endTimestamp: a } = t;
                                if (!(!a || (t.fetchData.url.match(/sentry_key/) && 'POST' === t.fetchData.method)))
                                    if (t.error) {
                                        let e = t.fetchData,
                                            n = {
                                                data: t.error,
                                                input: t.args,
                                                startTimestamp: r,
                                                endTimestamp: a
                                            };
                                        (0, i.n)(
                                            {
                                                category: 'fetch',
                                                data: e,
                                                level: 'error',
                                                type: 'http'
                                            },
                                            n
                                        );
                                    } else {
                                        let e = t.response,
                                            n = {
                                                ...t.fetchData,
                                                status_code: e && e.status
                                            },
                                            _ = {
                                                input: t.args,
                                                response: e,
                                                startTimestamp: r,
                                                endTimestamp: a
                                            };
                                        (0, i.n)(
                                            {
                                                category: 'fetch',
                                                data: n,
                                                type: 'http'
                                            },
                                            _
                                        );
                                    }
                            };
                        })(e)
                    ),
                t.history &&
                    (0, _.a)(
                        (function (e) {
                            return function (t) {
                                if ((0, E.s3)() !== e) return;
                                let r = t.from,
                                    a = t.to,
                                    n = (0, T.en)(d.m9.location.href),
                                    _ = r ? (0, T.en)(r) : void 0,
                                    o = (0, T.en)(a);
                                (!_ || !_.path) && (_ = n),
                                    n.protocol === o.protocol && n.host === o.host && (a = o.relative),
                                    n.protocol === _.protocol && n.host === _.host && (r = _.relative),
                                    (0, i.n)({
                                        category: 'navigation',
                                        data: {
                                            from: r,
                                            to: a
                                        }
                                    });
                            };
                        })(e)
                    ),
                t.sentry &&
                    e.on(
                        'beforeSendEvent',
                        (function (e) {
                            return function (t) {
                                if ((0, E.s3)() === e)
                                    (0, i.n)(
                                        {
                                            category: `sentry.${'transaction' === t.type ? 'transaction' : 'event'}`,
                                            event_id: t.event_id,
                                            level: t.level,
                                            message: (0, l.jH)(t)
                                        },
                                        { event: t }
                                    );
                            };
                        })(e)
                    );
        }
    };
});
