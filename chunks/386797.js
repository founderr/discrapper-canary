r.d(t, {
    S: function () {
        return i;
    }
});
var a = r(151122),
    n = r(899517),
    _ = r(873567),
    o = r(394798);
let E = n.n,
    i = (0, a._I)((e = {}) => {
        let t = null != e.frameContextLines ? e.frameContextLines : 7;
        return {
            name: 'ContextLines',
            processEvent: (e) =>
                (function (e, t) {
                    let r = E.document,
                        a = E.location && (0, _.rt)(E.location.href);
                    if (!r || !a) return e;
                    let n = e.exception && e.exception.values;
                    if (!n || !n.length) return e;
                    let i = r.documentElement.innerHTML;
                    if (!i) return e;
                    let c = ['<!DOCTYPE html>', '<html>', ...i.split('\n'), '</html>'];
                    return (
                        n.forEach((e) => {
                            let r = e.stacktrace;
                            r &&
                                r.frames &&
                                (r.frames = r.frames.map((e) =>
                                    (function (e, t, r, a) {
                                        return e.filename === r && e.lineno && t.length ? ((0, o.go)(t, e, a), e) : e;
                                    })(e, c, a, t)
                                ));
                        }),
                        e
                    );
                })(e, t)
        };
    });
