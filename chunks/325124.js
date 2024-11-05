r.d(t, {
    E8: function () {
        return p;
    },
    Wo: function () {
        return h;
    },
    og: function () {
        return S;
    }
});
var n = r(650665),
    a = r(423850),
    _ = r(393523),
    o = r(553062),
    i = r(859502),
    E = r(988097),
    c = r(263449),
    s = r(696486),
    l = r(305625),
    u = r(622916),
    I = r(370541),
    R = r(101284),
    A = r(731889),
    N = r(467510),
    T = r(454463),
    d = r(163162),
    f = r(119128),
    L = r(799033);
let O = {
        ...o.A,
        instrumentNavigation: !0,
        instrumentPageLoad: !0,
        markBackgroundSpan: !0,
        enableLongTask: !0,
        enableLongAnimationFrame: !1,
        enableInp: !0,
        _experiments: {},
        ...L.k3
    },
    p = (e = {}) => {
        (0, i.a)();
        let {
                enableInp: t,
                enableLongTask: r,
                enableLongAnimationFrame: A,
                _experiments: { enableInteractions: N },
                beforeStartSpan: p,
                idleTimeout: C,
                finalTimeout: g,
                childSpanTimeout: U,
                markBackgroundSpan: P,
                traceFetch: M,
                traceXHR: G,
                shouldCreateSpanForRequest: m,
                enableHTTPTimings: y,
                instrumentPageLoad: b,
                instrumentNavigation: v
            } = {
                ...O,
                ...e
            },
            w = (0, n.PR)();
        t && (0, a.N)(), A && PerformanceObserver.supportedEntryTypes.includes('long-animation-frame') ? (0, n.Jk)() : r && (0, n.Fv)(), N && (0, n.sn)();
        let B = {
            name: void 0,
            source: void 0
        };
        function W(e, t) {
            let r = 'pageload' === t.op,
                a = p ? p(t) : t,
                _ = a.attributes || {};
            t.name !== a.name && ((_[E.Zj] = 'custom'), (a.attributes = _)), (B.name = a.name), (B.source = _[E.Zj]);
            let i = (0, o.R)(a, {
                idleTimeout: C,
                finalTimeout: g,
                childSpanTimeout: U,
                disableAutoFinish: r,
                beforeSpanEnd: (e) => {
                    w(), (0, n.f7)(e);
                }
            });
            function c() {
                ['interactive', 'complete'].includes(d.m9.document.readyState) && e.emit('idleSpanEnableAutoFinish', i);
            }
            return (
                r &&
                    d.m9.document &&
                    (d.m9.document.addEventListener('readystatechange', () => {
                        c();
                    }),
                    c()),
                i
            );
        }
        return {
            name: 'BrowserTracing',
            afterAllSetup(e) {
                let r;
                let n = d.m9.location && d.m9.location.href;
                e.on('startNavigationSpan', (t) => {
                    if ((0, c.s3)() === e)
                        r && !(0, s.XU)(r).timestamp && (T.X && u.kg.log(`[Tracing] Finishing current root span with op: ${(0, s.XU)(r).op}`), r.end()),
                            (r = W(e, {
                                op: 'navigation',
                                ...t
                            }));
                }),
                    e.on('startPageLoadSpan', (t, n = {}) => {
                        if ((0, c.s3)() !== e) return;
                        r && !(0, s.XU)(r).timestamp && (T.X && u.kg.log(`[Tracing] Finishing current root span with op: ${(0, s.XU)(r).op}`), r.end());
                        let a = n.sentryTrace || D('sentry-trace'),
                            _ = n.baggage || D('baggage'),
                            o = (0, I.pT)(a, _);
                        (0, c.nZ)().setPropagationContext(o),
                            (r = W(e, {
                                op: 'pageload',
                                ...t
                            }));
                    }),
                    e.on('spanEnd', (e) => {
                        let t = (0, s.XU)(e).op;
                        if (e !== (0, s.Gx)(e) || ('navigation' !== t && 'pageload' !== t)) return;
                        let r = (0, c.nZ)(),
                            n = r.getPropagationContext();
                        r.setPropagationContext({
                            ...n,
                            sampled: void 0 !== n.sampled ? n.sampled : (0, s.Tt)(e),
                            dsc: n.dsc || (0, l.jC)(e)
                        });
                    }),
                    d.m9.location &&
                        (b &&
                            h(e, {
                                name: d.m9.location.pathname,
                                startTime: R.Z1 ? R.Z1 / 1000 : void 0,
                                attributes: {
                                    [E.Zj]: 'url',
                                    [E.S3]: 'auto.pageload.browser'
                                }
                            }),
                        v &&
                            (0, _.a)(({ to: t, from: r }) => {
                                if (void 0 === r && n && -1 !== n.indexOf(t)) {
                                    n = void 0;
                                    return;
                                }
                                r !== t &&
                                    ((n = void 0),
                                    S(e, {
                                        name: d.m9.location.pathname,
                                        attributes: {
                                            [E.Zj]: 'url',
                                            [E.S3]: 'auto.navigation.browser'
                                        }
                                    }));
                            })),
                    P && (0, f.j)(),
                    N &&
                        (function (e, t, r, n) {
                            let a;
                            d.m9.document &&
                                addEventListener(
                                    'click',
                                    () => {
                                        let _ = 'ui.action.click',
                                            i = (0, s.HN)(),
                                            c = i && (0, s.Gx)(i);
                                        if (c && ['navigation', 'pageload'].includes((0, s.XU)(c).op)) {
                                            T.X && u.kg.warn(`[Tracing] Did not create ${_} span because a pageload or navigation span is in progress.`);
                                            return;
                                        }
                                        if ((a && (a.setAttribute(E.ju, 'interactionInterrupted'), a.end(), (a = void 0)), !n.name)) {
                                            T.X && u.kg.warn(`[Tracing] Did not create ${_} transaction because _latestRouteName is missing.`);
                                            return;
                                        }
                                        a = (0, o.R)(
                                            {
                                                name: n.name,
                                                op: _,
                                                attributes: { [E.Zj]: n.source || 'url' }
                                            },
                                            {
                                                idleTimeout: e,
                                                finalTimeout: t,
                                                childSpanTimeout: r
                                            }
                                        );
                                    },
                                    {
                                        once: !1,
                                        capture: !0
                                    }
                                );
                        })(C, g, U, B),
                    t && (0, a.D)(),
                    (0, L.L7)(e, {
                        traceFetch: M,
                        traceXHR: G,
                        tracePropagationTargets: e.getOptions().tracePropagationTargets,
                        shouldCreateSpanForRequest: m,
                        enableHTTPTimings: y
                    });
            }
        };
    };
function h(e, t, r) {
    e.emit('startPageLoadSpan', t, r), (0, c.nZ)().setTransactionName(t.name);
    let n = (0, s.HN)();
    return 'pageload' === (n && (0, s.XU)(n).op) ? n : void 0;
}
function S(e, t) {
    (0, c.aF)().setPropagationContext((0, A.Q)()), (0, c.nZ)().setPropagationContext((0, A.Q)()), e.emit('startNavigationSpan', t), (0, c.nZ)().setTransactionName(t.name);
    let r = (0, s.HN)();
    return 'navigation' === (r && (0, s.XU)(r).op) ? r : void 0;
}
function D(e) {
    let t = (0, N.qT)(`meta[name=${e}]`);
    return t ? t.getAttribute('content') : void 0;
}
