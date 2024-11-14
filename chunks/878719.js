r.d(t, {
    GJ: function () {
        return c;
    },
    ME: function () {
        return N;
    },
    aB: function () {
        return R;
    },
    dr: function () {
        return I;
    }
});
var n = r(263449),
    a = r(202811),
    _ = r(573736),
    o = r(394798),
    i = r(928541),
    E = r(370336);
function c(e, t) {
    let r = l(e, t),
        n = {
            type: t && t.name,
            value: (function (e) {
                let t = e && e.message;
                return t ? (t.error && 'string' == typeof t.error.message ? t.error.message : t) : 'No error message';
            })(t)
        };
    return r.length && (n.stacktrace = { frames: r }), void 0 === n.type && '' === n.value && (n.value = 'Unrecoverable error caught'), n;
}
function s(e, t) {
    return { exception: { values: [c(e, t)] } };
}
function l(e, t) {
    let r = t.stacktrace || t.stack || '',
        n = (function (e) {
            return e && u.test(e.message) ? 1 : 0;
        })(t),
        a = (function (e) {
            return 'number' == typeof e.framesToPop ? e.framesToPop : 0;
        })(t);
    try {
        return e(r, n, a);
    } catch (e) {}
    return [];
}
let u = /Minified React error #\d+;/i;
function I(e, t, r, n) {
    let a = N(e, t, (r && r.syntheticException) || void 0, n);
    return (0, o.EG)(a), (a.level = 'error'), r && r.event_id && (a.event_id = r.event_id), (0, i.WD)(a);
}
function R(e, t, r = 'info', n, a) {
    let _ = A(e, t, (n && n.syntheticException) || void 0, a);
    return (_.level = r), n && n.event_id && (_.event_id = n.event_id), (0, i.WD)(_);
}
function N(e, t, r, i, u) {
    let I;
    if ((0, _.VW)(t) && t.error) return s(e, t.error);
    if ((0, _.TX)(t) || (0, _.fm)(t)) {
        if ('stack' in t) I = s(e, t);
        else {
            let n = t.name || ((0, _.TX)(t) ? 'DOMError' : 'DOMException'),
                a = t.message ? `${n}: ${t.message}` : n;
            (I = A(e, a, r, i)), (0, o.Db)(I, a);
        }
        return (
            'code' in t &&
                (I.tags = {
                    ...I.tags,
                    'DOMException.code': `${t.code}`
                }),
            I
        );
    }
    return (0, _.VZ)(t)
        ? s(e, t)
        : (0, _.PO)(t) || (0, _.cO)(t)
          ? ((I = (function (e, t, r, o) {
                let i = (0, n.s3)(),
                    s = i && i.getOptions().normalizeDepth,
                    u = (function (e) {
                        for (let t in e)
                            if (Object.prototype.hasOwnProperty.call(e, t)) {
                                let r = e[t];
                                if (r instanceof Error) return r;
                            }
                    })(t),
                    I = { __serialized__: (0, a.Qy)(t, s) };
                if (u)
                    return {
                        exception: { values: [c(e, u)] },
                        extra: I
                    };
                let R = {
                    exception: {
                        values: [
                            {
                                type: (0, _.cO)(t) ? t.constructor.name : o ? 'UnhandledRejection' : 'Error',
                                value: (function (e, { isUnhandledRejection: t }) {
                                    let r = (0, E.zf)(e),
                                        n = t ? 'promise rejection' : 'exception';
                                    if ((0, _.VW)(e)) return `Event \`ErrorEvent\` captured as ${n} with message \`${e.message}\``;
                                    if ((0, _.cO)(e)) {
                                        let t = (function (e) {
                                            try {
                                                let t = Object.getPrototypeOf(e);
                                                return t ? t.constructor.name : void 0;
                                            } catch (e) {}
                                        })(e);
                                        return `Event \`${t}\` (type=${e.type}) captured as ${n}`;
                                    }
                                    return `Object captured as ${n} with keys: ${r}`;
                                })(t, { isUnhandledRejection: o })
                            }
                        ]
                    },
                    extra: I
                };
                if (r) {
                    let t = l(e, r);
                    t.length && (R.exception.values[0].stacktrace = { frames: t });
                }
                return R;
            })(e, t, r, u)),
            (0, o.EG)(I, { synthetic: !0 }),
            I)
          : ((I = A(e, t, r, i)), (0, o.Db)(I, `${t}`, void 0), (0, o.EG)(I, { synthetic: !0 }), I);
}
function A(e, t, r, n) {
    let a = {};
    if (n && r) {
        let n = l(e, r);
        n.length &&
            (a.exception = {
                values: [
                    {
                        value: t,
                        stacktrace: { frames: n }
                    }
                ]
            });
    }
    if ((0, _.Le)(t)) {
        let { __sentry_template_string__: e, __sentry_template_values__: r } = t;
        return (
            (a.logentry = {
                message: e,
                params: r
            }),
            a
        );
    }
    return (a.message = t), a;
}
