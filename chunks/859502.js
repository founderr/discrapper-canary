r.d(t, {
    a: function () {
        return s;
    }
});
var n = r(824851),
    a = r(753642),
    _ = r(622916),
    o = r(255768),
    i = r(696486),
    E = r(793373);
let c = !1;
function s() {
    if (!c) (c = !0), (0, n.V)(l), (0, a.h)(l);
}
function l() {
    let e = (0, i.HN)(),
        t = e && (0, i.Gx)(e);
    if (t) {
        let e = 'internal_error';
        o.X && _.kg.log(`[Tracing] Root span: ${e} -> Global error occured`),
            t.setStatus({
                code: E.jt,
                message: e
            });
    }
}
l.tag = 'sentry_tracingErrorCallback';
