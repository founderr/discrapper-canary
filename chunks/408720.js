r.d(t, {
    f: function () {
        return L;
    }
});
var n = r(469359),
    a = r(157079),
    _ = r(393523),
    o = r(151122),
    i = r(263449),
    E = r(572299),
    c = r(910731),
    s = r(64685),
    l = r(394798),
    u = r(622916),
    I = r(467510),
    R = r(954211),
    N = r(886115),
    A = r(873567),
    T = r(454463),
    d = r(163162);
let L = (0, o._I)((e = {}) => {
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
                            if ((0, i.s3)() !== e) return;
                            let r = {
                                category: 'console',
                                data: {
                                    arguments: t.args,
                                    logger: 'console'
                                },
                                level: (0, R.V)(t.level),
                                message: (0, N.nK)(t.args, ' ')
                            };
                            if ('assert' === t.level) {
                                if (!1 !== t.args[0]) return;
                                (r.message = `Assertion failed: ${(0, N.nK)(t.args.slice(1), ' ') || 'console.assert'}`), (r.data.arguments = t.args.slice(1));
                            }
                            (0, E.n)(r, {
                                input: t.args,
                                level: t.level
                            });
                        };
                    })(e)
                ),
                t.dom &&
                    (0, n.O)(
                        (function (e, t) {
                            return function (r) {
                                let n, a;
                                if ((0, i.s3)() !== e) return;
                                let _ = 'object' == typeof t ? t.serializeAttribute : void 0,
                                    o = 'object' == typeof t && 'number' == typeof t.maxStringLength ? t.maxStringLength : void 0;
                                o && o > 1024 && (T.X && u.kg.warn(`\`dom.maxStringLength\` cannot exceed 1024, but a value of ${o} was configured. Sentry will use 1024 instead.`), (o = 1024)), 'string' == typeof _ && (_ = [_]);
                                try {
                                    let e = r.event,
                                        t = (function (e) {
                                            return !!e && !!e.target;
                                        })(e)
                                            ? e.target
                                            : e;
                                    (n = (0, I.Rt)(t, {
                                        keyAttrs: _,
                                        maxStringLength: o
                                    })),
                                        (a = (0, I.iY)(t));
                                } catch (e) {
                                    n = '<unknown>';
                                }
                                if (0 === n.length) return;
                                let c = {
                                    category: `ui.${r.name}`,
                                    message: n
                                };
                                a && (c.data = { 'ui.component_name': a }),
                                    (0, E.n)(c, {
                                        event: r.event,
                                        name: r.name,
                                        global: r.global
                                    });
                            };
                        })(e, t.dom)
                    ),
                t.xhr &&
                    (0, a.UK)(
                        (function (e) {
                            return function (t) {
                                if ((0, i.s3)() !== e) return;
                                let { startTimestamp: r, endTimestamp: n } = t,
                                    _ = t.xhr[a.xU];
                                if (!r || !n || !_) return;
                                let { method: o, url: c, status_code: s, body: l } = _,
                                    u = {
                                        xhr: t.xhr,
                                        input: l,
                                        startTimestamp: r,
                                        endTimestamp: n
                                    };
                                (0, E.n)(
                                    {
                                        category: 'xhr',
                                        data: {
                                            method: o,
                                            url: c,
                                            status_code: s
                                        },
                                        type: 'http'
                                    },
                                    u
                                );
                            };
                        })(e)
                    ),
                t.fetch &&
                    (0, s.Uf)(
                        (function (e) {
                            return function (t) {
                                if ((0, i.s3)() !== e) return;
                                let { startTimestamp: r, endTimestamp: n } = t;
                                if (!(!n || (t.fetchData.url.match(/sentry_key/) && 'POST' === t.fetchData.method)))
                                    if (t.error) {
                                        let e = t.fetchData,
                                            a = {
                                                data: t.error,
                                                input: t.args,
                                                startTimestamp: r,
                                                endTimestamp: n
                                            };
                                        (0, E.n)(
                                            {
                                                category: 'fetch',
                                                data: e,
                                                level: 'error',
                                                type: 'http'
                                            },
                                            a
                                        );
                                    } else {
                                        let e = t.response,
                                            a = {
                                                ...t.fetchData,
                                                status_code: e && e.status
                                            },
                                            _ = {
                                                input: t.args,
                                                response: e,
                                                startTimestamp: r,
                                                endTimestamp: n
                                            };
                                        (0, E.n)(
                                            {
                                                category: 'fetch',
                                                data: a,
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
                                if ((0, i.s3)() !== e) return;
                                let r = t.from,
                                    n = t.to,
                                    a = (0, A.en)(d.m9.location.href),
                                    _ = r ? (0, A.en)(r) : void 0,
                                    o = (0, A.en)(n);
                                (!_ || !_.path) && (_ = a),
                                    a.protocol === o.protocol && a.host === o.host && (n = o.relative),
                                    a.protocol === _.protocol && a.host === _.host && (r = _.relative),
                                    (0, E.n)({
                                        category: 'navigation',
                                        data: {
                                            from: r,
                                            to: n
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
                                if ((0, i.s3)() === e)
                                    (0, E.n)(
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
