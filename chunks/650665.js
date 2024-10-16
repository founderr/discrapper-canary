let n, a;
r.d(t, {
    Fv: function () {
        return p;
    },
    Jk: function () {
        return h;
    },
    PR: function () {
        return O;
    },
    f7: function () {
        return D;
    },
    sn: function () {
        return S;
    }
});
var _ = r(696486),
    o = r(152228),
    E = r(988097),
    i = r(241225),
    c = r(101284),
    s = r(467510),
    l = r(622916),
    u = r(873567),
    I = r(665909),
    R = r(395848),
    N = r(501684),
    A = r(108185),
    T = r(896247),
    d = r(416987);
let L = 0,
    f = {};
function O() {
    let e = (0, A.QV)();
    if (e && c.Z1) {
        e.mark && R.m.performance.mark('sentry-tracing-init');
        let t = (function () {
                return (0, N.to)(({ metric: e }) => {
                    let t = e.entries[e.entries.length - 1];
                    if (!t) return;
                    let r = (0, A.XL)(c.Z1),
                        n = (0, A.XL)(t.startTime);
                    I.X && l.kg.log('[Measurements] Adding FID'),
                        (f.fid = {
                            value: e.value,
                            unit: 'millisecond'
                        }),
                        (f['mark.fid'] = {
                            value: r + n,
                            unit: 'second'
                        });
                });
            })(),
            r = (function () {
                return (0, N.PR)(({ metric: e }) => {
                    let t = e.entries[e.entries.length - 1];
                    if (!!t)
                        I.X && l.kg.log('[Measurements] Adding CLS'),
                            (f.cls = {
                                value: e.value,
                                unit: ''
                            }),
                            (a = t);
                }, !0);
            })(),
            _ = (function () {
                return (0, N.$A)(({ metric: e }) => {
                    let t = e.entries[e.entries.length - 1];
                    if (!!t)
                        I.X && l.kg.log('[Measurements] Adding LCP'),
                            (f.lcp = {
                                value: e.value,
                                unit: 'millisecond'
                            }),
                            (n = t);
                }, !0);
            })(),
            o = (function () {
                return (0, N._4)(({ metric: e }) => {
                    if (!!e.entries[e.entries.length - 1])
                        I.X && l.kg.log('[Measurements] Adding TTFB'),
                            (f.ttfb = {
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
    (0, N._j)('longtask', ({ entries: e }) => {
        for (let t of e) {
            if (!(0, _.HN)()) return;
            let e = (0, A.XL)(c.Z1 + t.startTime),
                r = (0, A.XL)(t.duration),
                n = (0, o.qp)({
                    name: 'Main UI thread blocked',
                    op: 'ui.long-task',
                    startTime: e,
                    attributes: { [E.S3]: 'auto.ui.browser.metrics' }
                });
            n && n.end(e + r);
        }
    });
}
function h() {
    new PerformanceObserver((e) => {
        for (let t of e.getEntries()) {
            if (!(0, _.HN)() || !t.scripts[0]) return;
            let e = (0, A.XL)(c.Z1 + t.startTime),
                r = (0, A.XL)(t.duration),
                n = { [E.S3]: 'auto.ui.browser.metrics' },
                a = t.scripts[0];
            if (a) {
                let { invoker: e, invokerType: t, sourceURL: r, sourceFunctionName: _, sourceCharPosition: o } = a;
                (n['browser.script.invoker'] = e), (n['browser.script.invoker_type'] = t), r && (n['code.filepath'] = r), _ && (n['code.function'] = _), -1 !== o && (n['browser.script.source_char_position'] = o);
            }
            let i = (0, o.qp)({
                name: 'Main UI thread blocked',
                op: 'ui.long-animation-frame',
                startTime: e,
                attributes: n
            });
            i && i.end(e + r);
        }
    }).observe({
        type: 'long-animation-frame',
        buffered: !0
    });
}
function S() {
    (0, N._j)('event', ({ entries: e }) => {
        for (let t of e) {
            if (!(0, _.HN)()) return;
            if ('click' === t.name) {
                let e = (0, A.XL)(c.Z1 + t.startTime),
                    r = (0, A.XL)(t.duration),
                    n = {
                        name: (0, s.Rt)(t.target),
                        op: `ui.interaction.${t.name}`,
                        startTime: e,
                        attributes: { [E.S3]: 'auto.ui.browser.metrics' }
                    },
                    a = (0, s.iY)(t.target);
                a && (n.attributes['ui.component_name'] = a);
                let _ = (0, o.qp)(n);
                _ && _.end(e + r);
            }
        }
    });
}
function D(e) {
    let t = (0, A.QV)();
    if (!t || !R.m.performance.getEntries || !c.Z1) return;
    I.X && l.kg.log('[Tracing] Adding & adjusting spans using Performance API');
    let r = (0, A.XL)(c.Z1),
        o = t.getEntries(),
        { op: N, start_timestamp: O } = (0, _.XU)(e);
    if (
        (o.slice(L).forEach((t) => {
            let n = (0, A.XL)(t.startTime),
                a = (0, A.XL)(Math.max(0, t.duration));
            if ('navigation' !== N || !O || !(r + n < O))
                switch (t.entryType) {
                    case 'navigation':
                        (function (e, t, r) {
                            ['unloadEvent', 'redirect', 'domContentLoadedEvent', 'loadEvent', 'connect'].forEach((n) => {
                                C(e, t, n, r);
                            }),
                                C(e, t, 'secureConnection', r, 'TLS/SSL', 'connectEnd'),
                                C(e, t, 'fetch', r, 'cache', 'domainLookupStart'),
                                C(e, t, 'domainLookup', r, 'DNS'),
                                (function (e, t, r) {
                                    let n = r + (0, A.XL)(t.requestStart),
                                        a = r + (0, A.XL)(t.responseEnd),
                                        _ = r + (0, A.XL)(t.responseStart);
                                    t.responseEnd &&
                                        ((0, A.Y)(e, n, a, {
                                            op: 'browser',
                                            name: 'request',
                                            attributes: { [E.S3]: 'auto.ui.browser.metrics' }
                                        }),
                                        (0, A.Y)(e, _, a, {
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
                        (function (e, t, r, n, a) {
                            let _ = (0, T.W)(),
                                o = a + Math.max(r, (0, A.XL)(_ ? _.requestStart : 0)),
                                i = a + r,
                                c = { [E.S3]: 'auto.resource.browser.metrics' };
                            o !== i && ((c['sentry.browser.measure_happened_before_request'] = !0), (c['sentry.browser.measure_start_time'] = o)),
                                (0, A.Y)(e, o, i + n, {
                                    name: t.name,
                                    op: t.entryType,
                                    attributes: c
                                });
                        })(e, t, n, a, r);
                        let _ = (0, d.Y)(),
                            o = t.startTime < _.firstHiddenTime;
                        'first-paint' === t.name &&
                            o &&
                            (I.X && l.kg.log('[Measurements] Adding FP'),
                            (f.fp = {
                                value: t.startTime,
                                unit: 'millisecond'
                            })),
                            'first-contentful-paint' === t.name &&
                                o &&
                                (I.X && l.kg.log('[Measurements] Adding FCP'),
                                (f.fcp = {
                                    value: t.startTime,
                                    unit: 'millisecond'
                                }));
                        break;
                    }
                    case 'resource':
                        (function (e, t, r, n, a, _) {
                            if ('xmlhttprequest' === t.initiatorType || 'fetch' === t.initiatorType) return;
                            let o = (0, u.en)(r),
                                i = { [E.S3]: 'auto.resource.browser.metrics' };
                            g(i, t, 'transferSize', 'http.response_transfer_size'), g(i, t, 'encodedBodySize', 'http.response_content_length'), g(i, t, 'decodedBodySize', 'http.decoded_response_content_length'), 'renderBlockingStatus' in t && (i['resource.render_blocking_status'] = t.renderBlockingStatus), o.protocol && (i['url.scheme'] = o.protocol.split(':').pop()), o.host && (i['server.address'] = o.host), (i['url.same_origin'] = r.includes(R.m.location.origin));
                            let c = _ + n;
                            (0, A.Y)(e, c, c + a, {
                                name: r.replace(R.m.location.origin, ''),
                                op: t.initiatorType ? `resource.${t.initiatorType}` : 'resource.other',
                                attributes: i
                            });
                        })(e, t, t.name, n, a, r);
                }
        }),
        (L = Math.max(o.length - 1, 0)),
        (function (e) {
            let t = R.m.navigator;
            if (!t) return;
            let r = t.connection;
            r &&
                (r.effectiveType && e.setAttribute('effectiveConnectionType', r.effectiveType),
                r.type && e.setAttribute('connectionType', r.type),
                (0, A.nl)(r.rtt) &&
                    (f['connection.rtt'] = {
                        value: r.rtt,
                        unit: 'millisecond'
                    })),
                (0, A.nl)(t.deviceMemory) && e.setAttribute('deviceMemory', `${t.deviceMemory} GB`),
                (0, A.nl)(t.hardwareConcurrency) && e.setAttribute('hardwareConcurrency', String(t.hardwareConcurrency));
        })(e),
        'pageload' === N)
    ) {
        (function (e) {
            let t = (0, T.W)();
            if (!t) return;
            let { responseStart: r, requestStart: n } = t;
            n <= r &&
                (I.X && l.kg.log('[Measurements] Adding TTFB Request Time'),
                (e['ttfb.requestTime'] = {
                    value: r - n,
                    unit: 'millisecond'
                }));
        })(f),
            ['fcp', 'fp', 'lcp'].forEach((e) => {
                let t = f[e];
                if (!t || !O || r >= O) return;
                let n = t.value,
                    a = Math.abs((r + (0, A.XL)(n) - O) * 1000),
                    _ = a - n;
                I.X && l.kg.log(`[Measurements] Normalized ${e} from ${n} to ${a} (${_})`), (t.value = a);
            });
        let t = f['mark.fid'];
        t &&
            f.fid &&
            ((0, A.Y)(e, t.value, t.value + (0, A.XL)(f.fid.value), {
                name: 'first input delay',
                op: 'ui.action',
                attributes: { [E.S3]: 'auto.ui.browser.metrics' }
            }),
            delete f['mark.fid']),
            !('fcp' in f) && delete f.cls,
            Object.entries(f).forEach(([e, t]) => {
                (0, i.o)(e, t.value, t.unit);
            }),
            (function (e) {
                n && (I.X && l.kg.log('[Measurements] Adding LCP Data'), n.element && e.setAttribute('lcp.element', (0, s.Rt)(n.element)), n.id && e.setAttribute('lcp.id', n.id), n.url && e.setAttribute('lcp.url', n.url.trim().slice(0, 200)), e.setAttribute('lcp.size', n.size)), a && a.sources && (I.X && l.kg.log('[Measurements] Adding CLS Data'), a.sources.forEach((t, r) => e.setAttribute(`cls.source.${r + 1}`, (0, s.Rt)(t.node))));
            })(e);
    }
    (n = void 0), (a = void 0), (f = {});
}
function C(e, t, r, n, a, _) {
    let o = _ ? t[_] : t[`${r}End`],
        i = t[`${r}Start`];
    if (!!i && !!o)
        (0, A.Y)(e, n + (0, A.XL)(i), n + (0, A.XL)(o), {
            op: 'browser',
            name: a || r,
            attributes: { [E.S3]: 'auto.ui.browser.metrics' }
        });
}
function g(e, t, r, n) {
    let a = t[r];
    null != a && a < 2147483647 && (e[n] = a);
}
