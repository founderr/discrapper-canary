r.d(t, {
    k: function () {
        return A;
    }
});
var a = r(151122),
    n = r(263449),
    _ = r(233517),
    o = r(824851),
    E = r(753642),
    i = r(573736),
    c = r(467510),
    s = r(688838),
    l = r(622916),
    I = r(454463),
    u = r(878719),
    R = r(163162);
let A = (0, a._I)((e = {}) => {
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
                        let { stackParser: r, attachStacktrace: a } = N();
                        if ((0, n.s3)() !== e || (0, R.Wz)()) return;
                        let { msg: o, url: E, line: l, column: I, error: A } = t,
                            T = (function (e, t, r, a) {
                                let n = (e.exception = e.exception || {}),
                                    _ = (n.values = n.values || []),
                                    o = (_[0] = _[0] || {}),
                                    E = (o.stacktrace = o.stacktrace || {}),
                                    l = (E.frames = E.frames || []),
                                    I = isNaN(parseInt(a, 10)) ? void 0 : a,
                                    u = isNaN(parseInt(r, 10)) ? void 0 : r,
                                    R = (0, i.HD)(t) && t.length > 0 ? t : (0, c.l4)();
                                return (
                                    0 === l.length &&
                                        l.push({
                                            colno: I,
                                            filename: R,
                                            function: s.Fi,
                                            in_app: !0,
                                            lineno: u
                                        }),
                                    e
                                );
                            })((0, u.ME)(r, A || o, void 0, a, !1), E, l, I);
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
                        (0, E.h)((t) => {
                            let { stackParser: r, attachStacktrace: a } = N();
                            if ((0, n.s3)() !== e || (0, R.Wz)()) return;
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
                                    : (0, u.ME)(r, o, void 0, a, !0);
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
                    T('onunhandledrejection'));
        }
    };
});
function T(e) {
    I.X && l.kg.log(`Global Handler attached: ${e}`);
}
function N() {
    let e = (0, n.s3)();
    return (
        (e && e.getOptions()) || {
            stackParser: () => [],
            attachStacktrace: !1
        }
    );
}
