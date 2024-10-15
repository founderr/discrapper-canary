r.d(t, {
    GK: function () {
        return S;
    },
    Iw: function () {
        return P;
    },
    V0: function () {
        return D;
    },
    _d: function () {
        return g;
    },
    qp: function () {
        return h;
    },
    yn: function () {
        return C;
    }
});
var n = r(370541),
    a = r(731889),
    _ = r(622916),
    o = r(356442),
    i = r(263449),
    E = r(833873),
    c = r(255768),
    s = r(988097),
    I = r(366569),
    u = r(73453),
    l = r(99342),
    R = r(696486),
    A = r(305625),
    T = r(966497),
    N = r(787659),
    d = r(789112),
    O = r(275689),
    p = r(793373),
    f = r(881243);
let L = '__SENTRY_SUPPRESS_TRACING__';
function S(e, t) {
    let r = m();
    if (r.startSpan) return r.startSpan(e, t);
    let n = U(e),
        { forceTransaction: a, parentSpan: _ } = e;
    return (0, i.$e)(e.scope, () =>
        b(_)(() => {
            let r = (0, i.nZ)(),
                _ = y(r),
                o =
                    e.onlyIfParent && !_
                        ? new d.b()
                        : M({
                              parentSpan: _,
                              spanArguments: n,
                              forceTransaction: a,
                              scope: r
                          });
            return (
                (0, l.D)(r, o),
                (0, I.i)(
                    () => t(o),
                    () => {
                        let { status: e } = (0, R.XU)(o);
                        o.isRecording() &&
                            (!e || 'ok' === e) &&
                            o.setStatus({
                                code: p.jt,
                                message: 'internal_error'
                            });
                    },
                    () => o.end()
                )
            );
        })
    );
}
function D(e, t) {
    let r = m();
    if (r.startSpanManual) return r.startSpanManual(e, t);
    let n = U(e),
        { forceTransaction: a, parentSpan: _ } = e;
    return (0, i.$e)(e.scope, () =>
        b(_)(() => {
            let r = (0, i.nZ)(),
                _ = y(r),
                o =
                    e.onlyIfParent && !_
                        ? new d.b()
                        : M({
                              parentSpan: _,
                              spanArguments: n,
                              forceTransaction: a,
                              scope: r
                          });
            function E() {
                o.end();
            }
            return (
                (0, l.D)(r, o),
                (0, I.i)(
                    () => t(o, E),
                    () => {
                        let { status: e } = (0, R.XU)(o);
                        o.isRecording() &&
                            (!e || 'ok' === e) &&
                            o.setStatus({
                                code: p.jt,
                                message: 'internal_error'
                            });
                    }
                )
            );
        })
    );
}
function h(e) {
    let t = m();
    if (t.startInactiveSpan) return t.startInactiveSpan(e);
    let r = U(e),
        { forceTransaction: n, parentSpan: a } = e;
    return (e.scope ? (t) => (0, i.$e)(e.scope, t) : void 0 !== a ? (e) => g(a, e) : (e) => e())(() => {
        let t = (0, i.nZ)(),
            a = y(t);
        return e.onlyIfParent && !a
            ? new d.b()
            : M({
                  parentSpan: a,
                  spanArguments: r,
                  forceTransaction: n,
                  scope: t
              });
    });
}
let C = ({ sentryTrace: e, baggage: t }, r) =>
    (0, i.$e)((a) => {
        let _ = (0, n.pT)(e, t);
        return a.setPropagationContext(_), r();
    });
function g(e, t) {
    let r = m();
    return r.withActiveSpan ? r.withActiveSpan(e, t) : (0, i.$e)((r) => ((0, l.D)(r, e || void 0), t(r)));
}
function P(e) {
    return (0, i.$e)((t) => (t.setPropagationContext((0, a.Q)()), c.X && _.kg.info(`Starting a new trace with id ${t.getPropagationContext().traceId}`), g(null, e)));
}
function M({ parentSpan: e, spanArguments: t, forceTransaction: r, scope: n }) {
    let a;
    if (!(0, u.z)()) return new d.b();
    let _ = (0, i.aF)();
    if (e && !r)
        (a = (function (e, t, r) {
            let { spanId: n, traceId: a } = e.spanContext(),
                _ = !t.getScopeData().sdkProcessingMetadata[L] && (0, R.Tt)(e),
                o = _
                    ? new O.s({
                          ...r,
                          parentSpanId: n,
                          traceId: a,
                          sampled: _
                      })
                    : new d.b({ traceId: a });
            (0, R.j5)(e, o);
            let E = (0, i.s3)();
            return E && (E.emit('spanStart', o), r.endTimestamp && E.emit('spanEnd', o)), o;
        })(e, n, t)),
            (0, R.j5)(e, a);
    else if (e) {
        let r = (0, A.jC)(e),
            { traceId: _, spanId: o } = e.spanContext(),
            i = (0, R.Tt)(e);
        (a = G(
            {
                traceId: _,
                parentSpanId: o,
                ...t
            },
            n,
            i
        )),
            (0, A.Lh)(a, r);
    } else {
        let {
            traceId: e,
            dsc: r,
            parentSpanId: o,
            sampled: i
        } = {
            ..._.getPropagationContext(),
            ...n.getPropagationContext()
        };
        (a = G(
            {
                traceId: e,
                parentSpanId: o,
                ...t
            },
            n,
            i
        )),
            r && (0, A.Lh)(a, r);
    }
    return (0, T.Z)(a), (0, f.YJ)(a, n, _), a;
}
function U(e) {
    let t = {
        isStandalone: (e.experimental || {}).standalone,
        ...e
    };
    if (e.startTime) {
        let r = { ...t };
        return (r.startTimestamp = (0, R.$k)(e.startTime)), delete r.startTime, r;
    }
    return t;
}
function m() {
    let e = (0, o.c)();
    return (0, E.G)(e);
}
function G(e, t, r) {
    let n = (0, i.s3)(),
        a = (n && n.getOptions()) || {},
        { name: _ = '', attributes: o } = e,
        [E, c] = t.getScopeData().sdkProcessingMetadata[L]
            ? [!1]
            : (0, N.R)(a, {
                  name: _,
                  parentSampled: r,
                  attributes: o,
                  transactionContext: {
                      name: _,
                      parentSampled: r
                  }
              }),
        I = new O.s({
            ...e,
            attributes: {
                [s.Zj]: 'custom',
                ...e.attributes
            },
            sampled: E
        });
    return void 0 !== c && I.setAttribute(s.TE, c), n && n.emit('spanStart', I), I;
}
function y(e) {
    let t = (0, l.Y)(e);
    if (!t) return;
    let r = (0, i.s3)();
    return (r ? r.getOptions() : {}).parentSpanIsAlwaysRootSpan ? (0, R.Gx)(t) : t;
}
function b(e) {
    return void 0 !== e ? (t) => g(e, t) : (e) => e();
}
