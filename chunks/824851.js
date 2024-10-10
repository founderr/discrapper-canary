r.d(t, {
    V: function () {
        return o;
    }
});
var n = r(899517),
    a = r(578346);
let _ = null;
function o(e) {
    let t = 'error';
    (0, a.Hj)(t, e), (0, a.D2)(t, i);
}
function i() {
    (_ = n.n.onerror),
        (n.n.onerror = function (e, t, r, n, o) {
            return (
                (0, a.rK)('error', {
                    column: n,
                    error: o,
                    line: r,
                    msg: e,
                    url: t
                }),
                !!_ && !_.__SENTRY_LOADER__ && _.apply(this, arguments)
            );
        }),
        (n.n.onerror.__SENTRY_INSTRUMENTED__ = !0);
}
