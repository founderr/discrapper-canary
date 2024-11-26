r.d(t, {
    GJ: function () {
        return c;
    },
    ME: function () {
        return A;
    },
    aB: function () {
        return R;
    },
    dr: function () {
        return u;
    }
});
var a = r(263449),
    n = r(202811),
    _ = r(573736),
    o = r(394798),
    E = r(928541),
    i = r(370336);
function c(e, t) {
    let r = l(e, t),
        a = {
            type: t && t.name,
            value: (function (e) {
                let t = e && e.message;
                return t ? (t.error && 'string' == typeof t.error.message ? t.error.message : t) : 'No error message';
            })(t)
        };
    return r.length && (a.stacktrace = { frames: r }), void 0 === a.type && '' === a.value && (a.value = 'Unrecoverable error caught'), a;
}
function s(e, t) {
    return { exception: { values: [c(e, t)] } };
}
function l(e, t) {
    let r = t.stacktrace || t.stack || '',
        a = (function (e) {
            return e && I.test(e.message) ? 1 : 0;
        })(t),
        n = (function (e) {
            return 'number' == typeof e.framesToPop ? e.framesToPop : 0;
        })(t);
    try {
        return e(r, a, n);
    } catch (e) {}
    return [];
}
let I = /Minified React error #\d+;/i;
function u(e, t, r, a) {
    let n = A(e, t, (r && r.syntheticException) || void 0, a);
    return (0, o.EG)(n), (n.level = 'error'), r && r.event_id && (n.event_id = r.event_id), (0, E.WD)(n);
}
function R(e, t, r = 'info', a, n) {
    let _ = T(e, t, (a && a.syntheticException) || void 0, n);
    return (_.level = r), a && a.event_id && (_.event_id = a.event_id), (0, E.WD)(_);
}
function A(e, t, r, E, I) {
    let u;
    if ((0, _.VW)(t) && t.error) return s(e, t.error);
    if ((0, _.TX)(t) || (0, _.fm)(t)) {
        if ('stack' in t) u = s(e, t);
        else {
            let a = t.name || ((0, _.TX)(t) ? 'DOMError' : 'DOMException'),
                n = t.message ? `${a}: ${t.message}` : a;
            (u = T(e, n, r, E)), (0, o.Db)(u, n);
        }
        return (
            'code' in t &&
                (u.tags = {
                    ...u.tags,
                    'DOMException.code': `${t.code}`
                }),
            u
        );
    }
    return (0, _.VZ)(t)
        ? s(e, t)
        : (0, _.PO)(t) || (0, _.cO)(t)
          ? ((u = (function (e, t, r, o) {
                let E = (0, a.s3)(),
                    s = E && E.getOptions().normalizeDepth,
                    I = (function (e) {
                        for (let t in e)
                            if (Object.prototype.hasOwnProperty.call(e, t)) {
                                let r = e[t];
                                if (r instanceof Error) return r;
                            }
                    })(t),
                    u = { __serialized__: (0, n.Qy)(t, s) };
                if (I)
                    return {
                        exception: { values: [c(e, I)] },
                        extra: u
                    };
                let R = {
                    exception: {
                        values: [
                            {
                                type: (0, _.cO)(t) ? t.constructor.name : o ? 'UnhandledRejection' : 'Error',
                                value: (function (e, { isUnhandledRejection: t }) {
                                    let r = (0, i.zf)(e),
                                        a = t ? 'promise rejection' : 'exception';
                                    if ((0, _.VW)(e)) return `Event \`ErrorEvent\` captured as ${a} with message \`${e.message}\``;
                                    if ((0, _.cO)(e)) {
                                        let t = (function (e) {
                                            try {
                                                let t = Object.getPrototypeOf(e);
                                                return t ? t.constructor.name : void 0;
                                            } catch (e) {}
                                        })(e);
                                        return `Event \`${t}\` (type=${e.type}) captured as ${a}`;
                                    }
                                    return `Object captured as ${a} with keys: ${r}`;
                                })(t, { isUnhandledRejection: o })
                            }
                        ]
                    },
                    extra: u
                };
                if (r) {
                    let t = l(e, r);
                    t.length && (R.exception.values[0].stacktrace = { frames: t });
                }
                return R;
            })(e, t, r, I)),
            (0, o.EG)(u, { synthetic: !0 }),
            u)
          : ((u = T(e, t, r, E)), (0, o.Db)(u, `${t}`, void 0), (0, o.EG)(u, { synthetic: !0 }), u);
}
function T(e, t, r, a) {
    let n = {};
    if (a && r) {
        let a = l(e, r);
        a.length &&
            (n.exception = {
                values: [
                    {
                        value: t,
                        stacktrace: { frames: a }
                    }
                ]
            });
    }
    if ((0, _.Le)(t)) {
        let { __sentry_template_string__: e, __sentry_template_values__: r } = t;
        return (
            (n.logentry = {
                message: e,
                params: r
            }),
            n
        );
    }
    return (n.message = t), n;
}
