r.d(t, {
    E8: function () {
        return p;
    },
    Wo: function () {
        return h;
    },
    og: function () {
        return D;
    }
});
var a = r(650665),
    n = r(423850),
    _ = r(393523),
    o = r(553062),
    E = r(859502),
    i = r(988097),
    c = r(263449),
    s = r(696486),
    l = r(305625),
    I = r(622916),
    u = r(370541),
    R = r(101284),
    A = r(731889),
    T = r(467510),
    N = r(454463),
    d = r(163162),
    f = r(119128),
    O = r(799033);
let L = {
        ...o.A,
        instrumentNavigation: !0,
        instrumentPageLoad: !0,
        markBackgroundSpan: !0,
        enableLongTask: !0,
        enableLongAnimationFrame: !1,
        enableInp: !0,
        _experiments: {},
        ...O.k3
    },
    p = (e = {}) => {
        (0, E.a)();
        let {
                enableInp: t,
                enableLongTask: r,
                enableLongAnimationFrame: A,
                _experiments: { enableInteractions: T },
                beforeStartSpan: p,
                idleTimeout: C,
                finalTimeout: P,
                childSpanTimeout: g,
                markBackgroundSpan: U,
                traceFetch: M,
                traceXHR: G,
                shouldCreateSpanForRequest: m,
                enableHTTPTimings: y,
                instrumentPageLoad: b,
                instrumentNavigation: v
            } = {
                ...L,
                ...e
            },
            w = (0, a.PR)();
        t && (0, n.N)(), A && PerformanceObserver.supportedEntryTypes.includes('long-animation-frame') ? (0, a.Jk)() : r && (0, a.Fv)(), T && (0, a.sn)();
        let B = {
            name: void 0,
            source: void 0
        };
        function W(e, t) {
            let r = 'pageload' === t.op,
                n = p ? p(t) : t,
                _ = n.attributes || {};
            t.name !== n.name && ((_[i.Zj] = 'custom'), (n.attributes = _)), (B.name = n.name), (B.source = _[i.Zj]);
            let E = (0, o.R)(n, {
                idleTimeout: C,
                finalTimeout: P,
                childSpanTimeout: g,
                disableAutoFinish: r,
                beforeSpanEnd: (e) => {
                    w(), (0, a.f7)(e);
                }
            });
            function c() {
                ['interactive', 'complete'].includes(d.m9.document.readyState) && e.emit('idleSpanEnableAutoFinish', E);
            }
            return (
                r &&
                    d.m9.document &&
                    (d.m9.document.addEventListener('readystatechange', () => {
                        c();
                    }),
                    c()),
                E
            );
        }
        return {
            name: 'BrowserTracing',
            afterAllSetup(e) {
                let r;
                let a = d.m9.location && d.m9.location.href;
                e.on('startNavigationSpan', (t) => {
                    if ((0, c.s3)() === e)
                        r && !(0, s.XU)(r).timestamp && (N.X && I.kg.log(`[Tracing] Finishing current root span with op: ${(0, s.XU)(r).op}`), r.end()),
                            (r = W(e, {
                                op: 'navigation',
                                ...t
                            }));
                }),
                    e.on('startPageLoadSpan', (t, a = {}) => {
                        if ((0, c.s3)() !== e) return;
                        r && !(0, s.XU)(r).timestamp && (N.X && I.kg.log(`[Tracing] Finishing current root span with op: ${(0, s.XU)(r).op}`), r.end());
                        let n = a.sentryTrace || S('sentry-trace'),
                            _ = a.baggage || S('baggage'),
                            o = (0, u.pT)(n, _);
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
                            a = r.getPropagationContext();
                        r.setPropagationContext({
                            ...a,
                            sampled: void 0 !== a.sampled ? a.sampled : (0, s.Tt)(e),
                            dsc: a.dsc || (0, l.jC)(e)
                        });
                    }),
                    d.m9.location &&
                        (b &&
                            h(e, {
                                name: d.m9.location.pathname,
                                startTime: R.Z1 ? R.Z1 / 1000 : void 0,
                                attributes: {
                                    [i.Zj]: 'url',
                                    [i.S3]: 'auto.pageload.browser'
                                }
                            }),
                        v &&
                            (0, _.a)(({ to: t, from: r }) => {
                                if (void 0 === r && a && -1 !== a.indexOf(t)) {
                                    a = void 0;
                                    return;
                                }
                                r !== t &&
                                    ((a = void 0),
                                    D(e, {
                                        name: d.m9.location.pathname,
                                        attributes: {
                                            [i.Zj]: 'url',
                                            [i.S3]: 'auto.navigation.browser'
                                        }
                                    }));
                            })),
                    U && (0, f.j)(),
                    T &&
                        (function (e, t, r, a) {
                            let n;
                            d.m9.document &&
                                addEventListener(
                                    'click',
                                    () => {
                                        let _ = 'ui.action.click',
                                            E = (0, s.HN)(),
                                            c = E && (0, s.Gx)(E);
                                        if (c && ['navigation', 'pageload'].includes((0, s.XU)(c).op)) {
                                            N.X && I.kg.warn(`[Tracing] Did not create ${_} span because a pageload or navigation span is in progress.`);
                                            return;
                                        }
                                        if ((n && (n.setAttribute(i.ju, 'interactionInterrupted'), n.end(), (n = void 0)), !a.name)) {
                                            N.X && I.kg.warn(`[Tracing] Did not create ${_} transaction because _latestRouteName is missing.`);
                                            return;
                                        }
                                        n = (0, o.R)(
                                            {
                                                name: a.name,
                                                op: _,
                                                attributes: { [i.Zj]: a.source || 'url' }
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
                        })(C, P, g, B),
                    t && (0, n.D)(),
                    (0, O.L7)(e, {
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
    let a = (0, s.HN)();
    return 'pageload' === (a && (0, s.XU)(a).op) ? a : void 0;
}
function D(e, t) {
    (0, c.aF)().setPropagationContext((0, A.Q)()), (0, c.nZ)().setPropagationContext((0, A.Q)()), e.emit('startNavigationSpan', t), (0, c.nZ)().setTransactionName(t.name);
    let r = (0, s.HN)();
    return 'navigation' === (r && (0, s.XU)(r).op) ? r : void 0;
}
function S(e) {
    let t = (0, T.qT)(`meta[name=${e}]`);
    return t ? t.getAttribute('content') : void 0;
}
