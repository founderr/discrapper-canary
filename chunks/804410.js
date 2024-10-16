r.d(t, {
    k: function () {
        return N;
    }
});
var n = r(151122),
    a = r(263449),
    _ = r(233517),
    o = r(824851),
    E = r(753642),
    i = r(573736),
    c = r(467510),
    s = r(688838),
    l = r(622916),
    u = r(454463),
    I = r(878719),
    R = r(163162);
let N = (0, n._I)((e = {}) => {
    let t = {
        onerror: !0,
        onunhandledrejection: !0,
        ...e
    };
    return {
        name: 'GlobalHandlers',
        setupOnce() {
            Error.stackTraceLimit = 50;
        },
        setup(e) {
            t.onerror &&
                ((function (e) {
                    (0, o.V)((t) => {
                        let { stackParser: r, attachStacktrace: n } = T();
                        if ((0, a.s3)() !== e || (0, R.Wz)()) return;
                        let { msg: o, url: E, line: l, column: u, error: N } = t,
                            A = (function (e, t, r, n) {
                                let a = (e.exception = e.exception || {}),
                                    _ = (a.values = a.values || []),
                                    o = (_[0] = _[0] || {}),
                                    E = (o.stacktrace = o.stacktrace || {}),
                                    l = (E.frames = E.frames || []),
                                    u = isNaN(parseInt(n, 10)) ? void 0 : n,
                                    I = isNaN(parseInt(r, 10)) ? void 0 : r,
                                    R = (0, i.HD)(t) && t.length > 0 ? t : (0, c.l4)();
                                return (
                                    0 === l.length &&
                                        l.push({
                                            colno: u,
                                            filename: R,
                                            function: s.Fi,
                                            in_app: !0,
                                            lineno: I
                                        }),
                                    e
                                );
                            })((0, I.ME)(r, N || o, void 0, n, !1), E, l, u);
                        (A.level = 'error'),
                            (0, _.eN)(A, {
                                originalException: N,
                                mechanism: {
                                    handled: !1,
                                    type: 'onerror'
                                }
                            });
                    });
                })(e),
                A('onerror')),
                t.onunhandledrejection &&
                    ((function (e) {
                        (0, E.h)((t) => {
                            let { stackParser: r, attachStacktrace: n } = T();
                            if ((0, a.s3)() !== e || (0, R.Wz)()) return;
                            let o = (function (e) {
                                    if ((0, i.pt)(e)) return e;
                                    try {
                                        if ('reason' in e) return e.reason;
                                        if ('detail' in e && 'reason' in e.detail) return e.detail.reason;
                                    } catch (e) {}
                                    return e;
                                })(t),
                                E = (0, i.pt)(o)
                                    ? (function (e) {
                                          return {
                                              exception: {
                                                  values: [
                                                      {
                                                          type: 'UnhandledRejection',
                                                          value: `Non-Error promise rejection captured with value: ${String(e)}`
                                                      }
                                                  ]
                                              }
                                          };
                                      })(o)
                                    : (0, I.ME)(r, o, void 0, n, !0);
                            (E.level = 'error'),
                                (0, _.eN)(E, {
                                    originalException: o,
                                    mechanism: {
                                        handled: !1,
                                        type: 'onunhandledrejection'
                                    }
                                });
                        });
                    })(e),
                    A('onunhandledrejection'));
        }
    };
});
function A(e) {
    u.X && l.kg.log(`Global Handler attached: ${e}`);
}
function T() {
    let e = (0, a.s3)();
    return (
        (e && e.getOptions()) || {
            stackParser: () => [],
            attachStacktrace: !1
        }
    );
}
