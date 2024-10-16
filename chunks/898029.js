r.d(t, {
    E: function () {
        return s;
    }
});
var n = r(573736),
    a = r(202811),
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
                if (!t.originalException || !(0, n.VZ)(t.originalException)) return e;
                let l = t.originalException.name || t.originalException.constructor.name,
                    u = (function (e, t, r) {
                        try {
                            let a = ['name', 'message', 'stack', 'line', 'column', 'fileName', 'lineNumber', 'columnNumber', 'toJSON'],
                                _ = {};
                            for (let t of Object.keys(e)) {
                                if (-1 !== a.indexOf(t)) continue;
                                let E = e[t];
                                _[t] = (0, n.VZ)(E) || 'string' == typeof E ? (0, o.$G)(`${E}`, r) : E;
                            }
                            if ((t && void 0 !== e.cause && (_.cause = (0, n.VZ)(e.cause) ? e.cause.toString() : e.cause), 'function' == typeof e.toJSON)) {
                                let t = e.toJSON();
                                for (let e of Object.keys(t)) {
                                    let r = t[e];
                                    _[e] = (0, n.VZ)(r) ? r.toString() : r;
                                }
                            }
                            return _;
                        } catch (e) {
                            c.X && E.kg.error('Unable to extract extra data from the Error object:', e);
                        }
                        return null;
                    })(t.originalException, i, s);
                if (u) {
                    let t = { ...e.contexts },
                        o = (0, a.Fv)(u, r);
                    return (
                        (0, n.PO)(o) && ((0, _.xp)(o, '__sentry_skip_normalization__', !0), (t[l] = o)),
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
