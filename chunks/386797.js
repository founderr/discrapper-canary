r.d(t, {
    S: function () {
        return i;
    }
});
var n = r(151122),
    a = r(899517),
    _ = r(873567),
    o = r(394798);
let E = a.n,
    i = (0, n._I)((e = {}) => {
        let t = null != e.frameContextLines ? e.frameContextLines : 7;
        return {
            name: 'ContextLines',
            processEvent: (e) =>
                (function (e, t) {
                    let r = E.document,
                        n = E.location && (0, _.rt)(E.location.href);
                    if (!r || !n) return e;
                    let a = e.exception && e.exception.values;
                    if (!a || !a.length) return e;
                    let i = r.documentElement.innerHTML;
                    if (!i) return e;
                    let c = ['<!DOCTYPE html>', '<html>', ...i.split('\n'), '</html>'];
                    return (
                        a.forEach((e) => {
                            let r = e.stacktrace;
                            r &&
                                r.frames &&
                                (r.frames = r.frames.map((e) =>
                                    (function (e, t, r, n) {
                                        return e.filename === r && e.lineno && t.length ? ((0, o.go)(t, e, n), e) : e;
                                    })(e, c, n, t)
                                ));
                        }),
                        e
                    );
                })(e, t)
        };
    });
