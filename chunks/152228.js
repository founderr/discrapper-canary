r.d(t, {
    GK: function () {
        return h;
    },
    Iw: function () {
        return g;
    },
    V0: function () {
        return D;
    },
    _d: function () {
        return P;
    },
    qp: function () {
        return S;
    },
    yn: function () {
        return C;
    }
});
var a = r(370541),
    n = r(731889),
    _ = r(622916),
    o = r(356442),
    E = r(263449),
    i = r(833873),
    c = r(255768),
    s = r(988097),
    l = r(366569),
    I = r(73453),
    u = r(99342),
    R = r(696486),
    A = r(305625),
    T = r(966497),
    N = r(787659),
    d = r(789112),
    f = r(275689),
    O = r(793373),
    L = r(881243);
let p = '__SENTRY_SUPPRESS_TRACING__';
function h(e, t) {
    let r = G();
    if (r.startSpan) return r.startSpan(e, t);
    let a = M(e),
        { forceTransaction: n, parentSpan: _ } = e;
    return (0, E.$e)(e.scope, () =>
        b(_)(() => {
            let r = (0, E.nZ)(),
                _ = y(r),
                o =
                    e.onlyIfParent && !_
                        ? new d.b()
                        : U({
                              parentSpan: _,
                              spanArguments: a,
                              forceTransaction: n,
                              scope: r
                          });
            return (
                (0, u.D)(r, o),
                (0, l.i)(
                    () => t(o),
                    () => {
                        let { status: e } = (0, R.XU)(o);
                        o.isRecording() &&
                            (!e || 'ok' === e) &&
                            o.setStatus({
                                code: O.jt,
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
    let r = G();
    if (r.startSpanManual) return r.startSpanManual(e, t);
    let a = M(e),
        { forceTransaction: n, parentSpan: _ } = e;
    return (0, E.$e)(e.scope, () =>
        b(_)(() => {
            let r = (0, E.nZ)(),
                _ = y(r),
                o =
                    e.onlyIfParent && !_
                        ? new d.b()
                        : U({
                              parentSpan: _,
                              spanArguments: a,
                              forceTransaction: n,
                              scope: r
                          });
            function i() {
                o.end();
            }
            return (
                (0, u.D)(r, o),
                (0, l.i)(
                    () => t(o, i),
                    () => {
                        let { status: e } = (0, R.XU)(o);
                        o.isRecording() &&
                            (!e || 'ok' === e) &&
                            o.setStatus({
                                code: O.jt,
                                message: 'internal_error'
                            });
                    }
                )
            );
        })
    );
}
function S(e) {
    let t = G();
    if (t.startInactiveSpan) return t.startInactiveSpan(e);
    let r = M(e),
        { forceTransaction: a, parentSpan: n } = e;
    return (e.scope ? (t) => (0, E.$e)(e.scope, t) : void 0 !== n ? (e) => P(n, e) : (e) => e())(() => {
        let t = (0, E.nZ)(),
            n = y(t);
        return e.onlyIfParent && !n
            ? new d.b()
            : U({
                  parentSpan: n,
                  spanArguments: r,
                  forceTransaction: a,
                  scope: t
              });
    });
}
let C = ({ sentryTrace: e, baggage: t }, r) =>
    (0, E.$e)((n) => {
        let _ = (0, a.pT)(e, t);
        return n.setPropagationContext(_), r();
    });
function P(e, t) {
    let r = G();
    return r.withActiveSpan ? r.withActiveSpan(e, t) : (0, E.$e)((r) => ((0, u.D)(r, e || void 0), t(r)));
}
function g(e) {
    return (0, E.$e)((t) => (t.setPropagationContext((0, n.Q)()), c.X && _.kg.info(`Starting a new trace with id ${t.getPropagationContext().traceId}`), P(null, e)));
}
function U({ parentSpan: e, spanArguments: t, forceTransaction: r, scope: a }) {
    let n;
    if (!(0, I.z)()) return new d.b();
    let _ = (0, E.aF)();
    if (e && !r)
        (n = (function (e, t, r) {
            let { spanId: a, traceId: n } = e.spanContext(),
                _ = !t.getScopeData().sdkProcessingMetadata[p] && (0, R.Tt)(e),
                o = _
                    ? new f.s({
                          ...r,
                          parentSpanId: a,
                          traceId: n,
                          sampled: _
                      })
                    : new d.b({ traceId: n });
            (0, R.j5)(e, o);
            let i = (0, E.s3)();
            return i && (i.emit('spanStart', o), r.endTimestamp && i.emit('spanEnd', o)), o;
        })(e, a, t)),
            (0, R.j5)(e, n);
    else if (e) {
        let r = (0, A.jC)(e),
            { traceId: _, spanId: o } = e.spanContext(),
            E = (0, R.Tt)(e);
        (n = m(
            {
                traceId: _,
                parentSpanId: o,
                ...t
            },
            a,
            E
        )),
            (0, A.Lh)(n, r);
    } else {
        let {
            traceId: e,
            dsc: r,
            parentSpanId: o,
            sampled: E
        } = {
            ..._.getPropagationContext(),
            ...a.getPropagationContext()
        };
        (n = m(
            {
                traceId: e,
                parentSpanId: o,
                ...t
            },
            a,
            E
        )),
            r && (0, A.Lh)(n, r);
    }
    return (0, T.Z)(n), (0, L.YJ)(n, a, _), n;
}
function M(e) {
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
function G() {
    let e = (0, o.c)();
    return (0, i.G)(e);
}
function m(e, t, r) {
    let a = (0, E.s3)(),
        n = (a && a.getOptions()) || {},
        { name: _ = '', attributes: o } = e,
        [i, c] = t.getScopeData().sdkProcessingMetadata[p]
            ? [!1]
            : (0, N.R)(n, {
                  name: _,
                  parentSampled: r,
                  attributes: o,
                  transactionContext: {
                      name: _,
                      parentSampled: r
                  }
              }),
        l = new f.s({
            ...e,
            attributes: {
                [s.Zj]: 'custom',
                ...e.attributes
            },
            sampled: i
        });
    return void 0 !== c && l.setAttribute(s.TE, c), a && a.emit('spanStart', l), l;
}
function y(e) {
    let t = (0, u.Y)(e);
    if (!t) return;
    let r = (0, E.s3)();
    return (r ? r.getOptions() : {}).parentSpanIsAlwaysRootSpan ? (0, R.Gx)(t) : t;
}
function b(e) {
    return void 0 !== e ? (t) => P(e, t) : (e) => e();
}
