r.d(t, {
    V: function () {
        return o;
    }
});
var a = r(899517),
    n = r(578346);
let _ = null;
function o(e) {
    let t = 'error';
    (0, n.Hj)(t, e), (0, n.D2)(t, E);
}
function E() {
    (_ = a.n.onerror),
        (a.n.onerror = function (e, t, r, a, o) {
            return (
                (0, n.rK)('error', {
                    column: a,
                    error: o,
                    line: r,
                    msg: e,
                    url: t
                }),
                !!_ && !_.__SENTRY_LOADER__ && _.apply(this, arguments)
            );
        }),
        (a.n.onerror.__SENTRY_INSTRUMENTED__ = !0);
}
