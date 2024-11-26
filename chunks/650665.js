let a, n;
r.d(t, {
    Fv: function () {
        return p;
    },
    Jk: function () {
        return h;
    },
    PR: function () {
        return L;
    },
    f7: function () {
        return S;
    },
    sn: function () {
        return D;
    }
});
var _ = r(696486),
    o = r(152228),
    E = r(988097),
    i = r(241225),
    c = r(101284),
    s = r(467510),
    l = r(622916),
    I = r(873567),
    u = r(665909),
    R = r(395848),
    A = r(501684),
    T = r(108185),
    N = r(896247),
    d = r(416987);
let f = 0,
    O = {};
function L() {
    let e = (0, T.QV)();
    if (e && c.Z1) {
        e.mark && R.m.performance.mark('sentry-tracing-init');
        let t = (function () {
                return (0, A.to)(({ metric: e }) => {
                    let t = e.entries[e.entries.length - 1];
                    if (!t) return;
                    let r = (0, T.XL)(c.Z1),
                        a = (0, T.XL)(t.startTime);
                    u.X && l.kg.log('[Measurements] Adding FID'),
                        (O.fid = {
                            value: e.value,
                            unit: 'millisecond'
                        }),
                        (O['mark.fid'] = {
                            value: r + a,
                            unit: 'second'
                        });
                });
            })(),
            r = (function () {
                return (0, A.PR)(({ metric: e }) => {
                    let t = e.entries[e.entries.length - 1];
                    if (!!t)
                        u.X && l.kg.log('[Measurements] Adding CLS'),
                            (O.cls = {
                                value: e.value,
                                unit: ''
                            }),
                            (n = t);
                }, !0);
            })(),
            _ = (function () {
                return (0, A.$A)(({ metric: e }) => {
                    let t = e.entries[e.entries.length - 1];
                    if (!!t)
                        u.X && l.kg.log('[Measurements] Adding LCP'),
                            (O.lcp = {
                                value: e.value,
                                unit: 'millisecond'
                            }),
                            (a = t);
                }, !0);
            })(),
            o = (function () {
                return (0, A._4)(({ metric: e }) => {
                    if (!!e.entries[e.entries.length - 1])
                        u.X && l.kg.log('[Measurements] Adding TTFB'),
                            (O.ttfb = {
                                value: e.value,
                                unit: 'millisecond'
                            });
                });
            })();
        return () => {
            t(), r(), _(), o();
        };
    }
    return () => void 0;
}
function p() {
    (0, A._j)('longtask', ({ entries: e }) => {
        for (let t of e) {
            if (!(0, _.HN)()) return;
            let e = (0, T.XL)(c.Z1 + t.startTime),
                r = (0, T.XL)(t.duration),
                a = (0, o.qp)({
                    name: 'Main UI thread blocked',
                    op: 'ui.long-task',
                    startTime: e,
                    attributes: { [E.S3]: 'auto.ui.browser.metrics' }
                });
            a && a.end(e + r);
        }
    });
}
function h() {
    new PerformanceObserver((e) => {
        for (let t of e.getEntries()) {
            if (!(0, _.HN)() || !t.scripts[0]) return;
            let e = (0, T.XL)(c.Z1 + t.startTime),
                r = (0, T.XL)(t.duration),
                a = { [E.S3]: 'auto.ui.browser.metrics' },
                n = t.scripts[0];
            if (n) {
                let { invoker: e, invokerType: t, sourceURL: r, sourceFunctionName: _, sourceCharPosition: o } = n;
                (a['browser.script.invoker'] = e), (a['browser.script.invoker_type'] = t), r && (a['code.filepath'] = r), _ && (a['code.function'] = _), -1 !== o && (a['browser.script.source_char_position'] = o);
            }
            let i = (0, o.qp)({
                name: 'Main UI thread blocked',
                op: 'ui.long-animation-frame',
                startTime: e,
                attributes: a
            });
            i && i.end(e + r);
        }
    }).observe({
        type: 'long-animation-frame',
        buffered: !0
    });
}
function D() {
    (0, A._j)('event', ({ entries: e }) => {
        for (let t of e) {
            if (!(0, _.HN)()) return;
            if ('click' === t.name) {
                let e = (0, T.XL)(c.Z1 + t.startTime),
                    r = (0, T.XL)(t.duration),
                    a = {
                        name: (0, s.Rt)(t.target),
                        op: `ui.interaction.${t.name}`,
                        startTime: e,
                        attributes: { [E.S3]: 'auto.ui.browser.metrics' }
                    },
                    n = (0, s.iY)(t.target);
                n && (a.attributes['ui.component_name'] = n);
                let _ = (0, o.qp)(a);
                _ && _.end(e + r);
            }
        }
    });
}
function S(e) {
    let t = (0, T.QV)();
    if (!t || !R.m.performance.getEntries || !c.Z1) return;
    u.X && l.kg.log('[Tracing] Adding & adjusting spans using Performance API');
    let r = (0, T.XL)(c.Z1),
        o = t.getEntries(),
        { op: A, start_timestamp: L } = (0, _.XU)(e);
    if (
        (o.slice(f).forEach((t) => {
            let a = (0, T.XL)(t.startTime),
                n = (0, T.XL)(Math.max(0, t.duration));
            if ('navigation' !== A || !L || !(r + a < L))
                switch (t.entryType) {
                    case 'navigation':
                        (function (e, t, r) {
                            ['unloadEvent', 'redirect', 'domContentLoadedEvent', 'loadEvent', 'connect'].forEach((a) => {
                                C(e, t, a, r);
                            }),
                                C(e, t, 'secureConnection', r, 'TLS/SSL', 'connectEnd'),
                                C(e, t, 'fetch', r, 'cache', 'domainLookupStart'),
                                C(e, t, 'domainLookup', r, 'DNS'),
                                (function (e, t, r) {
                                    let a = r + (0, T.XL)(t.requestStart),
                                        n = r + (0, T.XL)(t.responseEnd),
                                        _ = r + (0, T.XL)(t.responseStart);
                                    t.responseEnd &&
                                        ((0, T.Y)(e, a, n, {
                                            op: 'browser',
                                            name: 'request',
                                            attributes: { [E.S3]: 'auto.ui.browser.metrics' }
                                        }),
                                        (0, T.Y)(e, _, n, {
                                            op: 'browser',
                                            name: 'response',
                                            attributes: { [E.S3]: 'auto.ui.browser.metrics' }
                                        }));
                                })(e, t, r);
                        })(e, t, r);
                        break;
                    case 'mark':
                    case 'paint':
                    case 'measure': {
                        (function (e, t, r, a, n) {
                            let _ = (0, N.W)(),
                                o = n + Math.max(r, (0, T.XL)(_ ? _.requestStart : 0)),
                                i = n + r,
                                c = { [E.S3]: 'auto.resource.browser.metrics' };
                            o !== i && ((c['sentry.browser.measure_happened_before_request'] = !0), (c['sentry.browser.measure_start_time'] = o)),
                                (0, T.Y)(e, o, i + a, {
                                    name: t.name,
                                    op: t.entryType,
                                    attributes: c
                                });
                        })(e, t, a, n, r);
                        let _ = (0, d.Y)(),
                            o = t.startTime < _.firstHiddenTime;
                        'first-paint' === t.name &&
                            o &&
                            (u.X && l.kg.log('[Measurements] Adding FP'),
                            (O.fp = {
                                value: t.startTime,
                                unit: 'millisecond'
                            })),
                            'first-contentful-paint' === t.name &&
                                o &&
                                (u.X && l.kg.log('[Measurements] Adding FCP'),
                                (O.fcp = {
                                    value: t.startTime,
                                    unit: 'millisecond'
                                }));
                        break;
                    }
                    case 'resource':
                        (function (e, t, r, a, n, _) {
                            if ('xmlhttprequest' === t.initiatorType || 'fetch' === t.initiatorType) return;
                            let o = (0, I.en)(r),
                                i = { [E.S3]: 'auto.resource.browser.metrics' };
                            P(i, t, 'transferSize', 'http.response_transfer_size'), P(i, t, 'encodedBodySize', 'http.response_content_length'), P(i, t, 'decodedBodySize', 'http.decoded_response_content_length'), 'renderBlockingStatus' in t && (i['resource.render_blocking_status'] = t.renderBlockingStatus), o.protocol && (i['url.scheme'] = o.protocol.split(':').pop()), o.host && (i['server.address'] = o.host), (i['url.same_origin'] = r.includes(R.m.location.origin));
                            let c = _ + a;
                            (0, T.Y)(e, c, c + n, {
                                name: r.replace(R.m.location.origin, ''),
                                op: t.initiatorType ? `resource.${t.initiatorType}` : 'resource.other',
                                attributes: i
                            });
                        })(e, t, t.name, a, n, r);
                }
        }),
        (f = Math.max(o.length - 1, 0)),
        (function (e) {
            let t = R.m.navigator;
            if (!t) return;
            let r = t.connection;
            r &&
                (r.effectiveType && e.setAttribute('effectiveConnectionType', r.effectiveType),
                r.type && e.setAttribute('connectionType', r.type),
                (0, T.nl)(r.rtt) &&
                    (O['connection.rtt'] = {
                        value: r.rtt,
                        unit: 'millisecond'
                    })),
                (0, T.nl)(t.deviceMemory) && e.setAttribute('deviceMemory', `${t.deviceMemory} GB`),
                (0, T.nl)(t.hardwareConcurrency) && e.setAttribute('hardwareConcurrency', String(t.hardwareConcurrency));
        })(e),
        'pageload' === A)
    ) {
        (function (e) {
            let t = (0, N.W)();
            if (!t) return;
            let { responseStart: r, requestStart: a } = t;
            a <= r &&
                (u.X && l.kg.log('[Measurements] Adding TTFB Request Time'),
                (e['ttfb.requestTime'] = {
                    value: r - a,
                    unit: 'millisecond'
                }));
        })(O),
            ['fcp', 'fp', 'lcp'].forEach((e) => {
                let t = O[e];
                if (!t || !L || r >= L) return;
                let a = t.value,
                    n = Math.abs((r + (0, T.XL)(a) - L) * 1000),
                    _ = n - a;
                u.X && l.kg.log(`[Measurements] Normalized ${e} from ${a} to ${n} (${_})`), (t.value = n);
            });
        let t = O['mark.fid'];
        t &&
            O.fid &&
            ((0, T.Y)(e, t.value, t.value + (0, T.XL)(O.fid.value), {
                name: 'first input delay',
                op: 'ui.action',
                attributes: { [E.S3]: 'auto.ui.browser.metrics' }
            }),
            delete O['mark.fid']),
            !('fcp' in O) && delete O.cls,
            Object.entries(O).forEach(([e, t]) => {
                (0, i.o)(e, t.value, t.unit);
            }),
            (function (e) {
                a && (u.X && l.kg.log('[Measurements] Adding LCP Data'), a.element && e.setAttribute('lcp.element', (0, s.Rt)(a.element)), a.id && e.setAttribute('lcp.id', a.id), a.url && e.setAttribute('lcp.url', a.url.trim().slice(0, 200)), e.setAttribute('lcp.size', a.size)), n && n.sources && (u.X && l.kg.log('[Measurements] Adding CLS Data'), n.sources.forEach((t, r) => e.setAttribute(`cls.source.${r + 1}`, (0, s.Rt)(t.node))));
            })(e);
    }
    (a = void 0), (n = void 0), (O = {});
}
function C(e, t, r, a, n, _) {
    let o = _ ? t[_] : t[`${r}End`],
        i = t[`${r}Start`];
    if (!!i && !!o)
        (0, T.Y)(e, a + (0, T.XL)(i), a + (0, T.XL)(o), {
            op: 'browser',
            name: n || r,
            attributes: { [E.S3]: 'auto.ui.browser.metrics' }
        });
}
function P(e, t, r, a) {
    let n = t[r];
    null != n && n < 2147483647 && (e[a] = n);
}
