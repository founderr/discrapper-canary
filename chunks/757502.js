r.d(t, {
    v: function () {
        return o;
    }
});
var a = r(899517),
    n = r(679179),
    _ = r(151122);
let o = (0, _._I)((e = {}) => {
    let t = e.root,
        r = e.prefix || 'app:///',
        _ = 'window' in a.n && void 0 !== a.n.window,
        o =
            e.iteratee ||
            (function ({ isBrowser: e, root: t, prefix: r }) {
                return (a) => {
                    if (!a.filename) return a;
                    let _ = /^[a-zA-Z]:\\/.test(a.filename) || (a.filename.includes('\\') && !a.filename.includes('/')),
                        o = /^\//.test(a.filename);
                    if (e) {
                        if (t) {
                            let e = a.filename;
                            0 === e.indexOf(t) && (a.filename = e.replace(t, r));
                        }
                    } else if (_ || o) {
                        let e = _ ? a.filename.replace(/^[a-zA-Z]:/, '').replace(/\\/g, '/') : a.filename,
                            o = t ? (0, n.Gf)(t, e) : (0, n.EZ)(e);
                        a.filename = `${r}${o}`;
                    }
                    return a;
                };
            })({
                isBrowser: _,
                root: t,
                prefix: r
            });
    return {
        name: 'RewriteFrames',
        processEvent(e) {
            let t = e;
            return (
                e.exception &&
                    Array.isArray(e.exception.values) &&
                    (t = (function (e) {
                        try {
                            return {
                                ...e,
                                exception: {
                                    ...e.exception,
                                    values: e.exception.values.map((e) => ({
                                        ...e,
                                        ...(e.stacktrace && {
                                            stacktrace: (function (e) {
                                                return {
                                                    ...e,
                                                    frames: e && e.frames && e.frames.map((e) => o(e))
                                                };
                                            })(e.stacktrace)
                                        })
                                    }))
                                }
                            };
                        } catch (t) {
                            return e;
                        }
                    })(t)),
                t
            );
        }
    };
});
