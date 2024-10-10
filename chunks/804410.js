r.d(t, {
    k: function () {
        return A;
    }
});
var n = r(151122),
    a = r(263449),
    _ = r(233517),
    o = r(824851),
    i = r(753642),
    E = r(573736),
    c = r(467510),
    s = r(688838),
    I = r(622916),
    u = r(454463),
    l = r(878719),
    R = r(163162);
let A = (0, n._I)((e = {}) => {
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
                        let { stackParser: r, attachStacktrace: n } = N();
                        if ((0, a.s3)() !== e || (0, R.Wz)()) return;
                        let { msg: o, url: i, line: I, column: u, error: A } = t,
                            T = (function (e, t, r, n) {
                                let a = (e.exception = e.exception || {}),
                                    _ = (a.values = a.values || []),
                                    o = (_[0] = _[0] || {}),
                                    i = (o.stacktrace = o.stacktrace || {}),
                                    I = (i.frames = i.frames || []),
                                    u = isNaN(parseInt(n, 10)) ? void 0 : n,
                                    l = isNaN(parseInt(r, 10)) ? void 0 : r,
                                    R = (0, E.HD)(t) && t.length > 0 ? t : (0, c.l4)();
                                return (
                                    0 === I.length &&
                                        I.push({
                                            colno: u,
                                            filename: R,
                                            function: s.Fi,
                                            in_app: !0,
                                            lineno: l
                                        }),
                                    e
                                );
                            })((0, l.ME)(r, A || o, void 0, n, !1), i, I, u);
                        (T.level = 'error'),
                            (0, _.eN)(T, {
                                originalException: A,
                                mechanism: {
                                    handled: !1,
                                    type: 'onerror'
                                }
                            });
                    });
                })(e),
                T('onerror')),
                t.onunhandledrejection &&
                    ((function (e) {
                        (0, i.h)((t) => {
                            let { stackParser: r, attachStacktrace: n } = N();
                            if ((0, a.s3)() !== e || (0, R.Wz)()) return;
                            let o = (function (e) {
                                    if ((0, E.pt)(e)) return e;
                                    try {
                                        if ('reason' in e) return e.reason;
                                        if ('detail' in e && 'reason' in e.detail) return e.detail.reason;
                                    } catch (e) {}
                                    return e;
                                })(t),
                                i = (0, E.pt)(o)
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
                                    : (0, l.ME)(r, o, void 0, n, !0);
                            (i.level = 'error'),
                                (0, _.eN)(i, {
                                    originalException: o,
                                    mechanism: {
                                        handled: !1,
                                        type: 'onunhandledrejection'
                                    }
                                });
                        });
                    })(e),
                    T('onunhandledrejection'));
        }
    };
});
function T(e) {
    u.X && I.kg.log(`Global Handler attached: ${e}`);
}
function N() {
    let e = (0, a.s3)();
    return (
        (e && e.getOptions()) || {
            stackParser: () => [],
            attachStacktrace: !1
        }
    );
}
