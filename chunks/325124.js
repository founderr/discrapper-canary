r.d(t, {
    E8: function () {
        return L;
    },
    Wo: function () {
        return S;
    },
    og: function () {
        return D;
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
    I = r(305625),
    u = r(622916),
    l = r(370541),
    R = r(101284),
    A = r(731889),
    T = r(467510),
    N = r(454463),
    d = r(163162),
    O = r(119128),
    p = r(799033);
let f = {
        ...o.A,
        instrumentNavigation: !0,
        instrumentPageLoad: !0,
        markBackgroundSpan: !0,
        enableLongTask: !0,
        enableLongAnimationFrame: !1,
        enableInp: !0,
        _experiments: {},
        ...p.k3
    },
    L = (e = {}) => {
        (0, i.a)();
        let {
                enableInp: t,
                enableLongTask: r,
                enableLongAnimationFrame: A,
                _experiments: { enableInteractions: T },
                beforeStartSpan: L,
                idleTimeout: C,
                finalTimeout: g,
                childSpanTimeout: M,
                markBackgroundSpan: P,
                traceFetch: U,
                traceXHR: m,
                shouldCreateSpanForRequest: G,
                enableHTTPTimings: y,
                instrumentPageLoad: b,
                instrumentNavigation: v
            } = {
                ...f,
                ...e
            },
            B = (0, n.PR)();
        t && (0, a.N)(), A && PerformanceObserver.supportedEntryTypes.includes('long-animation-frame') ? (0, n.Jk)() : r && (0, n.Fv)(), T && (0, n.sn)();
        let w = {
            name: void 0,
            source: void 0
        };
        function H(e, t) {
            let r = 'pageload' === t.op,
                a = L ? L(t) : t,
                _ = a.attributes || {};
            t.name !== a.name && ((_[E.Zj] = 'custom'), (a.attributes = _)), (w.name = a.name), (w.source = _[E.Zj]);
            let i = (0, o.R)(a, {
                idleTimeout: C,
                finalTimeout: g,
                childSpanTimeout: M,
                disableAutoFinish: r,
                beforeSpanEnd: (e) => {
                    B(), (0, n.f7)(e);
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
                        r && !(0, s.XU)(r).timestamp && (N.X && u.kg.log(`[Tracing] Finishing current root span with op: ${(0, s.XU)(r).op}`), r.end()),
                            (r = H(e, {
                                op: 'navigation',
                                ...t
                            }));
                }),
                    e.on('startPageLoadSpan', (t, n = {}) => {
                        if ((0, c.s3)() !== e) return;
                        r && !(0, s.XU)(r).timestamp && (N.X && u.kg.log(`[Tracing] Finishing current root span with op: ${(0, s.XU)(r).op}`), r.end());
                        let a = n.sentryTrace || h('sentry-trace'),
                            _ = n.baggage || h('baggage'),
                            o = (0, l.pT)(a, _);
                        (0, c.nZ)().setPropagationContext(o),
                            (r = H(e, {
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
                            dsc: n.dsc || (0, I.jC)(e)
                        });
                    }),
                    d.m9.location &&
                        (b &&
                            S(e, {
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
                                    D(e, {
                                        name: d.m9.location.pathname,
                                        attributes: {
                                            [E.Zj]: 'url',
                                            [E.S3]: 'auto.navigation.browser'
                                        }
                                    }));
                            })),
                    P && (0, O.j)(),
                    T &&
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
                                            N.X && u.kg.warn(`[Tracing] Did not create ${_} span because a pageload or navigation span is in progress.`);
                                            return;
                                        }
                                        if ((a && (a.setAttribute(E.ju, 'interactionInterrupted'), a.end(), (a = void 0)), !n.name)) {
                                            N.X && u.kg.warn(`[Tracing] Did not create ${_} transaction because _latestRouteName is missing.`);
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
                        })(C, g, M, w),
                    t && (0, a.D)(),
                    (0, p.L7)(e, {
                        traceFetch: U,
                        traceXHR: m,
                        tracePropagationTargets: e.getOptions().tracePropagationTargets,
                        shouldCreateSpanForRequest: G,
                        enableHTTPTimings: y
                    });
            }
        };
    };
function S(e, t, r) {
    e.emit('startPageLoadSpan', t, r), (0, c.nZ)().setTransactionName(t.name);
    let n = (0, s.HN)();
    return 'pageload' === (n && (0, s.XU)(n).op) ? n : void 0;
}
function D(e, t) {
    (0, c.aF)().setPropagationContext((0, A.Q)()), (0, c.nZ)().setPropagationContext((0, A.Q)()), e.emit('startNavigationSpan', t), (0, c.nZ)().setTransactionName(t.name);
    let r = (0, s.HN)();
    return 'navigation' === (r && (0, s.XU)(r).op) ? r : void 0;
}
function h(e) {
    let t = (0, T.qT)(`meta[name=${e}]`);
    return t ? t.getAttribute('content') : void 0;
}
