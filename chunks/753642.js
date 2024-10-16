r.d(t, {
    h: function () {
        return o;
    }
});
var n = r(899517),
    a = r(578346);
let _ = null;
function o(e) {
    let t = 'unhandledrejection';
    (0, a.Hj)(t, e), (0, a.D2)(t, E);
}
function E() {
    (_ = n.n.onunhandledrejection),
        (n.n.onunhandledrejection = function (e) {
            return (0, a.rK)('unhandledrejection', e), !_ || !!_.__SENTRY_LOADER__ || _.apply(this, arguments);
        }),
        (n.n.onunhandledrejection.__SENTRY_INSTRUMENTED__ = !0);
}
