r.d(t, {
    h: function () {
        return o;
    }
});
var a = r(899517),
    n = r(578346);
let _ = null;
function o(e) {
    let t = 'unhandledrejection';
    (0, n.Hj)(t, e), (0, n.D2)(t, E);
}
function E() {
    (_ = a.n.onunhandledrejection),
        (a.n.onunhandledrejection = function (e) {
            return (0, n.rK)('unhandledrejection', e), !_ || !!_.__SENTRY_LOADER__ || _.apply(this, arguments);
        }),
        (a.n.onunhandledrejection.__SENTRY_INSTRUMENTED__ = !0);
}
