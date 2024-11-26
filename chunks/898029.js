r.d(t, {
    E: function () {
        return s;
    }
});
var a = r(573736),
    n = r(202811),
    _ = r(370336),
    o = r(886115),
    E = r(622916),
    i = r(151122),
    c = r(255768);
let s = (0, i._I)((e = {}) => {
    let { depth: t = 3, captureErrorCause: r = !0 } = e;
    return {
        name: 'ExtraErrorData',
        processEvent(e, i, s) {
            let { maxValueLength: l = 250 } = s.getOptions();
            return (function (e, t = {}, r, i, s) {
                if (!t.originalException || !(0, a.VZ)(t.originalException)) return e;
                let l = t.originalException.name || t.originalException.constructor.name,
                    I = (function (e, t, r) {
                        try {
                            let n = ['name', 'message', 'stack', 'line', 'column', 'fileName', 'lineNumber', 'columnNumber', 'toJSON'],
                                _ = {};
                            for (let t of Object.keys(e)) {
                                if (-1 !== n.indexOf(t)) continue;
                                let E = e[t];
                                _[t] = (0, a.VZ)(E) || 'string' == typeof E ? (0, o.$G)(`${E}`, r) : E;
                            }
                            if ((t && void 0 !== e.cause && (_.cause = (0, a.VZ)(e.cause) ? e.cause.toString() : e.cause), 'function' == typeof e.toJSON)) {
                                let t = e.toJSON();
                                for (let e of Object.keys(t)) {
                                    let r = t[e];
                                    _[e] = (0, a.VZ)(r) ? r.toString() : r;
                                }
                            }
                            return _;
                        } catch (e) {
                            c.X && E.kg.error('Unable to extract extra data from the Error object:', e);
                        }
                        return null;
                    })(t.originalException, i, s);
                if (I) {
                    let t = { ...e.contexts },
                        o = (0, n.Fv)(I, r);
                    return (
                        (0, a.PO)(o) && ((0, _.xp)(o, '__sentry_skip_normalization__', !0), (t[l] = o)),
                        {
                            ...e,
                            contexts: t
                        }
                    );
                }
                return e;
            })(e, i, t, r, l);
        }
    };
});
