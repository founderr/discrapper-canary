r.d(t, {
    z: function () {
        return n;
    }
});
var a = r(263449);
function n(e) {
    if ('boolean' == typeof __SENTRY_TRACING__ && !__SENTRY_TRACING__) return !1;
    let t =
        e ||
        (function () {
            let e = (0, a.s3)();
            return e && e.getOptions();
        })();
    return !!t && (t.enableTracing || 'tracesSampleRate' in t || 'tracesSampler' in t);
}
